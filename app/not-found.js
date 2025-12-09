"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function Custom404() {
  useEffect(() => {
    // Create floating ink drops
    const inkDropsContainer = document.getElementById("inkDrops");

    for (let i = 0; i < 30; i++) {
      const drop = document.createElement("div");
      drop.className = "ink-drop";
      drop.style.left = Math.random() * 100 + "%";
      drop.style.animationDuration = Math.random() * 3 + 2 + "s";
      drop.style.animationDelay = Math.random() * 5 + "s";
      drop.style.opacity = Math.random() * 0.5 + 0.2;
      drop.style.width = drop.style.height = Math.random() * 20 + 10 + "px";
      inkDropsContainer.appendChild(drop);
    }

    // Cleanup
    return () => {
      if (inkDropsContainer) {
        inkDropsContainer.innerHTML = "";
      }
    };
  }, []);

  return (
    <>
      <div className="error-page-wrapper">
        <div className="ink-drops" id="inkDrops"></div>

        <div className="container">
          <div className="error-code">404</div>

          <div className="printer-icon">
            <div className="printer">
              <div className="printer-light"></div>
            </div>
          </div>

          <h1>Oops! This Page Didn't Print</h1>
          <p>
            Looks like this page is out of stock. Our printing press couldn't
            find what you're looking for, but we can help you get back on track!
          </p>

          <div className="buttons">
            <Link href="/" className="btn btn-primary">
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .error-page-wrapper {
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
        }

        .ink-drops {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }

        :global(.ink-drop) {
          position: absolute;
          width: 20px;
          height: 20px;
          background: rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          animation: fall linear infinite;
        }

        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
          }
        }

        .container {
          text-align: center;
          color: white;
          z-index: 10;
          padding: 20px;
          max-width: 800px;
        }

        .error-code {
          font-size: 180px;
          font-weight: bold;
          line-height: 1;
          margin-bottom: 20px;
          position: relative;
          display: inline-block;
          animation: glitch 3s infinite;
        }

        @keyframes glitch {
          0%,
          100% {
            text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
              -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
              0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
          }
          14% {
            text-shadow: 0.05em 0 0 rgba(255, 0, 0, 0.75),
              -0.025em -0.05em 0 rgba(0, 255, 0, 0.75),
              0.025em 0.05em 0 rgba(0, 0, 255, 0.75);
          }
          15% {
            text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
              0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
              -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
          }
          49% {
            text-shadow: -0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
              0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
              -0.05em -0.05em 0 rgba(0, 0, 255, 0.75);
          }
          50% {
            text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
              0.05em 0 0 rgba(0, 255, 0, 0.75),
              0 -0.05em 0 rgba(0, 0, 255, 0.75);
          }
          99% {
            text-shadow: 0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
              0.05em 0 0 rgba(0, 255, 0, 0.75),
              0 -0.05em 0 rgba(0, 0, 255, 0.75);
          }
        }

        .printer-icon {
          margin: 40px auto;
          position: relative;
          animation: bounce 2s ease-in-out infinite;
        }

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .printer {
          width: 120px;
          height: 80px;
          background: white;
          border-radius: 10px;
          position: relative;
          margin: 0 auto;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        }

        .printer::before {
          content: "";
          position: absolute;
          width: 100px;
          height: 20px;
          background: #f0f0f0;
          top: -25px;
          left: 10px;
          border-radius: 5px 5px 0 0;
        }

        .printer::after {
          content: "";
          position: absolute;
          width: 60px;
          height: 40px;
          background: white;
          bottom: -45px;
          left: 30px;
          border-radius: 0 0 5px 5px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
          animation: paper 2s ease-in-out infinite;
        }

        @keyframes paper {
          0%,
          100% {
            height: 40px;
            bottom: -45px;
          }
          50% {
            height: 60px;
            bottom: -65px;
          }
        }

        .printer-light {
          width: 12px;
          height: 12px;
          background: #ff6b6b;
          border-radius: 50%;
          position: absolute;
          top: 20px;
          right: 20px;
          animation: blink 1s ease-in-out infinite;
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
        }

        h1 {
          font-size: 48px;
          margin: 60px 0 20px;
          font-weight: 600;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        p {
          font-size: 20px;
          margin-bottom: 40px;
          line-height: 1.6;
        }

        .buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn {
          padding: 25px 40px !important;
          font-size: 18px;
          border: none;
          border-radius: 99999px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          font-weight: 600;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .btn-primary {
          background: white;
          color: #667eea;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        .btn-secondary {
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: 2px solid white;
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 768px) {
          .error-code {
            font-size: 100px;
          }

          h1 {
            font-size: 28px;
            margin: 50px 0 15px;
          }

          p {
            font-size: 16px;
            padding: 0 10px;
          }

          .printer {
            width: 100px;
            height: 70px;
          }

          .printer::before {
            width: 80px;
            height: 18px;
            left: 10px;
          }

          .printer::after {
            width: 50px;
            height: 35px;
            left: 25px;
          }

          .btn {
            padding: 12px 30px;
            font-size: 16px;
            width: 100%;
            max-width: 250px;
          }

          .buttons {
            flex-direction: column;
            align-items: center;
          }
        }

        @media (max-width: 480px) {
          .error-code {
            font-size: 80px;
          }

          h1 {
            font-size: 24px;
          }

          p {
            font-size: 14px;
          }

          .printer-icon {
            margin: 30px auto;
          }
        }
      `}</style>
    </>
  );
}
