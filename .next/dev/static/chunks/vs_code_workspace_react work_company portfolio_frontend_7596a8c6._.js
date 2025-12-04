(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ImageTrail.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ImageTrail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function lerp(a, b, n) {
    return (1 - n) * a + n * b;
}
function getMouseDistance(p1, p2) {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    return Math.hypot(dx, dy);
}
class ImageTrailVariant5 {
    constructor(container, items, containerRect){
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
        this.mousePos = {
            x: centerX,
            y: centerY
        };
        this.lastMousePos = {
            x: centerX - 100,
            y: centerY - 100
        }; // Offset initial position to trigger first image
        this.cacheMousePos = {
            x: centerX,
            y: centerY
        };
        this.lastAngle = 0;
        // Create image elements - use absolute positioning relative to container
        items.forEach((src)=>{
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
            this.images.push({
                el: div
            });
        });
        // Handle mouse move - check if within container bounds
        const handlePointerMove = (ev)=>{
            const clientX = ev.clientX || ev.touches && ev.touches[0]?.clientX || 0;
            const clientY = ev.clientY || ev.touches && ev.touches[0]?.clientY || 0;
            // Check if mouse is within container bounds
            if (clientX >= this.containerRect.left && clientX <= this.containerRect.right && clientY >= this.containerRect.top && clientY <= this.containerRect.bottom) {
                this.mousePos = {
                    x: clientX - this.containerRect.left,
                    y: clientY - this.containerRect.top
                };
            }
        };
        let animationStarted = false;
        // Start animation loop on first move
        const initRender = (ev)=>{
            if (!animationStarted) {
                handlePointerMove(ev);
                // Initialize positions if mouse is in container
                if (this.mousePos.x > 0 && this.mousePos.y > 0) {
                    this.cacheMousePos = {
                        ...this.mousePos
                    };
                    this.lastMousePos = {
                        x: this.mousePos.x - 50,
                        y: this.mousePos.y - 50
                    }; // Offset to trigger first image
                }
                animationStarted = true;
                this.animationLoop();
            }
        };
        // Continuous mouse position update
        const handleMove = (ev)=>{
            handlePointerMove(ev);
            if (!animationStarted) {
                initRender(ev);
            }
        };
        // Handle mouse enter - trigger first image immediately
        const handleEnter = (ev)=>{
            handlePointerMove(ev);
            if (!animationStarted) {
                initRender(ev);
                // Force show first image on enter
                setTimeout(()=>{
                    if (this.mousePos.x > 0 && this.mousePos.y > 0) {
                        this.showNextImage();
                        this.lastMousePos = {
                            ...this.mousePos
                        };
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
        this.cleanup = ()=>{
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("touchmove", handleMove);
            container.removeEventListener("mousemove", handleMove);
            container.removeEventListener("touchmove", handleMove);
            container.removeEventListener("mouseenter", handleEnter);
        };
    }
    animationLoop = ()=>{
        let distance = getMouseDistance(this.mousePos, this.lastMousePos);
        if (distance > this.threshold) {
            this.showNextImage();
            this.lastMousePos = {
                ...this.mousePos
            };
        }
        this.cacheMousePos.x = lerp(this.cacheMousePos.x, this.mousePos.x, 0.1);
        this.cacheMousePos.y = lerp(this.cacheMousePos.y, this.mousePos.y, 0.1);
        if (this.isIdle && this.zIndexVal !== 1) this.zIndexVal = 1;
        this.rafId = requestAnimationFrame(this.animationLoop);
    };
    showNextImage = ()=>{
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
        this.imgPosition = this.imgPosition < this.imagesTotal - 1 ? this.imgPosition + 1 : 0;
        const img = this.images[this.imgPosition];
        if (!img || !img.el) return;
        // Position relative to container (no need to add containerRect offsets)
        const relativeX = this.cacheMousePos.x - 95;
        const relativeY = this.cacheMousePos.y - 95;
        // Kill any existing animations
        __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].killTweensOf(img.el);
        // Set initial transform using GSAP for proper initialization
        // Base z-index of 5 ensures images stay below overlay (15) and content (20)
        __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(img.el, {
            x: relativeX,
            y: relativeY,
            scale: 0.1,
            rotation: startAngle,
            opacity: 1,
            filter: "brightness(80%)",
            zIndex: 5 + this.zIndexVal
        });
        // Animate
        __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
            onStart: ()=>this.onImageActivated(),
            onComplete: ()=>this.onImageDeactivated()
        }).to(img.el, {
            duration: 1.5,
            ease: "power2.out",
            scale: 1.4,
            filter: "brightness(100%)",
            x: relativeX + dx * 70,
            y: relativeY + dy * 70,
            rotation: this.lastAngle
        }, 0.05).to(img.el, {
            duration: 0.4,
            ease: "expo.out",
            opacity: 0
        }, 0.5).to(img.el, {
            duration: 1.5,
            ease: "power4.out",
            x: `+=${dx * 120}`,
            y: `+=${dy * 120}`
        }, 0.05);
    };
    onImageActivated = ()=>{
        this.activeImagesCount++;
        this.isIdle = false;
    };
    onImageDeactivated = ()=>{
        this.activeImagesCount--;
        if (this.activeImagesCount === 0) this.isIdle = true;
    };
    destroy() {
        if (this.rafId) {
            cancelAnimationFrame(this.rafId);
        }
        if (this.cleanup) this.cleanup();
        this.images.forEach((img)=>{
            if (img.el && this.container.contains(img.el)) {
                __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].killTweensOf(img.el);
                this.container.removeChild(img.el);
            }
        });
    }
}
function ImageTrail({ images = [] }) {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const trailRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [containerRect, setContainerRect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImageTrail.useEffect": ()=>{
            if (!containerRef.current || !images || images.length === 0) return;
            // Get container rect
            const updateRect = {
                "ImageTrail.useEffect.updateRect": ()=>{
                    const rect = containerRef.current?.getBoundingClientRect();
                    if (rect && rect.width > 0 && rect.height > 0) {
                        setContainerRect({
                            left: rect.left,
                            top: rect.top,
                            width: rect.width,
                            height: rect.height,
                            right: rect.right,
                            bottom: rect.bottom
                        });
                    }
                }
            }["ImageTrail.useEffect.updateRect"];
            // Initial update with a small delay to ensure DOM is ready
            const timeoutId = setTimeout({
                "ImageTrail.useEffect.timeoutId": ()=>{
                    updateRect();
                }
            }["ImageTrail.useEffect.timeoutId"], 50);
            // Update on window resize and scroll
            window.addEventListener("resize", updateRect);
            window.addEventListener("scroll", updateRect, true);
            // Also update when images might load
            const imageLoadHandler = {
                "ImageTrail.useEffect.imageLoadHandler": ()=>{
                    setTimeout(updateRect, 100);
                }
            }["ImageTrail.useEffect.imageLoadHandler"];
            window.addEventListener("load", imageLoadHandler);
            return ({
                "ImageTrail.useEffect": ()=>{
                    clearTimeout(timeoutId);
                    window.removeEventListener("resize", updateRect);
                    window.removeEventListener("scroll", updateRect, true);
                    window.removeEventListener("load", imageLoadHandler);
                }
            })["ImageTrail.useEffect"];
        }
    }["ImageTrail.useEffect"], [
        images
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImageTrail.useEffect": ()=>{
            if (!containerRef.current || !containerRect || !images || images.length === 0) return;
            trailRef.current = new ImageTrailVariant5(containerRef.current, images, containerRect);
            return ({
                "ImageTrail.useEffect": ()=>{
                    if (trailRef.current) {
                        trailRef.current.destroy();
                    }
                }
            })["ImageTrail.useEffect"];
        }
    }["ImageTrail.useEffect"], [
        images,
        containerRect
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        style: {
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
            zIndex: 10
        }
    }, void 0, false, {
        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ImageTrail.jsx",
        lineNumber: 325,
        columnNumber: 5
    }, this);
}
_s(ImageTrail, "WacuhiNgIw04mgCDZxhVV0LrhtY=");
_c = ImageTrail;
var _c;
__turbopack_context__.k.register(_c, "ImageTrail");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/HeroSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$components$2f$ImageTrail$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ImageTrail.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Hero Section
const HeroSection = ()=>{
    _s();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            const checkMobile = {
                "HeroSection.useEffect.checkMobile": ()=>{
                    setIsMobile(window.innerWidth < 1024);
                }
            }["HeroSection.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener("resize", checkMobile);
            return ({
                "HeroSection.useEffect": ()=>window.removeEventListener("resize", checkMobile)
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "home",
        className: "relative h-screen overflow-hidden ",
        children: [
            isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-radial from-[#552DCC] via-[#402099] to-[#402099] z-1"
            }, void 0, false, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/HeroSection.jsx",
                lineNumber: 24,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$components$2f$ImageTrail$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                images: [
                    "/heroImages/1.png",
                    "/heroImages/2.jpg",
                    "/heroImages/3.jpg",
                    "/heroImages/4.jpg"
                ]
            }, void 0, false, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/HeroSection.jsx",
                lineNumber: 29,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-radial from-[#552DCC] via-[#402099] to-[#402099] z-1"
            }, void 0, false, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/HeroSection.jsx",
                lineNumber: 41,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center z-20 pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "  max-w-8/12 mx-auto px-4 sm:px-6 lg:px-8 pointer-events-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl sm:text-5xl md:text-6xl lg:text-8xl text-center font-bold text-white mb-6 leading-none drop-shadow-2xl",
                            children: "Best Printing Services in Afghanistan. We Print What You Think"
                        }, void 0, false, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/HeroSection.jsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg sm:text-xl md:text-2xl text-white/90 lg:w-11/12   mx-auto my-10 drop-shadow-xl leading-7",
                            children: "Your trusted partner for professional printing services in Afghanistan. From brochures to books, business cards to banners, we deliver excellence in every print."
                        }, void 0, false, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/HeroSection.jsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row gap-4 justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    className: "bg-white text-blue-600 px-12 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all inline-flex items-center justify-center shadow-xl",
                                    children: [
                                        "Get a Quote ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "ml-2"
                                        }, void 0, false, {
                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/HeroSection.jsx",
                                            lineNumber: 60,
                                            columnNumber: 27
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/HeroSection.jsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/portfolio",
                                    className: "border-2 border-white text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all inline-flex items-center justify-center shadow-xl backdrop-blur-sm bg-white/10",
                                    children: "View Our Work"
                                }, void 0, false, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/HeroSection.jsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/HeroSection.jsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/HeroSection.jsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/HeroSection.jsx",
                lineNumber: 45,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/HeroSection.jsx",
        lineNumber: 21,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(HeroSection, "0VTTNJATKABQPGLm9RVT0tKGUgU=");
_c = HeroSection;
const __TURBOPACK__default__export__ = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$sections$2f$HeroSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/HeroSection.jsx [app-client] (ecmascript)");
"use client";
;
;
;
;
function App() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$sections$2f$HeroSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = App;
var _c;
__turbopack_context__.k.register(_c, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.554.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ArrowRight
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "m12 5 7 7-7 7",
            key: "xquz4c"
        }
    ]
];
const ArrowRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("arrow-right", __iconNode);
;
 //# sourceMappingURL=arrow-right.js.map
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=vs_code_workspace_react%20work_company%20portfolio_frontend_7596a8c6._.js.map