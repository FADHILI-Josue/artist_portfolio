import { FC, useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getRandomArts } from '../lib/util_fn';
import { cn } from '../lib/utils';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
interface SlickCarouselProps {

}

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    centerMode: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 640,
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
    const slider = sliderRef.current
    sliderRef.current
    const next = () => {
        slider?.slickNext()
    }
    const prev = () => {
        slider?.slickPrev()
    }
    return <div className='min-h-[30vh] mt-20 relative'>
        <div className="relative">
            <Slider ref={sliderRef} {...settings}>
                {
                    images?.map((_, i) =>
                    <div key={i} className="w-full px-1">
                        <div className={cn('hover border bg-white rounded-md h-full')}>
                            <div className="h-[50vw] lg:h-[25rem] w-full overflow-hidden"><img draggable="false" key={i} src={images[i].image} alt="arts" className='w-full h-full object-contain' /></div>
                            <p className="h-full font-thin text-center text-xs w-full sm:text-sm md:text-base text-black my-4 sm:font-medium md:font-semibold">
                                {images[i].title ?? "image title"}
                            </p>
                        </div>
                    </div>
                    )
                }
            </Slider>
            <button className='absolute transition-all text-light-gold bg-black/70 hover:bg-black/80 duration-300 bottom-0 top-0 right-0 px-2 text-xs sm:text-sm md:px-5' onClick={() => next()}><FaArrowRight /></button>
            <button className='absolute transition-all text-light-gold bg-black/70 hover:bg-black/80 duration-300 bottm-0 h-full top-0 left-0 text-xs sm:text-sm px-2 md:px-5' onClick={() => prev()}><FaArrowLeft /></button>
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