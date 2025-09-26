import React, { useEffect, useState } from 'react';
import Card from "../components/Card.jsx";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';
import ai from '../assets/SearchAi.png'
import { useSelector } from 'react-redux';

function AllCourses() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const [filterCourses, setFilterCourses] = useState([]);
  const { courseData } = useSelector(state => state.course);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value));
    } else {
      setCategory(prev => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let courseCopy = courseData.slice();
    if (category.length > 0) {
      courseCopy = courseCopy.filter(item => category.includes(item.category));
    }
    setFilterCourses(courseCopy);
  };

  useEffect(() => {
    setFilterCourses(courseData);
  }, [courseData]);

  useEffect(() => {
    applyFilter();
  }, [category]);

  return (
    // The main wrapper no longer needs flex or a fixed height.
    <div className="bg-gray-50">
      <Nav />
      {/* Toggle Button for mobile */}
      <button
        onClick={() => setIsSidebarVisible(prev => !prev)}
        className="fixed top-20 left-4 z-50 bg-white text-black px-3 py-1 rounded md:hidden border-2 border-black"
      >
        {isSidebarVisible ? 'Hide' : 'Show'} Filters
      </button>

      {/* Sidebar remains fixed */}
      <aside className={`w-[260px] h-screen overflow-y-auto bg-black fixed top-0 left-0 p-6 py-[80px] border-r border-gray-200 shadow-md transition-transform duration-300 
        ${isSidebarVisible ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0`}>
        
        <h2 className="text-xl font-bold flex items-center justify-center gap-2 text-gray-50 mb-6">
          <FaArrowLeftLong className='text-white cursor-pointer' onClick={() => navigate("/")} />
          Filter by Category
        </h2>

        <form className="space-y-4 text-sm bg-gray-600 border-white text-[white] border p-[20px] rounded-2xl" onSubmit={(e) => e.preventDefault()}>
          <button className='px-[10px] py-[10px] bg-black text-white rounded-[10px] text-[15px] font-light flex items-center justify-center gap-2 cursor-pointer hover:bg-[#2d292e]' onClick={() => navigate("/searchwithai")}>
            Search with AI <img src={ai} className='w-[30px] h-[30px] hover:underline rounded-full' alt="AI Search Icon" />
          </button>
          
          {/* Checkboxes */}
          <label className="flex items-center gap-3 cursor-pointer hover:text-gray-200 transition">
            <input type="checkbox" className="hover:underline accent-black w-4 h-4 rounded-md" value={'App Development'} onChange={toggleCategory} />
            App Development
          </label>
          <label className="flex items-center gap-3 cursor-pointer hover:text-gray-200 transition">
            <input type="checkbox" className="accent-black w-4 h-4 rounded-md" value={'AI/ML'} onChange={toggleCategory} />
            AI/ML
          </label>
          <label className="flex items-center gap-3 cursor-pointer hover:text-gray-200 transition">
            <input type="checkbox" className="accent-black w-4 h-4 rounded-md" value={'AI Tools'} onChange={toggleCategory} />
            AI Tools
          </label>
          <label className="flex items-center gap-3 cursor-pointer hover:text-gray-200 transition">
            <input type="checkbox" className="accent-black w-4 h-4 rounded-md" value={'Data Science'} onChange={toggleCategory} />
            Data Science
          </label>
          <label className="flex items-center gap-3 cursor-pointer hover:text-gray-200 transition">
            <input type="checkbox" className="accent-black w-4 h-4 rounded-md" value={'Data Analytics'} onChange={toggleCategory} />
            Data Analytics
          </label>
          <label className="flex items-center gap-3 cursor-pointer hover:text-gray-200 transition">
            <input type="checkbox" className="accent-black w-4 h-4 rounded-md" value={'Ethical Hacking'} onChange={toggleCategory} />
            Ethical Hacking
          </label>
          <label className="flex items-center gap-3 cursor-pointer hover:text-gray-200 transition">
            <input type="checkbox" className="accent-black w-4 h-4 rounded-md" value={'UI UX Designing'} onChange={toggleCategory} />
            UI UX Designing
          </label>
          <label className="flex items-center gap-3 cursor-pointer hover:text-gray-200 transition">
            <input type="checkbox" className="accent-black w-4 h-4 rounded-md" value={'Web Development'} onChange={toggleCategory} />
            Web Development
          </label>
          <label className="flex items-center gap-3 cursor-pointer hover:text-gray-200 transition">
            <input type="checkbox" className="accent-black w-4 h-4 rounded-md" value={'Others'} onChange={toggleCategory} />
            Others
          </label>
        </form>
      </aside>

      {/* Main Courses Section now has min-h-screen to push the footer down */}
      <main className="w-full min-h-screen transition-all duration-300 py-[130px] md:pl-[300px] flex items-start justify-center md:justify-start flex-wrap gap-6 px-[10px] cursor-pointer">
        {
          filterCourses?.map((item, index) => (
            <Card key={index} thumbnail={item.thumbnail} title={item.title} price={item.price} category={item.category} id={item._id} reviews={item.reviews} />
          ))
        }
      </main>
    </div>
  );
}

export default AllCourses;
