import { Link } from 'react-router-dom';
import { Play, Code2, Network, LayoutDashboard, Smartphone, Shield, HeadphonesIcon, CheckCircle2, Rocket } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { useEffect, useState } from 'react';
import FadeInUp from '../components/ui/FadeInUp';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-88px)] flex items-center justify-center overflow-hidden py-20">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2A2A3E_1px,transparent_1px),linear-gradient(to_bottom,#2A2A3E_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/15 rounded-full blur-[80px] animate-[float_10s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-secondary/15 rounded-full blur-[80px] animate-[float_10s_ease-in-out_infinite_reverse]" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Badge className="mb-8">✦ منصة رقمية متكاملة</Badge>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              <span className="block text-white mb-2">نبني مستقبلك</span>
              <span className="block gradient-text animate-pulse">الرقمي</span>
            </h1>
            
            <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              شركة HA التقنية — نقدم حلول برمجية، شبكات، وأنظمة مؤسسية متكاملة لتحويل أعمالك في العالم الرقمي
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link to="/contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto h-14 px-8 text-lg">
                  ابدأ مشروعك
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto h-14 px-8 text-lg gap-2">
                  <Play className="w-5 h-5 fill-current" />
                  اعرف أكثر
                </Button>
              </Link>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 pt-8 border-t border-border-color/50 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-1">+50</div>
                <div className="text-text-secondary text-sm">مشروع منجز</div>
              </div>
              <div className="hidden md:block w-px h-12 bg-border-color" />
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-1">+30</div>
                <div className="text-text-secondary text-sm">عميل راضٍ</div>
              </div>
              <div className="hidden md:block w-px h-12 bg-border-color" />
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-1">+5</div>
                <div className="text-text-secondary text-sm">سنوات خبرة</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-text-secondary rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-accent-primary rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-bg-primary relative">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="text-center mb-16">
              <Badge className="mb-4">خدماتنا</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">ماذا نقدم لك؟</h2>
              <p className="text-text-secondary text-lg max-w-2xl mx-auto">
                نقدم مجموعة متكاملة من الخدمات التقنية المصممة لتلبية احتياجات عملك
              </p>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Code2, title: 'تطوير المواقع والتطبيقات', desc: 'نبني مواقع وتطبيقات احترافية بأحدث التقنيات' },
              { icon: Network, title: 'الشبكات والبنية التحتية', desc: 'تصميم وتنفيذ حلول شبكات موثوقة وآمنة' },
              { icon: LayoutDashboard, title: 'أنظمة ERP المتكاملة', desc: 'حلول ERP مخصصة لإدارة عمليات شركتك بكفاءة' },
              { icon: Smartphone, title: 'تطبيقات الموبايل', desc: 'تطبيقات iOS وAndroid بأداء عالٍ وتجربة مستخدم رائعة' },
              { icon: Shield, title: 'الأمن السيبراني', desc: 'حماية بياناتك وأنظمتك من التهديدات الرقمية' },
              { icon: HeadphonesIcon, title: 'الدعم التقني', desc: 'دعم تقني متواصل لضمان استمرارية أعمالك' },
            ].map((service, idx) => (
              <FadeInUp key={idx} delay={idx * 0.1}>
                <Card className="p-8 group h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-primary/15 to-accent-secondary/15 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-accent-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-text-secondary mb-6 line-clamp-2">{service.desc}</p>
                  <Link to="/services" className="text-accent-primary font-semibold hover:underline inline-flex items-center gap-2 mt-auto">
                    اعرف أكثر
                    <span className="text-xl leading-none">&larr;</span>
                  </Link>
                </Card>
              </FadeInUp>
            ))}
          </div>

          <FadeInUp>
            <div className="text-center">
              <Link to="/services">
                <Button variant="primary" size="lg">عرض جميع الخدمات</Button>
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="bg-gradient-to-r from-accent-primary to-accent-secondary py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: '+50', label: 'مشروع منجز' },
              { num: '+30', label: 'عميل سعيد' },
              { num: '99%', label: 'نسبة رضا العملاء' },
              { num: '+5', label: 'سنوات في السوق' },
            ].map((stat, idx) => (
              <FadeInUp key={idx} delay={idx * 0.1}>
                <div className="flex flex-col items-center">
                  <div className="text-5xl md:text-6xl font-bold text-white mb-2">{stat.num}</div>
                  <div className="text-white/90 text-lg">{stat.label}</div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-24 bg-bg-primary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <FadeInUp>
                <Badge className="mb-6">لماذا HA؟</Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  نلتزم بالجودة في كل تفصيلة
                </h2>
                <p className="text-text-secondary text-lg mb-12 leading-relaxed">
                  نجمع بين الخبرة التقنية العميقة والفهم الحقيقي لاحتياجات السوق المحلي لنقدم حلولاً تدوم
                </p>
              </FadeInUp>

              <div className="space-y-8">
                {[
                  { title: 'فريق متخصص', desc: 'مهندسون معتمدون بخبرات متنوعة' },
                  { title: 'تسليم في الوقت المحدد', desc: 'نلتزم بالجداول الزمنية دون تنازل عن الجودة' },
                  { title: 'دعم مستمر', desc: 'خدمة ما بعد التسليم طوال دورة حياة المشروع' },
                  { title: 'أسعار تنافسية', desc: 'جودة عالية بتكلفة مناسبة لكل الأحجام' },
                ].map((feature, idx) => (
                  <FadeInUp key={idx} delay={idx * 0.1}>
                    <div className="flex items-start gap-4">
                      <div className="mt-1">
                        <CheckCircle2 className="w-6 h-6 text-accent-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-text-secondary">{feature.desc}</p>
                      </div>
                    </div>
                  </FadeInUp>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 relative">
              <FadeInUp delay={0.3}>
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary/20 to-accent-secondary/20 rounded-3xl blur-3xl" />
                <Card className="relative p-8 border-border-color/50 bg-bg-card/80 backdrop-blur-xl transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="flex items-center justify-between mb-8 border-b border-border-color pb-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-error" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-success" />
                    </div>
                    <div className="text-text-muted text-sm font-mono">dashboard.ha-tech.com</div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-1/3 h-24 rounded-xl bg-gradient-to-br from-accent-primary/20 to-transparent border border-accent-primary/10" />
                      <div className="w-1/3 h-24 rounded-xl bg-gradient-to-br from-accent-secondary/20 to-transparent border border-accent-secondary/10" />
                      <div className="w-1/3 h-24 rounded-xl bg-gradient-to-br from-purple-500/20 to-transparent border border-purple-500/10" />
                    </div>
                    <div className="h-48 rounded-xl bg-bg-secondary/50 border border-border-color/50 flex items-end p-4 gap-2">
                      {[40, 70, 45, 90, 65, 85, 55].map((h, i) => (
                        <div key={i} className="flex-1 bg-gradient-to-t from-accent-primary to-accent-secondary rounded-t-sm opacity-80" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>

                  {/* Floating Badges */}
                  <div className="absolute -top-6 -right-6 bg-bg-card border border-border-color px-4 py-2 rounded-full shadow-xl animate-bounce">
                    <span className="text-accent-secondary font-bold">React</span>
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-bg-card border border-border-color px-4 py-2 rounded-full shadow-xl animate-bounce" style={{ animationDelay: '1s' }}>
                    <span className="text-accent-primary font-bold">NestJS</span>
                  </div>
                </Card>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-bg-secondary">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="text-center mb-16">
              <Badge className="mb-4">آراء عملائنا</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">ماذا يقول عملاؤنا</h2>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "HA قدمت لنا نظام ERP متكامل غيّر طريقة عمل شركتنا بالكامل. فريق محترف وتسليم في الوقت المحدد",
                name: "أحمد الخطيب",
                company: "مدير شركة النور التجارية",
                initials: "أخ"
              },
              {
                quote: "تطبيق الموبايل الذي طوّرته HA تجاوز توقعاتنا. سرعة الأداء وجمال الواجهة لا مثيل لهما",
                name: "سارة محمود",
                company: "مؤسسة ستارت أب",
                initials: "سم"
              },
              {
                quote: "دعمهم التقني المستمر أعطانا راحة البال الكاملة. نوصي بـ HA لكل من يبحث عن شريك تقني موثوق",
                name: "محمد العمري",
                company: "مدير تقنية المعلومات",
                initials: "مع"
              }
            ].map((testimonial, idx) => (
              <FadeInUp key={idx} delay={idx * 0.1}>
                <Card className="p-8 flex flex-col h-full">
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-yellow-500 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-text-secondary italic mb-8 flex-grow leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border-color">
                    <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.initials}
                    </div>
                    <div>
                      <div className="text-white font-bold">{testimonial.name}</div>
                      <div className="text-text-secondary text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </Card>
              </FadeInUp>
            ))}
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
                  <Link to="/services">
                    <Button variant="secondary" size="lg" className="w-full sm:w-auto">عرض خدماتنا</Button>
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
