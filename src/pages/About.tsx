const About = () => {
  return (
    <section className="bg-white py-16 px-6 text-gray-800">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Heading */}
        <div className="text-center">
          <hr className="tag mb-4"/>
          <h1 className="text-4xl font-bold text-sky-600 mb-4">About Philadelphia Fellowship</h1>
          <hr className="tag mb-5"/> 
          <p className="text-lg text-gray-600">
            We're a community rooted in love, united by faith, and driven by purpose. At Philadelphia Fellowship, you are family.
          </p>
        </div>

        {/* Who We Are */}
        <div>
          <h2 className="text-2xl font-semibold text-sky-600 mb-2">Who We Are</h2>
          <p className="leading-relaxed text-gray-700">
            Philadelphia Fellowship is a Christ-centered church committed to growing spiritually, serving our community, and worshiping together.
            We believe in genuine connection, the power of prayer, and building strong families through God’s Word.
          </p>
        </div>

        {/* Our History */}
        <div>
          <h2 className="text-2xl font-semibold text-sky-600 mb-2">Our History</h2>
          <p className="leading-relaxed text-gray-700">
            Founded in 2015 with just 12 believers in a small prayer room, we’ve grown into a vibrant fellowship impacting lives through worship, outreach, and discipleship.
            Through the years, God's faithfulness has been evident in every step we’ve taken.
          </p>
        </div>

        {/* What We Believe */}
        <div>
          <h2 className="text-2xl font-semibold text-sky-600 mb-2">What We Believe</h2>
          <p className="leading-relaxed text-gray-700">
            We believe the Bible is the inspired Word of God. Jesus Christ is the Son of God and Savior of the world. We are saved by grace through faith, and we are called to love God and others with all our hearts.
          </p>
        </div>

        {/* Optional CTA */}
        <div className="text-center pt-8">
          <p className="text-lg font-medium">Want to join our mission?</p>
          <a href="/contact">
            <button className="mt-4 px-6 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition">
              Get In Touch
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
