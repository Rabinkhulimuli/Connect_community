import Feed from "@/component/Feed";
import Leftmenu from "@/component/Leftmenu";
import RightMenu from "@/component/RightMenu";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <>
      <div className="flex  gap-6 pt-6">
        <div className="w-[20%] hidden lg:block ">
          <Leftmenu type="profile" />
        </div>
        <div className="w-full md:w-[70%] lg:w-[50%]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center justify-center">
              <div className=" h-64 w-full relative">
                <Image
                  src="https://images.pexels.com/photos/30320508/pexels-photo-30320508/free-photo-of-abstract-floral-blur-with-vibrant-iris-flowers.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                  alt=""
                  fill
                  className="object-cover "
                />
                <Image
                  src="https://images.pexels.com/photos/14066935/pexels-photo-14066935.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                  alt=""
                  width={128}
                  height={128}
                  className=" w-32 h-32 left-0 right-0 m-auto -bottom-16 ring-2 ring-white rounded-full absolute object-cover"
                />
              </div>
              <h1
              className="mt-20 mb-4 text-2xl  font-medium "
              >
                username
              </h1>
              <div
              className="flex items-center justify-center mb-4 gap-12"
              >
                <div
                className="flex flex-col items-center"
                >
                  <span
                  className="font-bold text-sm uppercase"
                  >142</span>
                  <span
                  className="text-sm"
                  >Posts</span>
                </div>
                <div
                className="flex flex-col items-center"
                >
                  <span
                  className="font-bold text-sm uppercase"
                  >14k</span>
                  <span
                  className="text-sm"
                  >Followers</span>
                </div>
                <div
                className="flex flex-col items-center"
                >
                  <span
                  className="font-bold text-sm uppercase"
                  >14k</span>
                  <span
                  className="text-sm"
                  >Following</span>
                </div>
              </div>
            </div>
          </div>
           <Feed />
        </div>

       

        <div className="w-[30%] hidden md:block ">
          <RightMenu userId="test1" />{" "}
        </div>
      </div>
    </>
  );
}

export default page;
