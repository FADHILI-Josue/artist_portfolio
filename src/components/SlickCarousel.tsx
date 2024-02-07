import { FC, useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getRandomArts } from '../lib/util_fn';
import { cn } from '../lib/utils';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { arts } from '../lib/constants';
interface SlickCarouselProps {

}

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    centerPadding: '15%',
    centerMode: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const images = getRandomArts(10);

const SlickCarousel: FC<SlickCarouselProps> = () => {
    const sliderRef = useRef<{ slickNext: () => void, slickPrev: () => void } | null>(null)
   
    const next = () => {
        const slider = sliderRef.current
        slider?.slickNext()
    }
    const prev = () => {
        const slider = sliderRef.current
        slider?.slickPrev()
    }
    return <div className='min-h-[30vh] mt-20 relative'>
        <div className="relative">
            <Slider ref={sliderRef} {...settings}>
                {
                    images?.map((_, i) =>
                    <div key={i} className="w-full px-1">
                        <div className={cn('hover border pt-10 bg-white rounded-md h-full')}>
                            <div className="h-[50vw] ms:h-[25rem] w-full overflow-hidden"><img draggable="false" key={i} src={images[i].image} alt="arts" className='w-full h-full object-contain' /></div>
                            <p className="h-full font-thin text-center text-xs w-full sm:text-sm md:text-base text-black hover:underline my-4 sm:font-medium md:font-semibold">
                            <Link to={`/art/${arts.findIndex((e)=>e.title == images[i].title)}`}>
                                {images[i].title ?? "image title"}
                            </Link>
                            </p>
                        </div>
                    </div>
                    )
                }
            </Slider>
            <button className='absolute z-30 transition-all text-light-gold bg-black/70 hover:bg-black/80 duration-300 top-1/2 rounded-l-sm -translate-y-1/2 right-0 text-xs sm:text-sm py-6 px-3' onClick={() => next()}><FaArrowRight /></button>
            <button className='absolute z-30 transition-all text-light-gold bg-black/70 hover:bg-black/80 duration-300 top-1/2 rounded-r-sm -translate-y-1/2 h-fit left-0 text-xs sm:text-sm py-6 px-3' onClick={() => prev()}><FaArrowLeft /></button>
        </div>
        <div className='[&>*]:bg-black dark:[&>*]:bg-light-gold [&>*]:rounded-md p-10 flex justify-center gap-2 items-center'>
            <div className="h-[0.10rem] w-3" />
            <div className="h-[0.15rem] w-4" />
            <div className="h-1 w-5" />
            <div className="h-[0.15rem] w-4" />
            <div className="h-[0.10rem] w-3" />
        </div>
    </div>
}

export default SlickCarousel