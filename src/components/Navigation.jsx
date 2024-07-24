import { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';

import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const Navigation = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = useCallback(() => {
    setMenu((prev) => !prev);
  }, [setMenu]);

  return (
    <div className="bg-black text-white">
      <header className="container mx-auto font-poppins py-6 px-5 lg:px-0">
        <div className="flex justify-between items-center">
          <Link to="/">
            <div className="">
              <h1 className="uppercase font-bold md:text-2xl text-xl">
                [edufree]
              </h1>
            </div>
          </Link>

          <button
            className={[
              'w-auto flex items-center justify-center lg:hidden p-2 appearance-none z-50',
              menu ? ' fixed right-4' : 'relative text-inherit',
            ].join(' ')}
            onClick={toggleMenu}
          >
            <span>
              {menu ? <CloseIcon className="text-white" /> : <MenuIcon />}
            </span>
          </button>

          <div
            className={[
              'lg:flex w-auto lg:opacity-100 lg:visible lg:h-auto z-20',
              menu
                ? 'flex items-center justify-center h-screen w-full inset-0 opacity-100 visible fixed bg-black text-white lg:-mt-[400px]'
                : 'hidden opacity-0 h-0 invisible',
            ].join(' ')}
          >
            <ul className="flex items-center flex-col lg:flex-row gap-y-6 lg:gap-y-0 uppercase">
              <li>
                <Link
                  to="/"
                  className="px-4 lg:text-white text-base hover:text-amber-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="px-4 lg:text-white text-base hover:text-amber-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="px-4 lg:text-white text-base hover:text-amber-200"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="px-4 lg:text-white text-base hover:text-amber-200"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="px-4 lg:text-white text-base hover:text-amber-200"
                >
                  Blog <OpenInNewIcon />
                </Link>
              </li>
              <li className="mt-6 lg:mt-0 lg:ml-14">
                <Link
                  to="/login"
                  className="px-10 py-3 border border-white rounded hover:border-color1 hover:text-color1"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navigation;
