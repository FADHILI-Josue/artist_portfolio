import { FC, useState } from 'react'
import { art1, art2, art3 } from '../assets'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


interface CarouselProps {

}

const images = [
    art1,
    art2,
    art3,
    art1,
    art2,
    art3,
    art1,
    art2,
    art3,
]

const Carousel: FC<CarouselProps> = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length] = useState(images.length - 2)


    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }
    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }
    const [touchPosition, setTouchPosition] = useState(null)
    // ...
    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
        console.log(touchDown)
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition

        if (touchDown === null) {
            return
        }

        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 5) {
            next()
        }

        if (diff < -5) {
            prev()
        }

        setTouchPosition(null)
    }

    return <div onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} className="my-20 overflow-hidden relative mx-auto">
        <div className="relative h-full inline-flex overflow-hidden w-full gap-2">
            {
                images?.map((_, i) =>
                    <div key={i} className='hover:scale-110 bg-white rounded-md w-1/3 shrink-0 transition-all duration-500 h-full' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        <div className="h-[60vh] w-full overflow-hidden"><img key={i} src={images[i]} alt="arts" className='w-full object-contain' /></div>
                        <div className="px-12 w-full text-black my-4 font-semibold">
                            <h1>4th-Dimension no.1</h1>
                        </div>
                    </div>
                )
            }
        </div>
        <button className='absolute transition-all text-light-gold bg-black/70 hover:bg-black/80 duration-300 bottom-0 top-0 right-0 px-5' onClick={() => next()}><FaArrowRight /></button>
        <button className='absolute transition-all text-light-gold bg-black/70 hover:bg-black/80 duration-300 bottom-0 top-0 left-0 px-5' onClick={() => prev()}><FaArrowLeft /></button>
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