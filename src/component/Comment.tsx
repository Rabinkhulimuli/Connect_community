import React from "react";
import Image from "next/image";
function Comment() {
  return (
    <div>
        <div className="flex items-center my-2 gap-4 justify-items-center" >
      <Image
        src="https://images.pexels.com/photos/29495423/pexels-photo-29495423/free-photo-of-airplane-contrail-in-baku-s-clear-sky.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        alt=""
        className="w-12 h-12  object-cover shrink-0  rounded-full   "
        width={48}
        height={48}
      />
      <div className=" flex w-full  bg-slate-200 rounded-lg p-1">
        <input
          className="w-full p-1 bg-transparent outline-none "
          type="text"
          placeholder="write a comment ..."
        />
        <div className="flex ">
          <Image
            src="/emoji.png"
            alt=""
            className="w-5 h-5 cursor-pointer  self-end "
            width={20}
            height={20}
          />
        </div>
      </div>
    </div>
    <div
    className="flex gap-4"
    >
    <Image
        src="https://images.pexels.com/photos/29495423/pexels-photo-29495423/free-photo-of-airplane-contrail-in-baku-s-clear-sky.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
        alt=""
        className="w-12 h-12  object-cover shrink-0  rounded-full   "
        width={48}
        height={48}
      />
      <div
      className=" flex items-start text-justify justify-between"
      >
        <div
        className="flex flex-col gap-2"
        >
        <span  
        className="font-medium"
        >Dustin Divis</span>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ipsa nobis libero aliquam, tempore itaque unde recusandae, harum necessitatibus optio dicta minima laboriosam? Aperiam, quibusdam maiores qui quia pariatur voluptatem.

        </p>
        <div>
            <div 
            className=" flex items-center  gap-4 "
            >
            <Image
            src="/like.png"
            alt=""
            className=" cursor-pointer  "
            width={12}
            height={12}
          />
          <span className="text-gray-300 text-xs" > 123 <span>Likes</span> </span>
            <span className="text-gray-500 text-xs">reply</span>
            </div>
        </div>
        </div>
            <Image width={16} height={16} alt="" 
                        className="rounded-full "
                        src="/more.png" 
                        />
      </div>
    </div>
    </div>
    
  );
}

export default Comment;
