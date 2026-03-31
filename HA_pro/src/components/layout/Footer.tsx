import { Link } from 'react-router-dom';
import { Hexagon, Linkedin, Twitter, Instagram, Github, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';

export function Footer() {
  return (
    <footer className="bg-bg-primary border-t border-border-color pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1 - Brand */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2 group">
              <Hexagon className="w-8 h-8 text-accent-secondary group-hover:text-accent-primary transition-colors duration-300" />
              <span className="text-2xl font-bold gradient-text tracking-wider">HA</span>
            </Link>
            <p className="text-text-secondary leading-relaxed">
              شركة تقنية متخصصة في تطوير البرمجيات، الشبكات، والحلول الرقمية المتكاملة
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-border-color flex items-center justify-center text-text-primary hover:gradient-bg transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-border-color flex items-center justify-center text-text-primary hover:gradient-bg transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-border-color flex items-center justify-center text-text-primary hover:gradient-bg transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-border-color flex items-center justify-center text-text-primary hover:gradient-bg transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold text-white">روابط سريعة</h3>
            <ul className="flex flex-col gap-3">
              <li><Link to="/" className="text-text-secondary hover:text-accent-primary transition-colors">الرئيسية</Link></li>
              <li><Link to="/services" className="text-text-secondary hover:text-accent-primary transition-colors">الخدمات</Link></li>
              <li><Link to="/about" className="text-text-secondary hover:text-accent-primary transition-colors">من نحن</Link></li>
              <li><Link to="/careers" className="text-text-secondary hover:text-accent-primary transition-colors">التوظيف</Link></li>
              <li><Link to="/contact" className="text-text-secondary hover:text-accent-primary transition-colors">تواصل معنا</Link></li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold text-white">الخدمات</h3>
            <ul className="flex flex-col gap-3">
              <li><Link to="/services" className="text-text-secondary hover:text-accent-primary transition-colors">تطوير المواقع</Link></li>
              <li><Link to="/services" className="text-text-secondary hover:text-accent-primary transition-colors">تطوير التطبيقات</Link></li>
              <li><Link to="/services" className="text-text-secondary hover:text-accent-primary transition-colors">الشبكات والبنية التحتية</Link></li>
              <li><Link to="/services" className="text-text-secondary hover:text-accent-primary transition-colors">الاستشارات التقنية</Link></li>
              <li><Link to="/services" className="text-text-secondary hover:text-accent-primary transition-colors">حلول ERP</Link></li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold text-white">تواصل معنا</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3 text-text-secondary">
                <Mail className="w-5 h-5 text-accent-primary" />
                <span>info@ha-tech.com</span>
              </li>
              <li className="flex items-center gap-3 text-text-secondary">
                <Phone className="w-5 h-5 text-accent-primary" />
                <span dir="ltr">+970 xx xxx xxxx</span>
              </li>
              <li className="flex items-center gap-3 text-text-secondary">
                <MapPin className="w-5 h-5 text-accent-primary" />
                <span>فلسطين</span>
              </li>
            </ul>
            <div className="mt-4 flex flex-col gap-3">
              <input
                type="email"
                placeholder="البريد الإلكتروني"
                className="bg-bg-secondary border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors w-full"
              />
              <Button variant="primary" className="w-full">اشترك بالنشرة</Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-color pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-secondary text-sm">
            © 2026 HA. جميع الحقوق محفوظة
          </p>
          <div className="flex items-center gap-4 text-sm text-text-secondary">
            <Link to="/privacy" className="hover:text-white transition-colors">سياسة الخصوصية</Link>
            <span>|</span>
            <Link to="/terms" className="hover:text-white transition-colors">شروط الاستخدام</Link>
            <span className="opacity-0 hover:opacity-100 transition-opacity duration-300">|</span>
            <Link to="/admin" className="opacity-0 hover:opacity-100 transition-opacity duration-300 text-text-muted hover:text-white">الإدارة</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
