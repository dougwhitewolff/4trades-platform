'use client';

import { useState, useEffect, useRef } from 'react';

export function useStatCounter(target: number, decimals = 0) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!ref.current || hasStarted) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          const duration = 2000; // 2 seconds
          const increment = target / (duration / 16); // 60fps
          let current = 0;
          
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(current);
            }
          }, 16);
          
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    
    observer.observe(ref.current);
    
    return () => observer.disconnect();
  }, [target, hasStarted]);
  
  const displayValue = decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toString();
  
  return { ref, value: displayValue };
}

