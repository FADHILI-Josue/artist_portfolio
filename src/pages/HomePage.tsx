import { FC } from 'react'
import { useData } from '../providers/Providers'
import Navbar from '../components/Navbar'
import { home_left } from '../assets'

interface HomePageProps {
  
}

const HomePage: FC<HomePageProps> = () => {
    const {toggleMode} = useData()
  return <div className='w-full bg-white dark:bg-black dark:text-white'>
    <Navbar />
    <div className="absolute h-screen w-1/2 left-0 flex">
        <img src={home_left} alt="home left" className='h-4/5 my-auto' />
    </div>
    <div className="flex flex-col py-60 min-h-screen">
    <button onClick={toggleMode}>yooo</button>
    <button onClick={toggleMode}>yooo</button>
    <button onClick={toggleMode}>yooo</button>
    <button onClick={toggleMode}>yooo</button>
    <button onClick={toggleMode}>yooo</button>
    <button onClick={toggleMode}>yooo</button>
    </div>
  </div>
}

export default HomePage