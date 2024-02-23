import { ArrowRight, GithubLogo } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, Flex, Text } from 'zeni-ui';

function App() {
  const navigate = useNavigate();

  return (
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
          <Button variant="solid" rightIcon={<ArrowRight size={20} weight="bold" />} onClick={() => navigate('/docs')}>
            Get Started
          </Button>
          <Button
            variant="outline"
            leftIcon={<GithubLogo size={20} weight="bold" />}
            onClick={() => window.open('https://github.com/tuzkituan/zeni-ui')}
          >
            GitHub
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}

export default App;
