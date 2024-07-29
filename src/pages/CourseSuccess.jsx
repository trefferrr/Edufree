import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const NotFound = () => {
  useEffect(() => {
    document.title = `Edufree - Join Success`;
  }, []);

  return (
    <div
      className="w-full container mx-auto lg:min-w-[1440px] font-poppins flex flex-col justify-center items-center px-5 lg:px-0"
      style={{ height: '100vh' }}
    >
      <img
        src="/images/course-success.jpg"
        alt=""
        className="rounded mb-9 px-5 lg:px-0"
      />
      <h2 className="text-center font-semibold text-2xl lg:text-[38px] mb-3">
        Selamat! Kursus Anda Telah Di Buka
      </h2>
      <p className="w-full text-md lg:text-lg lg:w-[520px] text-center text-gray-500">
        Kurus yang anda pilih sudah di buka, Silahkan klik button dibawah ini
      </p>
      <Link to="/">
        <div className="px-10 py-3 bg-color1 rounded mt-16">Buka Kursus</div>
      </Link>
    </div>
  );
};

export default NotFound;
