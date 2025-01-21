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
            >User Information</span>
            <Link
            className='text-blue-500 text-xs'
            href="/">See all</Link>
        </div>
        
    </div>
  )
}

export default UserMediaCard
