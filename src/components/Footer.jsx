import { FaGithub, FaDiscord, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">ChaiCode ☕</h2>
          <p className="text-sm opacity-80">
            Learn coding the desi way! Real projects, real mentorship, real chai ☕.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#hero" className="hover:text-white">Home</a></li>
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#cohorts" className="hover:text-white">Cohorts</a></li>
            <li><a href="#community" className="hover:text-white">Community</a></li>
            <li><a href="#opensource" className="hover:text-white">Open Source</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Connect with Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="https://github.com/chaicode" target="_blank" rel="noreferrer" className="hover:text-white">
              <FaGithub />
            </a>
            <a href="https://discord.gg/chaicode" target="_blank" rel="noreferrer" className="hover:text-white">
              <FaDiscord />
            </a>
            <a href="https://youtube.com/chaicode" target="_blank" rel="noreferrer" className="hover:text-white">
              <FaYoutube />
            </a>
            <a href="https://twitter.com/chaicode" target="_blank" rel="noreferrer" className="hover:text-white">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm opacity-70">
        © {new Date().getFullYear()} ChaiCode. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
