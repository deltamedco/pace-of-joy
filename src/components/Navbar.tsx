import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import arynLogo from "@/assets/aryn-logo.png";

const links = [
  { label: "Home", href: "/", isHash: false },
  { label: "Training", href: "/training-gear", isHash: false },
  { label: "About Me", href: "/about", isHash: false },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleClick = (link: typeof links[0]) => {
    setOpen(false);
    if (link.isHash && location.pathname === "/") {
      const id = link.href.replace("/#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 flex items-center justify-between h-20">
        <Link to="/">
          <img src={arynLogo} alt="ARYN Logo" className="h-14 md:h-16" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) =>
            l.isHash ? (
              <a
                key={l.label}
                href={l.href}
                onClick={() => handleClick(l)}
                className="font-bold text-[#0a1628] hover:text-primary transition-colors text-lg"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.label}
                to={l.href}
                className="font-bold text-[#0a1628] hover:text-primary transition-colors text-lg"
              >
                {l.label}
              </Link>
            )
          )}
          <Link
            to="/investment"
            className="bg-gradient-gold font-heading font-semibold uppercase tracking-wider px-5 py-2 rounded text-primary-foreground hover:opacity-90 transition-opacity text-base"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-b border-border px-6 py-4 space-y-3">
          {links.map((l) =>
            l.isHash ? (
              <a
                key={l.label}
                href={l.href}
                onClick={() => handleClick(l)}
                className="block text-sm font-bold text-[#0a1628] hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            ) : (
              <Link
                key={l.label}
                to={l.href}
                onClick={() => setOpen(false)}
                className="block text-sm font-bold text-[#0a1628] hover:text-primary transition-colors"
              >
                {l.label}
              </Link>
            )
          )}
          <Link
            to="/investment"
            onClick={() => setOpen(false)}
            className="block bg-gradient-gold font-heading text-xs font-semibold uppercase tracking-wider px-5 py-2 rounded text-primary-foreground text-center"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
