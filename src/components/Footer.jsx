import React from "react";
import Animated from "./Animated";
import { quickLinks, Address, socialLinks } from "../data/data";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative mt-44 overflow-hidden bg-[#171717] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 py-16">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {/* Column 1 - Brand */}
          <div className="flex flex-col items-start">
            <Animated>
              <div className="bg-white rounded-md p-2">
                <img
                  src="/assets/manisha-photo-studio-navbar-logo.svg"
                  alt="Manisha Photo Studio"
                  className="w-40"
                />
              </div>
            </Animated>

            <Animated delay={0.2}>
              <p className="mt-5 text-sm leading-6 text-gray-300 max-w-sm">
                Capturing your precious moments with creativity, care, and
                professional photography services. From special occasions to
                everyday memories, we help turn your moments into memories that
                last a lifetime.
              </p>
            </Animated>

            {/* Social Icons - Horizontal */}
            <div className="flex flex-row items-center gap-3 mt-6">
              {socialLinks.map((item, index) => (
                <Animated key={item.name} delay={index * 0.05}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="size-9 rounded-full border border-gray-500 flex items-center justify-center bg-transparent hover:bg-white hover:border-white transition-colors duration-200"
                  >
                    {item.icon}
                  </a>
                </Animated>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <p className="font-medium text-lg mb-6">Quick Links</p>

            <div className="flex flex-col gap-4">
              {quickLinks.map((link, index) => (
                <Animated key={link.name} delay={index * 0.05}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-orange-500 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </Animated>
              ))}
            </div>
          </div>

          {/* Column 3 - Get in Touch */}
          <div>
            <p className="font-medium text-lg mb-6">Get in Touch</p>

            <div className="flex flex-col gap-4">
              <Animated>
                <a
                  href="mailto:manishaphotostudio@gmail.com"
                  className="flex items-start gap-2 text-gray-300 hover:text-orange-500 transition-colors duration-200 break-all"
                >
                  <Mail size={18} className="shrink-0 mt-1" />
                  <span>manishaphotostudio@gmail.com</span>
                </a>
              </Animated>

              <Animated delay={0.2}>
                <a
                  href="tel:+919948315040"
                  className="flex items-center gap-2 text-gray-300 hover:text-orange-500 transition-colors duration-200"
                >
                  <Phone size={18} className="shrink-0" />
                  <span>+91 9948315040</span>
                </a>
              </Animated>
            </div>
          </div>

          {/* Column 4 - Address */}
          <div>
            <p className="font-medium text-lg mb-6">Address</p>

            <div className="flex flex-col gap-3">
              {Address.map((link, index) => (
                <Animated key={index} delay={index * 0.05}>
                  <div className="flex items-start gap-2">
                    <MapPin
                      size={18}
                      className="shrink-0 mt-1 text-orange-500"
                    />

                    <div className="flex flex-col gap-2">
                      {/* First Link */}
                      <a
                        href={link.studioHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-orange-500 transition-colors duration-200"
                      >
                        {link.studio}
                      </a>

                      {/* Second Link */}
                      <a
                        href={link.locationHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-orange-500 transition-colors duration-200"
                      >
                        {link.location}
                      </a>
                    </div>
                  </div>
                </Animated>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-400">
          <p>© 2026 Manisha Photo Studio. All Rights Reserved.</p>

          <p>Designed with care by Manisha Photo Studio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
