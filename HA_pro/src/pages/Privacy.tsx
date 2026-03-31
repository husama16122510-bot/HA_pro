import { Link } from 'react-router-dom';
import FadeInUp from '../components/ui/FadeInUp';
import BackButton from '../components/ui/BackButton';

export default function Privacy() {
  return (
    <div className="flex flex-col min-h-screen pt-32 pb-20 bg-bg-primary">
      <div className="container mx-auto px-4 max-w-4xl">
        <BackButton />
        <FadeInUp>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-white">سياسة <span className="gradient-text">الخصوصية</span></h1>
          
          <div className="space-y-8 text-text-secondary leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. مقدمة</h2>
              <p>
                نحن في منصة HA نولي اهتماماً كبيراً لخصوصية زوارنا وعملائنا. توضح هذه السياسة كيفية جمع واستخدام وحماية معلوماتك الشخصية عند استخدامك لموقعنا وخدماتنا.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. المعلومات التي نجمعها</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>المعلومات الشخصية: مثل الاسم، البريد الإلكتروني، رقم الهاتف، والشركة عند التسجيل أو طلب خدمة.</li>
                <li>بيانات الاستخدام: مثل عنوان IP، نوع المتصفح، الصفحات التي تزورها، ووقت الزيارة.</li>
                <li>ملفات تعريف الارتباط (Cookies): لجمع معلومات حول تفضيلاتك وتحسين تجربة المستخدم.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. كيفية استخدام المعلومات</h2>
              <p>
                نستخدم المعلومات التي نجمعها للأغراض التالية:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                <li>تقديم الخدمات المطلوبة والتواصل معك بشأنها.</li>
                <li>تحسين وتخصيص تجربة المستخدم على الموقع.</li>
                <li>إرسال تحديثات، عروض ترويجية، أو معلومات تهمك (يمكنك إلغاء الاشتراك في أي وقت).</li>
                <li>الاستجابة لاستفساراتك وتقديم الدعم الفني.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. حماية المعلومات</h2>
              <p>
                نتخذ إجراءات أمنية صارمة لحماية معلوماتك الشخصية من الوصول غير المصرح به، التعديل، الإفصاح، أو الإتلاف. نستخدم تقنيات التشفير وبروتوكولات الأمان القياسية في الصناعة.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. مشاركة المعلومات</h2>
              <p>
                لا نقوم ببيع أو تأجير أو مشاركة معلوماتك الشخصية مع أطراف ثالثة لأغراض تسويقية. قد نشارك المعلومات فقط مع مزودي الخدمات الموثوقين الذين يساعدوننا في تشغيل الموقع أو تقديم الخدمات، شريطة التزامهم بالسرية.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. حقوقك</h2>
              <p>
                لديك الحق في الوصول إلى معلوماتك الشخصية، تصحيحها، أو طلب حذفها. يمكنك أيضاً الاعتراض على معالجة بياناتك في ظروف معينة. للتواصل معنا بشأن حقوقك، يرجى استخدام معلومات الاتصال المتوفرة في صفحة "تواصل معنا".
              </p>
            </section>
          </div>
        </FadeInUp>
      </div>
    </div>
  );
}
