import React from "react";

const WelcomeSection = () => {
  return (
    <div
      className="bg-cover bg-center relative py-80"
      style={{
        backgroundImage:
          'url("https://img.freepik.com/free-photo/movie-background-collage_23-2149876028.jpg?w=2000&t=st=1696046360~exp=1696046960~hmac=50908c86a58cddc82cd69b1ec9e0acc1d146da38c8fc27bff5c15f4c16b546bd")', // Ganti dengan URL gambar latar belakang yang Anda inginkan
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-4xl font-extrabold text-white leading-tight">
          WELCOME TO E-Movie WEBSITE
        </h1>
        <p className="text-lg text-gray-300 mt-4 max-w-xl mx-auto">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
          eos ullam est dolor architecto blanditiis.
        </p>
      </div>
    </div>
  );
};

export default WelcomeSection;
