
const categories = [
  {
    time:'1h57min',
    rating:'20k',
    images: [
      '/img/action1.jpg',
    ],
  },
  {
    time:'1h57min',
    rating:'20k',
    images: [
      '/img/action1.jpg',
    ],
  },
  {
    time:'1h57min',
    rating:'20k',
    images: [
      '/img/action1.jpg',
    ],
  },
  {
    time:'1h57min',
    rating:'20k',
    images: [
      '/img/action1.jpg',
    ],
  },
  {
    time:'1h57min',
    rating:'20k',
    images: [
      '/img/action1.jpg',
    ],
  },
  // Add more categories as needed
];

export default function CategoryCarousel() {
  return (
    <><h1 className="text-white pl-5 pt-5 bg-black font-[700] text-[24px]">Top Rated</h1>
    <div className="overflow-x-auto  px-4 py-10 flex flex-col gap-[20px] bg-black">
      <div className="flex gap-4 w-max">
        {categories.map((category, idx) => (
          <div
            key={idx}
            className="w-[231px] relative flex items-center flex-col gap-[12px] justify-center h-[303px] rounded-[10px] bg-[#1A1A1A] border-1 border-[#262626] p-[12px] shadow-md flex-shrink-0"
          >
            <div className="w-[207px] h-[235px] rounded-[10px] overflow-hidden">
              {category.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              ))}
            </div>
            <div className="w-full text-[#999999]">
                <span className="text-[14px] flex justify-between font-[600]">
                    <div className="flex gap-[2px] bg-[#141414] border-[#262626] text-[12px] rounded-[51px] border-[1px] pt-[4px] pr-[8px] pb-[4px] pl-[4px] font-[500] items-center"><img src="/clock.png" className="h-[20px] w-[20px]" alt="time" />{category.time}</div>
                    <div className="flex gap-[2px] bg-[#141414] border-[#262626] text-[12px] rounded-[51px] border-[1px] pt-[4px] pr-[8px] pb-[4px] pl-[4px] font-[500] items-center"><img src="/temp-stars.png" className="h-[14px] w-[74.72px]" alt="views" />{category.rating}</div>
                </span>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
