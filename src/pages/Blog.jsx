import { useEffect } from 'react';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import NavBottom from '../components/NavigationBottom';

const Blog = () => {
  useEffect(() => {
    document.title = `Edufree - Blog`;
  }, []);

  return (
    <>
      <Navigation />

      <section className="w-full container mx-auto font-poppins flex flex-col justify-center items-center mt-20">
        <div className="flex flex-col mb-12 px-5 lg:px-0">
          <div className="bg-black text-white px-1 py-1 rounded w-[154px] flex justify-center font-medium text-base items-center">
            <p># Tips & Tricks</p>
          </div>
          <div className="w-full lg:w-[855px] py-2">
            <h1 className="font-semibold text-[42px]">
              Easy Ways to Start Learning Programming - EDUFREE
            </h1>
          </div>
          <div className="text-base text-gray-600">
            <p>
              <span className="font-bold">Dimas Rizky</span> posted on 27
              January 2023
            </p>
          </div>
        </div>
      </section>

      <section className="w-full container mx-auto font-poppins flex flex-col justify-center items-center px-5 lg:px-0">
        <div className="mb-12">
          <img
            src="/images/blog-cover.jpg"
            alt="blog-cover"
            className="rounded-none"
          />
        </div>
      </section>

      <section className="w-full lg:w-[855px] mx-auto font-poppins flex flex-col justify-center items-center px-5 lg:px-0">
        <div className="flex flex-col mb-12">
          <div>
            <p className="flex justify-center flex-col text-base text-gray-500 leading-relaxed mb-20 px-5 lg:px-0">
              Before learning programming, first understand what programming is.
              Programming involves using one or more algorithms in a programming language to produce a program on a computer. Once you grasp the basic concept of programming, it's time to discuss tips & tricks and how to learn programming from scratch if you're just starting. Don’t worry, it’s quite simple.
              <br />
              <span className="py-6 font-medium text-2xl text-gray-800">
                1. Choose a programming language to learn and master it
              </span>{' '}
              The first step in self-taught programming is to determine which programming language you will learn. Choosing a programming language is crucial for focusing your learning efforts. Studying programming languages randomly will only hinder your learning process. <br /> <br />
              Tips for choosing a programming language should be based on your own skills. It’s important to know your abilities so you can learn programming languages more easily. <br /> <br /> If you're a beginner, start with HTML. Once you’re proficient in HTML, you can move on to other topics. As a beginner, focus on the easiest programming languages first.
              <br /> <br /> However, mastering just one programming language is not enough. You should also improve the following: <br /> <br />
              <ul className="flex flex-col lg:pl-5 px-5">
                <li className="list-disc">
                  Improve your learning by tackling more complex programming languages
                </li>
                <li className="list-disc">
                  Create small notes to record important points in the programming language you’re learning
                </li>
                <li className="list-disc">
                  Review notes as often as possible to avoid forgetting them
                </li>
              </ul>{' '}
              <span className="py-6 font-medium text-2xl text-gray-800">
                2. Use modules or programming reading materials with complete tutorials
              </span>{' '}
              The second step in learning programming is to use modules or books as supporting tools. Modules and books can be effective tools to accelerate your programming learning process.
              <br /> <br /> Choose modules and books with complete programming tutorials. If you’re using multiple modules or books, make sure to organize them sequentially so you don’t have trouble learning. <br /> <br />
              Using separate and scattered materials will only prolong your learning process. Therefore, always keep track of the reading materials you use while learning programming.
              <br /> <br /> Psst... you can also find programming learning modules in free courses on EDUFREE.
              <span className="py-6 font-medium text-2xl text-gray-800">
                3. Create and stick to a programming learning schedule
              </span>
              The third step in learning programming is to create a study schedule. You can make a daily or weekly study plan. Creating a study schedule will help you understand programming more quickly.
              <br /> <br /> You need to force yourself to stick to the study schedule you’ve created. Avoid skipping study sessions, even if it&aposs just once. If you let this happen, it will increase your reluctance to study.
              <br /> <br /> On the other hand, if you study diligently and follow your schedule, studying will eventually become a habit.
              <br /> <br /> When creating a programming study schedule, you can allocate around 1 to 2 hours a day for learning programming. There’s no need to study programming every day if you don’t have enough time.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <NavBottom />
    </>
  );
};

export default Blog;
