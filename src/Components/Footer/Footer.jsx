import { BiHome, BiPhone } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" divide-y  text-gray-800">
      <div className="bg-gray-100">
        <div className="container flex max-w-7xl  flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
          <div className="">
            <Link to="/">
              <img src="../../../public/logo.png" alt="" className="w-52" />
            </Link>
            <br />
            <div>
              <div className="flex justify-start items-center">
                <BiHome></BiHome>
                <h3 className="ml-4">
                  Shop No. 118, Multiplen Computer City Center,
                  <br /> New Elephant Road, Dhaka
                </h3>
              </div>
              <div className="flex justify-start items-center my-4">
                <BiPhone></BiPhone>
                <h3 className="ml-4">+88 01711 057 383</h3>
              </div>
              <div className="flex justify-start items-center">
                <MdEmail></MdEmail>
                <h3 className="ml-4">pcgeekbd@gmail.mcom</h3>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
            <div className="space-y-3">
              <h3 className="uppercase text-gray-800">Product</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Features
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Integrations
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Pricing
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="uppercase text-gray-800">Company</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Privacy
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="uppercase text-gray-800">Developers</h3>
              <ul className="space-y-1">
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Public API
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Documentation
                  </a>
                </li>
                <li>
                  <a rel="noopener noreferrer" href="#">
                    Guides
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="uppercase text-gray-800">Social media</div>

              <div className="flex justify-start space-x-3">
                <a
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/pcgeekbangladesh"
                  title="Facebook"
                  className="flex items-center text-2xl "
                >
                  <FaFacebook></FaFacebook>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/@pcgeekbd"
                  title="Youtube"
                  className="flex items-center text-2xl mx-4"
                >
                  <FaYoutube></FaYoutube>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/pcgeekbd/"
                  title="Instagram"
                  className="flex items-center text-2xl "
                >
                  <FaInstagram></FaInstagram>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center bg-gray-200 text-gray-700">
        Copyright © 2024 - All right reserved by PC Geek BD
      </div>
    </footer>
  );
};

export default Footer;
