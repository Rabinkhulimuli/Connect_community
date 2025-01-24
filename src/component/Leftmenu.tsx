import React from 'react'
import ProfileCard from './ProfileCard'
import Link from 'next/link'
import Image from 'next/image'
import Ad from '@/components/Ad'

function Leftmenu({type}:{type:"home" | "profile"}) {
  return (
    <div
    className='space-y-2'
    >
      {
        (type==="home") && (<ProfileCard/>)
      }
      <div
      className='p-4 bg-white rounded-lg shadow-md text-sm  text-gray-500 flex flex-col gap-2'
      >
        <Link href=""
        className='flex gap-2 items-center'
        >
        <Image 
        src="/posts.png"
        width={16}
        height={16}
        alt=""
        />
        <span>My Posts</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center' />
        <Link href=""
        className='flex gap-2 items-center'
        >
        <Image 
        src="/activity.png"
        width={16}
        height={16}
        alt=""
        />
        <span>Activity</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'
         />
        <Link href=""
        className='flex gap-2 items-center'
        >
        <Image 
        src="/market.png"
        width={16}
        height={16}
        alt=""
        />
        <span>Market place</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'
         />
        <Link href=""
        className='flex gap-2 items-center'
        >
        <Image 
        src="/events.png"
        width={16}
        height={16}
        alt=""
        />
        <span>Events</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'
         />
        <Link href=""
        className='flex gap-2 items-center'
        >
        <Image 
        src="/albums.png"
        width={16}
        height={16}
        alt=""
        />
        <span>Albums</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'
         />
        <Link href=""
        className='flex gap-2 items-center'
        >
        <Image 
        src="/videos.png"
        width={16}
        height={16}
        alt=""
        />
        <span>Videos</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'
         />
        <Link href=""
        className='flex gap-2 items-center'
        >
        <Image 
        src="/news.png"
        width={16}
        height={16}
        alt=""
        />
        <span>News</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'
         />
        <Link href=""
        className='flex gap-2 items-center'
        >
        <Image 
        src="/courses.png"
        width={16}
        height={16}
        alt=""
        />
        <span>Courses</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'
         />
        <Link href=""
        className='flex gap-2 items-center'
        >
        <Image 
        src="/lists.png"
        width={16}
        height={16}
        alt=""
        />
        <span>Lists</span>
        </Link>
        <hr className='border-t-1 border-gray-50 w-36 self-center'
         />
        <Link href=""
        className='flex gap-2 items-center'
        >
        <Image 
        src="/settings.png"
        width={16}
        height={16}
        alt=""
        />
        <span>Settings</span>
        </Link>
       
      </div>
      <Ad size={"sm"} />
    </div>
  )
}

export default Leftmenu
