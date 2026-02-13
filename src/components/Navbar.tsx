import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-teal-dark/80 backdrop-blur-lg border-b border-primary-foreground/10">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="text-2xl font-display font-bold text-primary-foreground tracking-tight">
          مُوائمة
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {[
            ["الرئيسية", "#"],
            ["مُوائم", "#populus"],
            ["عن مُوائمة", "#goals"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium text-primary-foreground/70 transition hover:text-gold"
            >
              {label}
            </a>
          ))}
          <a
            href="#populus"
            className="rounded-lg bg-gold px-5 py-2 text-sm font-semibold text-gold-foreground transition hover:brightness-110"
          >
            ابدأ الآن
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-teal-dark/95 backdrop-blur-lg border-t border-primary-foreground/10 px-6 pb-6 pt-2">
          {[
            ["الرئيسية", "#"],
            ["مُوائم", "#populus"],
            ["عن مُوائمة", "#goals"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-primary-foreground/70 transition hover:text-gold"
            >
              {label}
            </a>
          ))}
          <a
            href="#populus"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-lg bg-gold px-5 py-2.5 text-center text-sm font-semibold text-gold-foreground"
          >
            ابدأ الآن
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
