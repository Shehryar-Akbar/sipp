"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const ImageRevealEffect11 = () => {
  const [words] = useState([
    {
      text: "fun",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    },
    {
      text: "fairytale",
      image:
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop",
    },
    {
      text: "working",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
    },
    {
      text: "time",
      image:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400&h=300&fit=crop",
    },
    {
      text: "thick",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop",
    },
    {
      text: "fluffer",
      image:
        "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=400&h=300&fit=crop",
    },
    {
      text: "world",
      image:
        "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?w=400&h=300&fit=crop",
    },
    {
      text: "power",
      image:
        "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop",
    },
    {
      text: "people",
      image:
        "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=400&h=300&fit=crop",
    },
    {
      text: "mountain",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    },
  ]);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 p-8 md:p-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-12 text-gray-900">
          Image Reveal Effect 11
        </h1>

        <div className="text-2xl leading-relaxed text-gray-700 font-light">
          <div className="mb-6">
            All you have to learn here is how to have{" "}
            <HoverWord word={words[0]} />. It's almost like something out of a{" "}
            <HoverWord word={words[1]} /> book.
          </div>
          <div className="mb-6">
            Almost everything is going to happen for you automatically - you
            don't have to spend any time <HoverWord word={words[2]} /> or
            worrying.
          </div>
          <div className="mb-6">
            Take your <HoverWord word={words[3]} />. Speed will come later. A
            thin paint will stick to a <HoverWord word={words[4]} /> paint.
            There comes a nice little <HoverWord word={words[5]} />.
          </div>
          <div className="mb-6">
            You can create the <HoverWord word={words[6]} /> you want to see and
            be a part of. You have that <HoverWord word={words[7]} />. Don't
            forget to tell these special <HoverWord word={words[8]} /> in your
            life just how special they are to you.
          </div>
          <div>
            Let's build an almighty <HoverWord word={words[9]} />.
          </div>
        </div>
      </div>

      <div className="fixed bottom-8 right-8 bg-gray-900 text-white p-4 rounded-lg shadow-lg max-w-xs">
        <div className="text-sm">
          ✨ Hover over the{" "}
          <span className="text-blue-400 font-semibold">colored words</span> to
          see Effect 11 in action!
        </div>
      </div>
    </div>
  );
};

const HoverWord = ({ word }) => {
  const wordRef = useRef(null);
  const revealRef = useRef(null);
  const innerRef = useRef(null);
  const imgRef = useRef(null);
  const decoRef = useRef(null);
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    if (wordRef.current) {
      const chars = word.text.split("");
      setLetters(chars);
    }
  }, [word.text]);

  useEffect(() => {
    if (decoRef.current) {
      gsap.set(decoRef.current, {
        width: "1%",
        height: "100%",
        background: "white",
        left: "50%",
        position: "absolute",
        top: 0,
      });
    }
  }, []);

  const getMousePos = (e) => {
    let posx =
      e.pageX ||
      e.clientX +
        document.body.scrollLeft +
        document.documentElement.scrollLeft;
    let posy =
      e.pageY ||
      e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
    return { x: posx, y: posy };
  };

  const positionElement = (ev) => {
    const mousePos = getMousePos(ev);
    const docScrolls = {
      left: document.body.scrollLeft + document.documentElement.scrollLeft,
      top: document.body.scrollTop + document.documentElement.scrollTop,
    };

    if (revealRef.current) {
      revealRef.current.style.top = `${mousePos.y + 20 - docScrolls.top}px`;
      revealRef.current.style.left = `${mousePos.x + 20 - docScrolls.left}px`;
    }
  };

  const showImage = (ev) => {
    positionElement(ev);
    gsap.killTweensOf([
      revealRef.current,
      innerRef.current,
      imgRef.current,
      decoRef.current,
    ]);

    const tl = gsap.timeline({
      onStart: () => {
        if (revealRef.current) revealRef.current.style.opacity = 1;
      },
    });

    tl.add("begin")
      .set(innerRef.current, { y: "100%" })
      .set(decoRef.current, { transformOrigin: "50% 100%" })
      .to(
        decoRef.current,
        {
          duration: 0.3,
          ease: "sine.inOut",
          startAt: { scaleY: 0, scaleX: 10 },
          scaleY: 1,
          scaleX: 1,
        },
        "begin"
      )
      .set(decoRef.current, { transformOrigin: "50% 0%" })
      .to(
        decoRef.current,
        { duration: 0.3, ease: "expo.out", scaleY: 0 },
        "begin+=0.3"
      )
      .to(
        innerRef.current,
        { duration: 0.5, ease: "expo.out", startAt: { y: "100%" }, y: "0%" },
        "begin+=0.4"
      )
      .to(
        imgRef.current,
        { duration: 0.5, ease: "expo.out", startAt: { y: "-100%" }, y: "0%" },
        "begin+=0.4"
      )
      .to(
        revealRef.current,
        {
          duration: 1.1,
          ease: "expo.out",
          startAt: { y: "50%", rotation: 10 },
          y: "0%",
          rotation: 0,
        },
        "begin"
      );
  };

  const hideImage = () => {
    gsap.killTweensOf([
      revealRef.current,
      innerRef.current,
      imgRef.current,
      decoRef.current,
    ]);
    const tl = gsap.timeline({
      onStart: () => {
        if (wordRef.current) gsap.set(wordRef.current, { zIndex: 999 });
      },
      onComplete: () => {
        if (revealRef.current) gsap.set(revealRef.current, { opacity: 0 });
      },
    });

    tl.add("begin")
      .to(
        innerRef.current,
        { duration: 0.1, ease: "sine.out", y: "-100%" },
        "begin"
      )
      .to(
        imgRef.current,
        { duration: 0.1, ease: "sine.out", y: "100%" },
        "begin"
      );
  };

  const handleMouseMove = (ev) => {
    requestAnimationFrame(() => {
      positionElement(ev);
    });
  };

  return (
    <>
      <span
        ref={wordRef}
        className="relative inline-block cursor-pointer text-blue-600 font-semibold transition-colors hover:text-blue-800"
        onMouseEnter={showImage}
        onMouseMove={handleMouseMove}
        onMouseLeave={hideImage}
      >
        {letters.map((letter, index) => (
          <span key={index} className="inline-block">
            {letter}
          </span>
        ))}
      </span>

      <div
        ref={revealRef}
        className="fixed pointer-events-none opacity-0"
        style={{
          width: "300px",
          height: "200px",
          zIndex: 1000,
          overflow: "hidden",
        }}
      >
        <div ref={decoRef} />
        <div
          ref={innerRef}
          className="relative w-full h-full overflow-hidden rounded-lg"
          style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.3)" }}
        >
          <div
            ref={imgRef}
            className="absolute w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${word.image})`,
              willChange: "transform",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default ImageRevealEffect11;
