import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const Login = () => {
  useEffect(() => {
    document.title = 'Edufree - Login';
  }, []);

  return (
    <section
      className="w-full container mx-auto font-poppins flex flex-col mb-40 h-full py-10 px-5 lg:px-0"
      style={{ height: '100vh' }}
    >
      <div className="text-left mb-10 gap-x-3 items-center">
        <Link to="/">
          <h1 className="font-semibold text-xl text-gray-500 flex items-center gap-2">
            <KeyboardBackspaceIcon /> Homepage
          </h1>
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row">
        <div className="w-full h-[700px] relative hidden lg:block">
          <div
            className="absolute top-0 left-0 w-full h-full bg-black opacity-60"
            style={{ zIndex: 1 }}
          ></div>
          <div
            className="w-full h-full bg-green-300 p-20"
            style={{
              backgroundImage: 'url("/images/login-bg.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              zIndex: 2,
            }}
          >
            <h1 className="text-white font-semibold text-[42px] relative z-10 lg:w-[444px] leading-relaxed mb-6 w-full">
              One Step Closer to Your Dream
            </h1>
            <p className="w-full lg:w-[417px] text-base font-medium text-white relative z-10 leading-relaxed">
              A free E-Learning service ready to help you become an expert
            </p>
          </div>
        </div>

        <div className="w-full h-full lg:h-[700px] bg-black text-white">
          <div className="flex flex-col justify-center p-8 lg:p-24">
            <div>
              <h2 className="text-[28px] font-semibold mb-4">Login</h2>
              <p className="text-base text-gray-500 w-full lg:w-[430px] mb-12">
                Prepare yourself for a future full of stars
              </p>
            </div>
            <div>
              <input
                type="email"
                className="form-input px-4 py-5 bg-black border-2 border-gray-50/10 rounded-lg w-full mb-4"
                placeholder="Email"
              />
              <input
                type="password"
                className="form-input px-4 py-5 bg-black border-2 border-gray-50/10 rounded-lg w-full"
                placeholder="Password"
              />

              <label className="flex items-center space-x-2 mb-14 py-5">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-color1"
                />
                <span className="text-base text-gray-500">
                  Remember me
                </span>
              </label>

              <button className="px-4 py-5 bg-color1 w-full text-black uppercase font-bold rounded-md text-lg tracking-widest mb-7">
                Login
              </button>
              <span className="flex gap-1 justify-center">
                Not registered yet?{' '}
                <span className="underline">
                  <Link to="/register">Register</Link>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
