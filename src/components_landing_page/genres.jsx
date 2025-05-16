import { useEffect, useState } from 'react';
import { fetchMovies } from '../utils/tmdbData';
import { categories as categoryTemplate } from '../utils/poster_template';

export default function CategoryCarousel() {
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
              newImages.length < 4 &&
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
      for (let i = 1; i <= 10; i++) {
        await fetchAndAssign(i);
      }
      
    })();
  }, []);

  return (
    <>
      <h1 className="text-white pl-5 bg-black pt-10 font-bold text-[24px]">Our Genres</h1>
      <div className="overflow-x-auto px-4 py-10 flex flex-col gap-[20px] bg-black">
        <div className="flex gap-4 w-max">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className="w-[181.6px] cursor-pointer relative flex items-center flex-col gap-[5px] justify-center h-[201px] rounded-[10px] bg-[#1A1A1A] border border-[#262626] p-[20px] shadow-md flex-shrink-0"
            >
              <div className="absolute w-full h-3/4 top-1 bg-gradient-to-b from-transparent to-[#1A1A1A] rounded-[10px]"></div>
              <div className="w-[141.6px] grid gap-2 grid-cols-2 h-[140px] rounded-[10px] overflow-hidden">
                {category.images.map((img, i) => (
                  <div key={i} className="w-full h-full rounded-md overflow-hidden">
                    <img src={img} alt="" className="object-cover w-full h-full" />
                  </div>
                ))}
              </div>
              <div className="w-full text-white">
                <span className="text-[14px] flex font-[600] items-center gap-1">
                  {category.name}
                  <img src="/arrow.png" alt="arrow" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
