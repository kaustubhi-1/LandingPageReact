import Slider from "react-slick";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Sakshi Mehta",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    feedback:
      "ChaiCode helped me crack my first frontend role. The live sessions and projects gave me real-world experience. Highly recommended!",
  },
  {
    name: "Rohan Sinha",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
    feedback:
      "From zero to full stack — the ChaiCode cohort made it possible. Best learning platform for beginners!",
  },
  {
    name: "Aisha Khan",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    feedback:
      "The community, the mentors, the support — everything was beyond expectations. Loved every part of it!",
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    arrows: false,
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-12 text-gray-800"
          data-aos="fade-up"
        >
          ❤️ What Our Learners Say
        </h2>

        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index}>
              <div
                className="bg-white p-8 rounded-2xl shadow-md max-w-3xl mx-auto"
                data-aos="zoom-in"
              >
                <div className="flex flex-col items-center space-y-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-indigo-500"
                  />
                  <p className="text-gray-700 text-lg italic">“{item.feedback}”</p>
                  <h4 className="font-semibold text-indigo-600 text-lg">
                    {item.name}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
