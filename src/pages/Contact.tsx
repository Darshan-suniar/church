import type React from "react";
// import { useState } from "react";

const Contact: React.FC = () => {
  // const [name, setName] = useState("");
  return (
    <section className="bg-white py-16 px-4" id="contact">
      <div className="max-w-7xl mx-auto text-center bg-gray-100 p-5 rounded-lg">
        <div className="max-w-4xl mx-auto text-center ">
          <h2 className="text-4xl font-bold text-sky-700 mb-6">
            Contact Us For Any Query
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            We'd love to hear from you! Whether you have a prayer request,
            question, or want to join our fellowship — just reach out below.
          </p>

          <form className="space-y-6 text-left">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-sky-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-sky-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="How can we help you?"
                className="w-full px-4 py-2 border border-sky-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-sky-600 text-white font-medium px-6 py-2 rounded-md hover:bg-sky-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
