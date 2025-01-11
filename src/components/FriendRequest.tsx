import Image from 'next/image'
import React from 'react'

function FriendRequest() {
  return (
    <div>
      FriendRequest
      <div className=' flex flex-col gap-4 text-sm shadow-md rounded-lg p-1' >
        {/* top */}
        <div  
        className='flex items-center justify-between  font-medium '
        >
            <span
            className="text-gray-500"
            >Friend Request</span>
            <span
            className="text-blue-500"
            >See all</span>
        </div>
        {/* profile list */}
        <div className='flex items-center justify-between' >
           <div className='flex items-center gap-2 justify-center ' >
            <Image src="https://images.pexels.com/photos/18074916/pexels-photo-18074916/free-photo-of-a-mountain-reindeer-on-a-field-in-autumn.jpeg?auto=compress&cs=tinysrgb&w=600"
             alt="" width={24} height={24}  
            className="w-6 h-6 rounded-full  shrink-0"
            />
            <span
            className='font-semibold'
            >username</span>
           </div>
           <div 
           className='flex gap-2'
           >
           <Image src="/accept.png" alt="" width={20} height={20}   /> 
           <Image src="/reject.png" alt="" width={20} height={20}   />
           </div>
        </div>
        <div className='flex items-center justify-between' >
           <div className='flex items-center gap-2 justify-center ' >
            <Image src="https://images.pexels.com/photos/18074916/pexels-photo-18074916/free-photo-of-a-mountain-reindeer-on-a-field-in-autumn.jpeg?auto=compress&cs=tinysrgb&w=600"
             alt="" width={24} height={24}  
            className="w-6 h-6 rounded-full  shrink-0"
            />
            <span
            className='font-semibold'
            >username</span>
           </div>
           <div 
           className='flex gap-2'
           >
           <Image src="/accept.png" alt="" width={20} height={20}   /> 
           <Image src="/reject.png" alt="" width={20} height={20}   />
           </div>
        </div>
        
      </div>
    </div>
  )
}

export default FriendRequest
