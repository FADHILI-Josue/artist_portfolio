import React, { FC, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { art1, art2, art3 } from '../assets';


interface CarouselProps {}

const images = [art1, art2, art3, art1, art2, art3];

const Carousel: FC<CarouselProps> = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchPosition, setTouchPosition] = useState({ x: null, y: null });

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const next = () => {
    if (currentIndex < images.length -2 - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleStart = (e) => {
    const touch = e.touches ? e.touches[0] : e;
    setTouchPosition({ x: touch.clientX, y: touch.clientY });
  };

  const handleMove = (e) => {
    if (touchPosition.x === null || touchPosition.y === null) {
      return;
    }

    const currentTouch = e.touches ? e.touches[0] : e;
    const diffX = touchPosition.x - currentTouch.clientX;

    if (Math.abs(diffX) > 5) {
      if (diffX > 0) {
        next();
      } else {
        prev();
      }
      setTouchPosition({ x: null, y: null });
    }
  };

  const handleEnd = () => {
    setTouchPosition({ x: null, y: null });
  };

  return <div className="my-20">
      <div
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
        onMouseDown={handleStart}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
        className="overflow-hidden relative mx-auto"
        style={{ userSelect: 'none' }}
      >
            <div className="relative h-full inline-flex overflow-hidden w-full gap-2">
                {
                    images?.map((_, i) =>
                        <div key={i} className='hover:scale-110 bg-white rounded-md w-1/3 shrink-0 transition-all duration-500 h-full' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                            <div className="h-[50vw] md:h-96 w-full overflow-hidden"><img draggable="false" key={i} src={images[i]} alt="arts" className='w-full h-full object-cover' /></div>
                            <p className=" font-thin px-2 text-xs sm:px-12 w-full sm:text-sm md:text-base text-black my-4 sm:font-medium md:font-semibold">
                                4th-Dimension no.1
                            </p>
                        </div>
                    )
                }
            </div>
            <button className='absolute transition-all text-light-gold bg-black/70 hover:bg-black/80 duration-300 bottom-0 top-0 right-0 px-2 text-xs sm:text-sm md:px-5' onClick={() => next()}><FaArrowRight /></button>
            <button className='absolute transition-all text-light-gold bg-black/70 hover:bg-black/80 duration-300 bottm-0 h-full top-0 left-0 text-xs sm:text-sm px-2 md:px-5' onClick={() => prev()}><FaArrowLeft /></button>
        </div>
        <div className='[&>*]:bg-light-gold [&>*]:rounded-md  p-10 flex justify-center gap-2 items-center'>
            <div className="h-[0.10rem] w-3" />
            <div className="h-[0.15rem] w-4" />
            <div className="h-1 w-5" />
            <div className="h-[0.15rem] w-4" />
            <div className="h-[0.10rem] w-3" />
        </div>
    </div>
}

export default Carousel