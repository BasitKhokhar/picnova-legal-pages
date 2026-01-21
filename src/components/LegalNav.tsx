import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";

const LegalNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { path: "/privacy-policy", label: "Privacy Policy" },
    { path: "/terms-and-conditions", label: "Terms & Conditions" },
    { path: "/about-app", label: "About App" },
  ];

  return (
    <nav className="legal-nav">
      {/* <div className="legal-nav-inner">
        <Link to="/" className="legal-nav-brand">
          <Sparkles className="w-5 h-5 text-primary" />
          PicNova
        </Link>
        
        <div className="legal-nav-links">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`legal-nav-link ${location.pathname === link.path ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="legal-mobile-nav p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="legal-mobile-menu">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )} */}
    </nav>
  );
};

export default LegalNav;
