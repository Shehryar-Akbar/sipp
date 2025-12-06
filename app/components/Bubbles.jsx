import React from "react";

export default function Bubbles() {
  const word = "custom-prints";
  const delayIncrement = 0.5;

  const renderLetters = () => {
    const elements = [];
    let letterIndex = 0;

    for (let i = 0; i < word.length; i++) {
      const letter = word[i];

      if (letter === "-") {
        elements.push(<br key={`br-${i}`} />);
      } else {
        const hue = (letterIndex / word.length) * 360;
        const delay = letterIndex * delayIncrement;

        elements.push(
          <span
            key={i}
            className="letter"
            style={{
              color: `oklch(0.7 0.3 ${hue}deg)`,
              animationDelay: `${delay}s`,
            }}
          >
            {letter}
          </span>
        );
        letterIndex++;
      }
    }

    return elements;
  };

  return (
    <>
      <style>{`
        .animation-container {
          margin: 0;
          padding: 0;
          height: 100vh;
          width: 100vw;
          background: #000;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-family: Arial, sans-serif;
          overflow: hidden;
          line-height: 0;
          user-select: none;
        }

        .word-row {
          text-align: center;
        }

        .letter {
          font-size: 24vw;
          font-weight: bold;
          margin: 0 2px;
          display: inline-block;
          animation: rotate 3s ease-in-out infinite;
          transition: line-height 1s, filter 0.5s;
          transform-origin: center top;
          mix-blend-mode: lighten;
        }

        .letter:hover {
          filter: hue-rotate(270deg);
        }

        @keyframes rotate {
          100% {
            transform: rotateZ(360deg) rotateX(0deg);
          }
          50%, 75% {
            transform: rotateZ(0deg) rotateX(360deg);
          }
        }
         @media (max-width: 1224px) {
            .animation-container {
               height: 50vh !important;
            }
         }
      `}</style>

      <div className="animation-container">
        <div className="word-row">{renderLetters()}</div>
      </div>
    </>
  );
}
