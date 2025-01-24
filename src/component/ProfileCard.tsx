import Image from 'next/image'
import React from 'react'

function ProfileCard() {
  return (
    <div
    className='p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-6'
    >
      <div
      className='relative h-20'
      >
        <Image 
        src="https://images.pexels.com/photos/30291055/pexels-photo-30291055/free-photo-of-coastal-railway-line-in-taitung-county-taiwan.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt=""
        fill
        className='rounded-md '
        />
        <Image 
        src="https://images.pexels.com/photos/28480552/pexels-photo-28480552/free-photo-of-majestic-ferry-under-bridge-on-foggy-day.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt=""
        width={48}
        height={48}
        className='z-10 w-12 h-12 rounded-full absolute object-cover left-0 right-0 m-auto -bottom-6 border-white  ring-2 ring-white '
        />
      </div>
     <div
     className='flex flex-col items-center gap-1'
     >
      <span
      className='font-bold '
      >userName</span>
      <div
      className='flex items-center gap-2'
      >
        <div
        className='flex '
        >
          <Image 
          alt=""
          src="/friends.png"
          width={12}
          height={12}
          />
          <Image 
          alt=""
          src="/friends.png"
          width={12}
          height={12}
          />
          <Image 
          alt=""
          src="/friends.png"
          width={12}
          height={12}
          />
          
        </div>
        <span
        className='text-xs text-gray-500 '
        >no follower</span>
      </div>
      <button
      className='bg-blue-500 text-white text-xs p-2 rounded-md '
      >My Profile</button>
     </div>
    </div>
  )
}

export default ProfileCard
