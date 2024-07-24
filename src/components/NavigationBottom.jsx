import { Link } from 'react-router-dom';

const NavBottom = () => {
  return (
    <section className="w-full container mx-auto h-full md:h-20 font-poppins flex md:justify-between md:items-center p-5 flex-col-reverse md:flex-row lg:p-0 justify-center items-center">
      <div className="mt-10 md:mt-0">
        <h3 className="text-sm lg:text-[18px] font-medium">
          &copy; Copyright EDUFREE 2021 - 2023
        </h3>
      </div>
      <div>
        <div className="flex gap-x-9 uppercase">
          <Link to="/" className="text-sm lg:text-base font-medium">
            Home
          </Link>
          <Link to="/" className="text-sm lg:text-base font-medium">
            About Us
          </Link>
          <Link to="/" className="text-sm lg:text-base font-medium">
            Courses
          </Link>
          <Link to="/" className="text-sm lg:text-base font-medium">
            FAQ
          </Link>
          <Link to="/" className="text-sm lg:text-base font-medium">
            Blog
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NavBottom;
