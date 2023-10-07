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
              <a href="/login" className="hover:text-blue-500">
                Login/Register
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
