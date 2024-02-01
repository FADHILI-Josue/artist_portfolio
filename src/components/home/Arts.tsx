import { FC } from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import ArtComponent from './ArtComponent'
// import { IArt } from '../../lib/constants'

interface ArtsProps {
    images: number[]
    // images: IArt[]
}

const Arts: FC<ArtsProps> = ({images}) => {
    return <MaxWidthWrapper className='grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-5'>
        {images.map((art, i) => <ArtComponent id={i} art={art} isMain={i === 3 || i === 10} />)}
    </MaxWidthWrapper>
}

export default Arts