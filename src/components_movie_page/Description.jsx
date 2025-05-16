import React from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const Description = ({ movie }) => {
    
  return (
     <div className='bg-black flex items-center justify-center'>
         <div id='start' className='w-full lg:w-[1596px] lg:h-[1101px] bg-black lg:grid lg:grid-rows-4 lg:grid-cols-3 flex flex-col min-h-[1000px] items-center gap-[20px]'>
            <div className="description lg:w-[1057px] lg:h-[195px] lg:col-span-2 lg:row-span-1 w-[358px] flex flex-col gap-[8px] rounded-[10px] p-[24px] bg-[#1A1A1A] border-[1px] border-[#262626]">
                <h1 className='text-[14px] font-[500] text-[#999999]'>Description</h1>
                <h2 className='text-[14px] font-[500] text-[#FFFFFF]'>
                    {movie.overview}
                </h2>
            </div>
            <div className="release lg:w-[470px] lg:h-[937px] min-h-[675px] lg:col-span-1 lg:row-span-4 lg:px-[80px] flex flex-col gap-[20px] p-[24px] border-[1px] rounded-[10px] w-[358px] bg-[#1A1A1A] border-[#262626]">
                <div className='w-[310px] flex flex-col gap-[10px] h-[55px]'>
                    <div className='flex'>
                        <img src="/calender.png" alt="" /><span className='text-[14px] font-[500] text-[#999999]'>Released Year</span>
                    </div>
                    <div className='text-[#FFFFFF] text-[16px] font-[600]'>{movie.release_date.slice(0,4)}</div>
                </div>
                <div className='w-[310px] flex flex-col gap-[10px] min-h-[55px]'>
                    <div className='flex'>
                        <img src="/language.png" alt="" /><span className='text-[14px] font-[500] text-[#999999]'>Available Languages</span>
                    </div>
                    <div className='flex flex-wrap gap-[10px]'>
                        {["English","Hindi","Tamil","Telugu","Kannada"].map((item)=>(
                            <div className='flex text-[#FFFFFF] text-[14px] font-[500] items-center justify-center w-[72px] h-[33px] rounded-[6px] border-[1px] bg-[#141414] border-[#262626] py-[6px] px-[12px]'>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-[310px] flex flex-col gap-[10px] min-h-[55px]'>
                    <div className='flex'>
                        <img src="/star.png" alt="" /><span className='text-[14px] font-[500] text-[#999999]'>Ratings</span>
                    </div>
                    <div className='w-[310px] h-[68px] gap-[16px] flex'>
                        <div className='w-[147px] flex flex-col min-h-[68px] rounded-[8px] border-[1px] p-[12px] gap-[2px] bg-[#141414] border-[#262626]'>
                            <span className='text-[#FFFFFF] text-[14px] font-[600]'>IMDB</span>
                            <span className='w-[74.2] text-[14px] text-[#FFFFFF] overflow-hidden flex items-center h-[14px]'>
                          <Rating
                            name="rating-read"
                            value={movie.vote_average/2}
                            precision={0.5}
                            readOnly
                            size="small"
                          />
                          {Math.round((movie.vote_average / 2) * 10) / 10}
                        </span>
                        </div>
                        <div className='w-[147px] flex flex-col min-h-[68px] rounded-[8px] border-[1px] p-[12px] gap-[2px] bg-[#141414] border-[#262626]'>
                            <span className='text-[#FFFFFF] text-[14px] font-[600]'>Streamvibe</span>
                            <span className='w-[74.2] text-[14px] text-[#FFFFFF] overflow-hidden flex items-center h-[14px]'>
                          <Rating
                            name="rating-read"
                            value={movie.vote_average/2}
                            precision={0.5}
                            readOnly
                            size="small"
                          />
                          {Math.round((movie.vote_average / 1.2) * 10) / 10}
                        </span>
                        </div>
                    </div>
                </div>
                 <div className='w-[310px] flex flex-col gap-[10px] min-h-[55px]'>
                    <div className='flex'>
                        <img src="/genres.png" alt="" /><span className='text-[14px] font-[500] text-[#999999]'>Available Languages</span>
                    </div>
                    <div className='flex flex-wrap gap-[10px]'>
                        {["Action","Adventure"].map((item)=>(
                            <div className='flex text-[#FFFFFF] text-[14px] font-[500] items-center justify-center min-w-[72px] h-[33px] rounded-[6px] border-[1px] bg-[#141414] border-[#262626] py-[6px] px-[12px]'>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-[310px] flex flex-col gap-[10px] min-h-[55px]'>
                    <div className='flex'>
                        <span className='text-[14px] font-[500] text-[#999999]'>Director</span>
                    </div>
                    <div className='w-[310px] h-[70px] overflow-hidden rounded-[8px] flex gap-[8px] p-[10px] border-[1px] bg-[#141414] border-[#262626]'>
                        <img src="/rishab.png" className='w-[47.13px] h-[50px] rounded-[6px]' alt="" />
                        <div className='flex flex-col'>
                            <span className='text-[#FFFFFF] text-[16px] font-[500]'>Rishab Shetty</span>
                            <span className='text-[#999999] font-[500] text-[14px]'>From India</span>
                        </div>
                    </div>
                </div>
                <div className='w-[310px] flex flex-col gap-[10px] min-h-[55px]'>
                    <div className='flex'>
                        <span className='text-[14px] font-[500] text-[#999999]'>Music</span>
                    </div>
                    <div className='w-[310px] h-[70px] overflow-hidden rounded-[8px] flex gap-[8px] p-[10px] border-[1px] bg-[#141414] border-[#262626]'>
                        <img src="/music.png" className='w-[47.13px] h-[50px] rounded-[6px]' alt="" />
                        <div className='flex flex-col'>
                            <span className='text-[#FFFFFF] text-[16px] font-[500]'>B. Ajaneesh Loknath</span>
                            <span className='text-[#999999] font-[500] text-[14px]'>From India</span>
                        </div>
                    </div>
                </div>
            </div>
             <div className="bg-black lg:w-[1057px] lg:h-[291px] w-full lg:col-span-1 lg:row-span-1 flex justify-center ">
            <div className="bg-[#1A1A1A] lg:w-[1057px] lg:h-[291px] border-[1px] border-[#262626] w-[358px] min-h-[183px] p-[24px] rounded-lg">
              <div className="flex justify-between items-center pb-3">
                <h2 className="text-white font-semibold text-lg">Cast</h2>
                <div className="flex gap-2">
                  <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#262626] text-white">
                    ←
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#262626] text-white">
                    →
                  </button>
                </div>
              </div>
              <div className="flex gap-4 overflow-hidden">
                {["/rishab.png","/guy1.png","guy2.png","/music.png","/rishab.png","/guy1.png","guy2.png","/music.png",].map((item)=>(
                    <img
                    src={item}
                    alt=""
                    className="w-16 h-16 lg:w-[102.13px] lg:h-[109px] object-cover rounded-[8px]"
                  />
                ))}
         
         
              </div>
            </div>
             </div>
          <div className="bg-black lg:w-[1057px] lg:h-[300px] -mt-[150px] lg:col-span-2 lg:row-span-2 w-full flex justify-center pb-[20px] ">
            <div className="bg-[#1A1A1A] lg:w-[1057px] lg:h-[300px] border-[1px] border-[#262626] w-[358px] min-h-[183px] p-[24px] rounded-lg">
              <div className="flex justify-between items-center pb-4">
                <h2 className="text-white font-semibold text-lg">Reviews</h2>
                <button className="px-4 py-2 bg-[#262626] text-white rounded-md text-sm">
                  + Add Your Review
                </button>
              </div>
         
                <div className="flex gap-[10px]">
                    <div className="bg-[#0F0F0F] border-[1px] border-[#262626] rounded-lg p-4 text-white">
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <h3 className="font-semibold text-[16px]">Aniket Roy</h3>
                          <p className="text-[#999999] text-sm">From India</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className='w-[74.2] overflow-hidden flex items-center h-[14px]'>
                              <Rating
                                name="rating-read"
                                value={4.5}
                                precision={0.5}
                                readOnly
                                size="small"
                              />
                            </span>
                          <span className="text-sm font-semibold text-white">4.5</span>
                        </div>
                      </div>
                      <p className="text-sm text-[#CCCCCC]">
                        This movie was recommended to me by a very dear friend who went for the movie by herself.
                        I went to the cinemas to watch but had a houseful board so couldn't watch it.
                      </p>
                    </div>
                    <div className="bg-[#0F0F0F] hidden lg:block border-[1px] border-[#262626] rounded-lg p-4 text-white">
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <h3 className="font-semibold text-[16px]">Aniket Roy</h3>
                          <p className="text-[#999999] text-sm">From India</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className='w-[74.2] overflow-hidden flex items-center h-[14px]'>
                              <Rating
                                name="rating-read"
                                value={4.5}
                                precision={0.5}
                                readOnly
                                size="small"
                              />
                            </span>
                          <span className="text-sm font-semibold text-white">4.5</span>
                        </div>
                      </div>
                      <p className="text-sm text-[#CCCCCC]">
                        This movie was recommended to me by a very dear friend who went for the movie by herself.
                        I went to the cinemas to watch but had a houseful board so couldn't watch it.
                      </p>
                    </div>
                </div>
         
              <div className="flex justify-center items-center mt-4 gap-6">
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#262626] text-white">
                  ←
                </button>
                <div className="flex gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="w-2 h-2 rounded-full bg-[#999999]" />
                  <span className="w-2 h-2 rounded-full bg-[#999999]" />
                </div>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-[#262626] text-white">
                  →
                </button>
              </div>
            </div>
             </div>
         </div>
     </div>
  )
}

export default Description