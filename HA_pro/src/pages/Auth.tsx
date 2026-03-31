import { useState } from 'react';
import { Mail, Lock, User, Phone, Github, Chrome, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Link } from 'react-router-dom';
import FadeInUp from '../components/ui/FadeInUp';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [password, setPassword] = useState('');
  
  // Simple password strength check
  const getPasswordStrength = (pass: string) => {
    if (!pass) return 0;
    let strength = 0;
    if (pass.length > 8) strength += 25;
    if (pass.match(/[A-Z]/)) strength += 25;
    if (pass.match(/[0-9]/)) strength += 25;
    if (pass.match(/[^A-Za-z0-9]/)) strength += 25;
    return strength;
  };

  const strength = getPasswordStrength(password);

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4 bg-bg-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2A2A3E_1px,transparent_1px),linear-gradient(to_bottom,#2A2A3E_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      <div className="absolute top-1/4 -left-1/4 w-[800px] h-[800px] bg-accent-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -right-1/4 w-[600px] h-[600px] bg-accent-secondary/10 rounded-full blur-[100px]" />

      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 bg-bg-card border border-border-color rounded-2xl overflow-hidden relative z-10 shadow-2xl">
        
        {/* Branding Panel (Hidden on mobile) */}
        <div className="hidden lg:flex flex-col justify-between p-12 bg-gradient-to-br from-bg-secondary to-bg-primary relative overflow-hidden border-l border-border-color">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
          
          <FadeInUp className="relative z-10">
            <Link to="/" className="inline-flex items-center gap-2 mb-12">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center">
                <span className="text-white font-bold text-xl">HA</span>
              </div>
              <span className="text-2xl font-bold text-white">Platform</span>
            </Link>
            
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
              مرحباً بك في <br />
              <span className="gradient-text">المستقبل الرقمي</span>
            </h2>
            <p className="text-text-secondary text-lg">
              انضم إلى منصتنا للوصول إلى لوحة التحكم الخاصة بك، متابعة مشاريعك، والتواصل مع فريق الدعم الفني.
            </p>
          </FadeInUp>
          
          <FadeInUp delay={0.2} className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex -space-x-4 space-x-reverse">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-bg-card bg-bg-secondary flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <p className="text-white font-bold">+500 عميل</p>
                <p className="text-text-secondary">يثقون بخدماتنا</p>
              </div>
            </div>
          </FadeInUp>
        </div>

        {/* Form Panel */}
        <FadeInUp delay={0.1} className="p-8 md:p-12 relative">
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="lg:hidden inline-flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center">
                <span className="text-white font-bold text-sm">HA</span>
              </div>
            </Link>
            <div className="flex bg-bg-secondary p-1 rounded-lg">
              <button 
                onClick={() => setIsLogin(true)}
                className={`px-6 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${isLogin ? 'bg-bg-card text-white shadow-sm' : 'text-text-secondary hover:text-white'}`}
              >
                تسجيل الدخول
              </button>
              <button 
                onClick={() => setIsLogin(false)}
                className={`px-6 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${!isLogin ? 'bg-bg-card text-white shadow-sm' : 'text-text-secondary hover:text-white'}`}
              >
                حساب جديد
              </button>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              {isLogin ? 'تسجيل الدخول إلى حسابك' : 'إنشاء حساب جديد'}
            </h3>
            <p className="text-text-secondary">
              {isLogin ? 'أدخل بياناتك للوصول إلى لوحة التحكم' : 'املأ البيانات التالية لإنشاء حسابك'}
            </p>
          </div>

          <form className="space-y-5">
            {!isLogin && (
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-text-secondary">الاسم الأول</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-text-muted" />
                    </div>
                    <input type="text" required className="w-full bg-bg-secondary border border-border-color rounded-lg pr-10 pl-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors" placeholder="أحمد" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-text-secondary">اسم العائلة</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-text-muted" />
                    </div>
                    <input type="text" required className="w-full bg-bg-secondary border border-border-color rounded-lg pr-10 pl-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors" placeholder="محمد" />
                  </div>
                </div>
              </div>
            )}

            <div className="space-y-2">
              <label className="text-sm text-text-secondary">البريد الإلكتروني</label>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-text-muted" />
                </div>
                <input type="email" required className="w-full bg-bg-secondary border border-border-color rounded-lg pr-10 pl-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors" placeholder="ahmed@example.com" />
              </div>
            </div>

            {!isLogin && (
              <div className="space-y-2">
                <label className="text-sm text-text-secondary">رقم الهاتف</label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-text-muted" />
                  </div>
                  <input type="tel" className="w-full bg-bg-secondary border border-border-color rounded-lg pr-10 pl-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors" placeholder="0599123456" />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-sm text-text-secondary">كلمة المرور</label>
                {isLogin && (
                  <a href="#" className="text-sm text-accent-primary hover:text-accent-secondary transition-colors">نسيت كلمة المرور؟</a>
                )}
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-text-muted" />
                </div>
                <input 
                  type="password" 
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-bg-secondary border border-border-color rounded-lg pr-10 pl-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors" 
                  placeholder="••••••••" 
                />
              </div>
              
              {/* Password Strength Indicator */}
              {!isLogin && password && (
                <div className="mt-2">
                  <div className="flex gap-1 h-1.5 mb-1">
                    {[25, 50, 75, 100].map((level) => (
                      <div 
                        key={level} 
                        className={`flex-1 rounded-full ${
                          strength >= level 
                            ? strength > 50 ? 'bg-success' : strength > 25 ? 'bg-yellow-500' : 'bg-error'
                            : 'bg-bg-secondary'
                        }`} 
                      />
                    ))}
                  </div>
                  <p className="text-xs text-text-muted">
                    {strength === 0 ? '' : strength <= 25 ? 'ضعيفة' : strength <= 50 ? 'متوسطة' : strength <= 75 ? 'جيدة' : 'قوية جداً'}
                  </p>
                </div>
              )}
            </div>

            {!isLogin && (
              <div className="space-y-2">
                <label className="text-sm text-text-secondary">تأكيد كلمة المرور</label>
                <div className="relative">
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-text-muted" />
                  </div>
                  <input type="password" required className="w-full bg-bg-secondary border border-border-color rounded-lg pr-10 pl-4 py-3 text-white focus:outline-none focus:border-accent-primary transition-colors" placeholder="••••••••" />
                </div>
              </div>
            )}

            {isLogin && (
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="w-4 h-4 rounded border-border-color bg-bg-secondary text-accent-primary focus:ring-accent-primary focus:ring-offset-bg-card" />
                <label htmlFor="remember" className="mr-2 text-sm text-text-secondary">تذكرني</label>
              </div>
            )}

            {!isLogin && (
              <div className="flex items-start">
                <input type="checkbox" required id="terms" className="mt-1 w-4 h-4 rounded border-border-color bg-bg-secondary text-accent-primary focus:ring-accent-primary focus:ring-offset-bg-card" />
                <label htmlFor="terms" className="mr-2 text-sm text-text-secondary leading-relaxed">
                  أوافق على <Link to="/terms" className="text-accent-primary hover:underline">الشروط والأحكام</Link> و <Link to="/privacy" className="text-accent-primary hover:underline">سياسة الخصوصية</Link>
                </label>
              </div>
            )}

            <Button type="submit" variant="primary" className="w-full py-3 mt-6">
              {isLogin ? 'تسجيل الدخول' : 'إنشاء حساب'}
            </Button>
          </form>

          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border-color"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-bg-card text-text-muted">أو المتابعة باستخدام</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full gap-2">
                <Chrome className="w-5 h-5" />
                Google
              </Button>
              <Button variant="outline" className="w-full gap-2">
                <Github className="w-5 h-5" />
                GitHub
              </Button>
            </div>
          </div>
          
        </FadeInUp>
      </div>
    </div>
  );
}
