import React from 'react';
const MissionVision : React.FC = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 mt-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-sky-600 mb-6">Our Mission & Vision</h2>

     <div className="grid md:grid-cols-2 gap-10 text-gray-800 pt-6">
  {/* Mission */}
  <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
    <h3 className="text-3xl font-bold mb-4 text-sky-600">Our Mission</h3>
    <p className="text-lg leading-relaxed font-medium">
      To spread the message of love, hope, and faith through the teachings of Jesus Christ.
      We aim to serve our community, support spiritual growth, and live out the Gospel every day.
    </p>
  </div>

  {/* Vision */}
  <div className="bg-white p-10 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
    <h3 className="text-3xl font-bold mb-4 text-sky-600">Our Vision</h3>
    <p className="text-lg leading-relaxed font-medium">
      To be a welcoming church family that transforms lives and communities through God's presence,
      building a generation anchored in truth, worship, and compassion.
    </p>
  </div>
</div>

      </div>
    </section>
  );
};

export default MissionVision;
