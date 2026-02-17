import { Link } from "react-router-dom";
import urjalogo from "@/assets/urjalogo.png"
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="gradient-solar-dark text-white">
      {/* Main Footer */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 justify-items-center content-between">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="h-24 w-full">
              <img src={urjalogo} alt="" className="h-full w-auto" />
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              Leading the way in sustainable energy solutions. We provide
              high-quality solar products and services to power a greener
              future.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "/" },
                { label: "Products", href: "/products" },
                { label: "Hybrid Solar", href: "/hybrid" },
                { label: "PM Muft Bijli Yojana", href: "/muft-bijli" },

                // { label: "News & Blog", href: "/news" },
                // { label: "Our Presence", href: "/presence" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-white/70 hover:text-solar-yellow transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          {/* <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {[
                "Monofacial Solar Panels",
                "Bifacial Solar Panels",
                "Solar Inverters",
                "Mounting Systems",
                "Battery Storage",
              ].map((product) => (
                <li key={product}>
                  <Link
                    to="/products"
                    className="text-sm text-white/70 hover:text-solar-yellow transition-colors"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-solar-yellow mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/70">
                  Mandhana, Kanpur Nagar
                  <br />
                  208001, Uttar Pradesh
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-solar-yellow flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-sm text-white/70 hover:text-solar-yellow transition-colors"
                >
                  +91-9369873546
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-solar-yellow flex-shrink-0" />
                <a
                  href="mailto:info@solartech.com"
                  className="text-sm text-white/70 hover:text-solar-yellow transition-colors"
                >
                  urjasetusolar@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} SolarTech. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-white/60 hover:text-white transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
