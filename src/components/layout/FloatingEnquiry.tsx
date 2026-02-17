import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";

const FloatingEnquiry = () => {
  return (
    <Link
      to="/contact"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-5 py-3 rounded-full gradient-solar text-white font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-pulse hover:animate-none"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Enquire Now</span>
    </Link>
  );
};

export default FloatingEnquiry;
