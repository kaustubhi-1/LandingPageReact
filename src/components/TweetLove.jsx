import Slider from "react-slick";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const tweets = [
  {
    name: "Ankit Singh",
    handle: "@ankit_codes",
    tweet: "The ChaiCode cohort was 🔥. The live sessions and projects were super helpful!",
  },
  {
    name: "Pooja Sharma",
    handle: "@pooja_dev",
    tweet: "I landed an internship after finishing the Fullstack cohort. Forever grateful 🙌",
  },
  {
    name: "Vikas Rawat",
    handle: "@vikas_js",
    tweet: "Never thought learning could be this fun. The Discord community is 💯",
  },
];

const TweetLove = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
  };

  return (
    <section id="tweets" className="py-16 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2
          className="text-3xl md:text-4xl font-bold mb-10 text-gray-800"
          data-aos="fade-up"
        >
          💬 Learners Tweet Love!
        </h2>

        <Slider {...settings}>
          {tweets.map((tweet, index) => (
            <div key={index}>
              <div
                className="bg-white p-6 md:p-10 rounded-2xl shadow-lg mx-4"
                data-aos="zoom-in"
              >
                <p className="text-lg md:text-xl text-gray-700 italic mb-4">
                  “{tweet.tweet}”
                </p>
                <h4 className="font-semibold text-indigo-600">
                  {tweet.name}
                  <span className="ml-2 text-gray-400 text-sm font-normal">
                    {tweet.handle}
                  </span>
                </h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TweetLove;
