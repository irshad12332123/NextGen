import React, { useEffect, useRef, useState } from "react";

const LazySection = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          console.log("TRUE", entry);
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px 0px",
        threshold: 0,
      }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="">
      {isVisible ? (
        <div className="animate-fadeIn">{children}</div>
      ) : (
        <div className="w-full h-full bg-zinc-800 animate-pulse rounded-xl" />
      )}
    </div>
  );
};

export default LazySection;
