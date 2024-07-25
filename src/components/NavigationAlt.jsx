const Nav = () => {
  return (
    <>
      <div className="bg-black text-white">
        <header className="max-w-[1440px] mx-auto font-poppins py-6 px-5 lg:px-0">
          <div className="flex justify-between items-center">
            <a to="/">
              <div className="">
                <h1 className="uppercase font-bold md:text-2xl text-xl">
                  [edufree]
                </h1>
              </div>
            </a>
          </div>
        </header>
      </div>
    </>
  );
};

export default Nav;
