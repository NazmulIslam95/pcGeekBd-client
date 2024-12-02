const Footer = () => {
  return (
    <footer className="flex flex-col text-white">
      <div className="flex flex-col items-center justify-around gap-5 bg-[#323334] py-8  md:flex-row md:gap-0">
        <img src="/public/logo_white.png" alt="logo image" className="w-48" />
        <nav className="text-lg">
          <ul className="flex h-full items-center justify-center gap-3">
            <li>
              <a className="cursor-pointer hover:underline">Home</a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline">Contact</a>
            </li>
            <li>
              <a className="cursor-pointer hover:underline">About</a>
            </li>
          </ul>
        </nav>
      </div>
      <aside className="bg-[#222222] py-5 text-center text-sm text-white ">
        <p>&copy; 2024 NavigateUI. All Rights Reserved.</p>
      </aside>
    </footer>
  );
};

export default Footer;
