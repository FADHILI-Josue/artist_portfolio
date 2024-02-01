import { FC, useRef } from 'react'
import { cn } from '../../lib/utils'
// import { IArt } from '../../lib/constants'
import { Link } from 'react-router-dom'
import { a8 } from '../../assets'

interface ArtComponentProps {
  art?: number,
  // art?: IArt,
  isMain?: boolean,
  id: number
}

const ArtComponent: FC<ArtComponentProps> = ({art,id, isMain=false}) => {
    const imgRef = useRef<HTMLImageElement | null>(null)

    if (!art) return null
  return <Link to={`/art/${id}`} className={cn("h-92 group rounded-md bg-white flex flex-col", {"min-h-72 sm:col-span-2 sm:row-span-2": isMain})}>
    <div className="h-full overflow-hidden">
        <img ref={imgRef} src={a8} alt="art" className='h-full group-hover:scale-110 w-full transition-all duration-300 object-cover' />
        {/* <img ref={imgRef} src={art.image} alt="art" className='h-full group-hover:scale-110 w-full transition-all duration-300 object-cover' /> */}
    </div>
        
    {/* <p className='text-black p-3 font-medium text-xs sm:text-base sm:font-semibold'>{art.medium? art.title : 'medium'}</p> */}
  </Link>
}

export default ArtComponent