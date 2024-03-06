import { Box, Flex, Text } from 'zeni-ui';

const Footer = () => {
  return (
    <Box className="mp-w-full mp-bg-neutral-900 mp-mt-auto">
      <Flex justify="center" align="center" className="mp-px-6 mp-py-4 mp-w-full mp-mx-auto">
        <Text className="mp-text-white mp-block mp-text-center mp-text-xs mp-font-normal mp-tracking-wide">
          made with ❤️ by Lewis
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
