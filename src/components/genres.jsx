
const categories = [
  {
    name: 'Action',
    images: [
      '/img/action1.jpg',
      '/img/action1.jpg',
      '/img/action1.jpg',
      '/img/action1.jpg',
    ],
  },
  {
    name: 'Adventure',
    images: [
      '/img/adventure1.jpg',
      '/img/action1.jpg',
      '/img/action1.jpg',
      '/img/action1.jpg',
    ],
  },
  {
    name: 'Adventure',
    images: [
      '/img/adventure1.jpg',
      '/img/action1.jpg',
      '/img/action1.jpg',
      '/img/action1.jpg',
    ],
  },
  {
    name: 'Adventure',
    images: [
      '/img/adventure1.jpg',
      '/img/action1.jpg',
      '/img/action1.jpg',
      '/img/action1.jpg',
    ],
  },
  {
    name: 'Adventure',
    images: [
      '/img/adventure1.jpg',
      '/img/action1.jpg',
      '/img/action1.jpg',
      '/img/action1.jpg',
    ],
  },
  // Add more categories as needed
];

export default function CategoryCarousel() {
  return (
    <><h1 className="text-white pl-5 bg-black pt-10 font-[700] text-[24px]">Our Genres</h1>
    <div className="overflow-x-auto px-4 py-10 flex flex-col gap-[20px] bg-black">
        
      <div className="flex gap-4 w-max">
        {categories.map((category, idx) => (
          <div
            key={idx}
            className="w-[181.6px] relative flex items-center flex-col gap-[5px] justify-center h-[201px] rounded-[10px] bg-[#1A1A1A] border-1 border-[#262626] p-[20px] shadow-md flex-shrink-0"
          >
            <div className="absolute w-full h-3/4 top-1 bg-gradient-to-b from-transparent to-[#1A1A1A]  rounded-[10px]"></div>
            <div className="w-[141.6px] grid grid-cols-2 h-[140px] rounded-[10px] overflow-hidden">
              {category.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              ))}
            </div>
            <div className="w-full text-white">
              <span className="text-[14px]  flex font-[600]">{category.name}<img src="/arrow.png" alt="arrow"/></span>
            </div>
          </div>
        ))}
      </div>
    </div></>
  );
}
