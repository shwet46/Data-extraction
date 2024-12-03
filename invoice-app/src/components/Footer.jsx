import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="w-full border-t-2 border-slate-400 flex flex-col items-center p-4">
        {/* About Us Section */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center mb-2 mt-4">
          About us
        </h1>
        <div className="max-w-[90%] sm:max-w-[500px] lg:max-w-[700px] flex text-center my-4 text-slate-800">
          <p className="text-sm sm:text-base lg:text-lg">
            Swipe leverages cutting-edge technology to deliver smart, efficient, and user-friendly solutions for individuals and businesses. 
            The company is recognized for its focus on data extraction, processing automation, and payment solutions.
          </p>
        </div>
        {/* Social Media Section */}
        <div className="my-6 flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Connect with us</h2>
          <div className="flex flex-row justify-center mt-4 space-x-4">
            <FaTwitter className="h-5 w-5 sm:h-6 sm:w-6" />
            <FaLinkedin className="h-5 w-5 sm:h-6 sm:w-6" />
            <FaInstagram className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
        </div>
      </div>
    </footer>
  );
}