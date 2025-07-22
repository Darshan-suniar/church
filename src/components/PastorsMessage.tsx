import pastorImage from "../assets/pastor.png";

const PastorsMessage = () => {
  return (
    <section className="bg-sky-100 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8 text-left">
        {/* Left: Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-sky-600 mb-6">
            A Message from Our Pastor
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed italic">
            "At Philadelphia Fellowship, we believe in the power of God’s love
            to change lives. Whether you're searching for hope, healing, or a
            spiritual home – we welcome you with open arms. May your journey
            with us be filled with faith, grace, and growth."
          </p>

          <p className="mt-7 text-gray-800 font-semibold text-lg">
            – Pastor John Smith
          </p>
        </div>

        {/* Right: Pastor Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={pastorImage}
            alt="Pastor"
            className="w-full max-w-sm h-auto object-cover rounded-4xl shadow-lg hover:shadow-xl  hover:scale-105  duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default PastorsMessage;
