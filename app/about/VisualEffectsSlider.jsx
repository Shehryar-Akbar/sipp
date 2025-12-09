"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { gsap } from "gsap";

// Preload images function - runs immediately
const preloadImages = (imagePaths) => {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  imagePaths.forEach((path) => {
    // Add preload link to head
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = path;
    if (link.fetchPriority !== undefined) {
      link.fetchPriority = "high";
    }
    document.head.appendChild(link);

    // Also preload using Image object for browser cache
    const img = new Image();
    img.src = path;
  });
};

const SLIDER_CONFIG = {
  settings: {
    transitionDuration: 2.5,
    autoSlideSpeed: 5000,
    currentEffect: "glass",
    currentEffectPreset: "Default",
    globalIntensity: 1.0,
    speedMultiplier: 1.0,
    distortionStrength: 1.0,
    colorEnhancement: 1.0,
    glassRefractionStrength: 1.0,
    glassChromaticAberration: 1.0,
    glassBubbleClarity: 1.0,
    glassEdgeGlow: 1.0,
    glassLiquidFlow: 1.0,
    frostIntensity: 1.5,
    frostCrystalSize: 1.0,
    frostIceCoverage: 1.0,
    frostTemperature: 1.0,
    frostTexture: 1.0,
    rippleFrequency: 25.0,
    rippleAmplitude: 0.08,
    rippleWaveSpeed: 1.0,
    rippleRippleCount: 1.0,
    rippleDecay: 1.0,
    plasmaIntensity: 1.2,
    plasmaSpeed: 0.8,
    plasmaEnergyIntensity: 0.4,
    plasmaContrastBoost: 0.3,
    plasmaTurbulence: 1.0,
    timeshiftDistortion: 1.6,
    timeshiftBlur: 1.5,
    timeshiftFlow: 1.4,
    timeshiftChromatic: 1.5,
    timeshiftTurbulence: 1.4,
  },
};

const slides = [
  { title: "Ethereal Glow", media: "/about/img1.jpg" },
  { title: "Rose Mirage", media: "/about/img2.jpg" },
  { title: "Velvet Mystique", media: "/about/img3.jpg" },
  { title: "Golden Hour", media: "/about/img4.jpg" },
  { title: "Midnight Dreams", media: "/about/img5.jpg" },
  { title: "Silver Light", media: "/about/img6.jpg" },
];

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D uTexture1;
  uniform sampler2D uTexture2;
  uniform float uProgress;
  uniform vec2 uResolution;
  uniform vec2 uTexture1Size;
  uniform vec2 uTexture2Size;
  uniform int uEffectType;
  uniform float uGlobalIntensity;
  uniform float uSpeedMultiplier;
  uniform float uDistortionStrength;
  uniform float uColorEnhancement;
  uniform float uGlassRefractionStrength;
  uniform float uGlassChromaticAberration;
  uniform float uGlassBubbleClarity;
  uniform float uGlassEdgeGlow;
  uniform float uGlassLiquidFlow;
  
  varying vec2 vUv;

  vec2 getCoverUV(vec2 uv, vec2 textureSize) {
    vec2 s = uResolution / textureSize;
    float scale = max(s.x, s.y);
    vec2 scaledSize = textureSize * scale;
    vec2 offset = (uResolution - scaledSize) * 0.5;
    return (uv * uResolution - offset) / scaledSize;
  }

  float noise(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }

  float smoothNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(noise(i), noise(i + vec2(1.0, 0.0)), f.x),
      mix(noise(i + vec2(0.0, 1.0)), noise(i + vec2(1.0, 1.0)), f.x),
      f.y
    );
  }

  vec4 glassEffect(vec2 uv, float progress) {
    float glassStrength = 0.08 * uGlassRefractionStrength * uDistortionStrength * uGlobalIntensity;
    float chromaticAberration = 0.02 * uGlassChromaticAberration * uGlobalIntensity;
    float waveDistortion = 0.025 * uDistortionStrength;
    float clearCenterSize = 0.3 * uGlassBubbleClarity;
    float surfaceRipples = 0.004 * uDistortionStrength;
    float liquidFlow = 0.015 * uGlassLiquidFlow * uSpeedMultiplier;
    
    vec2 center = vec2(0.5, 0.5);
    vec2 p = uv * uResolution;
    vec2 uv1 = getCoverUV(uv, uTexture1Size);
    vec2 uv2_base = getCoverUV(uv, uTexture2Size);
    
    float maxRadius = length(uResolution) * 0.85;
    float bubbleRadius = progress * maxRadius;
    vec2 sphereCenter = center * uResolution;
    
    float dist = length(p - sphereCenter);
    float normalizedDist = dist / max(bubbleRadius, 0.001);
    vec2 direction = (dist > 0.0) ? (p - sphereCenter) / dist : vec2(0.0);
    float inside = smoothstep(bubbleRadius + 3.0, bubbleRadius - 3.0, dist);
    
    float distanceFactor = smoothstep(clearCenterSize, 1.0, normalizedDist);
    float time = progress * 5.0 * uSpeedMultiplier;
    
    vec2 distortedUV = uv2_base;
    if (inside > 0.0) {
      float refractionOffset = glassStrength * pow(distanceFactor, 1.5);
      vec2 flowDirection = normalize(direction + vec2(sin(time), cos(time * 0.7)) * 0.3);
      distortedUV -= flowDirection * refractionOffset;
    }

    vec4 newImg = inside > 0.0 ? texture2D(uTexture2, distortedUV) : texture2D(uTexture2, uv2_base);
    newImg.rgb = mix(newImg.rgb, newImg.rgb * 1.2, (uColorEnhancement - 1.0) * 0.5);
    
    vec4 currentImg = texture2D(uTexture1, uv1);
    
    if (progress > 0.95) {
      vec4 pureNewImg = texture2D(uTexture2, uv2_base);
      float endTransition = (progress - 0.95) / 0.05;
      newImg = mix(newImg, pureNewImg, endTransition);
    }
    
    return mix(currentImg, newImg, inside);
  }

  void main() {
    gl_FragColor = glassEffect(vUv, uProgress);
  }
`;

export default function VisualEffectsSlider() {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const materialRef = useRef(null);
  const texturesRef = useRef([]);
  const animationRef = useRef(null);
  const timerRef = useRef(null);
  const progressIntervalRef = useRef(null);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [slideProgress, setSlideProgress] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  // Preload images as early as possible
  useEffect(() => {
    const imagePaths = slides.map((slide) => slide.media);
    preloadImages(imagePaths);
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    const initThreeJS = async () => {
      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        antialias: false,
        alpha: false,
      });

      // Use visual viewport height on mobile to account for browser UI
      const initialWidth = window.innerWidth;
      const initialHeight = window.visualViewport
        ? window.visualViewport.height
        : window.innerHeight;

      renderer.setSize(initialWidth, initialHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      const material = new THREE.ShaderMaterial({
        uniforms: {
          uTexture1: { value: null },
          uTexture2: { value: null },
          uProgress: { value: 0.0 },
          uResolution: {
            value: new THREE.Vector2(
              window.innerWidth,
              window.visualViewport
                ? window.visualViewport.height
                : window.innerHeight
            ),
          },
          uTexture1Size: { value: new THREE.Vector2(1, 1) },
          uTexture2Size: { value: new THREE.Vector2(1, 1) },
          uEffectType: { value: 0 },
          uGlobalIntensity: { value: SLIDER_CONFIG.settings.globalIntensity },
          uSpeedMultiplier: { value: SLIDER_CONFIG.settings.speedMultiplier },
          uDistortionStrength: {
            value: SLIDER_CONFIG.settings.distortionStrength,
          },
          uColorEnhancement: { value: SLIDER_CONFIG.settings.colorEnhancement },
          uGlassRefractionStrength: {
            value: SLIDER_CONFIG.settings.glassRefractionStrength,
          },
          uGlassChromaticAberration: {
            value: SLIDER_CONFIG.settings.glassChromaticAberration,
          },
          uGlassBubbleClarity: {
            value: SLIDER_CONFIG.settings.glassBubbleClarity,
          },
          uGlassEdgeGlow: { value: SLIDER_CONFIG.settings.glassEdgeGlow },
          uGlassLiquidFlow: { value: SLIDER_CONFIG.settings.glassLiquidFlow },
        },
        vertexShader,
        fragmentShader,
      });

      const geometry = new THREE.PlaneGeometry(2, 2);
      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      sceneRef.current = scene;
      rendererRef.current = renderer;
      materialRef.current = material;

      // Load textures with optimized loading
      const loader = new THREE.TextureLoader();

      // Preload images first to ensure they're in browser cache
      // Prioritize first two images since they're shown immediately
      const preloadPromises = slides.map((slide, index) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.crossOrigin = "anonymous";
          img.onload = () => resolve();
          img.onerror = () => resolve(); // Continue even if one fails
          img.src = slide.media;
          // Set loading priority for first two images
          if (index < 2 && img.loading !== undefined) {
            img.loading = "eager";
          }
        });
      });

      // Load first two images with priority
      await Promise.all(preloadPromises.slice(0, 2));

      // Load remaining images in background (don't await)
      Promise.all(preloadPromises.slice(2)).catch(() => {
        // Silently handle background loading errors
      });

      // Now load textures (should be faster since images are cached)
      const loadedTextures = await Promise.allSettled(
        slides.map(
          (slide) =>
            new Promise((resolve, reject) => {
              loader.load(
                slide.media,
                (texture) => {
                  texture.minFilter = texture.magFilter = THREE.LinearFilter;
                  texture.userData = {
                    size: new THREE.Vector2(
                      texture.image.width,
                      texture.image.height
                    ),
                  };
                  resolve(texture);
                },
                undefined,
                (error) => {
                  console.warn("Error loading texture:", error);
                  reject(error);
                }
              );
            })
        )
      ).then((results) => {
        // Filter out failed textures and return only successful ones
        return results
          .filter((result) => result.status === "fulfilled")
          .map((result) => result.value);
      });

      texturesRef.current = loadedTextures;

      if (loadedTextures.length >= 2) {
        material.uniforms.uTexture1.value = loadedTextures[0];
        material.uniforms.uTexture2.value = loadedTextures[1];
        material.uniforms.uTexture1Size.value = loadedTextures[0].userData.size;
        material.uniforms.uTexture2Size.value = loadedTextures[1].userData.size;
        setIsLoaded(true);
      } else if (loadedTextures.length > 0) {
        // Fallback: use first texture for both if we only have one
        material.uniforms.uTexture1.value = loadedTextures[0];
        material.uniforms.uTexture2.value = loadedTextures[0];
        material.uniforms.uTexture1Size.value = loadedTextures[0].userData.size;
        material.uniforms.uTexture2Size.value = loadedTextures[0].userData.size;
        setIsLoaded(true);
      }

      const animate = () => {
        animationRef.current = requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };
      animate();

      let isDisposed = false;

      const handleResize = () => {
        // Check if components are still valid
        if (isDisposed || !rendererRef.current || !materialRef.current) {
          return;
        }

        try {
          // Use visual viewport on mobile to account for browser UI
          const width = window.innerWidth;
          const height = window.visualViewport
            ? window.visualViewport.height
            : window.innerHeight;

          // Ensure minimum height to prevent black gaps - use the container's actual height
          const container = canvasRef.current?.parentElement;
          const containerHeight = container
            ? Math.max(container.offsetHeight, height, window.innerHeight)
            : Math.max(height, window.innerHeight);

          rendererRef.current.setSize(width, containerHeight);

          // Check if material is still valid and has uniforms
          if (
            materialRef.current.uniforms &&
            materialRef.current.uniforms.uResolution
          ) {
            materialRef.current.uniforms.uResolution.value.set(
              width,
              containerHeight
            );
          }
        } catch (error) {
          console.warn("Error updating canvas size:", error);
        }
      };

      // Handle scroll events on mobile to update canvas size
      let scrollTimeout;
      const handleScroll = () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          handleResize();
        }, 100);
      };

      window.addEventListener("resize", handleResize);
      window.addEventListener("scroll", handleScroll, { passive: true });
      // Also listen to visual viewport changes on mobile
      if (window.visualViewport) {
        window.visualViewport.addEventListener("resize", handleResize);
        window.visualViewport.addEventListener("scroll", handleResize);
      }

      return () => {
        isDisposed = true;
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("scroll", handleScroll);
        if (window.visualViewport) {
          window.visualViewport.removeEventListener("resize", handleResize);
          window.visualViewport.removeEventListener("scroll", handleResize);
        }
        if (scrollTimeout) clearTimeout(scrollTimeout);
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
          animationRef.current = null;
        }
        if (rendererRef.current) {
          rendererRef.current.dispose();
          rendererRef.current = null;
        }
        if (geometry) {
          geometry.dispose();
        }
        if (materialRef.current) {
          materialRef.current.dispose();
          materialRef.current = null;
        }
        loadedTextures.forEach((texture) => {
          if (texture) texture.dispose();
        });
        texturesRef.current = [];
      };
    };

    initThreeJS();
  }, []);

  useEffect(() => {
    if (!isLoaded || isTransitioning) return;

    const interval = setInterval(() => {
      setSlideProgress((prev) => {
        const newProgress =
          prev + (100 / SLIDER_CONFIG.settings.autoSlideSpeed) * 50;
        if (newProgress >= 100) {
          clearInterval(interval);
          navigateToSlide((currentSlide + 1) % slides.length);
          return 0;
        }
        return newProgress;
      });
    }, 50);

    timerRef.current = interval;
    return () => clearInterval(interval);
  }, [isLoaded, currentSlide, isTransitioning]);

  const navigateToSlide = (targetIndex) => {
    if (
      isTransitioning ||
      targetIndex === currentSlide ||
      !materialRef.current ||
      !materialRef.current.uniforms
    )
      return;

    setIsTransitioning(true);
    setSlideProgress(0);
    if (timerRef.current) clearInterval(timerRef.current);

    const currentTexture = texturesRef.current[currentSlide];
    const targetTexture = texturesRef.current[targetIndex];

    if (!currentTexture || !targetTexture) return;

    try {
      materialRef.current.uniforms.uTexture1.value = currentTexture;
      materialRef.current.uniforms.uTexture2.value = targetTexture;
      materialRef.current.uniforms.uTexture1Size.value =
        currentTexture.userData.size;
      materialRef.current.uniforms.uTexture2Size.value =
        targetTexture.userData.size;

      setCurrentSlide(targetIndex);

      const progressUniform = materialRef.current.uniforms.uProgress;
      if (!progressUniform) {
        setIsTransitioning(false);
        return;
      }

      gsap.fromTo(
        progressUniform,
        { value: 0 },
        {
          value: 1,
          duration: SLIDER_CONFIG.settings.transitionDuration,
          ease: "power2.inOut",
          onComplete: () => {
            // Check if material is still valid before updating
            if (
              materialRef.current &&
              materialRef.current.uniforms &&
              materialRef.current.uniforms.uProgress
            ) {
              materialRef.current.uniforms.uProgress.value = 0;
              materialRef.current.uniforms.uTexture1.value = targetTexture;
              materialRef.current.uniforms.uTexture1Size.value =
                targetTexture.userData.size;
            }
            setIsTransitioning(false);
          },
        }
      );
    } catch (error) {
      console.warn("Error navigating to slide:", error);
      setIsTransitioning(false);
    }
  };

  const handleClick = () => {
    if (!isTransitioning && isLoaded) {
      navigateToSlide((currentSlide + 1) % slides.length);
    }
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        navigateToSlide((currentSlide + 1) % slides.length);
      } else {
        navigateToSlide((currentSlide - 1 + slides.length) % slides.length);
      }
    }
  };

  return (
    <div
      className="relative w-screen h-screen overflow-hidden bg-black cursor-pointer"
      style={{ minHeight: "100vh" }}
    >
      <canvas
        ref={canvasRef}
        className="block"
        onClick={handleClick}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          pointerEvents: "auto",
        }}
      />

      <span className="absolute top-1/2 left-8 -translate-y-1/2 font-mono text-xs font-semibold text-white z-10 tracking-wider uppercase max-sm:hidden!">
        {String(currentSlide + 1).padStart(2, "0")}
      </span>

      <span className="absolute top-1/2 right-8 -translate-y-1/2 font-mono text-xs font-semibold text-white z-10 tracking-wider uppercase max-sm:hidden!">
        {String(slides.length).padStart(2, "0")}
      </span>

      <nav className="absolute bottom-8 left-8 right-8 flex gap-0 z-10">
        {slides.map((slide, index) => (
          <div
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              navigateToSlide(index);
            }}
            className="flex flex-col cursor-pointer p-4 flex-1"
          >
            <div className="w-full h-0.5 bg-white/20 mb-2 rounded-sm overflow-hidden">
              <div
                className="h-full bg-white rounded-sm transition-all duration-100"
                style={{
                  width: index === currentSlide ? `${slideProgress}%` : "0%",
                  opacity: index === currentSlide ? 1 : 0.3,
                }}
              />
            </div>
            <div
              className={`font-mono text-[11px] uppercase tracking-wide font-semibold transition-colors hidden md:block duration-300 ${
                index === currentSlide ? "text-white" : "text-white/80"
              }`}
            >
              {slide.title}
            </div>
          </div>
        ))}
      </nav>

      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none max-sm:items-start max-sm:mt-16 max-xl:items-start! max-xl:mt-40">
        <div
          className="hero-heading-container pointer-events-auto mx-auto text-center
          lg:max-w-[90%] 2xl:max-w-[75%] max-sm:px-4 max-sm:pt-20"
        >
          <h1 className="font-bold text-white text-center leading-none drop-shadow-2xl mb-6 max-sm:text-5xl! sm:text-5xl! md:text-6xl! lg:text-8xl max-xl:text-7xl max-sm:text-left! xl:text-8xl!">
            Built on Strength and Driven by Innovation! Discover the SIPP Story
          </h1>

          <p className="text-lg! sm:text-xl! md:text-3xl! max-sm:text-2xl! max-sm:text-left! max-sm:leading-[0.9]! text-white/80! lg:w-11/12  my-8! mx-auto drop-shadow-xl leading-7">
            Founded on strength and innovation, SIPP is Kabul's trusted printing
            name. Our team combines expertise with state of the art equipment.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center max-sm:mt-8 md:mt-20!">
            <Link
              href="/portfolio"
              className="border border-white text-white px-20 py-4 max-sm:py-3! max-sm:w-[80%]! max-sm:px-16 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600! transition-all inline-flex items-center justify-center shadow-xl backdrop-blur-sm bg-white/10"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
