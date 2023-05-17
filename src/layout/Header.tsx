import Image from "next/image";

const Header = () => {
  return (
    <header>
      <nav className="bg-white border-gray-700 px-8 lg:px-10 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a
            href="#"
            className="flex items-center text-2xl font-semibold text-white"
          >
            <Image
              src="/legends.svg"
              alt="Legends logo"
              className=""
              height={100}
              width={140}
            />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
