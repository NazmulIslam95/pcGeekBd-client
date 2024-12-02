const Navitems = () => {
  return (
    <div className="flex justify-center border border-black p-4 border-x-0">
      {/* <div> */}
        <ul className="flex items-center space-x-10">
          <li className="group flex  cursor-pointer flex-col uppercase font-semibold">
            Home
            <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#f2c94c] transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group flex  cursor-pointer flex-col uppercase font-semibold">
            Store
            <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#f2c94c] transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group flex  cursor-pointer flex-col uppercase font-semibold">
            ACCESSORIES
            <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#f2c94c] transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group flex  cursor-pointer flex-col uppercase font-semibold">
            Brand
            <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#f2c94c] transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group flex  cursor-pointer flex-col uppercase font-semibold">
            Pages
            <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#f2c94c] transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group flex  cursor-pointer flex-col uppercase font-semibold">
            About Us
            <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#f2c94c] transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group flex  cursor-pointer flex-col uppercase font-semibold">
            News
            <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#f2c94c] transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group flex  cursor-pointer flex-col uppercase font-semibold">
            Contact Us
            <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#f2c94c] transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>
      </div>
    // </div>
  );
};

export default Navitems;
