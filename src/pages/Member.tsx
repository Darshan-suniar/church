import members from "../data/members";

const Member = () => {
  return (
    <section className="bg-sky-100 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <hr className="tag mb-4" />
        <h2 className="text-4xl font-bold text-sky-700 mb-4">Meet Our Member's</h2>
        <hr className="tag mb-8" />

        <div className="grid gap-10">
          {members.map((member, index) => (
            <div
              key={index}
              className="bg-white/20 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 flex flex-col md:flex-row items-center gap-6"
            >
              {/* Image */}
              <div className="flex-shrink-0 flex justify-center w-55">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-lg w-full max-w-xs md:max-w-sm object-cover shadow-2xl"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left bg-white/80 w-full p-6 rounded-lg shadow-2xl">
                <h3 className="text-2xl md:text-3xl font-bold text-sky-700 mb-2">{member.name}</h3>
                <p className="text-sky-600 text-xl font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-base italic leading-relaxed">"{member.bio}"</p>
                <p className="text-gray-600 text-base leading-relaxed">{member.about}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Member;
