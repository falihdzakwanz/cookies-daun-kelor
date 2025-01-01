import { FaShieldAlt, FaChild, FaLeaf, FaSmile } from 'react-icons/fa';

const benefits = [
  {
    icon: <FaShieldAlt className="text-green-800 w-8 h-8" />,
    title: "Meningkatkan Sistem Kekebalan Tubuh",
    description: "Kandungan vitamin C yang tinggi membantu memperkuat daya tahan tubuh."
  },
  {
    icon: <FaChild className="text-green-800 w-8 h-8" />,
    title: "Mencegah Stunting",
    description: "Nutrisi dalam daun kelor mendukung pertumbuhan anak dan mencegah terjadinya stunting."
  },
  {
    icon: <FaLeaf className="text-green-800 w-8 h-8" />,
    title: "Mengurangi Peradangan",
    description: "Antioksidan dalam daun kelor membantu melawan radikal bebas dan mengurangi peradangan."
  },
  {
    icon: <FaSmile className="text-green-800 w-8 h-8" />,
    title: "Menjaga Kesehatan Kulit dan Rambut",
    description: "Vitamin dan mineral dalam daun kelor membantu menjaga kulit tetap sehat dan rambut berkilau."
  }
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="bg-green-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-8">Manfaat Daun Kelor</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-green-700 mb-2">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
