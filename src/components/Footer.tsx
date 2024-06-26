import { FC } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Input } from './ui/Input'
import Navbar from './Navbar'

const Footer: FC = () => {
  return <div id='contact' className='relative bg-white dark:bg-[#0C0C0C] sm:dark:bg-transparent'>
    <div className="absolute hidden dark:sm:flex h-full w-full top-0 blur-3xl opacity-20 left-0 items-center justify-between">
      <div className="shrink-0 w-[30rem] ml-[15%] translate-y-20 bg-light-gold h-[30rem] opacity-60 blur-3xl rounded-full"></div>
      <div className="shrink-0 w-96 mr-[10%] bg-light-gold h-96 rounded-full opacity-50 blur-3xl"></div>
    </div>
    <div className="relative backdrop-blur-3xl pt-10 flex flex-col h-full">
      <MaxWidthWrapper className='flex flex-col items-center text-center h-full'>
        <h1 className='text-xl my-10 sm:text-3xl [text-shadow:var(--tw-shadow-color)_1px_1px_30px] shadow-white/80 font-[nanum,sans-serif]'>CONTACT <span className='[text-shadow:1px_1px_30px_var(--tw-shadow-color)] text-light-gold shadow-light-gold/80'>ME</span></h1>
        <p className='text-sm sm:text-lg font-light dark:dark:text-slate-100'>My art is an invitation to viewers: to delve into the visual manifestations of mindscapes, to grapple with the
          intangible, and to find solace in the shared quest to understand 	the immeasurable dimensions of being.</p>
        <div className="w-full sm:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-5 my-10 md:my-20">
          <Input id='name' label='Full Name:' className='bg-stone-300/70 focus:bg-black focus:bg-opacity-5 placeholder-stone-800 dark:placeholder-stone-500 dark:bg-black/20 focus:bg-stone-500/10 dark:focus:bg-white/10 border-b-stone-700 dark:border-stone-300' placeholder='John Doe' />
          <Input id='email' type='email' label='Email:' className='bg-stone-300/70 focus:bg-black focus:bg-opacity-5 placeholder-stone-800 dark:placeholder-stone-500 dark:bg-black/20 focus:bg-stone-500/10 dark:focus:bg-white/10 border-b-stone-700 dark:border-stone-300' placeholder='example@gmail.com' />
          <Input id='phone' type='phone' label='Contact Phone:' className='bg-stone-300/70 focus:bg-black focus:bg-opacity-5 placeholder-stone-800 dark:placeholder-stone-500 dark:bg-black/20 focus:bg-stone-500/10 dark:focus:bg-white/10 border-b-stone-700 dark:border-stone-300' placeholder='123-456-7890' />
          <Input id='town' label='City/Town:' className='bg-stone-300/70 focus:bg-black focus:bg-opacity-5 placeholder-stone-800 dark:placeholder-stone-500 dark:bg-black/20 focus:bg-stone-500/10 dark:focus:bg-white/10 border-b-stone-700 dark:border-stone-300' placeholder='eg: California' />
          <div className="flex flex-col gap-1 sm:col-span-2">
            <label className="text-light-gold self-start" htmlFor="message">Message:</label>
            <textarea id='message' rows={5} name='message' className='flex bg-stone-300/70 w-full placeholder-stone-800 transition-all duration-300 dark:placeholder-stone-500 rounded-sm border-b dark:bg-black/20 px-3 py-2 text-sm focus:bg-stone-500/10 focus-visible:bg-stone-500/10 dark:focus:bg-white/10 dark:focus-active:bg-white/10 outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-50' placeholder='Write your message' />
          </div>
        </div>
        <button className='active:scale-95 mb-10 sm:mb-0 cursor-pointer inline-flex items-center justify-center rounded-md text-sm transition-colors bg-light-gold text-black hover:bg-dark-gold h-10 py-2 px-4 font-semibold'>Send Message</button>
        <div className="w-full hidden md:block">
          <Navbar />
        </div>
      </MaxWidthWrapper>
    </div>
  </div>
}

export default Footer