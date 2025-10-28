import React, { use, useEffect, useRef, useState } from "react";

const LazySection = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} style={{ minHeight: "30vh" }}>
      {isVisible ? (
        children
      ) : (
        <div className="w-full h-[30vh] bg-zinc-800 animate-pulse rounded-xl" />
      )}
    </div>
  );
};

export default LazySection;
