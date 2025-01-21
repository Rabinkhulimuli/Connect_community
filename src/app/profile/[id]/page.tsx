import Feed from '@/component/Feed'
import Leftmenu from '@/component/Leftmenu'
import RightMenu from '@/component/RightMenu'
import React from 'react'

function page() {
  return (
    <>
   <div className="flex gap-6 pt-6" >
    <div 
      className="w-[20%] hidden lg:block "
    ><Leftmenu/> </div>
    <div className="w-full md:w-[70%] lg:w-[50%]">
      
      <Feed/>
       </div>
    <div className="w-[30%] hidden md:block " ><RightMenu userId='test1' /> </div>
   </div>
   </>
  )
}

export default page
