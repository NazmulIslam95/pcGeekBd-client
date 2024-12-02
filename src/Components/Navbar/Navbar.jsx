import { BsBucket } from "react-icons/bs";
import { TfiSearch } from "react-icons/tfi";
import { Link } from "react-router-dom";
import Navitems from "./Navitems";
import { CiDeliveryTruck, CiHeart, CiUser } from "react-icons/ci";
import { PiKeyReturnThin } from "react-icons/pi";
import { BiSupport } from "react-icons/bi";

const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="navbar justify-center bg-base-100  ">
        <div className="flex-1">
          <Link to="/">
            <img src="/public/logo.png" alt="logo image" className="w-48" />
          </Link>
        </div>
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
      <Navitems></Navitems>
      <div className="flex justify-around my-6">
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
  );
};

export default Navbar;
