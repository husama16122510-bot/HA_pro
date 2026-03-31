import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, MessageSquare, HelpCircle, ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import FadeInUp from '../components/ui/FadeInUp';

const faqs = [
  { q: 'كم تستغرق مدة تنفيذ مشروع موقع إلكتروني؟', a: 'تعتمد المدة على حجم وتعقيد المشروع. المواقع التعريفية البسيطة تستغرق 2-3 أسابيع، بينما المنصات المعقدة قد تحتاج 2-4 أشهر. سنقدم لك جدولاً زمنياً دقيقاً بعد دراسة متطلباتك.' },
  { q: 'هل تقدمون خدمات الدعم الفني بعد تسليم المشروع؟', a: 'نعم، نقدم فترة دعم فني مجانية لمدة 3 أشهر بعد التسليم، بالإضافة إلى عقود صيانة ودعم فني سنوية لضمان استقرار وأمان أنظمتك.' },
  { q: 'ما هي طرق الدفع المتاحة؟', a: 'نقبل التحويلات البنكية، الدفع عبر بطاقات الائتمان، وخدمات الدفع الإلكتروني مثل PayPal. يتم تقسيم الدفعات عادة على 3 مراحل (دفعة مقدمة، دفعة عند التصميم، دفعة عند التسليم).' },
  { q: 'هل يمكنكم تطوير تطبيق بناءً على موقع موجود؟', a: 'بالتأكيد، يمكننا بناء تطبيقات هواتف ذكية (iOS و Android) متصلة بقاعدة بيانات موقعك الحالي باستخدام تقنيات مثل React Native أو Flutter.' },
  { q: 'كيف تضمنون أمان البيانات في التطبيقات التي تبنونها؟', a: 'نتبع أفضل ممارسات الأمان العالمية (OWASP)، نستخدم التشفير للبيانات الحساسة، ونقوم بإجراء اختبارات اختراق دورية لضمان خلو التطبيقات من الثغرات.' },
  { q: 'هل تقدمون استشارات تقنية دون تنفيذ برمجي؟', a: 'نعم، نقدم خدمات الاستشارات التقنية لمساعدة الشركات في اختيار التقنيات المناسبة، تقييم البنية التحتية الحالية، ووضع استراتيجيات التحول الرقمي.' },
];

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#2A2A3E_1px,transparent_1px),linear-gradient(to_bottom,#2A2A3E_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <FadeInUp>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-white">تواصل <span className="gradient-text">معنا</span></h1>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              نحن هنا للإجابة على استفساراتك ومساعدتك في تحويل أفكارك إلى واقع رقمي.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 bg-bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <FadeInUp>
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">معلومات التواصل</h2>
                  <p className="text-text-secondary mb-8">
                    لا تتردد في زيارتنا أو الاتصال بنا عبر القنوات التالية. فريقنا متاح دائماً لخدمتك.
                  </p>
                </div>
              </FadeInUp>
              
              <div className="space-y-6">
                <FadeInUp delay={0.1}>
                  <Card className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-accent-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">المقر الرئيسي</h3>
                      <p className="text-text-secondary">فلسطين، رام الله، شارع الإرسال، عمارة النور، الطابق 4</p>
                    </div>
                  </Card>
                </FadeInUp>
                
                <FadeInUp delay={0.2}>
                  <Card className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent-secondary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-accent-secondary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">الهاتف</h3>
                      <p className="text-text-secondary" dir="ltr">+970 599 123 456</p>
                      <p className="text-text-secondary" dir="ltr">+970 2 298 7654</p>
                    </div>
                  </Card>
                </FadeInUp>
                
                <FadeInUp delay={0.3}>
                  <Card className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-accent-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">البريد الإلكتروني</h3>
                      <p className="text-text-secondary">info@haplatform.com</p>
                      <p className="text-text-secondary">support@haplatform.com</p>
                    </div>
                  </Card>
                </FadeInUp>
                
                <FadeInUp delay={0.4}>
                  <Card className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent-secondary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-accent-secondary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">ساعات العمل</h3>
                      <p className="text-text-secondary">الأحد - الخميس: 8:00 صباحاً - 4:00 مساءً</p>
                      <p className="text-text-secondary">الجمعة والسبت: مغلق</p>
                    </div>
                  </Card>
                </FadeInUp>
              </div>
              
              {/* Map Placeholder */}
              <FadeInUp delay={0.5}>
                <div className="h-64 bg-bg-secondary border border-border-color rounded-xl overflow-hidden relative group">
                  <div className="absolute inset-0 flex items-center justify-center bg-bg-card/50 backdrop-blur-sm z-10 transition-opacity group-hover:opacity-0">
                    <Button variant="outline" className="gap-2">
                      <MapPin className="w-4 h-4" />
                      عرض الخريطة
                    </Button>
                  </div>
                  {/* Simulated Map Background */}
                  <div className="absolute inset-0 opacity-30" style={{
                    backgroundImage: 'radial-gradient(circle at 50% 50%, #2A2A3E 2px, transparent 2px)',
                    backgroundSize: '20px 20px'
                  }} />
                </div>
              </FadeInUp>
            </div>
            
            {/* Contact Form */}
            <FadeInUp delay={0.2}>
              <div>
                <Card className="p-8 h-full">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <MessageSquare className="w-6 h-6 text-accent-primary" />
                    أرسل لنا رسالة
                  </h2>
                  
                  {isSubmitted ? (
                    <div className="h-[400px] flex flex-col items-center justify-center text-center">
                      <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-10 h-10 text-success" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">تم إرسال رسالتك بنجاح!</h3>
                      <p className="text-text-secondary">شكراً لتواصلك معنا. سيقوم أحد ممثلينا بالرد عليك في أقرب وقت ممكن.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm text-text-secondary">الاسم الكامل</label>
                          <input required type="text" className="w-full bg-bg-secondary border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors" placeholder="أحمد محمد" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm text-text-secondary">البريد الإلكتروني</label>
                          <input required type="email" className="w-full bg-bg-secondary border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors" placeholder="ahmed@example.com" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm text-text-secondary">رقم الهاتف</label>
                          <input type="tel" className="w-full bg-bg-secondary border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors" placeholder="0599123456" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm text-text-secondary">نوع الاستفسار</label>
                          <select className="w-full bg-bg-secondary border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors appearance-none">
                            <option value="general">استفسار عام</option>
                            <option value="sales">مبيعات وطلب عرض سعر</option>
                            <option value="support">دعم فني</option>
                            <option value="partnership">شراكة</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm text-text-secondary">الموضوع</label>
                        <input required type="text" className="w-full bg-bg-secondary border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors" placeholder="موضوع رسالتك" />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm text-text-secondary">الرسالة</label>
                        <textarea required rows={5} className="w-full bg-bg-secondary border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors resize-none" placeholder="اكتب رسالتك هنا..."></textarea>
                      </div>
                      
                      <Button type="submit" variant="primary" size="lg" className="w-full gap-2">
                        <Send className="w-5 h-5" />
                        إرسال الرسالة
                      </Button>
                    </form>
                  )}
                </Card>
              </div>
            </FadeInUp>
            
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-bg-secondary">
        <div className="container mx-auto px-4">
          <FadeInUp>
            <div className="text-center mb-16">
              <div className="w-16 h-16 bg-accent-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="w-8 h-8 text-accent-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">الأسئلة الشائعة</h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                إجابات على أكثر الأسئلة التي تصلنا من عملائنا
              </p>
            </div>
          </FadeInUp>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <FadeInUp key={idx} delay={idx * 0.1}>
                <Card 
                  className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'border-accent-primary/50' : ''}`}
                >
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-right focus:outline-none"
                  >
                    <span className="text-lg font-bold text-white">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-text-secondary transition-transform duration-300 ${openFaq === idx ? 'rotate-180 text-accent-primary' : ''}`} />
                  </button>
                  
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-text-secondary leading-relaxed border-t border-border-color pt-4">
                      {faq.a}
                    </p>
                  </div>
                </Card>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
