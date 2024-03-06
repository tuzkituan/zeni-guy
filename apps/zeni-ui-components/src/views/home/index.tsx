import { ArrowRight, GithubLogo, Link } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Flex, Text, useMediaQuery } from 'zeni-ui';

function Home() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery(768);

  return (
    <Box>
      <Box className="cp-mb-4" />
      <Flex gap="64px" align="flex-start" justify="space-between">
        <Flex direction="column" gap="40px" align="flex-start">
          <Box
            style={{
              maxWidth: 600,
            }}
          >
            <Flex direction="column" gap="16px" align="flex-start" className="cp-w-full">
              <Text className="cp-text-4xl cp-font-semibold cp-block">
                build <Text className="cp-text-color-primary">better, faster</Text>
              </Text>
              <Text className="cp-text-base cp-block">
                Zeni UI is a collection of high-quality, fully customizable UI components that help developers build
                beautiful, responsive, and interactive web applications faster and easier.
              </Text>
            </Flex>
          </Box>
          <Box className="cp-w-fit">
            <Flex direction="row" gap="12px" justify="flex-start">
              <Button
                variant="solid"
                rightIcon={<ArrowRight size={20} weight="bold" />}
                onClick={() => navigate('/home/docs')}
              >
                Get Started
              </Button>
              <Button
                variant="outline"
                leftIcon={<GithubLogo size={20} weight="bold" />}
                onClick={() => window.open('https://github.com/tuzkituan/zeni-ui')}
              >
                GitHub
              </Button>
              <Button
                variant="outline"
                leftIcon={<Link size={20} weight="bold" />}
                onClick={() => window.open('https://www.npmjs.com/package/zeni-ui', '_blank')}
              >
                NPM
              </Button>
            </Flex>
          </Box>
        </Flex>
        {!isMobile && (
          <Flex
            justify="flex-end"
            style={{
              maxWidth: 200,
            }}
          >
            <img src="/zeni_logo.svg" alt="logo" className="w-full" />
          </Flex>
        )}
      </Flex>
    </Box>
  );
}

export default Home;
