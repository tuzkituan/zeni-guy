import { Carrot, GithubLogo, Palette } from '@phosphor-icons/react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Flex, IMenuItem, IThemeType, Menu, useChangeTheme } from 'zeni-ui';

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
      title: _renderMenuTitle('Lavender', 'baseLight'),
      key: 'baseLight',
    },
  ];

  const options = [
    {
      key: 'THEME',
      title: 'Change Theme',
      child: (
        <Menu placement="bottom-end" items={themes} onMenuClick={(val) => setTheme(val as IThemeType)}>
          <Button className="!mp-p-2" variant="link">
            <Palette size={20} weight="bold" className="mp-text-color-primary" />
          </Button>
        </Menu>
      ),
    },
    {
      key: 'GITHUB',
      title: 'My GitHub',
      child: (
        <Button
          className="!mp-p-2"
          variant="link"
          onClick={() => {
            navigate('/my');
          }}
        >
          <GithubLogo size={20} weight="bold" />
        </Button>
      ),
    },
  ];

  return (
    <div className="mp-w-full mp-border-b mp-border-color-border mp-bg-white">
      <div className="mp-px-6 mp-w-full mp-mx-auto mp-max-w-[992px] mp-flex mp-justify-between mp-items-center mp-gap-4 mp-h-[56px]">
        <Link to="/">
          <Flex gap={8} align="center">
            <Carrot size={22} weight="bold" className="mp-text-color-primary" />
            <h1 className="mp-text-xl mp-font-bold mp-text-color-primary">ZENI</h1>
          </Flex>
        </Link>
        <div className="mp-flex mp-items-center mp-gap-2 mp-justify-end">
          {options.map((item) => (
            <div key={item.key}>{item.child}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
