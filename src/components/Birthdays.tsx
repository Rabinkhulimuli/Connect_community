import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import Link from 'next/link'
function Birthdays() {
  return (
    <div className='mt-1 shadow-md rounded-lg' >
     <div className='mt-4 flex items-center justify-between ' >
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
                    <Button 
                    className="bg-blue-500"
                    >Celebrate</Button>
                 </div>
             </div>
             {/* upcomming birthday */}
             <div
             className=" flex items-center gap-4 bg-slate-100 rounded-lg p-4"
             >
             <Image src="/gift.png"
                  alt="" width={24} height={24}  
                 className="w-6 h-6 rounded-full  shrink-0"
                 />
                 <div>
                    <Link href="/">
                    <span  
                    className="text-gray-700 font-semibold block"
                    >Upcomming Birthday</span>
                    <span  
                    className="text-gray-500"
                    >See other 16 have upcomming birthdays</span>
                    </Link>
                 </div>
             </div>
    </div>
  )
}

export default Birthdays
