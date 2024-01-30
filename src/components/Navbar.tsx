import { FC } from 'react'
import { MdWbSunny } from 'react-icons/md'
import { useData } from '../providers/Providers'

const Navbar: FC = () => {
  const { toggleMode } = useData()

  return <div className="flex w-full justify-between my-16 text-zinc-400">
    <p>ARTIST STATEMENT</p>
    <p>WORKS</p>
    <h1 className='text-white font-bold text-3xl font-serif'>Madoc Pierce</h1>
    <p>CONTACT</p>
    <button className='bg-stone-300/40 h-8 w-8 flex items-center justify-center rounded-full' onClick={()=>toggleMode()}><MdWbSunny size={20} color='white' /></button>
  </div>
}

export default Navbar