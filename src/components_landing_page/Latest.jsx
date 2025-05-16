import { useEffect, useState } from 'react';
import { fetchMovies } from '../utils/tmdbData';
import { Link } from "react-router-dom";


export default function Latest() {
  const [latest, setLatest] = useState([]);

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
    <><h1 className="text-white bg-black pl-5 pt-5 font-[700] text-[24px]">Latest on Skilledity</h1>
    <div id='latest' className="overflow-x-auto px-4 py-10 flex flex-col gap-[20px] bg-black">
        
      <div className="flex gap-4 w-max">
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
