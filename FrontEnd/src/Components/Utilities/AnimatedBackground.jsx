

// This Is AI generated Content... Generated for Effect Purposes only

import { useState } from "react";
import Gloaf_Icon from "../../assets/Gloaf_icon.png";


const ICON_COUNT = 30;

export default function AnimatedBackground() {
  const [icons] = useState(() =>
    Array.from({ length: ICON_COUNT }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 80 + Math.random() * 80,
      duration: 12 + Math.random() * 14,
    })),
  );

  return (
    <div className="fixed inset-0 -z-10 bg-white overflow-hidden">

      {/* ICONS ONLY — NO PLUS */}
      {icons.map((icon) => (
        <img
          key={icon.id}
          src={Gloaf_Icon}
          alt=""
          className="absolute opacity-20 pointer-events-none animate-float-rotate"
          style={{
            top: `${icon.top}%`,
            left: `${icon.left}%`,
            width: icon.size,
            height: icon.size,
            animationDuration: `${icon.duration}s`,
          }}
        />
      ))}

      <style>
{`
@keyframes floatRotate {
  0% {
    transform: translate(0, 0) rotate(0deg);
  }
  50% {
    transform: translate(40px, -50px) rotate(180deg);
  }
  100% {
    transform: translate(-30px, 30px) rotate(360deg);
  }
}

.animate-float-rotate {
  animation: floatRotate linear infinite alternate;
}
`}
</style>
    </div>
  );
}
