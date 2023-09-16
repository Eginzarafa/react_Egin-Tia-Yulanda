import Logo from "../assets/images/logo.png";

function Header() {
  return (
    <header className="bg-blue-950 py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-2xl font-semibold">
          <img className=" w-10 h-10 " src={Logo} alt="" />
        </a>
        <ul className="flex space-x-6 text-white">
          <li>
            <a href="/" className="hover:text-blue-200">
              Beranda
            </a>
          </li>
          <li>
            <a href="/tentang" className="hover:text-blue-200">
              Tentang
            </a>
          </li>
          <li>
            <a href="/kontak" className="hover:text-blue-200">
              Kontak
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
