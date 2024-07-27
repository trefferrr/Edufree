import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import StarRateIcon from '@mui/icons-material/StarRate';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import NavBottom from '../components/NavigationBottom';

const coursesItem = [
  {
    id: 1,
    photo: '/images/course-pic1.jpg',
    title: 'Web Programming Basics',
    rating: 4.9,
    desc: 'Learning material on beginner-level website creation',
    duration: 4.5,
    videos: 20,
    students: 1.9,
  },
  {
    id: 2,
    photo: '/images/course-pic2.jpg',
    title: 'Digital Marketing 101',
    rating: 4.9,
    desc: 'Material on beginner-level marketing strategies and concepts',
    duration: 4.5,
    videos: 20,
    students: 1.9,
  },
  {
    id: 3,
    photo: '/images/course-pic3.jpg',
    title: 'Introduction to Data Science',
    rating: 4.9,
    desc: 'Learning material on the basics of data science',
    duration: 4.5,
    videos: 20,
    students: 1.9,
  },
  {
    id: 4,
    photo: '/images/course-pic4.jpg',
    title: 'Basic Public Speaking',
    rating: 4.9,
    desc: 'Learn about the basic concepts and theories of public speaking',
    duration: 4.5,
    videos: 20,
    students: 1.9,
  },
  {
    id: 5,
    photo: '/images/course-pic5.jpg',
    title: 'Basic Networking',
    rating: 4.9,
    desc: 'Basic computer networking learning for everyone',
    duration: 4.5,
    videos: 20,
    students: 1.9,
  },
  {
    id: 6,
    photo: '/images/course-pic6.jpg',
    title: 'Beginner UI/UX',
    rating: 4.9,
    desc: 'Basics of theory and practice in UI/UX design',
    duration: 4.5,
    videos: 20,
    students: 1.9,
  },
  {
    id: 7,
    photo: '/images/course-pic7.jpg',
    title: 'Basic English',
    rating: 4.9,
    desc: 'Learn to speak English easily by mastering grammar',
    duration: 4.5,
    videos: 20,
    students: 1.9,
  },
  {
    id: 8,
    photo: '/images/course-pic8.jpg',
    title: 'Technology for Planting',
    rating: 4.9,
    desc: 'Proven planting techniques with the help of technology',
    duration: 4.5,
    videos: 20,
    students: 1.9,
  },
  {
    id: 9,
    photo: '/images/course-pic9.jpg',
    title: 'Machine Learning 101',
    rating: 4.9,
    desc: 'Learn the basics of machine learning and other great sciences',
    duration: 4.5,
    videos: 20,
    students: 1.9,
  },
];

const Courses = () => {
  useEffect(() => {
    document.title = `Edufree - Courses`;
  }, []);

  return (
    <>
      <Navigation />

      <section className="w-full container mx-auto mt-20 font-poppins mb-24">
        <div className="flex flex-col justify-center items-center">
          <div className="lg:mb-10 -mb-36">
            <input
              type="text"
              className="form-input px-4 py-3 rounded-lg lg:w-[746px] bg-white border border-gray-700/60 text-xl pl-8 mb-10 lg:mb-0"
              placeholder="Search courses..."
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
              Soft Skills
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

      <section className="w-full container mx-auto font-poppins mb-24">
        <Link to="/courses/detail">
          <div className="flex flex-wrap mb-20">
            {coursesItem.map((course) => (
              <div className="w-full md:w-1/2 lg:w-1/3 p-4" key={course.id}>
                <div className="bg-white">
                  <img
                    src={course.photo}
                    alt={course.title}
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="p-5">
                    <span className="flex justify-between">
                      <h2 className="text-2xl font-medium mb-3">
                        {course.title}
                      </h2>
                      <div className="badge badge-black text-white flex items-center gap-1 py-3">
                        <StarRateIcon className="text-color1" />
                        {course.rating}
                      </div>
                    </span>
                    <p className="text-gray-500">{course.desc}</p>
                    <div className="flex justify-between mt-4 text-gray-600">
                      <div className="flex gap-1">
                        <AccessTimeIcon /> {course.duration} Hours
                      </div>
                      <div className="flex gap-1">
                        <PlayCircleOutlinedIcon />
                        {course.videos} Videos
                      </div>
                      <div className="flex gap-1">
                        <PeopleOutlineIcon />
                        {course.students} Students
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

export default Courses;
