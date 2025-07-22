import programmes from "../data/programmesData";

const Programmes = () => {
  return (
    <section className="bg-white py-16 px-6 text-gray-800">
      <div className="max-w-6xl mx-auto space-y-14">
        <div className="text-center mb-12">
          <hr className="tag mb-4" />
          <h2 className="text-4xl font-bold text-sky-700 mb-4">Church Programme's</h2>
          <hr className="tag mb-5" />
          <p className="text-lg text-gray-600 mt-4">
            Explore the vibrant spiritual activities and gatherings we offer to strengthen your walk with Christ.
          </p>
        </div>

        {programmes.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center gap-8`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover rounded-xl shadow-lg"
              />
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 space-y-3">
              <h3 className="text-2xl font-bold text-sky-800">{item.title}</h3>
              <p className="text-sm text-gray-500 italic">{item.time}</p>
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Programmes;
