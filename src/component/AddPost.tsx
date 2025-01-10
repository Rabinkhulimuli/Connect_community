import Image from "next/image";
import React from "react";

function AddPost() {
  return (
    <div className=" p-4 bg-white  shadow-md rounded-lg flex gap-4 justify-between text-sm" >
      <div className="flex items-start justify-start  gap-2 my-1 w-full">
        {/* Avatar */}
        <Image
          src="https://images.pexels.com/photos/29495423/pexels-photo-29495423/free-photo-of-airplane-contrail-in-baku-s-clear-sky.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
          alt=""
          className="w-14 h-12   object-cover rounded-full   "
          width={48}
          height={48}
        />

        {/* text input */}
        <div className=" flex flex-col w-full   ">
          <div className="flex gap-1 px-1  ">
            
              <textarea
                placeholder="whats on your mind ?"
                className="p-2 flex w-full rounded-lg "
              />
              <div className="flex">
                <Image
                src="/emoji.png"
                alt=""
                className="w-5 h-5 cursor-pointer  self-end "
                width={20}
                height={20}
              />
              </div>
              
           
          </div>

          {/* options */}
          <div className="flex gap-4 items-center justify-around mt-4 flex-wrap">
            <div className="flex items-center gap-2 cursor-pointer">
              <Image src="/addimage.png" width={20} height={20} alt="" />
              <span>Image</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <Image src="/addvideo.png" width={20} height={20} alt="" />
              <span>video</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <Image src="/poll.png" width={20} height={20} alt="" />
              <span>Poll</span>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <Image src="/addevent.png" width={20} height={20} alt="" />
              <span>Event</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
