
import { HomeIcon, MenuIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import Image from "next/image";

function Navbar() {
  return (
    <div className=" grid grid-cols-10">
      {/* left */}
      <div className="w-full font-bold  col-span-2 hidden sm:block  justify-between">
        <Link href="/" className="flex gap-1">
          LookUp
        </Link>
      </div>
      {/* center */}
      <div className=" lg:col-span-6 col-span-8 flex px-1 gap-4 text-sm">
        <Link href="" className="flex gap-2 items-center" >
          <HomeIcon  className=" size-5 text-blue-300" />
          <span >Homepage</span>
        </Link>
        <Link href="" className="flex gap-2 items-center" >
          <Image src="/friends.png" width={16} height={16} alt="png" />
          <span>Friends</span>
        </Link>
        <Link href="/" className="flex gap-2 items-center" >
          <Image src="/stories.png" width={16} height={16} alt="png" />
          <span>Stories</span>
        </Link>
        </div>
      {/* right */}
      <div className=" col-span-2 w-full flex items-center justify-end ">
 <div className=" sm:hidden ">
        <MobileNav/>
      </div>
      </div>
     
    </div>
  );
}

export default Navbar;
