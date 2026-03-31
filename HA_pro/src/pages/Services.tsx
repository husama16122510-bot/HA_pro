import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code2, Smartphone, LayoutDashboard, Network, Shield, Database, Lightbulb, Link as LinkIcon, HeadphonesIcon, CheckCircle2, Rocket } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import FadeInUp from '../components/ui/FadeInUp';

const services = [
  { id: 1, cat: 'برمجة', icon: Code2, title: 'تطوير مواقع الويب', desc: 'من تصميم UI/UX إلى تطوير Full-Stack احترافي', features: ['Next.js + React', 'SEO محسّن', 'لوحة تحكم كاملة'], price: 'من $500', color: 'from-blue-500/20 to-cyan-500/20' },
  { id: 2, cat: 'برمجة', icon: Smartphone, title: 'تطبيقات الموبايل', desc: 'iOS وAndroid بكود موحد باستخدام Flutter', features: ['Offline Mode', 'Push Notifications', 'أداء عالٍ'], price: 'من $800', color: 'from-purple-500/20 to-pink-500/20' },
  { id: 3, cat: 'برمجة', icon: LayoutDashboard, title: 'أنظمة ERP', desc: 'حلول ERP متكاملة لإدارة كل عمليات شركتك', features: ['محاسبة', 'مخزون', 'موارد بشرية'], price: 'من $2000', color: 'from-emerald-500/20 to-teal-500/20' },
  { id: 4, cat: 'شبكات', icon: Network, title: 'تصميم الشبكات', desc: 'بنية تحتية شبكية آمنة وعالية الأداء', features: ['Cisco/Mikrotik', 'Firewall', 'Monitoring'], price: 'من $300', color: 'from-orange-500/20 to-red-500/20' },
  { id: 5, cat: 'شبكات', icon: Shield, title: 'الأمن السيبراني', desc: 'حماية شاملة لبياناتك وأنظمتك', features: ['Penetration Testing', 'SSL', 'Backup'], price: 'من $400', color: 'from-red-500/20 to-rose-500/20' },
  { id: 6, cat: 'برمجة', icon: Database, title: 'قواعد البيانات', desc: 'تصميم وإدارة قواعد بيانات عالية الأداء', features: ['PostgreSQL', 'Redis', 'Optimization'], price: 'من $200', color: 'from-blue-600/20 to-indigo-600/20' },
  { id: 7, cat: 'استشارات', icon: Lightbulb, title: 'الاستشارات التقنية', desc: 'خبرة تقنية متخصصة لاتخاذ قرارات مدروسة', features: ['Architecture Review', 'Tech Stack', 'Roadmap'], price: 'من $100/hr', color: 'from-yellow-500/20 to-amber-500/20' },
  { id: 8, cat: 'برمجة', icon: LinkIcon, title: 'التكامل والـ API', desc: 'ربط أنظمتك مع خدمات خارجية بسلاسة', features: ['REST API', 'Webhooks', 'Third-party'], price: 'من $150', color: 'from-indigo-500/20 to-purple-500/20' },
  { id: 9, cat: 'دعم', icon: HeadphonesIcon, title: 'الدعم التقني المستمر', desc: 'خطط صيانة ودعم شهرية لضمان الاستمرارية', features: ['24/7 Support', 'Updates', 'Monitoring'], price: 'من $99/mo', color: 'from-teal-500/20 to-cyan-500/20' },
];

const categories = ['الكل', 'برمجة', 'شبكات', 'استشارات', 'دعم'];

export default function Services() {
  const [activeTab, setActiveTab] = useState('الكل');

  const filteredServices = activeTab === 'الكل' 
    ? services 
    : services.filter(s => s.cat === activeTab);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2A2A3E_1px,transparent_1px),linear-gradient(to_bottom,#2A2A3E_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <FadeInUp>
            <div className="text-text-secondary text-sm mb-4">الرئيسية / الخدمات</div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 gradient-text">خدماتنا</h1>
            <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto">
              حلول تقنية شاملة مصممة لتلبية احتياجات عملك
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-bg-secondary sticky top-[88px] z-40 border-y border-border-color">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                    activeTab === cat
                      ? 'gradient-bg text-white shadow-[0_0_15px_rgba(108,99,255,0.3)]'
                      : 'bg-bg-card text-text-secondary hover:text-white hover:bg-border-color'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, idx) => (
              <FadeInUp key={service.id} delay={idx * 0.1}>
                <Card className="flex flex-col h-full overflow-hidden group">
                  <div className={`h-32 bg-gradient-to-br ${service.color} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-bg-primary/40 backdrop-blur-[2px]" />
                    <service.icon className="w-16 h-16 text-white relative z-10 drop-shadow-lg group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <Badge className="w-fit mb-4">{service.cat}</Badge>
                    <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                    <p className="text-text-secondary mb-6 line-clamp-2">{service.desc}</p>
                    
                    <ul className="space-y-3 mb-8 flex-grow">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-3 text-sm text-text-secondary">
                          <CheckCircle2 className="w-4 h-4 text-accent-primary shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-border-color">
                      <div className="text-lg font-bold gradient-text">{service.price}</div>
                      <Link to="/contact">
                        <Button variant="primary" size="sm">طلب الخدمة</Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-bg-secondary">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">كيف نعمل؟</h2>
            </div>
          </FadeInUp>
          
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 gradient-bg -translate-y-1/2 opacity-20" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
              {[
                { num: '1', icon: '📋', title: 'التخطيط', desc: 'نفهم احتياجاتك ونضع خطة واضحة' },
                { num: '2', icon: '🎨', title: 'التصميم', desc: 'نصمم الحل المناسب لمتطلباتك' },
                { num: '3', icon: '⚙️', title: 'التطوير', desc: 'ننفذ بأعلى معايير الجودة' },
                { num: '4', icon: '🚀', title: 'الإطلاق', desc: 'نطلق وندعمك باستمرار' },
              ].map((step, idx) => (
                <FadeInUp key={idx} delay={idx * 0.1}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center text-2xl mb-6 shadow-[0_0_20px_rgba(108,99,255,0.3)] border-4 border-bg-secondary">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-text-secondary">{step.desc}</p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent-primary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <FadeInUp>
            <div className="max-w-4xl mx-auto p-[1px] rounded-3xl gradient-bg">
              <div className="bg-bg-secondary rounded-3xl p-12 md:p-16 text-center">
                <div className="w-20 h-20 mx-auto bg-accent-primary/10 rounded-full flex items-center justify-center mb-8">
                  <Rocket className="w-10 h-10 text-accent-primary" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">هل أنت مستعد لبدء مشروعك؟</h2>
                <p className="text-text-secondary text-lg mb-10 max-w-2xl mx-auto">
                  تواصل معنا اليوم ودعنا نحوّل فكرتك إلى واقع رقمي
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/contact">
                    <Button variant="primary" size="lg" className="w-full sm:w-auto">تواصل معنا الآن</Button>
                  </Link>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </div>
  );
}
