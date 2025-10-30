import { useState } from "react";

export default function BlurImage({ src, placeholder, alt }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onLoad={() => setLoaded(true)}
      placeholder={placeholder}
      style={{
        transition: "filter 0.4s ease opacity 0.4s ease",
        filter: loaded ? "blur(0px)" : "blur(10px)",
        opacity: loaded ? 1 : 0.6,
      }}
    />
  );
}
