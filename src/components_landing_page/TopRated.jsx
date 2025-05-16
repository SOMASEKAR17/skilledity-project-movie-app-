import { useEffect, useState } from 'react';
import { fetchMovies } from '../utils/tmdbData';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";

export default function TopRated() {
  const [topRated, setTopRated] = useState([]);

  useEffect(() => {
    async function getData() {
      const data = await fetchMovies('top_rated');
      if (data) {
        setTopRated(data);
      }
    }
    getData();
  }, []);

  return (
    <>
      <h1 className="text-white pl-5 pt-5 bg-black font-[700] text-[24px]">Top Rated</h1>
      <div id='toprated' className="overflow-x-auto px-4 py-10 flex flex-col gap-[20px] bg-black">
        <div className="flex gap-4 w-max">
          {topRated.map((item, idx) => (
            <Link key={idx} to="/movie" state={{ movie:item }}><div
              key={idx}
              className="w-[231px] cursor-pointer relative flex items-center flex-col gap-[12px] justify-center h-[303px] rounded-[10px] bg-[#1A1A1A] border border-[#262626] p-[12px] shadow-md flex-shrink-0"
            >
              <div className="w-[207px] h-[235px] rounded-[10px] overflow-hidden">
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full text-[#999999]">
                <span className="text-[14px] flex justify-between font-[600]">
                  <div className="flex overflow-hidden w-[87px] h-[32px] gap-[2px] bg-[#141414] border-[#262626] text-[12px] rounded-[51px] border pt-[4px] pr-[8px] pb-[4px] pl-[4px] font-[500] items-center">
                    <img src="/clock.png" className="h-[20px] w-[20px]" alt="time" />
                    {Math.floor(Math.random() * 2) + 1}h {Math.floor(Math.random() * 60) + 1}min
                  </div>
                  <div className="flex w-[116.72px] h-[30px]  items-center justify-center bg-[#141414] border-[#262626] text-[12px] rounded-[10px] border p-[4px] font-[500]">
                    <span className='w-[74.2] overflow-hidden flex items-center h-[14px]'>
                     
                      <Rating
                        name="rating-read"
                        value={item.vote_average/2}
                        precision={0.5}
                        readOnly
                        size="small"
                      />
                    </span>
                    <span className='text-[12px]'>{item.vote_count.toString().slice(0, 2)}k</span>
                  </div>
                </span>
              </div>
            </div></Link>
          ))}
        </div>
      </div>
    </>
  );
}
