import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import NavBottom from '../components/NavigationBottom';
import EastIcon from '@mui/icons-material/East';

const blogItems = [
  {
    id: 1,
    photo: '/images/blog-pic1.jpg',
    title: 'Easy Ways to Start Learning Programming - EDUFREE',
    date: '12 Jan 2023',
    desc: 'Becoming a programmer is now very easy to learn for anyone ...',
  },
  {
    id: 2,
    photo: '/images/blog-pic2.jpg',
    title: 'Tips for Creating a Business Landing Page Website - EDUFREE',
    date: '16 Feb 2023',
    desc: 'The importance of websites in growing trust in business, making ...',
  },
  {
    id: 3,
    photo: '/images/blog-pic3.jpg',
    title: 'How to Install Wordpress for Beginners - EDUFREE',
    date: '26 Mar 2023',
    desc: 'Creating a website can now be done without coding, now you can make it with ...',
  },
];

const AllBlogs = () => {
  useEffect(() => {
    document.title = `Edufree - Blogs`;
  }, []);

  return (
    <>
      <Navigation />

      <section className="w-full container mx-auto mt-20 font-poppins lg:mb-24 mb-36">
        <div className="flex flex-col justify-center items-center">
          <div className="lg:mb-10 -mb-36">
            <input
              type="email"
              className="form-input md:px-4 py-3 rounded-lg w-full lg:w-[746px] bg-white border border-gray-700/60 lg:text-xl text-lg pl-4 lg:pl-8 mb-10 lg:mb-0 px-5"
              placeholder="Search Blog, Event or News..."
            />
          </div>
          <div className="lg:flex lg:gap-x-12 text-lg font-medium flex-col lg:flex-row hidden">
            <Link to="" className="text-gray-600 hover:text-black">
              All
            </Link>
            <Link to="" className="text-gray-600 hover:text-black">
              UI Design
            </Link>
            <Link to="" className="text-gray-600 hover:text-black">
              Programming
            </Link>
            <Link to="" className="text-gray-600 hover:text-black">
              Marketing
            </Link>
            <Link to="" className="text-gray-600 hover:text-black">
              Soft Skill
            </Link>
            <Link to="" className="text-gray-600 hover:text-black">
              Network
            </Link>
            <Link to="" className="text-gray-600 hover:text-black">
              Data Analyst
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full container mx-auto font-poppins mb-24 px-5">
        <div className="flex mb-16">
          <div className="w-full lg:w-7/12 flex flex-col">
            <Link to="/blog">
              <div className="w-full mb-8">
                <img src="/images/blog-pic4.jpg" alt="Blog" />
              </div>
              <div className="flex flex-col">
                <h3 className="text-base font-medium text-gray-500 mb-4">
                  12 Jan 2023
                </h3>
                <h1 className="text-2xl font-semibold mb-2">
                  How to Become a Technology Expert at a Young Age with Minimal Budget
                </h1>
                <p className="text-lg text-gray-500 mb-9">
                  See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract. See how pivoting to Webflow changed one person’s sales strategy{' '}
                </p>
                <span
                  to="/blog"
                  className="text-base font-medium text-gray-700 flex items-center gap-x-2"
                >
                  Learn More <EastIcon />
                </span>
              </div>
            </Link>
          </div>
          <div className="hidden md:block w-5/12 md:h-[120px] ml-5">
            <Link to="/blog">
              <div className="flex justify-between md:mb-[47px]">
                <div className="flex flex-col">
                  <h2 className="text-md lg:text-xl font-medium lg:w-[340px] h-full">
                    Easy to create a website without coding
                  </h2>
                  <p className="text-sm lg:text-lg text-gray-500">
                    1 February 2023
                  </p>
                </div>
                <div className="">
                  <img
                    src="/images/blog-pic5.jpg"
                    className="w-full lg:h-[120px] lg:w-[120px]"
                    alt="Blog"
                  />
                </div>
              </div>
            </Link>
            <Link to="/blog">
              <div className="flex justify-between md:mb-[47px]">
                <div className="flex flex-col">
                  <h2 className="text-md lg:text-xl font-medium lg:w-[340px] h-full">
                    Learn the Product Design Workflow
                  </h2>
                  <p className="text-sm lg:text-lg text-gray-500">
                    4 March 2023
                  </p>
                </div>
                <div className="">
                  <img
                    src="/images/blog-pic6.jpg"
                    className="w-full lg:h-[120px] lg:w-[120px]"
                    alt="Blog"
                  />
                </div>
              </div>
            </Link>
            <Link to="/blog">
              <div className="flex justify-between md:mb-[47px]">
                <div className="flex flex-col">
                  <h2 className="text-md lg:text-xl font-medium lg:w-[340px] h-full">
                    What to Prepare for Job Applications
                  </h2>
                  <p className="text-sm lg:text-lg text-gray-500">
                    10 April 2023
                  </p>
                </div>
                <div className="">
                  <img
                    src="/images/blog-pic7.jpg"
                    className="w-full lg:h-[120px] lg:w-[120px]"
                    alt="Blog"
                  />
                </div>
              </div>
            </Link>
            <Link to="/blog">
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <h2 className="text-md lg:text-xl font-medium lg:w-[340px] h-full">
                    Tech Jobs You Can Get Without a Degree
                  </h2>
                  <p className="text-sm lg:text-lg text-gray-500">
                    4 June 2023
                  </p>
                </div>
                <div className="">
                  <img
                    src="/images/blog-pic8.jpg"
                    className="w-full lg:h-[120px] lg:w-[120px]"
                    alt="Blog"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>

        <Link to="/blog">
          <div className="flex flex-wrap mb-20 lg:mt-24 md:mt-20">
            {blogItems.map((blog) => (
              <div
                className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 mb-12"
                key={blog.id}
              >
                <div className="bg-white px-1">
                  <img
                    src={blog.photo}
                    alt={blog.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="pt-10">
                    <h4 className="text-base font-medium text-gray-600 mb-4">
                      {blog.date}
                    </h4>
                    <h2 className="text-xl font-medium mb-4">{blog.title}</h2>
                    <p className="text-gray-500 text-base mb-9">{blog.desc}</p>
                    <div className="flex justify-between mt-4 text-gray-700">
                      <div className="flex gap-2 text-base items-center">
                        Learn More <EastIcon />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Link>

        <div className="join flex justify-center rounded-none">
          <button className="join-item btn bg-white text-black border-0 text-lg hover:bg-color1">
            1
          </button>
          <button className="join-item btn bg-white text-black border-0 text-lg hover:bg-color1">
            2
          </button>
          <button className="bg-white px-2">...</button>
          <button className="join-item btn bg-white text-black border-0 text-lg hover:bg-color1">
            9
          </button>
          <button className="join-item btn bg-white text-black border-0 text-lg hover:bg-color1">
            10
          </button>
        </div>
      </section>

      <Footer />
      <NavBottom />
    </>
  );
};

export default AllBlogs;
