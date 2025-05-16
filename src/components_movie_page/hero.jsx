
const hero = ({ movie }) => {
    const imageUrl = movie?.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;
  return (
    <div id='home' className='h-[650px] lg:h-[1005px] bg-gradient-to-b w-full from-black via-transparent to-black relative'>
      <div className='w-full h-full bg-black fixed -z-10  gap-[10px]'>
        <img
                  src={imageUrl}
                  alt=""
                  className="w-full lg:object-center h-full object-cover"
                />
      </div>
     <div className='bg-transparent w-full justify-center flex flex-col items-center z-10 absolute bottom-5 lg:bottom-40'>
        <h1 className='text-[#FFFFFF] text-[20px] text-center font-bold'>{movie.title}</h1>
        <div className="flex flex-col lg:flex-row lg:gap-[20px] justify-center items-center">
          <button className='flex cursor-pointer  lg:min-w-[342px] items-center justify-center gap-[4px] text-[#FFFFFF] mt-5 px-5 py-3 bg-red-500 rounded-md'><img src="/play.png" alt="play" />Play Now</button>
          <div className="flex mt-[20px] gap-[8px] bg-transparent">
              <img src="/plus.png" alt="" /><img src="/thumsup.png" alt="" /><img src="/volume.png" alt="" />
          </div>
        </div>
     </div>

    </div>
  )
}

export default hero