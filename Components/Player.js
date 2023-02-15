import dynamic from 'next/dynamic';
import React from 'react'
import ReactHlsPlayer from 'react-hls-player';
  

function Player({setOpen,playUrl}){

  return (
    <div className=' max-w-5xl mx-auto z-50 overflow-hidden  flex justify-center flex-col top-0 bg-black/60 min-h-screen'>
        <div className='min-h-full min-w-full  relative'>
        <button className='absolute top-3 text-red-500 right-7 text-xl font-bold' onClick={()=>setOpen(false)}>X</button>
        <br />
        <br />
        <br />
        <ReactHlsPlayer
    src={playUrl}
    autoPlay={true}
    controls={true}
    width="100%"
    height="auto"
  />
        </div>
    </div>
  )
}

export default Player