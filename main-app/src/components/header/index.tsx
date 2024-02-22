import { GithubLogo, Palette } from '@phosphor-icons/react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, IMenuItem, IThemeType, Menu, useChangeTheme } from 'zeni-ui';

const Header = () => {
  const navigate = useNavigate();
  const { theme, setTheme } = useChangeTheme();

  const _renderMenuTitle = (name: string, key: string) => {
    return <span className={`${theme === key ? 'mp-text-color-primary' : ''}`}>{name}</span>;
  };
  const themes: IMenuItem[] = [
    {
      title: _renderMenuTitle('Blue', 'blueLight'),
      key: 'blueLight',
    },
    {
      title: _renderMenuTitle('Lavender (Default)', 'baseLight'),
      key: 'baseLight',
    },
  ];

  return (
    <div className="mp-w-full mp-shadow-sm mp-bg-white">
      <div className="mp-px-6 mp-w-full mp-mx-auto mp-max-w-[992px] mp-flex mp-justify-between mp-items-center mp-gap-4 mp-h-[56px]">
        <h1 className="mp-text-xl mp-font-bold mp-text-color-primary">
          <Link to="/">ZENI</Link>
        </h1>
        <div className="mp-flex mp-items-center mp-gap-2 mp-justify-end">
          <Menu placement="bottom-end" items={themes} onMenuClick={(val) => setTheme(val as IThemeType)}>
            <Button className="!mp-p-2" variant="link">
              <Palette size={20} weight="bold" className="mp-text-color-primary" />
            </Button>
          </Menu>
          <Button className="!mp-p-2" variant="link" onClick={() => navigate('/my')}>
            <GithubLogo size={20} weight="bold" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
