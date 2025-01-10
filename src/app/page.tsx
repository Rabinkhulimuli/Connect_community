import Leftmenu from "@/component/Leftmenu";
import "./globals.css";
import RightMenu from "@/component/RightMenu";
import Stories from "@/component/Stories";
import AddPost from "@/component/AddPost";
import Feed from "@/component/Feed";

export default function Home() {
  return (
   
   <>
   <div className="flex gap-6 pt-6" >
    <div 
      className="w-[20%] hidden lg:block "
    ><Leftmenu/> </div>
    <div className="w-full md:w-[70%] lg:w-[50%]">
      <Stories/>
      <AddPost/>
      <Feed/>
       </div>
    <div className="w-[30%] hidden md:block " ><RightMenu/> </div>
   </div>
   </>
  );
}
