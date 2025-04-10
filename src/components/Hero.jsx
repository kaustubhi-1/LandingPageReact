import { motion } from "framer-motion";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="min-h-[80vh] bg-white flex flex-col justify-center items-center px-6 md:px-16 lg:px-24 text-center">
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Consistency and Community
      </motion.h1>

      <p
        data-aos="fade-up"
        className="text-gray-600 text-base md:text-lg lg:text-xl max-w-3xl mb-8"
      >
        An unmatched Learning Experience for coding courses. <br />
        Cohorts are where we provide a learning experience that includes live
        mentorship, peer support, Discord interaction, and multiple real-world
        projects to help you become job-ready.
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-black text-white px-6 py-3 rounded-xl text-sm md:text-base font-medium shadow-md"
      >
        Check all Live Cohorts
      </motion.button>

      {/* Live blinker */}
      <div className="mt-4 flex items-center space-x-2" data-aos="fade-up">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
        </span>
        <span className="text-sm text-gray-600">Live Now</span>
      </div>
    </section>
  );
};

export default Hero;
