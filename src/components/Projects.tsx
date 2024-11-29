import { useState } from 'react';

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-full w-full flex flex-row">

      <div
        className={`relative  left-0 h-[96px] bg-purple-500 text-white transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ width: "20%" }}
      >
        <ul className="p-5 text-teal-100">
          <li>Data Scientist</li>
        </ul>
      </div>
      <button
        className="rounded-full px-10 relative text-purple-100 hover:opacity-70 opacity-90  ml-2 p-2 bg-purple-700  shadow-md top-0 "
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
    </div>
  );
};

export default Projects;
