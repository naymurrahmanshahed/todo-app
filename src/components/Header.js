import { TiTick } from "react-icons/ti";

const Header = () => {
  return (
    <header className="header bg-gray-900 container mx-auto lg:max-w-4xl p-10 border-b border-dashed border-teal-900 rounded-tl-xl rounded-tr-xl">
      <h2 className=" uppercase font-semibold text-teal-500 tracking-wide flex gap-2 items-center ">
        <span>
          <TiTick />
        </span>
        <span>Todo App</span>
      </h2>
    </header>
  );
};

export default Header;
