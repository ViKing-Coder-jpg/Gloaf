// Special Effects are AI Generated

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
const phrases = [
  " Where cravings find their end",
  " Built for hungry moments",
  " Road to delicious food starts here",
];

const IntroPage = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeoutId;

    const blink = () => {
      setVisible((v) => !v);
      timeoutId = setTimeout(blink, 500); // 2 seconds
    };

    timeoutId = setTimeout(blink, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  const [displayText, setDisplayText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIdx];
    let timeoutId;

    if (!deleting) {
      if (displayText.length < currentPhrase.length) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, 90); // typing speed
      } else {
        // SHORT pause before deleting
        timeoutId = setTimeout(() => setDeleting(true), 1000);
      }
    } else {
      if (displayText.length > 0) {
        timeoutId = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length - 1));
        }, 40); // faster delete
      } else {
        setTimeout(()=>{
        setDeleting(() => false);
        setPhraseIdx((prev) => (prev === phrases.length - 1 ? 0 : prev + 1));},0)
      }
    }

    return () => clearTimeout(timeoutId);
  }, [displayText, deleting, phraseIdx]);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center p-10 gap-10">
      <div className="text-7xl text-[#bd702d] relative gap-3">
        <div className="flex flex-col items-center">
          <span
            className="font-extrabold text-7xl cursor-pointer text-transparent bg-clip-text bg-linear-to-r from-yellow-400 via-orange-500 to-amber-800  bg-size-[300%_300%] transition-all duration-500 ease-in-out hover:scale-130 hover:bg-position-[100%_50%] hover:drop-shadow-[0_0_30px_rgba(255,140,0,0.6)]">Gloaf{" "}
          </span>
        </div>
        <div className="font-light tracking-wide whitespace-nowrap">
          <span>{displayText}</span>

          <span
            className="text-blue-600"
            aria-hidden="true"
            style={{
              marginLeft: "4px",
              opacity: visible ? 1 : 0,
            }}
          >
            |
          </span>
        </div>
      </div>
      <div className=" text-center text-[#7f858f]">
        <p>From trusted local partners to your doorstep—seamless, secure, and fast.<br/>
        Not just food, but an experience of flavor, freshness, and comfort.
        </p>
      </div>
      <div>
        <div className="p-0 m-0 h-12 w-42 bg-[#F1B93D] rounded-2xl hover:text-white transition ease-in-out duration-300 hover:border-[#f2b93d] hover:shadow-[0_0_20px_3px_rgba(245,210,166)]">
          <Link
            to="/signup"
            className="h-full w-full flex items-center justify-center gap-2"
          >
            Get Started <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
