import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const topics = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Redux",
  "Tailwind CSS", "Node.js", "Express", "MongoDB", "SQL", "PostgreSQL",
  "JWT", "REST APIs", "GraphQL", "Git", "GitHub", "CI/CD", "Linux",
  "Firebase", "Docker", "DSA", "System Design",
];

const getTagSize = (text) => {
  if (text.length <= 4) return "text-sm md:text-base";
  if (text.length <= 8) return "text-base md:text-lg";
  return "text-lg md:text-xl";
};

const TopicsCloud = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="topics" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-10 text-gray-800"
          data-aos="fade-up"
        >
          🧠 What You'll Learn
        </h2>

        <div
          className="flex flex-wrap justify-center gap-4"
          data-aos="zoom-in"
        >
          {topics.map((topic, index) => (
            <span
              key={index}
              className={`px-4 py-2 rounded-full bg-white border border-gray-300 shadow-sm hover:shadow-md transition ${getTagSize(topic)}`}
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopicsCloud;
