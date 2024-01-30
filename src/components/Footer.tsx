import { FC } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Input } from './ui/Input'
import Navbar from './Navbar'

const Footer: FC = () => {
  return <div className='min-h-[60vh] mt-16 relative bg-white dark:bg-transparent'>
    <div className="absolute hidden dark:flex h-full w-full top-0 blur-3xl opacity-20 left-0 items-center justify-between">
      <div className="shrink-0 w-[30rem] ml-[15%] translate-y-20 bg-light-gold h-[30rem] opacity-60 blur-3xl rounded-full"></div>
      <div className="shrink-0 w-96 mr-[10%] bg-light-gold h-96 rounded-full opacity-50 blur-3xl"></div>
    </div>
    <div className="relative backdrop-blur-3xl flex flex-col h-full">
      <MaxWidthWrapper className='flex flex-col items-center text-center h-full'>
        <h1 className='my-10 text-2xl sm:text-3xl font-serif'>CONTACT <span className='text-light-gold [text-shadow:1px_1px_30px_var(--tw-shadow-color)] shadow-light-gold/80'>ME</span></h1>
        <p className='text-sm sm:text-lg font-medium sm:font-semibold'>My art is an invitation to viewers: to delve into the visual manifestations of mindscapes, to grapple with the
          intangible, and to find solace in the shared quest to understand 	the immeasurable dimensions of being.</p>
        <div className="w-full sm:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-5 my-20">
          <Input id='name' label='Full Name:' placeholder='John Doe' />
          <Input id='email' label='Email:' placeholder='example@gmail.com' />
          <Input id='phone' type='phone' label='Contact Phone:' placeholder='eg: 1123-419-345' />
          <Input id='town' label='City/Town:' placeholder='eg: California' />
          <div className="flex flex-col gap-1 sm:col-span-2">
            <label className="text-light-gold self-start" htmlFor="message">Message:</label>
            <textarea id='message' rows={5} name='message' className='flex w-full placeholder:text-stone-800 dark:placeholder:text-stone-500 rounded-sm border-b bg-black/50 dark:bg-black/20 px-3 py-2 text-sm  placeholder:text-muted-foreground focus:bg-stone-500/10 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50' placeholder='Write your message' />
          </div>
        </div>
        <button className='active:scale-95 mb-10 sm:mb-0 cursor-pointer inline-flex items-center justify-center rounded-md text-sm transition-colors bg-light-gold text-black hover:bg-dark-gold h-10 py-2 px-4 divide-x [&>*]:px-3 font-semibold divide-black'><span>Send Message</span><span className='text-xl'>&rarr;</span></button>
        <div className="w-full hidden md:block">
        <Navbar />
        </div>
      </MaxWidthWrapper>
    </div>
  </div>
}

export default Footer