import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaInfinity, FaCodeBranch, FaHeart, FaCrown } from "react-icons/fa";

const reasons = [
  {
    icon: <FaInfinity className="text-3xl text-white" />,
    title: "Lifetime Access",
    desc: "Once enrolled, access all cohort content and recordings forever. Learn at your pace.",
    bg: "bg-indigo-600",
  },
  {
    icon: <FaCodeBranch className="text-3xl text-white" />,
    title: "Open Source Focus",
    desc: "We teach Git, GitHub, and guide you to contribute to real-world OSS projects.",
    bg: "bg-pink-500",
  },
  {
    icon: <FaHeart className="text-3xl text-white" />,
    title: "No BS, Just Code",
    desc: "We keep it simple, practical, and honest. No fake promises, only real learning.",
    bg: "bg-emerald-500",
  },
  {
    icon: <FaCrown className="text-3xl text-white" />,
    title: "Top Mentors",
    desc: "Learn directly from senior devs at top tech companies. No juniors, no fillers.",
    bg: "bg-yellow-500",
  },
];

const ButWhyChaiCode = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="butwhychai" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
          data-aos="fade-up"
        >
          ☕ But Why ChaiCode?
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 text-white shadow-md hover:shadow-lg transition ${item.bg}`}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm opacity-90">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ButWhyChaiCode;
