import { HomeIcon, LoaderIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";
import Image from "next/image";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { SignedIn, SignedOut } from "@clerk/nextjs";

function Navbar() {
  return (
    <div className=" h-24 flex items center justify-between">
      {/* left */}
      <div className="w-[20%] flex   items-center ">
        <Link href="/" className="font-bold text-xl text-blue-600">
          LookUp
        </Link>
      </div>
      {/* center */}
      <div className="  hidden sm:flex  w-[50%] items-center justify-between text-sm">
        <div className="flex items-center gap-6 text-gray-600">
          <Link href="" className="flex gap-2 items-center">
          <HomeIcon className=" size-5 text-blue-300" />
          <span>Homepage</span>
        </Link>
        <Link href="" className="flex gap-2 items-center">
          <Image src="/friends.png" width={16} height={16} alt="png" />
          <span>Friends</span>
        </Link>
        <Link href="/" className="flex gap-2 items-center">
          <Image src="/stories.png" width={16} height={16} alt="png" />
          <span>Stories</span>
        </Link>
        <div className="px-2 py-1 bg-slate-100 rounded-xl ">
          <label htmlFor="searchI" className="flex items-center" >
          <input type="text"
          name="searchI"
          id="searchI"
           className=" w-full block bg-transparent outline-none" 
            placeholder="Search..."
          />
          <Image src="/search.png" width={14} height={14} alt="search png" />
          </label>
        </div>
        </div>
        
      </div>
      {/* right */}
      <div className=" w-[30%] flex items-center gap-4 xl:gap-8 justify-end ">
        
          <div className=" sm:hidden  block ">
            <MobileNav />
          </div>
          <ClerkLoading>
            <div className="">
            <LoaderIcon
              className=" animate-spin"
            />
          </div>
          
          </ClerkLoading>
          <div className=" sm:block hidden">
          <ClerkLoaded>
            <SignedIn >
              <div className="flex gap-4  items-center " >
                 <div className="cursor-pointer">
                <Image src="/people.png" width={24} height={24} alt="profile png" />
              </div>
              <div className="cursor-pointer">
                <Image src="/messages.png" width={20} height={20} alt="profile png" />
              </div>
              <div className="cursor-pointer">
                <Image src="/notifications.png" width={20} height={20} alt="profile png" />
              </div>
               <UserButton  />
              </div>
    
            </SignedIn>
            <SignedOut>
             <div>
             
              <Link href="/sign-in">Log in/Register</Link>
             
             </div>
            </SignedOut>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
