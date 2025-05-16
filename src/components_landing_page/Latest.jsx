import { useEffect, useState } from 'react';
import { fetchMovies } from '../utils/tmdbData';
import { Link } from "react-router-dom";
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'


export default function Latest() {
  const [latest, setLatest] = useState([]);
  const [move,setMove] = useState(0);

  useGSAP(()=>{
    gsap.to("#moving-latest", {
    x: -move * 500,
    delay: 0.2,
    duration: 0.5,
    ease: "power2.out",
  });
  },[move])

  useEffect(() => {
    async function getData() {
      const data = await fetchMovies('now_playing');
      if (data) {
        setLatest(data);
      }
    }
    getData();
  }, []);
  return (
    <><div className="flex items-center w-full pt-10 justify-between">
        <h1 className="text-white pl-5 bg-black  font-bold text-[24px]">Latest on Skilledity</h1>
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
    <div id='latest' className="overflow-x-auto lg:overflow-hidden px-4 py-10 flex flex-col gap-[20px] bg-black">
        
      <div id='moving-latest' className="flex gap-4 w-max">
        {latest.slice().reverse().map((item,id) => (
          <Link key={id} to="/movie#start" state={{ movie:item }}><div
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
            <div className="w-full overflow-hidden">
                <div className="flex gap-[2px] bg-[#141414] border-[#262626] text-[12px] rounded-[51px] border-[1px] pt-[6px] pb-[6px] justify-center font-[500] text-[#BFBFBF] items-center"><span className="text-[#999999]">Released at </span>{item.release_date}</div>
            </div>
          </div></Link>
        ))}
      </div>
    </div></>
  );
}
