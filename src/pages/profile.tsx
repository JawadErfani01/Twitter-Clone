import { Tweets } from "@/components/Home/tweets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { GoComment } from "react-icons/go";

import { BiBarChart } from "react-icons/bi";

import {
  AiOutlineSchedule,
  AiOutlineRetweet,
  AiOutlineHeart,
} from "react-icons/ai";
import { RiMoreLine } from "react-icons/ri";
function profile() {
  return (
    <div className=" py-2">
      <div className="flex px-4 gap-x-6 items-center">
        <Link href="/" className="p-2 rounded-full hover:bg-gray-200">
          <BiArrowBack size={20} />
        </Link>
        <div className="mx-2 font-serif">
          <h2 className="text-xl pb-0 mb-0 font-bold">Jawad Erfani</h2>
          <span className="text-sm text-gray-500">409 Tweets</span>
        </div>
      </div>
      <div className="relative">
        <Image
          src="/assets/jawad.png"
          alt="Jawad"
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-auto"
        />

        <Image
          src="/assets/jawad.jpg"
          alt="Jawad"
          className="rounded-full absolute left-4 border-4 border-white -bottom-16"
          width={140}
          height={140}
        />
      </div>
      <div className="flex justify-end">
        <Link
          href="/"
          className="py-1.5 px-4 text-sm  hover:bg-gray-300 border font-semibold rounded-3xl  m-4"
        >
          Edit profile
        </Link>
      </div>
      <div className="mx-4 font-serif">
        <h2 className="text-xl pb-0 mb-0 font-bold">Jawad Erfani</h2>
        <span className="text-sm text-gray-500">@JawadErfani01</span>

        <p className="mt-4">
          Front-end Developer | tweet about web Development🖋 | learning Web3 and
          sharing tip and tricks of my journey | DM📨 open for any programmer
        </p>
        <div className="my-4 font-sans">
          <Link href="/following">
            <strong>1,166</strong>
            <span className="opacity-60">Following</span>
          </Link>
          <Link className="mx-3 " href="/followers">
            <strong>1,118 </strong>
            <span className="opacity-60"> Followers</span>
          </Link>
        </div>
      </div>
      <div className="flex  justify-around text-center mt-5 border-b w-full">
        <Link className="w-full  hover:bg-gray-200 py-4" href="/">
          <span className=" mx-auto border-b-4 border-[#20a2f8]  py-3 px-1">
            Tweets
          </span>
        </Link>
        <Link className="w-full hover:bg-gray-200 py-4" href="/">
          <span className=" mx-auto hover:border-b-4 hover:border-[#20a2f8]  py-3 px-1">
            Tweets & replies
          </span>
        </Link>
        <Link className="w-full hover:bg-gray-200 py-4" href="/">
          <span className=" mx-auto hover:border-b-4 hover:border-[#20a2f8]  py-3 px-1">
            Media
          </span>
        </Link>
        <Link className="w-full hover:bg-gray-200 py-4" href="/">
          <span className=" mx-auto hover:border-b-4 hover:border-[#20a2f8]  py-3 px-1">
            Likes
          </span>
        </Link>
      </div>
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
}

export default profile;
