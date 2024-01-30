import { FC } from 'react'
import MaxWidthWrapper from '../MaxWidthWrapper'
import ArtComponent from './ArtComponent'
import { art1 } from '../../assets'

interface ArtsProps {

}

const Arts: FC<ArtsProps> = () => {
    return <MaxWidthWrapper className='grid grid-cols-3 gap-5'>
        <ArtComponent image={art1} desc='4th-Dimension no.1' />
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