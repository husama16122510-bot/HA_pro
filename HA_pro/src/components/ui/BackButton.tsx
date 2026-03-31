import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from './Button';

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <Button 
      variant="ghost" 
      onClick={() => navigate(-1)} 
      className="mb-8 flex items-center gap-2 text-text-secondary hover:text-white transition-colors"
    >
      <ArrowRight className="w-5 h-5" />
      <span>العودة</span>
    </Button>
  );
}
