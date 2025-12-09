module.exports = [
"[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ImageTrail.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ImageTrail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
"use client";
;
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
        __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].killTweensOf(img.el);
        // Set initial transform using GSAP for proper initialization
        // Base z-index of 5 ensures images stay below overlay (15) and content (20)
        __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(img.el, {
            x: relativeX,
            y: relativeY,
            scale: 0.1,
            rotation: startAngle,
            opacity: 1,
            filter: "brightness(80%)",
            zIndex: 5 + this.zIndexVal
        });
        // Animate
        __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
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
                __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].killTweensOf(img.el);
                this.container.removeChild(img.el);
            }
        });
    }
}
function ImageTrail({ images = [] }) {
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const trailRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [containerRect, setContainerRect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!containerRef.current || !images || images.length === 0) return;
        // Get container rect
        const updateRect = ()=>{
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
        };
        // Initial update with a small delay to ensure DOM is ready
        const timeoutId = setTimeout(()=>{
            updateRect();
        }, 50);
        // Update on window resize and scroll
        window.addEventListener("resize", updateRect);
        window.addEventListener("scroll", updateRect, true);
        // Also update when images might load
        const imageLoadHandler = ()=>{
            setTimeout(updateRect, 100);
        };
        window.addEventListener("load", imageLoadHandler);
        return ()=>{
            clearTimeout(timeoutId);
            window.removeEventListener("resize", updateRect);
            window.removeEventListener("scroll", updateRect, true);
            window.removeEventListener("load", imageLoadHandler);
        };
    }, [
        images
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!containerRef.current || !containerRect || !images || images.length === 0) return;
        trailRef.current = new ImageTrailVariant5(containerRef.current, images, containerRect);
        return ()=>{
            if (trailRef.current) {
                trailRef.current.destroy();
            }
        };
    }, [
        images,
        containerRect
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/CircularText.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/framer-motion/dist/es/value/use-motion-value.mjs [app-ssr] (ecmascript)");
"use client";
;
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
    const letters = Array.from(text);
    const controls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$animation$2f$hooks$2f$use$2d$animation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnimation"])();
    const rotation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$motion$2d$value$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMotionValue"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const start = rotation.get();
        controls.start({
            rotate: start + 360,
            scale: 1,
            transition: getTransition(spinDuration, start)
        });
    }, [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
const __TURBOPACK__default__export__ = CircularText;
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/SplitMenu.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SplitMenu
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$split$2d$type$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/split-type/dist/index.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function SplitMenu() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$split$2d$type$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](".split-text", {
            types: "chars"
        });
    }, []);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "flex flex-col gap-2 items-center",
        children: links.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: "#",
                style: {
                    fontVariationSettings: `"wdth" ${item.width}`
                },
                className: " split-text relative overflow-hidden font-black text-2xl uppercase text-[#f4f4ed]! tracking-tight leading-[0.8] max-sm:text-lg transition-all ",
                target: "_blank",
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
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/HeroSection.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$components$2f$ImageTrail$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ImageTrail.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$components$2f$CircularText$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/CircularText.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$components$2f$SplitMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/SplitMenu.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
// Hero Section
const HeroSection = ()=>{
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkMobile = ()=>{
            setIsMobile(window.innerWidth < 1024);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return ()=>window.removeEventListener("resize", checkMobile);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "home",
        className: "relative h-screen overflow-hidden",
        children: [
            isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-radial from-[#552DCC] via-[#402099] to-[#402099] z-1"
            }, void 0, false, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/HeroSection.jsx",
                lineNumber: 26,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$components$2f$ImageTrail$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                images: [
                    "/portfolio/img1.jpg",
                    "/portfolio/img2.jpg",
                    "/portfolio/img3.jpg",
                    "/portfolio/img4.jpg",
                    "/portfolio/img5.jpg",
                    "/portfolio/img6.jpg",
                    "/portfolio/img7.jpg",
                    "/portfolio/img8.jpg",
                    "/portfolio/img9.jpg",
                    "/portfolio/img10.jpg"
                ]
            }, void 0, false, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/HeroSection.jsx",
                lineNumber: 31,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-radial from-[#552DCC] via-[#402099] to-[#612099] z-1"
            }, void 0, false, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/HeroSection.jsx",
                lineNumber: 49,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center z-20 pointer-events-none max-sm:items-start max-sm:mt-16 max-xl:items-start! max-xl:mt-40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hero-heading-container pointer-events-auto mx-auto text-center lg:max-w-[90%] 2xl:max-w-[75%] max-sm:px-4 max-sm:pt-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-bold text-white text-center leading-none drop-shadow-2xl mb-6 max-sm:text-5xl! sm:text-5xl! md:text-6xl! lg:text-8xl max-xl:text-7xl max-sm:text-left! xl:text-8xl!",
                            children: "Where Strength Meets Innovation! Kabul’s Premier Printing Press for Quality Results"
                        }, void 0, false, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/HeroSection.jsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg! sm:text-xl! md:text-3xl! max-sm:text-2xl! max-sm:text-left! max-sm:leading-[0.9]! text-white/80! lg:w-11/12  my-8! mx-auto drop-shadow-xl leading-7",
                            children: "Welcome to SIPP, where technology meets craftsmanship. We deliver premium printing solutions that transform your ideas into impactful results."
                        }, void 0, false, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/HeroSection.jsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row gap-3 justify-center max-sm:mt-8 md:mt-20!",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    className: "bg-white text-blue-600 px-20 py-4 max-sm:py-3! max-sm:w-[80%]! max-sm:px-16 rounded-full font-bold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all inline-flex items-center justify-center shadow-xl",
                                    children: [
                                        "Get a Quote ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                            className: "ml-2"
                                        }, void 0, false, {
                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/HeroSection.jsx",
                                            lineNumber: 73,
                                            columnNumber: 27
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/HeroSection.jsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/portfolio",
                                    className: "border-2 border-white text-white px-20 py-4 max-sm:py-3! max-sm:w-[80%]! max-sm:px-16 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600! transition-all inline-flex items-center justify-center shadow-xl backdrop-blur-sm bg-white/10",
                                    children: "View Our Work"
                                }, void 0, false, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/HeroSection.jsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/HeroSection.jsx",
                            lineNumber: 68,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/HeroSection.jsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/HeroSection.jsx",
                lineNumber: 53,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-12 left-8 z-20 pointer-events-auto max-sm:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$components$2f$CircularText$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    text: "STRENGTH INNOVATION KABUL ",
                    onHover: "speedUp",
                    spinDuration: 20,
                    className: "custom-class"
                }, void 0, false, {
                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/HeroSection.jsx",
                    lineNumber: 87,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/HeroSection.jsx",
                lineNumber: 86,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-16 right-8 z-20 max-sm:hidden! pointer-events-auto border-[3px] border-orange-400 rounded-2xl p-4 max-sm:bottom-4 max-sm:right-4!",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$components$2f$SplitMenu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/HeroSection.jsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/HeroSection.jsx",
                lineNumber: 94,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/HeroSection.jsx",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = HeroSection;
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ScrollStackItem",
    ()=>ScrollStackItem,
    "default",
    ()=>ScrollStackDemo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FilePlus$3e$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/lucide-react/dist/esm/icons/file-plus.js [app-ssr] (ecmascript) <export default as FilePlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/lucide-react/dist/esm/icons/target.js [app-ssr] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader$3e$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/lucide-react/dist/esm/icons/loader.js [app-ssr] (ecmascript) <export default as Loader>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/lucide-react/dist/esm/icons/printer.js [app-ssr] (ecmascript) <export default as Printer>");
"use client";
;
;
;
const ScrollStackItem = ({ children, itemClassName = "" })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `scroll-stack-card w-11/12 h-[700px] p-8 rounded-[40px] max-sm:w-full! max-sm:h-[300px] shadow-2xl ${itemClassName}`.trim(),
        children: children
    }, void 0, false, {
        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
        lineNumber: 6,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
const ScrollStack = ({ children, className = "", stackGap = 20 })=>{
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const lastScrollTop = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const updateCardTransforms = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (!cardsRef.current.length) return;
        const scrollTop = window.scrollY;
        const viewportHeight = window.innerHeight;
        const stickyTop = viewportHeight * 0.1;
        cardsRef.current.forEach((card, index)=>{
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
            card.style.transformOrigin = "top center";
            card.style.position = "relative";
            card.style.zIndex = index + 1;
            card.style.willChange = "transform";
        });
        lastScrollTop.current = scrollTop;
    }, [
        stackGap
    ]);
    const handleScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        requestAnimationFrame(()=>{
            updateCardTransforms();
        });
    }, [
        updateCardTransforms
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
        requestAnimationFrame(()=>{
            updateCardTransforms();
        });
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", updateCardTransforms);
        };
    }, [
        handleScroll,
        updateCardTransforms
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: `relative w-full ${className}`.trim(),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-11/12 mx-auto flex flex-col items-center max-sm:w-full! max-sm:pt-16! gap-10 px-4 md:px-20 p-8",
            children: children
        }, void 0, false, {
            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
            lineNumber: 101,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
        lineNumber: 100,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
function ScrollStackDemo() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollStack, {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollStackItem, {
                    itemClassName: "bg-[#f72585] text-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center items-center h-full relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:w-1/2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-5xl! max-sm:text-2xl! leading-none max-sm:w-[70%] text-white font-bold mb-6",
                                        children: "Pre-press file preparation"
                                    }, void 0, false, {
                                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
                                        lineNumber: 116,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-3xl! opacity-90 leading-none! max-sm:text-lg! text-white",
                                        children: "Ensuring files are print-ready with correct resolution, color modes, bleeds, and fonts embedded. This prevents costly errors and production delays during printing."
                                    }, void 0, false, {
                                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FilePlus$3e$__["FilePlus"], {
                                size: 400,
                                className: "max-sm:absolute max-sm:w-22 max-sm:right-0 max-sm:-top-42"
                            }, void 0, false, {
                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
                        lineNumber: 114,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
                    lineNumber: 113,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollStackItem, {
                    itemClassName: "bg-[#7f00ff] text-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center items-center h-full relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:w-1/2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-5xl! max-sm:text-2xl! text-white max-sm:w-[70%] leading-none font-bold mb-6",
                                        children: "Color calibration accuracy"
                                    }, void 0, false, {
                                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
                                        lineNumber: 135,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-3xl! opacity-90 leading-none! max-sm:text-lg! text-white",
                                        children: "Calibrating equipment to maintain consistent, accurate colors across all prints and batches. Proper color management ensures the final product matches client expectations and brand standards."
                                    }, void 0, false, {
                                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                size: 400,
                                className: "max-sm:absolute max-sm:w-22 max-sm:right-0 max-sm:-top-42"
                            }, void 0, false, {
                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
                                lineNumber: 145,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollStackItem, {
                    itemClassName: "bg-[#4cc9f0] text-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center items-center h-full relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:w-1/2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-5xl! max-sm:text-2xl! text-white leading-none max-sm:w-[60%] font-bold mb-6",
                                        children: "Precision press operation"
                                    }, void 0, false, {
                                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
                                        lineNumber: 155,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-3xl! opacity-90 leading-none! max-sm:text-lg! text-white",
                                        children: "Operating printing presses with exact registration, ink density, and pressure settings throughout the run. Skilled press operators monitor quality continuously to maintain consistency from first to last sheet."
                                    }, void 0, false, {
                                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
                                        lineNumber: 158,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader$3e$__["Loader"], {
                                size: 400,
                                className: "max-sm:absolute max-sm:w-22 max-sm:right-0 max-sm:-top-42"
                            }, void 0, false, {
                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
                        lineNumber: 153,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ScrollStackItem, {
                    itemClassName: "bg-[#4361ee] text-white",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center items-center h-full relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "md:w-1/2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-5xl! max-sm:text-2xl! text-white max-sm:w-[60%] leading-none font-bold mb-6",
                                        children: "Post-press finishing quality"
                                    }, void 0, false, {
                                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
                                        lineNumber: 175,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-3xl! opacity-90 leading-none! max-sm:text-lg! text-white",
                                        children: "Executing cutting, folding, binding, and coating with precision to deliver a polished final product. Professional finishing transforms printed sheets into refined, durable materials that enhance perceived value."
                                    }, void 0, false, {
                                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
                                        lineNumber: 178,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
                                lineNumber: 174,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$printer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Printer$3e$__["Printer"], {
                                size: 400,
                                className: "max-sm:absolute max-sm:w-22 max-sm:right-0 max-sm:-top-42"
                            }, void 0, false, {
                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
                                lineNumber: 185,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
                        lineNumber: 173,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
                    lineNumber: 172,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
            lineNumber: 112,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/ScrollStack.jsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/public/funfactshape.svg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/funfactshape.e9854f9e.svg");}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/public/funfactshape.svg.mjs { IMAGE => \"[project]/vs_code_workspace/react work/company portfolio/frontend/public/funfactshape.svg (static in ecmascript, tag client)\" } [app-ssr] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$public$2f$funfactshape$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/public/funfactshape.svg (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$public$2f$funfactshape$2e$svg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1079,
    height: 129,
    blurWidth: 0,
    blurHeight: 0
};
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$public$2f$funfactshape$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$public$2f$funfactshape$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/vs_code_workspace/react work/company portfolio/frontend/public/funfactshape.svg.mjs { IMAGE => "[project]/vs_code_workspace/react work/company portfolio/frontend/public/funfactshape.svg (static in ecmascript, tag client)" } [app-ssr] (structured image object with data url, ecmascript)');
"use client";
;
;
;
;
;
const NumberCount = ()=>{
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animatedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const section = sectionRef.current;
        const numbers = section.querySelectorAll(".odometer");
        const animateNumber = (element)=>{
            const target = parseInt(element.getAttribute("data-count"), 10);
            const duration = 2000; // 2 seconds total
            const frameRate = 30; // frames per second
            let current = 0;
            const totalFrames = Math.round(duration / (1000 / frameRate));
            const increment = Math.max(1, Math.round(target / totalFrames));
            const counter = setInterval(()=>{
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(counter);
                }
                element.innerText = current;
            }, 1000 / frameRate);
        };
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting && !animatedRef.current) {
                    animatedRef.current = true;
                    numbers.forEach((num)=>animateNumber(num));
                }
            });
        }, {
            threshold: 0.3
        });
        observer.observe(section);
        return ()=>observer.disconnect();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: "wpo-fun-fact-section section-padding",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "wpo-fun-fact-wrapper",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "fun-fact-shape",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$public$2f$funfactshape$2e$svg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$public$2f$funfactshape$2e$svg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                            alt: ""
                        }, void 0, false, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-lg-3 col-md-6 col-sm-6 col-12",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "fun-fact-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "card-shape",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "227",
                                                height: "250",
                                                viewBox: "0 0 227 250",
                                                fill: "none",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M227 125C227 194.036 194.036 250 125 250C55.9644 250 0 194.036 0 125C0 55.9644 55.9644 0 125 0C194.036 0 227 55.9644 227 125Z",
                                                    fill: "#40C9FF"
                                                }, void 0, false, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                                    lineNumber: 70,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                                lineNumber: 64,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                            lineNumber: 63,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "info",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "odometer",
                                                            "data-count": "4000",
                                                            children: "00"
                                                        }, void 0, false, {
                                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                                            lineNumber: 78,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "+"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                                    lineNumber: 77,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Finished Projects"
                                                }, void 0, false, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                                    lineNumber: 83,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "shape",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "72",
                                                        height: "14",
                                                        viewBox: "0 0 72 14",
                                                        fill: "none",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M0 4.03869C0 6.07421 1.63168 7.75801 3.78653 8.03696C3.92484 8.21686 4.14935 8.53018 4.51217 9.08403C5.71889 10.9215 7.73744 14 12.1774 14C16.6174 14 18.636 10.9235 19.8427 9.08403C19.8748 9.03754 19.9109 8.98094 19.951 8.9203C19.9911 8.98094 20.0271 9.03754 20.0592 9.08403C21.2659 10.9215 23.2845 14 27.7245 14C32.1645 14 34.183 10.9215 35.3898 9.08403C35.4218 9.03754 35.4579 8.98094 35.496 8.9203C35.5361 8.98094 35.5722 9.0335 35.6022 9.08201C36.811 10.9235 38.8295 14 43.2695 14C47.7095 14 49.7281 10.9235 50.9348 9.08403C50.9669 9.03754 51.0029 8.98094 51.043 8.9203C51.0831 8.98094 51.1192 9.03754 51.1513 9.08403C52.358 10.9235 54.3765 14 58.8166 14C63.2566 14 65.2771 10.9235 66.4838 9.08403L65.9266 8.7121L66.4838 9.08403C66.8446 8.53422 67.0691 8.21889 67.2075 8.03898C69.3683 7.76408 71.002 6.08028 71.002 4.03869C71.002 1.81115 69.0235 0 66.5921 0C62.1521 0 60.1335 3.07652 58.9268 4.91597C58.8947 4.96448 58.8586 5.01906 58.8186 5.0797C58.7785 5.01906 58.7424 4.96246 58.7103 4.91597C57.5016 3.07652 55.481 0 51.041 0C46.601 0 44.5825 3.07652 43.3758 4.91597C43.3437 4.96246 43.3076 5.01906 43.2675 5.0797C43.2274 5.01906 43.1913 4.96448 43.1593 4.91597C41.9545 3.07652 39.936 0 35.496 0C31.058 0 29.0374 3.07652 27.8307 4.91395C27.7986 4.96246 27.7626 5.01704 27.7225 5.07768C27.6824 5.01704 27.6463 4.96246 27.6162 4.91597C26.4095 3.07652 24.389 0 19.951 0C15.511 0 13.4904 3.07652 12.2837 4.91597C12.2516 4.96448 12.2155 5.01906 12.1754 5.0797C12.1353 5.01906 12.0993 4.96246 12.0672 4.91597C10.8625 3.07652 8.84393 0 4.40392 0C1.97645 0 0 1.81115 0 4.03869ZM2.67202 4.03869C2.67202 3.30898 3.46581 2.69448 4.40392 2.69448C7.40669 2.69448 8.81386 4.83714 9.84018 6.40167C10.4255 7.29512 10.9126 8.00462 11.4097 8.35634C11.8667 8.67976 12.4821 8.67976 12.9412 8.35634C13.4383 8.00462 13.9274 7.29512 14.5127 6.40167C15.539 4.83714 16.9462 2.69448 19.951 2.69448C22.9557 2.69448 24.3609 4.83714 25.3872 6.40167C25.9725 7.29512 26.4596 8.00462 26.9567 8.35432C27.4138 8.67774 28.0292 8.67774 28.4882 8.35432C28.9853 8.00462 29.4724 7.2931 30.0577 6.39965C31.084 4.83511 32.4912 2.69246 35.494 2.69246C38.4968 2.69246 39.9039 4.83511 40.9322 6.39965C41.5176 7.29108 42.0047 8.0026 42.5018 8.35432C42.9608 8.67774 43.5762 8.67774 44.0332 8.35432C44.5304 8.0026 45.0174 7.2931 45.6048 6.39965C46.6311 4.83511 48.0383 2.69246 51.041 2.69246C54.0458 2.69246 55.451 4.83511 56.4793 6.39965C57.0666 7.2931 57.5537 8.00462 58.0508 8.35432C58.5099 8.67572 59.1252 8.67572 59.5803 8.35432C60.0774 8.00462 60.5665 7.2931 61.1518 6.39965C62.1781 4.83511 63.5853 2.69246 66.5901 2.69246C67.5322 2.69246 68.328 3.30898 68.328 4.03667C68.328 4.7583 67.5402 5.37482 66.6061 5.38088C66.3615 5.38291 66.121 5.45163 65.9125 5.58302C65.4254 5.88825 64.9885 6.47444 64.2528 7.5963C63.2265 9.16084 61.8193 11.3035 58.8145 11.3035C55.8118 11.3035 54.4046 9.16084 53.3763 7.5963C52.789 6.70286 52.3019 5.99134 51.8047 5.64164C51.3537 5.32429 50.7263 5.32429 50.2753 5.64164L50.2733 5.64366C49.7762 5.99336 49.2891 6.70488 48.7038 7.59833C47.6774 9.16286 46.2703 11.3055 43.2675 11.3055C40.2647 11.3055 38.8576 9.16286 37.8293 7.59833C37.2439 6.70488 36.7568 5.99538 36.2597 5.64366C35.8007 5.32024 35.1853 5.32024 34.7263 5.64366C34.2311 5.99336 33.744 6.70286 33.1567 7.5963C32.1304 9.16084 30.7232 11.3055 27.7205 11.3055C24.7157 11.3055 23.3085 9.16084 22.2822 7.59428C21.6969 6.70286 21.2098 5.99336 20.7147 5.64366C20.4862 5.48195 20.2176 5.4011 19.949 5.4011C19.6804 5.4011 19.4117 5.48195 19.1812 5.64366C18.6841 5.99336 18.197 6.70488 17.6117 7.5963C16.5854 9.16084 15.1782 11.3035 12.1734 11.3035C9.17067 11.3035 7.7635 9.15882 6.73518 7.59428C6.27414 6.89287 5.8572 6.27635 5.45429 5.8842C5.20373 5.57089 4.81886 5.38088 4.41395 5.38088H4.39591C3.45779 5.3728 2.67202 4.7583 2.67202 4.03869Z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                                            lineNumber: 86,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                                        lineNumber: 85,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                                    lineNumber: 84,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                            lineNumber: 76,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                    lineNumber: 62,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-lg-3 col-md-6 col-sm-6 col-12",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "fun-fact-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "card-shape",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "250",
                                                height: "224",
                                                viewBox: "0 0 250 224",
                                                fill: "none",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M250 99C250 168.036 194.036 224 125 224C55.9644 224 0 168.036 0 99C0 29.9644 55.9644 0 125 0C194.036 0 250 29.9644 250 99Z",
                                                    fill: "#FED201"
                                                }, void 0, false, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                                    lineNumber: 101,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                                lineNumber: 95,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                            lineNumber: 94,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "info",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "odometer",
                                                        "data-count": "950",
                                                        children: "00"
                                                    }, void 0, false, {
                                                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                                        lineNumber: 109,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                                    lineNumber: 108,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Happy Clients"
                                                }, void 0, false, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                                    lineNumber: 113,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "shape",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "72",
                                                        height: "14",
                                                        viewBox: "0 0 72 14",
                                                        fill: "none",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M0 4.03869C0 6.07421 1.63168 7.75801 3.78653 8.03696C3.92484 8.21686 4.14935 8.53018 4.51217 9.08403C5.71889 10.9215 7.73744 14 12.1774 14C16.6174 14 18.636 10.9235 19.8427 9.08403C19.8748 9.03754 19.9109 8.98094 19.951 8.9203C19.9911 8.98094 20.0271 9.03754 20.0592 9.08403C21.2659 10.9215 23.2845 14 27.7245 14C32.1645 14 34.183 10.9215 35.3898 9.08403C35.4218 9.03754 35.4579 8.98094 35.496 8.9203C35.5361 8.98094 35.5722 9.0335 35.6022 9.08201C36.811 10.9235 38.8295 14 43.2695 14C47.7095 14 49.7281 10.9235 50.9348 9.08403C50.9669 9.03754 51.0029 8.98094 51.043 8.9203C51.0831 8.98094 51.1192 9.03754 51.1513 9.08403C52.358 10.9235 54.3765 14 58.8166 14C63.2566 14 65.2771 10.9235 66.4838 9.08403L65.9266 8.7121L66.4838 9.08403C66.8446 8.53422 67.0691 8.21889 67.2075 8.03898C69.3683 7.76408 71.002 6.08028 71.002 4.03869C71.002 1.81115 69.0235 0 66.5921 0C62.1521 0 60.1335 3.07652 58.9268 4.91597C58.8947 4.96448 58.8586 5.01906 58.8186 5.0797C58.7785 5.01906 58.7424 4.96246 58.7103 4.91597C57.5016 3.07652 55.481 0 51.041 0C46.601 0 44.5825 3.07652 43.3758 4.91597C43.3437 4.96246 43.3076 5.01906 43.2675 5.0797C43.2274 5.01906 43.1913 4.96448 43.1593 4.91597C41.9545 3.07652 39.936 0 35.496 0C31.058 0 29.0374 3.07652 27.8307 4.91395C27.7986 4.96246 27.7626 5.01704 27.7225 5.07768C27.6824 5.01704 27.6463 4.96246 27.6162 4.91597C26.4095 3.07652 24.389 0 19.951 0C15.511 0 13.4904 3.07652 12.2837 4.91597C12.2516 4.96448 12.2155 5.01906 12.1754 5.0797C12.1353 5.01906 12.0993 4.96246 12.0672 4.91597C10.8625 3.07652 8.84393 0 4.40392 0C1.97645 0 0 1.81115 0 4.03869ZM2.67202 4.03869C2.67202 3.30898 3.46581 2.69448 4.40392 2.69448C7.40669 2.69448 8.81386 4.83714 9.84018 6.40167C10.4255 7.29512 10.9126 8.00462 11.4097 8.35634C11.8667 8.67976 12.4821 8.67976 12.9412 8.35634C13.4383 8.00462 13.9274 7.29512 14.5127 6.40167C15.539 4.83714 16.9462 2.69448 19.951 2.69448C22.9557 2.69448 24.3609 4.83714 25.3872 6.40167C25.9725 7.29512 26.4596 8.00462 26.9567 8.35432C27.4138 8.67774 28.0292 8.67774 28.4882 8.35432C28.9853 8.00462 29.4724 7.2931 30.0577 6.39965C31.084 4.83511 32.4912 2.69246 35.494 2.69246C38.4968 2.69246 39.9039 4.83511 40.9322 6.39965C41.5176 7.29108 42.0047 8.0026 42.5018 8.35432C42.9608 8.67774 43.5762 8.67774 44.0332 8.35432C44.5304 8.0026 45.0174 7.2931 45.6048 6.39965C46.6311 4.83511 48.0383 2.69246 51.041 2.69246C54.0458 2.69246 55.451 4.83511 56.4793 6.39965C57.0666 7.2931 57.5537 8.00462 58.0508 8.35432C58.5099 8.67572 59.1252 8.67572 59.5803 8.35432C60.0774 8.00462 60.5665 7.2931 61.1518 6.39965C62.1781 4.83511 63.5853 2.69246 66.5901 2.69246C67.5322 2.69246 68.328 3.30898 68.328 4.03667C68.328 4.7583 67.5402 5.37482 66.6061 5.38088C66.3615 5.38291 66.121 5.45163 65.9125 5.58302C65.4254 5.88825 64.9885 6.47444 64.2528 7.5963C63.2265 9.16084 61.8193 11.3035 58.8145 11.3035C55.8118 11.3035 54.4046 9.16084 53.3763 7.5963C52.789 6.70286 52.3019 5.99134 51.8047 5.64164C51.3537 5.32429 50.7263 5.32429 50.2753 5.64164L50.2733 5.64366C49.7762 5.99336 49.2891 6.70488 48.7038 7.59833C47.6774 9.16286 46.2703 11.3055 43.2675 11.3055C40.2647 11.3055 38.8576 9.16286 37.8293 7.59833C37.2439 6.70488 36.7568 5.99538 36.2597 5.64366C35.8007 5.32024 35.1853 5.32024 34.7263 5.64366C34.2311 5.99336 33.744 6.70286 33.1567 7.5963C32.1304 9.16084 30.7232 11.3055 27.7205 11.3055C24.7157 11.3055 23.3085 9.16084 22.2822 7.59428C21.6969 6.70286 21.2098 5.99336 20.7147 5.64366C20.4862 5.48195 20.2176 5.4011 19.949 5.4011C19.6804 5.4011 19.4117 5.48195 19.1812 5.64366C18.6841 5.99336 18.197 6.70488 17.6117 7.5963C16.5854 9.16084 15.1782 11.3035 12.1734 11.3035C9.17067 11.3035 7.7635 9.15882 6.73518 7.59428C6.27414 6.89287 5.8572 6.27635 5.45429 5.8842C5.20373 5.57089 4.81886 5.38088 4.41395 5.38088H4.39591C3.45779 5.3728 2.67202 4.7583 2.67202 4.03869Z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                                            lineNumber: 116,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                                        lineNumber: 115,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                                    lineNumber: 114,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                            lineNumber: 107,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-lg-3 col-md-6 col-sm-6 col-12",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "fun-fact-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "card-shape",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "250",
                                                height: "225",
                                                viewBox: "0 0 250 225",
                                                fill: "none",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M250 125C250 194.036 194.036 225 125 225C55.9644 225 0 194.036 0 125C0 55.9644 55.9644 0 125 0C194.036 0 250 55.9644 250 125Z",
                                                    fill: "#7665FF"
                                                }, void 0, false, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                                    lineNumber: 131,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                                lineNumber: 125,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                            lineNumber: 124,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "info",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "odometer",
                                                            "data-count": "80",
                                                            children: "00"
                                                        }, void 0, false, {
                                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                                            lineNumber: 139,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "+"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                                    lineNumber: 138,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Skilled Experts"
                                                }, void 0, false, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                                    lineNumber: 144,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "shape",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "72",
                                                        height: "14",
                                                        viewBox: "0 0 72 14",
                                                        fill: "none",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M0 4.03869C0 6.07421 1.63168 7.75801 3.78653 8.03696C3.92484 8.21686 4.14935 8.53018 4.51217 9.08403C5.71889 10.9215 7.73744 14 12.1774 14C16.6174 14 18.636 10.9235 19.8427 9.08403C19.8748 9.03754 19.9109 8.98094 19.951 8.9203C19.9911 8.98094 20.0271 9.03754 20.0592 9.08403C21.2659 10.9215 23.2845 14 27.7245 14C32.1645 14 34.183 10.9215 35.3898 9.08403C35.4218 9.03754 35.4579 8.98094 35.496 8.9203C35.5361 8.98094 35.5722 9.0335 35.6022 9.08201C36.811 10.9235 38.8295 14 43.2695 14C47.7095 14 49.7281 10.9235 50.9348 9.08403C50.9669 9.03754 51.0029 8.98094 51.043 8.9203C51.0831 8.98094 51.1192 9.03754 51.1513 9.08403C52.358 10.9235 54.3765 14 58.8166 14C63.2566 14 65.2771 10.9235 66.4838 9.08403L65.9266 8.7121L66.4838 9.08403C66.8446 8.53422 67.0691 8.21889 67.2075 8.03898C69.3683 7.76408 71.002 6.08028 71.002 4.03869C71.002 1.81115 69.0235 0 66.5921 0C62.1521 0 60.1335 3.07652 58.9268 4.91597C58.8947 4.96448 58.8586 5.01906 58.8186 5.0797C58.7785 5.01906 58.7424 4.96246 58.7103 4.91597C57.5016 3.07652 55.481 0 51.041 0C46.601 0 44.5825 3.07652 43.3758 4.91597C43.3437 4.96246 43.3076 5.01906 43.2675 5.0797C43.2274 5.01906 43.1913 4.96448 43.1593 4.91597C41.9545 3.07652 39.936 0 35.496 0C31.058 0 29.0374 3.07652 27.8307 4.91395C27.7986 4.96246 27.7626 5.01704 27.7225 5.07768C27.6824 5.01704 27.6463 4.96246 27.6162 4.91597C26.4095 3.07652 24.389 0 19.951 0C15.511 0 13.4904 3.07652 12.2837 4.91597C12.2516 4.96448 12.2155 5.01906 12.1754 5.0797C12.1353 5.01906 12.0993 4.96246 12.0672 4.91597C10.8625 3.07652 8.84393 0 4.40392 0C1.97645 0 0 1.81115 0 4.03869ZM2.67202 4.03869C2.67202 3.30898 3.46581 2.69448 4.40392 2.69448C7.40669 2.69448 8.81386 4.83714 9.84018 6.40167C10.4255 7.29512 10.9126 8.00462 11.4097 8.35634C11.8667 8.67976 12.4821 8.67976 12.9412 8.35634C13.4383 8.00462 13.9274 7.29512 14.5127 6.40167C15.539 4.83714 16.9462 2.69448 19.951 2.69448C22.9557 2.69448 24.3609 4.83714 25.3872 6.40167C25.9725 7.29512 26.4596 8.00462 26.9567 8.35432C27.4138 8.67774 28.0292 8.67774 28.4882 8.35432C28.9853 8.00462 29.4724 7.2931 30.0577 6.39965C31.084 4.83511 32.4912 2.69246 35.494 2.69246C38.4968 2.69246 39.9039 4.83511 40.9322 6.39965C41.5176 7.29108 42.0047 8.0026 42.5018 8.35432C42.9608 8.67774 43.5762 8.67774 44.0332 8.35432C44.5304 8.0026 45.0174 7.2931 45.6048 6.39965C46.6311 4.83511 48.0383 2.69246 51.041 2.69246C54.0458 2.69246 55.451 4.83511 56.4793 6.39965C57.0666 7.2931 57.5537 8.00462 58.0508 8.35432C58.5099 8.67572 59.1252 8.67572 59.5803 8.35432C60.0774 8.00462 60.5665 7.2931 61.1518 6.39965C62.1781 4.83511 63.5853 2.69246 66.5901 2.69246C67.5322 2.69246 68.328 3.30898 68.328 4.03667C68.328 4.7583 67.5402 5.37482 66.6061 5.38088C66.3615 5.38291 66.121 5.45163 65.9125 5.58302C65.4254 5.88825 64.9885 6.47444 64.2528 7.5963C63.2265 9.16084 61.8193 11.3035 58.8145 11.3035C55.8118 11.3035 54.4046 9.16084 53.3763 7.5963C52.789 6.70286 52.3019 5.99134 51.8047 5.64164C51.3537 5.32429 50.7263 5.32429 50.2753 5.64164L50.2733 5.64366C49.7762 5.99336 49.2891 6.70488 48.7038 7.59833C47.6774 9.16286 46.2703 11.3055 43.2675 11.3055C40.2647 11.3055 38.8576 9.16286 37.8293 7.59833C37.2439 6.70488 36.7568 5.99538 36.2597 5.64366C35.8007 5.32024 35.1853 5.32024 34.7263 5.64366C34.2311 5.99336 33.744 6.70286 33.1567 7.5963C32.1304 9.16084 30.7232 11.3055 27.7205 11.3055C24.7157 11.3055 23.3085 9.16084 22.2822 7.59428C21.6969 6.70286 21.2098 5.99336 20.7147 5.64366C20.4862 5.48195 20.2176 5.4011 19.949 5.4011C19.6804 5.4011 19.4117 5.48195 19.1812 5.64366C18.6841 5.99336 18.197 6.70488 17.6117 7.5963C16.5854 9.16084 15.1782 11.3035 12.1734 11.3035C9.17067 11.3035 7.7635 9.15882 6.73518 7.59428C6.27414 6.89287 5.8572 6.27635 5.45429 5.8842C5.20373 5.57089 4.81886 5.38088 4.41395 5.38088H4.39591C3.45779 5.3728 2.67202 4.7583 2.67202 4.03869Z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                                            lineNumber: 147,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                                        lineNumber: 146,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                                    lineNumber: 145,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                            lineNumber: 137,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                lineNumber: 122,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-lg-3 col-md-6 col-sm-6 col-12",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "fun-fact-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "card-shape",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "226",
                                                height: "250",
                                                viewBox: "0 0 226 250",
                                                fill: "none",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M226 125C226 194.036 170.036 250 101 250C31.9644 250 0 194.036 0 125C0 55.9644 31.9644 0 101 0C170.036 0 226 55.9644 226 125Z",
                                                    fill: "#FE4040"
                                                }, void 0, false, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                                    lineNumber: 162,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            }, void 0, false, {
                                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                                lineNumber: 156,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                            lineNumber: 155,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "info",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "odometer",
                                                            "data-count": "700",
                                                            children: "00"
                                                        }, void 0, false, {
                                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                                            lineNumber: 170,
                                                            columnNumber: 21
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        "+"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                                    lineNumber: 169,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: "Returning Clients"
                                                }, void 0, false, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                                    lineNumber: 175,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "shape-2",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "72",
                                                        height: "14",
                                                        viewBox: "0 0 72 14",
                                                        fill: "none",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M0 4.03869C0 6.07421 1.63168 7.75801 3.78653 8.03696C3.92484 8.21686 4.14935 8.53018 4.51217 9.08403C5.71889 10.9215 7.73744 14 12.1774 14C16.6174 14 18.636 10.9235 19.8427 9.08403C19.8748 9.03754 19.9109 8.98094 19.951 8.9203C19.9911 8.98094 20.0271 9.03754 20.0592 9.08403C21.2659 10.9215 23.2845 14 27.7245 14C32.1645 14 34.183 10.9215 35.3898 9.08403C35.4218 9.03754 35.4579 8.98094 35.496 8.9203C35.5361 8.98094 35.5722 9.0335 35.6022 9.08201C36.811 10.9235 38.8295 14 43.2695 14C47.7095 14 49.7281 10.9235 50.9348 9.08403C50.9669 9.03754 51.0029 8.98094 51.043 8.9203C51.0831 8.98094 51.1192 9.03754 51.1513 9.08403C52.358 10.9235 54.3765 14 58.8166 14C63.2566 14 65.2771 10.9235 66.4838 9.08403L65.9266 8.7121L66.4838 9.08403C66.8446 8.53422 67.0691 8.21889 67.2075 8.03898C69.3683 7.76408 71.002 6.08028 71.002 4.03869C71.002 1.81115 69.0235 0 66.5921 0C62.1521 0 60.1335 3.07652 58.9268 4.91597C58.8947 4.96448 58.8586 5.01906 58.8186 5.0797C58.7785 5.01906 58.7424 4.96246 58.7103 4.91597C57.5016 3.07652 55.481 0 51.041 0C46.601 0 44.5825 3.07652 43.3758 4.91597C43.3437 4.96246 43.3076 5.01906 43.2675 5.0797C43.2274 5.01906 43.1913 4.96448 43.1593 4.91597C41.9545 3.07652 39.936 0 35.496 0C31.058 0 29.0374 3.07652 27.8307 4.91395C27.7986 4.96246 27.7626 5.01704 27.7225 5.07768C27.6824 5.01704 27.6463 4.96246 27.6162 4.91597C26.4095 3.07652 24.389 0 19.951 0C15.511 0 13.4904 3.07652 12.2837 4.91597C12.2516 4.96448 12.2155 5.01906 12.1754 5.0797C12.1353 5.01906 12.0993 4.96246 12.0672 4.91597C10.8625 3.07652 8.84393 0 4.40392 0C1.97645 0 0 1.81115 0 4.03869ZM2.67202 4.03869C2.67202 3.30898 3.46581 2.69448 4.40392 2.69448C7.40669 2.69448 8.81386 4.83714 9.84018 6.40167C10.4255 7.29512 10.9126 8.00462 11.4097 8.35634C11.8667 8.67976 12.4821 8.67976 12.9412 8.35634C13.4383 8.00462 13.9274 7.29512 14.5127 6.40167C15.539 4.83714 16.9462 2.69448 19.951 2.69448C22.9557 2.69448 24.3609 4.83714 25.3872 6.40167C25.9725 7.29512 26.4596 8.00462 26.9567 8.35432C27.4138 8.67774 28.0292 8.67774 28.4882 8.35432C28.9853 8.00462 29.4724 7.2931 30.0577 6.39965C31.084 4.83511 32.4912 2.69246 35.494 2.69246C38.4968 2.69246 39.9039 4.83511 40.9322 6.39965C41.5176 7.29108 42.0047 8.0026 42.5018 8.35432C42.9608 8.67774 43.5762 8.67774 44.0332 8.35432C44.5304 8.0026 45.0174 7.2931 45.6048 6.39965C46.6311 4.83511 48.0383 2.69246 51.041 2.69246C54.0458 2.69246 55.451 4.83511 56.4793 6.39965C57.0666 7.2931 57.5537 8.00462 58.0508 8.35432C58.5099 8.67572 59.1252 8.67572 59.5803 8.35432C60.0774 8.00462 60.5665 7.2931 61.1518 6.39965C62.1781 4.83511 63.5853 2.69246 66.5901 2.69246C67.5322 2.69246 68.328 3.30898 68.328 4.03667C68.328 4.7583 67.5402 5.37482 66.6061 5.38088C66.3615 5.38291 66.121 5.45163 65.9125 5.58302C65.4254 5.88825 64.9885 6.47444 64.2528 7.5963C63.2265 9.16084 61.8193 11.3035 58.8145 11.3035C55.8118 11.3035 54.4046 9.16084 53.3763 7.5963C52.789 6.70286 52.3019 5.99134 51.8047 5.64164C51.3537 5.32429 50.7263 5.32429 50.2753 5.64164L50.2733 5.64366C49.7762 5.99336 49.2891 6.70488 48.7038 7.59833C47.6774 9.16286 46.2703 11.3055 43.2675 11.3055C40.2647 11.3055 38.8576 9.16286 37.8293 7.59833C37.2439 6.70488 36.7568 5.99538 36.2597 5.64366C35.8007 5.32024 35.1853 5.32024 34.7263 5.64366C34.2311 5.99336 33.744 6.70286 33.1567 7.5963C32.1304 9.16084 30.7232 11.3055 27.7205 11.3055C24.7157 11.3055 23.3085 9.16084 22.2822 7.59428C21.6969 6.70286 21.2098 5.99336 20.7147 5.64366C20.4862 5.48195 20.2176 5.4011 19.949 5.4011C19.6804 5.4011 19.4117 5.48195 19.1812 5.64366C18.6841 5.99336 18.197 6.70488 17.6117 7.5963C16.5854 9.16084 15.1782 11.3035 12.1734 11.3035C9.17067 11.3035 7.7635 9.15882 6.73518 7.59428C6.27414 6.89287 5.8572 6.27635 5.45429 5.8842C5.20373 5.57089 4.81886 5.38088 4.41395 5.38088H4.39591C3.45779 5.3728 2.67202 4.7583 2.67202 4.03869Z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                                            lineNumber: 178,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    }, void 0, false, {
                                                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                                        lineNumber: 177,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                                    lineNumber: 176,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                            lineNumber: 168,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                    lineNumber: 154,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
                lineNumber: 56,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
            lineNumber: 55,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/NumberCount.jsx",
        lineNumber: 54,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = NumberCount;
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/TestimonialSection.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/swiper/swiper-react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/swiper/modules/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/swiper/modules/navigation.mjs [app-ssr] (ecmascript) <export default as Navigation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/swiper/modules/autoplay.mjs [app-ssr] (ecmascript) <export default as Autoplay>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/lucide-react/dist/esm/icons/quote.js [app-ssr] (ecmascript) <export default as Quote>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
"use client";
;
;
;
;
;
;
;
const TestimonialSection = ()=>{
    const testimonials = [
        {
            id: 1,
            name: "Hamid Rezaei",
            company: "Reforms Private Sector",
            content: "Working with this team has been an absolute game-changer for our business. Their attention to detail and creative solutions exceeded our expectations.",
            rating: 5
        },
        {
            id: 2,
            name: "Fareed Azizi",
            company: "IDS Afghanistan",
            content: "The level of professionalism and expertise demonstrated was remarkable. They delivered exactly what we needed on time and within budget.",
            rating: 5
        },
        {
            id: 3,
            name: "Rehmat Ullah Wardak",
            company: "OXFAM",
            content: "Outstanding service! The team went above and beyond to ensure our project was a success. I would highly recommend them to anyone.",
            rating: 4
        },
        {
            id: 4,
            name: "Omid Sharifi",
            company: "HealthNet",
            content: "A truly transformative experience. Their innovative approach helped us solve complex problems we've been struggling with for years.",
            rating: 5
        },
        {
            id: 5,
            name: "Tariq Barakzai",
            company: "Care International",
            content: "The collaboration was seamless and the results were beyond what we imagined. Exceptional work from an exceptional team.",
            rating: 5
        }
    ];
    const renderStars = (rating)=>{
        return Array.from({
            length: 5
        }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                size: 16,
                className: index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            }, index, false, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/TestimonialSection.jsx",
                lineNumber: 57,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-8 sm:py-12 md:py-16 bg-linear-to-br from-gray-50 to-gray-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 sm:px-6 lg:px-8 min-w-[83%]!",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-8 sm:mb-10 md:mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl! sm:text-4xl! md:text-5xl! lg:text-6xl! font-extrabold leading-none mb-5!",
                            children: "What Our Clients Say"
                        }, void 0, false, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/TestimonialSection.jsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-600 mb-4 text-base sm:text-lg! lg:text-xl! leading-none! max-sm:leading-tight!",
                            children: "Don't just take our word for it. Here's what our clients have to say about their experience working with us."
                        }, void 0, false, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/TestimonialSection.jsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/TestimonialSection.jsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 flex items-center min-w-full!",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Swiper"], {
                            modules: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"],
                                __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"]
                            ],
                            spaceBetween: 30,
                            slidesPerView: 3,
                            centeredSlides: true,
                            loop: true,
                            navigation: {
                                nextEl: ".swiper-button-next-custom",
                                prevEl: ".swiper-button-prev-custom"
                            },
                            pagination: {
                                clickable: true,
                                el: ".swiper-pagination-custom"
                            },
                            autoplay: {
                                delay: 3000,
                                disableOnInteraction: false
                            },
                            speed: 800,
                            breakpoints: {
                                320: {
                                    slidesPerView: 1,
                                    spaceBetween: 16
                                },
                                480: {
                                    slidesPerView: 1,
                                    spaceBetween: 20
                                },
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20
                                },
                                768: {
                                    slidesPerView: 1.5,
                                    spaceBetween: 25
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30
                                }
                            },
                            className: "pt-8! sm:pt-12! md:pt-16! pb-4 w-full min-h-[400px]! sm:min-h-[450px]! md:min-h-[500px]!",
                            children: testimonials.map((testimonial)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                                    children: ({ isActive })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 sm:p-5 md:p-6 h-full border border-gray-200 dark:border-gray-700 transition-all duration-500 ease-out ${isActive ? "scale-105 sm:scale-110 shadow-xl sm:shadow-2xl z-10" : "scale-90 opacity-60"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mb-3 sm:mb-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__["Quote"], {
                                                        className: "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-500 rotate-180"
                                                    }, void 0, false, {
                                                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/TestimonialSection.jsx",
                                                        lineNumber: 138,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                }, void 0, false, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/TestimonialSection.jsx",
                                                    lineNumber: 137,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-none!",
                                                    children: [
                                                        '"',
                                                        testimonial.content,
                                                        '"'
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/TestimonialSection.jsx",
                                                    lineNumber: 142,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center mb-4 sm:mb-6",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex space-x-1",
                                                            children: renderStars(testimonial.rating)
                                                        }, void 0, false, {
                                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/TestimonialSection.jsx",
                                                            lineNumber: 148,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "ml-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400",
                                                            children: [
                                                                testimonial.rating,
                                                                ".0"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/TestimonialSection.jsx",
                                                            lineNumber: 151,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/TestimonialSection.jsx",
                                                    lineNumber: 147,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3 sm:mr-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                                className: "w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/TestimonialSection.jsx",
                                                                lineNumber: 160,
                                                                columnNumber: 25
                                                            }, ("TURBOPACK compile-time value", void 0))
                                                        }, void 0, false, {
                                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/TestimonialSection.jsx",
                                                            lineNumber: 159,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-semibold text-gray-900 dark:text-white text-sm sm:text-base",
                                                                    children: testimonial.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/TestimonialSection.jsx",
                                                                    lineNumber: 164,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs sm:text-sm text-gray-500 dark:text-gray-400",
                                                                    children: testimonial.company
                                                                }, void 0, false, {
                                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/TestimonialSection.jsx",
                                                                    lineNumber: 167,
                                                                    columnNumber: 25
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/TestimonialSection.jsx",
                                                            lineNumber: 163,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/TestimonialSection.jsx",
                                                    lineNumber: 157,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/TestimonialSection.jsx",
                                            lineNumber: 129,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                }, testimonial.id, false, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/TestimonialSection.jsx",
                                    lineNumber: 127,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/TestimonialSection.jsx",
                            lineNumber: 83,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "swiper-button-prev-custom absolute -left-4! sm:left-1 md:left-2 top-1/2 -translate-y-5/6 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#3B82F6] rounded-full! shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700 dark:text-gray-300",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M15 19l-7-7 7-7"
                                }, void 0, false, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/TestimonialSection.jsx",
                                    lineNumber: 186,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/TestimonialSection.jsx",
                                lineNumber: 180,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/TestimonialSection.jsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "swiper-button-next-custom absolute -right-4! sm:right-1 md:right-2 top-1/2 -translate-y-5/6 z-20 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#3B82F6] rounded-full! shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700 dark:text-gray-300",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M9 5l7 7-7 7"
                                }, void 0, false, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/TestimonialSection.jsx",
                                    lineNumber: 201,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/TestimonialSection.jsx",
                                lineNumber: 195,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/TestimonialSection.jsx",
                            lineNumber: 194,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/TestimonialSection.jsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/TestimonialSection.jsx",
            lineNumber: 69,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/sections/TestimonialSection.jsx",
        lineNumber: 68,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = TestimonialSection;
}),
];

//# sourceMappingURL=vs_code_workspace_react%20work_company%20portfolio_frontend_0b996ac1._.js.map