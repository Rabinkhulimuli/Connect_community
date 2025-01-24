import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

function Ad({size}:{size:"sm"| "md"|"lg"}) {
  return (
    <div className='mt-4 p-4 bg-white rounded-lg shadow-md text-sm'>
        {/* top */}
        <div  
        className='flex  items-center justify-between'
        >
            <span>Sponsored Ads</span>
            <Image src="/more.png" 
             alt="" width={16} height={16} />
        </div>
        {/* bottom */}
        <div
        className={`flex flex-col mt-4 ${size ==="sm"?"gap-2":"gap-4"}`}
        >
            <div className={`relative w-full ${size ==="sm"?"h-24":size ==="md"?"h-36":"h-48"} `} >
                <Image src="https://images.pexels.com/photos/30147974/pexels-photo-30147974/free-photo-of-iced-coffee-with-biscuit-topping-on-wooden-table.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                alt="img"
                fill
                className="rounded-lg object-cover"
                />
            </div>
            <div
            className='flex items-center gap-4'
            >
            <Image src="https://images.pexels.com/photos/30147974/pexels-photo-30147974/free-photo-of-iced-coffee-with-biscuit-topping-on-wooden-table.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"
                alt="img"
                width={24}
                height={24}
                className="rounded-full w-6 h-6  object-cover"
                />
                <span
                className='text-blue-500 font-medium'
                >BigChef Lounge</span>
            </div>
            <p
            className={`${size ==="sm"?"text-xs":"text-sm"} overflow-hidden max-h-20` }
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, harum explicabo similique optio cum corrupti eius perferendis placeat ullam veniam inventore id rerum neque modi ipsam voluptatem tempore nesciunt. Consequuntur.
            </p>
            <Button
            className="bg-gray-300 text-gray-600 text-sm hover:bg-gray-400"
            >Learn More</Button>
        </div>
    </div>
  )
}

export default Ad
