import { FC, useEffect, useState } from 'react'
import { MdWbSunny } from 'react-icons/md'
import { useData } from '../providers/Providers'
import { IoMenu } from "react-icons/io5";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/Sheet"
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

const Navbar: FC = () => {
  const { toggleMode } = useData()
  
  const router = useLocation()
  const [active, setActive] = useState<string>('');

  useEffect(() => {
      const { pathname } = router;
      const path = pathname.split("/")[1];
          setActive(path)
  }, [router]);

  return <div className="flex w-full justify-end md:justify-between my-16 text-zinc-700 font-semibold dark:text-zinc-400">
    <Link to={'/about'} className={cn('hidden md:inline-block', {'bg-gradient-to-r p-0 from-dark-gold via-light-gold to-black/30 bg-[length:100%_2px] bg-no-repeat bg-bottom': active === "/about"})}>ARTIST STATEMENT</Link>
    <Link to={'/'} className='hidden md:inline-block'>WORKS</Link>
    <Link to={'/'} className='hidden md:inline-block font-bold text-3xl font-serif'>Madoc Pierce</Link>
    <Link to={'/contact'} className='hidden md:inline-block '>CONTACT</Link>
    <button className='hidden md:flex bg-stone-300/40 h-8 w-8 items-center justify-center rounded-full' onClick={() => toggleMode()}><MdWbSunny size={20} className='text-black dark:text-white hover:scale-110 transition-all duration-200' /></button>
    <Sheet>
      <SheetTrigger className='inline-block z-50 md:hidden'><IoMenu className='h-7 w-7' onClick={() => console.log("clicked")} /></SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  </div>
}

export default Navbar