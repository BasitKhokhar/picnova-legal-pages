import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const LegalFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="legal-footer">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Sparkles className="w-4 h-4 text-primary" />
        <span className="font-semibold">PicNova</span>
      </div>
      <p className="legal-footer-text mb-4">
        AI-Powered Image Generation & Enhancement
      </p>
      <div className="flex flex-wrap justify-center gap-4 mb-4 text-sm">
        <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors">
          Privacy Policy
        </Link>
        <Link to="/terms-and-conditions" className="text-muted-foreground hover:text-primary transition-colors">
          Terms & Conditions
        </Link>
        <Link to="/about-app" className="text-muted-foreground hover:text-primary transition-colors">
          About App
        </Link>
      </div>
      <p className="legal-footer-text">
        © {currentYear} PicNova. All rights reserved.
      </p>
    </footer>
  );
};

export default LegalFooter;
