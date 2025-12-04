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
"[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/CircularText.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const getRotationTransition = (duration, from, loop = true)=>({
        from,
        to: from + 360,
        ease: 'linear',
        duration,
        type: 'tween',
        repeat: loop ? Infinity : 0
    });
const getTransition = (duration, from)=>({
        rotate: getRotationTransition(duration, from),
        scale: {
            type: 'spring',
            damping: 20,
            stiffness: 300
        }
    });
const CircularText = ({ text, spinDuration = 20, onHover = 'speedUp', className = '' })=>{
    _s();
    const letters = Array.from(text);
    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"])();
    const rotation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CircularText.useEffect": ()=>{
            const start = rotation.get();
            controls.start({
                rotate: start + 360,
                scale: 1,
                transition: getTransition(spinDuration, start)
            });
        }
    }["CircularText.useEffect"], [
        spinDuration,
        text,
        onHover,
        controls,
        rotation
    ]);
    const handleHoverStart = ()=>{
        const start = rotation.get();
        if (!onHover) return;
        let transitionConfig;
        let scaleVal = 1;
        switch(onHover){
            case 'slowDown':
                transitionConfig = getTransition(spinDuration * 2, start);
                break;
            case 'speedUp':
                transitionConfig = getTransition(spinDuration / 4, start);
                break;
            case 'pause':
                transitionConfig = {
                    rotate: {
                        type: 'spring',
                        damping: 20,
                        stiffness: 300
                    },
                    scale: {
                        type: 'spring',
                        damping: 20,
                        stiffness: 300
                    }
                };
                scaleVal = 1;
                break;
            case 'goBonkers':
                transitionConfig = getTransition(spinDuration / 20, start);
                scaleVal = 0.8;
                break;
            default:
                transitionConfig = getTransition(spinDuration, start);
        }
        controls.start({
            rotate: start + 360,
            scale: scaleVal,
            transition: transitionConfig
        });
    };
    const handleHoverEnd = ()=>{
        const start = rotation.get();
        controls.start({
            rotate: start + 360,
            scale: 1,
            transition: getTransition(spinDuration, start)
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: `m-0 mx-auto rounded-full w-[200px] h-[200px] relative text-white font-black text-center cursor-pointer origin-center ${className}`,
        style: {
            rotate: rotation
        },
        initial: {
            rotate: 0
        },
        animate: controls,
        onMouseEnter: handleHoverStart,
        onMouseLeave: handleHoverEnd,
        children: letters.map((letter, i)=>{
            const rotationDeg = 360 / letters.length * i;
            const factor = Math.PI / letters.length;
            const x = factor * i;
            const y = factor * i;
            const transform = `rotateZ(${rotationDeg}deg) translate3d(${x}px, ${y}px, 0)`;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute inline-block inset-0 text-2xl transition-all duration-500 ease-[cubic-bezier(0,0,0,1)]",
                style: {
                    transform,
                    WebkitTransform: transform
                },
                children: letter
            }, i, false, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/CircularText.jsx",
                lineNumber: 100,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false, {
        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/CircularText.jsx",
        lineNumber: 84,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CircularText, "xbJChhEMd1e1Dy7CWTuS6TcG5K0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAnimation"],
        __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMotionValue"]
    ];
});
_c = CircularText;
const __TURBOPACK__default__export__ = CircularText;
var _c;
__turbopack_context__.k.register(_c, "CircularText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/SplitMenu.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SplitMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$split$2d$type$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/split-type/dist/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function SplitMenu() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SplitMenu.useEffect": ()=>{
            new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$split$2d$type$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](".split-text", {
                types: "chars"
            });
        }
    }["SplitMenu.useEffect"], []);
    const links = [
        {
            label: "TikTok",
            width: 125
        },
        {
            label: "Twitter",
            width: 200
        },
        {
            label: "Instagram",
            width: 77
        },
        {
            label: "Facebook",
            width: 93
        },
        {
            label: "YouTube",
            width: 92
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "flex flex-col gap-2 items-center",
        children: links.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#",
                style: {
                    fontVariationSettings: `"wdth" ${item.width}`
                },
                className: " split-text relative overflow-hidden font-black text-2xl uppercase text-[#f4f4ed] tracking-tight leading-[0.8] transition-all ",
                children: item.label
            }, i, false, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/SplitMenu.jsx",
                lineNumber: 21,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/SplitMenu.jsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_s(SplitMenu, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = SplitMenu;
var _c;
__turbopack_context__.k.register(_c, "SplitMenu");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$components$2f$CircularText$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/CircularText.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$components$2f$SplitMenu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/SplitMenu.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
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
                lineNumber: 25,
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
                lineNumber: 30,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-radial from-[#552DCC] via-[#402099] to-[#612099] z-1"
            }, void 0, false, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/HeroSection.jsx",
                lineNumber: 42,
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
                            lineNumber: 48,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg sm:text-xl md:text-2xl text-white/90 lg:w-11/12   mx-auto my-10 drop-shadow-xl leading-7",
                            children: "Your trusted partner for professional printing services in Afghanistan. From brochures to books, business cards to banners, we deliver excellence in every print."
                        }, void 0, false, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/HeroSection.jsx",
                            lineNumber: 51,
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
                                            lineNumber: 61,
                                            columnNumber: 27
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/HeroSection.jsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/portfolio",
                                    className: "border-2 border-white text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all inline-flex items-center justify-center shadow-xl backdrop-blur-sm bg-white/10",
                                    children: "View Our Work"
                                }, void 0, false, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/HeroSection.jsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/HeroSection.jsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/HeroSection.jsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/HeroSection.jsx",
                lineNumber: 46,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-16 left-8 z-20 pointer-events-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$components$2f$CircularText$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    text: "STRENGTH INNOVATION KABUL ",
                    onHover: "speedUp",
                    spinDuration: 20,
                    className: "custom-class"
                }, void 0, false, {
                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/HeroSection.jsx",
                    lineNumber: 75,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/HeroSection.jsx",
                lineNumber: 74,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-16 right-8 z-20 pointer-events-auto border-[3px] border-orange-400 rounded-2xl p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$components$2f$SplitMenu$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/HeroSection.jsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/HeroSection.jsx",
                lineNumber: 82,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/HeroSection.jsx",
        lineNumber: 22,
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
"[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/AboutSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>"); // Assuming you use an icon library like lucide-react
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
;
;
function AboutSection() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16 px-4 md:py-24 md:px-8 bg-white relative",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-10/12 mx-auto flex md:grid md:grid-cols-2 md:gap-12 ",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full h-[600px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/homepage/img_1.jpg",
                        alt: "A professional looking man sitting with a laptop",
                        fill: true,
                        className: "object-cover"
                    }, void 0, false, {
                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/AboutSection.jsx",
                        lineNumber: 10,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/AboutSection.jsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6",
                            children: "Leading Printing Press in Kabul, Afghanistan"
                        }, void 0, false, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/AboutSection.jsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 mb-2 w-full pr-20 text-xl leading-tight",
                            children: "Strengths Innovation is one of the best printing services in Afghanistan, registered with the Afghan Investment Support Agency (AISA) since 2002. With over 14 years of dedication and professional excellence, we have become the most trusted name in commercial printing across Kabul and beyond."
                        }, void 0, false, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/AboutSection.jsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 mb-8 w-full pr-20 text-xl",
                            children: "Our state-of-the-art printing facility offers comprehensive solutions for all your printing needs - from corporate branding materials to large-scale commercial projects. We combine cutting-edge technology with skilled craftsmanship to deliver international quality standards at competitive prices."
                        }, void 0, false, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/AboutSection.jsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeatureItem, {
                                    text: "Top Quality Prints Using The Latest Technology",
                                    color: "text-purple-600"
                                }, void 0, false, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/AboutSection.jsx",
                                    lineNumber: 42,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeatureItem, {
                                    text: "Mix And Match Colors, Sizes, And Designs",
                                    color: "text-purple-600"
                                }, void 0, false, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/AboutSection.jsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeatureItem, {
                                    text: "Fast And Free Standard Shipping",
                                    color: "text-purple-600"
                                }, void 0, false, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/AboutSection.jsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FeatureItem, {
                                    text: "Customer Happiness Guarantee",
                                    color: "text-purple-600"
                                }, void 0, false, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/AboutSection.jsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/AboutSection.jsx",
                            lineNumber: 40,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/AboutSection.jsx",
                    lineNumber: 19,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/AboutSection.jsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/AboutSection.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = AboutSection;
// Helper component for the feature list items
const FeatureItem = ({ text, color })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-start",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `p-1 ${color} rounded-full mt-1`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                        className: "w-5 h-5"
                    }, void 0, false, {
                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/AboutSection.jsx",
                        lineNumber: 72,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    " "
                ]
            }, void 0, true, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/AboutSection.jsx",
                lineNumber: 71,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `ml-3 bullets text-2xl font-bold ${color}`,
                children: text
            }, void 0, false, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/AboutSection.jsx",
                lineNumber: 74,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/AboutSection.jsx",
        lineNumber: 70,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c1 = FeatureItem;
var _c, _c1;
__turbopack_context__.k.register(_c, "AboutSection");
__turbopack_context__.k.register(_c1, "FeatureItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/image.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../public/service/Icon-1.svg'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
;
;
;
;
;
const ServicesSection = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "technut-service-section section-padding",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row justify-content-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-lg-6 col-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "wpo-section-title",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "//"
                                            }, void 0, false, {
                                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                                lineNumber: 21,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            " OUR SERVICES ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "//"
                                            }, void 0, false, {
                                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                                lineNumber: 21,
                                                columnNumber: 50
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                        lineNumber: 20,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        children: "Perfect IT Solutions"
                                    }, void 0, false, {
                                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                        lineNumber: 23,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                lineNumber: 19,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                            lineNumber: 18,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "technut-service-wrapper",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-lg-3 col-md-6 col-12",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "technut-service-card",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "service-card-shape",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/service/service-shape.svg",
                                                        alt: ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                                        lineNumber: 32,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                                    lineNumber: 31,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "image",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/service/Icon-1.svg",
                                                        alt: ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                                        lineNumber: 35,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                                    lineNumber: 34,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            children: "IT Management"
                                                        }, void 0, false, {
                                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                                            lineNumber: 38,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: "Lorem Ipsum has been the industry's standard dummy text ever since the printer."
                                                        }, void 0, false, {
                                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                                            lineNumber: 39,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                                    lineNumber: 37,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "service-single.html",
                                                    className: "theme-btn-s3",
                                                    children: "Details"
                                                }, void 0, false, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                                    lineNumber: 44,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                            lineNumber: 30,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                        lineNumber: 29,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-lg-3 col-md-6 col-12",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "technut-service-card",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "service-card-shape",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/service/service-shape.svg",
                                                        alt: ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                                        lineNumber: 52,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                                    lineNumber: 51,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "image",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/service/Icon-2.svg",
                                                        alt: ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                                        lineNumber: 55,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                                    lineNumber: 54,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            children: "Cyber Security"
                                                        }, void 0, false, {
                                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                                            lineNumber: 58,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: "Lorem Ipsum has been the industry's standard dummy text ever since the printer."
                                                        }, void 0, false, {
                                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                                            lineNumber: 59,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                                    lineNumber: 57,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "service-single.html",
                                                    className: "theme-btn-s3",
                                                    children: "Details"
                                                }, void 0, false, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                                    lineNumber: 64,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                            lineNumber: 50,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                        lineNumber: 49,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-lg-3 col-md-6 col-12",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "technut-service-card",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "service-card-shape",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/service/service-shape.svg",
                                                        alt: ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                                        lineNumber: 72,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                                    lineNumber: 71,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "image",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/service/Icon-3.svg",
                                                        alt: ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                                        lineNumber: 75,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                                    lineNumber: 74,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            children: "Web Development"
                                                        }, void 0, false, {
                                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                                            lineNumber: 78,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: "Lorem Ipsum has been the industry's standard dummy text ever since the printer."
                                                        }, void 0, false, {
                                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                                            lineNumber: 79,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                                    lineNumber: 77,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "service-single.html",
                                                    className: "theme-btn-s3",
                                                    children: "Details"
                                                }, void 0, false, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                                    lineNumber: 84,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-lg-3 col-md-6 col-12",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "technut-service-card",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "service-card-shape",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/service/service-shape.svg",
                                                        alt: ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                                        lineNumber: 92,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                                    lineNumber: 91,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "image",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/service/Icon-4.svg",
                                                        alt: ""
                                                    }, void 0, false, {
                                                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                                        lineNumber: 95,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                                    lineNumber: 94,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                            children: "Data Security"
                                                        }, void 0, false, {
                                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                                            lineNumber: 98,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            children: "Lorem Ipsum has been the industry's standard dummy text ever since the printer."
                                                        }, void 0, false, {
                                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                                            lineNumber: 99,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                                    lineNumber: 97,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "service-single.html",
                                                    className: "theme-btn-s3",
                                                    children: "Details"
                                                }, void 0, false, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                                    lineNumber: 104,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                            lineNumber: 90,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                lineNumber: 28,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "service-view-more",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "row justify-content-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "col-lg-6 col-12",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "service.html",
                                            className: "theme-btn-s4",
                                            children: [
                                                "View More",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "fi flaticon-right-arrow-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                                    lineNumber: 114,
                                                    columnNumber: 28
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                            lineNumber: 113,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                        lineNumber: 112,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                lineNumber: 16,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "technut-service-shape-1"
            }, void 0, false, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                lineNumber: 121,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "technut-service-shape-2"
            }, void 0, false, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                lineNumber: 122,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "technut-service-shape-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "101",
                    height: "84",
                    viewBox: "0 0 101 84",
                    fill: "none",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M6.21538 35L65.2615 0L101 79.3333L0 84L6.21538 35Z"
                    }, void 0, false, {
                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
                lineNumber: 123,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ServicesSection;
const __TURBOPACK__default__export__ = ServicesSection;
var _c;
__turbopack_context__.k.register(_c, "ServicesSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollStackItem",
    ()=>ScrollStackItem,
    "default",
    ()=>ScrollStackDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const ScrollStackItem = ({ children, itemClassName = "" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `scroll-stack-card w-11/12 h-[700px] p-8 rounded-[40px] shadow-2xl ${itemClassName}`.trim(),
        children: children
    }, void 0, false, {
        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
        lineNumber: 5,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
_c = ScrollStackItem;
const ScrollStack = ({ children, className = "", stackGap = 20 })=>{
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const lastScrollTop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const updateCardTransforms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ScrollStack.useCallback[updateCardTransforms]": ()=>{
            if (!cardsRef.current.length) return;
            const scrollTop = window.scrollY;
            const viewportHeight = window.innerHeight;
            const stickyTop = viewportHeight * 0.1;
            cardsRef.current.forEach({
                "ScrollStack.useCallback[updateCardTransforms]": (card, index)=>{
                    if (!card) return;
                    const cardOffsetTop = card.offsetTop;
                    const container = containerRef.current;
                    const containerTop = container.getBoundingClientRect().top + scrollTop;
                    // Calculate the target sticky position including the gap for this card
                    const targetStickyPosition = stickyTop + index * stackGap;
                    // When should this card start being sticky? 
                    // Subtract the gap so it reaches its final position smoothly
                    const stickyStart = containerTop + cardOffsetTop - targetStickyPosition;
                    // When should this card stop being sticky (when last card arrives)?
                    const lastCard = cardsRef.current[cardsRef.current.length - 1];
                    const lastCardOffsetTop = lastCard.offsetTop;
                    const lastTargetPosition = stickyTop + (cardsRef.current.length - 1) * stackGap;
                    const stickyEnd = containerTop + lastCardOffsetTop - lastTargetPosition;
                    let translateY = 0;
                    const scale = 1; // All cards same size
                    if (scrollTop >= stickyStart && scrollTop <= stickyEnd) {
                        // Card is sticky - pin it at the exact target position
                        translateY = scrollTop - (containerTop + cardOffsetTop) + targetStickyPosition;
                    } else if (scrollTop > stickyEnd) {
                        // All cards scroll away together
                        translateY = stickyEnd - (containerTop + cardOffsetTop) + targetStickyPosition;
                    }
                    // Round to avoid sub-pixel jittering
                    translateY = Math.round(translateY);
                    card.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
                    card.style.transformOrigin = 'top center';
                    card.style.position = 'relative';
                    card.style.zIndex = index + 1;
                    card.style.willChange = 'transform';
                }
            }["ScrollStack.useCallback[updateCardTransforms]"]);
            lastScrollTop.current = scrollTop;
        }
    }["ScrollStack.useCallback[updateCardTransforms]"], [
        stackGap
    ]);
    const handleScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ScrollStack.useCallback[handleScroll]": ()=>{
            requestAnimationFrame({
                "ScrollStack.useCallback[handleScroll]": ()=>{
                    updateCardTransforms();
                }
            }["ScrollStack.useCallback[handleScroll]"]);
        }
    }["ScrollStack.useCallback[handleScroll]"], [
        updateCardTransforms
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollStack.useEffect": ()=>{
            const container = containerRef.current;
            if (!container) return;
            const cards = Array.from(container.querySelectorAll(".scroll-stack-card"));
            cardsRef.current = cards;
            window.addEventListener("scroll", handleScroll, {
                passive: true
            });
            window.addEventListener("resize", updateCardTransforms, {
                passive: true
            });
            // Initial update
            requestAnimationFrame({
                "ScrollStack.useEffect": ()=>{
                    updateCardTransforms();
                }
            }["ScrollStack.useEffect"]);
            return ({
                "ScrollStack.useEffect": ()=>{
                    window.removeEventListener("scroll", handleScroll);
                    window.removeEventListener("resize", updateCardTransforms);
                }
            })["ScrollStack.useEffect"];
        }
    }["ScrollStack.useEffect"], [
        handleScroll,
        updateCardTransforms
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: `relative w-full ${className}`.trim(),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-11/12 mx-auto flex flex-col items-center gap-10 px-4 md:px-20 p-8",
            children: children
        }, void 0, false, {
            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
            lineNumber: 104,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
        lineNumber: 100,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ScrollStack, "+cHHrtyD+n94zlq6pf4ktKUpa5M=");
_c1 = ScrollStack;
function ScrollStackDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full bg-gray-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollStack, {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollStackItem, {
                    itemClassName: "bg-blue-500 text-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col justify-center h-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-bold mb-6",
                                children: "Card 1 - Top Position"
                            }, void 0, false, {
                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg opacity-90",
                                children: "I stick first at the top position"
                            }, void 0, false, {
                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollStackItem, {
                    itemClassName: "bg-purple-500 text-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col justify-center h-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-bold mb-6",
                                children: "Card 2"
                            }, void 0, false, {
                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
                                lineNumber: 126,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg opacity-90",
                                children: "I stack on top of Card 1, but 40px below it"
                            }, void 0, false, {
                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
                        lineNumber: 125,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollStackItem, {
                    itemClassName: "bg-pink-500 text-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col justify-center h-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-bold mb-6",
                                children: "Card 3"
                            }, void 0, false, {
                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
                                lineNumber: 133,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg opacity-90",
                                children: "I stack on top of Card 2, but 40px below it"
                            }, void 0, false, {
                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollStackItem, {
                    itemClassName: "bg-purple-600 text-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col justify-center h-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-bold mb-6",
                                children: "Card 4"
                            }, void 0, false, {
                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
                                lineNumber: 140,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg opacity-90",
                                children: "I'm on top of the stack, 40px below Card 3"
                            }, void 0, false, {
                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
                                lineNumber: 141,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
                    lineNumber: 138,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
            lineNumber: 116,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
        lineNumber: 114,
        columnNumber: 5
    }, this);
}
_c2 = ScrollStackDemo;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ScrollStackItem");
__turbopack_context__.k.register(_c1, "ScrollStack");
__turbopack_context__.k.register(_c2, "ScrollStackDemo");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$sections$2f$AboutSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/AboutSection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$sections$2f$ServicesSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/ServicesSection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$components$2f$ScrollStack$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function App() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$sections$2f$HeroSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$sections$2f$AboutSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$components$2f$ScrollStack$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$sections$2f$ServicesSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
        lineNumber: 15,
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
]);

//# sourceMappingURL=vs_code_workspace_react%20work_company%20portfolio_frontend_app_c3eb9528._.js.map