import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Community = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="community"
      className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-20"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-6"
          data-aos="fade-up"
        >
          💬 Join Our Coding Community
        </h2>
        <p
          className="text-lg md:text-xl mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Become a part of our active <span className="font-bold">80,000+</span> Discord family where coders collaborate, help each other, and grow together.
        </p>
        <a
          href="https://discord.gg/chaicode"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="zoom-in"
          data-aos-delay="200"
          className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow hover:shadow-lg transition hover:bg-gray-100"
        >
          Join Discord Now
        </a>
      </div>
    </section>
  );
};

export default Community;
