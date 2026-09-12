import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaBars, FaTimes, FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import TechCard from './components/TechCard';
import Sidebar from './components/Sidebar';

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  // Fetch JSON data and handle loading state
  useEffect(() => {
    fetch('/technologies.json')
      .then(res => res.json())
      .then(data => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Add selected item to the stack panel
  const handleAddToStack = (tech) => {
    const isExist = stack.find(item => item.id === tech.id);
    if (isExist) {
      toast.warning(`${tech.name} already exists in your stack!`);
      return;
    }
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack!`);
  };

  // Remove single item from the stack
  const handleRemoveItem = (id) => {
    const remaining = stack.filter(item => item.id !== id);
    setStack(remaining);
    toast.info("Item removed from stack.");
  };

  // Clear all items from the stack at once
  const handleRemoveAll = () => {
    setStack([]);
    toast.error("All items cleared from your stack.");
  };

  const navLinks = [
    { label: "Home", href: "#", active: true },
    { label: "Technologies", href: "#" },
    { label: "Projects", href: "#" },
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-white text-[#0f172a] flex flex-col justify-between font-sans antialiased">

      {/* 1. Responsive Sticky Navbar */}
      <nav className="max-w-7xl mx-auto w-full px-6 py-4 sticky top-0 bg-white/90 backdrop-blur-md z-50">
        <div className="grid grid-cols-3 items-center">
          {/* Left: hamburger (mobile) / logo (desktop) */}
          <div className="flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-gray-700 p-1 -ml-1"
              aria-label="Toggle menu"
            >
              {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
            <div className="hidden md:flex items-center gap-2">
              <img src="/assets/logo-text.png" alt="Dev Stack Logo" className="h-8 object-contain" />
            </div>
          </div>

          {/* Center: logo (mobile) / nav links (desktop) */}
          <div className="flex justify-center items-center">
            <img src="/assets/logo-text.png" alt="Dev Stack Logo" className="h-8 object-contain md:hidden" />
            <div className="hidden md:flex gap-8 font-medium text-gray-500 text-sm">
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className={link.active ? "text-pink-600 font-semibold" : "hover:text-gray-900 transition-colors"}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Sign In / Sign Up */}
          <div className="flex items-center justify-end gap-3 sm:gap-4 text-sm font-medium">
            <button className="text-gray-600 hover:text-gray-900">Sign In</button>
            <button className="btn text-white bg-brand-gradient border-none btn-sm rounded-full px-5 py-2 h-auto min-h-0 normal-case font-semibold shadow-md shadow-pink-200">Sign Up</button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 pb-2 border-t border-gray-100 pt-4 flex flex-col gap-4">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={link.active ? "text-pink-600 font-semibold text-sm" : "text-gray-600 text-sm"}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* 2. Hero Banner */}
      <header className="max-w-7xl mx-auto w-full px-6 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-xl text-left">
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-[#0f172a] leading-[1.15]">
            Build Your Ideal <br />
            <span className="text-brand-gradient">Development Stack</span>
          </h1>
          <p className="text-gray-500 mb-8 text-sm md:text-base leading-relaxed">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>
          <div className="flex gap-4">
            <button className="btn text-white bg-brand-gradient border-none px-6 py-3 h-auto min-h-0 normal-case rounded-xl font-bold shadow-lg shadow-orange-200 text-sm">Explore Technologies</button>
            <button className="btn bg-white border border-gray-200 text-gray-600 px-6 py-3 h-auto min-h-0 normal-case rounded-xl font-semibold hover:bg-gray-50 text-sm">Learn More</button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="relative w-full max-w-[420px] aspect-square flex items-center justify-center p-4">
            <div className="absolute w-72 h-72 bg-gradient-to-tr from-pink-500/10 to-cyan-400/20 rounded-full blur-[70px] pointer-events-none"></div>
            <img
              src="/assets/banner-stack.png"
              alt="Figma Development Stack 3D Visual"
              className="w-full h-full object-contain relative z-10 drop-shadow-[0_20px_45px_rgba(139,92,246,0.2)] select-none"
            />
          </div>
        </div>
      </header>

      {/* 3. Main Content Section */}
      <main className="max-w-7xl mx-auto w-full px-6 my-10 flex-grow">
        <div className="border-t border-gray-100 pt-12">
          {loading ? (
            <div className="flex items-center justify-center py-24">
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 border-4 border-gray-200 border-t-pink-500 rounded-full animate-spin"></div>
                <p className="text-sm text-gray-400 font-medium">Loading technologies...</p>
              </div>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {technologies.map(tech => (
                  <TechCard
                    key={tech.id}
                    tech={tech}
                    onAddToStack={handleAddToStack}
                    isAdded={stack.some(item => item.id === tech.id)}
                  />
                ))}
              </div>
              <div className="w-full lg:w-1/4 sticky top-28">
                <Sidebar
                  stack={stack}
                  onRemove={handleRemoveItem}
                  onRemoveAll={handleRemoveAll}
                />
              </div>
            </div>
          )}
        </div>
      </main>

      {/* 4. Footer Section */}
      <footer className="bg-gray-50 border-t border-gray-100 pt-14 pb-8">
        <div className="max-w-7xl mx-auto w-full px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10">
            {/* Brand block */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <img src="/assets/logo-text.png" alt="Dev Stack Logo" className="h-8 object-contain" />
              </div>
              <p className="text-sm text-gray-500 leading-relaxed mb-5 max-w-xs">
                A place to explore frontend, backend, database, and tooling options, and build the development stack that fits your next project.
              </p>
              <div className="flex items-center gap-4 text-gray-400">
                <a href="#" aria-label="GitHub" className="hover:text-gray-900 transition-colors"><FaGithub size={18} /></a>
                <a href="#" aria-label="Twitter" className="hover:text-gray-900 transition-colors"><FaTwitter size={18} /></a>
                <a href="#" aria-label="LinkedIn" className="hover:text-gray-900 transition-colors"><FaLinkedin size={18} /></a>
              </div>
            </div>

            {/* Product links */}
            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-4">Product</h4>
              <ul className="flex flex-col gap-3 text-sm text-gray-500">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Technologies</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Projects</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Your Stack</a></li>
              </ul>
            </div>

            {/* Company links */}
            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-4">Company</h4>
              <ul className="flex flex-col gap-3 text-sm text-gray-500">
                <li><a href="#" className="hover:text-gray-900 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Support</a></li>
              </ul>
            </div>

            {/* Legal links */}
            <div>
              <h4 className="text-sm font-bold text-gray-900 mb-4">Legal</h4>
              <ul className="flex flex-col gap-3 text-sm text-gray-500">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
            <p>© 2026 Dev Stack Builder. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-600 transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      {/* 5. Toast Notification System */}
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} />
    </div>
  );
}