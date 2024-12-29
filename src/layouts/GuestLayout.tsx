import Footer from "../components/fragments/Footer";
import Navbar from "../components/fragments/Navbar";

const GuestLayout = () => {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <main className="flex-grow">
      </main>
      <Footer />
    </div>
  );
};

export default GuestLayout;
