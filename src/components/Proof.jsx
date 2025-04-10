// src/components/Proof.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';

import { Autoplay, FreeMode } from 'swiper/modules';

const logos = [
  '/assets/logos/google.png',
  '/assets/logos/meta.png',
  '/assets/logos/microsoft.png',
  '/assets/logos/stripe.png',
  '/assets/logos/amazon.png',
  '/assets/logos/tesla.png',
];

const Proof = () => {
  return (
    <section id="proof" className="py-16 bg-white dark:bg-darkBg text-center">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Tweet Love</h2>
        <p className="mb-8 text-gray-600 dark:text-gray-300">
          Love that we get from our community
        </p>

        {/* Tweet Cards Placeholder */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="p-4 border rounded-lg shadow-sm dark:border-gray-700">Tweet Card</div>
          <div className="p-4 border rounded-lg shadow-sm dark:border-gray-700">Tweet Card</div>
          <div className="p-4 border rounded-lg shadow-sm dark:border-gray-700">Tweet Card</div>
        </div>

        {/* CTA Button */}
        <button className="px-6 py-3 border border-orange-300 rounded-lg font-medium text-lg hover:bg-orange-100 dark:hover:bg-orange-900 transition">
          Join Cohorts Live Classes
        </button>

        {/* Description */}
        <p className="mt-12 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Our students are not only working in big tech companies but are now founders of funded startups and product creators.
        </p>

        {/* Logo Slider */}
        <div className="mt-10">
          <Swiper
            modules={[FreeMode, Autoplay]}
            freeMode={true}
            autoplay={{ delay: 2000 }}
            loop={true}
            grabCursor={true}
            spaceBetween={30}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
          >
            {logos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center p-4 border rounded-lg shadow-sm dark:border-gray-700 bg-white dark:bg-gray-800 h-24">
                  <img src={logo} alt="Company Logo" className="h-10 object-contain" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Proof;
