import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./style.module.css";
import gsap from "gsap";

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function index({ modal, projects }) {
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(() => {
    if (!modalContainer.current) return;

    //Move Container
    let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    //Move cursor
    let xMoveCursor = cursor.current
      ? gsap.quickTo(cursor.current, "left", {
          duration: 0.5,
          ease: "power3",
        })
      : null;
    let yMoveCursor = cursor.current
      ? gsap.quickTo(cursor.current, "top", {
          duration: 0.5,
          ease: "power3",
        })
      : null;
    //Move cursor label
    let xMoveCursorLabel = cursorLabel.current
      ? gsap.quickTo(cursorLabel.current, "left", {
          duration: 0.45,
          ease: "power3",
        })
      : null;
    let yMoveCursorLabel = cursorLabel.current
      ? gsap.quickTo(cursorLabel.current, "top", {
          duration: 0.45,
          ease: "power3",
        })
      : null;

    const handleMouseMove = (e) => {
      // Use clientX/clientY for fixed positioning (viewport-relative)
      let { clientX, clientY } = e;

      if (!modalContainer.current) return;

      // Get modal container dimensions
      const computedStyle = window.getComputedStyle(modalContainer.current);
      const modalWidth = parseFloat(computedStyle.width) || 400;
      const modalHeight = parseFloat(computedStyle.height) || 350;

      // Get viewport dimensions
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      // Since modal is centered with -50% transform, calculate bounds
      const halfWidth = modalWidth / 2;
      const halfHeight = modalHeight / 2;

      // Only constrain if modal would overflow viewport
      // Otherwise, use cursor position directly
      if (clientX < halfWidth) {
        clientX = halfWidth;
      } else if (clientX > viewportWidth - halfWidth) {
        clientX = viewportWidth - halfWidth;
      }

      if (clientY < halfHeight) {
        clientY = halfHeight;
      } else if (clientY > viewportHeight - halfHeight) {
        clientY = viewportHeight - halfHeight;
      }

      xMoveContainer(clientX);
      yMoveContainer(clientY);
      if (xMoveCursor) xMoveCursor(e.pageX);
      if (yMoveCursor) yMoveCursor(e.pageY);
      if (xMoveCursorLabel) xMoveCursorLabel(e.pageX);
      if (yMoveCursorLabel) yMoveCursorLabel(e.pageY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className={styles.modalContainer}
      >
        <div style={{ top: index * -100 + "%" }} className={styles.modalSlider}>
          {projects.map((project, index) => {
            const { src, color } = project;
            return (
              <div
                className={styles.modal}
                style={{ backgroundColor: color }}
                key={`modal_${index}`}
              >
                <Image
                  src={src}
                  width={300}
                  height={300}
                  alt="image"
                  style={{ height: "auto" }}
                />
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}
