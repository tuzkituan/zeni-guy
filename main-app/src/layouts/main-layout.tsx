import Header from '../components/header';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="mp-px-6 mp-py-10 mp-w-full mp-mx-auto mp-max-w-[992px]">{children}</div>
    </div>
  );
};

export default MainLayout;
