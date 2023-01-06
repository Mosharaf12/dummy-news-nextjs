import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navber from './Navber/Navber'
import AllNews from './AllNews'
import Banner from './Banner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navber></Navber>
    <Banner></Banner>
    <div className='max-w-[1280px] mx-auto'>
    <AllNews></AllNews>
    </div>
    </>
  )
}
