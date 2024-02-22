import React, { forwardRef } from 'react';
import { Spinner } from 'zeni-ui';

export const CatSpinner = () => <Spinner className="pp-absolute pp-left-[50%] pp-top-[50%]" />;

export const CatContainer = forwardRef(({ children }: { children: React.ReactNode }, ref: any) => (
  <div ref={ref} className="pp-m-auto pp-mt-8 pp-relative sm:pp-w-[450px] sm:pp-h-[450px] pp-w-[260px] pp-h-[260px]">
    {children}
  </div>
));

const Loader = () => (
  <CatContainer>
    <CatSpinner />
  </CatContainer>
);

export default Loader;
