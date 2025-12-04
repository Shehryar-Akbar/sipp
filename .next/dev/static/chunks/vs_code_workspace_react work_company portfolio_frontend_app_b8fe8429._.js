(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/vs_code_workspace/react work/company portfolio/frontend/app/homeElements/ImageTrail.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ImageTrail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function ImageTrail({ images }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ImageTrail.useEffect": ()=>{
            const num = images.length;
            const positions = Array(num).fill({
                x: 0,
                y: 0
            });
            const speed = 0.18;
            // Responsive sizes
            const isMobile = window.innerWidth < 768;
            const imgSize = isMobile ? 70 : 120; // mobile vs desktop
            // Create images
            const els = images.map({
                "ImageTrail.useEffect.els": ()=>document.createElement("img")
            }["ImageTrail.useEffect.els"]);
            els.forEach({
                "ImageTrail.useEffect": (el, i)=>{
                    el.src = images[i];
                    el.style.position = "fixed";
                    el.style.width = imgSize + "px";
                    el.style.height = imgSize + "px";
                    el.style.objectFit = "cover";
                    el.style.borderRadius = "16px";
                    el.style.pointerEvents = "none";
                    el.style.opacity = "0";
                    el.style.transition = "opacity 0.25s ease-out";
                    el.style.zIndex = "50"; // safe with Tailwind UI
                    document.body.appendChild(el);
                }
            }["ImageTrail.useEffect"]);
            const move = {
                "ImageTrail.useEffect.move": (e)=>{
                    positions[0] = {
                        x: e.clientX,
                        y: e.clientY
                    };
                    for(let i = 1; i < num; i++){
                        positions[i] = {
                            x: positions[i].x + (positions[i - 1].x - positions[i].x) * speed,
                            y: positions[i].y + (positions[i - 1].y - positions[i].y) * speed
                        };
                    }
                    els.forEach({
                        "ImageTrail.useEffect.move": (el, i)=>{
                            el.style.transform = `translate(${positions[i].x}px, ${positions[i].y}px)`;
                            el.style.opacity = "1";
                        }
                    }["ImageTrail.useEffect.move"]);
                }
            }["ImageTrail.useEffect.move"];
            const leave = {
                "ImageTrail.useEffect.leave": ()=>{
                    els.forEach({
                        "ImageTrail.useEffect.leave": (el)=>{
                            el.style.opacity = "0";
                        }
                    }["ImageTrail.useEffect.leave"]);
                }
            }["ImageTrail.useEffect.leave"];
            window.addEventListener("mousemove", move);
            window.addEventListener("mouseleave", leave);
            return ({
                "ImageTrail.useEffect": ()=>{
                    window.removeEventListener("mousemove", move);
                    window.removeEventListener("mouseleave", leave);
                    els.forEach({
                        "ImageTrail.useEffect": (el)=>document.body.removeChild(el)
                    }["ImageTrail.useEffect"]);
                }
            })["ImageTrail.useEffect"];
        }
    }["ImageTrail.useEffect"], [
        images
    ]);
    return null;
}
_s(ImageTrail, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = ImageTrail;
var _c;
__turbopack_context__.k.register(_c, "ImageTrail");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$homeElements$2f$ImageTrail$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/app/homeElements/ImageTrail.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$components$2f$Header$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/app/components/Header.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// Hero Section
const HeroSection = ()=>{
    // const [currentSlide, setCurrentSlide] = useState(0);
    // const slides = [
    //   {
    //     title: "We Print What You Think",
    //     subtitle: "Afghanistan's Premier Printing Solutions Since 2002",
    //     bg: "from-blue-600 to-purple-700",
    //   },
    //   {
    //     title: "International Quality Standards",
    //     subtitle: "14 Years of Excellence & Innovation",
    //     bg: "from-purple-600 to-pink-600",
    //   },
    //   {
    //     title: "Trusted by 50+ Organizations",
    //     subtitle: "UNESCO, UNICEF & Leading NGOs",
    //     bg: "from-indigo-600 to-blue-600",
    //   },
    // ];
    // useEffect(() => {
    //   const timer = setInterval(() => {
    //     setCurrentSlide((prev) => (prev + 1) % slides.length);
    //   }, 5000);
    //   return () => clearInterval(timer);
    // }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "home",
        className: "relative h-screen overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$homeElements$2f$ImageTrail$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            images: [
                "https://picsum.photos/id/287/300/300",
                "https://picsum.photos/id/1001/300/300",
                "https://picsum.photos/id/1025/300/300",
                "https://picsum.photos/id/1026/300/300",
                "https://picsum.photos/id/1027/300/300",
                "https://picsum.photos/id/1028/300/300",
                "https://picsum.photos/id/1029/300/300",
                "https://picsum.photos/id/1030/300/300"
            ]
        }, void 0, false, {
            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
            lineNumber: 48,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
        lineNumber: 47,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = HeroSection;
// Stats Section
const StatsSection = ()=>{
    const stats = [
        {
            number: "14+",
            label: "Years Experience",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"]
        },
        {
            number: "1000+",
            label: "Projects Completed",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"]
        },
        {
            number: "50+",
            label: "Trusted Clients",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"]
        },
        {
            number: "9",
            label: "Offset Machines",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"]
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-20 bg-linear-to-br from-gray-900 to-gray-800 text-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 md:grid-cols-4 gap-8",
                children: stats.map((stat, index)=>{
                    const Icon = stat.icon;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    className: "w-8 h-8"
                                }, void 0, false, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                    lineNumber: 134,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                lineNumber: 133,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-4xl md:text-5xl font-bold mb-2",
                                children: stat.number
                            }, void 0, false, {
                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                lineNumber: 136,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-300",
                                children: stat.label
                            }, void 0, false, {
                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                lineNumber: 139,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, index, true, {
                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                        lineNumber: 132,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                lineNumber: 128,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
            lineNumber: 127,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
        lineNumber: 126,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = StatsSection;
// Services Section
const ServicesSection = ()=>{
    const services = [
        {
            title: "Offset Printing",
            description: "High-volume commercial printing with superior quality. 9 offset machines including Heidelberg 4-color presses.",
            features: [
                "Books & Magazines",
                "Brochures & Catalogs",
                "Large Runs (1000+)",
                "International Standards"
            ],
            linear: "from-blue-500 to-blue-700"
        },
        {
            title: "Digital Printing",
            description: "Quick turnaround for short runs and personalized materials with consistent quality.",
            features: [
                "Business Cards",
                "Flyers & Posters",
                "Small Runs (1-5000)",
                "Fast Delivery"
            ],
            linear: "from-purple-500 to-purple-700"
        },
        {
            title: "Promotional Products",
            description: "Custom branded merchandise on various materials. Silk screening and embroidery available.",
            features: [
                "T-shirts & Apparel",
                "Bags & Accessories",
                "Mugs & Gifts",
                "Corporate Branding"
            ],
            linear: "from-pink-500 to-pink-700"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "services",
        className: "py-20 bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4",
                            children: "Complete Printing Solutions"
                        }, void 0, false, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                            lineNumber: 194,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl text-gray-600 max-w-2xl mx-auto",
                            children: "From concept to completion, we handle every aspect of your printing needs"
                        }, void 0, false, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                            lineNumber: 197,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                    lineNumber: 193,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-3 gap-8",
                    children: services.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `h-48 bg-linear-to-br ${service.linear} p-8 flex items-center justify-center`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-3xl font-bold text-white text-center",
                                        children: service.title
                                    }, void 0, false, {
                                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                        lineNumber: 212,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                    lineNumber: 209,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 mb-6",
                                            children: service.description
                                        }, void 0, false, {
                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                            lineNumber: 217,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "space-y-3",
                                            children: service.features.map((feature, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: "flex items-start",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                            className: "w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                                            lineNumber: 221,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-gray-700",
                                                            children: feature
                                                        }, void 0, false, {
                                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                                            lineNumber: 222,
                                                            columnNumber: 23
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                                    lineNumber: 220,
                                                    columnNumber: 21
                                                }, ("TURBOPACK compile-time value", void 0)))
                                        }, void 0, false, {
                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                            lineNumber: 218,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                    lineNumber: 216,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, index, true, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                            lineNumber: 205,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                    lineNumber: 203,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
            lineNumber: 192,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
        lineNumber: 191,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c2 = ServicesSection;
// Products Section
const ProductsSection = ()=>{
    _s();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("business");
    const categories = [
        {
            id: "business",
            name: "Business"
        },
        {
            id: "marketing",
            name: "Marketing"
        },
        {
            id: "promotional",
            name: "Promotional"
        }
    ];
    const products = {
        business: [
            "Business Cards",
            "Letterheads",
            "Envelopes",
            "ID Cards",
            "Corporate Folders",
            "Notebooks",
            "Diaries",
            "Carbonless Forms"
        ],
        marketing: [
            "Brochures",
            "Flyers",
            "Catalogs",
            "Posters",
            "Banners",
            "Calendars",
            "Annual Reports",
            "Magazines"
        ],
        promotional: [
            "T-Shirts",
            "Bags",
            "Mugs",
            "Key Chains",
            "Wall Clocks",
            "Labels",
            "Flags",
            "Stickers"
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "products",
        className: "py-20 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4",
                            children: "Comprehensive Product Catalog"
                        }, void 0, false, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                            lineNumber: 282,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl text-gray-600 max-w-2xl mx-auto",
                            children: "From business essentials to promotional items—we print it all"
                        }, void 0, false, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                            lineNumber: 285,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                    lineNumber: 281,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap justify-center gap-4 mb-12",
                    children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveCategory(category.id),
                            className: `px-8 py-3 rounded-full font-medium transition-all ${activeCategory === category.id ? "bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`,
                            children: category.name
                        }, category.id, false, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                            lineNumber: 292,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                    lineNumber: 290,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 md:grid-cols-4 gap-6",
                    children: products[activeCategory].map((product, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-linear-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 bg-linear-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white text-2xl font-bold",
                                        children: product.charAt(0)
                                    }, void 0, false, {
                                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                        lineNumber: 313,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                    lineNumber: 312,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold text-gray-900",
                                    children: product
                                }, void 0, false, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                    lineNumber: 317,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, index, true, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                            lineNumber: 308,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                    lineNumber: 306,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
            lineNumber: 280,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
        lineNumber: 279,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ProductsSection, "p1Wc/dl/eGrAughkbYfayZp334E=");
_c3 = ProductsSection;
// Portfolio Section
const PortfolioSection = ()=>{
    const projects = [
        {
            client: "UNESCO",
            project: "Educational Books",
            quantity: "180,000",
            description: "Multi-language educational materials in Dari and Pashto",
            color: "from-blue-600 to-blue-800"
        },
        {
            client: "UNICEF",
            project: "Public Awareness Materials",
            quantity: "220,000",
            description: "140,000 brochures + 80,000 posters for health campaigns",
            color: "from-purple-600 to-purple-800"
        },
        {
            client: "Ministry of Education",
            project: "School Textbooks",
            quantity: "54,000",
            description: "Government educational materials with strict quality standards",
            color: "from-pink-600 to-pink-800"
        },
        {
            client: "SAYARA",
            project: "Promotional Stickers",
            quantity: "300,000",
            description: "Weather-resistant branded promotional materials",
            color: "from-indigo-600 to-indigo-800"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "portfolio",
        className: "py-20 bg-gray-900 text-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl font-bold mb-4",
                            children: "Proven Excellence"
                        }, void 0, false, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                            lineNumber: 364,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl text-gray-300 max-w-2xl mx-auto",
                            children: "Over 1,000 successful projects for national and international organizations"
                        }, void 0, false, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                            lineNumber: 367,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                    lineNumber: 363,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-2 gap-8",
                    children: projects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gray-800 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-transform",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `h-32 bg-linear-to-r ${project.color} p-6 flex items-center justify-between`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-2xl font-bold",
                                                    children: project.client
                                                }, void 0, false, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                                    lineNumber: 383,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-200",
                                                    children: project.project
                                                }, void 0, false, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                                    lineNumber: 384,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                            lineNumber: 382,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-right",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-3xl font-bold",
                                                    children: project.quantity
                                                }, void 0, false, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                                    lineNumber: 387,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-gray-200",
                                                    children: "copies"
                                                }, void 0, false, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                                    lineNumber: 388,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                            lineNumber: 386,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                    lineNumber: 379,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-300",
                                        children: project.description
                                    }, void 0, false, {
                                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                        lineNumber: 392,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                    lineNumber: 391,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, index, true, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                            lineNumber: 375,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                    lineNumber: 373,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
            lineNumber: 362,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
        lineNumber: 361,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c4 = PortfolioSection;
// About Section
const AboutSection = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        className: "py-20 bg-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid md:grid-cols-2 gap-12 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl md:text-5xl font-bold text-gray-900 mb-6",
                                children: "14 Years of Excellence in Afghan Printing Industry"
                            }, void 0, false, {
                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                lineNumber: 409,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-gray-600 mb-6",
                                children: "Founded in 2002 and registered with the Afghan Investment Support Agency (AISA), Strengths Innovations has become a recognized brand in Afghanistan's printing industry."
                            }, void 0, false, {
                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                lineNumber: 412,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-gray-600 mb-6",
                                children: 'Our "Zero Defect" quality philosophy and commitment to international standards has earned us the trust of major organizations including UNESCO, UNICEF, and the Ministry of Education.'
                            }, void 0, false, {
                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                lineNumber: 417,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-blue-600 mb-2",
                                                children: "Our Mission"
                                            }, void 0, false, {
                                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                                lineNumber: 425,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600",
                                                children: "Providing quality products backed by excellent service, always innovating to stay at the forefront of technology."
                                            }, void 0, false, {
                                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                                lineNumber: 428,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                        lineNumber: 424,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-purple-600 mb-2",
                                                children: "Our Vision"
                                            }, void 0, false, {
                                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                                lineNumber: 434,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600",
                                                children: "To become Afghanistan's nationally-recognized leader in printing and advertising."
                                            }, void 0, false, {
                                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                                lineNumber: 437,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                        lineNumber: 433,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                lineNumber: 423,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                        lineNumber: 408,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl h-96 flex items-center justify-center text-white",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-6xl font-bold mb-4",
                                        children: "2002"
                                    }, void 0, false, {
                                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                        lineNumber: 447,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl",
                                        children: "Since"
                                    }, void 0, false, {
                                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                        lineNumber: 448,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                lineNumber: 446,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                            lineNumber: 445,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                        lineNumber: 444,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                lineNumber: 407,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
            lineNumber: 406,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
        lineNumber: 405,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c5 = AboutSection;
// Contact Section
const ContactSection = ()=>{
    _s1();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: ""
    });
    const handleSubmit = (e)=>{
        e.preventDefault();
        // Connect to your Django backend here
        console.log("Form submitted:", formData);
        alert("Thank you! We will contact you soon.");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "py-20 bg-linear-to-br from-gray-50 to-gray-100",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4",
                            children: "Let's Create Something Exceptional"
                        }, void 0, false, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                            lineNumber: 482,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xl text-gray-600 max-w-2xl mx-auto",
                            children: "Get in touch for quotes, consultations, or questions"
                        }, void 0, false, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                            lineNumber: 485,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                    lineNumber: 481,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-3 gap-8 mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl p-6 shadow-lg text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                        className: "w-8 h-8 text-blue-600"
                                    }, void 0, false, {
                                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                        lineNumber: 493,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                    lineNumber: 492,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-gray-900 mb-2",
                                    children: "Phone"
                                }, void 0, false, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                    lineNumber: 495,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600",
                                    children: "+93 70 214 63 10"
                                }, void 0, false, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                    lineNumber: 496,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600",
                                    children: "+93 70 214 63 19"
                                }, void 0, false, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                    lineNumber: 497,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                            lineNumber: 491,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl p-6 shadow-lg text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                        className: "w-8 h-8 text-purple-600"
                                    }, void 0, false, {
                                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                        lineNumber: 501,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                    lineNumber: 500,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-gray-900 mb-2",
                                    children: "Email"
                                }, void 0, false, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                    lineNumber: 503,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 text-sm",
                                    children: "sales.sik@strengthsinnovations.com"
                                }, void 0, false, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                    lineNumber: 504,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                            lineNumber: 499,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-xl p-6 shadow-lg text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex items-center justify-center w-16 h-16 bg-pink-100 rounded-full mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                        className: "w-8 h-8 text-pink-600"
                                    }, void 0, false, {
                                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                        lineNumber: 510,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                    lineNumber: 509,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-gray-900 mb-2",
                                    children: "Location"
                                }, void 0, false, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                    lineNumber: 512,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600",
                                    children: "Kota Sangi, Kabul"
                                }, void 0, false, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                    lineNumber: 513,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600",
                                    children: "Afghanistan"
                                }, void 0, false, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                    lineNumber: 514,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                            lineNumber: 508,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                    lineNumber: 490,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-2xl shadow-xl p-8 md:p-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-2xl font-bold text-gray-900 mb-6",
                            children: "Request a Quote"
                        }, void 0, false, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                            lineNumber: 519,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-2 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            placeholder: "Full Name *",
                                            required: true,
                                            className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition",
                                            value: formData.name,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    name: e.target.value
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                            lineNumber: 524,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "email",
                                            placeholder: "Email Address *",
                                            required: true,
                                            className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition",
                                            value: formData.email,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    email: e.target.value
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                            lineNumber: 534,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                    lineNumber: 523,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid md:grid-cols-2 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "tel",
                                            placeholder: "Phone Number *",
                                            required: true,
                                            className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition",
                                            value: formData.phone,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    phone: e.target.value
                                                })
                                        }, void 0, false, {
                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                            lineNumber: 546,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            required: true,
                                            className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition",
                                            value: formData.projectType,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    projectType: e.target.value
                                                }),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Select Project Type *"
                                                }, void 0, false, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                                    lineNumber: 564,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "business-cards",
                                                    children: "Business Cards"
                                                }, void 0, false, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                                    lineNumber: 565,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "brochures",
                                                    children: "Brochures"
                                                }, void 0, false, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                                    lineNumber: 566,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "books",
                                                    children: "Books"
                                                }, void 0, false, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                                    lineNumber: 567,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "promotional",
                                                    children: "Promotional Items"
                                                }, void 0, false, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                                    lineNumber: 568,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "web-design",
                                                    children: "Web Design"
                                                }, void 0, false, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                                    lineNumber: 569,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "other",
                                                    children: "Other"
                                                }, void 0, false, {
                                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                                    lineNumber: 570,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                            lineNumber: 556,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                    lineNumber: 545,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    placeholder: "Project Details *",
                                    required: true,
                                    rows: "5",
                                    className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition",
                                    value: formData.message,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            message: e.target.value
                                        })
                                }, void 0, false, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                    lineNumber: 573,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleSubmit,
                                    className: "w-full bg-linear-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all",
                                    children: "Send Inquiry"
                                }, void 0, false, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                    lineNumber: 583,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                            lineNumber: 522,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                    lineNumber: 518,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
            lineNumber: 480,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
        lineNumber: 476,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(ContactSection, "QRdOjZWrYpuZfxUqsTh5Mw/pBZg=");
_c6 = ContactSection;
// Footer
const Footer = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-gray-900 text-white py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid md:grid-cols-4 gap-8 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-bold text-xl mb-4",
                                    children: "Strengths Innovations"
                                }, void 0, false, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                    lineNumber: 603,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-400",
                                    children: "Afghanistan's premier printing and design solutions since 2002."
                                }, void 0, false, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                    lineNumber: 604,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                            lineNumber: 602,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-bold mb-4",
                                    children: "Quick Links"
                                }, void 0, false, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                    lineNumber: 609,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-gray-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#about",
                                                className: "hover:text-white transition",
                                                children: "About Us"
                                            }, void 0, false, {
                                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                                lineNumber: 612,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                            lineNumber: 611,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#services",
                                                className: "hover:text-white transition",
                                                children: "Services"
                                            }, void 0, false, {
                                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                                lineNumber: 617,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                            lineNumber: 616,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#products",
                                                className: "hover:text-white transition",
                                                children: "Products"
                                            }, void 0, false, {
                                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                                lineNumber: 622,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                            lineNumber: 621,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#portfolio",
                                                className: "hover:text-white transition",
                                                children: "Portfolio"
                                            }, void 0, false, {
                                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                                lineNumber: 627,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                            lineNumber: 626,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                    lineNumber: 610,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                            lineNumber: 608,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-bold mb-4",
                                    children: "Services"
                                }, void 0, false, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                    lineNumber: 634,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-gray-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Offset Printing"
                                        }, void 0, false, {
                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                            lineNumber: 636,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Digital Printing"
                                        }, void 0, false, {
                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                            lineNumber: 637,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Graphic Design"
                                        }, void 0, false, {
                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                            lineNumber: 638,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "Web Design"
                                        }, void 0, false, {
                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                            lineNumber: 639,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                    lineNumber: 635,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                            lineNumber: 633,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-bold mb-4",
                                    children: "Contact"
                                }, void 0, false, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                    lineNumber: 643,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "space-y-2 text-gray-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "+93 70 214 63 10"
                                        }, void 0, false, {
                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                            lineNumber: 645,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: "+93 70 214 63 19"
                                        }, void 0, false, {
                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                            lineNumber: 646,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: "text-sm",
                                            children: "sales.sik@strengthsinnovations.com"
                                        }, void 0, false, {
                                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                            lineNumber: 647,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                                    lineNumber: 644,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                            lineNumber: 642,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                    lineNumber: 601,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-t border-gray-800 pt-8 text-center text-gray-400",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "© 2024 Strengths Innovations. All rights reserved. | Made with ❤️ in Afghanistan"
                    }, void 0, false, {
                        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                        lineNumber: 652,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                    lineNumber: 651,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
            lineNumber: 600,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
        lineNumber: 599,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c7 = Footer;
function App() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "font-sans",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroSection, {}, void 0, false, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                lineNumber: 666,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StatsSection, {}, void 0, false, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                lineNumber: 667,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ServicesSection, {}, void 0, false, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                lineNumber: 668,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProductsSection, {}, void 0, false, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                lineNumber: 669,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PortfolioSection, {}, void 0, false, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                lineNumber: 670,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AboutSection, {}, void 0, false, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                lineNumber: 671,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactSection, {}, void 0, false, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                lineNumber: 672,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Footer, {}, void 0, false, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
                lineNumber: 673,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/page.jsx",
        lineNumber: 665,
        columnNumber: 5
    }, this);
}
_c8 = App;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "HeroSection");
__turbopack_context__.k.register(_c1, "StatsSection");
__turbopack_context__.k.register(_c2, "ServicesSection");
__turbopack_context__.k.register(_c3, "ProductsSection");
__turbopack_context__.k.register(_c4, "PortfolioSection");
__turbopack_context__.k.register(_c5, "AboutSection");
__turbopack_context__.k.register(_c6, "ContactSection");
__turbopack_context__.k.register(_c7, "Footer");
__turbopack_context__.k.register(_c8, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=vs_code_workspace_react%20work_company%20portfolio_frontend_app_b8fe8429._.js.map