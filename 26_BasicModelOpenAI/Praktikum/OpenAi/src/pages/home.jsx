import React from "react";

function Home() {
  return (
    <div className="bg-blue-900 min-h-screen flex flex-col justify-center items-center">
      <header className="text-white text-center">
        <h1 className="text-4xl font-bold">Halo Dunia!</h1>
        <p className="text-lg">Selamat datang di halaman Home</p>
        <p>
          {" "}
          Halaman ini di buat dengan bantua OpenAI yang telah saya buat
          sebelumnya
        </p>
      </header>
    </div>
  );
}

export default Home;
