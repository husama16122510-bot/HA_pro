import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageLoader() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // Simulate loading time

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-bg-primary flex flex-col items-center justify-center transition-opacity duration-500">
      <div className="relative w-24 h-24 flex items-center justify-center">
        {/* Outer spinning ring */}
        <div className="absolute inset-0 rounded-full border-t-2 border-r-2 border-accent-primary animate-spin" />
        {/* Inner spinning ring */}
        <div className="absolute inset-2 rounded-full border-b-2 border-l-2 border-accent-secondary animate-[spin_1.5s_linear_infinite_reverse]" />
        {/* Center Logo */}
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center z-10">
          <span className="text-white font-bold text-xl">HA</span>
        </div>
      </div>
      <p className="mt-6 text-text-secondary font-medium tracking-widest animate-pulse">جاري التحميل...</p>
    </div>
  );
}
