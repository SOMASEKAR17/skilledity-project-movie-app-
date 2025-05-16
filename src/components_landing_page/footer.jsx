

const Footer = () => {
  return (
    <footer className="bg-black pt-30 text-gray-300 px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
        {/* Column 1 */}
        <div>
          <h4 className="text-white font-semibold mb-4">Home</h4>
          <ul className="space-y-2 text-[#999999] text-sm">
            <li>Categories</li>
            <li>Devices</li>
            <li>Pricing</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-white font-semibold mb-4">Movies</h4>
          <ul className="space-y-2 text-[#999999] text-sm">
            <li>Genres</li>
            <li>Trending</li>
            <li>New Release</li>
            <li>Popular</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-white font-semibold mb-4">Shows</h4>
          <ul className="space-y-2 text-[#999999] text-sm">
            <li>Genres</li>
            <li>Trending</li>
            <li>New Release</li>
            <li>Popular</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="text-white font-semibold mb-4">Support</h4>
          <ul className="space-y-2 text-[#999999] text-sm">
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Column 5 */}
        <div>
          <h4 className="text-white font-semibold mb-4">Subscription</h4>
          <ul className="space-y-2 text-[#999999] text-sm">
            <li>Plans</li>
            <li>Features</li>
          </ul>
        </div>

        {/* Column 6 */}
        <div>
          <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
          <div className="flex space-x-4">
            <button className="p-2 bg-[#1A1A1A] rounded border-[1px] border-[#262626]">
              <img src="/fb.png" alt="facebook" />
            </button>
            <button className="p-2 bg-[#1A1A1A] rounded border-[1px] border-[#262626]">
              <img src="/twitter.png" alt="twitter" />
            </button>
            <button className="p-2 bg-[#1A1A1A] rounded border-[1px] border-[#262626]">
              <img src="/linkedin.png" alt="linkedin" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl text-[#999999] mx-auto flex flex-col md:flex-row justify-between items-center pt-6 text-xs ">
        <p>©2023 Skilledity, All Rights Reserved</p>
        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
