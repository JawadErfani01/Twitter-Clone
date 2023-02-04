import React from "react";
import { FaSearch } from "react-icons/fa";
import { RiMoreLine } from "react-icons/ri";
import { trends } from "./trends";
const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search Twitter"
        className="w-full bg-gray-100 placeholder:font-serif placeholder:text-slate-600 mx-auto px-6 pl-12 border-none  hover:border-[#20a2f8] hover:border  outline-none rounded-full py-[10px]"
      />
      <i className="absolute left-[20px] text-gray-500 top-[14px]  hover:text-[#20a2f8]">
        <FaSearch />
      </i>
      <div className="my-3 rounded-xl  bg-slate-100">
        <h2 className="text-[20px] font-bold px-5 p-3 ">Trends for you</h2>
        {trends.map((trend, index) => {
          return (
            <div
              className="px-5  py-2 w-full mx-0  hover:bg-gray-200 flex justify-between "
              key={index}
            >
              <div>
                <h3 className="opacity-50 text-sm">Trending</h3>
                <p>{trend.category}</p>
                <span className="opacity-50 text-sm">{trend.NTweets}</span>
              </div>
              <i className="mt-1">
                <RiMoreLine size={22} />
              </i>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchBar;
