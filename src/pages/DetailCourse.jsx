import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import NavBottom from '../components/NavigationBottom';

const DetailCourse = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabContents = [
    'Description: Detailed description of the course content and structure.',
    'Instructor: Information about the instructor’s background and expertise.',
    'Syllabus: Overview of the course syllabus and key learning outcomes.',
    'Prerequisites: Required knowledge or skills needed before taking the course.',
    'Teaching Method: Methods and approaches used in teaching the course.',
    'Testimonials: Feedback and reviews from previous students.',
    'FAQ: Frequently asked questions about the course.'
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  useEffect(() => {
    document.title = `Edufree - Course Detail`;
  }, []);

  return (
    <>
      <Navigation />

      <div className="container lg:max-w-6xl mx-auto mt-28 font-poppins">
        <div className="flex flex-col mb-20 px-5 lg:px-0">
          <h2 className="font-medium text-xl lg:text-3xl text-gray-700">
            Web Design and Development
          </h2>
          <h1 className="font-semibold text-4xl lg:text-[42px] py-2">
            Web Programming Basics
          </h1>
          <p className="text-base font-medium text-gray-500">
            Understanding the basics of website creation
          </p>
        </div>

        <div className="lg:aspect-w-16 lg:aspect-h-9 mb-12 px-5 lg:px-0">
          <video
            className="inset-0 w-full h-[640px] object-cover object-center"
            controls
            poster="/images/course-pic1.jpg"
          >
            <source
              src="https://www.example.com/video.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="p-4 mb-52">
          <div className="w-full mx-auto">
            <ul className="flex flex-col md:flex-row lg:space-x-4">
              {tabContents.map((content, index) => (
                <li
                  key={index}
                  className={`flex-1 p-2 text-center cursor-pointer ${
                    activeTab === index + 1
                      ? 'bg-black text-white'
                      : 'bg-white text-gray-700'
                  }`}
                  onClick={() => handleTabClick(index + 1)}
                >
                  {content.split(': ')[0]}
                </li>
              ))}
            </ul>
            <div className="bg-white p-4 mt-24">
              {tabContents.map((content, index) => (
                <div
                  key={index}
                  className={`${activeTab === index + 1 ? 'block' : 'hidden'}`}
                >
                  <p className="w-full lg:w-[840px] mx-auto text-gray-500 text-base">
                    {content.split(': ')[1]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mb-52 p-5 lg:p-0">
          <div className="mb-20">
            <h1 className="text-2xl lg:text-[42px] font-semibold lg:w-[700px] w-[400px] mx-auto text-center mb-3 leading-snug px-5 lg:px-0">
              Don&apost Miss the Opportunity, Let&aposs Create Something Amazing!
            </h1>
            <p className="text-base font-medium text-center text-gray-500 px-5 lg:px-0">
              Access the free class by clicking the button below
            </p>
          </div>
          <div>
            <Link to="/course/success">
              <div className="px-10 lg:px-16 py-4 bg-color1 text-base font-semibold rounded-md uppercase text-center">
                <p className="tracking-wider">Join the Course</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
      <NavBottom />
    </>
  );
};

export default DetailCourse;
