import { useEffect, useState } from 'react';
import { fetchMovies } from '../utils/tmdbData';
import { Link } from "react-router-dom";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


export default function Upcoming() {
  const [Upcoming, setUpcoming] = useState([]);
  const [move,setMove] = useState(0);

  useGSAP(()=>{
    gsap.to("#moving-banger", {
    x: -move * 500,
    delay: 0.2,
    duration: 0.5,
    ease: "power2.out",
  });
  },[move])


  useEffect(() => {
    async function getData() {
      const data = await fetchMovies('/upcoming');
      if (data) {
        setUpcoming(data);
      }
    }
    getData();
  }, []);
  return (
    <><div className="flex items-center w-full pt-10 justify-between">
        <h1 className="text-white pl-5 bg-black  font-bold text-[24px]">Upcoming Bangers</h1>
        <div className="hidden lg:flex gap-2">
                    <button onClick={()=>{
                      if(move>0 && move<=5) setMove(move-1)}} className="w-8 cursor-pointer h-8 flex pt-[2px] justify-center rounded-[9px] bg-[#262626] text-white">
                      ←
                    </button>
                    <button onClick={()=>{
                      if(move>=0 && move<5) setMove(move+1)}} className="w-8 cursor-pointer h-8 flex pt-[2px] justify-center rounded-[9px] bg-[#262626] text-white">
                      →
                    </button>
                  </div>
      </div>
    <div id='upcoming' className="overflow-x-auto lg:overflow-hidden px-4 py-10 flex flex-col gap-[20px] bg-black">
        
      <div id='moving-banger' className="flex gap-4 w-max">
        {Upcoming.map((item,id) => (
          <Link key={id} to="/movie" state={{ movie:item }}><div
            key={id}
            className="w-[181.6px] cursor-pointer relative flex items-center flex-col gap-[12px] justify-center h-[259px] rounded-[10px] bg-[#1A1A1A] border-1 border-[#262626] p-[12px] shadow-md flex-shrink-0"
          >
            <div className="w-[157.6px] h-[195px] rounded-[10px] overflow-hidden">
            
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
             
            </div>
            <div className="w-full text-[#999999]">
                <span className="text-[14px] flex justify-between font-[600]">
                    <div className="flex gap-[2px] bg-[#141414] border-[#262626] text-[12px] rounded-[51px] border-[1px] pt-[4px] pr-[8px] pb-[4px] pl-[4px] font-[500] items-center"><img src="/clock.png" className="h-[20px] w-[20px]" alt="time" />{Math.floor(Math.random() * 2) + 1}hr {Math.floor(Math.random() * 60) + 1}min</div>
                    <div className="flex gap-[2px] bg-[#141414] border-[#262626] text-[12px] rounded-[51px] border-[1px] pt-[4px] pr-[8px] pb-[4px] pl-[4px] font-[500] items-center"><img src="/eye.png" className="h-[20px] w-[20px]" alt="views" />{Math.floor(Math.random() * 9) + 1}k</div>
                </span>
            </div>
          </div></Link>
        ))}
      </div>
    </div></>
  );
}
