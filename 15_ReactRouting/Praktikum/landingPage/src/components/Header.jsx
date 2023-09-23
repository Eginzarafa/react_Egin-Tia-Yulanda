import React from "react";

export default function Header({}) {
  return (
    <section>
      <div className="bg-black">
        <nav className="container mx-auto py-4 flex justify-between items-center">
          <a href="/" className="text-white text-3xl font-semibold">
            Simple Header
          </a>
          <ul className="flex space-x-6 text-white">
            <li>
              <a href="/" className="hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="/createproduct" className="hover:text-blue-500">
                Create Product
              </a>
            </li>
            <li>
              <a href="/kontak" className="hover:text-blue-500">
                Pricing
              </a>
            </li>
            <li className="relative group">
              <a href="/kontak" className="hover:text-blue-500">
                Dropdown link
              </a>
              <ul className="absolute left-0 hidden mt-2 space-y-2 bg-white text-black group-hover:block">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-blue-100">
                    Item 1
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-blue-100">
                    Item 2
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-blue-100">
                    Item 3
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
