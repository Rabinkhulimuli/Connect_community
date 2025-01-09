import React from 'react'
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from 'next/link';
import { MenuIcon } from 'lucide-react';
function MobileNav() {
  return (
    <div>
      <Sheet>
          <SheetTrigger  className="py-1">
            {" "}
            <MenuIcon />
          </SheetTrigger>
          <SheetContent>
            
            <SheetTitle className="font-bold text-center">Wellcome to Lookup</SheetTitle>
            <div className=" flex flex-col font-medium  items-center gap-8">
              <Button className="w-full font-semibold" 
              variant="ghost"
              >
                <Link href="/">Home</Link>
              </Button>
              <Button className="w-full font-semibold" 
              variant="ghost"
              >
                <Link href="/">Friends</Link>
              </Button>
              <Button className="w-full font-semibold" 
              variant="ghost"
              >
                <Link href="/">Groups</Link>
              </Button>
              <Button className="w-full font-semibold" 
              variant="ghost"
              >
                <Link href="/">Stories</Link>
              </Button>
              <Button className="w-full font-semibold" 
              variant="ghost"
              >
                <Link href="/">Login</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
    </div>
  )
}

export default MobileNav
