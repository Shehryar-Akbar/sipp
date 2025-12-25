module.exports = [
"[project]/vs_code_workspace/react work/company portfolio/frontend/app/favicon.ico.mjs { IMAGE => \"[project]/vs_code_workspace/react work/company portfolio/frontend/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/app/favicon.ico.mjs { IMAGE => \"[project]/vs_code_workspace/react work/company portfolio/frontend/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/app/layout.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/app/layout.jsx [app-rsc] (ecmascript)"));
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/app/not-found.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/app/not-found.js [app-rsc] (ecmascript)"));
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/app/seo/seo.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/components/SEO.jsx
// Note: In App Router, we use metadata export instead of Head component
__turbopack_context__.s([
    "generateMetadata",
    ()=>generateMetadata
]);
function generateMetadata({ title, description, keywords, ogImage, ogType = 'website', twitterCard = 'summary_large_image', canonicalUrl, noindex = false }) {
    const siteUrl = 'https://yourwebsite.com';
    const siteName = 'Your Company Name';
    const twitterHandle = '@yourhandle';
    const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
    const defaultOgImage = `${siteUrl}/images/og-default.jpg`;
    const ogImageUrl = ogImage ? `${siteUrl}${ogImage}` : defaultOgImage;
    return {
        title,
        description,
        keywords: keywords?.split(', '),
        // Robots
        ...noindex && {
            robots: {
                index: false,
                follow: false
            }
        },
        // Canonical
        alternates: {
            canonical: fullCanonicalUrl
        },
        // Open Graph
        openGraph: {
            siteName,
            type: ogType,
            title,
            description,
            url: fullCanonicalUrl,
            images: [
                {
                    url: ogImageUrl,
                    width: 1200,
                    height: 630,
                    alt: title
                }
            ],
            locale: 'en_US'
        },
        // Twitter
        twitter: {
            card: twitterCard,
            site: twitterHandle,
            creator: twitterHandle,
            title,
            description,
            images: [
                ogImageUrl
            ]
        }
    };
}
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/app/seo/seoConfig.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultSEO",
    ()=>defaultSEO,
    "globalOgImage",
    ()=>globalOgImage,
    "seoConfig",
    ()=>seoConfig
]);
const seoConfig = {
    home: {
        title: 'SIPP – Professional Printing Press Services in Kabul, Afghanistan | Strength Innovation Printing Press',
        description: 'Leading printing press in Kabul, Afghanistan. SIPP offers high-quality printing services including business cards, brochures, banners, and custom printing solutions. Fast delivery across Afghanistan.',
        keywords: 'printing press Kabul, printing services Afghanistan, SIPP printing, commercial printing Kabul, digital printing Afghanistan, offset printing Kabul, business card printing Afghanistan, brochure printing Kabul',
        canonicalUrl: '/'
    },
    about: {
        title: 'About SIPP – Kabul’s Trusted Printing Press | Strength Innovation Printing Press',
        description: 'Learn about SIPP, Kabul’s premier printing press. We combine strength and innovation to deliver exceptional printing solutions across Afghanistan since our establishment.',
        keywords: 'about SIPP, printing company Kabul, Afghanistan printing press, professional printers Kabul, printing company history, SIPP Afghanistan',
        canonicalUrl: '/about'
    },
    services: {
        title: 'Printing Services in Kabul | Business Cards, Brochures, Banners | SIPP Afghanistan',
        description: 'Complete printing services in Kabul: business cards, letterheads, brochures, posters, banners, flyers, catalogs, and custom printing. Quality guaranteed by SIPP Afghanistan.',
        keywords: 'printing services Kabul, business card printing, brochure printing Afghanistan, banner printing Kabul, flyer printing, poster printing Afghanistan, letterhead printing, catalog printing Kabul, custom printing services',
        canonicalUrl: '/services'
    },
    portfolio: {
        title: 'Our Work – SIPP Printing Portfolio | Quality Printing Projects in Afghanistan',
        description: 'Explore SIPP’s printing portfolio showcasing our best work in Kabul and across Afghanistan. From corporate materials to marketing collateral – see our quality in action.',
        keywords: 'printing portfolio Afghanistan, SIPP work samples, printing projects Kabul, quality printing examples, printed materials Afghanistan, SIPP portfolio',
        canonicalUrl: '/portfolio'
    },
    clients: {
        title: 'Our Clients - Strength Innovation Printing Press | Trusted by Businesses in Afghanistan',
        description: 'Discover companies that trust Strength Innovation Printing Press (SIPP) for reliable printing solutions in Kabul and across Afghanistan.',
        keywords: 'printing clients Afghanistan, trusted printing press Kabul, SIPP customers, business printing partners, commercial printing Afghanistan',
        canonicalUrl: '/clients'
    },
    contact: {
        title: 'Contact SIPP Printing Press Kabul | Get Quote for Printing Services in Afghanistan',
        description: 'Contact SIPP for printing services in Kabul, Afghanistan. Call us for quotes, inquiries, or visit our printing press. Fast response and competitive pricing guaranteed.',
        keywords: 'contact printing press Kabul, printing quote Afghanistan, SIPP contact, printing press address Kabul, printing inquiry Afghanistan, order printing services',
        canonicalUrl: '/contact'
    },
    terms: {
        title: 'Terms & Conditions | SIPP Printing Press Afghanistan',
        description: 'Read SIPP’s terms and conditions for printing services in Afghanistan. Understand our policies, delivery terms, and service agreements.',
        keywords: 'printing terms conditions, SIPP policies, printing service agreement Afghanistan, printing press terms Kabul',
        canonicalUrl: '/terms'
    },
    privacy: {
        title: 'Privacy Policy | SIPP Printing Press Afghanistan',
        description: 'SIPP’s privacy policy outlines how we protect your information when using our printing services in Afghanistan. Your privacy is our priority.',
        keywords: 'printing privacy policy, SIPP privacy, data protection Afghanistan, customer privacy printing services',
        canonicalUrl: '/privacy'
    }
};
const globalOgImage = '/images/og-image.jpg';
const defaultSEO = {
    title: 'Your Company Name | Professional Web & App Development',
    description: 'Professional web and app development services to transform your business.',
    keywords: 'web development, app development, software development',
    canonicalUrl: '/'
};
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/app/portfolio/components/NewGallery.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectGallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/image.js [app-rsc] (ecmascript)");
;
;
const images = [
    "/portfolio/img1.jpg",
    "/portfolio/img2.jpg",
    "/portfolio/img3.jpg",
    "/portfolio/img4.jpg",
    "/portfolio/img5.jpg",
    "/portfolio/img6.jpg",
    "/portfolio/img7.jpg",
    "/portfolio/img8.jpg",
    "/portfolio/img9.jpg",
    "/portfolio/img10.jpg",
    "/portfolio/img3.jpg",
    "/portfolio/img4.jpg"
];
function ProjectGallery() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: " w-screen py-4 sm:h-screen sm:py-0 ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: " grid w-full h-full  grid-cols-1 gap-4 px-4  sm:grid-cols-2 sm:grid-rows-4 sm:gap-0 sm:px-0 md:grid-cols-3 md:grid-rows-4 lg:grid-cols-4 lg:grid-rows-3 ",
            children: images.slice(0, 12).map((src, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: " group relative overflow-hidden h-[300px] sm:h-auto ",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            src: src,
                            alt: `Project ${index + 1}`,
                            fill: true,
                            sizes: "(max-width: 640px) 100vw, 25vw",
                            className: " object-cover scale-110 transition-transform duration-[1800ms] ease-in-out group-hover:scale-100 "
                        }, void 0, false, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/portfolio/components/NewGallery.jsx",
                            lineNumber: 51,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: " pointer-events-none absolute inset-0 backdrop-blur-[2px] bg-[rgba(29,41,61,0.45)] outline-1 outline-white/40 `-outline-offset-4` ",
                            style: {
                                WebkitMask: "linear-gradient(#000 0 0), linear-gradient(#000 0 0)",
                                WebkitMaskComposite: "xor",
                                WebkitMaskRepeat: "no-repeat",
                                WebkitMaskPosition: "center",
                                WebkitMaskSize: "100% 100%, calc(100% - 24px) calc(100% - 24px)"
                            }
                        }, void 0, false, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/portfolio/components/NewGallery.jsx",
                            lineNumber: 65,
                            columnNumber: 13
                        }, this)
                    ]
                }, index, true, {
                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/portfolio/components/NewGallery.jsx",
                    lineNumber: 42,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/portfolio/components/NewGallery.jsx",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/portfolio/components/NewGallery.jsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/app/portfolio/components/AnimatedBackground.jsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/vs_code_workspace/react work/company portfolio/frontend/app/portfolio/components/AnimatedBackground.jsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/vs_code_workspace/react work/company portfolio/frontend/app/portfolio/components/AnimatedBackground.jsx <module evaluation>", "default");
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/app/portfolio/components/AnimatedBackground.jsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/vs_code_workspace/react work/company portfolio/frontend/app/portfolio/components/AnimatedBackground.jsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/vs_code_workspace/react work/company portfolio/frontend/app/portfolio/components/AnimatedBackground.jsx", "default");
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/app/portfolio/components/AnimatedBackground.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$portfolio$2f$components$2f$AnimatedBackground$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/app/portfolio/components/AnimatedBackground.jsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$portfolio$2f$components$2f$AnimatedBackground$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/app/portfolio/components/AnimatedBackground.jsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$portfolio$2f$components$2f$AnimatedBackground$2e$jsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/app/portfolio/components/ProjectHero.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$portfolio$2f$components$2f$AnimatedBackground$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/app/portfolio/components/AnimatedBackground.jsx [app-rsc] (ecmascript)");
;
;
;
;
const ProjectHero = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative h-screen overflow-hidden bg-[#FFD700]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$portfolio$2f$components$2f$AnimatedBackground$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/portfolio/components/ProjectHero.jsx",
                lineNumber: 8,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center z-20 pointer-events-none max-sm:items-start max-sm:mt-16 max-xl:items-start! max-xl:mt-40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hero-heading-container pointer-events-auto mx-auto text-center lg:max-w-[90%] 2xl:max-w-[75%] max-sm:px-4 max-sm:pt-20",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-bold text-white text-center leading-none drop-shadow-2xl mb-6 max-sm:text-5xl! sm:text-5xl! md:text-6xl! lg:text-8xl max-xl:text-7xl max-sm:text-left! xl:text-8xl!",
                            children: "Showcasing Excellence in Every Print! Our Work Speaks Volumes About Quality"
                        }, void 0, false, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/portfolio/components/ProjectHero.jsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg! sm:text-xl! md:text-3xl! max-sm:text-2xl! max-sm:text-left! max-sm:leading-[0.9]! text-white/80! lg:w-11/12  my-8! mx-auto drop-shadow-xl leading-7",
                            children: "Explore our completed projects showcasing our commitment to excellence. Each piece represents our promise to deliver superior quality printing."
                        }, void 0, false, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/portfolio/components/ProjectHero.jsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row gap-2 justify-center max-sm:mt-8 md:mt-20!",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                className: "border border-white text-white px-20 py-4 max-sm:py-3! max-sm:w-[80%]! max-sm:px-16 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600! transition-all inline-flex items-center justify-center shadow-xl backdrop-blur-sm bg-white/10",
                                children: "Start Your project"
                            }, void 0, false, {
                                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/portfolio/components/ProjectHero.jsx",
                                lineNumber: 25,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/portfolio/components/ProjectHero.jsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/portfolio/components/ProjectHero.jsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/portfolio/components/ProjectHero.jsx",
                lineNumber: 9,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/portfolio/components/ProjectHero.jsx",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ProjectHero;
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/app/portfolio/page.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$seo$2f$seo$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/app/seo/seo.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$seo$2f$seoConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/app/seo/seoConfig.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './components/ProjectGallery'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$portfolio$2f$components$2f$NewGallery$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/app/portfolio/components/NewGallery.jsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$portfolio$2f$components$2f$ProjectHero$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/app/portfolio/components/ProjectHero.jsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
const metadata = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$seo$2f$seo$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateMetadata"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$seo$2f$seoConfig$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seoConfig"].portfolio);
const page = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$portfolio$2f$components$2f$ProjectHero$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/portfolio/page.jsx",
                lineNumber: 11,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$portfolio$2f$components$2f$NewGallery$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/vs_code_workspace/react work/company portfolio/frontend/app/portfolio/page.jsx",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = page;
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/app/portfolio/page.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/app/portfolio/page.jsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b840cbec._.js.map