(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/vs_code_workspace/react work/company portfolio/frontend/app/about/VisualEffectsSlider.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VisualEffectsSlider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
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
        timeshiftTurbulence: 1.4
    }
};
const slides = [
    {
        title: "Ethereal Glow",
        media: "https://assets.codepen.io/7558/orange-portrait-001.jpg"
    },
    {
        title: "Rose Mirage",
        media: "https://assets.codepen.io/7558/orange-portrait-002.jpg"
    },
    {
        title: "Velvet Mystique",
        media: "https://assets.codepen.io/7558/orange-portrait-003.jpg"
    },
    {
        title: "Golden Hour",
        media: "https://assets.codepen.io/7558/orange-portrait-004.jpg"
    },
    {
        title: "Midnight Dreams",
        media: "https://assets.codepen.io/7558/orange-portrait-005.jpg"
    },
    {
        title: "Silver Light",
        media: "https://assets.codepen.io/7558/orange-portrait-006.jpg"
    }
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
function VisualEffectsSlider() {
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sceneRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rendererRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const materialRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const texturesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const animationRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const progressIntervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isTransitioning, setIsTransitioning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [slideProgress, setSlideProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [touchStart, setTouchStart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VisualEffectsSlider.useEffect": ()=>{
            if (!canvasRef.current) return;
            const initThreeJS = {
                "VisualEffectsSlider.useEffect.initThreeJS": async ()=>{
                    const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
                    const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrthographicCamera"](-1, 1, 1, -1, 0, 1);
                    const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
                        canvas: canvasRef.current,
                        antialias: false,
                        alpha: false
                    });
                    renderer.setSize(window.innerWidth, window.innerHeight);
                    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                    const material = new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ShaderMaterial"]({
                        uniforms: {
                            uTexture1: {
                                value: null
                            },
                            uTexture2: {
                                value: null
                            },
                            uProgress: {
                                value: 0.0
                            },
                            uResolution: {
                                value: new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](window.innerWidth, window.innerHeight)
                            },
                            uTexture1Size: {
                                value: new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](1, 1)
                            },
                            uTexture2Size: {
                                value: new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](1, 1)
                            },
                            uEffectType: {
                                value: 0
                            },
                            uGlobalIntensity: {
                                value: SLIDER_CONFIG.settings.globalIntensity
                            },
                            uSpeedMultiplier: {
                                value: SLIDER_CONFIG.settings.speedMultiplier
                            },
                            uDistortionStrength: {
                                value: SLIDER_CONFIG.settings.distortionStrength
                            },
                            uColorEnhancement: {
                                value: SLIDER_CONFIG.settings.colorEnhancement
                            },
                            uGlassRefractionStrength: {
                                value: SLIDER_CONFIG.settings.glassRefractionStrength
                            },
                            uGlassChromaticAberration: {
                                value: SLIDER_CONFIG.settings.glassChromaticAberration
                            },
                            uGlassBubbleClarity: {
                                value: SLIDER_CONFIG.settings.glassBubbleClarity
                            },
                            uGlassEdgeGlow: {
                                value: SLIDER_CONFIG.settings.glassEdgeGlow
                            },
                            uGlassLiquidFlow: {
                                value: SLIDER_CONFIG.settings.glassLiquidFlow
                            }
                        },
                        vertexShader,
                        fragmentShader
                    });
                    const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PlaneGeometry"](2, 2);
                    const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](geometry, material);
                    scene.add(mesh);
                    sceneRef.current = scene;
                    rendererRef.current = renderer;
                    materialRef.current = material;
                    // Load textures
                    const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextureLoader"]();
                    const loadedTextures = await Promise.all(slides.map({
                        "VisualEffectsSlider.useEffect.initThreeJS": (slide)=>new Promise({
                                "VisualEffectsSlider.useEffect.initThreeJS": (resolve)=>{
                                    loader.load(slide.media, {
                                        "VisualEffectsSlider.useEffect.initThreeJS": (texture)=>{
                                            texture.minFilter = texture.magFilter = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearFilter"];
                                            texture.userData = {
                                                size: new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"](texture.image.width, texture.image.height)
                                            };
                                            resolve(texture);
                                        }
                                    }["VisualEffectsSlider.useEffect.initThreeJS"]);
                                }
                            }["VisualEffectsSlider.useEffect.initThreeJS"])
                    }["VisualEffectsSlider.useEffect.initThreeJS"]));
                    texturesRef.current = loadedTextures;
                    if (loadedTextures.length >= 2) {
                        material.uniforms.uTexture1.value = loadedTextures[0];
                        material.uniforms.uTexture2.value = loadedTextures[1];
                        material.uniforms.uTexture1Size.value = loadedTextures[0].userData.size;
                        material.uniforms.uTexture2Size.value = loadedTextures[1].userData.size;
                        setIsLoaded(true);
                    }
                    const animate = {
                        "VisualEffectsSlider.useEffect.initThreeJS.animate": ()=>{
                            animationRef.current = requestAnimationFrame(animate);
                            renderer.render(scene, camera);
                        }
                    }["VisualEffectsSlider.useEffect.initThreeJS.animate"];
                    animate();
                    const handleResize = {
                        "VisualEffectsSlider.useEffect.initThreeJS.handleResize": ()=>{
                            renderer.setSize(window.innerWidth, window.innerHeight);
                            material.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
                        }
                    }["VisualEffectsSlider.useEffect.initThreeJS.handleResize"];
                    window.addEventListener("resize", handleResize);
                    return ({
                        "VisualEffectsSlider.useEffect.initThreeJS": ()=>{
                            window.removeEventListener("resize", handleResize);
                            if (animationRef.current) cancelAnimationFrame(animationRef.current);
                            renderer.dispose();
                            geometry.dispose();
                            material.dispose();
                        }
                    })["VisualEffectsSlider.useEffect.initThreeJS"];
                }
            }["VisualEffectsSlider.useEffect.initThreeJS"];
            initThreeJS();
        }
    }["VisualEffectsSlider.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VisualEffectsSlider.useEffect": ()=>{
            if (!isLoaded || isTransitioning) return;
            const interval = setInterval({
                "VisualEffectsSlider.useEffect.interval": ()=>{
                    setSlideProgress({
                        "VisualEffectsSlider.useEffect.interval": (prev)=>{
                            const newProgress = prev + 100 / SLIDER_CONFIG.settings.autoSlideSpeed * 50;
                            if (newProgress >= 100) {
                                clearInterval(interval);
                                navigateToSlide((currentSlide + 1) % slides.length);
                                return 0;
                            }
                            return newProgress;
                        }
                    }["VisualEffectsSlider.useEffect.interval"]);
                }
            }["VisualEffectsSlider.useEffect.interval"], 50);
            timerRef.current = interval;
            return ({
                "VisualEffectsSlider.useEffect": ()=>clearInterval(interval)
            })["VisualEffectsSlider.useEffect"];
        }
    }["VisualEffectsSlider.useEffect"], [
        isLoaded,
        currentSlide,
        isTransitioning
    ]);
    const navigateToSlide = (targetIndex)=>{
        if (isTransitioning || targetIndex === currentSlide || !materialRef.current) return;
        setIsTransitioning(true);
        setSlideProgress(0);
        if (timerRef.current) clearInterval(timerRef.current);
        const currentTexture = texturesRef.current[currentSlide];
        const targetTexture = texturesRef.current[targetIndex];
        materialRef.current.uniforms.uTexture1.value = currentTexture;
        materialRef.current.uniforms.uTexture2.value = targetTexture;
        materialRef.current.uniforms.uTexture1Size.value = currentTexture.userData.size;
        materialRef.current.uniforms.uTexture2Size.value = targetTexture.userData.size;
        setCurrentSlide(targetIndex);
        __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(materialRef.current.uniforms.uProgress, {
            value: 0
        }, {
            value: 1,
            duration: SLIDER_CONFIG.settings.transitionDuration,
            ease: "power2.inOut",
            onComplete: ()=>{
                materialRef.current.uniforms.uProgress.value = 0;
                materialRef.current.uniforms.uTexture1.value = targetTexture;
                materialRef.current.uniforms.uTexture1Size.value = targetTexture.userData.size;
                setIsTransitioning(false);
            }
        });
    };
    const handleClick = ()=>{
        if (!isTransitioning && isLoaded) {
            navigateToSlide((currentSlide + 1) % slides.length);
        }
    };
    const handleTouchStart = (e)=>{
        setTouchStart(e.touches[0].clientX);
    };
    const handleTouchEnd = (e)=>{
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-screen h-screen overflow-hidden bg-black cursor-pointer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                ref: canvasRef,
                className: "block w-full h-full",
                onClick: handleClick,
                onTouchStart: handleTouchStart,
                onTouchEnd: handleTouchEnd
            }, void 0, false, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/about/VisualEffectsSlider.jsx",
                lineNumber: 386,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute top-1/2 left-8 -translate-y-1/2 font-mono text-xs font-semibold text-white z-10 tracking-wider uppercase",
                children: String(currentSlide + 1).padStart(2, "0")
            }, void 0, false, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/about/VisualEffectsSlider.jsx",
                lineNumber: 394,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute top-1/2 right-8 -translate-y-1/2 font-mono text-xs font-semibold text-white z-10 tracking-wider uppercase",
                children: String(slides.length).padStart(2, "0")
            }, void 0, false, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/about/VisualEffectsSlider.jsx",
                lineNumber: 398,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "absolute bottom-8 left-8 right-8 flex gap-0 z-10",
                children: slides.map((slide, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: (e)=>{
                            e.stopPropagation();
                            navigateToSlide(index);
                        },
                        className: "flex flex-col cursor-pointer p-4 flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-0.5 bg-white/20 mb-2 rounded-sm overflow-hidden",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-full bg-white rounded-sm transition-all duration-100",
                                    style: {
                                        width: index === currentSlide ? `${slideProgress}%` : "0%",
                                        opacity: index === currentSlide ? 1 : 0.3
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/about/VisualEffectsSlider.jsx",
                                    lineNumber: 413,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/about/VisualEffectsSlider.jsx",
                                lineNumber: 412,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `font-mono text-[11px] uppercase tracking-wide font-semibold transition-colors hidden md:block duration-300 ${index === currentSlide ? "text-white" : "text-white/80"}`,
                                children: slide.title
                            }, void 0, false, {
                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/about/VisualEffectsSlider.jsx",
                                lineNumber: 421,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/about/VisualEffectsSlider.jsx",
                        lineNumber: 404,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/about/VisualEffectsSlider.jsx",
                lineNumber: 402,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/about/VisualEffectsSlider.jsx",
        lineNumber: 385,
        columnNumber: 5
    }, this);
}
_s(VisualEffectsSlider, "OhqBCdI2b1KHGOmTikzvXtyd8Do=");
_c = VisualEffectsSlider;
var _c;
__turbopack_context__.k.register(_c, "VisualEffectsSlider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/app/about/WordRotator.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "letter": "WordRotator-module__LsE1YG__letter",
  "rotate": "WordRotator-module__LsE1YG__rotate",
});
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/app/about/WordRotator.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$about$2f$WordRotator$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/app/about/WordRotator.module.css [app-client] (css module)"); // <-- create this file using the CSS below
"use client";
;
;
;
const WordRotator = ()=>{
    const word = "double-bubble";
    const delayIncrement = 0.5;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "word-row",
        children: word.split("").map((letter, index)=>{
            const hue = index / word.length * 360;
            const delay = index * delayIncrement;
            if (letter === "-") {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, index, false, {
                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/about/WordRotator.jsx",
                    lineNumber: 16,
                    columnNumber: 18
                }, ("TURBOPACK compile-time value", void 0));
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "letter",
                style: {
                    color: `oklch(0.7 0.3 ${hue}deg)`,
                    animationDelay: `${delay}s`
                },
                children: letter
            }, index, false, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/about/WordRotator.jsx",
                lineNumber: 20,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/about/WordRotator.jsx",
        lineNumber: 10,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = WordRotator;
const __TURBOPACK__default__export__ = WordRotator;
var _c;
__turbopack_context__.k.register(_c, "WordRotator");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=vs_code_workspace_react%20work_company%20portfolio_frontend_app_about_b8d6ddd8._.js.map