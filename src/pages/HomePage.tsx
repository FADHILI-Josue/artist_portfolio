import { FC } from 'react'
import { useData } from '../providers/Providers'
import Navbar from '../components/Navbar'
import { bgsec1, bgsec2, home_left, prof_pic } from '../assets'
import './home.css'
import MaxWidthWrapper from '../components/MaxWidthWrapper'
import Icons from '../components/Icons'
// import Footer from '../components/Footer'
import { MdWbSunny } from "react-icons/md";
import Carousel from '../components/Carousel'
import Arts from '../components/home/Arts'
import Footer from '../components/Footer'
const HomePage: FC = () => {
    const { toggleMode } = useData()
    return <div className='w-full bg-black text-black dark:bg-black dark:text-white overflow-x-hidden'>
        <Navbar />
        <div className="absolute w-full max-h-dvh overflow-hidden opacity-20 z-0 -left-[15%] flex items-start">
            <div className="circle"></div>
            <div className="circle2 blur-3xl -translate-x-52 translate-y-40"></div>
            <div className="circle3 blur-3xl -translate-x-[120%] translate-y-32"></div>
            <div className="circle4 blur-3xl -translate-x-[110%] -translate-y-4"></div>
            <div className="circle5 blur-3xl -translate-x-[120%] translate-y-[40%]"></div>
        </div>
        <div className="flex backdrop-blur-3xl flex-col relative">
            <div className="absolute h-screen">
                <img src={home_left} alt="home left" className='my-32 h-2/3' />
            </div>
            <MaxWidthWrapper className='z-20'>
                <div className="flex justify-between my-16 text-zinc-400">
                    <p>ARTIST STATEMENT</p>
                    <p>WORKS</p>
                    <h1 className='text-white font-bold text-3xl font-serif'>Madoc Pierce</h1>
                    <p>CONTACT</p>
                    <button className='bg-stone-300/40 h-8 w-8 flex items-center justify-center rounded-full'><MdWbSunny size={20} color='white' /></button>
                </div>
                <div className="flex items-center">
                    <div className="space-y-20 self-end">
                        <h1 className='font-bold text-5xl bg-gradient-to-r from-white to-stone-700 inline-block text-transparent bg-clip-text'>Madoc Pierce</h1>
                        <p>Blank sheets become the liminal spaces where thoughts are given volume and emotions are rendered in a spectrum of colors that echo the complexity of feeling and the resonance of mental states.</p>
                        <div className="flex items-center gap-4">
                            <button className='active:scale-95 cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors bg-light-gold text-black hover:bg-dark-gold h-10 py-2 px-4'>Contact Me</button>
                            <div className="rounded-full border p-2">
                                <Icons.ig />
                            </div>
                            <div className="rounded-full border p-2">
                                <Icons.ig />
                            </div>
                            <div className="rounded-full border p-2">
                                <Icons.ig />
                            </div>
                            <div className="rounded-full border p-2">
                                <Icons.ig />
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex items-center">
                        <img src={prof_pic} alt="madoc pierce" className='w-full object-contain' />
                    </div>
                </div>
                <div className='text-lg text-center mt-52 font-serif flex flex-col items-center space-y-5'>
                    <h1 className='text-3xl [text-shadow:1px_1px_30px_var(--tw-shadow-color)] shadow-white/80 mb-20'>ABOUT <span className='[text-shadow:1px_1px_30px_var(--tw-shadow-color)] text-light-gold shadow-light-gold/80'>Madoc Pierce</span></h1>
                    <p>I am driven by the pursuit of the intangible, conjuring forth the	abstracted realities that dwell just beyond the periphery of perception. My art is an invitation to viewers: to delve into the visual manifestations of mindscapes, to	grapple with the intangible, and to find solace in the shared quest to understand	the immeasurable dimensions of being.</p>
                    <p>A pixelated hive mind becomes my interlocutor and amidst the clash of our two dimensions, previously 	hidden form is discovered and extracted in ways that almost seem impossible.	By	merging and manipulating these buzzing bio-technological landscapes within the digital realm, I compose a symphony of forms that blur the lines between the virtual and the real, the conscious and the subconscious.</p>
                </div>

            </MaxWidthWrapper>
            <Carousel />
            <div className="flex flex-col gap-5">
                <div className="w-full relative">
                    <div className="absolute left-0 top-[20%] h-screen">
                        <img src={bgsec1} alt="home left" className='h-4/5' />
                    </div>
                    <Arts />
                </div>
                <div className="w-full relative">
                    <div className="absolute right-0 top-[20%] h-screen">
                        <img src={bgsec2} alt="home left" className='h-4/5' />
                    </div>
                    <Arts />
                </div>
                <div className="w-full relative">
                    <div className="absolute left-0 top-[20%] h-screen">
                        <img src={bgsec1} alt="home left" className='h-4/5' />
                    </div>
                    <Arts />
                </div>
            </div>
            {/* <button onClick={toggleMode}>yooo</button> */}
        </div>
        <Footer />
    </div>
}

export default HomePage