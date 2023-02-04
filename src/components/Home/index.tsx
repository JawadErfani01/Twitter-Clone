import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoFileMedia, GoComment } from "react-icons/go";
import { HiOutlineGif } from "react-icons/hi2";
import { BiPoll, BiBarChart } from "react-icons/bi";
import { BsEmojiSmile } from "react-icons/bs";
import {
  AiOutlineSchedule,
  AiOutlineRetweet,
  AiOutlineHeart,
} from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import { Tweets } from "./tweets";
import { RiMoreLine } from "react-icons/ri";

const HomePage = () => {
  return (
    <div>
      <div className="sticky top-0  bg-white z-20 opacity-[0.97]">
        <h1 className="text-[22px] mx-4 py-2 font-semibold">Home</h1>
        <div className="flex  justify-around text-center mt-4 border-b w-full">
          <Link className="w-full  hover:bg-gray-200 py-4" href="/">
            <span className=" mx-auto border-b-4 border-[#20a2f8]  py-4 px-1">
              For you
            </span>
          </Link>
          <Link className="w-full hover:bg-gray-200 py-4" href="/">
            <span className=" mx-auto hover:border-b-4 hover:border-[#20a2f8]  py-4 px-1">
              Following
            </span>
          </Link>
        </div>
      </div>
      <div className="flex  justify-start   mx-4 mt-2">
        <div className="pt-0">
          <Image
            src="/assets/jawad.jpg"
            alt="jawad"
            className="rounded-full"
            width={55}
            height={55}
          />
        </div>
        <div className="w-full pt-4 mx-3">
          <textarea
            placeholder="What's happening?"
            className="border-none outline-none w-full px-2  text-xl"
          />
          <div className="text-[#20a2f8] flex flex-row justify-between ">
            <div className=" flex justify-between items-center w-[40%]">
              <i className="cursor-pointer">
                <GoFileMedia size={18} />
              </i>
              <i className="cursor-pointer">
                <HiOutlineGif size={18} />
              </i>
              <i className="cursor-pointer">
                <BiPoll size={18} />
              </i>
              <i className="cursor-pointer">
                <BsEmojiSmile size={18} />
              </i>
              <i className="cursor-pointer">
                <AiOutlineSchedule size={18} />
              </i>
              <i className="opacity-70">
                <SlLocationPin size={18} />
              </i>
            </div>
            <div className="flex-1 text-right ">
              <button
                disabled
                className=" bg-[#20a2f8] p-1.5 opacity-70 px-4 rounded-3xl text-white "
              >
                Tweet
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-3" />

      <Link
        className="w-full text-[#20a2f8]  hover:bg-gray-100 flex justify-center py-4 font-sans border-b"
        href="/"
      >
        Show 1,143 Tweets
      </Link>
      <div>
        {Tweets.map((tweet, index) => {
          return (
            <div key={index} className="hover:bg-gray-100">
              <div className="px-5 py-4 flex justify-start items-start gap-3">
                <Image
                  src={tweet.photo}
                  alt={tweet.name}
                  className="rounded-full"
                  width={50}
                  height={50}
                />
                <div className="w-full">
                  <div className="flex justify-between items-center w-full mb-1">
                    <div>
                      <h3 className="inline-block font-bold">{tweet.name}</h3>
                      <span className="text-sm opacity-60 mx-1">
                        {tweet.userName}
                      </span>
                      <span>.</span>

                      <span className="text-sm opacity-60 mx-1">
                        {tweet.messageHour}
                      </span>
                    </div>
                    <i className="font-bold">
                      <RiMoreLine size={18} />
                    </i>
                  </div>

                  <p className="opacity-75">{tweet.tweet}</p>

                  {tweet.hashtags.length > 0 &&
                    tweet.hashtags.map((hashtag, index) => {
                      return (
                        <div
                          className="text-[#20a2f8] inline-block my-2 mr-2"
                          key={index}
                        >
                          {hashtag}
                        </div>
                      );
                    })}

                  <div className="flex justify-between w-[80%] text-gray-500">
                    <div className="flex items-center group justify-center gap-1  text-center">
                      <i className="cursor-pointer  hover:text-[#20a2f8] p-2 transition duration-300 ease-linear rounded-full hover:bg-gray-200">
                        <GoComment size={18} className="" />
                      </i>
                      <span className="group-hover:text-[#20a2f8] text-sm italic">
                        {tweet.NComment}
                      </span>
                    </div>
                    <div className="flex items-center group justify-center gap-1  text-center">
                      <i className="cursor-pointer  hover:text-[#4aca00] p-2 transition duration-300 ease-linear rounded-full hover:bg-[#e3f5d9]">
                        <AiOutlineRetweet size={18} className="" />
                      </i>
                      <span className="group-hover:text-[#4aca00] text-sm italic">
                        {tweet.NRetweet}
                      </span>
                    </div>
                    <div className="flex items-center group justify-center gap-1  text-center">
                      <i className="cursor-pointer  hover:text-[#f71184] p-2 transition duration-300 ease-linear rounded-full hover:bg-[#f3cee1]">
                        <AiOutlineHeart size={18} className="" />
                      </i>
                      <span className="group-hover:text-[#f71184] text-sm italic">
                        {tweet.NLike}
                      </span>
                    </div>
                    <div className="flex items-center group justify-center gap-1  text-center">
                      <i className="cursor-pointer  hover:text-[#20a2f8] p-2 transition duration-300 ease-linear rounded-full hover:bg-gray-200">
                        <BiBarChart size={20} className="" />
                      </i>
                      <span className="group-hover:text-[#20a2f8] text-sm italic">
                        {tweet.NView}
                      </span>
                    </div>
                    <div className="flex items-center group justify-center gap-1  text-center">
                      <i className="cursor-pointer  hover:text-[#20a2f8] p-2 transition duration-300 ease-linear rounded-full hover:bg-gray-200">
                        <AiOutlineSchedule size={18} className="" />
                      </i>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
