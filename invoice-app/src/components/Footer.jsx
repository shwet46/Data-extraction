import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src="/brand_logo.svg" alt="Swipe Logo" className="h-8 w-auto mb-4" />
            <p className="text-gray-300">
              Automated invoice management system powered by AI technology.
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300">
              Email: contact@swipe.com<br />
              Phone: (555) 123-4567<br />
              Address: 123 Tech Street, San Francisco, CA
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://x.com/sunny_bibyan" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
              <a 
                href="https://github.com/SunnyBibyan" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaGithub className="h-6 w-6" />
              </a>
              <a 
                href="https://www.linkedin.com/in/sunny-bibyan/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-center text-gray-300">
            &copy; 2024 Swipe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}