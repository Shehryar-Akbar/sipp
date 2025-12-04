"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

function lerp(a, b, n) {
  return (1 - n) * a + n * b;
}

function getMouseDistance(p1, p2) {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  return Math.hypot(dx, dy);
}

class ImageTrailVariant5 {
  constructor(container, items, containerRect) {
    this.container = container;
    this.containerRect = containerRect;
    this.items = items;
    this.images = [];
    this.imagesTotal = items.length;
    this.imgPosition = 0;
    this.zIndexVal = 1;
    this.activeImagesCount = 0;
    this.isIdle = true;
    this.threshold = 80; // Lowered threshold for more responsive images

    // Initialize mouse positions to center of container with offset to trigger first image
    const centerX = containerRect.width / 2;
    const centerY = containerRect.height / 2;
    this.mousePos = { x: centerX, y: centerY };
    this.lastMousePos = { x: centerX - 100, y: centerY - 100 }; // Offset initial position to trigger first image
    this.cacheMousePos = { x: centerX, y: centerY };
    this.lastAngle = 0;

    // Create image elements - use absolute positioning relative to container
    items.forEach((src) => {
      const div = document.createElement("div");
      div.style.position = "absolute";
      div.style.width = "400px";
      div.style.height = "400px";
      div.style.borderRadius = "15px";
      div.style.pointerEvents = "none";
      div.style.opacity = "0";
      div.style.backgroundSize = "cover";
      div.style.backgroundPosition = "center";
      div.style.backgroundImage = `url(${src})`;
      div.style.zIndex = "5";
      div.style.left = "0px";
      div.style.top = "0px";
      div.style.transform = "translate(0, 0) scale(0.1) rotate(0deg)";
      div.style.willChange = "transform, opacity";
      container.appendChild(div);
      this.images.push({ el: div });
    });

    // Handle mouse move - check if within container bounds
    const handlePointerMove = (ev) => {
      const clientX = ev.clientX || (ev.touches && ev.touches[0]?.clientX) || 0;
      const clientY = ev.clientY || (ev.touches && ev.touches[0]?.clientY) || 0;

      // Check if mouse is within container bounds
      if (
        clientX >= this.containerRect.left &&
        clientX <= this.containerRect.right &&
        clientY >= this.containerRect.top &&
        clientY <= this.containerRect.bottom
      ) {
        this.mousePos = {
          x: clientX - this.containerRect.left,
          y: clientY - this.containerRect.top,
        };
      }
    };

    let animationStarted = false;

    // Start animation loop on first move
    const initRender = (ev) => {
      if (!animationStarted) {
        handlePointerMove(ev);
        // Initialize positions if mouse is in container
        if (this.mousePos.x > 0 && this.mousePos.y > 0) {
          this.cacheMousePos = { ...this.mousePos };
          this.lastMousePos = {
            x: this.mousePos.x - 50,
            y: this.mousePos.y - 50,
          }; // Offset to trigger first image
        }
        animationStarted = true;
        this.animationLoop();
      }
    };

    // Continuous mouse position update
    const handleMove = (ev) => {
      handlePointerMove(ev);
      if (!animationStarted) {
        initRender(ev);
      }
    };

    // Handle mouse enter - trigger first image immediately
    const handleEnter = (ev) => {
      handlePointerMove(ev);
      if (!animationStarted) {
        initRender(ev);
        // Force show first image on enter
        setTimeout(() => {
          if (this.mousePos.x > 0 && this.mousePos.y > 0) {
            this.showNextImage();
            this.lastMousePos = { ...this.mousePos };
          }
        }, 100);
      }
    };

    // Attach to window to capture events even when container is behind other elements
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove);

    // Also listen on container for immediate response
    container.addEventListener("mousemove", handleMove);
    container.addEventListener("touchmove", handleMove);
    container.addEventListener("mouseenter", handleEnter);

    this.cleanup = () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleMove);
      container.removeEventListener("mousemove", handleMove);
      container.removeEventListener("touchmove", handleMove);
      container.removeEventListener("mouseenter", handleEnter);
    };
  }

  animationLoop = () => {
    let distance = getMouseDistance(this.mousePos, this.lastMousePos);
    if (distance > this.threshold) {
      this.showNextImage();
      this.lastMousePos = { ...this.mousePos };
    }
    this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
    this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);
    if (this.isIdle && this.zIndexVal !== 1) this.zIndexVal = 1;
    this.rafId = requestAnimationFrame(this.animationLoop);
  };

  showNextImage = () => {
    let dx = this.mousePos.x - this.cacheMousePos.x;
    let dy = this.mousePos.y - this.cacheMousePos.y;
    let angle = Math.atan2(dy, dx) * (180 / Math.PI);
    if (angle < 0) angle += 360;
    if (angle > 90 && angle <= 270) angle += 180;
    const isMovingClockwise = angle >= this.lastAngle;
    this.lastAngle = angle;
    let startAngle = isMovingClockwise ? angle - 10 : angle + 10;
    let distance = Math.sqrt(dx * dx + dy * dy);
    if (distance !== 0) {
      dx /= distance;
      dy /= distance;
    }
    dx *= distance / 150;
    dy *= distance / 150;

    ++this.zIndexVal;
    this.imgPosition =
      this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
    const img = this.images[this.imgPosition];

    if (!img || !img.el) return;

    // Position relative to container (no need to add containerRect offsets)
    const relativeX = this.cacheMousePos.x - 95;
    const relativeY = this.cacheMousePos.y - 95;

    // Kill any existing animations
    gsap.killTweensOf(img.el);

    // Set initial transform using GSAP for proper initialization
    // Base z-index of 5 ensures images stay below overlay (15) and content (20)
    gsap.set(img.el, {
      x: relativeX,
      y: relativeY,
      scale: 0.1,
      rotation: startAngle,
      opacity: 1,
      filter: "brightness(80%)",
      zIndex: 5 + this.zIndexVal,
    });

    // Animate
    gsap
      .timeline({
        onStart: () => this.onImageActivated(),
        onComplete: () => this.onImageDeactivated(),
      })
      .to(
        img.el,
        {
          duration: 1.5,
          ease: "power2.out",
          scale: 1.4,
          filter: "brightness(100%)",
          x: relativeX + dx * 70,
          y: relativeY + dy * 70,
          rotation: this.lastAngle,
        },
        0.05
      )
      .to(
        img.el,
        {
          duration: 0.4,
          ease: "expo.out",
          opacity: 0,
        },
        0.5
      )
      .to(
        img.el,
        {
          duration: 1.5,
          ease: "power4.out",
          x: `+=${dx * 120}`,
          y: `+=${dy * 120}`,
        },
        0.05
      );
  };

  onImageActivated = () => {
    this.activeImagesCount++;
    this.isIdle = false;
  };

  onImageDeactivated = () => {
    this.activeImagesCount--;
    if (this.activeImagesCount === 0) this.isIdle = true;
  };

  destroy() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
    if (this.cleanup) this.cleanup();
    this.images.forEach((img) => {
      if (img.el && this.container.contains(img.el)) {
        gsap.killTweensOf(img.el);
        this.container.removeChild(img.el);
      }
    });
  }
}

export default function ImageTrail({ images = [] }) {
  const containerRef = useRef(null);
  const trailRef = useRef(null);
  const [containerRect, setContainerRect] = useState(null);

  useEffect(() => {
    if (!containerRef.current || !images || images.length === 0) return;

    // Get container rect
    const updateRect = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect && rect.width > 0 && rect.height > 0) {
        setContainerRect({
          left: rect.left,
          top: rect.top,
          width: rect.width,
          height: rect.height,
          right: rect.right,
          bottom: rect.bottom,
        });
      }
    };

    // Initial update with a small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      updateRect();
    }, 50);

    // Update on window resize and scroll
    window.addEventListener("resize", updateRect);
    window.addEventListener("scroll", updateRect, true);

    // Also update when images might load
    const imageLoadHandler = () => {
      setTimeout(updateRect, 100);
    };
    window.addEventListener("load", imageLoadHandler);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("resize", updateRect);
      window.removeEventListener("scroll", updateRect, true);
      window.removeEventListener("load", imageLoadHandler);
    };
  }, [images]);

  useEffect(() => {
    if (
      !containerRef.current ||
      !containerRect ||
      !images ||
      images.length === 0
    )
      return;

    trailRef.current = new ImageTrailVariant5(
      containerRef.current,
      images,
      containerRect
    );

    return () => {
      if (trailRef.current) {
        trailRef.current.destroy();
      }
    };
  }, [images, containerRect]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: 10,
      }}
    />
  );
}
