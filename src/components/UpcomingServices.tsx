const services = [
  {
    date: "Sunday, July 21, 2025",
    time: "10:00 AM",
    title: "Sunday Worship Service",
    description: "Join us for praise, worship, and a message of hope.",
  },
  {
    date: "Wednesday, July 24, 2025",
    time: "6:30 PM",
    title: "Midweek Prayer",
    description: "A peaceful evening of prayer, reflection,and community.",
  },
  {
    date: "Friday, July 26, 2025",
    time: "7:00 PM",
    title: "Youth Fellowship Night",
    description: "Fun, faith, and friendship for our youth members.",
  },
];

const UpcomingServices = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-sky-600 mb-10">Upcoming Services</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl p-8 shadow-md hover:shadow-lg hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-sky-600 mb-3">{service.title}</h3>
              <p className="text-md text-gray-600 mb-2">{service.date} • {service.time}</p>
              <p className="text-gray-700 text-md">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingServices;
