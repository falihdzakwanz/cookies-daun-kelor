import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div id="contact" className="mb-4 lg:mb-0">
            <h3 className="text-xl font-bold">Cookies</h3>
            <p className="text-gray-300">Nikmati kebaikan alami dari daun kelor dalam setiap gigitan cookies kami.</p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-white mb-2">Informasi Kontak</h3>
              <p className="text-gray-300 mb-1">Email: cookies@gmail.com.com</p>
              <p className="text-gray-300 mb-1">Telepon: +62 812-3456-7890</p>
              <p className="text-gray-300 mb-1">Alamat: Jl. Kesehatan No. 123, Sukabumi, Lampung, Indonesia</p>
            </div>
          </div>
          <div className="flex space-x-4 mb-4 lg:mb-0">
            <a href="#" className="text-white hover:text-yellow-400"><FaFacebookF size={24} /></a>
            <a href="https://www.instagram.com/kkn258_bumidaya?igsh=Ymk2cWNrOHJldGNx" target="_blank" className="text-white hover:text-yellow-400"><FaInstagram size={24} /></a>
            <a href="#" className="text-white hover:text-yellow-400"><FaTiktok size={24} /></a>
          </div>
        </div>
        <div className="text-center text-gray-300 mt-4">
          &copy; {new Date().getFullYear()} Cookies Daun Kelor. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
