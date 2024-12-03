import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ onGetStarted }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div 
              className="flex flex-col items-start ml-4 cursor-pointer" 
              onClick={() => navigate('/')}
            >
              <img src="/brand_logo.svg" alt="Swipe Logo" className="h-8 w-auto" />
            </div>
          </div>
          
        </div>
      </div>

     
    </nav>
  );
}