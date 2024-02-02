import './home.css'
import { bgsec1, home_left, prof_pic } from '../assets'
import Navbar from '../components/Navbar'
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { MdWbSunny } from 'react-icons/md';
import { useData } from '../providers/Providers';
import MaxWidthWrapper from '../components/MaxWidthWrapper';


const AboutPage = () => {
    const navigate = useNavigate();
    const { toggleMode } = useData()

    return <div className='w-full dark:bg-black overflow-x-hidden'>
        <div className="absolute w-full sm:max-h-dvh overflow-hidden opacity-30 z-0 -left-[15%] -right-[15%] flex items-start">
            <div className="circle"></div>
            <div className="circle2 blur-3xl -translate-x-52 translate-y-40"></div>
            <div className="circle3 blur-3xl -translate-x-[120%] translate-y-32"></div>
            <div className="circle4 blur-3xl -translate-x-[110%] -translate-y-4"></div>
            <div className="circle5 blur-3xl right-0 -translate-x-[110%] bottom-0 translate-y-32"></div>
        </div>
        <div className="flex h-full pb-20 backdrop-blur-3xl bg-gradient-to-b flex-col relative">
            <div className="absolute -left-52 top-56 z-0 h-screen">
                <img src={home_left} alt="home left" className='h-1/2 sm:h-2/3' />
            </div>
            <div className="absolute z-0 rotate-180 right-0 h-screen bottom-36">
                <img src={bgsec1} alt="home left" className=' h-1/2 sm:h-2/3' />
            </div>
            <div className="w-full relative z-10 h-full">
                <MaxWidthWrapper>
                    <div className="w-full hidden md:block">
                        <Navbar />
                    </div>
                </MaxWidthWrapper>
                <div className='mx-auto w-full sm:max-w-screen-[1600px] px-4 md:px-20 text-black dark:text-white'>
                    <div className="w-full flex md:hidden my-10 justify-between items-center">
                        <button className='text-light-gold hover:scale-110 transition-all duration-300' onClick={() => navigate(-1)}>&larr; Back</button>
                        <button className='flex bg-stone-300/40 h-8 w-8 items-center justify-center rounded-full' onClick={() => toggleMode()}><MdWbSunny size={20} className='text-black dark:text-white hover:scale-110 transition-all duration-200' /></button>
                    </div>
                    <div className="w-full text-center sm:text-left px-2 text-sm sm:text-xl backdrop-blur-3xl [&>p]:my-5 sm:px-10 py-20 bg-white shadow-xl dark:bg-[#281c0c]">
                        <div className="sm:float-left sm:mx-5 sm:pt-12">
                            <img src={prof_pic} alt="profile" className='w-72 mx-auto sm:mx-0 md:w-80 lg:w-[35rem] object-contain' />
                        </div>
                        <RiDoubleQuotesL className='text-light-gold' />
                        <p>In the alchemy of my art, I seek to	map the uncharted territories of the human experience. Blank sheets	become the liminal spaces where thoughts are given volume and emotions are rendered in a spectrum of colors that echo the complexity of	feeling and the resonance of mental states. I labor to give shape to the	shapeless-to fashion a visual lexicon for the ineffable nuances of consciousness</p>
                        <p>My process is a pilgrimage through layers of abstraction. It begins with the 		precision of Micron pens, which lay down the skeletal outlines of loose but 		calculated composition. I subject these sketches to a digital metamorphosis that 	stretches and extends concepts to their absolute limits. Codified inputs and manipulation evolve into an extension of my linework. </p>
                        <p>A pixelated hive mind	becomes my interlocutor and amidst the clash of our two dimensions, previously hidden form is discovered and extracted in ways that almost seem impossible.	By merging and manipulating these buzzing bio-technological landscapes within the digital realm, I compose a symphony of forms that blur the lines between the virtual and the real, the conscious and the subconscious.</p>
                        <p>These works, like echoes in a void, attempt to visualize the vibrations of thought and the frequency of feeling. They are both the echo and the source, the question and the answer. They reside in the interstices of understanding, wavering between what is known and the vast expanse of the unknown.</p>
                        <p>As an artist, I am driven by the pursuit of the intangible, conjuring forth the abstracted realities that dwell just beyond the periphery of perception. My art is an invitation to viewers: to delve into the visual manifestations of mindscapes, to grapple with the intangible, and to find solace in the shared quest to understand the immeasurable dimensions of being.</p>
                        <RiDoubleQuotesR className='text-light-gold' />

                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default AboutPage