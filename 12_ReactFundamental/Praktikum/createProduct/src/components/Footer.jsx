export default function Footer() {
  return (
    <footer className="bg-gray-500 text-white py-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-1/2"></div>
          <div className="md:w-1/2">
            <section className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Media Sosial</h3>
            </section>
          </div>

          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4">Kontak Kami</h3>
            <p className="mb-2">Nama : Egin Tia Yulanda</p>
            <p className="mb-2">Nomor Telepon: +6285 2661 0104 5</p>
            <p>Alamat: Palembang, Sumatra Selatan </p>
          </div>
        </div>
      </div>
      <p className="text-center text-gray-400 pb-1 pt-2">
        &copy; 2023 Egin Zarafa . All Rights Reserved.
      </p>
    </footer>
  );
}
