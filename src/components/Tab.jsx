import { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabContents = [
    'Online Course 1: Learn the basics of programming.',
    'Online Course 2: Learn web development.',
    'Online Course 3: Master the Python programming language.',
    'Online Course 4: Attractive UI/UX design.',
    'Online Course 5: Software project management.',
    'Online Course 6: Cybersecurity and ethics.',
    'Online Course 7: Building mobile applications.',
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="w-full mx-auto">
      <div className="bg-gray-100 p-4">
        <div className="container lg:max-w-5xl mx-auto">
          <ul className="flex space-x-4">
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
                Tab {index + 1}
              </li>
            ))}
          </ul>
          <div className="bg-white p-4 mt-4">
            {tabContents.map((content, index) => (
              <div
                key={index}
                className={`${activeTab === index + 1 ? 'block' : 'hidden'}`}
              >
                <p>{tabContents[index]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
