import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const cohorts = [
  {
    title: "Full Stack Web Development",
    status: "Active",
    date: "April 10, 2025",
    link: "#",
  },
  {
    title: "JavaScript Deep Dive",
    status: "Upcoming",
    date: "May 01, 2025",
    link: "#",
  },
  {
    title: "React + Tailwind Projects",
    status: "Active",
    date: "April 25, 2025",
    link: "#",
  },
];

const Cohorts = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="cohorts" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
          data-aos="fade-up"
        >
          🚀 Live & Upcoming Cohorts
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cohorts.map((cohort, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-lg transition"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <span
                className={`inline-block px-3 py-1 text-sm font-medium rounded-full mb-4 ${
                  cohort.status === "Active"
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {cohort.status}
              </span>

              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {cohort.title}
              </h3>
              <p className="text-gray-500 text-sm mb-4">📅 {cohort.date}</p>

              <a
                href={cohort.link}
                className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition"
              >
                {cohort.status === "Active" ? "Join Now" : "Notify Me"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cohorts;
