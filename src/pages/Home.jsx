import { Link } from 'react-router-dom';
import { useEffect } from 'react';

import EastIcon from '@mui/icons-material/East';
import StarRateIcon from '@mui/icons-material/StarRate';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import NavBottom from '../components/NavigationBottom';

const testimonials = [
  {
    id: 1,
    name: 'Jenny Wilson',
    job: 'Vice President',
    photo: '/images/profile.jpg',
    review: `"The material is easy to understand, the instructor's quality is very good and the response is quick. So, I highly recommend the course here!!"`,
  },
  {
    id: 2,
    name: 'Jenny Wilson',
    job: 'Vice President',
    photo: '/images/profile.jpg',
    review: `"The material is easy to understand, the instructor's quality is very good and the response is quick. So, I highly recommend the course here!!"`,
  },
  {
    id: 3,
    name: 'Jenny Wilson',
    job: 'Vice President',
    photo: '/images/profile.jpg',
    review: `"The material is easy to understand, the instructor's quality is very good and the response is quick. So, I highly recommend the course here!!"`,
  },
];

const courses = [
  {
    id: 1,
    rating: 4.9,
    title: 'Basic Web Programming',
    description:
      'Learning material on website creation for beginners',
    time: 4.5,
    video: 20,
    students: 1.932,
    photo: '/images/course-pic1.jpg',
  },
  {
    id: 2,
    rating: 4.9,
    title: 'Digital Marketing 101',
    description: 'Material on marketing strategies and concepts for beginners',
    time: 6.2,
    video: 32,
    students: 930,
    photo: '/images/course-pic2.jpg',
  },
  {
    id: 3,
    rating: 4.9,
    title: 'Basic Data Science',
    description: 'Learning material on the basics of data science',
    time: 8,
    video: 46,
    students: 1.043,
    photo: '/images/course-pic3.jpg',
  },
];

const blogs = [
  {
    id: 1,
    date: '19 Jan 2023',
    title: 'Easy Ways to Start Learning Programming - EDUFREE',
    content:
      'Becoming a programmer is now very easy for anyone to learn...',
    photo: '/images/blog-pic1.jpg',
  },
  {
    id: 2,
    date: '19 Jan 2023',
    title: 'Tips for Creating a Business Landing Page - EDUFREE',
    content:
      'The importance of a website in building trust for a business...',
    photo: '/images/blog-pic2.jpg',
  },
  {
    id: 3,
    date: '19 Jan 2023',
    title: 'How to Install Wordpress for Beginners - EDUFREE',
    content:
      'Creating a website today can be done without coding, you can now do it with...',
    photo: '/images/blog-pic3.jpg',
  },
];

const Home = () => {
  useEffect(() => {
    document.title = 'Edufree - Free Learning Platform';
  }, []);

  return (
    <>
      <Navigation />

      {/* section header */}
      <section className="w-full bg-black h-[580px] flex justify-between items-center text-white font-poppins px-1 lg:px-0">
        <div className="container mx-auto flex justify-between items-center">
          <div className="w-full px-5 lg:px-0 lg:w-6/12 flex flex-col">
            <h1 className="font-semibold lg:text-[42px] mb-8 text-3xl leading-snug">
              Build and Realize Your Dreams with EDUFREE
            </h1>
            <p className="text-base mb-16">
              EDUFREE is a free online course and training service designed to help you achieve your goals in the field of technology.
            </p>
            <span className="flex gap-8 items-center">
              <Link to="/courses">
                <button className="px-8 lg:px-10 py-3 bg-color1 rounded text-black text-base flex-shrink-0">
                  View Courses
                </button>
              </Link>
              <Link
                to=""
                className="text-base flex lg:gap-3 gap-1 items-center flex-shrink-0"
              >
                View Learning Path <EastIcon />
              </Link>
            </span>
          </div>
          <div className="w-6/12 lg:-mr-20 hidden md:flex p-5 lg:p-0">
            <img src="/images/header-pic.png" />
          </div>
        </div>
      </section>

      {/* section statistics */}
      <section className="w-full bg-color2 h-[230px] font-poppins my-auto flex items-center mb-28 lg:p-10">
        <div className="w-full container mx-auto flex md:flex-col lg:flex-row items-center md:gap-x-36 flex-col gap-y-5 md:gap-y-0">
          <div className="flex md:space-x-4 md:justify-center md:mb-6 gap-x-4 ml-6 md:ml-0 lg:flex-shrink-0">
            <span className="flex flex-col p-3 lg:p-0">
              <h3 className="font-semibold text-md md:text-[32px] lg:mb-3">
                21,000+
              </h3>
              <p className="text-sm md:text-base text-gray-500">
                Registered Students
              </p>
            </span>
            <span className="flex flex-col p-3 lg:p-0">
              <h3 className="font-semibold text-md md:text-[32px] lg:mb-3">
                100+
              </h3>
              <p className="text-sm md:text-base text-gray-500">
                Expert Instructors
              </p>
            </span>
            <span className="flex flex-col p-3 lg:p-0">
              <h3 className="font-semibold text-md md:text-[32px] lg:mb-3">
                150+
              </h3>
              <p className="text-sm lg:text-base text-gray-500">
                Free Courses
              </p>
            </span>
          </div>
          <div className="md:flex md:justify-center scale-50 md:scale-75 lg:scale-100 md:space-x-2 flex flex-row justify-center gap-x-4 lg:gap-x-0 px-3">
            <img src="/images/partner1.svg" alt="partner1" />
            <img src="/images/partner2.svg" alt="partner2" />
            <img src="/images/partner3.svg" alt="partner3" />
            <img src="/images/partner4.svg" alt="partner4" />
            <img src="/images/partner5.svg" alt="partner5" />
          </div>
        </div>
      </section>

      {/* section benefits */}
      <section className="container mx-auto font-poppins mb-20 lg:mb-36 px-5 lg:px-0">
        <div className="flex justify-center">
          <h1 className="text-center font-semibold text-2xl md:text-[38px] md:w-[640px] mb-5 lg:mb-16 p-5 lg:p-0 leading-snug">
            Benefits of Joining EDUFREE E-Learning
          </h1>
        </div>

        <div className="flex flex-col gap-y-5 p-5 lg:p-0">
          <div className="flex gap-x-12 md:flex-col lg:flex-row flex-col gap-y-5 mb-5 justify-between">
            <div className="w-full flex">
              <div className="md:w-full h-full md:h-[316px] bg-color3 flex flex-col p-12">
                <img
                  src="/images/benefit-icon1.jpg"
                  alt="benefit1"
                  width={40}
                  height={40}
                  className="mb-5"
                />
                <h1 className="text-xl md:text-2xl font-medium mb-3">
                  Free Courses
                </h1>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                  We offer several free courses to enhance educational opportunities for those in need.
                </p>
              </div>
            </div>
            <div className="w-full flex">
              <div className="md:full h-full md:h-[316px] bg-color3 flex flex-col p-12">
                {' '}
                <img
                  src="/images/benefit-icon2.jpg"
                 
                  alt="benefit2"
                  width={40}
                  height={40}
                  className="mb-5"
                />
                <h1 className="text-xl md:text-2xl font-medium mb-3">
                  Expert Instructors
                </h1>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                  Our courses are taught by industry experts to ensure high-quality education and practical insights.
                </p>
              </div>
            </div>
            <div className="w-full flex">
              <div className="md:w-full h-full md:h-[316px] bg-color3 flex flex-col p-12">
                <img
                  src="/images/benefit-icon3.jpg"
                  alt="benefit3"
                  width={40}
                  height={40}
                  className="mb-5"
                />
                <h1 className="text-xl md:text-2xl font-medium mb-3">
                  Flexible Learning
                </h1>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                  Learn at your own pace with our flexible course schedules and resources available 24/7.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section courses */}
      <section className="w-full bg-color2 font-poppins py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl md:text-[38px] font-semibold mb-5">
            Featured Courses
          </h1>
          <p className="text-base text-gray-600 mb-12">
            Explore our top-rated courses and start learning today!
          </p>
          <Swiper
            modules={[Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {courses.map((course) => (
              <SwiperSlide key={course.id}>
                <div className="bg-white rounded-lg shadow-lg p-5">
                  <img
                    src={course.photo}
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-t-lg mb-5"
                  />
                  <h2 className="text-lg font-semibold mb-2">{course.title}</h2>
                  <p className="text-sm text-gray-600 mb-3">{course.description}</p>
                  <div className="flex justify-between text-sm text-gray-500">
                    <span><StarRateIcon /> {course.rating}</span>
                    <span><AccessTimeIcon /> {course.time} hours</span>
                    <span><PlayCircleOutlinedIcon /> {course.video} videos</span>
                    <span><PeopleOutlineIcon /> {course.students} students</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* section testimonials */}
      <section className="w-full bg-white font-poppins py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl md:text-[38px] font-semibold mb-5">
            What Our Students Say
          </h1>
          <p className="text-base text-gray-600 mb-12">
            Hear from our satisfied students about their learning experiences.
          </p>
          <Swiper
            modules={[Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
            }}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-color3 rounded-lg p-5 text-center">
                  <img
                    src={testimonial.photo}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mx-auto mb-5"
                  />
                  <h3 className="text-lg font-semibold mb-2">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{testimonial.job}</p>
                  <p className="text-base text-white">{testimonial.review}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* section blog */}
      <section className="w-full bg-color2 font-poppins py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl md:text-[38px] font-semibold mb-5">
            Latest Blog Posts
          </h1>
          <p className="text-base text-gray-600 mb-12">
            Stay updated with our latest articles and tips.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {blogs.map((blog) => (
              <div key={blog.id} className="w-full md:w-1/3 bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={blog.photo}
                  alt={blog.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-5">
                  <span className="text-sm text-gray-500 mb-3 block">{blog.date}</span>
                  <h2 className="text-lg font-semibold mb-3">{blog.title}</h2>
                  <p className="text-sm text-gray-600">{blog.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <NavBottom />
    </>
  );
};

export default Home;
