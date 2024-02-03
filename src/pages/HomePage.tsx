import { FC } from 'react'
import Navbar from '../components/Navbar'
import { bgsec1, bgsec2, home_left, prof_pic } from '../assets'
import './home.css'
import MaxWidthWrapper from '../components/MaxWidthWrapper'
import Icons from '../components/Icons'
import Carousel from '../components/Carousel'
import Arts from '../components/home/Arts'
import Footer from '../components/Footer'
import { arts } from '../lib/constants'
import { Link } from 'react-router-dom'
import SlickCarousel from '../components/SlickCarousel'
const HomePage: FC = () => {
    const smoothScroll = (targetId: string) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      };
    return <div className='w-full bg-white scroll-smooth antialiased text-black dark:bg-black dark:text-white overflow-x-hidden'>
        <div className="absolute w-full sm:max-h-dvh overflow-hidden border opacit-20 z-0 flex items-start">
            <div className="circle absolute -left-[20%]"></div>
            <div className="circle2 blur-3xl -translate-x-32 sm:translate-x-20 translate-y-40"></div>
            <div className="circle3 blur-3xl -translate-x-32 translate-y-32"></div>
            <div className="circle4 blur-3xl -translate-x-52 -translate-y-4"></div>
            <div className="circle5 blur-3xl -translate-x-[90%] translate-y-[40%]"></div>
        </div>
        <div className="flex bg-gradient-to-b from-[#F4F4F4]/60 to-white sm:bg-[#F4F4F4]/60 pb-10 md:pb-20 dark:bg-gradient-to-b dark:from-black dark:to-[#0C0C0C] backdrop-blur-3xl flex-col relative">
            <div className="absolute">
                <img src={home_left} alt="home left" className='my-20 sm:my-48 h-[17rem] sm:h-[20rem] lg:h-[32rem]' />
            </div>
            <div className="w-full bg-gradient-to-b from-white to-[#F4F4F4]/60 sm:bg-white/60 dark:from-black dark:to-black">
                <MaxWidthWrapper className='relative z-20'>
                    <Navbar />
                    <div className="flex flex-col gap-5 md:gap-20 lg:gap-32 lg:flex-row items-center mb-10 lg:mb-20">
                        <div className="space-y-16 sm:space-y-20 self-end text-center sm:text-left">
                            <h1 className='font-extrabold text-3xl sm:text-5xl'>Madoc Pierce</h1>
                            {/* <h1 className='font-extrabold text-3xl sm:text-5xl bg-gradient-to-r from-black to-stone-500 dark:from-white dark:to-stone-700 inline-block text-transparent bg-clip-text'>Madoc Pierce</h1> */}
                            <p className='font-thin'>Blank sheets become the liminal spaces where thoughts are given volume and emotions are rendered in a spectrum of colors that echo the complexity of feeling and the resonance of mental states.</p>
                            <div className="flex flex-col sm:flex-row items-center gap-14 sm:gap-4">
                                <button className='active:scale-95 sm:mr-7 cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-light-gold text-white dark:text-black hover:bg-dark-gold h-10 py-6 px-10' onClick={()=>smoothScroll('contact')}>Contact Me</button>
                                <div className="flex items-center gap-4">
                                    <Link to={'/'} className="rounded-full hover:scale-110 transition-all duration-300 border p-2">
                                        <Icons.ig />
                                    </Link>
                                    <Link to={'/'} className="rounded-full hover:scale-110 transition-all duration-300 border p-2">
                                        <Icons.x />
                                    </Link>
                                    <Link to={'/'} className="rounded-full hover:scale-110 transition-all duration-300 border p-2">
                                        <Icons.pintrest />
                                    </Link>
                                    <Link to={'/'} className="rounded-full hover:scale-110 transition-all duration-300 border p-2">
                                        <Icons.fb />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:mt-10 flex justify-center items-center">
                            <img src={prof_pic} alt="madoc pierce" className='w-full shadow-[-5px_-5px_40px_0px_rgb(0_0_0/35%)] sm:w-2/3 lg:w-full object-contain' />
                        </div>
                    </div>
                </MaxWidthWrapper>
            </div>
            <div className="w-full bg-[#F4F4F4] dark:bg-transparent">
                <MaxWidthWrapper className='text-base sm:text-lg text-center dark:bg-transparent sm:mt-16 lg:mt-32 flex flex-col items-center space-y-5'>
                    <h1 className='text-xl sm:text-3xl [text-shadow:var(--tw-shadow-color)_1px_1px_30px] shadow-white/80 mt-10 sm:mt-0 mb-10 sm:mb-20 font-[nanum,sans-serif]'>ABOUT <span className='[text-shadow:1px_1px_30px_var(--tw-shadow-color)] text-light-gold shadow-light-gold/80'>MADOC PIERCE</span></h1>
                    <p className='dark:text-slate-300'>I am driven by the pursuit of the intangible, conjuring forth the	abstracted realities that dwell just beyond the periphery of perception. My art is an invitation to viewers: to delve into the visual manifestations of mindscapes, to	grapple with the intangible, and to find solace in the shared quest to understand	the immeasurable dimensions of being.</p>
                    <p className='dark:text-slate-300'>A pixelated hive mind becomes my interlocutor and amidst the clash of our two dimensions, previously 	hidden form is discovered and extracted in ways that almost seem impossible.	By	merging and manipulating these buzzing bio-technological landscapes within the digital realm, I compose a symphony of forms that blur the lines between the virtual and the real, the conscious and the subconscious.</p>
                </MaxWidthWrapper>
            </div>
            {/* <Carousel /> */}
            {/* add slick carousel */}
            <SlickCarousel />
            <div className="flex flex-col gap-2 sm:gap-5">
                <MaxWidthWrapper className='flex flex-col text-center w-full gap-10'>
                    <h1 className='text-2xl justify-self-center mx-auto sm:text-3xl [text-shadow:1px_1px_50px_var(--tw-shadow-color)] text-light-gold shadow-light-gold font-[nanum,sans-serif]'>GALLERY</h1>
                    <p className='mb-10 dark:text-slate-300 sm:mb-20 justify-self-center mx-auto'>These works, like echoes in a void, attempt to visualize the vibrations of thought and the frequency of feeling. They are both the echo and the source, the question and the answer.</p>
                </MaxWidthWrapper>
                <div className="w-full relative">
                    <div className="absolute left-0 top-[20%] h-screen">
                        <img src={bgsec1} alt="home left" className='hidden sm:block h-4/5' />
                    </div>
                    <Arts images={arts.slice(0, 12)} />
                </div>
                <div className="w-full relative">
                    <div className="absolute right-0 top-[20%] h-screen">
                        <img src={bgsec2} alt="home left" className='hidden sm:block h-4/5' />
                    </div>
                    <Arts images={arts.slice(12, 24)} />
                </div>
                <div className="w-full relative">
                    <div className="absolute left-0 top-[40%] h-screen">
                        <img src={bgsec1} alt="home left" className='hidden sm:block h-4/5' />
                    </div>
                    <div className="absolute right-0 scale-[-1] -bottom-10 h-screen">
                        <img src={bgsec1} alt="home left" className='block h-4/5' />
                    </div>
                    <Arts images={arts.slice(24)} />
                </div>
            </div>
        </div>
        <Footer />
    </div>
}

export default HomePage