import { Linkedin, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="bg-secondary text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Megha Gupta</h3>
            <p className="text-gray-300 mb-4">
              Digital Marketing Professional passionate about creating impactful digital experiences and driving business growth.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/megha-gupta-93477b47" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/meghag0522" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavClick("#about")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("#skills")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Skills
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("#projects")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("#experience")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Experience
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick("#contact")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Digital Marketing Strategy</span></li>
              <li><span className="text-gray-300">Social Media Management</span></li>
              <li><span className="text-gray-300">Brand Development</span></li>
              <li><span className="text-gray-300">Content Creation</span></li>
              <li><span className="text-gray-300">Performance Analytics</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2024 Megha Gupta. All rights reserved. | Designed with ❤️ for impact.
          </p>
        </div>
      </div>
    </footer>
  );
}
