import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  useEffect(() => {
    document.title = `Edufree - Not Found!`;
  }, []);

  return (
    <div
      className="w-full container mx-auto lg:min-w-[1440px] font-poppins flex flex-col justify-center items-center px-5 lg:px-0"
      style={{ height: '100vh' }}
    >
      <h1 className="text-9xl lg:text-[200px] text-color1 font-semibold px-5 lg:px-0">
        4<span className="text-gray-900">0</span>4
      </h1>
      <h2 className="text-center font-semibold text-[38px]">
        Oops... Page Not Found
      </h2>
      <p className="w-full text-lg lg:w-[520px] text-center text-gray-500">
        Sorry, the page you are looking for does not exist. Please make sure the URL is correct.
      </p>
      <Link to="/">
        <div className="px-10 py-3 bg-color1 rounded mt-10">Homepage</div>
      </Link>
    </div>
  );
};

export default NotFound;
