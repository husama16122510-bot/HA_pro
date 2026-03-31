import React, { useState } from 'react';
import { Home, TrendingUp, DollarSign, Users, Briefcase, MapPin, Clock, Upload, Lightbulb, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import FadeInUp from '../components/ui/FadeInUp';

const jobs = [
  { id: 1, title: 'مطور Full-Stack', dept: 'برمجة', type: 'دوام كامل', location: 'رام الله', exp: '2+ سنة', desc: 'نبحث عن مطور Full-Stack للانضمام إلى فريقنا وبناء تطبيقات ويب قابلة للتوسع.', tags: ['React', 'NestJS', 'PostgreSQL'] },
  { id: 2, title: 'مطور Flutter', dept: 'برمجة', type: 'دوام كامل', location: 'عن بُعد', exp: '1+ سنة', desc: 'مطور تطبيقات موبايل بخبرة في Flutter لبناء تطبيقات عالية الأداء.', tags: ['Flutter', 'Dart', 'Riverpod'] },
  { id: 3, title: 'مصمم UI/UX', dept: 'تصميم', type: 'دوام كامل أو جزئي', location: 'رام الله', exp: 'Portfolio مطلوب', desc: 'مصمم مبدع قادر على تحويل الأفكار إلى واجهات مستخدم جذابة وسهلة الاستخدام.', tags: ['Figma', 'Adobe XD'] },
  { id: 4, title: 'مهندس شبكات', dept: 'شبكات', type: 'دوام كامل', location: 'رام الله', exp: '3+ سنوات', desc: 'مهندس شبكات محترف لتصميم وإدارة البنية التحتية لعملائنا.', tags: ['Cisco', 'Mikrotik', 'Linux'] },
  { id: 5, title: 'مسؤول مبيعات تقني', dept: 'إدارة', type: 'دوام كامل', location: 'رام الله', exp: 'خبرة في التقنية + المبيعات', desc: 'مسؤول مبيعات بخلفية تقنية قوية لتقديم حلولنا للعملاء المحتملين.', tags: ['Sales', 'Tech Background'] },
];

const departments = ['الكل', 'برمجة', 'تصميم', 'شبكات', 'إدارة'];

export default function Careers() {
  const [activeTab, setActiveTab] = useState('الكل');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const filteredJobs = activeTab === 'الكل' 
    ? jobs 
    : jobs.filter(j => j.dept === activeTab);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2A2A3E_1px,transparent_1px),linear-gradient(to_bottom,#2A2A3E_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-primary/10 rounded-full blur-[120px]" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <FadeInUp>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 gradient-text">انضم إلى فريقنا</h1>
            <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10">
              نبحث عن مواهب شغوفة بالتقنية لبناء المستقبل الرقمي معاً
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="flex items-center gap-3 bg-bg-card border border-border-color px-6 py-3 rounded-full">
                <Users className="w-5 h-5 text-accent-primary" />
                <span className="text-white font-semibold">15+ موظف</span>
              </div>
              <div className="flex items-center gap-3 bg-bg-card border border-border-color px-6 py-3 rounded-full">
                <Lightbulb className="w-5 h-5 text-accent-secondary" />
                <span className="text-white font-semibold">بيئة عمل إبداعية</span>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 bg-bg-secondary">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">لماذا العمل معنا؟</h2>
            </div>
          </FadeInUp>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Home, title: 'عمل هجين', desc: 'مرونة في العمل من المكتب أو المنزل' },
              { icon: TrendingUp, title: 'نمو مهني', desc: 'تدريب مستمر وفرص تطور واضحة' },
              { icon: DollarSign, title: 'راتب تنافسي', desc: 'حزمة تعويضات عادلة ومزايا إضافية' },
              { icon: Users, title: 'بيئة داعمة', desc: 'فريق متعاون وثقافة احترام متبادل' },
            ].map((benefit, idx) => (
              <FadeInUp key={idx} delay={idx * 0.1}>
                <Card className="p-8 flex items-start gap-6 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-primary/15 to-accent-secondary/15 flex items-center justify-center shrink-0">
                    <benefit.icon className="w-7 h-7 text-accent-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                    <p className="text-text-secondary">{benefit.desc}</p>
                  </div>
                </Card>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-bg-primary">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-8">الوظائف المتاحة</h2>
              
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4">
                {departments.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setActiveTab(dept)}
                    className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                      activeTab === dept
                        ? 'gradient-bg text-white shadow-[0_0_15px_rgba(108,99,255,0.3)]'
                        : 'bg-bg-card text-text-secondary hover:text-white hover:bg-border-color'
                    }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>
          </FadeInUp>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {filteredJobs.map((job, idx) => (
              <FadeInUp key={job.id} delay={idx * 0.1}>
                <Card className="p-8 hover:border-accent-primary/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                    <div>
                      <div className="flex items-center gap-4 mb-3">
                        <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                        <Badge>{job.dept}</Badge>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-text-secondary mb-4">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-accent-primary" />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-accent-primary" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-accent-primary" />
                          {job.exp}
                        </div>
                      </div>
                      
                      <p className="text-text-secondary line-clamp-2">{job.desc}</p>
                    </div>
                    
                    <div className="flex flex-col gap-3 shrink-0">
                      <Button variant="primary">قدّم الآن</Button>
                      <Button variant="ghost">تفاصيل أكثر</Button>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-border-color">
                    {job.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-bg-secondary border border-border-color rounded-full text-xs text-text-secondary">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Card>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 bg-bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <FadeInUp>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-white mb-4">قدّم طلبك الآن</h2>
                <p className="text-text-secondary">سيتم التواصل معك خلال 3-5 أيام عمل</p>
              </div>
            </FadeInUp>
            
            <FadeInUp delay={0.2}>
              <Card className="p-8 md:p-12">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 mx-auto bg-success/20 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-10 h-10 text-success" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">تم استلام طلبك بنجاح!</h3>
                    <p className="text-text-secondary">سنتواصل معك قريباً 🎉</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm text-text-secondary">الاسم الكامل</label>
                        <input required type="text" className="w-full bg-bg-secondary border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-text-secondary">البريد الإلكتروني</label>
                        <input required type="email" className="w-full bg-bg-secondary border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm text-text-secondary">رقم الهاتف</label>
                        <input required type="tel" className="w-full bg-bg-secondary border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm text-text-secondary">الوظيفة المطلوبة</label>
                        <select required className="w-full bg-bg-secondary border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors appearance-none">
                          <option value="">اختر الوظيفة...</option>
                          {jobs.map(job => (
                            <option key={job.id} value={job.title}>{job.title}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm text-text-secondary">سنوات الخبرة</label>
                      <select required className="w-full bg-bg-secondary border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors appearance-none">
                        <option value="">اختر...</option>
                        <option value="0">أقل من سنة</option>
                        <option value="1-3">1-3 سنوات</option>
                        <option value="3-5">3-5 سنوات</option>
                        <option value="5+">+5 سنوات</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm text-text-secondary">رابط LinkedIn أو Portfolio (اختياري)</label>
                      <input type="url" className="w-full bg-bg-secondary border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm text-text-secondary">نبذة عنك</label>
                      <textarea required rows={4} className="w-full bg-bg-secondary border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors resize-none" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm text-text-secondary">السيرة الذاتية</label>
                      <div className="border-2 border-dashed border-border-color rounded-lg p-8 text-center hover:border-accent-primary transition-colors cursor-pointer bg-bg-secondary">
                        <Upload className="w-8 h-8 text-accent-primary mx-auto mb-4" />
                        <p className="text-white font-medium mb-1">اضغط لرفع الملف أو اسحبه هنا</p>
                        <p className="text-text-secondary text-sm">PDF, DOCX (الحد الأقصى 5MB)</p>
                      </div>
                    </div>
                    
                    <Button type="submit" variant="primary" size="lg" className="w-full mt-8">إرسال الطلب</Button>
                  </form>
                )}
              </Card>
            </FadeInUp>
          </div>
        </div>
      </section>
    </div>
  );
}
