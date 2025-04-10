import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaStar } from "react-icons/fa";

const courses = [
  {
    title: "Master JavaScript: Zero to Hero",
    rating: 4.8,
    students: "12,500+",
    link: "https://udemy.com/course/javascript-zero-to-hero",
  },
  {
    title: "React & Tailwind Bootcamp",
    rating: 4.7,
    students: "8,200+",
    link: "https://udemy.com/course/react-tailwind-bootcamp",
  },
  {
    title: "Backend with Node & Express",
    rating: 4.6,
    students: "9,100+",
    link: "https://udemy.com/course/backend-nodejs-express",
  },
];

const UdemySection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="udemy" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
          data-aos="fade-up"
        >
          🎓 Our Udemy Courses
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                {course.title}
              </h3>

              <div className="flex items-center space-x-2 text-yellow-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < Math.round(course.rating) ? "" : "text-gray-300"} />
                ))}
                <span className="text-gray-700 text-sm ml-2">
                  {course.rating} ({course.students} learners)
                </span>
              </div>

              <a
                href={course.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700 transition"
              >
                View on Udemy
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UdemySection;
