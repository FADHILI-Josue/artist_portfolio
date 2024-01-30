import { FC } from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import ArtComponent from './ArtComponent'

interface ArtsProps {
    images: string[]
}

const Arts: FC<ArtsProps> = ({images}) => {
    return <MaxWidthWrapper className='grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-5'>
        {images.map((image, i) => <ArtComponent image={image} desc='4th-Dimension no.1' isMain={i === 3 || i === 10} />)}
        {/* <ArtComponent image={art1} desc='4th-Dimension no.1' />
        <ArtComponent image={art1} desc='4th-Dimension no.1' />
        <ArtComponent image={art1} desc='4th-Dimension no.1' />
        <ArtComponent image={art1} desc='4th-Dimension no.1' isMain />
        <ArtComponent image={art1} desc='4th-Dimension no.1' />
        <ArtComponent image={art1} desc='4th-Dimension no.1' />
        <ArtComponent image={art1} desc='4th-Dimension no.1' />
        <ArtComponent image={art1} desc='4th-Dimension no.1' />
        <ArtComponent image={art1} desc='4th-Dimension no.1' />
        <ArtComponent image={art1} desc='4th-Dimension no.1' />
        <ArtComponent image={art1} desc='4th-Dimension no.1' isMain />
        <ArtComponent image={art1} desc='4th-Dimension no.1' /> */}
        {/* <ArtComponent image={art1} desc='4th-Dimension no.1' />
        <ArtComponent image={art1} desc='4th-Dimension no.1' />
        <ArtComponent image={art1} desc='4th-Dimension no.1' />
        <ArtComponent image={art1} desc='4th-Dimension no.1' isMain />
        <ArtComponent image={art1} desc='4th-Dimension no.1' />
        <ArtComponent image={art1} desc='4th-Dimension no.1' />
        <ArtComponent image={art1} desc='4th-Dimension no.1' />
        <ArtComponent image={art1} desc='4th-Dimension no.1' />
        <ArtComponent image={art1} desc='4th-Dimension no.1' />
        <ArtComponent image={art1} desc='4th-Dimension no.1' />
        <ArtComponent image={art1} desc='4th-Dimension no.1' isMain />
        <ArtComponent image={art1} desc='4th-Dimension no.1' />
        <ArtComponent image={art1} desc='4th-Dimension no.1' />
        <ArtComponent image={art1} desc='4th-Dimension no.1' />
        <ArtComponent image={art1} desc='4th-Dimension no.1' /> */}
    </MaxWidthWrapper>
}

export default Arts