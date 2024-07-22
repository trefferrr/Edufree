import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className="w-full h-full lg:h-[360px] bg-black text-white flex justify-center items-center lg:px-10">
      <div className="w-full container mx-auto font-poppins flex flex-col lg:flex-row p-5 lg:p-0 items-center">
        <div className="w-full lg:w-6/12 flex flex-col md:flex-row md:justify-between lg:flex-col mb-10 lg:mb-0">
          <div className="">
            <h1 className="uppercase font-bold text-2xl mb-3">[edufree]</h1>
            <p className="text-base text-gray-300 md:w-[320px] w-full mb-3 lg:mb-2">
              Build and realize your dreams with edufree
            </p>
          </div>
          <div className="w--full md:w-[420px] h-full lg:h-[88px] bg-color1 flex text-black justify-between p-5 rounded-md">
            <span className="flex flex-col">
              <p className="mb-1 text-base lg:text-[18px] font-medium">Email</p>
              <p className="text-sm lg:text-base text-gray-700">
                contact@website.com
              </p>
            </span>
            <span className="flex flex-col">
              <p className="mb-1 text-base lg:text-[18px] font-medium">
                Telephone
              </p>
              <p className="text-sm lg:text-base text-gray-700">
                +6288 999 222 333
              </p>
            </span>
          </div>
        </div>
        <div className="w-full lg:w-6/12 flex flex-col md:flex-row justify-between gap-y-12">
          <div className="flex flex-col gap-y-2 lg:gap-y-5">
            <h2 className="text-xl font-medium">Social Media</h2>
            <span className="flex flex-col gap-y-2">
              <Link to="" className="text-base lg:text-lg">
                Instagram
              </Link>
              <Link to="" className="text-base lg:text-lg">
                Twitter
              </Link>
              <Link to="" className="text-base lg:text-lg">
                LinkedIn
              </Link>
            </span>
          </div>
          <div className="flex flex-col gap-y-2 lg:gap-y-5">
            <h2 className="text-xl font-medium">Programs</h2>
            <span className="flex flex-col gap-y-2">
              <Link to="" className="text-base lg:text-lg">
                Independent Learning
              </Link>
              <Link to="" className="text-base lg:text-lg">
                Finterpreneur
              </Link>
            </span>
          </div>
          <div className="flex flex-col gap-y-2 lg:gap-y-5">
            <h2 className="text-xl font-medium">Support</h2>
            <span className="flex flex-col gap-y-2">
              <Link to="" className="text-base lg:text-lg">
                About Us
              </Link>
              <Link to="" className="text-base lg:text-lg">
                Terms
              </Link>
              <Link to="" className="text-base lg:text-lg">
                Privacy Policy
              </Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
