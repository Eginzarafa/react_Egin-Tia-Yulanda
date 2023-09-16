import Logo from "../assets/images/logo.png";

function Welcome() {
  return (
    <section id="welcome" className="bg-gray-500 text-white text-center py-10">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto">
          <img
            src={Logo}
            alt="Welcome"
            className="w-75 h-auto mx-auto mb-8 rounded-lg shadow-lg"
          />
          <h1 className="text-3xl font-semibold">Welcome To E-Movie</h1>
          <p className="text-lg mt-4">
            E-Movie adalah konsep di mana film, drama, konser, dan pertunjukan
            lainnya disiarkan langsung atau on-demand melalui internet. Ini
            adalah langkah besar dari bioskop tradisional, di mana Anda harus
            pergi ke lokasi fisik untuk menikmati film. Dengan E-Movie, Anda
            dapat menonton film favorit Anda dari kenyamanan rumah Anda atau di
            mana pun Anda berada, hanya dengan perangkat yang terhubung ke
            internet.
          </p>

          <button
            type="login"
            className="w-60 py-2 mt-4 font-semibold text-white bg-gray-800 rounded-lg hover:bg-slate-400 focus:outline-none focus:ring focus:border-blue-300"
          >
            Login
          </button>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
