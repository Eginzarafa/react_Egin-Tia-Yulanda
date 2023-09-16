function Header() {
  return (
    <header className="bg-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-black text-2xl font-semibold">
          Simple Header
        </a>
        <ul className="flex space-x-6 text-black">
          <li>
            <a href="/" className="hover:text-blue-200">
              Home
            </a>
          </li>
          <li>
            <a href="/tentang" className="hover:text-blue-200">
              Feature
            </a>
          </li>
          <li>
            <a href="/kontak" className="hover:text-blue-200">
              Pricing
            </a>
          </li>
          <li>
            <a href="/kontak" className="hover:text-blue-200">
              Dropdown link
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
