import { Carrot, GithubLogo, Palette } from '@phosphor-icons/react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, Flex, IMenuItem, IThemeType, Menu, useChangeTheme } from 'zeni-ui';
import { MAX_W } from '../../constants';

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
    // {
    //   key: 'SEARCH',
    //   title: 'Search',
    //   child: (
    //     <Button className="!mp-p-2" variant="link">
    //       <MagnifyingGlass size={18} weight="bold" />
    //     </Button>
    //   ),
    // },
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
  ];

  return (
    <Box className="mp-w-full mp-border-b mp-border-color-border mp-bg-white">
      <Flex
        align="center"
        className="mp-px-6 mp-w-full mp-mx-auto mp-h-[56px]"
        style={{
          maxWidth: MAX_W,
        }}
        gap={16}
        justify="space-between"
      >
        <Link to="/">
          <Flex gap={8} align="center">
            <Carrot size={22} weight="bold" className="mp-text-color-primary" />
            <h1 className="mp-text-xl mp-font-bold mp-text-color-primary">ZENI</h1>
          </Flex>
        </Link>
        <Flex align="center" justify="flex-end" gap={8}>
          {options.map((item) => (
            <Box key={item.key}>{item.child}</Box>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
