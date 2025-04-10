import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaGithub, FaCodeBranch, FaStar } from "react-icons/fa";

const OpenSource = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="opensource" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
          data-aos="fade-up"
        >
          🌐 Contribute to Open Source
        </h2>
        <p
          className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          We actively guide our students to contribute to real-world Open Source Projects.
          Learn Git, GitHub, and how to raise your first Pull Request like a pro!
        </p>

        <div className="flex flex-col items-center justify-center gap-4" data-aos="zoom-in" data-aos-delay="200">
          <a
            href="https://github.com/chaicode"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition text-lg font-semibold"
          >
            <FaGithub size={24} />
            View ChaiCode on GitHub
          </a>
          <div className="flex gap-6 text-gray-700 mt-4">
            <span className="flex items-center gap-2 text-sm">
              <FaStar className="text-yellow-500" /> 1.2k+ Stars
            </span>
            <span className="flex items-center gap-2 text-sm">
              <FaCodeBranch className="text-blue-500" /> 300+ Forks
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
