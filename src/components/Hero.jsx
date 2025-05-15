import React from 'react'

const Hero = () => {
  return (
    <div className='h-[650px] bg-gradient-to-b from-black via-transparent to-black relative w-full'>
     <div className='bg-transparent flex flex-col items-center absolute bottom-5'>
        <h1 className='text-[#FFFFFF] text-[20px] font-bold'>Best experience with Skilledity</h1>
        <h2 className='text-[#999999] text-center text-[14px] font-light'>Skilledity is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere.</h2>
        <button className='flex text-[#FFFFFF] mt-5 px-5 py-3 bg-red-500 rounded-md'><img src="/play.png" alt="play" />Start Watching Now</button>
     </div>

    </div>
  )
}

export default Hero