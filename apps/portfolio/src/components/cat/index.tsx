import { useCallback, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { CatContainer, CatSpinner } from '../3d-loader';
import loadGLTFModel from '../../lib/model';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

function easeOutCirc(x: number) {
  return Math.sqrt(1 - (x - 1) ** 4);
}

const Cat = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const refRenderer = useRef<any>(null);
  const urlDogGLB = `/cat_cafe_diorama.glb`;

  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer;
    const { current: container } = refContainer;
    if (container && renderer) {
      const scW = refContainer?.current?.clientWidth;
      const scH = refContainer?.current?.clientHeight;

      renderer?.setSize(scW, scH);
    }
  }, []);

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    const { current: container } = refContainer;
    if (container) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      renderer.outputEncoding = THREE.sRGBEncoding;
      container.appendChild(renderer.domElement);
      refRenderer.current = renderer;
      const scene = new THREE.Scene();

      const target = new THREE.Vector3(-0.5, 4.2, 0);
      const initialCameraPosition = new THREE.Vector3(20 * Math.sin(0.2 * Math.PI), 10, 10 * Math.cos(0.2 * Math.PI));

      // 640 -> 240
      // 8   -> 6
      const scale = scH * 0.003 + 18;
      const camera = new THREE.OrthographicCamera(-scale, scale, scale, -scale, 0.01, 50000);
      camera.position.copy(initialCameraPosition);
      camera.lookAt(target);

      const ambientLight = new THREE.AmbientLight(0xcccccc, Math.PI);
      scene.add(ambientLight);

      const controls = new OrbitControls(camera, renderer.domElement);
      controls.autoRotate = true;
      controls.target = target;

      loadGLTFModel(scene, urlDogGLB, {
        receiveShadow: false,
        castShadow: false,
      }).then(() => {
        animate();
        setLoading(false);
      });

      let req: any = null;
      let frame = 0;
      const animate = () => {
        req = requestAnimationFrame(animate);

        frame = frame <= 100 ? frame + 1 : frame;

        if (frame <= 100) {
          const p = initialCameraPosition;
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20;

          camera.position.y = 10;
          camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
          camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
          camera.lookAt(target);
        } else {
          controls.update();
        }

        renderer.render(scene, camera);
      };

      return () => {
        cancelAnimationFrame(req);
        renderer.domElement.remove();
        renderer.dispose();
      };
    }
    return () => undefined;
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize, false);
    return () => {
      window.removeEventListener('resize', handleWindowResize, false);
    };
  }, [handleWindowResize]);

  return <CatContainer ref={refContainer}>{loading && <CatSpinner />}</CatContainer>;
};

export default Cat;
