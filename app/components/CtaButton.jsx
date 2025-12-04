"use client";

import Link from "next/link";
import React from "react";

const CtaButton = ({ isScrolled }) => {
  return (
    <div className="button-container">
      <Link href="/contact" className="link-wrapper">
        <button 
          className="btn-glitch-fill"
          style={{
            borderColor: isScrolled ? "white" : "white",
            color: isScrolled ? "white" : "white"
          }}
        >
          <span className="text">// Get in Touch</span>
          <span className="text-decoration"> _</span>
          <span className="decoration">⇒</span>
        </button>
      </Link>

      <style jsx>{`
        .button-container {
          display: inline-block;
          position: absolute;
          right: 2rem;
          top: 50%;
          transform: translateY(-50%);
        }

        .link-wrapper {
          display: inline-block;
          text-decoration: none;
        }

        .btn-glitch-fill {
          display: inline-block;
          font-family: "VT323", monospace;
          padding: 10px 13px;
          min-width: 175px;
          line-height: 1.5em;
          white-space: nowrap;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 25px;
          text-decoration: none;
          position: relative;
          transition: border-color 0.3s ease, color 0.3s ease;
          border: 1px solid;
          background: none;
          outline: none;
          font-size: inherit;
        }

        .text,
        .decoration {
          display: inline-block;
        }

        .decoration {
          float: right;
        }

        /* HOVER styles */
        .btn-glitch-fill:hover {
          animation-name: glitch;
          animation-duration: 0.2s;
          background-color: yellow;
          color: black !important;
          border-color: yellow;
        }

        .btn-glitch-fill:hover .text-decoration {
          animation-name: blink;
          animation-duration: 0.1s;
          animation-iteration-count: infinite;
        }

        .btn-glitch-fill:hover .decoration {
          animation-name: blink;
          animation-duration: 0.1s;
          animation-iteration-count: infinite;
        }

        /* Active state */
        .btn-glitch-fill:active {
          animation: none;
          background: none;
          color: yellow;
          border-color: white;
        }

        .btn-glitch-fill:active .text-decoration,
        .btn-glitch-fill:active .decoration {
          animation-name: none;
        }

        @keyframes glitch {
          25% {
            background-color: red;
            letter-spacing: 10px;
          }
          35% {
            background-color: green;
          }
          59% {
            opacity: 0;
          }
          60% {
            background-color: blue;
            filter: blur(5px);
          }
          100% {
            background-color: yellow;
            filter: blur(5px);
          }
        }

        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default CtaButton;