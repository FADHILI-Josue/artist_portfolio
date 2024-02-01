import './home.css'
import { contact_bg, home_left } from '../assets'
import MaxWidthWrapper from '../components/MaxWidthWrapper';
import { Input } from '../components/ui/Input';
import { useData } from '../providers/Providers';
import { MdWbSunny } from 'react-icons/md';
import { useNavigate, useParams } from "react-router-dom";
import { arts } from '../lib/constants';
import { useEffect } from 'react';



const ArtDetailPage = () => {
    const navigate = useNavigate();
    const { id } = useParams<{id:string}>();
    const {toggleMode} = useData()
    useEffect(()=>{
        if(isNaN(Number(id)) || !arts[Number(id)]) navigate('/not-found')
    },[id, navigate])
    return <div className='w-full bg-[#F4F4F4] text-black dark:bg-black dark:text-white overflow-x-hidden'>
        <div className="absolute w-full sm:max-h-dvh overflow-hidden opacity-20 z-0 -left-[15%] flex items-start">
            <div className="circle"></div>
            <div className="circle2 blur-3xl -translate-x-52 translate-y-40"></div>
            <div className="circle3 blur-3xl -translate-x-[120%] translate-y-32"></div>
            <div className="circle4 blur-3xl -translate-x-[110%] -translate-y-4"></div>
            <div className="circle5 blur-3xl -translate-x-[120%] translate-y-[40%]"></div>
        </div>
        <div className="flex w-full min-h-screen pb-20 backdrop-blur-3xl bg-gradient-to-b flex-col relative">
            <div className="absolute h-[50vh] sm:h-[90vh] scale-x-[-1] flex flex-col justify-end right-0">
                <img src={home_left} alt="home left" className='h-1/3 sm:h-2/3' />
            </div>
            <div className="absolute w-[20vw] flex flex-col justify-end h-[60vh] top-40 sm:top-80 left-0">
                <img src={contact_bg} alt="home left" className='object-cover h-full w-full' />
            </div>
            <div className="w-full bg-white dark:bg-transparent">
                <MaxWidthWrapper className='relative z-20 max-w-screen-2xl'>
                    <div className="w-full flex my-10 justify-between items-center">
                        <button className='text-light-gold hover:scale-110 transition-all duration-300' onClick={() => navigate(-1)}>&larr; Back</button>
                        <button className='flex bg-stone-300/40 h-8 w-8 items-center justify-center rounded-full' onClick={() => toggleMode()}><MdWbSunny size={20} className='text-black dark:text-white hover:scale-110 transition-all duration-200' /></button>
                    </div>
                    <div className="w-full flex flex-col sm:flex-row bg-[#281c0c]/30">
                        <div className="flex-1">
                            <img src={arts[Number(id)]?.image} alt="contact banner" className='w-full object-contain' />
                        </div>
                        <div className="flex-1 text-sm sm:text-base py-10 sm:px-10 lg:px-20 space-y-3 sm:space-y-6">
                            <div className="flex px-2 sm:px-0 items-center space-x-5 sm:space-x-10"><span className='text-stone-300'>Title:</span> <span className='font-medium sm:font-bold'>{arts[Number(id)]?.title}</span></div>
                            <div className="flex px-2 sm:px-0 items-center space-x-5 sm:space-x-10"><span className='text-stone-300'>Size:</span> <span className='font-medium sm:font-bold'>{arts[Number(id)]?.size}</span></div>
                            <div className="flex px-2 sm:px-0 items-center space-x-5 sm:space-x-10"><span className='text-stone-300'>Medium:</span> <span className='font-medium sm:font-bold'>{arts[Number(id)]?.medium}</span></div>
                            <div className="rounded-md bg-stone-800/50 px-6 pt-4 pb-7">
                                <h1 className='border-b border-b-stone-400 py-2 font-semibold'>Inquire about availability:</h1>
                                <form className='space-y-7 py-10'>
                                    <Input label='Email' placeholder='example@gmail.com' />
                                    <button className='active:scale-95 mb-10 sm:mb-0 cursor-pointer inline-flex items-center justify-center rounded-md text-sm transition-colors bg-light-gold text-black hover:bg-dark-gold h-10 py-2 px-4 divide-x [&>*]:px-3 font-semibold divide-black w-full'><span className='w-full'>Send Message</span><span className='text-xl'>&rarr;</span></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </div>
        </div>
    </div>
}

export default ArtDetailPage