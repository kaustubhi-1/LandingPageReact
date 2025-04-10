import { useEffect, useState } from 'react';

const Navbar = () => {
  const [theme, setTheme] = useState('light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const defaultTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(defaultTheme);
    document.documentElement.classList.toggle('dark', defaultTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-darkBg shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-extrabold text-primary dark:text-indigo-300 tracking-wide">
            Chai<span className="text-indigo-500">Code</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 font-medium text-gray-700 dark:text-gray-300">
            <a href="#home" className="hover:text-primary transition">Home</a>
            <a href="#features" className="hover:text-primary transition">Features</a>
            <a href="#about" className="hover:text-primary transition">About</a>
            <a href="#testimonials" className="hover:text-primary transition">Testimonials</a>
          </nav>

          {/* Theme Toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              aria-label="Toggle dark mode"
            >
              {theme === 'light' ? (
                <span className="text-xl">🌙</span>
              ) : (
                <span className="text-xl">☀️</span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button onClick={toggleMenu} className="md:hidden focus:outline-none text-2xl">
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-2 space-y-2 pb-4 text-gray-700 dark:text-gray-300 font-medium">
            <a href="#home" className="block hover:text-primary">Home</a>
            <a href="#features" className="block hover:text-primary">Features</a>
            <a href="#about" className="block hover:text-primary">About</a>
            <a href="#testimonials" className="block hover:text-primary">Testimonials</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
