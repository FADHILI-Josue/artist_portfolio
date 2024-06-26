import { FC, useEffect, useState } from 'react'
import { MdWbSunny } from 'react-icons/md'
import { useData } from '../providers/Providers'
import { IoMenu } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/Sheet"


import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

const Navbar: FC = () => {
  const navigate = useNavigate();
  const { toggleMode } = useData()
  const router = useLocation()
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const { pathname } = router;
    const path = pathname.split("/")[1];
    setActive(path)
  }, [router]);

  const smoothScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
      if (window.location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          smoothScroll(targetId);
        }, 500);
      } else {
        targetElement?.scrollIntoView({ behavior: 'smooth' });
      }

  };

  return <div className="flex w-full justify-between my-10 text-zinc-700 dark:text-zinc-400">
    <Link to={'/about'} className={cn('hidden md:inline-block', { 'bg-gradient-to-r p-0 from-dark-gold via-light-gold to-black/30 bg-[length:100%_2px] bg-no-repeat bg-bottom': active === "/about" })}>ARTIST STATEMENT</Link>
    <button  onClick={()=>smoothScroll('work')} className='hidden md:inline-block'>WORKS</button>
    <Link to={'/'} className='hidden md:inline-block dark:text-white text-black text-3xl uppercase'>Madoc Pierce</Link>
    <button onClick={()=>smoothScroll('contact')} className='hidden md:inline-block'>CONTACT</button>
    <button className='hidden md:flex bg-stone-300/40 h-8 w-8 items-center justify-center rounded-full' onClick={() => toggleMode()}><MdWbSunny size={20} className='text-black dark:text-white dark:bg-black/60 bg-black/10 rounded-full w-full h-full p-2 hover:scale-110 transition-all duration-200' /></button>
    <Sheet>
      <SheetTrigger className='inline-block dark:bg-black/30 z-50 md:hidden'><IoMenu className='h-7 w-7' /></SheetTrigger>
      <SheetContent className="bg-zinc-200 rounded-tr-3xl text-black dark:text-white dark:bg-gradient-to-br from-black via-stone-950 to-stone-900">
        <SheetHeader>
          <SheetTitle>Madoc Pierce</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col my-32 space-y-3">
          <Link to={'/about'} className={cn('underline underline-offset-2', { 'bg-gradient-to-r p-0 from-dark-gold via-light-gold to-black/30 bg-[length:100%_2px] bg-no-repeat bg-bottom': active === "/about" })}>ARTIST STATEMENT</Link>
          <button onClick={()=>smoothScroll('work')} className='underline underline-offset-2'>WORKS</button>
          <button  onClick={()=>smoothScroll('contact')} className='underline underline-offset-2 '>CONTACT</button>
        </div>
      </SheetContent>
    </Sheet>
    <button className='flex md:hidden bg-stone-300/40 h-8 w-8 items-center justify-center rounded-full' onClick={() => toggleMode()}><MdWbSunny size={20} className='text-black dark:text-white hover:scale-110 transition-all duration-200' /></button>
  </div>
}

export default Navbar