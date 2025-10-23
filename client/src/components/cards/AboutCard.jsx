import React, { useRef } from "react";

function AboutCard({ img, title, content, glowColor = "rgba(45,55,155,0.4)" }) {
  const cardRef = useRef(null);
  const lightRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const light = lightRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;

    // Move the glow
    light.style.left = `${x}px`;
    light.style.top = `${y}px`;
    light.style.opacity = 1;

    // Apply tilt
    card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    const light = lightRef.current;

    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    light.style.opacity = 0;
  };

  return (
    <div className="h-full" style={{ perspective: "1000px" }}>
      <div
        ref={cardRef}
        className="relative flex bg-raisin-dark flex-col h-full rounded-xl shadow-raisin overflow-hidden transition-transform hover:shadow-xl"
        style={{
          transform: "rotateY(0deg) scaleZ(1)",
          transition: "transform 0.4s ease",
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Dynamic glow */}
        <div
          ref={lightRef}
          className="pointer-events-none absolute w-32 h-32 b rounded-full blur-3xl"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            transition: "opacity 0.2s ease",
            mixBlendMode: "overlay",
            backgroundColor: glowColor,
            opacity: 0,
          }}
        ></div>

        <div
          className="h-48 bg-cover bg-center"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-seasalt mb-2">{title}</h3>
          <p className="text-muted text-sm leading-relaxed flex-grow">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
