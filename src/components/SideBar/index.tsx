import Link from "next/link";
import React from "react";
import { FaTwitter, FaHashtag, FaRegBookmark } from "react-icons/fa";
import { RiHome7Fill } from "react-icons/ri";
import { IoPeopleOutline, IoNotificationsOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { BsPerson } from "react-icons/bs";
import { CgMoreO } from "react-icons/cg";
import { RiMoreLine } from "react-icons/ri";
import Image from "next/image";
const SideBar = () => {
  return (
    <div className="  h-screen  flex flex-col items-start justify-between my-1 ">
      <div className="flex flex-col items-start text-center   justify-center  w-full">
        <Link
          href="/"
          className="hover:bg-blue-100  rounded-full p-3  transition duration-200 cursor-pointer ease-linear ml-2"
        >
          <FaTwitter className="text-[#1d9bf0]" size={28} />
        </Link>
        <Link
          href="/"
          className="flex justify-center items-center px-5 hover:bg-gray-200  rounded-full p-3  transition duration-200 cursor-pointer ease-linear"
        >
          <RiHome7Fill size={24} />
          <span className="ml-5 text-xl font-semibold">Home</span>
        </Link>
        <Link
          href="/hashtag"
          className="flex justify-center items-center px-5 hover:bg-gray-200  rounded-full p-3 transition duration-200 cursor-pointer ease-linear "
        >
          <FaHashtag size={24} />
          <span className="ml-5 text-xl ">Explore</span>
        </Link>
        <Link
          href="/hashtag"
          className=" flex justify-center items-center px-5 hover:bg-gray-200  rounded-full p-3 transition duration-200 cursor-pointer ease-linear "
        >
          <IoPeopleOutline size={28} />
          <span className="ml-5 text-xl ">Communities</span>
        </Link>
        <Link
          href="/hashtag"
          className="flex justify-center items-center px-5 hover:bg-gray-200  rounded-full p-3 transition duration-200 cursor-pointer ease-linear "
        >
          <IoNotificationsOutline size={24} />
          <span className="ml-5 text-xl ">Notifications</span>
        </Link>
        <Link
          href="/hashtag"
          className=" flex justify-center items-center px-5 hover:bg-gray-200  rounded-full p-3 transition duration-200 cursor-pointer ease-linear "
        >
          <MdOutlineEmail size={24} />
          <span className="ml-5 text-xl ">Messages</span>
        </Link>
        <Link
          href="/hashtag"
          className="flex justify-center items-center px-5 hover:bg-gray-200  rounded-full p-3 transition duration-200 cursor-pointer ease-linear "
        >
          <FaRegBookmark size={24} />
          <span className="ml-5 text-xl ">Bookmarks</span>
        </Link>
        <Link
          href="/profile"
          className=" flex justify-center items-center px-5 hover:bg-gray-200  rounded-full p-3 transition duration-200 cursor-pointer ease-linear "
        >
          <BsPerson size={24} />
          <span className="ml-5 text-xl ">Profile</span>
        </Link>
        <Link
          href="/hashtag"
          className="flex justify-center items-center px-5 hover:bg-gray-200  rounded-full p-3 transition duration-200 cursor-pointer ease-linear "
        >
          <CgMoreO size={24} />
          <span className="ml-5 text-xl ">More</span>
        </Link>
        <Link
          href="/hashtag"
          className="flex justify-center mx-4 items-center px-5 bg-[#1d9bf0] hover:bg-[#198edb] my-2 w-[85%] rounded-full p-3 transition duration-200 cursor-pointer ease-linear text-lg  text-white"
        >
          Tweet
        </Link>
      </div>
      <div className=" w-full mb-5 mx-auto ">
        <Link
          href="/hashtag"
          className="flex justify-between mx-auto items-center w-[90%] px-4 hover:bg-gray-200  rounded-full py-2 transition duration-200 cursor-pointer ease-linear "
        >
          <div className="flex justify-center items-center ">
            <Image
              src="/assets/jawad.jpg"
              alt="jawad"
              className="rounded-full"
              width={40}
              height={40}
            />
            <div className="flex flex-col mx-3">
              <h3 className=" text-[16px] flex font-bold ">Jawad Erfani</h3>
              <span className="opacity-50 text-sm ">@JawadErfani01</span>
            </div>
          </div>
          <i>
            <RiMoreLine size={24} />
          </i>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
