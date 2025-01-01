import Footer from "../components/fragments/Footer";
import Navbar from "../components/fragments/Navbar";
import Home from "../Home";

const GuestLayout = () => {
  return (
    <div className="flex flex-col w-full scroll-smooth">
      <Navbar />
      <main className="flex-grow">
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default GuestLayout;
