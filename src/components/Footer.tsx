import { FC } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import { Input } from './ui/Input'
import { MdWbSunny } from 'react-icons/md'

const Footer: FC = () => {
  return <div className='min-h-[60vh] relative'>
    <div className="absolute h-full pt-32 w-full top-0 blur-3xl opacity-30 left-0 flex items-center justify-between">
      <div className="shrink-0 w-64 ml-[20%] translate-y-20 bg-light-gold h-64 blur-3xl rounded-full"></div>
      <div className="shrink-0 w-32 mr-[10%] bg-light-gold h-32 rounded-full blur-3xl"></div>
    </div>
    <div className="relative backdrop-blur-3xl flex flex-col pt-32 h-full">
      <MaxWidthWrapper className='flex flex-col items-center text-center h-full'>
        <h1 className='my-20 text-3xl font-serif'>CONTACT <span className='text-light-gold [text-shadow:1px_1px_30px_var(--tw-shadow-color)] shadow-light-gold/80'>ME</span></h1>
        <p className='text-lg'>My art is an invitation to viewers: to delve into the visual manifestations of mindscapes, to grapple with the
          intangible, and to find solace in the shared quest to understand 	the immeasurable dimensions of being.</p>
        <div className="w-2/3 grid grid-cols-2 gap-5 my-20">
          <Input id='name' label='Full Name:' placeholder='John Doe' />
          <Input id='email' label='Email:' placeholder='example@gmail.com' />
          <Input id='phone' type='phone' label='Contact Phone:' placeholder='eg: 1123-419-345' />
          <Input id='town' label='City/Town:' placeholder='eg: California' />
          <div className="flex flex-col gap-1 col-span-2">
            <label className="text-light-gold self-start" htmlFor="message">Message:</label>
            <textarea id='message' rows={5} name='message' className='flex w-full rounded-sm border-b border-input bg-black/20 px-3 py-2 text-sm  focus:bg-stone-500/10 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50' placeholder='Write your message' />
          </div>
        </div>
        <button className='active:scale-95 cursor-pointer inline-flex items-center justify-center rounded-md text-sm transition-colors bg-light-gold text-black hover:bg-dark-gold h-10 py-2 px-4 divide-x [&>*]:px-3 font-semibold divide-black'><span>Send Message</span><span className='text-xl'>&rarr;</span></button>
        <div className="flex w-full justify-between my-16 text-zinc-400">
          <p>ARTIST STATEMENT</p>
          <p>WORKS</p>
          <h1 className='text-white font-bold text-3xl font-serif'>Madoc Pierce</h1>
          <p>CONTACT</p>
          <button className='bg-stone-300/40 h-8 w-8 flex items-center justify-center rounded-full'><MdWbSunny size={20} color='white' /></button>
        </div>
      </MaxWidthWrapper>
    </div>
  </div>
}

export default Footer