import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Hexagon } from 'lucide-react';
import { Button, cn } from '../ui/Button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'الخدمات', path: '/services' },
    { name: 'من نحن', path: '/about' },
    { name: 'التوظيف', path: '/careers' },
    { name: 'تواصل معنا', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-bg-primary/95 backdrop-blur-[20px] border-b border-border-color py-4'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Hexagon className="w-8 h-8 text-accent-secondary group-hover:text-accent-primary transition-colors duration-300" />
            <span className="text-2xl font-bold gradient-text tracking-wider">HA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'text-base transition-all duration-300 relative group',
                    isActive ? 'text-white font-semibold' : 'text-text-secondary hover:text-white'
                  )}
                >
                  {link.name}
                  <span
                    className={cn(
                      'absolute -bottom-1 right-0 h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary transition-all duration-300',
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    )}
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/auth">
              <Button variant="secondary" size="sm">تسجيل الدخول</Button>
            </Link>
            <Link to="/contact">
              <Button variant="primary" size="sm">ابدأ الآن</Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-text-primary focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden absolute top-full left-0 right-0 bg-bg-secondary border-b border-border-color transition-all duration-300 overflow-hidden',
          isMobileMenuOpen ? 'max-h-[400px] py-4' : 'max-h-0 py-0 border-transparent'
        )}
      >
        <div className="container mx-auto px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'text-base py-2 transition-colors',
                location.pathname === link.path ? 'text-accent-primary font-semibold' : 'text-text-secondary'
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-4 border-t border-border-color">
            <Link to="/auth" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="secondary" className="w-full">تسجيل الدخول</Button>
            </Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="primary" className="w-full">ابدأ الآن</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
