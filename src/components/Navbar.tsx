import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Disc, Menu, X } from "lucide-react";

const DISCORD_INVITE = "https://discord.com/oauth2/authorize?client_id=1245562269480517716&permissions=393079767976704&scope=bot%20applications.commands";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Commands", href: "#commands" },
    { name: "Stats", href: "#stats" },
    { name: "How it Works", href: "#how-it-works" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-primary/20 text-primary border border-primary/30 box-glow-primary">
              <Disc className="w-6 h-6 animate-spin-slow" />
            </div>
            <span className="font-display font-bold text-xl tracking-wider text-foreground">
              NEON <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">MUSIC</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={DISCORD_INVITE}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-primary/10 text-primary font-semibold border border-primary/30 hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]"
            >
              Add to Discord
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/5 py-4 px-4 flex flex-col gap-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-muted-foreground hover:text-accent p-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={DISCORD_INVITE}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-center w-full px-5 py-3 rounded-lg bg-primary/20 text-primary font-bold border border-primary/30"
            onClick={() => setMobileMenuOpen(false)}
          >
            Add to Discord
          </a>
        </motion.div>
      )}
    </nav>
  );
}
