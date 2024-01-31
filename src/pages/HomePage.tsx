import { FC } from 'react'
import Navbar from '../components/Navbar'
import { bgsec1, bgsec2, home_left, prof_pic } from '../assets'
import './home.css'
import MaxWidthWrapper from '../components/MaxWidthWrapper'
import Icons from '../components/Icons'
// import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import Arts from '../components/home/Arts'
import Footer from '../components/Footer'
import { arts } from '../lib/constants'
import { Link } from 'react-router-dom'
const HomePage: FC = () => {
    return <div className='w-full bg-[#F4F4F4] text-black dark:bg-black dark:text-white overflow-x-hidden'>
        <div className="absolute w-full sm:max-h-dvh overflow-hidden opacity-20 z-0 -left-[15%] flex items-start">
            <div className="circle"></div>
            <div className="circle2 blur-3xl -translate-x-52 translate-y-40"></div>
            <div className="circle3 blur-3xl -translate-x-[120%] translate-y-32"></div>
            <div className="circle4 blur-3xl -translate-x-[110%] -translate-y-4"></div>
            <div className="circle5 blur-3xl -translate-x-[120%] translate-y-[40%]"></div>
        </div>
        <div className="flex pb-20 backdrop-blur-3xl bg-gradient-to-b flex-col relative">
            <div className="absolute h-screen">
                <img src={home_left} alt="home left" className='my-32 h-1/2 sm:h-2/3' />
            </div>
            <div className="w-full bg-white dark:bg-transparent">
                <MaxWidthWrapper className='relative z-20'>
                    <Navbar />
                    <div className="flex flex-col md:flex-row items-center mb-10 sm:mb-20">
                        <div className="space-y-20 self-end">
                            <h1 className='font-bold text-3xl sm:text-5xl bg-gradient-to-r from-black to-stone-500 dark:from-white dark:to-stone-700 inline-block text-transparent bg-clip-text'>Madoc Pierce</h1>
                            <p>Blank sheets become the liminal spaces where thoughts are given volume and emotions are rendered in a spectrum of colors that echo the complexity of feeling and the resonance of mental states.</p>
                            <div className="flex flex-col sm:flex-row items-center gap-14 sm:gap-4">
                                <button className='active:scale-95 cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-light-gold text-white dark:text-black hover:bg-dark-gold h-10 py-6 px-10'>Contact Me</button>
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
                        <div className="w-full mt-10 flex justify-center items-center">
                            <img src={prof_pic} alt="madoc pierce" className='w-full sm:w-2/3 md:w-full object-contain' />
                        </div>
                    </div>
                </MaxWidthWrapper>
            </div>
            <div className="w-full">
                <MaxWidthWrapper className='text-base sm:text-lg text-center dark:bg-transparent sm:mt-32 font-serif flex flex-col items-center space-y-5'>
                    <h1 className='text-2xl sm:text-3xl [text-shadow:1px_1px_30px_var(--tw-shadow-color)] shadow-white/80 mb-10 sm:mb-20'>ABOUT <span className='[text-shadow:1px_1px_30px_var(--tw-shadow-color)] text-light-gold shadow-light-gold/80'>Madoc Pierce</span></h1>
                    <p>I am driven by the pursuit of the intangible, conjuring forth the	abstracted realities that dwell just beyond the periphery of perception. My art is an invitation to viewers: to delve into the visual manifestations of mindscapes, to	grapple with the intangible, and to find solace in the shared quest to understand	the immeasurable dimensions of being.</p>
                    <p>A pixelated hive mind becomes my interlocutor and amidst the clash of our two dimensions, previously 	hidden form is discovered and extracted in ways that almost seem impossible.	By	merging and manipulating these buzzing bio-technological landscapes within the digital realm, I compose a symphony of forms that blur the lines between the virtual and the real, the conscious and the subconscious.</p>
                </MaxWidthWrapper>
            </div>
            <Carousel />
            <div className="flex flex-col gap-5">
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
                    <Arts images={arts.slice(24)} />
                </div>
            </div>
        </div>
        <Footer />
    </div>
}

export default HomePage