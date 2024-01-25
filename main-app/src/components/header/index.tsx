import { GithubLogo, InstagramLogo } from "@phosphor-icons/react";

const Header = () => {
  return (
    <div className="w-full shadow-sm bg-white">
      <div className="px-4 w-full mx-auto max-w-[992px] flex justify-between items-center gap-4 h-[56px]">
        <h1 className="text-xl font-bold">ZENI</h1>
        <div className="flex items-center gap-6 justify-end">
          <GithubLogo size={20} weight="bold" />
          <InstagramLogo size={20} weight="bold" />
        </div>
      </div>
    </div>
  );
};

export default Header;
