import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection?: string;
  onNavigate?: (section: 'home' | 'shop' | 'story' | 'contact') => void;
}

export default function Header({ activeSection = 'home', onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { label: 'Home', value: 'home' },
    { label: 'Shop', value: 'shop' },
    { label: 'Story', value: 'story' },
    { label: 'Contact', value: 'contact' },
  ];

  const handleNavClick = (section: 'home' | 'shop' | 'story' | 'contact') => {
    onNavigate?.(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#e7ddcc] shadow-md' : 'bg-transparent'
      }`}
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-[#243247] hover:scale-110 transition-transform"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="flex-1 flex justify-center">
          <h1 className="text-xl md:text-2xl font-bold text-[#243247]">
            Orzi 1998
          </h1>
        </div>

        <nav className="hidden md:flex gap-8">
          {navigationItems.map((item) => (
            <button
              key={item.value}
              onClick={() =>
                handleNavClick(item.value as 'home' | 'shop' | 'story' | 'contact')
              }
              className={`text-sm font-semibold transition-colors ${
                activeSection === item.value
                  ? 'text-[#243247] border-b-2 border-[#243247]'
                  : 'text-[#243247] hover:text-opacity-70'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="md:hidden w-6" />
      </div>

      {isMobileMenuOpen && (
        <nav className="md:hidden bg-[#e7ddcc] border-t border-gray-300 py-4 px-4">
          {navigationItems.map((item) => (
            <button
              key={item.value}
              onClick={() =>
                handleNavClick(item.value as 'home' | 'shop' | 'story' | 'contact')
              }
              className={`block w-full text-left py-2 px-4 rounded transition-colors ${
                activeSection === item.value
                  ? 'bg-white text-[#243247] font-semibold'
                  : 'text-[#243247] hover:bg-white hover:bg-opacity-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
