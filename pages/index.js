
import { Inter } from '@next/font/google'
import Navber from './Navber/Navber'
import AllNews from './AllNews'
import Banner from './Banner'
import Footer from './Navber/Footer'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head><title>Dummy News</title></Head>
    <Navber></Navber>
    <Banner></Banner>
    <div className='max-w-[1280px] mx-auto'>
    <AllNews></AllNews>
    </div>
    <Footer></Footer>
    </div>
  )
}
