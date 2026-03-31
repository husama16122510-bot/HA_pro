import { Link } from 'react-router-dom';
import FadeInUp from '../components/ui/FadeInUp';
import BackButton from '../components/ui/BackButton';

export default function Terms() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-20 bg-bg-primary">
      <div className="container mx-auto px-4 max-w-4xl">
        <BackButton />
        <FadeInUp>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-white">شروط <span className="gradient-text">الاستخدام</span></h1>
          
          <div className="space-y-8 text-text-secondary leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. مقدمة</h2>
              <p>
                مرحباً بك في منصة HA. باستخدامك لموقعنا أو خدماتنا، فإنك توافق على الالتزام بشروط الاستخدام التالية. يرجى قراءتها بعناية قبل استخدام الموقع.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. الخدمات المقدمة</h2>
              <p>
                نقدم خدمات تطوير البرمجيات، تصميم المواقع والتطبيقات، حلول الشبكات، والاستشارات التقنية. نحتفظ بالحق في تعديل أو إيقاف أي خدمة في أي وقت دون إشعار مسبق.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. حقوق الملكية الفكرية</h2>
              <p>
                جميع المحتويات الموجودة على هذا الموقع، بما في ذلك النصوص، الرسوم البيانية، الشعارات، الصور، والبرمجيات، هي ملك لمنصة HA ومحمية بموجب قوانين حقوق النشر.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. التزامات المستخدم</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>تقديم معلومات دقيقة وصحيحة عند التسجيل أو طلب خدمة.</li>
                <li>عدم استخدام الموقع لأي أغراض غير قانونية أو غير مصرح بها.</li>
                <li>عدم محاولة اختراق أو تعطيل أمان الموقع.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. إخلاء المسؤولية</h2>
              <p>
                يتم تقديم الخدمات "كما هي" دون أي ضمانات صريحة أو ضمنية. لا نتحمل المسؤولية عن أي أضرار مباشرة أو غير مباشرة ناتجة عن استخدام خدماتنا.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. التعديلات على الشروط</h2>
              <p>
                نحتفظ بالحق في تحديث أو تغيير شروط الاستخدام في أي وقت. سيتم نشر التغييرات على هذه الصفحة، ويعتبر استمرارك في استخدام الموقع بعد نشر التغييرات موافقة عليها.
              </p>
            </section>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
}
