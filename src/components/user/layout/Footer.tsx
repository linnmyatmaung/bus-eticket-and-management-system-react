import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

// Payment method images (imported locally)
import LogoWhite from "@/assets/images/white.png";
import kbz from "@/assets/images/kbz.png";
import aya from "@/assets/images/aya.jpg";
import wave from "@/assets/images/wave.jpg";
import uabpay from "@/assets/images/uabpay.png";
import onepay from "@/assets/images/onepay.png";
import mpitesan from "@/assets/images/mpitesan.webp";

const paymentImages = [kbz, aya, wave, uabpay, onepay, mpitesan];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white px-6 py-10">
      <div className="flex flex-col sm:flex-row justify-between gap-10">
        {/* Contact Info */}
        <div className="sm:w-1/3 w-full">
          <h5 className="mb-4 flex items-center text-lg font-bold">
            <img src={LogoWhite} className="w-20 mr-2" alt="Trip Hub" />
            Trip Hub
          </h5>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaPhone /> 09 255432727
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> triphub2024@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> Thone Taung, Pyin Oo Lwin, Mandalay
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="sm:w-1/3 w-full text-center">
          <h5 className="mb-4 text-lg font-bold">Visit Us</h5>
          <div className="flex justify-center space-x-5 text-xl">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Payments */}
        <div className="sm:w-1/3 w-full">
          <h6 className="mb-4 text-lg font-bold">We Accept</h6>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 justify-items-center">
            {paymentImages.map((img, i) => (
              <img
                key={i}
                src={img}
                alt="payment method"
                className="w-16 mx-1"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm">
        &copy; 2024 Trip Hub, Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
