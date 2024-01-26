import Header from '../components/header';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="p-6 w-full mx-auto max-w-[992px]">{children}</div>
    </div>
  );
};

export default MainLayout;
