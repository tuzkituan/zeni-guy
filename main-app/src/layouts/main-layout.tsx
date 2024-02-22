import Header from '../components/header';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="mp-p-6 mp-w-full mp-mx-auto mp-max-w-[992px]">{children}</div>
    </div>
  );
};

export default MainLayout;
