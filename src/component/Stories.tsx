import Image from "next/image";
import React from "react";

function Stories() {
  return (
    <div>
      <div className=" p-4 rounded-lg shadow-md overflow-scroll bg-white text-xs scrollbar-hide">
        <div className="flex gap-8 w-max">
          <div className=" flex flex-col items-center  cursor-pointer">
            <Image
              className=" rounded-full w-20 h-20 ring-2 "
              src="https://images.pexels.com/photos/29399294/pexels-photo-29399294/free-photo-of-serene-winter-landscape-with-snowy-mountains.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
              width={80}
              height={80}
              alt="image"
            />
            <span>Cole</span>
          </div>
          <div className=" flex flex-col items-center  cursor-pointer">
            <Image
              className=" rounded-full w-20 h-20 ring-2 "
              src="https://images.pexels.com/photos/29399294/pexels-photo-29399294/free-photo-of-serene-winter-landscape-with-snowy-mountains.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
              width={80}
              height={80}
              alt="image"
            />
            <span>Cole</span>
          </div>
          <div className=" flex flex-col items-center  cursor-pointer">
            <Image
              className=" rounded-full w-20 h-20 ring-2 "
              src="https://images.pexels.com/photos/29399294/pexels-photo-29399294/free-photo-of-serene-winter-landscape-with-snowy-mountains.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
              width={80}
              height={80}
              alt="image"
            />
            <span>Cole</span>
          </div>
          <div className=" flex flex-col items-center  cursor-pointer">
            <Image
              className=" rounded-full w-20 h-20 ring-2 "
              src="https://images.pexels.com/photos/29399294/pexels-photo-29399294/free-photo-of-serene-winter-landscape-with-snowy-mountains.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
              width={80}
              height={80}
              alt="image"
            />
            <span>Cole</span>
          </div>
          <div className=" flex flex-col items-center  cursor-pointer">
            <Image
              className=" rounded-full w-20 h-20 ring-2 "
              src="https://images.pexels.com/photos/29399294/pexels-photo-29399294/free-photo-of-serene-winter-landscape-with-snowy-mountains.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
              width={80}
              height={80}
              alt="image"
            />
            <span>Cole</span>
          </div>
          <div className=" flex flex-col items-center  cursor-pointer">
            <Image
              className=" rounded-full w-20 h-20 ring-2 "
              src="https://images.pexels.com/photos/29399294/pexels-photo-29399294/free-photo-of-serene-winter-landscape-with-snowy-mountains.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
              width={80}
              height={80}
              alt="image"
            />
            <span>Cole</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stories;
