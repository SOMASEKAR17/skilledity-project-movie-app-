import { useEffect, useState } from 'react';
import { fetchMovies } from '../utils/tmdbData';
import { categories as categoryTemplate } from '../utils/poster_template';

const Hero = () => {
  const [categories, setCategories] = useState(() =>
      categoryTemplate.map(cat => ({ ...cat, images: [] }))
    );
  
    useEffect(() => {
      async function fetchAndAssign(page) {
        const data = await fetchMovies(`/upcoming?page=${page}`);
        if (!data) return;
  
        setCategories(prevCategories =>
          prevCategories.map(cat => {
            if (cat.images.length >= 4) return cat;
            const newImages = [...cat.images];
  
            data.forEach(movie => {
              if (
                movie.genre_ids.includes(cat.id) &&
                newImages.length < 12 &&
                movie.poster_path
              ) {
                newImages.push(`https://image.tmdb.org/t/p/w500${movie.poster_path}`);
              }
            });
  
            return { ...cat, images: newImages };
          })
        );
      }
  
      // Fetch multiple pages sequentially
      (async () => {
        for (let i = 1; i <= 2; i++) {
          await fetchAndAssign(i);
        }
        
      })();
    }, []);
  return (
    <div id='home' className='h-[650px] bg-gradient-to-b from-black via-transparent to-black relative w-full'>
      <div className='w-full h-full overflow-hidden bg-black fixed -z-10 grid grid-cols-4 lg:grid-cols-8 lg:gap-[20px] lg:grid-rows-6  gap-[10px]'>
        {categories.slice(0,4).map((category) => (
          category.images.map((img, i) => (
            <div className=" gap-2 lg:row-span-2 lg:col-span-1 flex rounded-[10px]  overflow-hidden">
              
                <img
                  src={img}
                  alt=""
                  className="w-full  h-full object-cover"
                />
             
            </div>
          ))
        ))}
      </div>
     <div className='bg-transparent w-full flex flex-col items-center z-10 absolute bottom-5'>
        <h1 className='text-[#FFFFFF] text-[20px] font-bold'>Best experience with Skilledity</h1>
        <h2 className='text-[#999999] lg:hidden text-center text-[14px] font-light'>Skilledity is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere.</h2>
        <h2 className='text-[#999999] w-[1096px] hidden lg:inline text-center text-[14px] font-light'>Skilledity is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With Skilledity, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.</h2>
        <button className='flex cursor-pointer text-[#FFFFFF] mt-5 px-5 py-3 bg-red-500 rounded-md'><img src="/play.png" alt="play" />Start Watching Now</button>
     </div>

    </div>
  )
}

export default Hero