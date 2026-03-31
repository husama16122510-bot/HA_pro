import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Rocket, Linkedin } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import FadeInUp from '../components/ui/FadeInUp';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden py-20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-primary/10 blur-[100px]" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <FadeInUp>
                <div className="text-text-secondary text-sm mb-4">الرئيسية / من نحن</div>
                <h1 className="text-5xl md:text-6xl font-extrabold mb-6 gradient-text">من نحن</h1>
                <p className="text-text-secondary text-lg md:text-xl leading-relaxed">
                  شركة HA التقنية هي شركة فلسطينية رائدة تأسست بهدف تقديم حلول رقمية متكاملة. نجمع بين الإبداع والخبرة التقنية لنبني أنظمة برمجية، تطبيقات، وبنية تحتية شبكية تساعد الشركات على النمو والنجاح في العصر الرقمي.
                </p>
              </FadeInUp>
            </div>
            <div className="lg:w-1/2 relative">
              <FadeInUp delay={0.2}>
                <div className="relative w-full aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent-primary/20 to-accent-secondary/20 rounded-3xl transform rotate-6" />
                  <div className="absolute inset-0 bg-bg-card border border-border-color rounded-3xl transform -rotate-3 overflow-hidden flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-4 p-8 w-full h-full opacity-50">
                      <div className="bg-accent-primary/20 rounded-xl" />
                      <div className="bg-accent-secondary/20 rounded-xl" />
                      <div className="bg-purple-500/20 rounded-xl" />
                      <div className="bg-blue-500/20 rounded-xl" />
                    </div>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-bg-secondary">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">قصتنا</h2>
            </div>
          </FadeInUp>
          
          <div className="max-w-4xl mx-auto relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border-color -translate-x-1/2" />
            
            {[
              { year: '2020', title: 'تأسيس الشركة', desc: 'بداية رحلتنا في تقديم حلول تقنية' },
              { year: '2021', title: 'أول 10 عملاء', desc: 'بنينا ثقة حقيقية مع عملائنا الأوائل' },
              { year: '2023', title: 'توسع الخدمات', desc: 'أضفنا خدمات الشبكات وأنظمة ERP' },
              { year: '2026', title: 'منصة HA الرقمية', desc: 'إطلاق منصتنا المتكاملة للعملاء' },
            ].map((milestone, idx) => (
              <FadeInUp key={idx} delay={idx * 0.1}>
                <div className={`flex flex-col md:flex-row items-center gap-8 mb-12 relative ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="hidden md:block absolute left-1/2 w-4 h-4 rounded-full gradient-bg -translate-x-1/2 shadow-[0_0_10px_rgba(108,99,255,0.5)]" />
                  <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'} text-center`}>
                    <div className="text-3xl font-bold gradient-text mb-2">{milestone.year}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{milestone.title}</h3>
                    <p className="text-text-secondary">{milestone.desc}</p>
                  </div>
                  <div className="md:w-1/2" />
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-24 bg-bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: 'رسالتنا', desc: 'نمكّن الشركات من النمو الرقمي بحلول تقنية مبتكرة وموثوقة' },
              { icon: Eye, title: 'رؤيتنا', desc: 'أن نكون الشريك التقني الأول للشركات في فلسطين والمنطقة' },
              { icon: Heart, title: 'قيمنا', desc: 'الجودة، الشفافية، الابتكار، والشراكة الحقيقية مع عملائنا' },
            ].map((item, idx) => (
              <FadeInUp key={idx} delay={idx * 0.1}>
                <Card className="p-8 text-center flex flex-col items-center h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-primary/15 to-accent-secondary/15 flex items-center justify-center mb-6">
                    <item.icon className="w-8 h-8 text-accent-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{item.desc}</p>
                </Card>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-bg-secondary">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">فريقنا</h2>
            </div>
          </FadeInUp>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'أحمد الحموي', role: 'المدير التنفيذي (CEO)', initials: 'أح' },
              { name: 'سارة نصر', role: 'مديرة التطوير (CTO)', initials: 'سن' },
              { name: 'محمد عيسى', role: 'مهندس الشبكات', initials: 'مع' },
              { name: 'ريم خالد', role: 'مصممة UI/UX', initials: 'رخ' },
            ].map((member, idx) => (
              <FadeInUp key={idx} delay={idx * 0.1}>
                <Card className="p-6 text-center group h-full">
                  <div className="w-32 h-32 mx-auto rounded-full gradient-bg flex items-center justify-center text-white font-bold text-3xl mb-6 shadow-lg group-hover:scale-105 transition-transform duration-300">
                    {member.initials}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-text-secondary mb-6">{member.role}</p>
                  <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-bg-primary text-text-secondary hover:text-white hover:gradient-bg transition-all duration-300">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Card>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 bg-bg-primary">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">التقنيات التي نتقنها</h2>
            </div>
          </FadeInUp>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {['React', 'Next.js', 'Flutter', 'NestJS', 'PostgreSQL', 'Redis', 'Docker', 'AWS'].map((tech, idx) => (
              <FadeInUp key={idx} delay={idx * 0.05}>
                <div className="px-6 py-4 bg-bg-card border border-border-color rounded-xl flex items-center gap-3 hover:-translate-y-1 hover:border-accent-primary/50 hover:shadow-[0_0_20px_rgba(108,99,255,0.15)] transition-all duration-300">
                  <div className="w-2 h-2 rounded-full bg-accent-primary" />
                  <span className="text-white font-semibold">{tech}</span>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent-primary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <FadeInUp>
            <div className="max-w-4xl mx-auto p-[1px] rounded-3xl gradient-bg">
              <div className="bg-bg-primary rounded-3xl p-12 md:p-16 text-center">
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
