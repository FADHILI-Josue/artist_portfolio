import { FC } from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import ArtComponent from './ArtComponent'
import { IArt, arts } from '../../lib/constants'

interface ArtsProps {
    images: IArt[]
}

const Arts: FC<ArtsProps> = ({images}) => {
    return <MaxWidthWrapper className='grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-5'>
        {images.map((art, i) => <ArtComponent key={i} id={arts.findIndex((e)=>e.title == images[i].title)} art={art} isMain={i === 3 || i === 10} />)}
    </MaxWidthWrapper>
}

export default Arts