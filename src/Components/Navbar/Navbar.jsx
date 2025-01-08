import { BsBucket } from "react-icons/bs";
import { TfiSearch } from "react-icons/tfi";
import { Link } from "react-router-dom";
// import Navitems from "./Navitems";
import { CiDeliveryTruck, CiHeart, CiUser } from "react-icons/ci";
import { PiKeyReturnThin } from "react-icons/pi";
import { BiSupport } from "react-icons/bi";

const Navbar = () => {
  const navItems = (
    <>
      <li className="group flex  cursor-pointer flex-col uppercase font-semibold">
        Home
        <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#f2c94c] transition-all duration-300 group-hover:w-full"></span>
      </li>
      <li className="group flex  cursor-pointer flex-col uppercase font-semibold">
        Store
        <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#f2c94c] transition-all duration-300 group-hover:w-full"></span>
      </li>
      {/* <li className="group flex  cursor-pointer flex-col uppercase font-semibold">
          ACCESSORIES
          <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-[#f2c94c] transition-all duration-300 group-hover:w-full"></span>
        </li> */}
      <li className="group flex  cursor-pointer flex-col uppercase font-semibold">
        Brand
        <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#f2c94c] transition-all duration-300 group-hover:w-full"></span>
      </li>
      {/* <li className="group flex  cursor-pointer flex-col uppercase font-semibold">
          Pages
          <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#f2c94c] transition-all duration-300 group-hover:w-full"></span>
        </li> */}
      <li className="group flex  cursor-pointer flex-col uppercase font-semibold">
        About Us
        <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#f2c94c] transition-all duration-300 group-hover:w-full"></span>
      </li>
      {/* <li className="group flex  cursor-pointer flex-col uppercase font-semibold">
          News
          <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#f2c94c] transition-all duration-300 group-hover:w-full"></span>
        </li> */}
      <li className="group flex  cursor-pointer flex-col uppercase font-semibold">
        Contact Us
        <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-[#f2c94c] transition-all duration-300 group-hover:w-full"></span>
      </li>
    </>
  );

  return (
    <div className="max-w-7xl mx-auto">
      <div className="navbar p-0 justify-between bg-base-100 ">
        <div className="flex">
          <Link to="/">
            <img src="/logo.png" alt="logo image" className="w-48" />
          </Link>
        </div>
        {/* <Navitems></Navitems> */}
        <div className="flex-none space-x-6 ">
          {/* ----------- search button ---------- */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="">
              <div className="indicator text-2xl">
                <TfiSearch />
              </div>
            </div>
            {/* <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div> */}
          </div>

          {/* ----------- profile button ---------- */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="">
              <div className="indicator text-3xl ">
                <CiUser />
              </div>
            </div>
            {/* <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div> */}
          </div>

          {/* ----------- cart button ---------- */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="">
              <div className="indicator text-2xl">
                <BsBucket />
              </div>
            </div>
            {/* <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div> */}
          </div>

          {/* ----------- favorite button ---------- */}
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="">
              <div className="indicator text-3xl">
                <CiHeart />
              </div>
            </div>
            {/* <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div> */}
          </div>

          {/* <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className=" avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div> */}
        </div>
      </div>
      {/* <Navitems>-----------------------------------------</Navitems> */}
      <div className="hidden lg:flex justify-center border border-black p-2 border-x-0">
        {/* <div> */}
        <ul className="flex items-center space-x-10">
          {navItems}
        </ul>
      </div>

      {/* ------------------------------------------- */}
      <div className="hidden lg:flex justify-around my-2">
        <div className="flex items-center gap-4 ">
          <CiDeliveryTruck className="text-yellow-400 text-xl" />
          <h4 className="font-semibold">FREE SHIPPING</h4>
        </div>
        <div className="flex items-center gap-4 ">
          <PiKeyReturnThin className="text-yellow-400 text-xl" />
          <h4 className="font-semibold">100% Replacement</h4>
        </div>
        <div className="flex items-center gap-4 ">
          <BiSupport className="text-yellow-400 text-xl" />
          <h4 className="font-semibold">Support 24/7</h4>
        </div>
      </div>
    </div>

    // <div className="navbar bg-base-100">
    //   <div className="navbar-start">
    //     <div className="dropdown">
    //       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 6h16M4 12h8m-8 6h16"
    //           />
    //         </svg>
    //       </div>
    //       <ul
    //         tabIndex={0}
    //         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
    //       >
    //         {navItems}
    //       </ul>
    //     </div>
    //     <a className="btn btn-ghost text-xl">daisyUI</a>
    //   </div>
    //   <div className="navbar-center hidden lg:flex">
    //     <ul className="menu menu-horizontal px-1 flex items-center space-x-10">
    //       {navItems}
    //     </ul>
    //   </div>
    //   <div className="navbar-end">
    //     <a className="btn">Button</a>
    //   </div>
    // </div>
  );
};

export default Navbar;
