import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import FadeInUp from '../components/ui/FadeInUp';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <FadeInUp className="flex flex-col items-center">
        <h1 className="text-9xl font-bold gradient-text mb-6">404</h1>
        <h2 className="text-3xl font-bold text-white mb-8">الصفحة غير موجودة</h2>
        <Link to="/">
          <Button variant="primary" size="lg">العودة للرئيسية</Button>
        </Link>
      </FadeInUp>
    </div>
  );
}
