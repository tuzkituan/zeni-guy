import { Box, Flex } from 'zeni-ui';
import Footer from '../components/footer';
import Header from '../components/header';
import { MAX_W } from '../constants';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex direction="column" className="mp-min-h-[100vh]">
      <Header />
      <Box
        className={`mp-px-6 mp-py-8 mp-w-full mp-mx-auto mp-h-full`}
        style={{
          maxWidth: MAX_W,
        }}
      >
        <Box className="mp-mb-4">
          <Box className="mp-rounded-md mp-px-2 mp-py-1 mp-bg-orange-500 mp-w-fit mp-text-white mp-font-semibold mp-text-xs">
            HOME
          </Box>
        </Box>
        {children}
      </Box>
      <Footer />
    </Flex>
  );
};

export default MainLayout;
