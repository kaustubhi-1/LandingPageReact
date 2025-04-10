import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLaptopCode, FaChalkboardTeacher, FaUsers, FaTools } from "react-icons/fa";

const features = [
  {
    icon: <FaLaptopCode className="text-3xl text-indigo-600" />,
    title: "Live Coding Sessions",
    desc: "Join live Zoom sessions with top mentors & build real-world projects.",
  },
  {
    icon: <FaChalkboardTeacher className="text-3xl text-indigo-600" />,
    title: "1:1 Mentorship",
    desc: "Get personal feedback, career guidance, and doubt-clearing directly from instructors.",
  },
  {
    icon: <FaTools className="text-3xl text-indigo-600" />,
    title: "Hands-on Projects",
    desc: "Apply your learning through full-stack projects using the latest tech stack.",
  },
  {
    icon: <FaUsers className="text-3xl text-indigo-600" />,
    title: "Active Community",
    desc: "Be part of a vibrant Discord group with 80,000+ coders sharing knowledge daily.",
  },
];

const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
          data-aos="fade-up"
        >
          🔥 Why Learn with ChaiCode?
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
