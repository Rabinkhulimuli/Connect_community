import Image from 'next/image'
import React from 'react'
import Comment from './Comment'

function Post() {
  return (
    <div>
      <div className="flex  items-start justify-between" >
        <div className="flex items-center gap-4">
            <Image width={40} height={40} alt="" 
            className="rounded-full w-10 h-10"
            src="https://images.pexels.com/photos/7392368/pexels-photo-7392368.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" />
            <span
            className="font-medium "
            >name</span>
        </div>
        <Image width={16} height={16} alt="" 
            className="rounded-full "
            src="/more.png" 
            />
      </div>
      {/* descroption */}
      <div className="flex flex-col gap-4" >
        <div className="w-full min-h-96 relative" >
        <Image fill alt="" 
            className="rounded-lg shadow "
            src="https://images.pexels.com/photos/28907975/pexels-photo-28907975/free-photo-of-young-woman-reading-outdoors-in-sunlight.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" 
            />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur
             adipisicing elit. Ipsum voluptate dicta perferendis quaerat vitae, officiis quo ducimus in voluptates. Possimus nulla mollitia excepturi, esse assumenda quam labore deleniti sapiente optio.
             </p>
      </div>
      {/* interactions */}
      <div className="flex justify-between">
        <div className="flex " >
            <div className="flex items-center gap-2 bg-slate-100 p-2 rounded-xl">
            <Image width={16} height={16} alt="" 
            className=" cursor-pointer"
            src="/like.png" 
            />
            <span className="text-gray-300">
            </span>
            <span className="text-gray-500">
                1111 <span className=' sm:inline hidden'>
                    Likes
                </span>
            </span>
            </div>
            <div className="flex items-center gap-2 bg-slate-100 p-2 rounded-xl">
            <Image width={16} height={16} alt="" 
            className=" cursor-pointer"
            src="/comment.png" 
            />
            <span className="text-gray-300">
            </span>
            <span className="text-gray-500">
                1111 <span className=' sm:inline hidden'>
                    comments
                </span>
            </span>
            </div>
            
        </div>
        <div className="flex items-center gap-2 bg-slate-100 p-2 rounded-xl">
            <Image width={16} height={16} alt="" 
            className=" cursor-pointer"
            src="/share.png" 
            />
            <span className="text-gray-300">
            </span>
            <span className="text-gray-500">
                1111 <span className=' sm:inline hidden'>
                    share
                </span>
            </span>
            </div>
      </div>
      <Comment />
    </div>
  )
}

export default Post
