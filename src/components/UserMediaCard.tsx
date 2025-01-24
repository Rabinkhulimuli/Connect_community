import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function UserMediaCard({userId}:{userId:string}) {
  return (
    <div
    className='p-4 bg-white rounded-lg  shadow-md text-sm flex flex-col gap-4'
    >
        <div
        className='flex justify-between items-center font-medium'
        >
            <span
            className='text-gray-500'
            >User Information {userId} </span>
            <Link
            className='text-blue-500 text-xs'
            href="/">See all</Link>
        </div>
        {/* BOTTOM */}
        <div
        className='flex gap-4 justify-between flex-wrap'
        >
          <div
          className='relative w-1/5 h-24'
          >
            <Image src="https://images.pexels.com/photos/29851518/pexels-photo-29851518/free-photo-of-charming-alley-in-provence-s-historic-village.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            fill alt=""
            className=' object-cover rounded-md'
            />
          </div>
          <div
          className='relative w-1/5 h-24'
          >
            <Image src="https://images.pexels.com/photos/29851518/pexels-photo-29851518/free-photo-of-charming-alley-in-provence-s-historic-village.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            fill alt=""
            className='object-cover rounded-md'
            />
          </div>
          <div
          className='relative w-1/5 h-24'
          >
            <Image src="https://images.pexels.com/photos/29851518/pexels-photo-29851518/free-photo-of-charming-alley-in-provence-s-historic-village.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            fill alt=""
            className='object-cover rounded-md'
            />
          </div>
          <div
          className='relative w-1/5 h-24'
          >
            <Image src="https://images.pexels.com/photos/29851518/pexels-photo-29851518/free-photo-of-charming-alley-in-provence-s-historic-village.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            fill alt=""
            className='object-cover rounded-md'
            />
          </div>
          <div
          className='relative w-1/5 h-24'
          >
            <Image src="https://images.pexels.com/photos/29851518/pexels-photo-29851518/free-photo-of-charming-alley-in-provence-s-historic-village.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            fill alt=""
            className='object-cover rounded-md'
            />
          </div>
          <div
          className='relative w-1/5 h-24'
          >
            <Image src="https://images.pexels.com/photos/29851518/pexels-photo-29851518/free-photo-of-charming-alley-in-provence-s-historic-village.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            fill alt=""
            className='object-cover rounded-md'
            />
          </div>
          <div
          className='relative w-1/5 h-24'
          >
            <Image src="https://images.pexels.com/photos/29851518/pexels-photo-29851518/free-photo-of-charming-alley-in-provence-s-historic-village.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
            fill alt=""
            className='object-cover rounded-md'
            />
          </div>
        </div>
    </div>
  )
}

export default UserMediaCard
