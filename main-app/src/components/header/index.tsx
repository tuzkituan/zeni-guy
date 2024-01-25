import { GithubLogo, InstagramLogo, Palette } from '@phosphor-icons/react';
import { Button, IMenuItem, IThemeType, Menu, useChangeTheme } from 'zeni-ui';

const Header = () => {
  const { theme, setTheme } = useChangeTheme();

  const _renderMenuTitle = (name: string, key: string) => {
    return <span className={`${theme === key ? 'text-color-primary' : ''}`}>{name}</span>;
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
    <div className="w-full shadow-sm bg-white">
      <div className="px-4 w-full mx-auto max-w-[992px] flex justify-between items-center gap-4 h-[56px]">
        <h1 className="text-xl font-bold text-color-primary">ZENI</h1>
        <div className="flex items-center gap-2 justify-end">
          <Menu placement="bottom-end" items={themes} onMenuClick={(val) => setTheme(val as IThemeType)}>
            <Button className="p-2" variant="link">
              <Palette size={18} weight="bold" className="text-color-primary" />
            </Button>
          </Menu>
          <Button className="p-2" variant="link">
            <GithubLogo size={18} weight="bold" />
          </Button>
          <Button className="p-2" variant="link">
            <InstagramLogo size={18} weight="bold" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
