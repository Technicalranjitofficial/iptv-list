import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from "../Components/Navbar"
import TableContent from '../Components/TableContent'

const inter = Inter({ subsets: ['latin'] })
import data from "../channels.json"
import { useEffect, useState } from 'react'
import Player from '../Components/Player'


export default function Home() {
 
  const [channel,setChannel] = useState(data);
  const [open,setOpen] = useState(false);
  const [playUrl,setPlayUrl] = useState("");

  const handleOnplay=(url)=>{
    setPlayUrl(url);
    setOpen(true);
  }
  const handleOnSearch=(e)=>{

    if(e.target.value!==''){
      const filtereddata = data.filter((item)=>{
       return Object.values(item).join('').toLowerCase().includes(e.target.value.toLowerCase());
      });
      setChannel(filtereddata);

      console.log(filtereddata);
    }else{
      setChannel(data);
    }


    
  }
  return (
    <>
   <div className=' bg-black/75 mx-auto   min-h-screen'>
   {open && <div className='w-full mx-auto fixed  z-50'>
      <Player setOpen={setOpen} playUrl={playUrl}/>
     
      </div>}
    <div className='max-w-4xl pt-3 relative  mx-auto '>
     
      <br />
      <Navbar/>
      <br />
      <br />
      <input className='rounded-md pl-3 hover:outline-none outline-none bg-black/75 text-white' onChange={(e)=>handleOnSearch(e)}  type="text" placeholder='Search..' />
      <TableContent handleOnplay={handleOnplay} channel={channel}/>
    </div>
   </div>
    </>
  )
}
