module.exports = [
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript, Next.js server utility)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript)"));}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript, Next.js server utility)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript)"));}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/instrumentation/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRevalidateReason",
    ()=>getRevalidateReason
]);
function getRevalidateReason(params) {
    if (params.isOnDemandRevalidate) {
        return 'on-demand';
    }
    if (params.isStaticGeneration) {
        return 'stale';
    }
    return undefined;
} //# sourceMappingURL=utils.js.map
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/app-render/interop-default.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Interop between "export default" and "module.exports".
 */ __turbopack_context__.s([
    "interopDefault",
    ()=>interopDefault
]);
function interopDefault(mod) {
    return mod.default || mod;
} //# sourceMappingURL=interop-default.js.map
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/app-render/strip-flight-headers.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stripFlightHeaders",
    ()=>stripFlightHeaders
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/client/components/app-router-headers.js [app-rsc] (ecmascript)");
;
function stripFlightHeaders(headers) {
    for (const header of __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FLIGHT_HEADERS"]){
        delete headers[header];
    }
} //# sourceMappingURL=strip-flight-headers.js.map
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeadersAdapter",
    ()=>HeadersAdapter,
    "ReadonlyHeadersError",
    ()=>ReadonlyHeadersError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/web/spec-extension/adapters/reflect.js [app-rsc] (ecmascript)");
;
class ReadonlyHeadersError extends Error {
    constructor(){
        super('Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers');
    }
    static callable() {
        throw new ReadonlyHeadersError();
    }
}
class HeadersAdapter extends Headers {
    constructor(headers){
        // We've already overridden the methods that would be called, so we're just
        // calling the super constructor to ensure that the instanceof check works.
        super();
        this.headers = new Proxy(headers, {
            get (target, prop, receiver) {
                // Because this is just an object, we expect that all "get" operations
                // are for properties. If it's a "get" for a symbol, we'll just return
                // the symbol.
                if (typeof prop === 'symbol') {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return undefined.
                if (typeof original === 'undefined') return;
                // If the original casing exists, return the value.
                return __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, original, receiver);
            },
            set (target, prop, value, receiver) {
                if (typeof prop === 'symbol') {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].set(target, prop, value, receiver);
                }
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, use the prop as the key.
                return __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].set(target, original ?? prop, value, receiver);
            },
            has (target, prop) {
                if (typeof prop === 'symbol') return __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].has(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return false.
                if (typeof original === 'undefined') return false;
                // If the original casing exists, return true.
                return __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].has(target, original);
            },
            deleteProperty (target, prop) {
                if (typeof prop === 'symbol') return __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].deleteProperty(target, prop);
                const lowercased = prop.toLowerCase();
                // Let's find the original casing of the key. This assumes that there is
                // no mixed case keys (e.g. "Content-Type" and "content-type") in the
                // headers object.
                const original = Object.keys(headers).find((o)=>o.toLowerCase() === lowercased);
                // If the original casing doesn't exist, return true.
                if (typeof original === 'undefined') return true;
                // If the original casing exists, delete the property.
                return __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].deleteProperty(target, original);
            }
        });
    }
    /**
   * Seals a Headers instance to prevent modification by throwing an error when
   * any mutating method is called.
   */ static seal(headers) {
        return new Proxy(headers, {
            get (target, prop, receiver) {
                switch(prop){
                    case 'append':
                    case 'delete':
                    case 'set':
                        return ReadonlyHeadersError.callable;
                    default:
                        return __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$reflect$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ReflectAdapter"].get(target, prop, receiver);
                }
            }
        });
    }
    /**
   * Merges a header value into a string. This stores multiple values as an
   * array, so we need to merge them into a string.
   *
   * @param value a header value
   * @returns a merged header value (a string)
   */ merge(value) {
        if (Array.isArray(value)) return value.join(', ');
        return value;
    }
    /**
   * Creates a Headers instance from a plain object or a Headers instance.
   *
   * @param headers a plain object or a Headers instance
   * @returns a headers instance
   */ static from(headers) {
        if (headers instanceof Headers) return headers;
        return new HeadersAdapter(headers);
    }
    append(name, value) {
        const existing = this.headers[name];
        if (typeof existing === 'string') {
            this.headers[name] = [
                existing,
                value
            ];
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            this.headers[name] = value;
        }
    }
    delete(name) {
        delete this.headers[name];
    }
    get(name) {
        const value = this.headers[name];
        if (typeof value !== 'undefined') return this.merge(value);
        return null;
    }
    has(name) {
        return typeof this.headers[name] !== 'undefined';
    }
    set(name, value) {
        this.headers[name] = value;
    }
    forEach(callbackfn, thisArg) {
        for (const [name, value] of this.entries()){
            callbackfn.call(thisArg, value, name, this);
        }
    }
    *entries() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(name);
            yield [
                name,
                value
            ];
        }
    }
    *keys() {
        for (const key of Object.keys(this.headers)){
            const name = key.toLowerCase();
            yield name;
        }
    }
    *values() {
        for (const key of Object.keys(this.headers)){
            // We assert here that this is a string because we got it from the
            // Object.keys() call above.
            const value = this.get(key);
            yield value;
        }
    }
    [Symbol.iterator]() {
        return this.entries();
    }
} //# sourceMappingURL=headers.js.map
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/api-utils/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ApiError",
    ()=>ApiError,
    "COOKIE_NAME_PRERENDER_BYPASS",
    ()=>COOKIE_NAME_PRERENDER_BYPASS,
    "COOKIE_NAME_PRERENDER_DATA",
    ()=>COOKIE_NAME_PRERENDER_DATA,
    "RESPONSE_LIMIT_DEFAULT",
    ()=>RESPONSE_LIMIT_DEFAULT,
    "SYMBOL_CLEARED_COOKIES",
    ()=>SYMBOL_CLEARED_COOKIES,
    "SYMBOL_PREVIEW_DATA",
    ()=>SYMBOL_PREVIEW_DATA,
    "checkIsOnDemandRevalidate",
    ()=>checkIsOnDemandRevalidate,
    "clearPreviewData",
    ()=>clearPreviewData,
    "redirect",
    ()=>redirect,
    "sendError",
    ()=>sendError,
    "sendStatusCode",
    ()=>sendStatusCode,
    "setLazyProp",
    ()=>setLazyProp,
    "wrapApiHandler",
    ()=>wrapApiHandler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/web/spec-extension/adapters/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/lib/trace/tracer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/lib/trace/constants.js [app-rsc] (ecmascript)");
;
;
;
;
function wrapApiHandler(page, handler) {
    return (...args)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTracer"])().setRootSpanAttribute('next.route', page);
        // Call API route method
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTracer"])().trace(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeSpan"].runHandler, {
            spanName: `executing api route (pages) ${page}`
        }, ()=>handler(...args));
    };
}
function sendStatusCode(res, statusCode) {
    res.statusCode = statusCode;
    return res;
}
function redirect(res, statusOrUrl, url) {
    if (typeof statusOrUrl === 'string') {
        url = statusOrUrl;
        statusOrUrl = 307;
    }
    if (typeof statusOrUrl !== 'number' || typeof url !== 'string') {
        throw Object.defineProperty(new Error(`Invalid redirect arguments. Please use a single argument URL, e.g. res.redirect('/destination') or use a status code and URL, e.g. res.redirect(307, '/destination').`), "__NEXT_ERROR_CODE", {
            value: "E389",
            enumerable: false,
            configurable: true
        });
    }
    res.writeHead(statusOrUrl, {
        Location: url
    });
    res.write(url);
    res.end();
    return res;
}
function checkIsOnDemandRevalidate(req, previewProps) {
    const headers = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HeadersAdapter"].from(req.headers);
    const previewModeId = headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PRERENDER_REVALIDATE_HEADER"]);
    const isOnDemandRevalidate = previewModeId === previewProps.previewModeId;
    const revalidateOnlyGenerated = headers.has(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER"]);
    return {
        isOnDemandRevalidate,
        revalidateOnlyGenerated
    };
}
const COOKIE_NAME_PRERENDER_BYPASS = `__prerender_bypass`;
const COOKIE_NAME_PRERENDER_DATA = `__next_preview_data`;
const RESPONSE_LIMIT_DEFAULT = 4 * 1024 * 1024;
const SYMBOL_PREVIEW_DATA = Symbol(COOKIE_NAME_PRERENDER_DATA);
const SYMBOL_CLEARED_COOKIES = Symbol(COOKIE_NAME_PRERENDER_BYPASS);
function clearPreviewData(res, options = {}) {
    if (SYMBOL_CLEARED_COOKIES in res) {
        return res;
    }
    const { serialize } = __turbopack_context__.r("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/compiled/cookie/index.js [app-rsc] (ecmascript)");
    const previous = res.getHeader('Set-Cookie');
    res.setHeader(`Set-Cookie`, [
        ...typeof previous === 'string' ? [
            previous
        ] : Array.isArray(previous) ? previous : [],
        serialize(COOKIE_NAME_PRERENDER_BYPASS, '', {
            // To delete a cookie, set `expires` to a date in the past:
            // https://tools.ietf.org/html/rfc6265#section-4.1.1
            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
            expires: new Date(0),
            httpOnly: true,
            sameSite: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'lax',
            secure: ("TURBOPACK compile-time value", "development") !== 'development',
            path: '/',
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        }),
        serialize(COOKIE_NAME_PRERENDER_DATA, '', {
            // To delete a cookie, set `expires` to a date in the past:
            // https://tools.ietf.org/html/rfc6265#section-4.1.1
            // `Max-Age: 0` is not valid, thus ignored, and the cookie is persisted.
            expires: new Date(0),
            httpOnly: true,
            sameSite: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'lax',
            secure: ("TURBOPACK compile-time value", "development") !== 'development',
            path: '/',
            ...options.path !== undefined ? {
                path: options.path
            } : undefined
        })
    ]);
    Object.defineProperty(res, SYMBOL_CLEARED_COOKIES, {
        value: true,
        enumerable: false
    });
    return res;
}
class ApiError extends Error {
    constructor(statusCode, message){
        super(message);
        this.statusCode = statusCode;
    }
}
function sendError(res, statusCode, message) {
    res.statusCode = statusCode;
    res.statusMessage = message;
    res.end(message);
}
function setLazyProp({ req }, prop, getter) {
    const opts = {
        configurable: true,
        enumerable: true
    };
    const optsReset = {
        ...opts,
        writable: true
    };
    Object.defineProperty(req, prop, {
        ...opts,
        get: ()=>{
            const value = getter();
            // we set the property on the object to avoid recalculating it
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
            return value;
        },
        set: (value)=>{
            Object.defineProperty(req, prop, {
                ...optsReset,
                value
            });
        }
    });
} //# sourceMappingURL=index.js.map
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/api-utils/get-cookie-parser.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Parse cookies from the `headers` of request
 * @param req request object
 */ __turbopack_context__.s([
    "getCookieParser",
    ()=>getCookieParser
]);
function getCookieParser(headers) {
    return function parseCookie() {
        const { cookie } = headers;
        if (!cookie) {
            return {};
        }
        const { parse: parseCookieFn } = __turbopack_context__.r("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/compiled/cookie/index.js [app-rsc] (ecmascript)");
        return parseCookieFn(Array.isArray(cookie) ? cookie.join('; ') : cookie);
    };
} //# sourceMappingURL=get-cookie-parser.js.map
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/base-http/index.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseNextRequest",
    ()=>BaseNextRequest,
    "BaseNextResponse",
    ()=>BaseNextResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/client/components/redirect-status-code.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$get$2d$cookie$2d$parser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/api-utils/get-cookie-parser.js [app-rsc] (ecmascript)");
;
;
class BaseNextRequest {
    constructor(method, url, body){
        this.method = method;
        this.url = url;
        this.body = body;
    }
    // Utils implemented using the abstract methods above
    get cookies() {
        if (this._cookies) return this._cookies;
        return this._cookies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$get$2d$cookie$2d$parser$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCookieParser"])(this.headers)();
    }
}
class BaseNextResponse {
    constructor(destination){
        this.destination = destination;
    }
    // Utils implemented using the abstract methods above
    redirect(destination, statusCode) {
        this.setHeader('Location', destination);
        this.statusCode = statusCode;
        // Since IE11 doesn't support the 308 header add backwards
        // compatibility using refresh header
        if (statusCode === __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RedirectStatusCode"].PermanentRedirect) {
            this.setHeader('Refresh', `0;url=${destination}`);
        }
        return this;
    }
} //# sourceMappingURL=index.js.map
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/base-http/node.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NodeNextRequest",
    ()=>NodeNextRequest,
    "NodeNextResponse",
    ()=>NodeNextResponse
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/api-utils/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/request-meta.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/base-http/index.js [app-rsc] (ecmascript)");
;
;
;
let prop;
class NodeNextRequest extends __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseNextRequest"] {
    static #_ = prop = _NEXT_REQUEST_META = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_REQUEST_META"];
    constructor(_req){
        var _this__req;
        super(_req.method.toUpperCase(), _req.url, _req), this._req = _req, this.headers = this._req.headers, this.fetchMetrics = (_this__req = this._req) == null ? void 0 : _this__req.fetchMetrics, this[_NEXT_REQUEST_META] = this._req[__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_REQUEST_META"]] || {}, this.streaming = false;
    }
    get originalRequest() {
        // Need to mimic these changes to the original req object for places where we use it:
        // render.tsx, api/ssg requests
        this._req[__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_REQUEST_META"]] = this[__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_REQUEST_META"]];
        this._req.url = this.url;
        this._req.cookies = this.cookies;
        return this._req;
    }
    set originalRequest(value) {
        this._req = value;
    }
    /**
   * Returns the request body as a Web Readable Stream. The body here can only
   * be read once as the body will start flowing as soon as the data handler
   * is attached.
   *
   * @internal
   */ stream() {
        if (this.streaming) {
            throw Object.defineProperty(new Error('Invariant: NodeNextRequest.stream() can only be called once'), "__NEXT_ERROR_CODE", {
                value: "E467",
                enumerable: false,
                configurable: true
            });
        }
        this.streaming = true;
        return new ReadableStream({
            start: (controller)=>{
                this._req.on('data', (chunk)=>{
                    controller.enqueue(new Uint8Array(chunk));
                });
                this._req.on('end', ()=>{
                    controller.close();
                });
                this._req.on('error', (err)=>{
                    controller.error(err);
                });
            }
        });
    }
}
class NodeNextResponse extends __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseNextResponse"] {
    get originalResponse() {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SYMBOL_CLEARED_COOKIES"] in this) {
            this._res[__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SYMBOL_CLEARED_COOKIES"]] = this[__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$api$2d$utils$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SYMBOL_CLEARED_COOKIES"]];
        }
        return this._res;
    }
    constructor(_res){
        super(_res), this._res = _res, this.textBody = undefined;
    }
    get sent() {
        return this._res.finished || this._res.headersSent;
    }
    get statusCode() {
        return this._res.statusCode;
    }
    set statusCode(value) {
        this._res.statusCode = value;
    }
    get statusMessage() {
        return this._res.statusMessage;
    }
    set statusMessage(value) {
        this._res.statusMessage = value;
    }
    setHeader(name, value) {
        this._res.setHeader(name, value);
        return this;
    }
    removeHeader(name) {
        this._res.removeHeader(name);
        return this;
    }
    getHeaderValues(name) {
        const values = this._res.getHeader(name);
        if (values === undefined) return undefined;
        return (Array.isArray(values) ? values : [
            values
        ]).map((value)=>value.toString());
    }
    hasHeader(name) {
        return this._res.hasHeader(name);
    }
    getHeader(name) {
        const values = this.getHeaderValues(name);
        return Array.isArray(values) ? values.join(',') : undefined;
    }
    getHeaders() {
        return this._res.getHeaders();
    }
    appendHeader(name, value) {
        const currentValues = this.getHeaderValues(name) ?? [];
        if (!currentValues.includes(value)) {
            this._res.setHeader(name, [
                ...currentValues,
                value
            ]);
        }
        return this;
    }
    body(value) {
        this.textBody = value;
        return this;
    }
    send() {
        this._res.end(this.textBody);
    }
    onClose(callback) {
        this.originalResponse.on('close', callback);
    }
}
var _NEXT_REQUEST_META; //# sourceMappingURL=node.js.map
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/lib/experimental/ppr.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * If set to `incremental`, only those leaf pages that export
 * `experimental_ppr = true` will have partial prerendering enabled. If any
 * page exports this value as `false` or does not export it at all will not
 * have partial prerendering enabled. If set to a boolean, the options for
 * `experimental_ppr` will be ignored.
 */ /**
 * Returns true if partial prerendering is enabled for the application. It does
 * not tell you if a given route has PPR enabled, as that requires analysis of
 * the route's configuration.
 *
 * @see {@link checkIsRoutePPREnabled} - for checking if a specific route has PPR enabled.
 */ __turbopack_context__.s([
    "checkIsAppPPREnabled",
    ()=>checkIsAppPPREnabled,
    "checkIsRoutePPREnabled",
    ()=>checkIsRoutePPREnabled
]);
function checkIsAppPPREnabled(config) {
    // If the config is undefined, partial prerendering is disabled.
    if (typeof config === 'undefined') return false;
    // If the config is a boolean, use it directly.
    if (typeof config === 'boolean') return config;
    // If the config is a string, it must be 'incremental' to enable partial
    // prerendering.
    if (config === 'incremental') return true;
    return false;
}
function checkIsRoutePPREnabled(config) {
    // If the config is undefined, partial prerendering is disabled.
    if (typeof config === 'undefined') return false;
    // If the config is a boolean, use it directly.
    if (typeof config === 'boolean') return config;
    return false;
} //# sourceMappingURL=ppr.js.map
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/compiled/zod/index.cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

(()=>{
    "use strict";
    var e = {
        629: function(e, t, s) {
            var r = this && this.__createBinding || (Object.create ? function(e, t, s, r) {
                if (r === undefined) r = s;
                var a = Object.getOwnPropertyDescriptor(t, s);
                if (!a || ("get" in a ? !t.__esModule : a.writable || a.configurable)) {
                    a = {
                        enumerable: true,
                        get: function() {
                            return t[s];
                        }
                    };
                }
                Object.defineProperty(e, r, a);
            } : function(e, t, s, r) {
                if (r === undefined) r = s;
                e[r] = t[s];
            });
            var a = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: true,
                    value: t
                });
            } : function(e, t) {
                e["default"] = t;
            });
            var n = this && this.__importStar || function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (e != null) {
                    for(var s in e)if (s !== "default" && Object.prototype.hasOwnProperty.call(e, s)) r(t, e, s);
                }
                a(t, e);
                return t;
            };
            var i = this && this.__exportStar || function(e, t) {
                for(var s in e)if (s !== "default" && !Object.prototype.hasOwnProperty.call(t, s)) r(t, e, s);
            };
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.z = void 0;
            const o = n(s(923));
            t.z = o;
            i(s(923), t);
            t["default"] = o;
        },
        348: (e, t, s)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ZodError = t.quotelessJson = t.ZodIssueCode = void 0;
            const r = s(709);
            t.ZodIssueCode = r.util.arrayToEnum([
                "invalid_type",
                "invalid_literal",
                "custom",
                "invalid_union",
                "invalid_union_discriminator",
                "invalid_enum_value",
                "unrecognized_keys",
                "invalid_arguments",
                "invalid_return_type",
                "invalid_date",
                "invalid_string",
                "too_small",
                "too_big",
                "invalid_intersection_types",
                "not_multiple_of",
                "not_finite"
            ]);
            const quotelessJson = (e)=>{
                const t = JSON.stringify(e, null, 2);
                return t.replace(/"([^"]+)":/g, "$1:");
            };
            t.quotelessJson = quotelessJson;
            class ZodError extends Error {
                get errors() {
                    return this.issues;
                }
                constructor(e){
                    super();
                    this.issues = [];
                    this.addIssue = (e)=>{
                        this.issues = [
                            ...this.issues,
                            e
                        ];
                    };
                    this.addIssues = (e = [])=>{
                        this.issues = [
                            ...this.issues,
                            ...e
                        ];
                    };
                    const t = new.target.prototype;
                    if (Object.setPrototypeOf) {
                        Object.setPrototypeOf(this, t);
                    } else {
                        this.__proto__ = t;
                    }
                    this.name = "ZodError";
                    this.issues = e;
                }
                format(e) {
                    const t = e || function(e) {
                        return e.message;
                    };
                    const s = {
                        _errors: []
                    };
                    const processError = (e)=>{
                        for (const r of e.issues){
                            if (r.code === "invalid_union") {
                                r.unionErrors.map(processError);
                            } else if (r.code === "invalid_return_type") {
                                processError(r.returnTypeError);
                            } else if (r.code === "invalid_arguments") {
                                processError(r.argumentsError);
                            } else if (r.path.length === 0) {
                                s._errors.push(t(r));
                            } else {
                                let e = s;
                                let a = 0;
                                while(a < r.path.length){
                                    const s = r.path[a];
                                    const n = a === r.path.length - 1;
                                    if (!n) {
                                        e[s] = e[s] || {
                                            _errors: []
                                        };
                                    } else {
                                        e[s] = e[s] || {
                                            _errors: []
                                        };
                                        e[s]._errors.push(t(r));
                                    }
                                    e = e[s];
                                    a++;
                                }
                            }
                        }
                    };
                    processError(this);
                    return s;
                }
                static assert(e) {
                    if (!(e instanceof ZodError)) {
                        throw new Error(`Not a ZodError: ${e}`);
                    }
                }
                toString() {
                    return this.message;
                }
                get message() {
                    return JSON.stringify(this.issues, r.util.jsonStringifyReplacer, 2);
                }
                get isEmpty() {
                    return this.issues.length === 0;
                }
                flatten(e = (e)=>e.message) {
                    const t = {};
                    const s = [];
                    for (const r of this.issues){
                        if (r.path.length > 0) {
                            const s = r.path[0];
                            t[s] = t[s] || [];
                            t[s].push(e(r));
                        } else {
                            s.push(e(r));
                        }
                    }
                    return {
                        formErrors: s,
                        fieldErrors: t
                    };
                }
                get formErrors() {
                    return this.flatten();
                }
            }
            t.ZodError = ZodError;
            ZodError.create = (e)=>{
                const t = new ZodError(e);
                return t;
            };
        },
        61: function(e, t, s) {
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            };
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.defaultErrorMap = void 0;
            t.setErrorMap = setErrorMap;
            t.getErrorMap = getErrorMap;
            const a = r(s(871));
            t.defaultErrorMap = a.default;
            let n = a.default;
            function setErrorMap(e) {
                n = e;
            }
            function getErrorMap() {
                return n;
            }
        },
        923: function(e, t, s) {
            var r = this && this.__createBinding || (Object.create ? function(e, t, s, r) {
                if (r === undefined) r = s;
                var a = Object.getOwnPropertyDescriptor(t, s);
                if (!a || ("get" in a ? !t.__esModule : a.writable || a.configurable)) {
                    a = {
                        enumerable: true,
                        get: function() {
                            return t[s];
                        }
                    };
                }
                Object.defineProperty(e, r, a);
            } : function(e, t, s, r) {
                if (r === undefined) r = s;
                e[r] = t[s];
            });
            var a = this && this.__exportStar || function(e, t) {
                for(var s in e)if (s !== "default" && !Object.prototype.hasOwnProperty.call(t, s)) r(t, e, s);
            };
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            a(s(61), t);
            a(s(818), t);
            a(s(515), t);
            a(s(709), t);
            a(s(155), t);
            a(s(348), t);
        },
        538: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.errorUtil = void 0;
            var s;
            (function(e) {
                e.errToObj = (e)=>typeof e === "string" ? {
                        message: e
                    } : e || {};
                e.toString = (e)=>typeof e === "string" ? e : e?.message;
            })(s || (t.errorUtil = s = {}));
        },
        818: function(e, t, s) {
            var r = this && this.__importDefault || function(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            };
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.isAsync = t.isValid = t.isDirty = t.isAborted = t.OK = t.DIRTY = t.INVALID = t.ParseStatus = t.EMPTY_PATH = t.makeIssue = void 0;
            t.addIssueToContext = addIssueToContext;
            const a = s(61);
            const n = r(s(871));
            const makeIssue = (e)=>{
                const { data: t, path: s, errorMaps: r, issueData: a } = e;
                const n = [
                    ...s,
                    ...a.path || []
                ];
                const i = {
                    ...a,
                    path: n
                };
                if (a.message !== undefined) {
                    return {
                        ...a,
                        path: n,
                        message: a.message
                    };
                }
                let o = "";
                const d = r.filter((e)=>!!e).slice().reverse();
                for (const e of d){
                    o = e(i, {
                        data: t,
                        defaultError: o
                    }).message;
                }
                return {
                    ...a,
                    path: n,
                    message: o
                };
            };
            t.makeIssue = makeIssue;
            t.EMPTY_PATH = [];
            function addIssueToContext(e, s) {
                const r = (0, a.getErrorMap)();
                const i = (0, t.makeIssue)({
                    issueData: s,
                    data: e.data,
                    path: e.path,
                    errorMaps: [
                        e.common.contextualErrorMap,
                        e.schemaErrorMap,
                        r,
                        r === n.default ? undefined : n.default
                    ].filter((e)=>!!e)
                });
                e.common.issues.push(i);
            }
            class ParseStatus {
                constructor(){
                    this.value = "valid";
                }
                dirty() {
                    if (this.value === "valid") this.value = "dirty";
                }
                abort() {
                    if (this.value !== "aborted") this.value = "aborted";
                }
                static mergeArray(e, s) {
                    const r = [];
                    for (const a of s){
                        if (a.status === "aborted") return t.INVALID;
                        if (a.status === "dirty") e.dirty();
                        r.push(a.value);
                    }
                    return {
                        status: e.value,
                        value: r
                    };
                }
                static async mergeObjectAsync(e, t) {
                    const s = [];
                    for (const e of t){
                        const t = await e.key;
                        const r = await e.value;
                        s.push({
                            key: t,
                            value: r
                        });
                    }
                    return ParseStatus.mergeObjectSync(e, s);
                }
                static mergeObjectSync(e, s) {
                    const r = {};
                    for (const a of s){
                        const { key: s, value: n } = a;
                        if (s.status === "aborted") return t.INVALID;
                        if (n.status === "aborted") return t.INVALID;
                        if (s.status === "dirty") e.dirty();
                        if (n.status === "dirty") e.dirty();
                        if (s.value !== "__proto__" && (typeof n.value !== "undefined" || a.alwaysSet)) {
                            r[s.value] = n.value;
                        }
                    }
                    return {
                        status: e.value,
                        value: r
                    };
                }
            }
            t.ParseStatus = ParseStatus;
            t.INVALID = Object.freeze({
                status: "aborted"
            });
            const DIRTY = (e)=>({
                    status: "dirty",
                    value: e
                });
            t.DIRTY = DIRTY;
            const OK = (e)=>({
                    status: "valid",
                    value: e
                });
            t.OK = OK;
            const isAborted = (e)=>e.status === "aborted";
            t.isAborted = isAborted;
            const isDirty = (e)=>e.status === "dirty";
            t.isDirty = isDirty;
            const isValid = (e)=>e.status === "valid";
            t.isValid = isValid;
            const isAsync = (e)=>typeof Promise !== "undefined" && e instanceof Promise;
            t.isAsync = isAsync;
        },
        515: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
        },
        709: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.getParsedType = t.ZodParsedType = t.objectUtil = t.util = void 0;
            var s;
            (function(e) {
                e.assertEqual = (e)=>{};
                function assertIs(e) {}
                e.assertIs = assertIs;
                function assertNever(e) {
                    throw new Error;
                }
                e.assertNever = assertNever;
                e.arrayToEnum = (e)=>{
                    const t = {};
                    for (const s of e){
                        t[s] = s;
                    }
                    return t;
                };
                e.getValidEnumValues = (t)=>{
                    const s = e.objectKeys(t).filter((e)=>typeof t[t[e]] !== "number");
                    const r = {};
                    for (const e of s){
                        r[e] = t[e];
                    }
                    return e.objectValues(r);
                };
                e.objectValues = (t)=>e.objectKeys(t).map(function(e) {
                        return t[e];
                    });
                e.objectKeys = typeof Object.keys === "function" ? (e)=>Object.keys(e) : (e)=>{
                    const t = [];
                    for(const s in e){
                        if (Object.prototype.hasOwnProperty.call(e, s)) {
                            t.push(s);
                        }
                    }
                    return t;
                };
                e.find = (e, t)=>{
                    for (const s of e){
                        if (t(s)) return s;
                    }
                    return undefined;
                };
                e.isInteger = typeof Number.isInteger === "function" ? (e)=>Number.isInteger(e) : (e)=>typeof e === "number" && Number.isFinite(e) && Math.floor(e) === e;
                function joinValues(e, t = " | ") {
                    return e.map((e)=>typeof e === "string" ? `'${e}'` : e).join(t);
                }
                e.joinValues = joinValues;
                e.jsonStringifyReplacer = (e, t)=>{
                    if (typeof t === "bigint") {
                        return t.toString();
                    }
                    return t;
                };
            })(s || (t.util = s = {}));
            var r;
            (function(e) {
                e.mergeShapes = (e, t)=>({
                        ...e,
                        ...t
                    });
            })(r || (t.objectUtil = r = {}));
            t.ZodParsedType = s.arrayToEnum([
                "string",
                "nan",
                "number",
                "integer",
                "float",
                "boolean",
                "date",
                "bigint",
                "symbol",
                "function",
                "undefined",
                "null",
                "array",
                "object",
                "unknown",
                "promise",
                "void",
                "never",
                "map",
                "set"
            ]);
            const getParsedType = (e)=>{
                const s = typeof e;
                switch(s){
                    case "undefined":
                        return t.ZodParsedType.undefined;
                    case "string":
                        return t.ZodParsedType.string;
                    case "number":
                        return Number.isNaN(e) ? t.ZodParsedType.nan : t.ZodParsedType.number;
                    case "boolean":
                        return t.ZodParsedType.boolean;
                    case "function":
                        return t.ZodParsedType.function;
                    case "bigint":
                        return t.ZodParsedType.bigint;
                    case "symbol":
                        return t.ZodParsedType.symbol;
                    case "object":
                        if (Array.isArray(e)) {
                            return t.ZodParsedType.array;
                        }
                        if (e === null) {
                            return t.ZodParsedType.null;
                        }
                        if (e.then && typeof e.then === "function" && e.catch && typeof e.catch === "function") {
                            return t.ZodParsedType.promise;
                        }
                        if (typeof Map !== "undefined" && e instanceof Map) {
                            return t.ZodParsedType.map;
                        }
                        if (typeof Set !== "undefined" && e instanceof Set) {
                            return t.ZodParsedType.set;
                        }
                        if (typeof Date !== "undefined" && e instanceof Date) {
                            return t.ZodParsedType.date;
                        }
                        return t.ZodParsedType.object;
                    default:
                        return t.ZodParsedType.unknown;
                }
            };
            t.getParsedType = getParsedType;
        },
        871: (e, t, s)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            const r = s(348);
            const a = s(709);
            const errorMap = (e, t)=>{
                let s;
                switch(e.code){
                    case r.ZodIssueCode.invalid_type:
                        if (e.received === a.ZodParsedType.undefined) {
                            s = "Required";
                        } else {
                            s = `Expected ${e.expected}, received ${e.received}`;
                        }
                        break;
                    case r.ZodIssueCode.invalid_literal:
                        s = `Invalid literal value, expected ${JSON.stringify(e.expected, a.util.jsonStringifyReplacer)}`;
                        break;
                    case r.ZodIssueCode.unrecognized_keys:
                        s = `Unrecognized key(s) in object: ${a.util.joinValues(e.keys, ", ")}`;
                        break;
                    case r.ZodIssueCode.invalid_union:
                        s = `Invalid input`;
                        break;
                    case r.ZodIssueCode.invalid_union_discriminator:
                        s = `Invalid discriminator value. Expected ${a.util.joinValues(e.options)}`;
                        break;
                    case r.ZodIssueCode.invalid_enum_value:
                        s = `Invalid enum value. Expected ${a.util.joinValues(e.options)}, received '${e.received}'`;
                        break;
                    case r.ZodIssueCode.invalid_arguments:
                        s = `Invalid function arguments`;
                        break;
                    case r.ZodIssueCode.invalid_return_type:
                        s = `Invalid function return type`;
                        break;
                    case r.ZodIssueCode.invalid_date:
                        s = `Invalid date`;
                        break;
                    case r.ZodIssueCode.invalid_string:
                        if (typeof e.validation === "object") {
                            if ("includes" in e.validation) {
                                s = `Invalid input: must include "${e.validation.includes}"`;
                                if (typeof e.validation.position === "number") {
                                    s = `${s} at one or more positions greater than or equal to ${e.validation.position}`;
                                }
                            } else if ("startsWith" in e.validation) {
                                s = `Invalid input: must start with "${e.validation.startsWith}"`;
                            } else if ("endsWith" in e.validation) {
                                s = `Invalid input: must end with "${e.validation.endsWith}"`;
                            } else {
                                a.util.assertNever(e.validation);
                            }
                        } else if (e.validation !== "regex") {
                            s = `Invalid ${e.validation}`;
                        } else {
                            s = "Invalid";
                        }
                        break;
                    case r.ZodIssueCode.too_small:
                        if (e.type === "array") s = `Array must contain ${e.exact ? "exactly" : e.inclusive ? `at least` : `more than`} ${e.minimum} element(s)`;
                        else if (e.type === "string") s = `String must contain ${e.exact ? "exactly" : e.inclusive ? `at least` : `over`} ${e.minimum} character(s)`;
                        else if (e.type === "number") s = `Number must be ${e.exact ? `exactly equal to ` : e.inclusive ? `greater than or equal to ` : `greater than `}${e.minimum}`;
                        else if (e.type === "bigint") s = `Number must be ${e.exact ? `exactly equal to ` : e.inclusive ? `greater than or equal to ` : `greater than `}${e.minimum}`;
                        else if (e.type === "date") s = `Date must be ${e.exact ? `exactly equal to ` : e.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(e.minimum))}`;
                        else s = "Invalid input";
                        break;
                    case r.ZodIssueCode.too_big:
                        if (e.type === "array") s = `Array must contain ${e.exact ? `exactly` : e.inclusive ? `at most` : `less than`} ${e.maximum} element(s)`;
                        else if (e.type === "string") s = `String must contain ${e.exact ? `exactly` : e.inclusive ? `at most` : `under`} ${e.maximum} character(s)`;
                        else if (e.type === "number") s = `Number must be ${e.exact ? `exactly` : e.inclusive ? `less than or equal to` : `less than`} ${e.maximum}`;
                        else if (e.type === "bigint") s = `BigInt must be ${e.exact ? `exactly` : e.inclusive ? `less than or equal to` : `less than`} ${e.maximum}`;
                        else if (e.type === "date") s = `Date must be ${e.exact ? `exactly` : e.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(e.maximum))}`;
                        else s = "Invalid input";
                        break;
                    case r.ZodIssueCode.custom:
                        s = `Invalid input`;
                        break;
                    case r.ZodIssueCode.invalid_intersection_types:
                        s = `Intersection results could not be merged`;
                        break;
                    case r.ZodIssueCode.not_multiple_of:
                        s = `Number must be a multiple of ${e.multipleOf}`;
                        break;
                    case r.ZodIssueCode.not_finite:
                        s = "Number must be finite";
                        break;
                    default:
                        s = t.defaultError;
                        a.util.assertNever(e);
                }
                return {
                    message: s
                };
            };
            t["default"] = errorMap;
        },
        155: (e, t, s)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.discriminatedUnion = t.date = t.boolean = t.bigint = t.array = t.any = t.coerce = t.ZodFirstPartyTypeKind = t.late = t.ZodSchema = t.Schema = t.ZodReadonly = t.ZodPipeline = t.ZodBranded = t.BRAND = t.ZodNaN = t.ZodCatch = t.ZodDefault = t.ZodNullable = t.ZodOptional = t.ZodTransformer = t.ZodEffects = t.ZodPromise = t.ZodNativeEnum = t.ZodEnum = t.ZodLiteral = t.ZodLazy = t.ZodFunction = t.ZodSet = t.ZodMap = t.ZodRecord = t.ZodTuple = t.ZodIntersection = t.ZodDiscriminatedUnion = t.ZodUnion = t.ZodObject = t.ZodArray = t.ZodVoid = t.ZodNever = t.ZodUnknown = t.ZodAny = t.ZodNull = t.ZodUndefined = t.ZodSymbol = t.ZodDate = t.ZodBoolean = t.ZodBigInt = t.ZodNumber = t.ZodString = t.ZodType = void 0;
            t.NEVER = t["void"] = t.unknown = t.union = t.undefined = t.tuple = t.transformer = t.symbol = t.string = t.strictObject = t.set = t.record = t.promise = t.preprocess = t.pipeline = t.ostring = t.optional = t.onumber = t.oboolean = t.object = t.number = t.nullable = t["null"] = t.never = t.nativeEnum = t.nan = t.map = t.literal = t.lazy = t.intersection = t["instanceof"] = t["function"] = t["enum"] = t.effect = void 0;
            t.datetimeRegex = datetimeRegex;
            t.custom = custom;
            const r = s(348);
            const a = s(61);
            const n = s(538);
            const i = s(818);
            const o = s(709);
            class ParseInputLazyPath {
                constructor(e, t, s, r){
                    this._cachedPath = [];
                    this.parent = e;
                    this.data = t;
                    this._path = s;
                    this._key = r;
                }
                get path() {
                    if (!this._cachedPath.length) {
                        if (Array.isArray(this._key)) {
                            this._cachedPath.push(...this._path, ...this._key);
                        } else {
                            this._cachedPath.push(...this._path, this._key);
                        }
                    }
                    return this._cachedPath;
                }
            }
            const handleResult = (e, t)=>{
                if ((0, i.isValid)(t)) {
                    return {
                        success: true,
                        data: t.value
                    };
                } else {
                    if (!e.common.issues.length) {
                        throw new Error("Validation failed but no issues detected.");
                    }
                    return {
                        success: false,
                        get error () {
                            if (this._error) return this._error;
                            const t = new r.ZodError(e.common.issues);
                            this._error = t;
                            return this._error;
                        }
                    };
                }
            };
            function processCreateParams(e) {
                if (!e) return {};
                const { errorMap: t, invalid_type_error: s, required_error: r, description: a } = e;
                if (t && (s || r)) {
                    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
                }
                if (t) return {
                    errorMap: t,
                    description: a
                };
                const customMap = (t, a)=>{
                    const { message: n } = e;
                    if (t.code === "invalid_enum_value") {
                        return {
                            message: n ?? a.defaultError
                        };
                    }
                    if (typeof a.data === "undefined") {
                        return {
                            message: n ?? r ?? a.defaultError
                        };
                    }
                    if (t.code !== "invalid_type") return {
                        message: a.defaultError
                    };
                    return {
                        message: n ?? s ?? a.defaultError
                    };
                };
                return {
                    errorMap: customMap,
                    description: a
                };
            }
            class ZodType {
                get description() {
                    return this._def.description;
                }
                _getType(e) {
                    return (0, o.getParsedType)(e.data);
                }
                _getOrReturnCtx(e, t) {
                    return t || {
                        common: e.parent.common,
                        data: e.data,
                        parsedType: (0, o.getParsedType)(e.data),
                        schemaErrorMap: this._def.errorMap,
                        path: e.path,
                        parent: e.parent
                    };
                }
                _processInputParams(e) {
                    return {
                        status: new i.ParseStatus,
                        ctx: {
                            common: e.parent.common,
                            data: e.data,
                            parsedType: (0, o.getParsedType)(e.data),
                            schemaErrorMap: this._def.errorMap,
                            path: e.path,
                            parent: e.parent
                        }
                    };
                }
                _parseSync(e) {
                    const t = this._parse(e);
                    if ((0, i.isAsync)(t)) {
                        throw new Error("Synchronous parse encountered promise.");
                    }
                    return t;
                }
                _parseAsync(e) {
                    const t = this._parse(e);
                    return Promise.resolve(t);
                }
                parse(e, t) {
                    const s = this.safeParse(e, t);
                    if (s.success) return s.data;
                    throw s.error;
                }
                safeParse(e, t) {
                    const s = {
                        common: {
                            issues: [],
                            async: t?.async ?? false,
                            contextualErrorMap: t?.errorMap
                        },
                        path: t?.path || [],
                        schemaErrorMap: this._def.errorMap,
                        parent: null,
                        data: e,
                        parsedType: (0, o.getParsedType)(e)
                    };
                    const r = this._parseSync({
                        data: e,
                        path: s.path,
                        parent: s
                    });
                    return handleResult(s, r);
                }
                "~validate"(e) {
                    const t = {
                        common: {
                            issues: [],
                            async: !!this["~standard"].async
                        },
                        path: [],
                        schemaErrorMap: this._def.errorMap,
                        parent: null,
                        data: e,
                        parsedType: (0, o.getParsedType)(e)
                    };
                    if (!this["~standard"].async) {
                        try {
                            const s = this._parseSync({
                                data: e,
                                path: [],
                                parent: t
                            });
                            return (0, i.isValid)(s) ? {
                                value: s.value
                            } : {
                                issues: t.common.issues
                            };
                        } catch (e) {
                            if (e?.message?.toLowerCase()?.includes("encountered")) {
                                this["~standard"].async = true;
                            }
                            t.common = {
                                issues: [],
                                async: true
                            };
                        }
                    }
                    return this._parseAsync({
                        data: e,
                        path: [],
                        parent: t
                    }).then((e)=>(0, i.isValid)(e) ? {
                            value: e.value
                        } : {
                            issues: t.common.issues
                        });
                }
                async parseAsync(e, t) {
                    const s = await this.safeParseAsync(e, t);
                    if (s.success) return s.data;
                    throw s.error;
                }
                async safeParseAsync(e, t) {
                    const s = {
                        common: {
                            issues: [],
                            contextualErrorMap: t?.errorMap,
                            async: true
                        },
                        path: t?.path || [],
                        schemaErrorMap: this._def.errorMap,
                        parent: null,
                        data: e,
                        parsedType: (0, o.getParsedType)(e)
                    };
                    const r = this._parse({
                        data: e,
                        path: s.path,
                        parent: s
                    });
                    const a = await ((0, i.isAsync)(r) ? r : Promise.resolve(r));
                    return handleResult(s, a);
                }
                refine(e, t) {
                    const getIssueProperties = (e)=>{
                        if (typeof t === "string" || typeof t === "undefined") {
                            return {
                                message: t
                            };
                        } else if (typeof t === "function") {
                            return t(e);
                        } else {
                            return t;
                        }
                    };
                    return this._refinement((t, s)=>{
                        const a = e(t);
                        const setError = ()=>s.addIssue({
                                code: r.ZodIssueCode.custom,
                                ...getIssueProperties(t)
                            });
                        if (typeof Promise !== "undefined" && a instanceof Promise) {
                            return a.then((e)=>{
                                if (!e) {
                                    setError();
                                    return false;
                                } else {
                                    return true;
                                }
                            });
                        }
                        if (!a) {
                            setError();
                            return false;
                        } else {
                            return true;
                        }
                    });
                }
                refinement(e, t) {
                    return this._refinement((s, r)=>{
                        if (!e(s)) {
                            r.addIssue(typeof t === "function" ? t(s, r) : t);
                            return false;
                        } else {
                            return true;
                        }
                    });
                }
                _refinement(e) {
                    return new ZodEffects({
                        schema: this,
                        typeName: k.ZodEffects,
                        effect: {
                            type: "refinement",
                            refinement: e
                        }
                    });
                }
                superRefine(e) {
                    return this._refinement(e);
                }
                constructor(e){
                    this.spa = this.safeParseAsync;
                    this._def = e;
                    this.parse = this.parse.bind(this);
                    this.safeParse = this.safeParse.bind(this);
                    this.parseAsync = this.parseAsync.bind(this);
                    this.safeParseAsync = this.safeParseAsync.bind(this);
                    this.spa = this.spa.bind(this);
                    this.refine = this.refine.bind(this);
                    this.refinement = this.refinement.bind(this);
                    this.superRefine = this.superRefine.bind(this);
                    this.optional = this.optional.bind(this);
                    this.nullable = this.nullable.bind(this);
                    this.nullish = this.nullish.bind(this);
                    this.array = this.array.bind(this);
                    this.promise = this.promise.bind(this);
                    this.or = this.or.bind(this);
                    this.and = this.and.bind(this);
                    this.transform = this.transform.bind(this);
                    this.brand = this.brand.bind(this);
                    this.default = this.default.bind(this);
                    this.catch = this.catch.bind(this);
                    this.describe = this.describe.bind(this);
                    this.pipe = this.pipe.bind(this);
                    this.readonly = this.readonly.bind(this);
                    this.isNullable = this.isNullable.bind(this);
                    this.isOptional = this.isOptional.bind(this);
                    this["~standard"] = {
                        version: 1,
                        vendor: "zod",
                        validate: (e)=>this["~validate"](e)
                    };
                }
                optional() {
                    return ZodOptional.create(this, this._def);
                }
                nullable() {
                    return ZodNullable.create(this, this._def);
                }
                nullish() {
                    return this.nullable().optional();
                }
                array() {
                    return ZodArray.create(this);
                }
                promise() {
                    return ZodPromise.create(this, this._def);
                }
                or(e) {
                    return ZodUnion.create([
                        this,
                        e
                    ], this._def);
                }
                and(e) {
                    return ZodIntersection.create(this, e, this._def);
                }
                transform(e) {
                    return new ZodEffects({
                        ...processCreateParams(this._def),
                        schema: this,
                        typeName: k.ZodEffects,
                        effect: {
                            type: "transform",
                            transform: e
                        }
                    });
                }
                default(e) {
                    const t = typeof e === "function" ? e : ()=>e;
                    return new ZodDefault({
                        ...processCreateParams(this._def),
                        innerType: this,
                        defaultValue: t,
                        typeName: k.ZodDefault
                    });
                }
                brand() {
                    return new ZodBranded({
                        typeName: k.ZodBranded,
                        type: this,
                        ...processCreateParams(this._def)
                    });
                }
                catch(e) {
                    const t = typeof e === "function" ? e : ()=>e;
                    return new ZodCatch({
                        ...processCreateParams(this._def),
                        innerType: this,
                        catchValue: t,
                        typeName: k.ZodCatch
                    });
                }
                describe(e) {
                    const t = this.constructor;
                    return new t({
                        ...this._def,
                        description: e
                    });
                }
                pipe(e) {
                    return ZodPipeline.create(this, e);
                }
                readonly() {
                    return ZodReadonly.create(this);
                }
                isOptional() {
                    return this.safeParse(undefined).success;
                }
                isNullable() {
                    return this.safeParse(null).success;
                }
            }
            t.ZodType = ZodType;
            t.Schema = ZodType;
            t.ZodSchema = ZodType;
            const d = /^c[^\s-]{8,}$/i;
            const u = /^[0-9a-z]+$/;
            const c = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
            const l = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
            const p = /^[a-z0-9_-]{21}$/i;
            const f = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
            const h = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
            const m = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
            const y = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
            let Z;
            const _ = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
            const g = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
            const v = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
            const I = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
            const T = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
            const b = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
            const x = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
            const C = new RegExp(`^${x}$`);
            function timeRegexSource(e) {
                let t = `[0-5]\\d`;
                if (e.precision) {
                    t = `${t}\\.\\d{${e.precision}}`;
                } else if (e.precision == null) {
                    t = `${t}(\\.\\d+)?`;
                }
                const s = e.precision ? "+" : "?";
                return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${s}`;
            }
            function timeRegex(e) {
                return new RegExp(`^${timeRegexSource(e)}$`);
            }
            function datetimeRegex(e) {
                let t = `${x}T${timeRegexSource(e)}`;
                const s = [];
                s.push(e.local ? `Z?` : `Z`);
                if (e.offset) s.push(`([+-]\\d{2}:?\\d{2})`);
                t = `${t}(${s.join("|")})`;
                return new RegExp(`^${t}$`);
            }
            function isValidIP(e, t) {
                if ((t === "v4" || !t) && _.test(e)) {
                    return true;
                }
                if ((t === "v6" || !t) && v.test(e)) {
                    return true;
                }
                return false;
            }
            function isValidJWT(e, t) {
                if (!f.test(e)) return false;
                try {
                    const [s] = e.split(".");
                    if (!s) return false;
                    const r = s.replace(/-/g, "+").replace(/_/g, "/").padEnd(s.length + (4 - s.length % 4) % 4, "=");
                    const a = JSON.parse(atob(r));
                    if (typeof a !== "object" || a === null) return false;
                    if ("typ" in a && a?.typ !== "JWT") return false;
                    if (!a.alg) return false;
                    if (t && a.alg !== t) return false;
                    return true;
                } catch  {
                    return false;
                }
            }
            function isValidCidr(e, t) {
                if ((t === "v4" || !t) && g.test(e)) {
                    return true;
                }
                if ((t === "v6" || !t) && I.test(e)) {
                    return true;
                }
                return false;
            }
            class ZodString extends ZodType {
                _parse(e) {
                    if (this._def.coerce) {
                        e.data = String(e.data);
                    }
                    const t = this._getType(e);
                    if (t !== o.ZodParsedType.string) {
                        const t = this._getOrReturnCtx(e);
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.string,
                            received: t.parsedType
                        });
                        return i.INVALID;
                    }
                    const s = new i.ParseStatus;
                    let a = undefined;
                    for (const t of this._def.checks){
                        if (t.kind === "min") {
                            if (e.data.length < t.value) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    code: r.ZodIssueCode.too_small,
                                    minimum: t.value,
                                    type: "string",
                                    inclusive: true,
                                    exact: false,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "max") {
                            if (e.data.length > t.value) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    code: r.ZodIssueCode.too_big,
                                    maximum: t.value,
                                    type: "string",
                                    inclusive: true,
                                    exact: false,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "length") {
                            const n = e.data.length > t.value;
                            const o = e.data.length < t.value;
                            if (n || o) {
                                a = this._getOrReturnCtx(e, a);
                                if (n) {
                                    (0, i.addIssueToContext)(a, {
                                        code: r.ZodIssueCode.too_big,
                                        maximum: t.value,
                                        type: "string",
                                        inclusive: true,
                                        exact: true,
                                        message: t.message
                                    });
                                } else if (o) {
                                    (0, i.addIssueToContext)(a, {
                                        code: r.ZodIssueCode.too_small,
                                        minimum: t.value,
                                        type: "string",
                                        inclusive: true,
                                        exact: true,
                                        message: t.message
                                    });
                                }
                                s.dirty();
                            }
                        } else if (t.kind === "email") {
                            if (!m.test(e.data)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "email",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "emoji") {
                            if (!Z) {
                                Z = new RegExp(y, "u");
                            }
                            if (!Z.test(e.data)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "emoji",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "uuid") {
                            if (!l.test(e.data)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "uuid",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "nanoid") {
                            if (!p.test(e.data)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "nanoid",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "cuid") {
                            if (!d.test(e.data)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "cuid",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "cuid2") {
                            if (!u.test(e.data)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "cuid2",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "ulid") {
                            if (!c.test(e.data)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "ulid",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "url") {
                            try {
                                new URL(e.data);
                            } catch  {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "url",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "regex") {
                            t.regex.lastIndex = 0;
                            const n = t.regex.test(e.data);
                            if (!n) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "regex",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "trim") {
                            e.data = e.data.trim();
                        } else if (t.kind === "includes") {
                            if (!e.data.includes(t.value, t.position)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    code: r.ZodIssueCode.invalid_string,
                                    validation: {
                                        includes: t.value,
                                        position: t.position
                                    },
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "toLowerCase") {
                            e.data = e.data.toLowerCase();
                        } else if (t.kind === "toUpperCase") {
                            e.data = e.data.toUpperCase();
                        } else if (t.kind === "startsWith") {
                            if (!e.data.startsWith(t.value)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    code: r.ZodIssueCode.invalid_string,
                                    validation: {
                                        startsWith: t.value
                                    },
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "endsWith") {
                            if (!e.data.endsWith(t.value)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    code: r.ZodIssueCode.invalid_string,
                                    validation: {
                                        endsWith: t.value
                                    },
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "datetime") {
                            const n = datetimeRegex(t);
                            if (!n.test(e.data)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    code: r.ZodIssueCode.invalid_string,
                                    validation: "datetime",
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "date") {
                            const n = C;
                            if (!n.test(e.data)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    code: r.ZodIssueCode.invalid_string,
                                    validation: "date",
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "time") {
                            const n = timeRegex(t);
                            if (!n.test(e.data)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    code: r.ZodIssueCode.invalid_string,
                                    validation: "time",
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "duration") {
                            if (!h.test(e.data)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "duration",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "ip") {
                            if (!isValidIP(e.data, t.version)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "ip",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "jwt") {
                            if (!isValidJWT(e.data, t.alg)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "jwt",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "cidr") {
                            if (!isValidCidr(e.data, t.version)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "cidr",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "base64") {
                            if (!T.test(e.data)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "base64",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "base64url") {
                            if (!b.test(e.data)) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    validation: "base64url",
                                    code: r.ZodIssueCode.invalid_string,
                                    message: t.message
                                });
                                s.dirty();
                            }
                        } else {
                            o.util.assertNever(t);
                        }
                    }
                    return {
                        status: s.value,
                        value: e.data
                    };
                }
                _regex(e, t, s) {
                    return this.refinement((t)=>e.test(t), {
                        validation: t,
                        code: r.ZodIssueCode.invalid_string,
                        ...n.errorUtil.errToObj(s)
                    });
                }
                _addCheck(e) {
                    return new ZodString({
                        ...this._def,
                        checks: [
                            ...this._def.checks,
                            e
                        ]
                    });
                }
                email(e) {
                    return this._addCheck({
                        kind: "email",
                        ...n.errorUtil.errToObj(e)
                    });
                }
                url(e) {
                    return this._addCheck({
                        kind: "url",
                        ...n.errorUtil.errToObj(e)
                    });
                }
                emoji(e) {
                    return this._addCheck({
                        kind: "emoji",
                        ...n.errorUtil.errToObj(e)
                    });
                }
                uuid(e) {
                    return this._addCheck({
                        kind: "uuid",
                        ...n.errorUtil.errToObj(e)
                    });
                }
                nanoid(e) {
                    return this._addCheck({
                        kind: "nanoid",
                        ...n.errorUtil.errToObj(e)
                    });
                }
                cuid(e) {
                    return this._addCheck({
                        kind: "cuid",
                        ...n.errorUtil.errToObj(e)
                    });
                }
                cuid2(e) {
                    return this._addCheck({
                        kind: "cuid2",
                        ...n.errorUtil.errToObj(e)
                    });
                }
                ulid(e) {
                    return this._addCheck({
                        kind: "ulid",
                        ...n.errorUtil.errToObj(e)
                    });
                }
                base64(e) {
                    return this._addCheck({
                        kind: "base64",
                        ...n.errorUtil.errToObj(e)
                    });
                }
                base64url(e) {
                    return this._addCheck({
                        kind: "base64url",
                        ...n.errorUtil.errToObj(e)
                    });
                }
                jwt(e) {
                    return this._addCheck({
                        kind: "jwt",
                        ...n.errorUtil.errToObj(e)
                    });
                }
                ip(e) {
                    return this._addCheck({
                        kind: "ip",
                        ...n.errorUtil.errToObj(e)
                    });
                }
                cidr(e) {
                    return this._addCheck({
                        kind: "cidr",
                        ...n.errorUtil.errToObj(e)
                    });
                }
                datetime(e) {
                    if (typeof e === "string") {
                        return this._addCheck({
                            kind: "datetime",
                            precision: null,
                            offset: false,
                            local: false,
                            message: e
                        });
                    }
                    return this._addCheck({
                        kind: "datetime",
                        precision: typeof e?.precision === "undefined" ? null : e?.precision,
                        offset: e?.offset ?? false,
                        local: e?.local ?? false,
                        ...n.errorUtil.errToObj(e?.message)
                    });
                }
                date(e) {
                    return this._addCheck({
                        kind: "date",
                        message: e
                    });
                }
                time(e) {
                    if (typeof e === "string") {
                        return this._addCheck({
                            kind: "time",
                            precision: null,
                            message: e
                        });
                    }
                    return this._addCheck({
                        kind: "time",
                        precision: typeof e?.precision === "undefined" ? null : e?.precision,
                        ...n.errorUtil.errToObj(e?.message)
                    });
                }
                duration(e) {
                    return this._addCheck({
                        kind: "duration",
                        ...n.errorUtil.errToObj(e)
                    });
                }
                regex(e, t) {
                    return this._addCheck({
                        kind: "regex",
                        regex: e,
                        ...n.errorUtil.errToObj(t)
                    });
                }
                includes(e, t) {
                    return this._addCheck({
                        kind: "includes",
                        value: e,
                        position: t?.position,
                        ...n.errorUtil.errToObj(t?.message)
                    });
                }
                startsWith(e, t) {
                    return this._addCheck({
                        kind: "startsWith",
                        value: e,
                        ...n.errorUtil.errToObj(t)
                    });
                }
                endsWith(e, t) {
                    return this._addCheck({
                        kind: "endsWith",
                        value: e,
                        ...n.errorUtil.errToObj(t)
                    });
                }
                min(e, t) {
                    return this._addCheck({
                        kind: "min",
                        value: e,
                        ...n.errorUtil.errToObj(t)
                    });
                }
                max(e, t) {
                    return this._addCheck({
                        kind: "max",
                        value: e,
                        ...n.errorUtil.errToObj(t)
                    });
                }
                length(e, t) {
                    return this._addCheck({
                        kind: "length",
                        value: e,
                        ...n.errorUtil.errToObj(t)
                    });
                }
                nonempty(e) {
                    return this.min(1, n.errorUtil.errToObj(e));
                }
                trim() {
                    return new ZodString({
                        ...this._def,
                        checks: [
                            ...this._def.checks,
                            {
                                kind: "trim"
                            }
                        ]
                    });
                }
                toLowerCase() {
                    return new ZodString({
                        ...this._def,
                        checks: [
                            ...this._def.checks,
                            {
                                kind: "toLowerCase"
                            }
                        ]
                    });
                }
                toUpperCase() {
                    return new ZodString({
                        ...this._def,
                        checks: [
                            ...this._def.checks,
                            {
                                kind: "toUpperCase"
                            }
                        ]
                    });
                }
                get isDatetime() {
                    return !!this._def.checks.find((e)=>e.kind === "datetime");
                }
                get isDate() {
                    return !!this._def.checks.find((e)=>e.kind === "date");
                }
                get isTime() {
                    return !!this._def.checks.find((e)=>e.kind === "time");
                }
                get isDuration() {
                    return !!this._def.checks.find((e)=>e.kind === "duration");
                }
                get isEmail() {
                    return !!this._def.checks.find((e)=>e.kind === "email");
                }
                get isURL() {
                    return !!this._def.checks.find((e)=>e.kind === "url");
                }
                get isEmoji() {
                    return !!this._def.checks.find((e)=>e.kind === "emoji");
                }
                get isUUID() {
                    return !!this._def.checks.find((e)=>e.kind === "uuid");
                }
                get isNANOID() {
                    return !!this._def.checks.find((e)=>e.kind === "nanoid");
                }
                get isCUID() {
                    return !!this._def.checks.find((e)=>e.kind === "cuid");
                }
                get isCUID2() {
                    return !!this._def.checks.find((e)=>e.kind === "cuid2");
                }
                get isULID() {
                    return !!this._def.checks.find((e)=>e.kind === "ulid");
                }
                get isIP() {
                    return !!this._def.checks.find((e)=>e.kind === "ip");
                }
                get isCIDR() {
                    return !!this._def.checks.find((e)=>e.kind === "cidr");
                }
                get isBase64() {
                    return !!this._def.checks.find((e)=>e.kind === "base64");
                }
                get isBase64url() {
                    return !!this._def.checks.find((e)=>e.kind === "base64url");
                }
                get minLength() {
                    let e = null;
                    for (const t of this._def.checks){
                        if (t.kind === "min") {
                            if (e === null || t.value > e) e = t.value;
                        }
                    }
                    return e;
                }
                get maxLength() {
                    let e = null;
                    for (const t of this._def.checks){
                        if (t.kind === "max") {
                            if (e === null || t.value < e) e = t.value;
                        }
                    }
                    return e;
                }
            }
            t.ZodString = ZodString;
            ZodString.create = (e)=>new ZodString({
                    checks: [],
                    typeName: k.ZodString,
                    coerce: e?.coerce ?? false,
                    ...processCreateParams(e)
                });
            function floatSafeRemainder(e, t) {
                const s = (e.toString().split(".")[1] || "").length;
                const r = (t.toString().split(".")[1] || "").length;
                const a = s > r ? s : r;
                const n = Number.parseInt(e.toFixed(a).replace(".", ""));
                const i = Number.parseInt(t.toFixed(a).replace(".", ""));
                return n % i / 10 ** a;
            }
            class ZodNumber extends ZodType {
                constructor(){
                    super(...arguments);
                    this.min = this.gte;
                    this.max = this.lte;
                    this.step = this.multipleOf;
                }
                _parse(e) {
                    if (this._def.coerce) {
                        e.data = Number(e.data);
                    }
                    const t = this._getType(e);
                    if (t !== o.ZodParsedType.number) {
                        const t = this._getOrReturnCtx(e);
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.number,
                            received: t.parsedType
                        });
                        return i.INVALID;
                    }
                    let s = undefined;
                    const a = new i.ParseStatus;
                    for (const t of this._def.checks){
                        if (t.kind === "int") {
                            if (!o.util.isInteger(e.data)) {
                                s = this._getOrReturnCtx(e, s);
                                (0, i.addIssueToContext)(s, {
                                    code: r.ZodIssueCode.invalid_type,
                                    expected: "integer",
                                    received: "float",
                                    message: t.message
                                });
                                a.dirty();
                            }
                        } else if (t.kind === "min") {
                            const n = t.inclusive ? e.data < t.value : e.data <= t.value;
                            if (n) {
                                s = this._getOrReturnCtx(e, s);
                                (0, i.addIssueToContext)(s, {
                                    code: r.ZodIssueCode.too_small,
                                    minimum: t.value,
                                    type: "number",
                                    inclusive: t.inclusive,
                                    exact: false,
                                    message: t.message
                                });
                                a.dirty();
                            }
                        } else if (t.kind === "max") {
                            const n = t.inclusive ? e.data > t.value : e.data >= t.value;
                            if (n) {
                                s = this._getOrReturnCtx(e, s);
                                (0, i.addIssueToContext)(s, {
                                    code: r.ZodIssueCode.too_big,
                                    maximum: t.value,
                                    type: "number",
                                    inclusive: t.inclusive,
                                    exact: false,
                                    message: t.message
                                });
                                a.dirty();
                            }
                        } else if (t.kind === "multipleOf") {
                            if (floatSafeRemainder(e.data, t.value) !== 0) {
                                s = this._getOrReturnCtx(e, s);
                                (0, i.addIssueToContext)(s, {
                                    code: r.ZodIssueCode.not_multiple_of,
                                    multipleOf: t.value,
                                    message: t.message
                                });
                                a.dirty();
                            }
                        } else if (t.kind === "finite") {
                            if (!Number.isFinite(e.data)) {
                                s = this._getOrReturnCtx(e, s);
                                (0, i.addIssueToContext)(s, {
                                    code: r.ZodIssueCode.not_finite,
                                    message: t.message
                                });
                                a.dirty();
                            }
                        } else {
                            o.util.assertNever(t);
                        }
                    }
                    return {
                        status: a.value,
                        value: e.data
                    };
                }
                gte(e, t) {
                    return this.setLimit("min", e, true, n.errorUtil.toString(t));
                }
                gt(e, t) {
                    return this.setLimit("min", e, false, n.errorUtil.toString(t));
                }
                lte(e, t) {
                    return this.setLimit("max", e, true, n.errorUtil.toString(t));
                }
                lt(e, t) {
                    return this.setLimit("max", e, false, n.errorUtil.toString(t));
                }
                setLimit(e, t, s, r) {
                    return new ZodNumber({
                        ...this._def,
                        checks: [
                            ...this._def.checks,
                            {
                                kind: e,
                                value: t,
                                inclusive: s,
                                message: n.errorUtil.toString(r)
                            }
                        ]
                    });
                }
                _addCheck(e) {
                    return new ZodNumber({
                        ...this._def,
                        checks: [
                            ...this._def.checks,
                            e
                        ]
                    });
                }
                int(e) {
                    return this._addCheck({
                        kind: "int",
                        message: n.errorUtil.toString(e)
                    });
                }
                positive(e) {
                    return this._addCheck({
                        kind: "min",
                        value: 0,
                        inclusive: false,
                        message: n.errorUtil.toString(e)
                    });
                }
                negative(e) {
                    return this._addCheck({
                        kind: "max",
                        value: 0,
                        inclusive: false,
                        message: n.errorUtil.toString(e)
                    });
                }
                nonpositive(e) {
                    return this._addCheck({
                        kind: "max",
                        value: 0,
                        inclusive: true,
                        message: n.errorUtil.toString(e)
                    });
                }
                nonnegative(e) {
                    return this._addCheck({
                        kind: "min",
                        value: 0,
                        inclusive: true,
                        message: n.errorUtil.toString(e)
                    });
                }
                multipleOf(e, t) {
                    return this._addCheck({
                        kind: "multipleOf",
                        value: e,
                        message: n.errorUtil.toString(t)
                    });
                }
                finite(e) {
                    return this._addCheck({
                        kind: "finite",
                        message: n.errorUtil.toString(e)
                    });
                }
                safe(e) {
                    return this._addCheck({
                        kind: "min",
                        inclusive: true,
                        value: Number.MIN_SAFE_INTEGER,
                        message: n.errorUtil.toString(e)
                    })._addCheck({
                        kind: "max",
                        inclusive: true,
                        value: Number.MAX_SAFE_INTEGER,
                        message: n.errorUtil.toString(e)
                    });
                }
                get minValue() {
                    let e = null;
                    for (const t of this._def.checks){
                        if (t.kind === "min") {
                            if (e === null || t.value > e) e = t.value;
                        }
                    }
                    return e;
                }
                get maxValue() {
                    let e = null;
                    for (const t of this._def.checks){
                        if (t.kind === "max") {
                            if (e === null || t.value < e) e = t.value;
                        }
                    }
                    return e;
                }
                get isInt() {
                    return !!this._def.checks.find((e)=>e.kind === "int" || e.kind === "multipleOf" && o.util.isInteger(e.value));
                }
                get isFinite() {
                    let e = null;
                    let t = null;
                    for (const s of this._def.checks){
                        if (s.kind === "finite" || s.kind === "int" || s.kind === "multipleOf") {
                            return true;
                        } else if (s.kind === "min") {
                            if (t === null || s.value > t) t = s.value;
                        } else if (s.kind === "max") {
                            if (e === null || s.value < e) e = s.value;
                        }
                    }
                    return Number.isFinite(t) && Number.isFinite(e);
                }
            }
            t.ZodNumber = ZodNumber;
            ZodNumber.create = (e)=>new ZodNumber({
                    checks: [],
                    typeName: k.ZodNumber,
                    coerce: e?.coerce || false,
                    ...processCreateParams(e)
                });
            class ZodBigInt extends ZodType {
                constructor(){
                    super(...arguments);
                    this.min = this.gte;
                    this.max = this.lte;
                }
                _parse(e) {
                    if (this._def.coerce) {
                        try {
                            e.data = BigInt(e.data);
                        } catch  {
                            return this._getInvalidInput(e);
                        }
                    }
                    const t = this._getType(e);
                    if (t !== o.ZodParsedType.bigint) {
                        return this._getInvalidInput(e);
                    }
                    let s = undefined;
                    const a = new i.ParseStatus;
                    for (const t of this._def.checks){
                        if (t.kind === "min") {
                            const n = t.inclusive ? e.data < t.value : e.data <= t.value;
                            if (n) {
                                s = this._getOrReturnCtx(e, s);
                                (0, i.addIssueToContext)(s, {
                                    code: r.ZodIssueCode.too_small,
                                    type: "bigint",
                                    minimum: t.value,
                                    inclusive: t.inclusive,
                                    message: t.message
                                });
                                a.dirty();
                            }
                        } else if (t.kind === "max") {
                            const n = t.inclusive ? e.data > t.value : e.data >= t.value;
                            if (n) {
                                s = this._getOrReturnCtx(e, s);
                                (0, i.addIssueToContext)(s, {
                                    code: r.ZodIssueCode.too_big,
                                    type: "bigint",
                                    maximum: t.value,
                                    inclusive: t.inclusive,
                                    message: t.message
                                });
                                a.dirty();
                            }
                        } else if (t.kind === "multipleOf") {
                            if (e.data % t.value !== BigInt(0)) {
                                s = this._getOrReturnCtx(e, s);
                                (0, i.addIssueToContext)(s, {
                                    code: r.ZodIssueCode.not_multiple_of,
                                    multipleOf: t.value,
                                    message: t.message
                                });
                                a.dirty();
                            }
                        } else {
                            o.util.assertNever(t);
                        }
                    }
                    return {
                        status: a.value,
                        value: e.data
                    };
                }
                _getInvalidInput(e) {
                    const t = this._getOrReturnCtx(e);
                    (0, i.addIssueToContext)(t, {
                        code: r.ZodIssueCode.invalid_type,
                        expected: o.ZodParsedType.bigint,
                        received: t.parsedType
                    });
                    return i.INVALID;
                }
                gte(e, t) {
                    return this.setLimit("min", e, true, n.errorUtil.toString(t));
                }
                gt(e, t) {
                    return this.setLimit("min", e, false, n.errorUtil.toString(t));
                }
                lte(e, t) {
                    return this.setLimit("max", e, true, n.errorUtil.toString(t));
                }
                lt(e, t) {
                    return this.setLimit("max", e, false, n.errorUtil.toString(t));
                }
                setLimit(e, t, s, r) {
                    return new ZodBigInt({
                        ...this._def,
                        checks: [
                            ...this._def.checks,
                            {
                                kind: e,
                                value: t,
                                inclusive: s,
                                message: n.errorUtil.toString(r)
                            }
                        ]
                    });
                }
                _addCheck(e) {
                    return new ZodBigInt({
                        ...this._def,
                        checks: [
                            ...this._def.checks,
                            e
                        ]
                    });
                }
                positive(e) {
                    return this._addCheck({
                        kind: "min",
                        value: BigInt(0),
                        inclusive: false,
                        message: n.errorUtil.toString(e)
                    });
                }
                negative(e) {
                    return this._addCheck({
                        kind: "max",
                        value: BigInt(0),
                        inclusive: false,
                        message: n.errorUtil.toString(e)
                    });
                }
                nonpositive(e) {
                    return this._addCheck({
                        kind: "max",
                        value: BigInt(0),
                        inclusive: true,
                        message: n.errorUtil.toString(e)
                    });
                }
                nonnegative(e) {
                    return this._addCheck({
                        kind: "min",
                        value: BigInt(0),
                        inclusive: true,
                        message: n.errorUtil.toString(e)
                    });
                }
                multipleOf(e, t) {
                    return this._addCheck({
                        kind: "multipleOf",
                        value: e,
                        message: n.errorUtil.toString(t)
                    });
                }
                get minValue() {
                    let e = null;
                    for (const t of this._def.checks){
                        if (t.kind === "min") {
                            if (e === null || t.value > e) e = t.value;
                        }
                    }
                    return e;
                }
                get maxValue() {
                    let e = null;
                    for (const t of this._def.checks){
                        if (t.kind === "max") {
                            if (e === null || t.value < e) e = t.value;
                        }
                    }
                    return e;
                }
            }
            t.ZodBigInt = ZodBigInt;
            ZodBigInt.create = (e)=>new ZodBigInt({
                    checks: [],
                    typeName: k.ZodBigInt,
                    coerce: e?.coerce ?? false,
                    ...processCreateParams(e)
                });
            class ZodBoolean extends ZodType {
                _parse(e) {
                    if (this._def.coerce) {
                        e.data = Boolean(e.data);
                    }
                    const t = this._getType(e);
                    if (t !== o.ZodParsedType.boolean) {
                        const t = this._getOrReturnCtx(e);
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.boolean,
                            received: t.parsedType
                        });
                        return i.INVALID;
                    }
                    return (0, i.OK)(e.data);
                }
            }
            t.ZodBoolean = ZodBoolean;
            ZodBoolean.create = (e)=>new ZodBoolean({
                    typeName: k.ZodBoolean,
                    coerce: e?.coerce || false,
                    ...processCreateParams(e)
                });
            class ZodDate extends ZodType {
                _parse(e) {
                    if (this._def.coerce) {
                        e.data = new Date(e.data);
                    }
                    const t = this._getType(e);
                    if (t !== o.ZodParsedType.date) {
                        const t = this._getOrReturnCtx(e);
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.date,
                            received: t.parsedType
                        });
                        return i.INVALID;
                    }
                    if (Number.isNaN(e.data.getTime())) {
                        const t = this._getOrReturnCtx(e);
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_date
                        });
                        return i.INVALID;
                    }
                    const s = new i.ParseStatus;
                    let a = undefined;
                    for (const t of this._def.checks){
                        if (t.kind === "min") {
                            if (e.data.getTime() < t.value) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    code: r.ZodIssueCode.too_small,
                                    message: t.message,
                                    inclusive: true,
                                    exact: false,
                                    minimum: t.value,
                                    type: "date"
                                });
                                s.dirty();
                            }
                        } else if (t.kind === "max") {
                            if (e.data.getTime() > t.value) {
                                a = this._getOrReturnCtx(e, a);
                                (0, i.addIssueToContext)(a, {
                                    code: r.ZodIssueCode.too_big,
                                    message: t.message,
                                    inclusive: true,
                                    exact: false,
                                    maximum: t.value,
                                    type: "date"
                                });
                                s.dirty();
                            }
                        } else {
                            o.util.assertNever(t);
                        }
                    }
                    return {
                        status: s.value,
                        value: new Date(e.data.getTime())
                    };
                }
                _addCheck(e) {
                    return new ZodDate({
                        ...this._def,
                        checks: [
                            ...this._def.checks,
                            e
                        ]
                    });
                }
                min(e, t) {
                    return this._addCheck({
                        kind: "min",
                        value: e.getTime(),
                        message: n.errorUtil.toString(t)
                    });
                }
                max(e, t) {
                    return this._addCheck({
                        kind: "max",
                        value: e.getTime(),
                        message: n.errorUtil.toString(t)
                    });
                }
                get minDate() {
                    let e = null;
                    for (const t of this._def.checks){
                        if (t.kind === "min") {
                            if (e === null || t.value > e) e = t.value;
                        }
                    }
                    return e != null ? new Date(e) : null;
                }
                get maxDate() {
                    let e = null;
                    for (const t of this._def.checks){
                        if (t.kind === "max") {
                            if (e === null || t.value < e) e = t.value;
                        }
                    }
                    return e != null ? new Date(e) : null;
                }
            }
            t.ZodDate = ZodDate;
            ZodDate.create = (e)=>new ZodDate({
                    checks: [],
                    coerce: e?.coerce || false,
                    typeName: k.ZodDate,
                    ...processCreateParams(e)
                });
            class ZodSymbol extends ZodType {
                _parse(e) {
                    const t = this._getType(e);
                    if (t !== o.ZodParsedType.symbol) {
                        const t = this._getOrReturnCtx(e);
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.symbol,
                            received: t.parsedType
                        });
                        return i.INVALID;
                    }
                    return (0, i.OK)(e.data);
                }
            }
            t.ZodSymbol = ZodSymbol;
            ZodSymbol.create = (e)=>new ZodSymbol({
                    typeName: k.ZodSymbol,
                    ...processCreateParams(e)
                });
            class ZodUndefined extends ZodType {
                _parse(e) {
                    const t = this._getType(e);
                    if (t !== o.ZodParsedType.undefined) {
                        const t = this._getOrReturnCtx(e);
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.undefined,
                            received: t.parsedType
                        });
                        return i.INVALID;
                    }
                    return (0, i.OK)(e.data);
                }
            }
            t.ZodUndefined = ZodUndefined;
            ZodUndefined.create = (e)=>new ZodUndefined({
                    typeName: k.ZodUndefined,
                    ...processCreateParams(e)
                });
            class ZodNull extends ZodType {
                _parse(e) {
                    const t = this._getType(e);
                    if (t !== o.ZodParsedType.null) {
                        const t = this._getOrReturnCtx(e);
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.null,
                            received: t.parsedType
                        });
                        return i.INVALID;
                    }
                    return (0, i.OK)(e.data);
                }
            }
            t.ZodNull = ZodNull;
            ZodNull.create = (e)=>new ZodNull({
                    typeName: k.ZodNull,
                    ...processCreateParams(e)
                });
            class ZodAny extends ZodType {
                constructor(){
                    super(...arguments);
                    this._any = true;
                }
                _parse(e) {
                    return (0, i.OK)(e.data);
                }
            }
            t.ZodAny = ZodAny;
            ZodAny.create = (e)=>new ZodAny({
                    typeName: k.ZodAny,
                    ...processCreateParams(e)
                });
            class ZodUnknown extends ZodType {
                constructor(){
                    super(...arguments);
                    this._unknown = true;
                }
                _parse(e) {
                    return (0, i.OK)(e.data);
                }
            }
            t.ZodUnknown = ZodUnknown;
            ZodUnknown.create = (e)=>new ZodUnknown({
                    typeName: k.ZodUnknown,
                    ...processCreateParams(e)
                });
            class ZodNever extends ZodType {
                _parse(e) {
                    const t = this._getOrReturnCtx(e);
                    (0, i.addIssueToContext)(t, {
                        code: r.ZodIssueCode.invalid_type,
                        expected: o.ZodParsedType.never,
                        received: t.parsedType
                    });
                    return i.INVALID;
                }
            }
            t.ZodNever = ZodNever;
            ZodNever.create = (e)=>new ZodNever({
                    typeName: k.ZodNever,
                    ...processCreateParams(e)
                });
            class ZodVoid extends ZodType {
                _parse(e) {
                    const t = this._getType(e);
                    if (t !== o.ZodParsedType.undefined) {
                        const t = this._getOrReturnCtx(e);
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.void,
                            received: t.parsedType
                        });
                        return i.INVALID;
                    }
                    return (0, i.OK)(e.data);
                }
            }
            t.ZodVoid = ZodVoid;
            ZodVoid.create = (e)=>new ZodVoid({
                    typeName: k.ZodVoid,
                    ...processCreateParams(e)
                });
            class ZodArray extends ZodType {
                _parse(e) {
                    const { ctx: t, status: s } = this._processInputParams(e);
                    const a = this._def;
                    if (t.parsedType !== o.ZodParsedType.array) {
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.array,
                            received: t.parsedType
                        });
                        return i.INVALID;
                    }
                    if (a.exactLength !== null) {
                        const e = t.data.length > a.exactLength.value;
                        const n = t.data.length < a.exactLength.value;
                        if (e || n) {
                            (0, i.addIssueToContext)(t, {
                                code: e ? r.ZodIssueCode.too_big : r.ZodIssueCode.too_small,
                                minimum: n ? a.exactLength.value : undefined,
                                maximum: e ? a.exactLength.value : undefined,
                                type: "array",
                                inclusive: true,
                                exact: true,
                                message: a.exactLength.message
                            });
                            s.dirty();
                        }
                    }
                    if (a.minLength !== null) {
                        if (t.data.length < a.minLength.value) {
                            (0, i.addIssueToContext)(t, {
                                code: r.ZodIssueCode.too_small,
                                minimum: a.minLength.value,
                                type: "array",
                                inclusive: true,
                                exact: false,
                                message: a.minLength.message
                            });
                            s.dirty();
                        }
                    }
                    if (a.maxLength !== null) {
                        if (t.data.length > a.maxLength.value) {
                            (0, i.addIssueToContext)(t, {
                                code: r.ZodIssueCode.too_big,
                                maximum: a.maxLength.value,
                                type: "array",
                                inclusive: true,
                                exact: false,
                                message: a.maxLength.message
                            });
                            s.dirty();
                        }
                    }
                    if (t.common.async) {
                        return Promise.all([
                            ...t.data
                        ].map((e, s)=>a.type._parseAsync(new ParseInputLazyPath(t, e, t.path, s)))).then((e)=>i.ParseStatus.mergeArray(s, e));
                    }
                    const n = [
                        ...t.data
                    ].map((e, s)=>a.type._parseSync(new ParseInputLazyPath(t, e, t.path, s)));
                    return i.ParseStatus.mergeArray(s, n);
                }
                get element() {
                    return this._def.type;
                }
                min(e, t) {
                    return new ZodArray({
                        ...this._def,
                        minLength: {
                            value: e,
                            message: n.errorUtil.toString(t)
                        }
                    });
                }
                max(e, t) {
                    return new ZodArray({
                        ...this._def,
                        maxLength: {
                            value: e,
                            message: n.errorUtil.toString(t)
                        }
                    });
                }
                length(e, t) {
                    return new ZodArray({
                        ...this._def,
                        exactLength: {
                            value: e,
                            message: n.errorUtil.toString(t)
                        }
                    });
                }
                nonempty(e) {
                    return this.min(1, e);
                }
            }
            t.ZodArray = ZodArray;
            ZodArray.create = (e, t)=>new ZodArray({
                    type: e,
                    minLength: null,
                    maxLength: null,
                    exactLength: null,
                    typeName: k.ZodArray,
                    ...processCreateParams(t)
                });
            function deepPartialify(e) {
                if (e instanceof ZodObject) {
                    const t = {};
                    for(const s in e.shape){
                        const r = e.shape[s];
                        t[s] = ZodOptional.create(deepPartialify(r));
                    }
                    return new ZodObject({
                        ...e._def,
                        shape: ()=>t
                    });
                } else if (e instanceof ZodArray) {
                    return new ZodArray({
                        ...e._def,
                        type: deepPartialify(e.element)
                    });
                } else if (e instanceof ZodOptional) {
                    return ZodOptional.create(deepPartialify(e.unwrap()));
                } else if (e instanceof ZodNullable) {
                    return ZodNullable.create(deepPartialify(e.unwrap()));
                } else if (e instanceof ZodTuple) {
                    return ZodTuple.create(e.items.map((e)=>deepPartialify(e)));
                } else {
                    return e;
                }
            }
            class ZodObject extends ZodType {
                constructor(){
                    super(...arguments);
                    this._cached = null;
                    this.nonstrict = this.passthrough;
                    this.augment = this.extend;
                }
                _getCached() {
                    if (this._cached !== null) return this._cached;
                    const e = this._def.shape();
                    const t = o.util.objectKeys(e);
                    this._cached = {
                        shape: e,
                        keys: t
                    };
                    return this._cached;
                }
                _parse(e) {
                    const t = this._getType(e);
                    if (t !== o.ZodParsedType.object) {
                        const t = this._getOrReturnCtx(e);
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.object,
                            received: t.parsedType
                        });
                        return i.INVALID;
                    }
                    const { status: s, ctx: a } = this._processInputParams(e);
                    const { shape: n, keys: d } = this._getCached();
                    const u = [];
                    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
                        for(const e in a.data){
                            if (!d.includes(e)) {
                                u.push(e);
                            }
                        }
                    }
                    const c = [];
                    for (const e of d){
                        const t = n[e];
                        const s = a.data[e];
                        c.push({
                            key: {
                                status: "valid",
                                value: e
                            },
                            value: t._parse(new ParseInputLazyPath(a, s, a.path, e)),
                            alwaysSet: e in a.data
                        });
                    }
                    if (this._def.catchall instanceof ZodNever) {
                        const e = this._def.unknownKeys;
                        if (e === "passthrough") {
                            for (const e of u){
                                c.push({
                                    key: {
                                        status: "valid",
                                        value: e
                                    },
                                    value: {
                                        status: "valid",
                                        value: a.data[e]
                                    }
                                });
                            }
                        } else if (e === "strict") {
                            if (u.length > 0) {
                                (0, i.addIssueToContext)(a, {
                                    code: r.ZodIssueCode.unrecognized_keys,
                                    keys: u
                                });
                                s.dirty();
                            }
                        } else if (e === "strip") {} else {
                            throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
                        }
                    } else {
                        const e = this._def.catchall;
                        for (const t of u){
                            const s = a.data[t];
                            c.push({
                                key: {
                                    status: "valid",
                                    value: t
                                },
                                value: e._parse(new ParseInputLazyPath(a, s, a.path, t)),
                                alwaysSet: t in a.data
                            });
                        }
                    }
                    if (a.common.async) {
                        return Promise.resolve().then(async ()=>{
                            const e = [];
                            for (const t of c){
                                const s = await t.key;
                                const r = await t.value;
                                e.push({
                                    key: s,
                                    value: r,
                                    alwaysSet: t.alwaysSet
                                });
                            }
                            return e;
                        }).then((e)=>i.ParseStatus.mergeObjectSync(s, e));
                    } else {
                        return i.ParseStatus.mergeObjectSync(s, c);
                    }
                }
                get shape() {
                    return this._def.shape();
                }
                strict(e) {
                    n.errorUtil.errToObj;
                    return new ZodObject({
                        ...this._def,
                        unknownKeys: "strict",
                        ...e !== undefined ? {
                            errorMap: (t, s)=>{
                                const r = this._def.errorMap?.(t, s).message ?? s.defaultError;
                                if (t.code === "unrecognized_keys") return {
                                    message: n.errorUtil.errToObj(e).message ?? r
                                };
                                return {
                                    message: r
                                };
                            }
                        } : {}
                    });
                }
                strip() {
                    return new ZodObject({
                        ...this._def,
                        unknownKeys: "strip"
                    });
                }
                passthrough() {
                    return new ZodObject({
                        ...this._def,
                        unknownKeys: "passthrough"
                    });
                }
                extend(e) {
                    return new ZodObject({
                        ...this._def,
                        shape: ()=>({
                                ...this._def.shape(),
                                ...e
                            })
                    });
                }
                merge(e) {
                    const t = new ZodObject({
                        unknownKeys: e._def.unknownKeys,
                        catchall: e._def.catchall,
                        shape: ()=>({
                                ...this._def.shape(),
                                ...e._def.shape()
                            }),
                        typeName: k.ZodObject
                    });
                    return t;
                }
                setKey(e, t) {
                    return this.augment({
                        [e]: t
                    });
                }
                catchall(e) {
                    return new ZodObject({
                        ...this._def,
                        catchall: e
                    });
                }
                pick(e) {
                    const t = {};
                    for (const s of o.util.objectKeys(e)){
                        if (e[s] && this.shape[s]) {
                            t[s] = this.shape[s];
                        }
                    }
                    return new ZodObject({
                        ...this._def,
                        shape: ()=>t
                    });
                }
                omit(e) {
                    const t = {};
                    for (const s of o.util.objectKeys(this.shape)){
                        if (!e[s]) {
                            t[s] = this.shape[s];
                        }
                    }
                    return new ZodObject({
                        ...this._def,
                        shape: ()=>t
                    });
                }
                deepPartial() {
                    return deepPartialify(this);
                }
                partial(e) {
                    const t = {};
                    for (const s of o.util.objectKeys(this.shape)){
                        const r = this.shape[s];
                        if (e && !e[s]) {
                            t[s] = r;
                        } else {
                            t[s] = r.optional();
                        }
                    }
                    return new ZodObject({
                        ...this._def,
                        shape: ()=>t
                    });
                }
                required(e) {
                    const t = {};
                    for (const s of o.util.objectKeys(this.shape)){
                        if (e && !e[s]) {
                            t[s] = this.shape[s];
                        } else {
                            const e = this.shape[s];
                            let r = e;
                            while(r instanceof ZodOptional){
                                r = r._def.innerType;
                            }
                            t[s] = r;
                        }
                    }
                    return new ZodObject({
                        ...this._def,
                        shape: ()=>t
                    });
                }
                keyof() {
                    return createZodEnum(o.util.objectKeys(this.shape));
                }
            }
            t.ZodObject = ZodObject;
            ZodObject.create = (e, t)=>new ZodObject({
                    shape: ()=>e,
                    unknownKeys: "strip",
                    catchall: ZodNever.create(),
                    typeName: k.ZodObject,
                    ...processCreateParams(t)
                });
            ZodObject.strictCreate = (e, t)=>new ZodObject({
                    shape: ()=>e,
                    unknownKeys: "strict",
                    catchall: ZodNever.create(),
                    typeName: k.ZodObject,
                    ...processCreateParams(t)
                });
            ZodObject.lazycreate = (e, t)=>new ZodObject({
                    shape: e,
                    unknownKeys: "strip",
                    catchall: ZodNever.create(),
                    typeName: k.ZodObject,
                    ...processCreateParams(t)
                });
            class ZodUnion extends ZodType {
                _parse(e) {
                    const { ctx: t } = this._processInputParams(e);
                    const s = this._def.options;
                    function handleResults(e) {
                        for (const t of e){
                            if (t.result.status === "valid") {
                                return t.result;
                            }
                        }
                        for (const s of e){
                            if (s.result.status === "dirty") {
                                t.common.issues.push(...s.ctx.common.issues);
                                return s.result;
                            }
                        }
                        const s = e.map((e)=>new r.ZodError(e.ctx.common.issues));
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_union,
                            unionErrors: s
                        });
                        return i.INVALID;
                    }
                    if (t.common.async) {
                        return Promise.all(s.map(async (e)=>{
                            const s = {
                                ...t,
                                common: {
                                    ...t.common,
                                    issues: []
                                },
                                parent: null
                            };
                            return {
                                result: await e._parseAsync({
                                    data: t.data,
                                    path: t.path,
                                    parent: s
                                }),
                                ctx: s
                            };
                        })).then(handleResults);
                    } else {
                        let e = undefined;
                        const a = [];
                        for (const r of s){
                            const s = {
                                ...t,
                                common: {
                                    ...t.common,
                                    issues: []
                                },
                                parent: null
                            };
                            const n = r._parseSync({
                                data: t.data,
                                path: t.path,
                                parent: s
                            });
                            if (n.status === "valid") {
                                return n;
                            } else if (n.status === "dirty" && !e) {
                                e = {
                                    result: n,
                                    ctx: s
                                };
                            }
                            if (s.common.issues.length) {
                                a.push(s.common.issues);
                            }
                        }
                        if (e) {
                            t.common.issues.push(...e.ctx.common.issues);
                            return e.result;
                        }
                        const n = a.map((e)=>new r.ZodError(e));
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_union,
                            unionErrors: n
                        });
                        return i.INVALID;
                    }
                }
                get options() {
                    return this._def.options;
                }
            }
            t.ZodUnion = ZodUnion;
            ZodUnion.create = (e, t)=>new ZodUnion({
                    options: e,
                    typeName: k.ZodUnion,
                    ...processCreateParams(t)
                });
            const getDiscriminator = (e)=>{
                if (e instanceof ZodLazy) {
                    return getDiscriminator(e.schema);
                } else if (e instanceof ZodEffects) {
                    return getDiscriminator(e.innerType());
                } else if (e instanceof ZodLiteral) {
                    return [
                        e.value
                    ];
                } else if (e instanceof ZodEnum) {
                    return e.options;
                } else if (e instanceof ZodNativeEnum) {
                    return o.util.objectValues(e.enum);
                } else if (e instanceof ZodDefault) {
                    return getDiscriminator(e._def.innerType);
                } else if (e instanceof ZodUndefined) {
                    return [
                        undefined
                    ];
                } else if (e instanceof ZodNull) {
                    return [
                        null
                    ];
                } else if (e instanceof ZodOptional) {
                    return [
                        undefined,
                        ...getDiscriminator(e.unwrap())
                    ];
                } else if (e instanceof ZodNullable) {
                    return [
                        null,
                        ...getDiscriminator(e.unwrap())
                    ];
                } else if (e instanceof ZodBranded) {
                    return getDiscriminator(e.unwrap());
                } else if (e instanceof ZodReadonly) {
                    return getDiscriminator(e.unwrap());
                } else if (e instanceof ZodCatch) {
                    return getDiscriminator(e._def.innerType);
                } else {
                    return [];
                }
            };
            class ZodDiscriminatedUnion extends ZodType {
                _parse(e) {
                    const { ctx: t } = this._processInputParams(e);
                    if (t.parsedType !== o.ZodParsedType.object) {
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.object,
                            received: t.parsedType
                        });
                        return i.INVALID;
                    }
                    const s = this.discriminator;
                    const a = t.data[s];
                    const n = this.optionsMap.get(a);
                    if (!n) {
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_union_discriminator,
                            options: Array.from(this.optionsMap.keys()),
                            path: [
                                s
                            ]
                        });
                        return i.INVALID;
                    }
                    if (t.common.async) {
                        return n._parseAsync({
                            data: t.data,
                            path: t.path,
                            parent: t
                        });
                    } else {
                        return n._parseSync({
                            data: t.data,
                            path: t.path,
                            parent: t
                        });
                    }
                }
                get discriminator() {
                    return this._def.discriminator;
                }
                get options() {
                    return this._def.options;
                }
                get optionsMap() {
                    return this._def.optionsMap;
                }
                static create(e, t, s) {
                    const r = new Map;
                    for (const s of t){
                        const t = getDiscriminator(s.shape[e]);
                        if (!t.length) {
                            throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
                        }
                        for (const a of t){
                            if (r.has(a)) {
                                throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);
                            }
                            r.set(a, s);
                        }
                    }
                    return new ZodDiscriminatedUnion({
                        typeName: k.ZodDiscriminatedUnion,
                        discriminator: e,
                        options: t,
                        optionsMap: r,
                        ...processCreateParams(s)
                    });
                }
            }
            t.ZodDiscriminatedUnion = ZodDiscriminatedUnion;
            function mergeValues(e, t) {
                const s = (0, o.getParsedType)(e);
                const r = (0, o.getParsedType)(t);
                if (e === t) {
                    return {
                        valid: true,
                        data: e
                    };
                } else if (s === o.ZodParsedType.object && r === o.ZodParsedType.object) {
                    const s = o.util.objectKeys(t);
                    const r = o.util.objectKeys(e).filter((e)=>s.indexOf(e) !== -1);
                    const a = {
                        ...e,
                        ...t
                    };
                    for (const s of r){
                        const r = mergeValues(e[s], t[s]);
                        if (!r.valid) {
                            return {
                                valid: false
                            };
                        }
                        a[s] = r.data;
                    }
                    return {
                        valid: true,
                        data: a
                    };
                } else if (s === o.ZodParsedType.array && r === o.ZodParsedType.array) {
                    if (e.length !== t.length) {
                        return {
                            valid: false
                        };
                    }
                    const s = [];
                    for(let r = 0; r < e.length; r++){
                        const a = e[r];
                        const n = t[r];
                        const i = mergeValues(a, n);
                        if (!i.valid) {
                            return {
                                valid: false
                            };
                        }
                        s.push(i.data);
                    }
                    return {
                        valid: true,
                        data: s
                    };
                } else if (s === o.ZodParsedType.date && r === o.ZodParsedType.date && +e === +t) {
                    return {
                        valid: true,
                        data: e
                    };
                } else {
                    return {
                        valid: false
                    };
                }
            }
            class ZodIntersection extends ZodType {
                _parse(e) {
                    const { status: t, ctx: s } = this._processInputParams(e);
                    const handleParsed = (e, a)=>{
                        if ((0, i.isAborted)(e) || (0, i.isAborted)(a)) {
                            return i.INVALID;
                        }
                        const n = mergeValues(e.value, a.value);
                        if (!n.valid) {
                            (0, i.addIssueToContext)(s, {
                                code: r.ZodIssueCode.invalid_intersection_types
                            });
                            return i.INVALID;
                        }
                        if ((0, i.isDirty)(e) || (0, i.isDirty)(a)) {
                            t.dirty();
                        }
                        return {
                            status: t.value,
                            value: n.data
                        };
                    };
                    if (s.common.async) {
                        return Promise.all([
                            this._def.left._parseAsync({
                                data: s.data,
                                path: s.path,
                                parent: s
                            }),
                            this._def.right._parseAsync({
                                data: s.data,
                                path: s.path,
                                parent: s
                            })
                        ]).then(([e, t])=>handleParsed(e, t));
                    } else {
                        return handleParsed(this._def.left._parseSync({
                            data: s.data,
                            path: s.path,
                            parent: s
                        }), this._def.right._parseSync({
                            data: s.data,
                            path: s.path,
                            parent: s
                        }));
                    }
                }
            }
            t.ZodIntersection = ZodIntersection;
            ZodIntersection.create = (e, t, s)=>new ZodIntersection({
                    left: e,
                    right: t,
                    typeName: k.ZodIntersection,
                    ...processCreateParams(s)
                });
            class ZodTuple extends ZodType {
                _parse(e) {
                    const { status: t, ctx: s } = this._processInputParams(e);
                    if (s.parsedType !== o.ZodParsedType.array) {
                        (0, i.addIssueToContext)(s, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.array,
                            received: s.parsedType
                        });
                        return i.INVALID;
                    }
                    if (s.data.length < this._def.items.length) {
                        (0, i.addIssueToContext)(s, {
                            code: r.ZodIssueCode.too_small,
                            minimum: this._def.items.length,
                            inclusive: true,
                            exact: false,
                            type: "array"
                        });
                        return i.INVALID;
                    }
                    const a = this._def.rest;
                    if (!a && s.data.length > this._def.items.length) {
                        (0, i.addIssueToContext)(s, {
                            code: r.ZodIssueCode.too_big,
                            maximum: this._def.items.length,
                            inclusive: true,
                            exact: false,
                            type: "array"
                        });
                        t.dirty();
                    }
                    const n = [
                        ...s.data
                    ].map((e, t)=>{
                        const r = this._def.items[t] || this._def.rest;
                        if (!r) return null;
                        return r._parse(new ParseInputLazyPath(s, e, s.path, t));
                    }).filter((e)=>!!e);
                    if (s.common.async) {
                        return Promise.all(n).then((e)=>i.ParseStatus.mergeArray(t, e));
                    } else {
                        return i.ParseStatus.mergeArray(t, n);
                    }
                }
                get items() {
                    return this._def.items;
                }
                rest(e) {
                    return new ZodTuple({
                        ...this._def,
                        rest: e
                    });
                }
            }
            t.ZodTuple = ZodTuple;
            ZodTuple.create = (e, t)=>{
                if (!Array.isArray(e)) {
                    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
                }
                return new ZodTuple({
                    items: e,
                    typeName: k.ZodTuple,
                    rest: null,
                    ...processCreateParams(t)
                });
            };
            class ZodRecord extends ZodType {
                get keySchema() {
                    return this._def.keyType;
                }
                get valueSchema() {
                    return this._def.valueType;
                }
                _parse(e) {
                    const { status: t, ctx: s } = this._processInputParams(e);
                    if (s.parsedType !== o.ZodParsedType.object) {
                        (0, i.addIssueToContext)(s, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.object,
                            received: s.parsedType
                        });
                        return i.INVALID;
                    }
                    const a = [];
                    const n = this._def.keyType;
                    const d = this._def.valueType;
                    for(const e in s.data){
                        a.push({
                            key: n._parse(new ParseInputLazyPath(s, e, s.path, e)),
                            value: d._parse(new ParseInputLazyPath(s, s.data[e], s.path, e)),
                            alwaysSet: e in s.data
                        });
                    }
                    if (s.common.async) {
                        return i.ParseStatus.mergeObjectAsync(t, a);
                    } else {
                        return i.ParseStatus.mergeObjectSync(t, a);
                    }
                }
                get element() {
                    return this._def.valueType;
                }
                static create(e, t, s) {
                    if (t instanceof ZodType) {
                        return new ZodRecord({
                            keyType: e,
                            valueType: t,
                            typeName: k.ZodRecord,
                            ...processCreateParams(s)
                        });
                    }
                    return new ZodRecord({
                        keyType: ZodString.create(),
                        valueType: e,
                        typeName: k.ZodRecord,
                        ...processCreateParams(t)
                    });
                }
            }
            t.ZodRecord = ZodRecord;
            class ZodMap extends ZodType {
                get keySchema() {
                    return this._def.keyType;
                }
                get valueSchema() {
                    return this._def.valueType;
                }
                _parse(e) {
                    const { status: t, ctx: s } = this._processInputParams(e);
                    if (s.parsedType !== o.ZodParsedType.map) {
                        (0, i.addIssueToContext)(s, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.map,
                            received: s.parsedType
                        });
                        return i.INVALID;
                    }
                    const a = this._def.keyType;
                    const n = this._def.valueType;
                    const d = [
                        ...s.data.entries()
                    ].map(([e, t], r)=>({
                            key: a._parse(new ParseInputLazyPath(s, e, s.path, [
                                r,
                                "key"
                            ])),
                            value: n._parse(new ParseInputLazyPath(s, t, s.path, [
                                r,
                                "value"
                            ]))
                        }));
                    if (s.common.async) {
                        const e = new Map;
                        return Promise.resolve().then(async ()=>{
                            for (const s of d){
                                const r = await s.key;
                                const a = await s.value;
                                if (r.status === "aborted" || a.status === "aborted") {
                                    return i.INVALID;
                                }
                                if (r.status === "dirty" || a.status === "dirty") {
                                    t.dirty();
                                }
                                e.set(r.value, a.value);
                            }
                            return {
                                status: t.value,
                                value: e
                            };
                        });
                    } else {
                        const e = new Map;
                        for (const s of d){
                            const r = s.key;
                            const a = s.value;
                            if (r.status === "aborted" || a.status === "aborted") {
                                return i.INVALID;
                            }
                            if (r.status === "dirty" || a.status === "dirty") {
                                t.dirty();
                            }
                            e.set(r.value, a.value);
                        }
                        return {
                            status: t.value,
                            value: e
                        };
                    }
                }
            }
            t.ZodMap = ZodMap;
            ZodMap.create = (e, t, s)=>new ZodMap({
                    valueType: t,
                    keyType: e,
                    typeName: k.ZodMap,
                    ...processCreateParams(s)
                });
            class ZodSet extends ZodType {
                _parse(e) {
                    const { status: t, ctx: s } = this._processInputParams(e);
                    if (s.parsedType !== o.ZodParsedType.set) {
                        (0, i.addIssueToContext)(s, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.set,
                            received: s.parsedType
                        });
                        return i.INVALID;
                    }
                    const a = this._def;
                    if (a.minSize !== null) {
                        if (s.data.size < a.minSize.value) {
                            (0, i.addIssueToContext)(s, {
                                code: r.ZodIssueCode.too_small,
                                minimum: a.minSize.value,
                                type: "set",
                                inclusive: true,
                                exact: false,
                                message: a.minSize.message
                            });
                            t.dirty();
                        }
                    }
                    if (a.maxSize !== null) {
                        if (s.data.size > a.maxSize.value) {
                            (0, i.addIssueToContext)(s, {
                                code: r.ZodIssueCode.too_big,
                                maximum: a.maxSize.value,
                                type: "set",
                                inclusive: true,
                                exact: false,
                                message: a.maxSize.message
                            });
                            t.dirty();
                        }
                    }
                    const n = this._def.valueType;
                    function finalizeSet(e) {
                        const s = new Set;
                        for (const r of e){
                            if (r.status === "aborted") return i.INVALID;
                            if (r.status === "dirty") t.dirty();
                            s.add(r.value);
                        }
                        return {
                            status: t.value,
                            value: s
                        };
                    }
                    const d = [
                        ...s.data.values()
                    ].map((e, t)=>n._parse(new ParseInputLazyPath(s, e, s.path, t)));
                    if (s.common.async) {
                        return Promise.all(d).then((e)=>finalizeSet(e));
                    } else {
                        return finalizeSet(d);
                    }
                }
                min(e, t) {
                    return new ZodSet({
                        ...this._def,
                        minSize: {
                            value: e,
                            message: n.errorUtil.toString(t)
                        }
                    });
                }
                max(e, t) {
                    return new ZodSet({
                        ...this._def,
                        maxSize: {
                            value: e,
                            message: n.errorUtil.toString(t)
                        }
                    });
                }
                size(e, t) {
                    return this.min(e, t).max(e, t);
                }
                nonempty(e) {
                    return this.min(1, e);
                }
            }
            t.ZodSet = ZodSet;
            ZodSet.create = (e, t)=>new ZodSet({
                    valueType: e,
                    minSize: null,
                    maxSize: null,
                    typeName: k.ZodSet,
                    ...processCreateParams(t)
                });
            class ZodFunction extends ZodType {
                constructor(){
                    super(...arguments);
                    this.validate = this.implement;
                }
                _parse(e) {
                    const { ctx: t } = this._processInputParams(e);
                    if (t.parsedType !== o.ZodParsedType.function) {
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.function,
                            received: t.parsedType
                        });
                        return i.INVALID;
                    }
                    function makeArgsIssue(e, s) {
                        return (0, i.makeIssue)({
                            data: e,
                            path: t.path,
                            errorMaps: [
                                t.common.contextualErrorMap,
                                t.schemaErrorMap,
                                (0, a.getErrorMap)(),
                                a.defaultErrorMap
                            ].filter((e)=>!!e),
                            issueData: {
                                code: r.ZodIssueCode.invalid_arguments,
                                argumentsError: s
                            }
                        });
                    }
                    function makeReturnsIssue(e, s) {
                        return (0, i.makeIssue)({
                            data: e,
                            path: t.path,
                            errorMaps: [
                                t.common.contextualErrorMap,
                                t.schemaErrorMap,
                                (0, a.getErrorMap)(),
                                a.defaultErrorMap
                            ].filter((e)=>!!e),
                            issueData: {
                                code: r.ZodIssueCode.invalid_return_type,
                                returnTypeError: s
                            }
                        });
                    }
                    const s = {
                        errorMap: t.common.contextualErrorMap
                    };
                    const n = t.data;
                    if (this._def.returns instanceof ZodPromise) {
                        const e = this;
                        return (0, i.OK)(async function(...t) {
                            const a = new r.ZodError([]);
                            const i = await e._def.args.parseAsync(t, s).catch((e)=>{
                                a.addIssue(makeArgsIssue(t, e));
                                throw a;
                            });
                            const o = await Reflect.apply(n, this, i);
                            const d = await e._def.returns._def.type.parseAsync(o, s).catch((e)=>{
                                a.addIssue(makeReturnsIssue(o, e));
                                throw a;
                            });
                            return d;
                        });
                    } else {
                        const e = this;
                        return (0, i.OK)(function(...t) {
                            const a = e._def.args.safeParse(t, s);
                            if (!a.success) {
                                throw new r.ZodError([
                                    makeArgsIssue(t, a.error)
                                ]);
                            }
                            const i = Reflect.apply(n, this, a.data);
                            const o = e._def.returns.safeParse(i, s);
                            if (!o.success) {
                                throw new r.ZodError([
                                    makeReturnsIssue(i, o.error)
                                ]);
                            }
                            return o.data;
                        });
                    }
                }
                parameters() {
                    return this._def.args;
                }
                returnType() {
                    return this._def.returns;
                }
                args(...e) {
                    return new ZodFunction({
                        ...this._def,
                        args: ZodTuple.create(e).rest(ZodUnknown.create())
                    });
                }
                returns(e) {
                    return new ZodFunction({
                        ...this._def,
                        returns: e
                    });
                }
                implement(e) {
                    const t = this.parse(e);
                    return t;
                }
                strictImplement(e) {
                    const t = this.parse(e);
                    return t;
                }
                static create(e, t, s) {
                    return new ZodFunction({
                        args: e ? e : ZodTuple.create([]).rest(ZodUnknown.create()),
                        returns: t || ZodUnknown.create(),
                        typeName: k.ZodFunction,
                        ...processCreateParams(s)
                    });
                }
            }
            t.ZodFunction = ZodFunction;
            class ZodLazy extends ZodType {
                get schema() {
                    return this._def.getter();
                }
                _parse(e) {
                    const { ctx: t } = this._processInputParams(e);
                    const s = this._def.getter();
                    return s._parse({
                        data: t.data,
                        path: t.path,
                        parent: t
                    });
                }
            }
            t.ZodLazy = ZodLazy;
            ZodLazy.create = (e, t)=>new ZodLazy({
                    getter: e,
                    typeName: k.ZodLazy,
                    ...processCreateParams(t)
                });
            class ZodLiteral extends ZodType {
                _parse(e) {
                    if (e.data !== this._def.value) {
                        const t = this._getOrReturnCtx(e);
                        (0, i.addIssueToContext)(t, {
                            received: t.data,
                            code: r.ZodIssueCode.invalid_literal,
                            expected: this._def.value
                        });
                        return i.INVALID;
                    }
                    return {
                        status: "valid",
                        value: e.data
                    };
                }
                get value() {
                    return this._def.value;
                }
            }
            t.ZodLiteral = ZodLiteral;
            ZodLiteral.create = (e, t)=>new ZodLiteral({
                    value: e,
                    typeName: k.ZodLiteral,
                    ...processCreateParams(t)
                });
            function createZodEnum(e, t) {
                return new ZodEnum({
                    values: e,
                    typeName: k.ZodEnum,
                    ...processCreateParams(t)
                });
            }
            class ZodEnum extends ZodType {
                _parse(e) {
                    if (typeof e.data !== "string") {
                        const t = this._getOrReturnCtx(e);
                        const s = this._def.values;
                        (0, i.addIssueToContext)(t, {
                            expected: o.util.joinValues(s),
                            received: t.parsedType,
                            code: r.ZodIssueCode.invalid_type
                        });
                        return i.INVALID;
                    }
                    if (!this._cache) {
                        this._cache = new Set(this._def.values);
                    }
                    if (!this._cache.has(e.data)) {
                        const t = this._getOrReturnCtx(e);
                        const s = this._def.values;
                        (0, i.addIssueToContext)(t, {
                            received: t.data,
                            code: r.ZodIssueCode.invalid_enum_value,
                            options: s
                        });
                        return i.INVALID;
                    }
                    return (0, i.OK)(e.data);
                }
                get options() {
                    return this._def.values;
                }
                get enum() {
                    const e = {};
                    for (const t of this._def.values){
                        e[t] = t;
                    }
                    return e;
                }
                get Values() {
                    const e = {};
                    for (const t of this._def.values){
                        e[t] = t;
                    }
                    return e;
                }
                get Enum() {
                    const e = {};
                    for (const t of this._def.values){
                        e[t] = t;
                    }
                    return e;
                }
                extract(e, t = this._def) {
                    return ZodEnum.create(e, {
                        ...this._def,
                        ...t
                    });
                }
                exclude(e, t = this._def) {
                    return ZodEnum.create(this.options.filter((t)=>!e.includes(t)), {
                        ...this._def,
                        ...t
                    });
                }
            }
            t.ZodEnum = ZodEnum;
            ZodEnum.create = createZodEnum;
            class ZodNativeEnum extends ZodType {
                _parse(e) {
                    const t = o.util.getValidEnumValues(this._def.values);
                    const s = this._getOrReturnCtx(e);
                    if (s.parsedType !== o.ZodParsedType.string && s.parsedType !== o.ZodParsedType.number) {
                        const e = o.util.objectValues(t);
                        (0, i.addIssueToContext)(s, {
                            expected: o.util.joinValues(e),
                            received: s.parsedType,
                            code: r.ZodIssueCode.invalid_type
                        });
                        return i.INVALID;
                    }
                    if (!this._cache) {
                        this._cache = new Set(o.util.getValidEnumValues(this._def.values));
                    }
                    if (!this._cache.has(e.data)) {
                        const e = o.util.objectValues(t);
                        (0, i.addIssueToContext)(s, {
                            received: s.data,
                            code: r.ZodIssueCode.invalid_enum_value,
                            options: e
                        });
                        return i.INVALID;
                    }
                    return (0, i.OK)(e.data);
                }
                get enum() {
                    return this._def.values;
                }
            }
            t.ZodNativeEnum = ZodNativeEnum;
            ZodNativeEnum.create = (e, t)=>new ZodNativeEnum({
                    values: e,
                    typeName: k.ZodNativeEnum,
                    ...processCreateParams(t)
                });
            class ZodPromise extends ZodType {
                unwrap() {
                    return this._def.type;
                }
                _parse(e) {
                    const { ctx: t } = this._processInputParams(e);
                    if (t.parsedType !== o.ZodParsedType.promise && t.common.async === false) {
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.promise,
                            received: t.parsedType
                        });
                        return i.INVALID;
                    }
                    const s = t.parsedType === o.ZodParsedType.promise ? t.data : Promise.resolve(t.data);
                    return (0, i.OK)(s.then((e)=>this._def.type.parseAsync(e, {
                            path: t.path,
                            errorMap: t.common.contextualErrorMap
                        })));
                }
            }
            t.ZodPromise = ZodPromise;
            ZodPromise.create = (e, t)=>new ZodPromise({
                    type: e,
                    typeName: k.ZodPromise,
                    ...processCreateParams(t)
                });
            class ZodEffects extends ZodType {
                innerType() {
                    return this._def.schema;
                }
                sourceType() {
                    return this._def.schema._def.typeName === k.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
                }
                _parse(e) {
                    const { status: t, ctx: s } = this._processInputParams(e);
                    const r = this._def.effect || null;
                    const a = {
                        addIssue: (e)=>{
                            (0, i.addIssueToContext)(s, e);
                            if (e.fatal) {
                                t.abort();
                            } else {
                                t.dirty();
                            }
                        },
                        get path () {
                            return s.path;
                        }
                    };
                    a.addIssue = a.addIssue.bind(a);
                    if (r.type === "preprocess") {
                        const e = r.transform(s.data, a);
                        if (s.common.async) {
                            return Promise.resolve(e).then(async (e)=>{
                                if (t.value === "aborted") return i.INVALID;
                                const r = await this._def.schema._parseAsync({
                                    data: e,
                                    path: s.path,
                                    parent: s
                                });
                                if (r.status === "aborted") return i.INVALID;
                                if (r.status === "dirty") return (0, i.DIRTY)(r.value);
                                if (t.value === "dirty") return (0, i.DIRTY)(r.value);
                                return r;
                            });
                        } else {
                            if (t.value === "aborted") return i.INVALID;
                            const r = this._def.schema._parseSync({
                                data: e,
                                path: s.path,
                                parent: s
                            });
                            if (r.status === "aborted") return i.INVALID;
                            if (r.status === "dirty") return (0, i.DIRTY)(r.value);
                            if (t.value === "dirty") return (0, i.DIRTY)(r.value);
                            return r;
                        }
                    }
                    if (r.type === "refinement") {
                        const executeRefinement = (e)=>{
                            const t = r.refinement(e, a);
                            if (s.common.async) {
                                return Promise.resolve(t);
                            }
                            if (t instanceof Promise) {
                                throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                            }
                            return e;
                        };
                        if (s.common.async === false) {
                            const e = this._def.schema._parseSync({
                                data: s.data,
                                path: s.path,
                                parent: s
                            });
                            if (e.status === "aborted") return i.INVALID;
                            if (e.status === "dirty") t.dirty();
                            executeRefinement(e.value);
                            return {
                                status: t.value,
                                value: e.value
                            };
                        } else {
                            return this._def.schema._parseAsync({
                                data: s.data,
                                path: s.path,
                                parent: s
                            }).then((e)=>{
                                if (e.status === "aborted") return i.INVALID;
                                if (e.status === "dirty") t.dirty();
                                return executeRefinement(e.value).then(()=>({
                                        status: t.value,
                                        value: e.value
                                    }));
                            });
                        }
                    }
                    if (r.type === "transform") {
                        if (s.common.async === false) {
                            const e = this._def.schema._parseSync({
                                data: s.data,
                                path: s.path,
                                parent: s
                            });
                            if (!(0, i.isValid)(e)) return i.INVALID;
                            const n = r.transform(e.value, a);
                            if (n instanceof Promise) {
                                throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
                            }
                            return {
                                status: t.value,
                                value: n
                            };
                        } else {
                            return this._def.schema._parseAsync({
                                data: s.data,
                                path: s.path,
                                parent: s
                            }).then((e)=>{
                                if (!(0, i.isValid)(e)) return i.INVALID;
                                return Promise.resolve(r.transform(e.value, a)).then((e)=>({
                                        status: t.value,
                                        value: e
                                    }));
                            });
                        }
                    }
                    o.util.assertNever(r);
                }
            }
            t.ZodEffects = ZodEffects;
            t.ZodTransformer = ZodEffects;
            ZodEffects.create = (e, t, s)=>new ZodEffects({
                    schema: e,
                    typeName: k.ZodEffects,
                    effect: t,
                    ...processCreateParams(s)
                });
            ZodEffects.createWithPreprocess = (e, t, s)=>new ZodEffects({
                    schema: t,
                    effect: {
                        type: "preprocess",
                        transform: e
                    },
                    typeName: k.ZodEffects,
                    ...processCreateParams(s)
                });
            class ZodOptional extends ZodType {
                _parse(e) {
                    const t = this._getType(e);
                    if (t === o.ZodParsedType.undefined) {
                        return (0, i.OK)(undefined);
                    }
                    return this._def.innerType._parse(e);
                }
                unwrap() {
                    return this._def.innerType;
                }
            }
            t.ZodOptional = ZodOptional;
            ZodOptional.create = (e, t)=>new ZodOptional({
                    innerType: e,
                    typeName: k.ZodOptional,
                    ...processCreateParams(t)
                });
            class ZodNullable extends ZodType {
                _parse(e) {
                    const t = this._getType(e);
                    if (t === o.ZodParsedType.null) {
                        return (0, i.OK)(null);
                    }
                    return this._def.innerType._parse(e);
                }
                unwrap() {
                    return this._def.innerType;
                }
            }
            t.ZodNullable = ZodNullable;
            ZodNullable.create = (e, t)=>new ZodNullable({
                    innerType: e,
                    typeName: k.ZodNullable,
                    ...processCreateParams(t)
                });
            class ZodDefault extends ZodType {
                _parse(e) {
                    const { ctx: t } = this._processInputParams(e);
                    let s = t.data;
                    if (t.parsedType === o.ZodParsedType.undefined) {
                        s = this._def.defaultValue();
                    }
                    return this._def.innerType._parse({
                        data: s,
                        path: t.path,
                        parent: t
                    });
                }
                removeDefault() {
                    return this._def.innerType;
                }
            }
            t.ZodDefault = ZodDefault;
            ZodDefault.create = (e, t)=>new ZodDefault({
                    innerType: e,
                    typeName: k.ZodDefault,
                    defaultValue: typeof t.default === "function" ? t.default : ()=>t.default,
                    ...processCreateParams(t)
                });
            class ZodCatch extends ZodType {
                _parse(e) {
                    const { ctx: t } = this._processInputParams(e);
                    const s = {
                        ...t,
                        common: {
                            ...t.common,
                            issues: []
                        }
                    };
                    const a = this._def.innerType._parse({
                        data: s.data,
                        path: s.path,
                        parent: {
                            ...s
                        }
                    });
                    if ((0, i.isAsync)(a)) {
                        return a.then((e)=>({
                                status: "valid",
                                value: e.status === "valid" ? e.value : this._def.catchValue({
                                    get error () {
                                        return new r.ZodError(s.common.issues);
                                    },
                                    input: s.data
                                })
                            }));
                    } else {
                        return {
                            status: "valid",
                            value: a.status === "valid" ? a.value : this._def.catchValue({
                                get error () {
                                    return new r.ZodError(s.common.issues);
                                },
                                input: s.data
                            })
                        };
                    }
                }
                removeCatch() {
                    return this._def.innerType;
                }
            }
            t.ZodCatch = ZodCatch;
            ZodCatch.create = (e, t)=>new ZodCatch({
                    innerType: e,
                    typeName: k.ZodCatch,
                    catchValue: typeof t.catch === "function" ? t.catch : ()=>t.catch,
                    ...processCreateParams(t)
                });
            class ZodNaN extends ZodType {
                _parse(e) {
                    const t = this._getType(e);
                    if (t !== o.ZodParsedType.nan) {
                        const t = this._getOrReturnCtx(e);
                        (0, i.addIssueToContext)(t, {
                            code: r.ZodIssueCode.invalid_type,
                            expected: o.ZodParsedType.nan,
                            received: t.parsedType
                        });
                        return i.INVALID;
                    }
                    return {
                        status: "valid",
                        value: e.data
                    };
                }
            }
            t.ZodNaN = ZodNaN;
            ZodNaN.create = (e)=>new ZodNaN({
                    typeName: k.ZodNaN,
                    ...processCreateParams(e)
                });
            t.BRAND = Symbol("zod_brand");
            class ZodBranded extends ZodType {
                _parse(e) {
                    const { ctx: t } = this._processInputParams(e);
                    const s = t.data;
                    return this._def.type._parse({
                        data: s,
                        path: t.path,
                        parent: t
                    });
                }
                unwrap() {
                    return this._def.type;
                }
            }
            t.ZodBranded = ZodBranded;
            class ZodPipeline extends ZodType {
                _parse(e) {
                    const { status: t, ctx: s } = this._processInputParams(e);
                    if (s.common.async) {
                        const handleAsync = async ()=>{
                            const e = await this._def.in._parseAsync({
                                data: s.data,
                                path: s.path,
                                parent: s
                            });
                            if (e.status === "aborted") return i.INVALID;
                            if (e.status === "dirty") {
                                t.dirty();
                                return (0, i.DIRTY)(e.value);
                            } else {
                                return this._def.out._parseAsync({
                                    data: e.value,
                                    path: s.path,
                                    parent: s
                                });
                            }
                        };
                        return handleAsync();
                    } else {
                        const e = this._def.in._parseSync({
                            data: s.data,
                            path: s.path,
                            parent: s
                        });
                        if (e.status === "aborted") return i.INVALID;
                        if (e.status === "dirty") {
                            t.dirty();
                            return {
                                status: "dirty",
                                value: e.value
                            };
                        } else {
                            return this._def.out._parseSync({
                                data: e.value,
                                path: s.path,
                                parent: s
                            });
                        }
                    }
                }
                static create(e, t) {
                    return new ZodPipeline({
                        in: e,
                        out: t,
                        typeName: k.ZodPipeline
                    });
                }
            }
            t.ZodPipeline = ZodPipeline;
            class ZodReadonly extends ZodType {
                _parse(e) {
                    const t = this._def.innerType._parse(e);
                    const freeze = (e)=>{
                        if ((0, i.isValid)(e)) {
                            e.value = Object.freeze(e.value);
                        }
                        return e;
                    };
                    return (0, i.isAsync)(t) ? t.then((e)=>freeze(e)) : freeze(t);
                }
                unwrap() {
                    return this._def.innerType;
                }
            }
            t.ZodReadonly = ZodReadonly;
            ZodReadonly.create = (e, t)=>new ZodReadonly({
                    innerType: e,
                    typeName: k.ZodReadonly,
                    ...processCreateParams(t)
                });
            function cleanParams(e, t) {
                const s = typeof e === "function" ? e(t) : typeof e === "string" ? {
                    message: e
                } : e;
                const r = typeof s === "string" ? {
                    message: s
                } : s;
                return r;
            }
            function custom(e, t = {}, s) {
                if (e) return ZodAny.create().superRefine((r, a)=>{
                    const n = e(r);
                    if (n instanceof Promise) {
                        return n.then((e)=>{
                            if (!e) {
                                const e = cleanParams(t, r);
                                const n = e.fatal ?? s ?? true;
                                a.addIssue({
                                    code: "custom",
                                    ...e,
                                    fatal: n
                                });
                            }
                        });
                    }
                    if (!n) {
                        const e = cleanParams(t, r);
                        const n = e.fatal ?? s ?? true;
                        a.addIssue({
                            code: "custom",
                            ...e,
                            fatal: n
                        });
                    }
                    return;
                });
                return ZodAny.create();
            }
            t.late = {
                object: ZodObject.lazycreate
            };
            var k;
            (function(e) {
                e["ZodString"] = "ZodString";
                e["ZodNumber"] = "ZodNumber";
                e["ZodNaN"] = "ZodNaN";
                e["ZodBigInt"] = "ZodBigInt";
                e["ZodBoolean"] = "ZodBoolean";
                e["ZodDate"] = "ZodDate";
                e["ZodSymbol"] = "ZodSymbol";
                e["ZodUndefined"] = "ZodUndefined";
                e["ZodNull"] = "ZodNull";
                e["ZodAny"] = "ZodAny";
                e["ZodUnknown"] = "ZodUnknown";
                e["ZodNever"] = "ZodNever";
                e["ZodVoid"] = "ZodVoid";
                e["ZodArray"] = "ZodArray";
                e["ZodObject"] = "ZodObject";
                e["ZodUnion"] = "ZodUnion";
                e["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
                e["ZodIntersection"] = "ZodIntersection";
                e["ZodTuple"] = "ZodTuple";
                e["ZodRecord"] = "ZodRecord";
                e["ZodMap"] = "ZodMap";
                e["ZodSet"] = "ZodSet";
                e["ZodFunction"] = "ZodFunction";
                e["ZodLazy"] = "ZodLazy";
                e["ZodLiteral"] = "ZodLiteral";
                e["ZodEnum"] = "ZodEnum";
                e["ZodEffects"] = "ZodEffects";
                e["ZodNativeEnum"] = "ZodNativeEnum";
                e["ZodOptional"] = "ZodOptional";
                e["ZodNullable"] = "ZodNullable";
                e["ZodDefault"] = "ZodDefault";
                e["ZodCatch"] = "ZodCatch";
                e["ZodPromise"] = "ZodPromise";
                e["ZodBranded"] = "ZodBranded";
                e["ZodPipeline"] = "ZodPipeline";
                e["ZodReadonly"] = "ZodReadonly";
            })(k || (t.ZodFirstPartyTypeKind = k = {}));
            class Class {
                constructor(...e){}
            }
            const instanceOfType = (e, t = {
                message: `Input not instance of ${e.name}`
            })=>custom((t)=>t instanceof e, t);
            t["instanceof"] = instanceOfType;
            const P = ZodString.create;
            t.string = P;
            const w = ZodNumber.create;
            t.number = w;
            const N = ZodNaN.create;
            t.nan = N;
            const O = ZodBigInt.create;
            t.bigint = O;
            const A = ZodBoolean.create;
            t.boolean = A;
            const S = ZodDate.create;
            t.date = S;
            const j = ZodSymbol.create;
            t.symbol = j;
            const E = ZodUndefined.create;
            t.undefined = E;
            const D = ZodNull.create;
            t["null"] = D;
            const L = ZodAny.create;
            t.any = L;
            const U = ZodUnknown.create;
            t.unknown = U;
            const R = ZodNever.create;
            t.never = R;
            const V = ZodVoid.create;
            t["void"] = V;
            const M = ZodArray.create;
            t.array = M;
            const $ = ZodObject.create;
            t.object = $;
            const z = ZodObject.strictCreate;
            t.strictObject = z;
            const F = ZodUnion.create;
            t.union = F;
            const B = ZodDiscriminatedUnion.create;
            t.discriminatedUnion = B;
            const K = ZodIntersection.create;
            t.intersection = K;
            const q = ZodTuple.create;
            t.tuple = q;
            const W = ZodRecord.create;
            t.record = W;
            const Y = ZodMap.create;
            t.map = Y;
            const J = ZodSet.create;
            t.set = J;
            const H = ZodFunction.create;
            t["function"] = H;
            const G = ZodLazy.create;
            t.lazy = G;
            const X = ZodLiteral.create;
            t.literal = X;
            const Q = ZodEnum.create;
            t["enum"] = Q;
            const ee = ZodNativeEnum.create;
            t.nativeEnum = ee;
            const te = ZodPromise.create;
            t.promise = te;
            const se = ZodEffects.create;
            t.effect = se;
            t.transformer = se;
            const re = ZodOptional.create;
            t.optional = re;
            const ae = ZodNullable.create;
            t.nullable = ae;
            const ne = ZodEffects.createWithPreprocess;
            t.preprocess = ne;
            const ie = ZodPipeline.create;
            t.pipeline = ie;
            const ostring = ()=>P().optional();
            t.ostring = ostring;
            const onumber = ()=>w().optional();
            t.onumber = onumber;
            const oboolean = ()=>A().optional();
            t.oboolean = oboolean;
            t.coerce = {
                string: (e)=>ZodString.create({
                        ...e,
                        coerce: true
                    }),
                number: (e)=>ZodNumber.create({
                        ...e,
                        coerce: true
                    }),
                boolean: (e)=>ZodBoolean.create({
                        ...e,
                        coerce: true
                    }),
                bigint: (e)=>ZodBigInt.create({
                        ...e,
                        coerce: true
                    }),
                date: (e)=>ZodDate.create({
                        ...e,
                        coerce: true
                    })
            };
            t.NEVER = i.INVALID;
        }
    };
    var t = {};
    function __nccwpck_require__(s) {
        var r = t[s];
        if (r !== undefined) {
            return r.exports;
        }
        var a = t[s] = {
            exports: {}
        };
        var n = true;
        try {
            e[s].call(a.exports, a, a.exports, __nccwpck_require__);
            n = false;
        } finally{
            if (n) delete t[s];
        }
        return a.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/compiled/zod") + "/";
    var s = __nccwpck_require__(629);
    module.exports = s;
})();
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/compiled/zod-validation-error/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

(()=>{
    "use strict";
    var r = {
        452: (r, e, o)=>{
            var t = Object.create;
            var s = Object.defineProperty;
            var n = Object.getOwnPropertyDescriptor;
            var i = Object.getOwnPropertyNames;
            var a = Object.getPrototypeOf;
            var u = Object.prototype.hasOwnProperty;
            var __export = (r, e)=>{
                for(var o in e)s(r, o, {
                    get: e[o],
                    enumerable: true
                });
            };
            var __copyProps = (r, e, o, t)=>{
                if (e && typeof e === "object" || typeof e === "function") {
                    for (let a of i(e))if (!u.call(r, a) && a !== o) s(r, a, {
                        get: ()=>e[a],
                        enumerable: !(t = n(e, a)) || t.enumerable
                    });
                }
                return r;
            };
            var __toESM = (r, e, o)=>(o = r != null ? t(a(r)) : {}, __copyProps(e || !r || !r.__esModule ? s(o, "default", {
                    value: r,
                    enumerable: true
                }) : o, r));
            var __toCommonJS = (r)=>__copyProps(s({}, "__esModule", {
                    value: true
                }), r);
            var d = {};
            __export(d, {
                ValidationError: ()=>c,
                createMessageBuilder: ()=>createMessageBuilder,
                errorMap: ()=>errorMap,
                fromError: ()=>fromError,
                fromZodError: ()=>fromZodError,
                fromZodIssue: ()=>fromZodIssue,
                isValidationError: ()=>isValidationError,
                isValidationErrorLike: ()=>isValidationErrorLike,
                isZodErrorLike: ()=>isZodErrorLike,
                toValidationError: ()=>toValidationError
            });
            r.exports = __toCommonJS(d);
            function isZodErrorLike(r) {
                return r instanceof Error && r.name === "ZodError" && "issues" in r && Array.isArray(r.issues);
            }
            var c = class extends Error {
                name;
                details;
                constructor(r, e){
                    super(r, e);
                    this.name = "ZodValidationError";
                    this.details = getIssuesFromErrorOptions(e);
                }
                toString() {
                    return this.message;
                }
            };
            function getIssuesFromErrorOptions(r) {
                if (r) {
                    const e = r.cause;
                    if (isZodErrorLike(e)) {
                        return e.issues;
                    }
                }
                return [];
            }
            function isValidationError(r) {
                return r instanceof c;
            }
            function isValidationErrorLike(r) {
                return r instanceof Error && r.name === "ZodValidationError";
            }
            var f = __toESM(o(788));
            var p = __toESM(o(788));
            function isNonEmptyArray(r) {
                return r.length !== 0;
            }
            var l = /[$_\p{ID_Start}][$\u200c\u200d\p{ID_Continue}]*/u;
            function joinPath(r) {
                if (r.length === 1) {
                    return r[0].toString();
                }
                return r.reduce((r, e)=>{
                    if (typeof e === "number") {
                        return r + "[" + e.toString() + "]";
                    }
                    if (e.includes('"')) {
                        return r + '["' + escapeQuotes(e) + '"]';
                    }
                    if (!l.test(e)) {
                        return r + '["' + e + '"]';
                    }
                    const o = r.length === 0 ? "" : ".";
                    return r + o + e;
                }, "");
            }
            function escapeQuotes(r) {
                return r.replace(/"/g, '\\"');
            }
            var m = "; ";
            var g = 99;
            var E = "Validation error";
            var _ = ": ";
            var v = ", or ";
            function createMessageBuilder(r = {}) {
                const { issueSeparator: e = m, unionSeparator: o = v, prefixSeparator: t = _, prefix: s = E, includePath: n = true, maxIssuesInMessage: i = g } = r;
                return (r)=>{
                    const a = r.slice(0, i).map((r)=>getMessageFromZodIssue({
                            issue: r,
                            issueSeparator: e,
                            unionSeparator: o,
                            includePath: n
                        })).join(e);
                    return prefixMessage(a, s, t);
                };
            }
            function getMessageFromZodIssue(r) {
                const { issue: e, issueSeparator: o, unionSeparator: t, includePath: s } = r;
                if (e.code === p.ZodIssueCode.invalid_union) {
                    return e.unionErrors.reduce((r, e)=>{
                        const n = e.issues.map((r)=>getMessageFromZodIssue({
                                issue: r,
                                issueSeparator: o,
                                unionSeparator: t,
                                includePath: s
                            })).join(o);
                        if (!r.includes(n)) {
                            r.push(n);
                        }
                        return r;
                    }, []).join(t);
                }
                if (e.code === p.ZodIssueCode.invalid_arguments) {
                    return [
                        e.message,
                        ...e.argumentsError.issues.map((r)=>getMessageFromZodIssue({
                                issue: r,
                                issueSeparator: o,
                                unionSeparator: t,
                                includePath: s
                            }))
                    ].join(o);
                }
                if (e.code === p.ZodIssueCode.invalid_return_type) {
                    return [
                        e.message,
                        ...e.returnTypeError.issues.map((r)=>getMessageFromZodIssue({
                                issue: r,
                                issueSeparator: o,
                                unionSeparator: t,
                                includePath: s
                            }))
                    ].join(o);
                }
                if (s && isNonEmptyArray(e.path)) {
                    if (e.path.length === 1) {
                        const r = e.path[0];
                        if (typeof r === "number") {
                            return `${e.message} at index ${r}`;
                        }
                    }
                    return `${e.message} at "${joinPath(e.path)}"`;
                }
                return e.message;
            }
            function prefixMessage(r, e, o) {
                if (e !== null) {
                    if (r.length > 0) {
                        return [
                            e,
                            r
                        ].join(o);
                    }
                    return e;
                }
                if (r.length > 0) {
                    return r;
                }
                return E;
            }
            function fromZodIssue(r, e = {}) {
                const o = createMessageBuilderFromOptions(e);
                const t = o([
                    r
                ]);
                return new c(t, {
                    cause: new f.ZodError([
                        r
                    ])
                });
            }
            function createMessageBuilderFromOptions(r) {
                if ("messageBuilder" in r) {
                    return r.messageBuilder;
                }
                return createMessageBuilder(r);
            }
            var errorMap = (r, e)=>{
                const o = fromZodIssue({
                    ...r,
                    message: r.message ?? e.defaultError
                });
                return {
                    message: o.message
                };
            };
            function fromZodError(r, e = {}) {
                if (!isZodErrorLike(r)) {
                    throw new TypeError(`Invalid zodError param; expected instance of ZodError. Did you mean to use the "${fromError.name}" method instead?`);
                }
                return fromZodErrorWithoutRuntimeCheck(r, e);
            }
            function fromZodErrorWithoutRuntimeCheck(r, e = {}) {
                const o = r.errors;
                let t;
                if (isNonEmptyArray(o)) {
                    const r = createMessageBuilderFromOptions2(e);
                    t = r(o);
                } else {
                    t = r.message;
                }
                return new c(t, {
                    cause: r
                });
            }
            function createMessageBuilderFromOptions2(r) {
                if ("messageBuilder" in r) {
                    return r.messageBuilder;
                }
                return createMessageBuilder(r);
            }
            var toValidationError = (r = {})=>(e)=>{
                    if (isZodErrorLike(e)) {
                        return fromZodErrorWithoutRuntimeCheck(e, r);
                    }
                    if (e instanceof Error) {
                        return new c(e.message, {
                            cause: e
                        });
                    }
                    return new c("Unknown error");
                };
            function fromError(r, e = {}) {
                return toValidationError(e)(r);
            }
            0 && 0;
        },
        788: (r)=>{
            r.exports = __turbopack_context__.r("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/compiled/zod/index.cjs [app-rsc] (ecmascript)");
        }
    };
    var e = {};
    function __nccwpck_require__(o) {
        var t = e[o];
        if (t !== undefined) {
            return t.exports;
        }
        var s = e[o] = {
            exports: {}
        };
        var n = true;
        try {
            r[o](s, s.exports, __nccwpck_require__);
            n = false;
        } finally{
            if (n) delete e[o];
        }
        return s.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/compiled/zod-validation-error") + "/";
    var o = __nccwpck_require__(452);
    module.exports = o;
})();
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/zod.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatZodError",
    ()=>formatZodError,
    "normalizeZodErrors",
    ()=>normalizeZodErrors,
    "reportZodError",
    ()=>reportZodError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/compiled/zod/index.cjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2d$validation$2d$error$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/compiled/zod-validation-error/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$output$2f$log$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/build/output/log.js [app-rsc] (ecmascript)");
;
;
;
function processZodErrorMessage(issue) {
    let message = issue.message;
    let path;
    if (issue.path.length > 0) {
        if (issue.path.length === 1) {
            const identifier = issue.path[0];
            if (typeof identifier === 'number') {
                // The first identifier inside path is a number
                path = `index ${identifier}`;
            } else {
                path = `"${identifier}"`;
            }
        } else {
            // joined path to be shown in the error message
            path = `"${issue.path.reduce((acc, cur)=>{
                if (typeof cur === 'number') {
                    // array index
                    return `${acc}[${cur}]`;
                }
                if (cur.includes('"')) {
                    // escape quotes
                    return `${acc}["${cur.replaceAll('"', '\\"')}"]`;
                }
                // dot notation
                const separator = acc.length === 0 ? '' : '.';
                return acc + separator + cur;
            }, '')}"`;
        }
    } else {
        path = '';
    }
    if (issue.code === 'invalid_type' && issue.received === __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ZodParsedType"].undefined) {
        // Missing key in object.
        return `${path} is missing, expected ${issue.expected}`;
    }
    if (issue.code === 'invalid_enum_value') {
        // Remove "Invalid enum value" prefix from zod default error message
        return `Expected ${__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["util"].joinValues(issue.options)}, received '${issue.received}' at ${path}`;
    }
    return message + (path ? ` at ${path}` : '');
}
function normalizeZodErrors(error) {
    return error.issues.flatMap((issue)=>{
        const issues = [
            {
                issue,
                message: processZodErrorMessage(issue)
            }
        ];
        if ('unionErrors' in issue) {
            for (const unionError of issue.unionErrors){
                issues.push(...normalizeZodErrors(unionError));
            }
        }
        return issues;
    });
}
function formatZodError(prefix, error) {
    return Object.defineProperty(new Error((0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2d$validation$2d$error$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fromZodError"])(error, {
        prefix: prefix
    }).toString()), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
}
function reportZodError(prefix, error) {
    __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$output$2f$log$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["error"](formatZodError(prefix, error).message);
} //# sourceMappingURL=zod.js.map
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/build/segment-config/app/app-segment-config.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AppSegmentConfigSchemaKeys",
    ()=>AppSegmentConfigSchemaKeys,
    "parseAppSegmentConfig",
    ()=>parseAppSegmentConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/compiled/zod/index.cjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$zod$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/zod.js [app-rsc] (ecmascript)");
;
;
const CookieSchema = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
    value: __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
    httpOnly: __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].boolean().optional(),
    path: __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string().optional()
}).strict();
const RuntimeSampleSchema = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    cookies: __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(CookieSchema).optional(),
    headers: __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].tuple([
        __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
        __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string()
    ])).optional(),
    params: __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
        __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string())
    ])).optional(),
    searchParams: __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
        __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string()),
        __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].undefined()
    ])).optional()
}).strict();
const StaticPrefetchSchema = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    mode: __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal('static'),
    from: __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string()).optional(),
    expectUnableToVerify: __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].boolean().optional()
}).strict();
const RuntimePrefetchSchema = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    mode: __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal('runtime'),
    samples: __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(RuntimeSampleSchema).min(1),
    from: __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string()).optional(),
    expectUnableToVerify: __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].boolean().optional()
}).strict();
const PrefetchSchema = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].discriminatedUnion('mode', [
    StaticPrefetchSchema,
    RuntimePrefetchSchema
]);
/**
 * The schema for configuration for a page.
 */ const AppSegmentConfigSchema = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].object({
    /**
   * The number of seconds to revalidate the page or false to disable revalidation.
   */ revalidate: __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].number().int().nonnegative(),
        __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].literal(false)
    ]).optional(),
    /**
   * Whether the page supports dynamic parameters.
   */ dynamicParams: __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].boolean().optional(),
    /**
   * The dynamic behavior of the page.
   */ dynamic: __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].enum([
        'auto',
        'error',
        'force-static',
        'force-dynamic'
    ]).optional(),
    /**
   * The caching behavior of the page.
   */ fetchCache: __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].enum([
        'auto',
        'default-cache',
        'only-cache',
        'force-cache',
        'force-no-store',
        'default-no-store',
        'only-no-store'
    ]).optional(),
    /**
   * How this segment should be prefetched.
   */ unstable_prefetch: PrefetchSchema.optional(),
    /**
   * The preferred region for the page.
   */ preferredRegion: __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string(),
        __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].string())
    ]).optional(),
    /**
   * The runtime to use for the page.
   */ runtime: __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].enum([
        'edge',
        'nodejs'
    ]).optional(),
    /**
   * The maximum duration for the page in seconds.
   */ maxDuration: __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$zod$2f$index$2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["z"].number().int().nonnegative().optional()
});
function parseAppSegmentConfig(data, route) {
    const parsed = AppSegmentConfigSchema.safeParse(data, {
        errorMap: (issue, ctx)=>{
            if (issue.path.length === 1) {
                switch(issue.path[0]){
                    case 'revalidate':
                        {
                            return {
                                message: `Invalid revalidate value ${JSON.stringify(ctx.data)} on "${route}", must be a non-negative number or false`
                            };
                        }
                    case 'unstable_prefetch':
                        {
                            return {
                                // @TODO replace this link with a link to the docs when they are written
                                message: `Invalid unstable_prefetch value ${JSON.stringify(ctx.data)} on "${route}", must be an object with a mode of "static" or "runtime". Read more at https://nextjs.org/docs/messages/invalid-prefetch-configuration`
                            };
                        }
                    default:
                }
            }
            return {
                message: ctx.defaultError
            };
        }
    });
    if (!parsed.success) {
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$zod$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["formatZodError"])(`Invalid segment configuration options detected for "${route}". Read more at https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config`, parsed.error);
    }
    return parsed.data;
}
const AppSegmentConfigSchemaKeys = AppSegmentConfigSchema.keyof().options; //# sourceMappingURL=app-segment-config.js.map
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/route-modules/checks.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isAppPageRouteModule",
    ()=>isAppPageRouteModule,
    "isAppRouteRouteModule",
    ()=>isAppRouteRouteModule,
    "isPagesAPIRouteModule",
    ()=>isPagesAPIRouteModule,
    "isPagesRouteModule",
    ()=>isPagesRouteModule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript)");
;
function isAppRouteRouteModule(routeModule) {
    return routeModule.definition.kind === __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RouteKind"].APP_ROUTE;
}
function isAppPageRouteModule(routeModule) {
    return routeModule.definition.kind === __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RouteKind"].APP_PAGE;
}
function isPagesRouteModule(routeModule) {
    return routeModule.definition.kind === __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RouteKind"].PAGES;
}
function isPagesAPIRouteModule(routeModule) {
    return routeModule.definition.kind === __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RouteKind"].PAGES_API;
} //# sourceMappingURL=checks.js.map
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/page-path/ensure-leading-slash.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * For a given page path, this function ensures that there is a leading slash.
 * If there is not a leading slash, one is added, otherwise it is noop.
 */ __turbopack_context__.s([
    "ensureLeadingSlash",
    ()=>ensureLeadingSlash
]);
function ensureLeadingSlash(path) {
    return path.startsWith('/') ? path : `/${path}`;
} //# sourceMappingURL=ensure-leading-slash.js.map
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeAppPath",
    ()=>normalizeAppPath,
    "normalizeRscURL",
    ()=>normalizeRscURL
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$page$2d$path$2f$ensure$2d$leading$2d$slash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/page-path/ensure-leading-slash.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/segment.js [app-rsc] (ecmascript)");
;
;
function normalizeAppPath(route) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$page$2d$path$2f$ensure$2d$leading$2d$slash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureLeadingSlash"])(route.split('/').reduce((pathname, segment, index, segments)=>{
        // Empty segments are ignored.
        if (!segment) {
            return pathname;
        }
        // Groups are ignored.
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isGroupSegment"])(segment)) {
            return pathname;
        }
        // Parallel segments are ignored.
        if (segment[0] === '@') {
            return pathname;
        }
        // The last segment (if it's a leaf) should be ignored.
        if ((segment === 'page' || segment === 'route') && index === segments.length - 1) {
            return pathname;
        }
        return `${pathname}/${segment}`;
    }, ''));
}
function normalizeRscURL(url) {
    return url.replace(/\.rsc($|\?)/, '$1');
} //# sourceMappingURL=app-paths.js.map
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/router/utils/interception-routes.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INTERCEPTION_ROUTE_MARKERS",
    ()=>INTERCEPTION_ROUTE_MARKERS,
    "extractInterceptionRouteInformation",
    ()=>extractInterceptionRouteInformation,
    "isInterceptionRouteAppPath",
    ()=>isInterceptionRouteAppPath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)");
;
const INTERCEPTION_ROUTE_MARKERS = [
    '(..)(..)',
    '(.)',
    '(..)',
    '(...)'
];
function isInterceptionRouteAppPath(path) {
    // TODO-APP: add more serious validation
    return path.split('/').find((segment)=>INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m))) !== undefined;
}
function extractInterceptionRouteInformation(path) {
    let interceptingRoute;
    let marker;
    let interceptedRoute;
    for (const segment of path.split('/')){
        marker = INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
        if (marker) {
            ;
            [interceptingRoute, interceptedRoute] = path.split(marker, 2);
            break;
        }
    }
    if (!interceptingRoute || !marker || !interceptedRoute) {
        throw Object.defineProperty(new Error(`Invalid interception route: ${path}. Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>`), "__NEXT_ERROR_CODE", {
            value: "E269",
            enumerable: false,
            configurable: true
        });
    }
    interceptingRoute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAppPath"])(interceptingRoute) // normalize the path, e.g. /(blog)/feed -> /feed
    ;
    switch(marker){
        case '(.)':
            // (.) indicates that we should match with sibling routes, so we just need to append the intercepted route to the intercepting route
            if (interceptingRoute === '/') {
                interceptedRoute = `/${interceptedRoute}`;
            } else {
                interceptedRoute = interceptingRoute + '/' + interceptedRoute;
            }
            break;
        case '(..)':
            // (..) indicates that we should match at one level up, so we need to remove the last segment of the intercepting route
            if (interceptingRoute === '/') {
                throw Object.defineProperty(new Error(`Invalid interception route: ${path}. Cannot use (..) marker at the root level, use (.) instead.`), "__NEXT_ERROR_CODE", {
                    value: "E207",
                    enumerable: false,
                    configurable: true
                });
            }
            interceptedRoute = interceptingRoute.split('/').slice(0, -1).concat(interceptedRoute).join('/');
            break;
        case '(...)':
            // (...) will match the route segment in the root directory, so we need to use the root directory to prepend the intercepted route
            interceptedRoute = '/' + interceptedRoute;
            break;
        case '(..)(..)':
            // (..)(..) indicates that we should match at two levels up, so we need to remove the last two segments of the intercepting route
            const splitInterceptingRoute = interceptingRoute.split('/');
            if (splitInterceptingRoute.length <= 2) {
                throw Object.defineProperty(new Error(`Invalid interception route: ${path}. Cannot use (..)(..) marker at the root level or one level up.`), "__NEXT_ERROR_CODE", {
                    value: "E486",
                    enumerable: false,
                    configurable: true
                });
            }
            interceptedRoute = splitInterceptingRoute.slice(0, -2).concat(interceptedRoute).join('/');
            break;
        default:
            throw Object.defineProperty(new Error('Invariant: unexpected marker'), "__NEXT_ERROR_CODE", {
                value: "E112",
                enumerable: false,
                configurable: true
            });
    }
    return {
        interceptingRoute,
        interceptedRoute
    };
} //# sourceMappingURL=interception-routes.js.map
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/router/utils/get-segment-param.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getParamProperties",
    ()=>getParamProperties,
    "getSegmentParam",
    ()=>getSegmentParam,
    "isCatchAll",
    ()=>isCatchAll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/router/utils/interception-routes.js [app-rsc] (ecmascript)");
;
function getSegmentParam(segment) {
    const interceptionMarker = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INTERCEPTION_ROUTE_MARKERS"].find((marker)=>segment.startsWith(marker));
    // if an interception marker is part of the path segment, we need to jump ahead
    // to the relevant portion for param parsing
    if (interceptionMarker) {
        segment = segment.slice(interceptionMarker.length);
    }
    if (segment.startsWith('[[...') && segment.endsWith(']]')) {
        return {
            // TODO-APP: Optional catchall does not currently work with parallel routes,
            // so for now aren't handling a potential interception marker.
            type: 'optional-catchall',
            param: segment.slice(5, -2)
        };
    }
    if (segment.startsWith('[...') && segment.endsWith(']')) {
        return {
            type: interceptionMarker ? `catchall-intercepted-${interceptionMarker}` : 'catchall',
            param: segment.slice(4, -1)
        };
    }
    if (segment.startsWith('[') && segment.endsWith(']')) {
        return {
            type: interceptionMarker ? `dynamic-intercepted-${interceptionMarker}` : 'dynamic',
            param: segment.slice(1, -1)
        };
    }
    return null;
}
function isCatchAll(type) {
    return type === 'catchall' || type === 'catchall-intercepted-(..)(..)' || type === 'catchall-intercepted-(.)' || type === 'catchall-intercepted-(..)' || type === 'catchall-intercepted-(...)' || type === 'optional-catchall';
}
function getParamProperties(paramType) {
    let repeat = false;
    let optional = false;
    switch(paramType){
        case 'catchall':
        case 'catchall-intercepted-(..)(..)':
        case 'catchall-intercepted-(.)':
        case 'catchall-intercepted-(..)':
        case 'catchall-intercepted-(...)':
            repeat = true;
            break;
        case 'optional-catchall':
            repeat = true;
            optional = true;
            break;
        case 'dynamic':
        case 'dynamic-intercepted-(..)(..)':
        case 'dynamic-intercepted-(.)':
        case 'dynamic-intercepted-(..)':
        case 'dynamic-intercepted-(...)':
            break;
        default:
            paramType;
    }
    return {
        repeat,
        optional
    };
} //# sourceMappingURL=get-segment-param.js.map
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/build/static-paths/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Encodes a parameter value using the provided encoder.
 *
 * @param value - The value to encode.
 * @param encoder - The encoder to use.
 * @returns The encoded value.
 */ __turbopack_context__.s([
    "createFallbackRouteParam",
    ()=>createFallbackRouteParam,
    "encodeParam",
    ()=>encodeParam,
    "normalizePathname",
    ()=>normalizePathname
]);
function encodeParam(value, encoder) {
    let replaceValue;
    if (Array.isArray(value)) {
        replaceValue = value.map(encoder).join('/');
    } else {
        replaceValue = encoder(value);
    }
    return replaceValue;
}
function normalizePathname(pathname) {
    return pathname.replace(/\\/g, '/').replace(/(?!^)\/$/, '');
}
function createFallbackRouteParam(paramName, paramType, isParallelRouteParam) {
    return {
        paramName,
        paramType,
        isParallelRouteParam
    };
} //# sourceMappingURL=utils.js.map
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/build/segment-config/app/app-segments.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "collectFallbackRouteParams",
    ()=>collectFallbackRouteParams,
    "collectSegments",
    ()=>collectSegments
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$segment$2d$config$2f$app$2f$app$2d$segment$2d$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/build/segment-config/app/app-segment-config.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$checks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/route-modules/checks.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$client$2d$and$2d$server$2d$references$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/lib/client-and-server-references.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$segment$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/router/utils/get-segment-param.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$app$2d$dir$2d$module$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/lib/app-dir-module.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/segment.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$static$2d$paths$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/build/static-paths/utils.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
/**
 * Parses the app config and attaches it to the segment.
 */ function attach(segment, userland, route) {
    // If the userland is not an object, then we can't do anything with it.
    if (typeof userland !== 'object' || userland === null) {
        return;
    }
    // Try to parse the application configuration.
    const config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$segment$2d$config$2f$app$2f$app$2d$segment$2d$config$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseAppSegmentConfig"])(userland, route);
    // If there was any keys on the config, then attach it to the segment.
    if (Object.keys(config).length > 0) {
        segment.config = config;
    }
    if ('generateStaticParams' in userland && typeof userland.generateStaticParams === 'function') {
        var _segment_config;
        segment.generateStaticParams = userland.generateStaticParams;
        // Validate that `generateStaticParams` makes sense in this context.
        if (((_segment_config = segment.config) == null ? void 0 : _segment_config.runtime) === 'edge') {
            throw Object.defineProperty(new Error('Edge runtime is not supported with `generateStaticParams`.'), "__NEXT_ERROR_CODE", {
                value: "E502",
                enumerable: false,
                configurable: true
            });
        }
    }
}
/**
 * Walks the loader tree and collects the generate parameters for each segment.
 *
 * @param routeModule the app page route module
 * @returns the segments for the app page route module
 */ async function collectAppPageSegments(routeModule) {
    // We keep track of unique segments, since with parallel routes, it's possible
    // to see the same segment multiple times.
    const uniqueSegments = new Map();
    const queue = [
        [
            routeModule.userland.loaderTree,
            [],
            false
        ]
    ];
    while(queue.length > 0){
        const [loaderTree, currentSegments, isParallelRouteSegment] = queue.shift();
        const [name, parallelRoutes] = loaderTree;
        // Process current node
        const { mod: userland, filePath } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$app$2d$dir$2d$module$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getLayoutOrPageModule"])(loaderTree);
        const isClientComponent = userland && (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$client$2d$and$2d$server$2d$references$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isClientReference"])(userland);
        const { param: paramName, type: paramType } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$segment$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSegmentParam"])(name) ?? {};
        const segment = {
            name,
            paramName,
            paramType,
            filePath,
            config: undefined,
            isDynamicSegment: !!paramName,
            generateStaticParams: undefined,
            isParallelRouteSegment
        };
        // Only server components can have app segment configurations
        if (!isClientComponent) {
            attach(segment, userland, routeModule.definition.pathname);
        }
        // Create a unique key for the segment
        const segmentKey = getSegmentKey(segment);
        if (!uniqueSegments.has(segmentKey)) {
            uniqueSegments.set(segmentKey, segment);
        }
        const updatedSegments = [
            ...currentSegments,
            segment
        ];
        // If this is a page segment, we've reached a leaf node
        if (name === __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PAGE_SEGMENT_KEY"]) {
            // Add all segments in the current path, preferring non-parallel segments
            updatedSegments.forEach((seg)=>{
                const key = getSegmentKey(seg);
                if (!uniqueSegments.has(key)) {
                    uniqueSegments.set(key, seg);
                }
            });
        }
        // Add all parallel routes to the queue
        for(const parallelRouteKey in parallelRoutes){
            const parallelRoute = parallelRoutes[parallelRouteKey];
            queue.push([
                parallelRoute,
                updatedSegments,
                // A parallel route segment is one that descends from a segment that is
                // not children or descends from a parallel route segment.
                isParallelRouteSegment || parallelRouteKey !== 'children'
            ]);
        }
    }
    return Array.from(uniqueSegments.values());
}
function getSegmentKey(segment) {
    return `${segment.name}-${segment.filePath ?? ''}-${segment.paramName ?? ''}-${segment.isParallelRouteSegment ? 'pr' : 'np'}`;
}
/**
 * Collects the segments for a given app route module.
 *
 * @param routeModule the app route module
 * @returns the segments for the app route module
 */ function collectAppRouteSegments(routeModule) {
    // Get the pathname parts, slice off the first element (which is empty).
    const parts = routeModule.definition.pathname.split('/').slice(1);
    if (parts.length === 0) {
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('Expected at least one segment'), "__NEXT_ERROR_CODE", {
            value: "E580",
            enumerable: false,
            configurable: true
        });
    }
    // Generate all the segments.
    const segments = parts.map((name)=>{
        const { param: paramName, type: paramType } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$segment$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSegmentParam"])(name) ?? {};
        return {
            name,
            paramName,
            paramType,
            filePath: undefined,
            isDynamicSegment: !!paramName,
            config: undefined,
            generateStaticParams: undefined,
            isParallelRouteSegment: undefined
        };
    });
    // We know we have at least one, we verified this above. We should get the
    // last segment which represents the root route module.
    const segment = segments[segments.length - 1];
    segment.filePath = routeModule.definition.filename;
    // Extract the segment config from the userland module.
    attach(segment, routeModule.userland, routeModule.definition.pathname);
    return segments;
}
function collectSegments(routeModule) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$checks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAppRouteRouteModule"])(routeModule)) {
        return collectAppRouteSegments(routeModule);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$checks$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isAppPageRouteModule"])(routeModule)) {
        return collectAppPageSegments(routeModule);
    }
    throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('Expected a route module to be one of app route or page'), "__NEXT_ERROR_CODE", {
        value: "E568",
        enumerable: false,
        configurable: true
    });
}
function collectFallbackRouteParams(routeModule) {
    const uniqueSegments = new Map();
    const queue = [
        [
            routeModule.userland.loaderTree,
            false
        ]
    ];
    while(queue.length > 0){
        const [loaderTree, isParallelRouteSegment] = queue.shift();
        const [name, parallelRoutes] = loaderTree;
        // Handle this segment (if it's a dynamic segment param).
        const segmentParam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$segment$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSegmentParam"])(name);
        if (segmentParam) {
            const key = `${name}-${segmentParam.param}-${isParallelRouteSegment ? 'pr' : 'np'}`;
            if (!uniqueSegments.has(key)) {
                uniqueSegments.set(key, (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$static$2d$paths$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createFallbackRouteParam"])(segmentParam.param, segmentParam.type, isParallelRouteSegment));
            }
        }
        // Add all of this segment's parallel routes to the queue.
        for(const parallelRouteKey in parallelRoutes){
            const parallelRoute = parallelRoutes[parallelRouteKey];
            queue.push([
                parallelRoute,
                // A parallel route segment is one that descends from a segment that is
                // not children or descends from a parallel route segment.
                isParallelRouteSegment || parallelRouteKey !== 'children'
            ]);
        }
    }
    return Array.from(uniqueSegments.values());
} //# sourceMappingURL=app-segments.js.map
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Web vitals provided to _app.reportWebVitals by Core Web Vitals plugin developed by Google Chrome team.
 * https://nextjs.org/blog/next-9-4#integrated-web-vitals-reporting
 */ __turbopack_context__.s([
    "DecodeError",
    ()=>DecodeError,
    "MiddlewareNotFoundError",
    ()=>MiddlewareNotFoundError,
    "MissingStaticPage",
    ()=>MissingStaticPage,
    "NormalizeError",
    ()=>NormalizeError,
    "PageNotFoundError",
    ()=>PageNotFoundError,
    "SP",
    ()=>SP,
    "ST",
    ()=>ST,
    "WEB_VITALS",
    ()=>WEB_VITALS,
    "execOnce",
    ()=>execOnce,
    "getDisplayName",
    ()=>getDisplayName,
    "getLocationOrigin",
    ()=>getLocationOrigin,
    "getURL",
    ()=>getURL,
    "isAbsoluteUrl",
    ()=>isAbsoluteUrl,
    "isResSent",
    ()=>isResSent,
    "loadGetInitialProps",
    ()=>loadGetInitialProps,
    "normalizeRepeatedSlashes",
    ()=>normalizeRepeatedSlashes,
    "stringifyError",
    ()=>stringifyError
]);
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return (...args)=>{
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (App.prototype?.getInitialProps) {
            const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = `Cannot find module for page: ${page}`;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = `Cannot find the middleware module`;
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/lib/route-pattern-normalizer.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Route pattern normalization utilities for path-to-regexp compatibility.
 *
 * path-to-regexp 6.3.0+ introduced stricter validation that rejects certain
 * patterns commonly used in Next.js interception routes. This module provides
 * normalization functions to make Next.js route patterns compatible with the
 * updated library while preserving all functionality.
 */ /**
 * Internal separator used to normalize adjacent parameter patterns.
 * This unique marker is inserted between adjacent parameters and stripped out
 * during parameter extraction to avoid conflicts with real URL content.
 */ __turbopack_context__.s([
    "PARAM_SEPARATOR",
    ()=>PARAM_SEPARATOR,
    "hasAdjacentParameterIssues",
    ()=>hasAdjacentParameterIssues,
    "normalizeAdjacentParameters",
    ()=>normalizeAdjacentParameters,
    "normalizeTokensForRegexp",
    ()=>normalizeTokensForRegexp,
    "stripNormalizedSeparators",
    ()=>stripNormalizedSeparators,
    "stripParameterSeparators",
    ()=>stripParameterSeparators
]);
const PARAM_SEPARATOR = '_NEXTSEP_';
function hasAdjacentParameterIssues(route) {
    if (typeof route !== 'string') return false;
    // Check for interception route markers followed immediately by parameters
    // Pattern: /(.):param, /(..):param, /(...):param, /(.)(.):param etc.
    // These patterns cause "Must have text between two parameters" errors
    if (/\/\(\.{1,3}\):[^/\s]+/.test(route)) {
        return true;
    }
    // Check for basic adjacent parameters without separators
    // Pattern: :param1:param2 (but not :param* or other URL patterns)
    if (/:[a-zA-Z_][a-zA-Z0-9_]*:[a-zA-Z_][a-zA-Z0-9_]*/.test(route)) {
        return true;
    }
    return false;
}
function normalizeAdjacentParameters(route) {
    let normalized = route;
    // Handle interception route patterns: (.):param -> (.)_NEXTSEP_:param
    normalized = normalized.replace(/(\([^)]*\)):([^/\s]+)/g, `$1${PARAM_SEPARATOR}:$2`);
    // Handle other adjacent parameter patterns: :param1:param2 -> :param1_NEXTSEP_:param2
    normalized = normalized.replace(/:([^:/\s)]+)(?=:)/g, `:$1${PARAM_SEPARATOR}`);
    return normalized;
}
function normalizeTokensForRegexp(tokens) {
    return tokens.map((token)=>{
        // Token union type: Token = string | TokenObject
        // Literal path segments are strings, parameters/wildcards are objects
        if (typeof token === 'object' && token !== null && // Not all token objects have 'modifier' property (e.g., simple text tokens)
        'modifier' in token && // Only repeating modifiers (* or +) cause the validation error
        // Other modifiers like '?' (optional) are fine
        (token.modifier === '*' || token.modifier === '+') && // Token objects can have different shapes depending on route pattern
        'prefix' in token && 'suffix' in token && // Both prefix and suffix must be empty strings
        // This is what causes the validation error in path-to-regexp
        token.prefix === '' && token.suffix === '') {
            // Add minimal prefix to satisfy path-to-regexp validation
            // We use '/' as it's the most common path delimiter and won't break route matching
            // The prefix gets used in regex generation but doesn't affect parameter extraction
            return {
                ...token,
                prefix: '/'
            };
        }
        return token;
    });
}
function stripNormalizedSeparators(pathname) {
    // Remove separator after interception route markers
    // Pattern: (.)_NEXTSEP_ -> (.), (..)_NEXTSEP_ -> (..), etc.
    // The separator appears after the closing paren of interception markers
    return pathname.replace(new RegExp(`\\)${PARAM_SEPARATOR}`, 'g'), ')');
}
function stripParameterSeparators(params) {
    const cleaned = {};
    for (const [key, value] of Object.entries(params)){
        if (typeof value === 'string') {
            // Remove the separator if it appears at the start of parameter values
            cleaned[key] = value.replace(new RegExp(`^${PARAM_SEPARATOR}`), '');
        } else if (Array.isArray(value)) {
            // Handle array parameters (from repeated route segments)
            cleaned[key] = value.map((item)=>typeof item === 'string' ? item.replace(new RegExp(`^${PARAM_SEPARATOR}`), '') : item);
        } else {
            cleaned[key] = value;
        }
    }
    return cleaned;
} //# sourceMappingURL=route-pattern-normalizer.js.map
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/router/utils/route-match-utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Client-safe utilities for route matching that don't import server-side
 * utilities to avoid bundling issues with Turbopack
 */ __turbopack_context__.s([
    "safeCompile",
    ()=>safeCompile,
    "safePathToRegexp",
    ()=>safePathToRegexp,
    "safeRegexpToFunction",
    ()=>safeRegexpToFunction,
    "safeRouteMatcher",
    ()=>safeRouteMatcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/compiled/path-to-regexp/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/lib/route-pattern-normalizer.js [app-rsc] (ecmascript)");
;
;
function safePathToRegexp(route, keys, options) {
    if (typeof route !== 'string') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pathToRegexp"])(route, keys, options);
    }
    // Check if normalization is needed and cache the result
    const needsNormalization = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasAdjacentParameterIssues"])(route);
    const routeToUse = needsNormalization ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAdjacentParameters"])(route) : route;
    try {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pathToRegexp"])(routeToUse, keys, options);
    } catch (error) {
        // Only try normalization if we haven't already normalized
        if (!needsNormalization) {
            try {
                const normalizedRoute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAdjacentParameters"])(route);
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pathToRegexp"])(normalizedRoute, keys, options);
            } catch (retryError) {
                // If that doesn't work, fall back to original error
                throw error;
            }
        }
        throw error;
    }
}
function safeCompile(route, options) {
    // Check if normalization is needed and cache the result
    const needsNormalization = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasAdjacentParameterIssues"])(route);
    const routeToUse = needsNormalization ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAdjacentParameters"])(route) : route;
    try {
        const compiler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compile"])(routeToUse, options);
        // If we normalized the route, wrap the compiler to strip separators from output
        // The normalization inserts _NEXTSEP_ as a literal string in the pattern to satisfy
        // path-to-regexp validation, but we don't want it in the final compiled URL
        if (needsNormalization) {
            return (params)=>{
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripNormalizedSeparators"])(compiler(params));
            };
        }
        return compiler;
    } catch (error) {
        // Only try normalization if we haven't already normalized
        if (!needsNormalization) {
            try {
                const normalizedRoute = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAdjacentParameters"])(route);
                const compiler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["compile"])(normalizedRoute, options);
                // Wrap the compiler to strip separators from output
                return (params)=>{
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripNormalizedSeparators"])(compiler(params));
                };
            } catch (retryError) {
                // If that doesn't work, fall back to original error
                throw error;
            }
        }
        throw error;
    }
}
function safeRegexpToFunction(regexp, keys) {
    const originalMatcher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$path$2d$to$2d$regexp$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["regexpToFunction"])(regexp, keys || []);
    return (pathname)=>{
        const result = originalMatcher(pathname);
        if (!result) return false;
        // Clean parameters before returning
        return {
            ...result,
            params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripParameterSeparators"])(result.params)
        };
    };
}
function safeRouteMatcher(matcherFn) {
    return (pathname)=>{
        const result = matcherFn(pathname);
        if (!result) return false;
        // Clean parameters before returning
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$route$2d$pattern$2d$normalizer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripParameterSeparators"])(result);
    };
} //# sourceMappingURL=route-match-utils.js.map
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/router/utils/route-matcher.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRouteMatcher",
    ()=>getRouteMatcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$route$2d$match$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/router/utils/route-match-utils.js [app-rsc] (ecmascript)");
;
;
function getRouteMatcher({ re, groups }) {
    const rawMatcher = (pathname)=>{
        const routeMatch = re.exec(pathname);
        if (!routeMatch) return false;
        const decode = (param)=>{
            try {
                return decodeURIComponent(param);
            } catch  {
                throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DecodeError"]('failed to decode param'), "__NEXT_ERROR_CODE", {
                    value: "E528",
                    enumerable: false,
                    configurable: true
                });
            }
        };
        const params = {};
        for (const [key, group] of Object.entries(groups)){
            const match = routeMatch[group.pos];
            if (match !== undefined) {
                if (group.repeat) {
                    params[key] = match.split('/').map((entry)=>decode(entry));
                } else {
                    params[key] = decode(match);
                }
            }
        }
        return params;
    };
    // Wrap with safe matcher to handle parameter cleaning
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$route$2d$match$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["safeRouteMatcher"])(rawMatcher);
} //# sourceMappingURL=route-matcher.js.map
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/escape-regexp.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// regexp is based on https://github.com/sindresorhus/escape-string-regexp
__turbopack_context__.s([
    "escapeStringRegexp",
    ()=>escapeStringRegexp
]);
const reHasRegExp = /[|\\{}()[\]^$+*?.-]/;
const reReplaceRegExp = /[|\\{}()[\]^$+*?.-]/g;
function escapeStringRegexp(str) {
    // see also: https://github.com/lodash/lodash/blob/2da024c3b4f9947a48517639de7560457cd4ec6c/escapeRegExp.js#L23
    if (reHasRegExp.test(str)) {
        return str.replace(reReplaceRegExp, '\\$&');
    }
    return str;
} //# sourceMappingURL=escape-regexp.js.map
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/router/utils/parse-loader-tree.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "parseLoaderTree",
    ()=>parseLoaderTree
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/segment.js [app-rsc] (ecmascript)");
;
function parseLoaderTree(tree) {
    const [segment, parallelRoutes, modules] = tree;
    const { layout, template } = modules;
    let { page } = modules;
    // a __DEFAULT__ segment means that this route didn't match any of the
    // segments in the route, so we should use the default page
    page = segment === __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$segment$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DEFAULT_SEGMENT_KEY"] ? modules.defaultPage : page;
    const conventionPath = layout?.[1] || template?.[1] || page?.[1];
    return {
        page,
        segment,
        modules,
        /* it can be either layout / template / page */ conventionPath,
        parallelRoutes
    };
} //# sourceMappingURL=parse-loader-tree.js.map
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/router/utils/get-dynamic-param.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PARAMETER_PATTERN",
    ()=>PARAMETER_PATTERN,
    "getDynamicParam",
    ()=>getDynamicParam,
    "interpolateParallelRouteParams",
    ()=>interpolateParallelRouteParams,
    "parseMatchedParameter",
    ()=>parseMatchedParameter,
    "parseParameter",
    ()=>parseParameter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$loader$2d$tree$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/router/utils/parse-loader-tree.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$segment$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/router/utils/get-segment-param.js [app-rsc] (ecmascript)");
;
;
;
/**
 * Gets the value of a param from the params object. This correctly handles the
 * case where the param is a fallback route param and encodes the resulting
 * value.
 *
 * @param interpolatedParams - The params object.
 * @param segmentKey - The key of the segment.
 * @param fallbackRouteParams - The fallback route params.
 * @returns The value of the param.
 */ function getParamValue(interpolatedParams, segmentKey, fallbackRouteParams) {
    let value = interpolatedParams[segmentKey];
    if (fallbackRouteParams?.has(segmentKey)) {
        // We know that the fallback route params has the segment key because we
        // checked that above.
        const [searchValue] = fallbackRouteParams.get(segmentKey);
        value = searchValue;
    } else if (Array.isArray(value)) {
        value = value.map((i)=>encodeURIComponent(i));
    } else if (typeof value === 'string') {
        value = encodeURIComponent(value);
    }
    return value;
}
function interpolateParallelRouteParams(loaderTree, params, pagePath, fallbackRouteParams) {
    const interpolated = structuredClone(params);
    // Stack-based traversal with depth tracking
    const stack = [
        {
            tree: loaderTree,
            depth: 0
        }
    ];
    // Derive value from pagePath based on depth and parameter type
    const pathSegments = pagePath.split('/').slice(1) // Remove first empty string
    ;
    while(stack.length > 0){
        const { tree, depth } = stack.pop();
        const { segment, parallelRoutes } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$loader$2d$tree$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseLoaderTree"])(tree);
        // Check if current segment contains a parameter
        const segmentParam = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$segment$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSegmentParam"])(segment);
        if (segmentParam && !interpolated.hasOwnProperty(segmentParam.param) && // If the param is in the fallback route params, we don't need to
        // interpolate it because it's already marked as being unknown.
        !fallbackRouteParams?.has(segmentParam.param)) {
            switch(segmentParam.type){
                case 'catchall':
                case 'optional-catchall':
                case 'catchall-intercepted-(..)(..)':
                case 'catchall-intercepted-(.)':
                case 'catchall-intercepted-(..)':
                case 'catchall-intercepted-(...)':
                    // For catchall parameters, take all remaining segments from this depth
                    const remainingSegments = pathSegments.slice(depth);
                    // Process each segment to handle any dynamic params
                    const processedSegments = remainingSegments.flatMap((pathSegment)=>{
                        const param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$segment$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSegmentParam"])(pathSegment);
                        // If the segment matches a param, return the param value otherwise,
                        // it's a static segment, so just return that. We don't use the
                        // `getParamValue` function here because we don't want the values to
                        // be encoded, that's handled on get by the `getDynamicParam`
                        // function.
                        return param ? interpolated[param.param] : pathSegment;
                    }).filter((s)=>s !== undefined);
                    if (processedSegments.length > 0) {
                        interpolated[segmentParam.param] = processedSegments;
                    }
                    break;
                case 'dynamic':
                case 'dynamic-intercepted-(..)(..)':
                case 'dynamic-intercepted-(.)':
                case 'dynamic-intercepted-(..)':
                case 'dynamic-intercepted-(...)':
                    // For regular dynamic parameters, take the segment at this depth
                    if (depth < pathSegments.length) {
                        const pathSegment = pathSegments[depth];
                        const param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$segment$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSegmentParam"])(pathSegment);
                        interpolated[segmentParam.param] = param ? interpolated[param.param] : pathSegment;
                    }
                    break;
                default:
                    segmentParam.type;
            }
        }
        // Calculate next depth - increment if this is not a route group and not empty
        let nextDepth = depth;
        const isRouteGroup = segment.startsWith('(') && segment.endsWith(')');
        if (!isRouteGroup && segment !== '') {
            nextDepth++;
        }
        // Add all parallel routes to the stack for processing
        for (const route of Object.values(parallelRoutes)){
            stack.push({
                tree: route,
                depth: nextDepth
            });
        }
    }
    return interpolated;
}
function getDynamicParam(interpolatedParams, segmentKey, dynamicParamType, fallbackRouteParams) {
    let value = getParamValue(interpolatedParams, segmentKey, fallbackRouteParams);
    // handle the case where an optional catchall does not have a value,
    // e.g. `/dashboard/[[...slug]]` when requesting `/dashboard`
    if (!value || value.length === 0) {
        if (dynamicParamType === 'oc') {
            return {
                param: segmentKey,
                value: null,
                type: dynamicParamType,
                treeSegment: [
                    segmentKey,
                    '',
                    dynamicParamType
                ]
            };
        }
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`Missing value for segment key: "${segmentKey}" with dynamic param type: ${dynamicParamType}`), "__NEXT_ERROR_CODE", {
            value: "E864",
            enumerable: false,
            configurable: true
        });
    }
    return {
        param: segmentKey,
        // The value that is passed to user code.
        value,
        // The value that is rendered in the router tree.
        treeSegment: [
            segmentKey,
            Array.isArray(value) ? value.join('/') : value,
            dynamicParamType
        ],
        type: dynamicParamType
    };
}
const PARAMETER_PATTERN = /^([^[]*)\[((?:\[[^\]]*\])|[^\]]+)\](.*)$/;
function parseParameter(param) {
    const match = param.match(PARAMETER_PATTERN);
    if (!match) {
        return parseMatchedParameter(param);
    }
    return parseMatchedParameter(match[2]);
}
function parseMatchedParameter(param) {
    const optional = param.startsWith('[') && param.endsWith(']');
    if (optional) {
        param = param.slice(1, -1);
    }
    const repeat = param.startsWith('...');
    if (repeat) {
        param = param.slice(3);
    }
    return {
        key: param,
        repeat,
        optional
    };
} //# sourceMappingURL=get-dynamic-param.js.map
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/router/utils/route-regex.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getNamedMiddlewareRegex",
    ()=>getNamedMiddlewareRegex,
    "getNamedRouteRegex",
    ()=>getNamedRouteRegex,
    "getRouteRegex",
    ()=>getRouteRegex
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/router/utils/interception-routes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/escape-regexp.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/router/utils/remove-trailing-slash.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$dynamic$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/router/utils/get-dynamic-param.js [app-rsc] (ecmascript)");
;
;
;
;
;
function getParametrizedRoute(route, includeSuffix, includePrefix) {
    const groups = {};
    let groupIndex = 1;
    const segments = [];
    for (const segment of (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeTrailingSlash"])(route).slice(1).split('/')){
        const markerMatch = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INTERCEPTION_ROUTE_MARKERS"].find((m)=>segment.startsWith(m));
        const paramMatches = segment.match(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$dynamic$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PARAMETER_PATTERN"]) // Check for parameters
        ;
        if (markerMatch && paramMatches && paramMatches[2]) {
            const { key, optional, repeat } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$dynamic$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseMatchedParameter"])(paramMatches[2]);
            groups[key] = {
                pos: groupIndex++,
                repeat,
                optional
            };
            segments.push(`/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(markerMatch)}([^/]+?)`);
        } else if (paramMatches && paramMatches[2]) {
            const { key, repeat, optional } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$dynamic$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseMatchedParameter"])(paramMatches[2]);
            groups[key] = {
                pos: groupIndex++,
                repeat,
                optional
            };
            if (includePrefix && paramMatches[1]) {
                segments.push(`/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(paramMatches[1])}`);
            }
            let s = repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
            // Remove the leading slash if includePrefix already added it.
            if (includePrefix && paramMatches[1]) {
                s = s.substring(1);
            }
            segments.push(s);
        } else {
            segments.push(`/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(segment)}`);
        }
        // If there's a suffix, add it to the segments if it's enabled.
        if (includeSuffix && paramMatches && paramMatches[3]) {
            segments.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(paramMatches[3]));
        }
    }
    return {
        parameterizedRoute: segments.join(''),
        groups
    };
}
function getRouteRegex(normalizedRoute, { includeSuffix = false, includePrefix = false, excludeOptionalTrailingSlash = false } = {}) {
    const { parameterizedRoute, groups } = getParametrizedRoute(normalizedRoute, includeSuffix, includePrefix);
    let re = parameterizedRoute;
    if (!excludeOptionalTrailingSlash) {
        re += '(?:/)?';
    }
    return {
        re: new RegExp(`^${re}$`),
        groups: groups
    };
}
/**
 * Builds a function to generate a minimal routeKey using only a-z and minimal
 * number of characters.
 */ function buildGetSafeRouteKey() {
    let i = 0;
    return ()=>{
        let routeKey = '';
        let j = ++i;
        while(j > 0){
            routeKey += String.fromCharCode(97 + (j - 1) % 26);
            j = Math.floor((j - 1) / 26);
        }
        return routeKey;
    };
}
function getSafeKeyFromSegment({ interceptionMarker, getSafeRouteKey, segment, routeKeys, keyPrefix, backreferenceDuplicateKeys }) {
    const { key, optional, repeat } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$dynamic$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseMatchedParameter"])(segment);
    // replace any non-word characters since they can break
    // the named regex
    let cleanedKey = key.replace(/\W/g, '');
    if (keyPrefix) {
        cleanedKey = `${keyPrefix}${cleanedKey}`;
    }
    let invalidKey = false;
    // check if the key is still invalid and fallback to using a known
    // safe key
    if (cleanedKey.length === 0 || cleanedKey.length > 30) {
        invalidKey = true;
    }
    if (!isNaN(parseInt(cleanedKey.slice(0, 1)))) {
        invalidKey = true;
    }
    if (invalidKey) {
        cleanedKey = getSafeRouteKey();
    }
    const duplicateKey = cleanedKey in routeKeys;
    if (keyPrefix) {
        routeKeys[cleanedKey] = `${keyPrefix}${key}`;
    } else {
        routeKeys[cleanedKey] = key;
    }
    // if the segment has an interception marker, make sure that's part of the regex pattern
    // this is to ensure that the route with the interception marker doesn't incorrectly match
    // the non-intercepted route (ie /app/(.)[username] should not match /app/[username])
    const interceptionPrefix = interceptionMarker ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(interceptionMarker) : '';
    let pattern;
    if (duplicateKey && backreferenceDuplicateKeys) {
        // Use a backreference to the key to ensure that the key is the same value
        // in each of the placeholders.
        pattern = `\\k<${cleanedKey}>`;
    } else if (repeat) {
        pattern = `(?<${cleanedKey}>.+?)`;
    } else {
        pattern = `(?<${cleanedKey}>[^/]+?)`;
    }
    return {
        key,
        pattern: optional ? `(?:/${interceptionPrefix}${pattern})?` : `/${interceptionPrefix}${pattern}`,
        cleanedKey: cleanedKey,
        optional,
        repeat
    };
}
function getNamedParametrizedRoute(route, prefixRouteKeys, includeSuffix, includePrefix, backreferenceDuplicateKeys, reference = {
    names: {},
    intercepted: {}
}) {
    const getSafeRouteKey = buildGetSafeRouteKey();
    const routeKeys = {};
    const segments = [];
    const inverseParts = [];
    // Ensure we don't mutate the original reference object.
    reference = structuredClone(reference);
    for (const segment of (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removeTrailingSlash"])(route).slice(1).split('/')){
        const hasInterceptionMarker = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["INTERCEPTION_ROUTE_MARKERS"].some((m)=>segment.startsWith(m));
        const paramMatches = segment.match(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$dynamic$2d$param$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["PARAMETER_PATTERN"]) // Check for parameters
        ;
        const interceptionMarker = hasInterceptionMarker ? paramMatches?.[1] : undefined;
        let keyPrefix;
        if (interceptionMarker && paramMatches?.[2]) {
            keyPrefix = prefixRouteKeys ? __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_INTERCEPTION_MARKER_PREFIX"] : undefined;
            reference.intercepted[paramMatches[2]] = interceptionMarker;
        } else if (paramMatches?.[2] && reference.intercepted[paramMatches[2]]) {
            keyPrefix = prefixRouteKeys ? __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_INTERCEPTION_MARKER_PREFIX"] : undefined;
        } else {
            keyPrefix = prefixRouteKeys ? __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_QUERY_PARAM_PREFIX"] : undefined;
        }
        if (interceptionMarker && paramMatches && paramMatches[2]) {
            // If there's an interception marker, add it to the segments.
            const { key, pattern, cleanedKey, repeat, optional } = getSafeKeyFromSegment({
                getSafeRouteKey,
                interceptionMarker,
                segment: paramMatches[2],
                routeKeys,
                keyPrefix,
                backreferenceDuplicateKeys
            });
            segments.push(pattern);
            inverseParts.push(`/${paramMatches[1]}:${reference.names[key] ?? cleanedKey}${repeat ? optional ? '*' : '+' : ''}`);
            reference.names[key] ??= cleanedKey;
        } else if (paramMatches && paramMatches[2]) {
            // If there's a prefix, add it to the segments if it's enabled.
            if (includePrefix && paramMatches[1]) {
                segments.push(`/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(paramMatches[1])}`);
                inverseParts.push(`/${paramMatches[1]}`);
            }
            const { key, pattern, cleanedKey, repeat, optional } = getSafeKeyFromSegment({
                getSafeRouteKey,
                segment: paramMatches[2],
                routeKeys,
                keyPrefix,
                backreferenceDuplicateKeys
            });
            // Remove the leading slash if includePrefix already added it.
            let s = pattern;
            if (includePrefix && paramMatches[1]) {
                s = s.substring(1);
            }
            segments.push(s);
            inverseParts.push(`/:${reference.names[key] ?? cleanedKey}${repeat ? optional ? '*' : '+' : ''}`);
            reference.names[key] ??= cleanedKey;
        } else {
            segments.push(`/${(0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(segment)}`);
            inverseParts.push(`/${segment}`);
        }
        // If there's a suffix, add it to the segments if it's enabled.
        if (includeSuffix && paramMatches && paramMatches[3]) {
            segments.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$escape$2d$regexp$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeStringRegexp"])(paramMatches[3]));
            inverseParts.push(paramMatches[3]);
        }
    }
    return {
        namedParameterizedRoute: segments.join(''),
        routeKeys,
        pathToRegexpPattern: inverseParts.join(''),
        reference
    };
}
function getNamedRouteRegex(normalizedRoute, options) {
    const result = getNamedParametrizedRoute(normalizedRoute, options.prefixRouteKeys, options.includeSuffix ?? false, options.includePrefix ?? false, options.backreferenceDuplicateKeys ?? false, options.reference);
    let namedRegex = result.namedParameterizedRoute;
    if (!options.excludeOptionalTrailingSlash) {
        namedRegex += '(?:/)?';
    }
    return {
        ...getRouteRegex(normalizedRoute, options),
        namedRegex: `^${namedRegex}$`,
        routeKeys: result.routeKeys,
        pathToRegexpPattern: result.pathToRegexpPattern,
        reference: result.reference
    };
}
function getNamedMiddlewareRegex(normalizedRoute, options) {
    const { parameterizedRoute } = getParametrizedRoute(normalizedRoute, false, false);
    const { catchAll = true } = options;
    if (parameterizedRoute === '/') {
        let catchAllRegex = catchAll ? '.*' : '';
        return {
            namedRegex: `^/${catchAllRegex}$`
        };
    }
    const { namedParameterizedRoute } = getNamedParametrizedRoute(normalizedRoute, false, false, false, false, undefined);
    let catchAllGroupedRegex = catchAll ? '(?:(/.*)?)' : '';
    return {
        namedRegex: `^${namedParameterizedRoute}${catchAllGroupedRegex}$`
    };
} //# sourceMappingURL=route-regex.js.map
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/app-render/get-short-dynamic-param-type.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dynamicParamTypes",
    ()=>dynamicParamTypes
]);
const dynamicParamTypes = {
    catchall: 'c',
    'catchall-intercepted-(..)(..)': 'ci(..)(..)',
    'catchall-intercepted-(.)': 'ci(.)',
    'catchall-intercepted-(..)': 'ci(..)',
    'catchall-intercepted-(...)': 'ci(...)',
    'optional-catchall': 'oc',
    dynamic: 'd',
    'dynamic-intercepted-(..)(..)': 'di(..)(..)',
    'dynamic-intercepted-(.)': 'di(.)',
    'dynamic-intercepted-(..)': 'di(..)',
    'dynamic-intercepted-(...)': 'di(...)'
}; //# sourceMappingURL=get-short-dynamic-param-type.js.map
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/request/fallback-params.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createOpaqueFallbackRouteParams",
    ()=>createOpaqueFallbackRouteParams,
    "getFallbackRouteParams",
    ()=>getFallbackRouteParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$segment$2d$config$2f$app$2f$app$2d$segments$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/build/segment-config/app/app-segments.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$route$2d$matcher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/router/utils/route-matcher.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$route$2d$regex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/router/utils/route-regex.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$get$2d$short$2d$dynamic$2d$param$2d$type$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/app-render/get-short-dynamic-param-type.js [app-rsc] (ecmascript)");
;
;
;
;
;
function getParamKeys(page) {
    const pattern = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$route$2d$regex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRouteRegex"])(page);
    const matcher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$route$2d$matcher$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRouteMatcher"])(pattern);
    // Get the default list of allowed params.
    return Object.keys(matcher(page));
}
function createOpaqueFallbackRouteParams(fallbackRouteParams) {
    // If there are no fallback route params, we can return early.
    if (fallbackRouteParams.length === 0) return null;
    // As we're creating unique keys for each of the dynamic route params, we only
    // need to generate a unique ID once per request because each of the keys will
    // be also be unique.
    const uniqueID = Math.random().toString(16).slice(2);
    const keys = new Map();
    // Generate a unique key for the fallback route param, if this key is found
    // in the static output, it represents a bug in cache components.
    for (const { paramName, paramType } of fallbackRouteParams){
        keys.set(paramName, [
            `%%drp:${paramName}:${uniqueID}%%`,
            __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$get$2d$short$2d$dynamic$2d$param$2d$type$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dynamicParamTypes"][paramType]
        ]);
    }
    return keys;
}
function getFallbackRouteParams(page, routeModule) {
    // First, get the fallback route params based on the provided page.
    const unknownParamKeys = new Set(getParamKeys(page));
    // Needed when processing fallback route params for catchall routes in
    // parallel segments, derive from pathname. This is similar to
    // getDynamicParam's pagePath parsing logic.
    const pathSegments = page.split('/').filter(Boolean);
    const collected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$segment$2d$config$2f$app$2f$app$2d$segments$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["collectFallbackRouteParams"])(routeModule);
    // Then, we have to get the fallback route params from the segments that are
    // associated with parallel route segments.
    const fallbackRouteParams = [];
    for (const fallbackRouteParam of collected){
        if (fallbackRouteParam.isParallelRouteParam) {
            // Try to see if we can resolve this parameter from the page that was
            // passed in.
            if (unknownParamKeys.has(fallbackRouteParam.paramName)) {
                continue;
            }
            if (fallbackRouteParam.paramType === 'optional-catchall' || fallbackRouteParam.paramType === 'catchall') {
                // If there are any fallback route segments then we can't use the
                // pathname to derive the value because it's not complete. We can
                // make this assumption because the routes are always resolved left
                // to right and the catchall is always the last segment, so any
                // route parameters that are unknown will always contribute to the
                // pathname and therefore the catchall param too.
                if (collected.some((param)=>!param.isParallelRouteParam && unknownParamKeys.has(param.paramName))) {
                    fallbackRouteParams.push(fallbackRouteParam);
                    continue;
                }
                if (pathSegments.length === 0 && fallbackRouteParam.paramType !== 'optional-catchall') {
                    // We shouldn't be able to match a catchall segment without any path
                    // segments if it's not an optional catchall.
                    throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`Unexpected empty path segments match for a pathname "${page}" with param "${fallbackRouteParam.paramName}" of type "${fallbackRouteParam.paramType}"`), "__NEXT_ERROR_CODE", {
                        value: "E792",
                        enumerable: false,
                        configurable: true
                    });
                }
            // The path segments are not empty, and the segments didn't contain any
            // unknown params, so we know that this particular fallback route param
            // route param is not actually unknown, and is known. We can skip adding
            // it to the fallback route params.
            } else {
                // This is some other type of route param that shouldn't get resolved
                // statically.
                throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`Unexpected match for a pathname "${page}" with a param "${fallbackRouteParam.paramName}" of type "${fallbackRouteParam.paramType}"`), "__NEXT_ERROR_CODE", {
                    value: "E791",
                    enumerable: false,
                    configurable: true
                });
            }
        } else if (unknownParamKeys.has(fallbackRouteParam.paramName)) {
            // As this is a non-parallel route segment, and it exists in the unknown
            // param keys, we know it's a fallback route param.
            fallbackRouteParams.push(fallbackRouteParam);
        }
    }
    return createOpaqueFallbackRouteParams(fallbackRouteParams);
} //# sourceMappingURL=fallback-params.js.map
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/app-render/encryption-utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arrayBufferToString",
    ()=>arrayBufferToString,
    "decrypt",
    ()=>decrypt,
    "encrypt",
    ()=>encrypt,
    "getActionEncryptionKey",
    ()=>getActionEncryptionKey,
    "getClientReferenceManifestForRsc",
    ()=>getClientReferenceManifestForRsc,
    "getServerModuleMap",
    ()=>getServerModuleMap,
    "setReferenceManifestsSingleton",
    ()=>setReferenceManifestsSingleton,
    "stringToUint8Array",
    ()=>stringToUint8Array
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
;
;
;
let __next_loaded_action_key;
function arrayBufferToString(buffer) {
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    // @anonrig: V8 has a limit of 65535 arguments in a function.
    // For len < 65535, this is faster.
    // https://github.com/vercel/next.js/pull/56377#pullrequestreview-1656181623
    if (len < 65535) {
        return String.fromCharCode.apply(null, bytes);
    }
    let binary = '';
    for(let i = 0; i < len; i++){
        binary += String.fromCharCode(bytes[i]);
    }
    return binary;
}
function stringToUint8Array(binary) {
    const len = binary.length;
    const arr = new Uint8Array(len);
    for(let i = 0; i < len; i++){
        arr[i] = binary.charCodeAt(i);
    }
    return arr;
}
function encrypt(key, iv, data) {
    return crypto.subtle.encrypt({
        name: 'AES-GCM',
        iv
    }, key, data);
}
function decrypt(key, iv, data) {
    return crypto.subtle.decrypt({
        name: 'AES-GCM',
        iv
    }, key, data);
}
// This is a global singleton that is used to encode/decode the action bound args from
// the closure. This can't be using a AsyncLocalStorage as it might happen on the module
// level. Since the client reference manifest won't be mutated, let's use a global singleton
// to keep it.
const SERVER_ACTION_MANIFESTS_SINGLETON = Symbol.for('next.server.action-manifests');
function setReferenceManifestsSingleton({ page, clientReferenceManifest, serverActionsManifest, serverModuleMap }) {
    var _globalThis_SERVER_ACTION_MANIFESTS_SINGLETON;
    // @ts-expect-error
    const clientReferenceManifestsPerPage = (_globalThis_SERVER_ACTION_MANIFESTS_SINGLETON = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON]) == null ? void 0 : _globalThis_SERVER_ACTION_MANIFESTS_SINGLETON.clientReferenceManifestsPerPage;
    // @ts-expect-error
    globalThis[SERVER_ACTION_MANIFESTS_SINGLETON] = {
        clientReferenceManifestsPerPage: {
            ...clientReferenceManifestsPerPage,
            [(0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAppPath"])(page)]: clientReferenceManifest
        },
        serverActionsManifest,
        serverModuleMap
    };
}
function getServerModuleMap() {
    const serverActionsManifestSingleton = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON];
    if (!serverActionsManifestSingleton) {
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('Missing manifest for Server Actions.'), "__NEXT_ERROR_CODE", {
            value: "E606",
            enumerable: false,
            configurable: true
        });
    }
    return serverActionsManifestSingleton.serverModuleMap;
}
function getClientReferenceManifestForRsc() {
    const serverActionsManifestSingleton = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON];
    if (!serverActionsManifestSingleton) {
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('Missing manifest for Server Actions.'), "__NEXT_ERROR_CODE", {
            value: "E606",
            enumerable: false,
            configurable: true
        });
    }
    const { clientReferenceManifestsPerPage } = serverActionsManifestSingleton;
    const workStore = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workAsyncStorage"].getStore();
    if (!workStore) {
        // If there's no work store defined, we can assume that a client reference
        // manifest is needed during module evaluation, e.g. to create a server
        // action using a higher-order function. This might also use client
        // components which need to be serialized by Flight, and therefore client
        // references need to be resolvable. To make this work, we're returning a
        // merged manifest across all pages. This is fine as long as the module IDs
        // are not page specific, which they are not for Webpack. TODO: Fix this in
        // Turbopack.
        return mergeClientReferenceManifests(clientReferenceManifestsPerPage);
    }
    const clientReferenceManifest = clientReferenceManifestsPerPage[workStore.route];
    if (!clientReferenceManifest) {
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`Missing Client Reference Manifest for ${workStore.route}.`), "__NEXT_ERROR_CODE", {
            value: "E570",
            enumerable: false,
            configurable: true
        });
    }
    return clientReferenceManifest;
}
async function getActionEncryptionKey() {
    if (__next_loaded_action_key) {
        return __next_loaded_action_key;
    }
    const serverActionsManifestSingleton = globalThis[SERVER_ACTION_MANIFESTS_SINGLETON];
    if (!serverActionsManifestSingleton) {
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('Missing manifest for Server Actions.'), "__NEXT_ERROR_CODE", {
            value: "E606",
            enumerable: false,
            configurable: true
        });
    }
    const rawKey = process.env.NEXT_SERVER_ACTIONS_ENCRYPTION_KEY || serverActionsManifestSingleton.serverActionsManifest.encryptionKey;
    if (rawKey === undefined) {
        throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"]('Missing encryption key for Server Actions'), "__NEXT_ERROR_CODE", {
            value: "E571",
            enumerable: false,
            configurable: true
        });
    }
    __next_loaded_action_key = await crypto.subtle.importKey('raw', stringToUint8Array(atob(rawKey)), 'AES-GCM', true, [
        'encrypt',
        'decrypt'
    ]);
    return __next_loaded_action_key;
}
function mergeClientReferenceManifests(clientReferenceManifestsPerPage) {
    const clientReferenceManifests = Object.values(clientReferenceManifestsPerPage);
    const mergedClientReferenceManifest = {
        clientModules: {},
        edgeRscModuleMapping: {},
        rscModuleMapping: {}
    };
    for (const clientReferenceManifest of clientReferenceManifests){
        mergedClientReferenceManifest.clientModules = {
            ...mergedClientReferenceManifest.clientModules,
            ...clientReferenceManifest.clientModules
        };
        mergedClientReferenceManifest.edgeRscModuleMapping = {
            ...mergedClientReferenceManifest.edgeRscModuleMapping,
            ...clientReferenceManifest.edgeRscModuleMapping
        };
        mergedClientReferenceManifest.rscModuleMapping = {
            ...mergedClientReferenceManifest.rscModuleMapping,
            ...clientReferenceManifest.rscModuleMapping
        };
    }
    return mergedClientReferenceManifest;
} //# sourceMappingURL=encryption-utils.js.map
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/router/utils/html-bots.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This regex contains the bots that we need to do a blocking render for and can't safely stream the response
// due to how they parse the DOM. For example, they might explicitly check for metadata in the `head` tag, so we can't stream metadata tags after the `head` was sent.
// Note: The pattern [\w-]+-Google captures all Google crawlers with "-Google" suffix (e.g., Mediapartners-Google, AdsBot-Google, Storebot-Google)
// as well as crawlers starting with "Google-" (e.g., Google-PageRenderer, Google-InspectionTool)
__turbopack_context__.s([
    "HTML_LIMITED_BOT_UA_RE",
    ()=>HTML_LIMITED_BOT_UA_RE
]);
const HTML_LIMITED_BOT_UA_RE = /[\w-]+-Google|Google-[\w-]+|Chrome-Lighthouse|Slurp|DuckDuckBot|baiduspider|yandex|sogou|bitlybot|tumblr|vkShare|quora link preview|redditbot|ia_archiver|Bingbot|BingPreview|applebot|facebookexternalhit|facebookcatalog|Twitterbot|LinkedInBot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|Yeti|googleweblight/i; //# sourceMappingURL=html-bots.js.map
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/router/utils/is-bot.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HTML_LIMITED_BOT_UA_RE_STRING",
    ()=>HTML_LIMITED_BOT_UA_RE_STRING,
    "getBotType",
    ()=>getBotType,
    "isBot",
    ()=>isBot
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$html$2d$bots$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/router/utils/html-bots.js [app-rsc] (ecmascript)");
;
// Bot crawler that will spin up a headless browser and execute JS.
// Only the main Googlebot search crawler executes JavaScript, not other Google crawlers.
// x-ref: https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers
// This regex specifically matches "Googlebot" but NOT "Mediapartners-Google", "AdsBot-Google", etc.
const HEADLESS_BROWSER_BOT_UA_RE = /Googlebot(?!-)|Googlebot$/i;
const HTML_LIMITED_BOT_UA_RE_STRING = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$html$2d$bots$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HTML_LIMITED_BOT_UA_RE"].source;
;
function isDomBotUA(userAgent) {
    return HEADLESS_BROWSER_BOT_UA_RE.test(userAgent);
}
function isHtmlLimitedBotUA(userAgent) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$html$2d$bots$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HTML_LIMITED_BOT_UA_RE"].test(userAgent);
}
function isBot(userAgent) {
    return isDomBotUA(userAgent) || isHtmlLimitedBotUA(userAgent);
}
function getBotType(userAgent) {
    if (isDomBotUA(userAgent)) {
        return 'dom';
    }
    if (isHtmlLimitedBotUA(userAgent)) {
        return 'html';
    }
    return undefined;
} //# sourceMappingURL=is-bot.js.map
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/lib/streaming-metadata.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isHtmlBotRequest",
    ()=>isHtmlBotRequest,
    "shouldServeStreamingMetadata",
    ()=>shouldServeStreamingMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/router/utils/is-bot.js [app-rsc] (ecmascript) <locals>");
;
function shouldServeStreamingMetadata(userAgent, htmlLimitedBots) {
    const blockingMetadataUARegex = new RegExp(htmlLimitedBots || __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["HTML_LIMITED_BOT_UA_RE_STRING"], 'i');
    // Only block metadata for HTML-limited bots
    if (userAgent && blockingMetadataUARegex.test(userAgent)) {
        return false;
    }
    return true;
}
function isHtmlBotRequest(req) {
    const ua = req.headers['user-agent'] || '';
    const botType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getBotType"])(ua);
    return botType === 'html';
} //# sourceMappingURL=streaming-metadata.js.map
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/app-render/action-utils.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createServerModuleMap",
    ()=>createServerModuleMap,
    "selectWorkerForForwarding",
    ()=>selectWorkerForForwarding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$path$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/router/utils/remove-path-prefix.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
;
;
;
;
function createServerModuleMap({ serverActionsManifest }) {
    return new Proxy({}, {
        get: (_, id)=>{
            var _serverActionsManifest__id, _serverActionsManifest_;
            const workers = (_serverActionsManifest_ = serverActionsManifest[("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'node']) == null ? void 0 : (_serverActionsManifest__id = _serverActionsManifest_[id]) == null ? void 0 : _serverActionsManifest__id.workers;
            if (!workers) {
                return undefined;
            }
            const workStore = __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workAsyncStorage"].getStore();
            let workerEntry;
            if (workStore) {
                workerEntry = workers[normalizeWorkerPageName(workStore.page)];
            } else {
                // If there's no work store defined, we can assume that a server
                // module map is needed during module evaluation, e.g. to create a
                // server action using a higher-order function. Therefore it should be
                // safe to return any entry from the manifest that matches the action
                // ID. They all refer to the same module ID, which must also exist in
                // the current page bundle. TODO: This is currently not guaranteed in
                // Turbopack, and needs to be fixed.
                workerEntry = Object.values(workers).at(0);
            }
            if (!workerEntry) {
                return undefined;
            }
            const { moduleId, async } = workerEntry;
            return {
                id: moduleId,
                name: id,
                chunks: [],
                async
            };
        }
    });
}
function selectWorkerForForwarding(actionId, pageName, serverActionsManifest) {
    var _serverActionsManifest__actionId;
    const workers = (_serverActionsManifest__actionId = serverActionsManifest[("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : 'node'][actionId]) == null ? void 0 : _serverActionsManifest__actionId.workers;
    const workerName = normalizeWorkerPageName(pageName);
    // no workers, nothing to forward to
    if (!workers) return;
    // if there is a worker for this page, no need to forward it.
    if (workers[workerName]) {
        return;
    }
    // otherwise, grab the first worker that has a handler for this action id
    return denormalizeWorkerPageName(Object.keys(workers)[0]);
}
/**
 * The flight entry loader keys actions by bundlePath.
 * bundlePath corresponds with the relative path (including 'app') to the page entrypoint.
 */ function normalizeWorkerPageName(pageName) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pathHasPrefix"])(pageName, 'app')) {
        return pageName;
    }
    return 'app' + pageName;
}
/**
 * Converts a bundlePath (relative path to the entrypoint) to a routable page name
 */ function denormalizeWorkerPageName(bundlePath) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAppPath"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$path$2d$prefix$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["removePathPrefix"])(bundlePath, 'app'));
} //# sourceMappingURL=action-utils.js.map
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/lib/server-action-request-meta.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getIsPossibleServerAction",
    ()=>getIsPossibleServerAction,
    "getServerActionRequestMetadata",
    ()=>getServerActionRequestMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/client/components/app-router-headers.js [app-rsc] (ecmascript)");
;
function getServerActionRequestMetadata(req) {
    let actionId;
    let contentType;
    if (req.headers instanceof Headers) {
        actionId = req.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ACTION_HEADER"]) ?? null;
        contentType = req.headers.get('content-type');
    } else {
        actionId = req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ACTION_HEADER"]] ?? null;
        contentType = req.headers['content-type'] ?? null;
    }
    const isURLEncodedAction = Boolean(req.method === 'POST' && contentType === 'application/x-www-form-urlencoded');
    const isMultipartAction = Boolean(req.method === 'POST' && (contentType == null ? void 0 : contentType.startsWith('multipart/form-data')));
    const isFetchAction = Boolean(actionId !== undefined && typeof actionId === 'string' && req.method === 'POST');
    const isPossibleServerAction = Boolean(isFetchAction || isURLEncodedAction || isMultipartAction);
    return {
        actionId,
        isURLEncodedAction,
        isMultipartAction,
        isFetchAction,
        isPossibleServerAction
    };
}
function getIsPossibleServerAction(req) {
    return getServerActionRequestMetadata(req).isPossibleServerAction;
} //# sourceMappingURL=server-action-request-meta.js.map
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/lib/fallback.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Describes the different fallback modes that a given page can have.
 */ __turbopack_context__.s([
    "FallbackMode",
    ()=>FallbackMode,
    "fallbackModeToFallbackField",
    ()=>fallbackModeToFallbackField,
    "parseFallbackField",
    ()=>parseFallbackField,
    "parseStaticPathsResult",
    ()=>parseStaticPathsResult
]);
var FallbackMode = /*#__PURE__*/ function(FallbackMode) {
    /**
   * A BLOCKING_STATIC_RENDER fallback will block the request until the page is
   * generated. No fallback page will be rendered, and users will have to wait
   * to render the page.
   */ FallbackMode["BLOCKING_STATIC_RENDER"] = "BLOCKING_STATIC_RENDER";
    /**
   * When set to PRERENDER, a fallback page will be sent to users in place of
   * forcing them to wait for the page to be generated. This allows the user to
   * see a rendered page earlier.
   */ FallbackMode["PRERENDER"] = "PRERENDER";
    /**
   * When set to NOT_FOUND, pages that are not already prerendered will result
   * in a not found response.
   */ FallbackMode["NOT_FOUND"] = "NOT_FOUND";
    return FallbackMode;
}({});
function parseFallbackField(fallbackField) {
    if (typeof fallbackField === 'string') {
        return "PRERENDER";
    } else if (fallbackField === null) {
        return "BLOCKING_STATIC_RENDER";
    } else if (fallbackField === false) {
        return "NOT_FOUND";
    } else if (fallbackField === undefined) {
        return undefined;
    } else {
        throw Object.defineProperty(new Error(`Invalid fallback option: ${fallbackField}. Fallback option must be a string, null, undefined, or false.`), "__NEXT_ERROR_CODE", {
            value: "E285",
            enumerable: false,
            configurable: true
        });
    }
}
function fallbackModeToFallbackField(fallback, page) {
    switch(fallback){
        case "BLOCKING_STATIC_RENDER":
            return null;
        case "NOT_FOUND":
            return false;
        case "PRERENDER":
            if (!page) {
                throw Object.defineProperty(new Error(`Invariant: expected a page to be provided when fallback mode is "${fallback}"`), "__NEXT_ERROR_CODE", {
                    value: "E422",
                    enumerable: false,
                    configurable: true
                });
            }
            return page;
        default:
            throw Object.defineProperty(new Error(`Invalid fallback mode: ${fallback}`), "__NEXT_ERROR_CODE", {
                value: "E254",
                enumerable: false,
                configurable: true
            });
    }
}
function parseStaticPathsResult(result) {
    if (result === true) {
        return "PRERENDER";
    } else if (result === 'blocking') {
        return "BLOCKING_STATIC_RENDER";
    } else {
        return "NOT_FOUND";
    }
} //# sourceMappingURL=fallback.js.map
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/lib/etag.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * FNV-1a Hash implementation
 * @author Travis Webb (tjwebb) <me@traviswebb.com>
 *
 * Ported from https://github.com/tjwebb/fnv-plus/blob/master/index.js
 *
 * Simplified, optimized and add modified for 52 bit, which provides a larger hash space
 * and still making use of Javascript's 53-bit integer space.
 */ __turbopack_context__.s([
    "fnv1a52",
    ()=>fnv1a52,
    "generateETag",
    ()=>generateETag
]);
const fnv1a52 = (str)=>{
    const len = str.length;
    let i = 0, t0 = 0, v0 = 0x2325, t1 = 0, v1 = 0x8422, t2 = 0, v2 = 0x9ce4, t3 = 0, v3 = 0xcbf2;
    while(i < len){
        v0 ^= str.charCodeAt(i++);
        t0 = v0 * 435;
        t1 = v1 * 435;
        t2 = v2 * 435;
        t3 = v3 * 435;
        t2 += v0 << 8;
        t3 += v1 << 8;
        t1 += t0 >>> 16;
        v0 = t0 & 65535;
        t2 += t1 >>> 16;
        v1 = t1 & 65535;
        v3 = t3 + (t2 >>> 16) & 65535;
        v2 = t2 & 65535;
    }
    return (v3 & 15) * 281474976710656 + v2 * 4294967296 + v1 * 65536 + (v0 ^ v3 >> 4);
};
const generateETag = (payload, weak = false)=>{
    const prefix = weak ? 'W/"' : '"';
    return prefix + fnv1a52(payload).toString(36) + payload.length.toString(36) + '"';
}; //# sourceMappingURL=etag.js.map
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/compiled/fresh/index.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

(()=>{
    "use strict";
    var e = {
        695: (e)=>{
            /*!
 * fresh
 * Copyright(c) 2012 TJ Holowaychuk
 * Copyright(c) 2016-2017 Douglas Christopher Wilson
 * MIT Licensed
 */ var r = /(?:^|,)\s*?no-cache\s*?(?:,|$)/;
            e.exports = fresh;
            function fresh(e, a) {
                var t = e["if-modified-since"];
                var s = e["if-none-match"];
                if (!t && !s) {
                    return false;
                }
                var i = e["cache-control"];
                if (i && r.test(i)) {
                    return false;
                }
                if (s && s !== "*") {
                    var f = a["etag"];
                    if (!f) {
                        return false;
                    }
                    var n = true;
                    var u = parseTokenList(s);
                    for(var _ = 0; _ < u.length; _++){
                        var o = u[_];
                        if (o === f || o === "W/" + f || "W/" + o === f) {
                            n = false;
                            break;
                        }
                    }
                    if (n) {
                        return false;
                    }
                }
                if (t) {
                    var p = a["last-modified"];
                    var v = !p || !(parseHttpDate(p) <= parseHttpDate(t));
                    if (v) {
                        return false;
                    }
                }
                return true;
            }
            function parseHttpDate(e) {
                var r = e && Date.parse(e);
                return typeof r === "number" ? r : NaN;
            }
            function parseTokenList(e) {
                var r = 0;
                var a = [];
                var t = 0;
                for(var s = 0, i = e.length; s < i; s++){
                    switch(e.charCodeAt(s)){
                        case 32:
                            if (t === r) {
                                t = r = s + 1;
                            }
                            break;
                        case 44:
                            a.push(e.substring(t, r));
                            t = r = s + 1;
                            break;
                        default:
                            r = s + 1;
                            break;
                    }
                }
                a.push(e.substring(t, r));
                return a;
            }
        }
    };
    var r = {};
    function __nccwpck_require__(a) {
        var t = r[a];
        if (t !== undefined) {
            return t.exports;
        }
        var s = r[a] = {
            exports: {}
        };
        var i = true;
        try {
            e[a](s, s.exports, __nccwpck_require__);
            i = false;
        } finally{
            if (i) delete r[a];
        }
        return s.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/compiled/fresh") + "/";
    var a = __nccwpck_require__(695);
    module.exports = a;
})();
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/lib/cache-control.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCacheControlHeader",
    ()=>getCacheControlHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)");
;
function getCacheControlHeader({ revalidate, expire }) {
    const swrHeader = typeof revalidate === 'number' && expire !== undefined && revalidate < expire ? `, stale-while-revalidate=${expire - revalidate}` : '';
    if (revalidate === 0) {
        return 'private, no-cache, no-store, max-age=0, must-revalidate';
    } else if (typeof revalidate === 'number') {
        return `s-maxage=${revalidate}${swrHeader}`;
    }
    return `s-maxage=${__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CACHE_ONE_YEAR"]}${swrHeader}`;
} //# sourceMappingURL=cache-control.js.map
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/send-payload.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendEtagResponse",
    ()=>sendEtagResponse,
    "sendRenderResult",
    ()=>sendRenderResult
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$etag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/lib/etag.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$fresh$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/compiled/fresh/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$cache$2d$control$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/lib/cache-control.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)");
;
;
;
;
;
function sendEtagResponse(req, res, etag) {
    if (etag) {
        /**
     * The server generating a 304 response MUST generate any of the
     * following header fields that would have been sent in a 200 (OK)
     * response to the same request: Cache-Control, Content-Location, Date,
     * ETag, Expires, and Vary. https://tools.ietf.org/html/rfc7232#section-4.1
     */ res.setHeader('ETag', etag);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$fresh$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(req.headers, {
        etag
    })) {
        res.statusCode = 304;
        res.end();
        return true;
    }
    return false;
}
async function sendRenderResult({ req, res, result, generateEtags, poweredByHeader, cacheControl }) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isResSent"])(res)) {
        return;
    }
    if (poweredByHeader && result.contentType === __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HTML_CONTENT_TYPE_HEADER"]) {
        res.setHeader('X-Powered-By', 'Next.js');
    }
    // If cache control is already set on the response we don't
    // override it to allow users to customize it via next.config
    if (cacheControl && !res.getHeader('Cache-Control')) {
        res.setHeader('Cache-Control', (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$cache$2d$control$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCacheControlHeader"])(cacheControl));
    }
    const payload = result.isDynamic ? null : result.toUnchunkedString();
    if (generateEtags && payload !== null) {
        const etag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$etag$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateETag"])(payload);
        if (sendEtagResponse(req, res, etag)) {
            return;
        }
    }
    if (!res.getHeader('Content-Type') && result.contentType) {
        res.setHeader('Content-Type', result.contentType);
    }
    if (payload) {
        res.setHeader('Content-Length', Buffer.byteLength(payload));
    }
    if (req.method === 'HEAD') {
        res.end(null);
        return;
    }
    if (payload !== null) {
        res.end(payload);
        return;
    }
    // Pipe the render result to the response after we get a writer for it.
    await result.pipeToNodeResponse(res);
} //# sourceMappingURL=send-payload.js.map
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript)"));
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility) <locals>", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript) <locals>"));}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript)"));}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript)"));
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript)"));
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript)"));
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/app-dir/link.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/app-dir/link.js <module evaluation>"));
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/app-dir/link.js [app-rsc] (client reference proxy)", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/app-dir/link.js"));
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/app-dir/link.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/app-dir/link.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return _link.useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-rsc] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
const _link = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)"));
function LinkComponent(props) {
    const isLegacyBehavior = props.legacyBehavior;
    const childIsHostComponent = typeof props.children === 'string' || typeof props.children === 'number' || typeof props.children?.type === 'string';
    const childIsClientComponent = props.children?.type?.$$typeof === Symbol.for('react.client.reference');
    if (isLegacyBehavior && !childIsHostComponent && !childIsClientComponent) {
        if (props.children?.type?.$$typeof === Symbol.for('react.lazy')) {
            console.error(`Using a Lazy Component as a direct child of \`<Link legacyBehavior>\` from a Server Component is not supported. If you need legacyBehavior, wrap your Lazy Component in a Client Component that renders the Link's \`<a>\` tag.`);
        } else {
            console.error(`Using a Server Component as a direct child of \`<Link legacyBehavior>\` is not supported. If you need legacyBehavior, wrap your Server Component in a Client Component that renders the Link's \`<a>\` tag.`);
        }
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_link.default, {
        ...props
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.react-server.js.map
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/gl-matrix/esm/common.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Common utilities
 * @module glMatrix
 */ // Configuration Constants
__turbopack_context__.s([
    "ANGLE_ORDER",
    ()=>ANGLE_ORDER,
    "ARRAY_TYPE",
    ()=>ARRAY_TYPE,
    "EPSILON",
    ()=>EPSILON,
    "RANDOM",
    ()=>RANDOM,
    "equals",
    ()=>equals,
    "round",
    ()=>round,
    "setMatrixArrayType",
    ()=>setMatrixArrayType,
    "toDegree",
    ()=>toDegree,
    "toRadian",
    ()=>toRadian
]);
var EPSILON = 0.000001;
var ARRAY_TYPE = typeof Float32Array !== "undefined" ? Float32Array : Array;
var RANDOM = Math.random;
var ANGLE_ORDER = "zyx";
function round(a) {
    if (a >= 0) return Math.round(a);
    return a % 0.5 === 0 ? Math.floor(a) : Math.round(a);
}
function setMatrixArrayType(type) {
    ARRAY_TYPE = type;
}
var degree = Math.PI / 180;
var radian = 180 / Math.PI;
function toRadian(a) {
    return a * degree;
}
function toDegree(a) {
    return a * radian;
}
function equals(a, b) {
    var tolerance = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : EPSILON;
    return Math.abs(a - b) <= tolerance * Math.max(1, Math.abs(a), Math.abs(b));
}
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/gl-matrix/esm/mat4.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "add",
    ()=>add,
    "adjoint",
    ()=>adjoint,
    "clone",
    ()=>clone,
    "copy",
    ()=>copy,
    "create",
    ()=>create,
    "decompose",
    ()=>decompose,
    "determinant",
    ()=>determinant,
    "equals",
    ()=>equals,
    "exactEquals",
    ()=>exactEquals,
    "frob",
    ()=>frob,
    "fromQuat",
    ()=>fromQuat,
    "fromQuat2",
    ()=>fromQuat2,
    "fromRotation",
    ()=>fromRotation,
    "fromRotationTranslation",
    ()=>fromRotationTranslation,
    "fromRotationTranslationScale",
    ()=>fromRotationTranslationScale,
    "fromRotationTranslationScaleOrigin",
    ()=>fromRotationTranslationScaleOrigin,
    "fromScaling",
    ()=>fromScaling,
    "fromTranslation",
    ()=>fromTranslation,
    "fromValues",
    ()=>fromValues,
    "fromXRotation",
    ()=>fromXRotation,
    "fromYRotation",
    ()=>fromYRotation,
    "fromZRotation",
    ()=>fromZRotation,
    "frustum",
    ()=>frustum,
    "getRotation",
    ()=>getRotation,
    "getScaling",
    ()=>getScaling,
    "getTranslation",
    ()=>getTranslation,
    "identity",
    ()=>identity,
    "invert",
    ()=>invert,
    "lookAt",
    ()=>lookAt,
    "mul",
    ()=>mul,
    "multiply",
    ()=>multiply,
    "multiplyScalar",
    ()=>multiplyScalar,
    "multiplyScalarAndAdd",
    ()=>multiplyScalarAndAdd,
    "ortho",
    ()=>ortho,
    "orthoNO",
    ()=>orthoNO,
    "orthoZO",
    ()=>orthoZO,
    "perspective",
    ()=>perspective,
    "perspectiveFromFieldOfView",
    ()=>perspectiveFromFieldOfView,
    "perspectiveNO",
    ()=>perspectiveNO,
    "perspectiveZO",
    ()=>perspectiveZO,
    "rotate",
    ()=>rotate,
    "rotateX",
    ()=>rotateX,
    "rotateY",
    ()=>rotateY,
    "rotateZ",
    ()=>rotateZ,
    "scale",
    ()=>scale,
    "set",
    ()=>set,
    "str",
    ()=>str,
    "sub",
    ()=>sub,
    "subtract",
    ()=>subtract,
    "targetTo",
    ()=>targetTo,
    "translate",
    ()=>translate,
    "transpose",
    ()=>transpose
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/gl-matrix/esm/common.js [app-rsc] (ecmascript)");
;
function create() {
    var out = new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ARRAY_TYPE"](16);
    if (__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ARRAY_TYPE"] != Float32Array) {
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 0;
        out[6] = 0;
        out[7] = 0;
        out[8] = 0;
        out[9] = 0;
        out[11] = 0;
        out[12] = 0;
        out[13] = 0;
        out[14] = 0;
    }
    out[0] = 1;
    out[5] = 1;
    out[10] = 1;
    out[15] = 1;
    return out;
}
function clone(a) {
    var out = new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ARRAY_TYPE"](16);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
}
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    out[9] = a[9];
    out[10] = a[10];
    out[11] = a[11];
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
}
function fromValues(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    var out = new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ARRAY_TYPE"](16);
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m03;
    out[4] = m10;
    out[5] = m11;
    out[6] = m12;
    out[7] = m13;
    out[8] = m20;
    out[9] = m21;
    out[10] = m22;
    out[11] = m23;
    out[12] = m30;
    out[13] = m31;
    out[14] = m32;
    out[15] = m33;
    return out;
}
function set(out, m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m03;
    out[4] = m10;
    out[5] = m11;
    out[6] = m12;
    out[7] = m13;
    out[8] = m20;
    out[9] = m21;
    out[10] = m22;
    out[11] = m23;
    out[12] = m30;
    out[13] = m31;
    out[14] = m32;
    out[15] = m33;
    return out;
}
function identity(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
function transpose(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a01 = a[1], a02 = a[2], a03 = a[3];
        var a12 = a[6], a13 = a[7];
        var a23 = a[11];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a01;
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a02;
        out[9] = a12;
        out[11] = a[14];
        out[12] = a03;
        out[13] = a13;
        out[14] = a23;
    } else {
        out[0] = a[0];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a[1];
        out[5] = a[5];
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a[2];
        out[9] = a[6];
        out[10] = a[10];
        out[11] = a[14];
        out[12] = a[3];
        out[13] = a[7];
        out[14] = a[11];
        out[15] = a[15];
    }
    return out;
}
function invert(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    var b00 = a00 * a11 - a01 * a10;
    var b01 = a00 * a12 - a02 * a10;
    var b02 = a00 * a13 - a03 * a10;
    var b03 = a01 * a12 - a02 * a11;
    var b04 = a01 * a13 - a03 * a11;
    var b05 = a02 * a13 - a03 * a12;
    var b06 = a20 * a31 - a21 * a30;
    var b07 = a20 * a32 - a22 * a30;
    var b08 = a20 * a33 - a23 * a30;
    var b09 = a21 * a32 - a22 * a31;
    var b10 = a21 * a33 - a23 * a31;
    var b11 = a22 * a33 - a23 * a32;
    // Calculate the determinant
    var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    if (!det) {
        return null;
    }
    det = 1.0 / det;
    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
    out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
    out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
    out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
    out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
    out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
    out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
    return out;
}
function adjoint(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    var b00 = a00 * a11 - a01 * a10;
    var b01 = a00 * a12 - a02 * a10;
    var b02 = a00 * a13 - a03 * a10;
    var b03 = a01 * a12 - a02 * a11;
    var b04 = a01 * a13 - a03 * a11;
    var b05 = a02 * a13 - a03 * a12;
    var b06 = a20 * a31 - a21 * a30;
    var b07 = a20 * a32 - a22 * a30;
    var b08 = a20 * a33 - a23 * a30;
    var b09 = a21 * a32 - a22 * a31;
    var b10 = a21 * a33 - a23 * a31;
    var b11 = a22 * a33 - a23 * a32;
    out[0] = a11 * b11 - a12 * b10 + a13 * b09;
    out[1] = a02 * b10 - a01 * b11 - a03 * b09;
    out[2] = a31 * b05 - a32 * b04 + a33 * b03;
    out[3] = a22 * b04 - a21 * b05 - a23 * b03;
    out[4] = a12 * b08 - a10 * b11 - a13 * b07;
    out[5] = a00 * b11 - a02 * b08 + a03 * b07;
    out[6] = a32 * b02 - a30 * b05 - a33 * b01;
    out[7] = a20 * b05 - a22 * b02 + a23 * b01;
    out[8] = a10 * b10 - a11 * b08 + a13 * b06;
    out[9] = a01 * b08 - a00 * b10 - a03 * b06;
    out[10] = a30 * b04 - a31 * b02 + a33 * b00;
    out[11] = a21 * b02 - a20 * b04 - a23 * b00;
    out[12] = a11 * b07 - a10 * b09 - a12 * b06;
    out[13] = a00 * b09 - a01 * b07 + a02 * b06;
    out[14] = a31 * b01 - a30 * b03 - a32 * b00;
    out[15] = a20 * b03 - a21 * b01 + a22 * b00;
    return out;
}
function determinant(a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    var b0 = a00 * a11 - a01 * a10;
    var b1 = a00 * a12 - a02 * a10;
    var b2 = a01 * a12 - a02 * a11;
    var b3 = a20 * a31 - a21 * a30;
    var b4 = a20 * a32 - a22 * a30;
    var b5 = a21 * a32 - a22 * a31;
    var b6 = a00 * b5 - a01 * b4 + a02 * b3;
    var b7 = a10 * b5 - a11 * b4 + a12 * b3;
    var b8 = a20 * b2 - a21 * b1 + a22 * b0;
    var b9 = a30 * b2 - a31 * b1 + a32 * b0;
    // Calculate the determinant
    return a13 * b6 - a03 * b7 + a33 * b8 - a23 * b9;
}
function multiply(out, a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    // Cache only the current line of the second matrix
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[4];
    b1 = b[5];
    b2 = b[6];
    b3 = b[7];
    out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[8];
    b1 = b[9];
    b2 = b[10];
    b3 = b[11];
    out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[12];
    b1 = b[13];
    b2 = b[14];
    b3 = b[15];
    out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    return out;
}
function translate(out, a, v) {
    var x = v[0], y = v[1], z = v[2];
    var a00, a01, a02, a03;
    var a10, a11, a12, a13;
    var a20, a21, a22, a23;
    if (a === out) {
        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
    } else {
        a00 = a[0];
        a01 = a[1];
        a02 = a[2];
        a03 = a[3];
        a10 = a[4];
        a11 = a[5];
        a12 = a[6];
        a13 = a[7];
        a20 = a[8];
        a21 = a[9];
        a22 = a[10];
        a23 = a[11];
        out[0] = a00;
        out[1] = a01;
        out[2] = a02;
        out[3] = a03;
        out[4] = a10;
        out[5] = a11;
        out[6] = a12;
        out[7] = a13;
        out[8] = a20;
        out[9] = a21;
        out[10] = a22;
        out[11] = a23;
        out[12] = a00 * x + a10 * y + a20 * z + a[12];
        out[13] = a01 * x + a11 * y + a21 * z + a[13];
        out[14] = a02 * x + a12 * y + a22 * z + a[14];
        out[15] = a03 * x + a13 * y + a23 * z + a[15];
    }
    return out;
}
function scale(out, a, v) {
    var x = v[0], y = v[1], z = v[2];
    out[0] = a[0] * x;
    out[1] = a[1] * x;
    out[2] = a[2] * x;
    out[3] = a[3] * x;
    out[4] = a[4] * y;
    out[5] = a[5] * y;
    out[6] = a[6] * y;
    out[7] = a[7] * y;
    out[8] = a[8] * z;
    out[9] = a[9] * z;
    out[10] = a[10] * z;
    out[11] = a[11] * z;
    out[12] = a[12];
    out[13] = a[13];
    out[14] = a[14];
    out[15] = a[15];
    return out;
}
function rotate(out, a, rad, axis) {
    var x = axis[0], y = axis[1], z = axis[2];
    var len = Math.sqrt(x * x + y * y + z * z);
    var s, c, t;
    var a00, a01, a02, a03;
    var a10, a11, a12, a13;
    var a20, a21, a22, a23;
    var b00, b01, b02;
    var b10, b11, b12;
    var b20, b21, b22;
    if (len < __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EPSILON"]) {
        return null;
    }
    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;
    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;
    a00 = a[0];
    a01 = a[1];
    a02 = a[2];
    a03 = a[3];
    a10 = a[4];
    a11 = a[5];
    a12 = a[6];
    a13 = a[7];
    a20 = a[8];
    a21 = a[9];
    a22 = a[10];
    a23 = a[11];
    // Construct the elements of the rotation matrix
    b00 = x * x * t + c;
    b01 = y * x * t + z * s;
    b02 = z * x * t - y * s;
    b10 = x * y * t - z * s;
    b11 = y * y * t + c;
    b12 = z * y * t + x * s;
    b20 = x * z * t + y * s;
    b21 = y * z * t - x * s;
    b22 = z * z * t + c;
    // Perform rotation-specific matrix multiplication
    out[0] = a00 * b00 + a10 * b01 + a20 * b02;
    out[1] = a01 * b00 + a11 * b01 + a21 * b02;
    out[2] = a02 * b00 + a12 * b01 + a22 * b02;
    out[3] = a03 * b00 + a13 * b01 + a23 * b02;
    out[4] = a00 * b10 + a10 * b11 + a20 * b12;
    out[5] = a01 * b10 + a11 * b11 + a21 * b12;
    out[6] = a02 * b10 + a12 * b11 + a22 * b12;
    out[7] = a03 * b10 + a13 * b11 + a23 * b12;
    out[8] = a00 * b20 + a10 * b21 + a20 * b22;
    out[9] = a01 * b20 + a11 * b21 + a21 * b22;
    out[10] = a02 * b20 + a12 * b21 + a22 * b22;
    out[11] = a03 * b20 + a13 * b21 + a23 * b22;
    if (a !== out) {
        // If the source and destination differ, copy the unchanged last row
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }
    return out;
}
function rotateX(out, a, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    var a10 = a[4];
    var a11 = a[5];
    var a12 = a[6];
    var a13 = a[7];
    var a20 = a[8];
    var a21 = a[9];
    var a22 = a[10];
    var a23 = a[11];
    if (a !== out) {
        // If the source and destination differ, copy the unchanged rows
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }
    // Perform axis-specific matrix multiplication
    out[4] = a10 * c + a20 * s;
    out[5] = a11 * c + a21 * s;
    out[6] = a12 * c + a22 * s;
    out[7] = a13 * c + a23 * s;
    out[8] = a20 * c - a10 * s;
    out[9] = a21 * c - a11 * s;
    out[10] = a22 * c - a12 * s;
    out[11] = a23 * c - a13 * s;
    return out;
}
function rotateY(out, a, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    var a00 = a[0];
    var a01 = a[1];
    var a02 = a[2];
    var a03 = a[3];
    var a20 = a[8];
    var a21 = a[9];
    var a22 = a[10];
    var a23 = a[11];
    if (a !== out) {
        // If the source and destination differ, copy the unchanged rows
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }
    // Perform axis-specific matrix multiplication
    out[0] = a00 * c - a20 * s;
    out[1] = a01 * c - a21 * s;
    out[2] = a02 * c - a22 * s;
    out[3] = a03 * c - a23 * s;
    out[8] = a00 * s + a20 * c;
    out[9] = a01 * s + a21 * c;
    out[10] = a02 * s + a22 * c;
    out[11] = a03 * s + a23 * c;
    return out;
}
function rotateZ(out, a, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    var a00 = a[0];
    var a01 = a[1];
    var a02 = a[2];
    var a03 = a[3];
    var a10 = a[4];
    var a11 = a[5];
    var a12 = a[6];
    var a13 = a[7];
    if (a !== out) {
        // If the source and destination differ, copy the unchanged last row
        out[8] = a[8];
        out[9] = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
    }
    // Perform axis-specific matrix multiplication
    out[0] = a00 * c + a10 * s;
    out[1] = a01 * c + a11 * s;
    out[2] = a02 * c + a12 * s;
    out[3] = a03 * c + a13 * s;
    out[4] = a10 * c - a00 * s;
    out[5] = a11 * c - a01 * s;
    out[6] = a12 * c - a02 * s;
    out[7] = a13 * c - a03 * s;
    return out;
}
function fromTranslation(out, v) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    return out;
}
function fromScaling(out, v) {
    out[0] = v[0];
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = v[1];
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = v[2];
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
function fromRotation(out, rad, axis) {
    var x = axis[0], y = axis[1], z = axis[2];
    var len = Math.sqrt(x * x + y * y + z * z);
    var s, c, t;
    if (len < __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EPSILON"]) {
        return null;
    }
    len = 1 / len;
    x *= len;
    y *= len;
    z *= len;
    s = Math.sin(rad);
    c = Math.cos(rad);
    t = 1 - c;
    // Perform rotation-specific matrix multiplication
    out[0] = x * x * t + c;
    out[1] = y * x * t + z * s;
    out[2] = z * x * t - y * s;
    out[3] = 0;
    out[4] = x * y * t - z * s;
    out[5] = y * y * t + c;
    out[6] = z * y * t + x * s;
    out[7] = 0;
    out[8] = x * z * t + y * s;
    out[9] = y * z * t - x * s;
    out[10] = z * z * t + c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
function fromXRotation(out, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    // Perform axis-specific matrix multiplication
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = c;
    out[6] = s;
    out[7] = 0;
    out[8] = 0;
    out[9] = -s;
    out[10] = c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
function fromYRotation(out, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    // Perform axis-specific matrix multiplication
    out[0] = c;
    out[1] = 0;
    out[2] = -s;
    out[3] = 0;
    out[4] = 0;
    out[5] = 1;
    out[6] = 0;
    out[7] = 0;
    out[8] = s;
    out[9] = 0;
    out[10] = c;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
function fromZRotation(out, rad) {
    var s = Math.sin(rad);
    var c = Math.cos(rad);
    // Perform axis-specific matrix multiplication
    out[0] = c;
    out[1] = s;
    out[2] = 0;
    out[3] = 0;
    out[4] = -s;
    out[5] = c;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 1;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
function fromRotationTranslation(out, q, v) {
    // Quaternion math
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var xy = x * y2;
    var xz = x * z2;
    var yy = y * y2;
    var yz = y * z2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    out[0] = 1 - (yy + zz);
    out[1] = xy + wz;
    out[2] = xz - wy;
    out[3] = 0;
    out[4] = xy - wz;
    out[5] = 1 - (xx + zz);
    out[6] = yz + wx;
    out[7] = 0;
    out[8] = xz + wy;
    out[9] = yz - wx;
    out[10] = 1 - (xx + yy);
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    return out;
}
function fromQuat2(out, a) {
    var translation = new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ARRAY_TYPE"](3);
    var bx = -a[0], by = -a[1], bz = -a[2], bw = a[3], ax = a[4], ay = a[5], az = a[6], aw = a[7];
    var magnitude = bx * bx + by * by + bz * bz + bw * bw;
    //Only scale if it makes sense
    if (magnitude > 0) {
        translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2 / magnitude;
        translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2 / magnitude;
        translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2 / magnitude;
    } else {
        translation[0] = (ax * bw + aw * bx + ay * bz - az * by) * 2;
        translation[1] = (ay * bw + aw * by + az * bx - ax * bz) * 2;
        translation[2] = (az * bw + aw * bz + ax * by - ay * bx) * 2;
    }
    fromRotationTranslation(out, a, translation);
    return out;
}
function getTranslation(out, mat) {
    out[0] = mat[12];
    out[1] = mat[13];
    out[2] = mat[14];
    return out;
}
function getScaling(out, mat) {
    var m11 = mat[0];
    var m12 = mat[1];
    var m13 = mat[2];
    var m21 = mat[4];
    var m22 = mat[5];
    var m23 = mat[6];
    var m31 = mat[8];
    var m32 = mat[9];
    var m33 = mat[10];
    out[0] = Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13);
    out[1] = Math.sqrt(m21 * m21 + m22 * m22 + m23 * m23);
    out[2] = Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33);
    return out;
}
function getRotation(out, mat) {
    var scaling = new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ARRAY_TYPE"](3);
    getScaling(scaling, mat);
    var is1 = 1 / scaling[0];
    var is2 = 1 / scaling[1];
    var is3 = 1 / scaling[2];
    var sm11 = mat[0] * is1;
    var sm12 = mat[1] * is2;
    var sm13 = mat[2] * is3;
    var sm21 = mat[4] * is1;
    var sm22 = mat[5] * is2;
    var sm23 = mat[6] * is3;
    var sm31 = mat[8] * is1;
    var sm32 = mat[9] * is2;
    var sm33 = mat[10] * is3;
    var trace = sm11 + sm22 + sm33;
    var S = 0;
    if (trace > 0) {
        S = Math.sqrt(trace + 1.0) * 2;
        out[3] = 0.25 * S;
        out[0] = (sm23 - sm32) / S;
        out[1] = (sm31 - sm13) / S;
        out[2] = (sm12 - sm21) / S;
    } else if (sm11 > sm22 && sm11 > sm33) {
        S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
        out[3] = (sm23 - sm32) / S;
        out[0] = 0.25 * S;
        out[1] = (sm12 + sm21) / S;
        out[2] = (sm31 + sm13) / S;
    } else if (sm22 > sm33) {
        S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
        out[3] = (sm31 - sm13) / S;
        out[0] = (sm12 + sm21) / S;
        out[1] = 0.25 * S;
        out[2] = (sm23 + sm32) / S;
    } else {
        S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
        out[3] = (sm12 - sm21) / S;
        out[0] = (sm31 + sm13) / S;
        out[1] = (sm23 + sm32) / S;
        out[2] = 0.25 * S;
    }
    return out;
}
function decompose(out_r, out_t, out_s, mat) {
    out_t[0] = mat[12];
    out_t[1] = mat[13];
    out_t[2] = mat[14];
    var m11 = mat[0];
    var m12 = mat[1];
    var m13 = mat[2];
    var m21 = mat[4];
    var m22 = mat[5];
    var m23 = mat[6];
    var m31 = mat[8];
    var m32 = mat[9];
    var m33 = mat[10];
    out_s[0] = Math.sqrt(m11 * m11 + m12 * m12 + m13 * m13);
    out_s[1] = Math.sqrt(m21 * m21 + m22 * m22 + m23 * m23);
    out_s[2] = Math.sqrt(m31 * m31 + m32 * m32 + m33 * m33);
    var is1 = 1 / out_s[0];
    var is2 = 1 / out_s[1];
    var is3 = 1 / out_s[2];
    var sm11 = m11 * is1;
    var sm12 = m12 * is2;
    var sm13 = m13 * is3;
    var sm21 = m21 * is1;
    var sm22 = m22 * is2;
    var sm23 = m23 * is3;
    var sm31 = m31 * is1;
    var sm32 = m32 * is2;
    var sm33 = m33 * is3;
    var trace = sm11 + sm22 + sm33;
    var S = 0;
    if (trace > 0) {
        S = Math.sqrt(trace + 1.0) * 2;
        out_r[3] = 0.25 * S;
        out_r[0] = (sm23 - sm32) / S;
        out_r[1] = (sm31 - sm13) / S;
        out_r[2] = (sm12 - sm21) / S;
    } else if (sm11 > sm22 && sm11 > sm33) {
        S = Math.sqrt(1.0 + sm11 - sm22 - sm33) * 2;
        out_r[3] = (sm23 - sm32) / S;
        out_r[0] = 0.25 * S;
        out_r[1] = (sm12 + sm21) / S;
        out_r[2] = (sm31 + sm13) / S;
    } else if (sm22 > sm33) {
        S = Math.sqrt(1.0 + sm22 - sm11 - sm33) * 2;
        out_r[3] = (sm31 - sm13) / S;
        out_r[0] = (sm12 + sm21) / S;
        out_r[1] = 0.25 * S;
        out_r[2] = (sm23 + sm32) / S;
    } else {
        S = Math.sqrt(1.0 + sm33 - sm11 - sm22) * 2;
        out_r[3] = (sm12 - sm21) / S;
        out_r[0] = (sm31 + sm13) / S;
        out_r[1] = (sm23 + sm32) / S;
        out_r[2] = 0.25 * S;
    }
    return out_r;
}
function fromRotationTranslationScale(out, q, v, s) {
    // Quaternion math
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var xy = x * y2;
    var xz = x * z2;
    var yy = y * y2;
    var yz = y * z2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    var sx = s[0];
    var sy = s[1];
    var sz = s[2];
    out[0] = (1 - (yy + zz)) * sx;
    out[1] = (xy + wz) * sx;
    out[2] = (xz - wy) * sx;
    out[3] = 0;
    out[4] = (xy - wz) * sy;
    out[5] = (1 - (xx + zz)) * sy;
    out[6] = (yz + wx) * sy;
    out[7] = 0;
    out[8] = (xz + wy) * sz;
    out[9] = (yz - wx) * sz;
    out[10] = (1 - (xx + yy)) * sz;
    out[11] = 0;
    out[12] = v[0];
    out[13] = v[1];
    out[14] = v[2];
    out[15] = 1;
    return out;
}
function fromRotationTranslationScaleOrigin(out, q, v, s, o) {
    // Quaternion math
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var xy = x * y2;
    var xz = x * z2;
    var yy = y * y2;
    var yz = y * z2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    var sx = s[0];
    var sy = s[1];
    var sz = s[2];
    var ox = o[0];
    var oy = o[1];
    var oz = o[2];
    var out0 = (1 - (yy + zz)) * sx;
    var out1 = (xy + wz) * sx;
    var out2 = (xz - wy) * sx;
    var out4 = (xy - wz) * sy;
    var out5 = (1 - (xx + zz)) * sy;
    var out6 = (yz + wx) * sy;
    var out8 = (xz + wy) * sz;
    var out9 = (yz - wx) * sz;
    var out10 = (1 - (xx + yy)) * sz;
    out[0] = out0;
    out[1] = out1;
    out[2] = out2;
    out[3] = 0;
    out[4] = out4;
    out[5] = out5;
    out[6] = out6;
    out[7] = 0;
    out[8] = out8;
    out[9] = out9;
    out[10] = out10;
    out[11] = 0;
    out[12] = v[0] + ox - (out0 * ox + out4 * oy + out8 * oz);
    out[13] = v[1] + oy - (out1 * ox + out5 * oy + out9 * oz);
    out[14] = v[2] + oz - (out2 * ox + out6 * oy + out10 * oz);
    out[15] = 1;
    return out;
}
function fromQuat(out, q) {
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var yx = y * x2;
    var yy = y * y2;
    var zx = z * x2;
    var zy = z * y2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    out[0] = 1 - yy - zz;
    out[1] = yx + wz;
    out[2] = zx - wy;
    out[3] = 0;
    out[4] = yx - wz;
    out[5] = 1 - xx - zz;
    out[6] = zy + wx;
    out[7] = 0;
    out[8] = zx + wy;
    out[9] = zy - wx;
    out[10] = 1 - xx - yy;
    out[11] = 0;
    out[12] = 0;
    out[13] = 0;
    out[14] = 0;
    out[15] = 1;
    return out;
}
function frustum(out, left, right, bottom, top, near, far) {
    var rl = 1 / (right - left);
    var tb = 1 / (top - bottom);
    var nf = 1 / (near - far);
    out[0] = near * 2 * rl;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = near * 2 * tb;
    out[6] = 0;
    out[7] = 0;
    out[8] = (right + left) * rl;
    out[9] = (top + bottom) * tb;
    out[10] = (far + near) * nf;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[14] = far * near * 2 * nf;
    out[15] = 0;
    return out;
}
function perspectiveNO(out, fovy, aspect, near, far) {
    var f = 1.0 / Math.tan(fovy / 2);
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[15] = 0;
    if (far != null && far !== Infinity) {
        var nf = 1 / (near - far);
        out[10] = (far + near) * nf;
        out[14] = 2 * far * near * nf;
    } else {
        out[10] = -1;
        out[14] = -2 * near;
    }
    return out;
}
var perspective = perspectiveNO;
function perspectiveZO(out, fovy, aspect, near, far) {
    var f = 1.0 / Math.tan(fovy / 2);
    out[0] = f / aspect;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = f;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[11] = -1;
    out[12] = 0;
    out[13] = 0;
    out[15] = 0;
    if (far != null && far !== Infinity) {
        var nf = 1 / (near - far);
        out[10] = far * nf;
        out[14] = far * near * nf;
    } else {
        out[10] = -1;
        out[14] = -near;
    }
    return out;
}
function perspectiveFromFieldOfView(out, fov, near, far) {
    var upTan = Math.tan(fov.upDegrees * Math.PI / 180.0);
    var downTan = Math.tan(fov.downDegrees * Math.PI / 180.0);
    var leftTan = Math.tan(fov.leftDegrees * Math.PI / 180.0);
    var rightTan = Math.tan(fov.rightDegrees * Math.PI / 180.0);
    var xScale = 2.0 / (leftTan + rightTan);
    var yScale = 2.0 / (upTan + downTan);
    out[0] = xScale;
    out[1] = 0.0;
    out[2] = 0.0;
    out[3] = 0.0;
    out[4] = 0.0;
    out[5] = yScale;
    out[6] = 0.0;
    out[7] = 0.0;
    out[8] = -((leftTan - rightTan) * xScale * 0.5);
    out[9] = (upTan - downTan) * yScale * 0.5;
    out[10] = far / (near - far);
    out[11] = -1.0;
    out[12] = 0.0;
    out[13] = 0.0;
    out[14] = far * near / (near - far);
    out[15] = 0.0;
    return out;
}
function orthoNO(out, left, right, bottom, top, near, far) {
    var lr = 1 / (left - right);
    var bt = 1 / (bottom - top);
    var nf = 1 / (near - far);
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = 2 * nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = (far + near) * nf;
    out[15] = 1;
    return out;
}
var ortho = orthoNO;
function orthoZO(out, left, right, bottom, top, near, far) {
    var lr = 1 / (left - right);
    var bt = 1 / (bottom - top);
    var nf = 1 / (near - far);
    out[0] = -2 * lr;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 0;
    out[5] = -2 * bt;
    out[6] = 0;
    out[7] = 0;
    out[8] = 0;
    out[9] = 0;
    out[10] = nf;
    out[11] = 0;
    out[12] = (left + right) * lr;
    out[13] = (top + bottom) * bt;
    out[14] = near * nf;
    out[15] = 1;
    return out;
}
function lookAt(out, eye, center, up) {
    var x0, x1, x2, y0, y1, y2, z0, z1, z2, len;
    var eyex = eye[0];
    var eyey = eye[1];
    var eyez = eye[2];
    var upx = up[0];
    var upy = up[1];
    var upz = up[2];
    var centerx = center[0];
    var centery = center[1];
    var centerz = center[2];
    if (Math.abs(eyex - centerx) < __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EPSILON"] && Math.abs(eyey - centery) < __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EPSILON"] && Math.abs(eyez - centerz) < __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EPSILON"]) {
        return identity(out);
    }
    z0 = eyex - centerx;
    z1 = eyey - centery;
    z2 = eyez - centerz;
    len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
    z0 *= len;
    z1 *= len;
    z2 *= len;
    x0 = upy * z2 - upz * z1;
    x1 = upz * z0 - upx * z2;
    x2 = upx * z1 - upy * z0;
    len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);
    if (!len) {
        x0 = 0;
        x1 = 0;
        x2 = 0;
    } else {
        len = 1 / len;
        x0 *= len;
        x1 *= len;
        x2 *= len;
    }
    y0 = z1 * x2 - z2 * x1;
    y1 = z2 * x0 - z0 * x2;
    y2 = z0 * x1 - z1 * x0;
    len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);
    if (!len) {
        y0 = 0;
        y1 = 0;
        y2 = 0;
    } else {
        len = 1 / len;
        y0 *= len;
        y1 *= len;
        y2 *= len;
    }
    out[0] = x0;
    out[1] = y0;
    out[2] = z0;
    out[3] = 0;
    out[4] = x1;
    out[5] = y1;
    out[6] = z1;
    out[7] = 0;
    out[8] = x2;
    out[9] = y2;
    out[10] = z2;
    out[11] = 0;
    out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
    out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
    out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
    out[15] = 1;
    return out;
}
function targetTo(out, eye, target, up) {
    var eyex = eye[0], eyey = eye[1], eyez = eye[2], upx = up[0], upy = up[1], upz = up[2];
    var z0 = eyex - target[0], z1 = eyey - target[1], z2 = eyez - target[2];
    var len = z0 * z0 + z1 * z1 + z2 * z2;
    if (len > 0) {
        len = 1 / Math.sqrt(len);
        z0 *= len;
        z1 *= len;
        z2 *= len;
    }
    var x0 = upy * z2 - upz * z1, x1 = upz * z0 - upx * z2, x2 = upx * z1 - upy * z0;
    len = x0 * x0 + x1 * x1 + x2 * x2;
    if (len > 0) {
        len = 1 / Math.sqrt(len);
        x0 *= len;
        x1 *= len;
        x2 *= len;
    }
    out[0] = x0;
    out[1] = x1;
    out[2] = x2;
    out[3] = 0;
    out[4] = z1 * x2 - z2 * x1;
    out[5] = z2 * x0 - z0 * x2;
    out[6] = z0 * x1 - z1 * x0;
    out[7] = 0;
    out[8] = z0;
    out[9] = z1;
    out[10] = z2;
    out[11] = 0;
    out[12] = eyex;
    out[13] = eyey;
    out[14] = eyez;
    out[15] = 1;
    return out;
}
function str(a) {
    return "mat4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ", " + a[9] + ", " + a[10] + ", " + a[11] + ", " + a[12] + ", " + a[13] + ", " + a[14] + ", " + a[15] + ")";
}
function frob(a) {
    return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2] + a[3] * a[3] + a[4] * a[4] + a[5] * a[5] + a[6] * a[6] + a[7] * a[7] + a[8] * a[8] + a[9] * a[9] + a[10] * a[10] + a[11] * a[11] + a[12] * a[12] + a[13] * a[13] + a[14] * a[14] + a[15] * a[15]);
}
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    out[6] = a[6] + b[6];
    out[7] = a[7] + b[7];
    out[8] = a[8] + b[8];
    out[9] = a[9] + b[9];
    out[10] = a[10] + b[10];
    out[11] = a[11] + b[11];
    out[12] = a[12] + b[12];
    out[13] = a[13] + b[13];
    out[14] = a[14] + b[14];
    out[15] = a[15] + b[15];
    return out;
}
function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    out[4] = a[4] - b[4];
    out[5] = a[5] - b[5];
    out[6] = a[6] - b[6];
    out[7] = a[7] - b[7];
    out[8] = a[8] - b[8];
    out[9] = a[9] - b[9];
    out[10] = a[10] - b[10];
    out[11] = a[11] - b[11];
    out[12] = a[12] - b[12];
    out[13] = a[13] - b[13];
    out[14] = a[14] - b[14];
    out[15] = a[15] - b[15];
    return out;
}
function multiplyScalar(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    out[4] = a[4] * b;
    out[5] = a[5] * b;
    out[6] = a[6] * b;
    out[7] = a[7] * b;
    out[8] = a[8] * b;
    out[9] = a[9] * b;
    out[10] = a[10] * b;
    out[11] = a[11] * b;
    out[12] = a[12] * b;
    out[13] = a[13] * b;
    out[14] = a[14] * b;
    out[15] = a[15] * b;
    return out;
}
function multiplyScalarAndAdd(out, a, b, scale) {
    out[0] = a[0] + b[0] * scale;
    out[1] = a[1] + b[1] * scale;
    out[2] = a[2] + b[2] * scale;
    out[3] = a[3] + b[3] * scale;
    out[4] = a[4] + b[4] * scale;
    out[5] = a[5] + b[5] * scale;
    out[6] = a[6] + b[6] * scale;
    out[7] = a[7] + b[7] * scale;
    out[8] = a[8] + b[8] * scale;
    out[9] = a[9] + b[9] * scale;
    out[10] = a[10] + b[10] * scale;
    out[11] = a[11] + b[11] * scale;
    out[12] = a[12] + b[12] * scale;
    out[13] = a[13] + b[13] * scale;
    out[14] = a[14] + b[14] * scale;
    out[15] = a[15] + b[15] * scale;
    return out;
}
function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8] && a[9] === b[9] && a[10] === b[10] && a[11] === b[11] && a[12] === b[12] && a[13] === b[13] && a[14] === b[14] && a[15] === b[15];
}
function equals(a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7];
    var a8 = a[8], a9 = a[9], a10 = a[10], a11 = a[11];
    var a12 = a[12], a13 = a[13], a14 = a[14], a15 = a[15];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    var b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7];
    var b8 = b[8], b9 = b[9], b10 = b[10], b11 = b[11];
    var b12 = b[12], b13 = b[13], b14 = b[14], b15 = b[15];
    return Math.abs(a0 - b0) <= __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EPSILON"] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EPSILON"] * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EPSILON"] * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EPSILON"] * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EPSILON"] * Math.max(1.0, Math.abs(a8), Math.abs(b8)) && Math.abs(a9 - b9) <= __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EPSILON"] * Math.max(1.0, Math.abs(a9), Math.abs(b9)) && Math.abs(a10 - b10) <= __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EPSILON"] * Math.max(1.0, Math.abs(a10), Math.abs(b10)) && Math.abs(a11 - b11) <= __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EPSILON"] * Math.max(1.0, Math.abs(a11), Math.abs(b11)) && Math.abs(a12 - b12) <= __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EPSILON"] * Math.max(1.0, Math.abs(a12), Math.abs(b12)) && Math.abs(a13 - b13) <= __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EPSILON"] * Math.max(1.0, Math.abs(a13), Math.abs(b13)) && Math.abs(a14 - b14) <= __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EPSILON"] * Math.max(1.0, Math.abs(a14), Math.abs(b14)) && Math.abs(a15 - b15) <= __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EPSILON"] * Math.max(1.0, Math.abs(a15), Math.abs(b15));
}
var mul = multiply;
var sub = subtract;
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/gl-matrix/esm/mat4.js [app-rsc] (ecmascript) <export * as mat4>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mat4",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/gl-matrix/esm/mat4.js [app-rsc] (ecmascript)");
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/gl-matrix/esm/mat3.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "add",
    ()=>add,
    "adjoint",
    ()=>adjoint,
    "clone",
    ()=>clone,
    "copy",
    ()=>copy,
    "create",
    ()=>create,
    "determinant",
    ()=>determinant,
    "equals",
    ()=>equals,
    "exactEquals",
    ()=>exactEquals,
    "frob",
    ()=>frob,
    "fromMat2d",
    ()=>fromMat2d,
    "fromMat4",
    ()=>fromMat4,
    "fromQuat",
    ()=>fromQuat,
    "fromRotation",
    ()=>fromRotation,
    "fromScaling",
    ()=>fromScaling,
    "fromTranslation",
    ()=>fromTranslation,
    "fromValues",
    ()=>fromValues,
    "identity",
    ()=>identity,
    "invert",
    ()=>invert,
    "mul",
    ()=>mul,
    "multiply",
    ()=>multiply,
    "multiplyScalar",
    ()=>multiplyScalar,
    "multiplyScalarAndAdd",
    ()=>multiplyScalarAndAdd,
    "normalFromMat4",
    ()=>normalFromMat4,
    "projection",
    ()=>projection,
    "rotate",
    ()=>rotate,
    "scale",
    ()=>scale,
    "set",
    ()=>set,
    "str",
    ()=>str,
    "sub",
    ()=>sub,
    "subtract",
    ()=>subtract,
    "translate",
    ()=>translate,
    "transpose",
    ()=>transpose
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/gl-matrix/esm/common.js [app-rsc] (ecmascript)");
;
function create() {
    var out = new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ARRAY_TYPE"](9);
    if (__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ARRAY_TYPE"] != Float32Array) {
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[5] = 0;
        out[6] = 0;
        out[7] = 0;
    }
    out[0] = 1;
    out[4] = 1;
    out[8] = 1;
    return out;
}
function fromMat4(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[4];
    out[4] = a[5];
    out[5] = a[6];
    out[6] = a[8];
    out[7] = a[9];
    out[8] = a[10];
    return out;
}
function clone(a) {
    var out = new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ARRAY_TYPE"](9);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
}
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    out[4] = a[4];
    out[5] = a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
}
function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
    var out = new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ARRAY_TYPE"](9);
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m10;
    out[4] = m11;
    out[5] = m12;
    out[6] = m20;
    out[7] = m21;
    out[8] = m22;
    return out;
}
function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
    out[0] = m00;
    out[1] = m01;
    out[2] = m02;
    out[3] = m10;
    out[4] = m11;
    out[5] = m12;
    out[6] = m20;
    out[7] = m21;
    out[8] = m22;
    return out;
}
function identity(out) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
}
function transpose(out, a) {
    // If we are transposing ourselves we can skip a few steps but have to cache some values
    if (out === a) {
        var a01 = a[1], a02 = a[2], a12 = a[5];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a01;
        out[5] = a[7];
        out[6] = a02;
        out[7] = a12;
    } else {
        out[0] = a[0];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a[1];
        out[4] = a[4];
        out[5] = a[7];
        out[6] = a[2];
        out[7] = a[5];
        out[8] = a[8];
    }
    return out;
}
function invert(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2];
    var a10 = a[3], a11 = a[4], a12 = a[5];
    var a20 = a[6], a21 = a[7], a22 = a[8];
    var b01 = a22 * a11 - a12 * a21;
    var b11 = -a22 * a10 + a12 * a20;
    var b21 = a21 * a10 - a11 * a20;
    // Calculate the determinant
    var det = a00 * b01 + a01 * b11 + a02 * b21;
    if (!det) {
        return null;
    }
    det = 1.0 / det;
    out[0] = b01 * det;
    out[1] = (-a22 * a01 + a02 * a21) * det;
    out[2] = (a12 * a01 - a02 * a11) * det;
    out[3] = b11 * det;
    out[4] = (a22 * a00 - a02 * a20) * det;
    out[5] = (-a12 * a00 + a02 * a10) * det;
    out[6] = b21 * det;
    out[7] = (-a21 * a00 + a01 * a20) * det;
    out[8] = (a11 * a00 - a01 * a10) * det;
    return out;
}
function adjoint(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2];
    var a10 = a[3], a11 = a[4], a12 = a[5];
    var a20 = a[6], a21 = a[7], a22 = a[8];
    out[0] = a11 * a22 - a12 * a21;
    out[1] = a02 * a21 - a01 * a22;
    out[2] = a01 * a12 - a02 * a11;
    out[3] = a12 * a20 - a10 * a22;
    out[4] = a00 * a22 - a02 * a20;
    out[5] = a02 * a10 - a00 * a12;
    out[6] = a10 * a21 - a11 * a20;
    out[7] = a01 * a20 - a00 * a21;
    out[8] = a00 * a11 - a01 * a10;
    return out;
}
function determinant(a) {
    var a00 = a[0], a01 = a[1], a02 = a[2];
    var a10 = a[3], a11 = a[4], a12 = a[5];
    var a20 = a[6], a21 = a[7], a22 = a[8];
    return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
}
function multiply(out, a, b) {
    var a00 = a[0], a01 = a[1], a02 = a[2];
    var a10 = a[3], a11 = a[4], a12 = a[5];
    var a20 = a[6], a21 = a[7], a22 = a[8];
    var b00 = b[0], b01 = b[1], b02 = b[2];
    var b10 = b[3], b11 = b[4], b12 = b[5];
    var b20 = b[6], b21 = b[7], b22 = b[8];
    out[0] = b00 * a00 + b01 * a10 + b02 * a20;
    out[1] = b00 * a01 + b01 * a11 + b02 * a21;
    out[2] = b00 * a02 + b01 * a12 + b02 * a22;
    out[3] = b10 * a00 + b11 * a10 + b12 * a20;
    out[4] = b10 * a01 + b11 * a11 + b12 * a21;
    out[5] = b10 * a02 + b11 * a12 + b12 * a22;
    out[6] = b20 * a00 + b21 * a10 + b22 * a20;
    out[7] = b20 * a01 + b21 * a11 + b22 * a21;
    out[8] = b20 * a02 + b21 * a12 + b22 * a22;
    return out;
}
function translate(out, a, v) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a10 = a[3], a11 = a[4], a12 = a[5], a20 = a[6], a21 = a[7], a22 = a[8], x = v[0], y = v[1];
    out[0] = a00;
    out[1] = a01;
    out[2] = a02;
    out[3] = a10;
    out[4] = a11;
    out[5] = a12;
    out[6] = x * a00 + y * a10 + a20;
    out[7] = x * a01 + y * a11 + a21;
    out[8] = x * a02 + y * a12 + a22;
    return out;
}
function rotate(out, a, rad) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a10 = a[3], a11 = a[4], a12 = a[5], a20 = a[6], a21 = a[7], a22 = a[8], s = Math.sin(rad), c = Math.cos(rad);
    out[0] = c * a00 + s * a10;
    out[1] = c * a01 + s * a11;
    out[2] = c * a02 + s * a12;
    out[3] = c * a10 - s * a00;
    out[4] = c * a11 - s * a01;
    out[5] = c * a12 - s * a02;
    out[6] = a20;
    out[7] = a21;
    out[8] = a22;
    return out;
}
function scale(out, a, v) {
    var x = v[0], y = v[1];
    out[0] = x * a[0];
    out[1] = x * a[1];
    out[2] = x * a[2];
    out[3] = y * a[3];
    out[4] = y * a[4];
    out[5] = y * a[5];
    out[6] = a[6];
    out[7] = a[7];
    out[8] = a[8];
    return out;
}
function fromTranslation(out, v) {
    out[0] = 1;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = 1;
    out[5] = 0;
    out[6] = v[0];
    out[7] = v[1];
    out[8] = 1;
    return out;
}
function fromRotation(out, rad) {
    var s = Math.sin(rad), c = Math.cos(rad);
    out[0] = c;
    out[1] = s;
    out[2] = 0;
    out[3] = -s;
    out[4] = c;
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
}
function fromScaling(out, v) {
    out[0] = v[0];
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = v[1];
    out[5] = 0;
    out[6] = 0;
    out[7] = 0;
    out[8] = 1;
    return out;
}
function fromMat2d(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = 0;
    out[3] = a[2];
    out[4] = a[3];
    out[5] = 0;
    out[6] = a[4];
    out[7] = a[5];
    out[8] = 1;
    return out;
}
function fromQuat(out, q) {
    var x = q[0], y = q[1], z = q[2], w = q[3];
    var x2 = x + x;
    var y2 = y + y;
    var z2 = z + z;
    var xx = x * x2;
    var yx = y * x2;
    var yy = y * y2;
    var zx = z * x2;
    var zy = z * y2;
    var zz = z * z2;
    var wx = w * x2;
    var wy = w * y2;
    var wz = w * z2;
    out[0] = 1 - yy - zz;
    out[3] = yx - wz;
    out[6] = zx + wy;
    out[1] = yx + wz;
    out[4] = 1 - xx - zz;
    out[7] = zy - wx;
    out[2] = zx - wy;
    out[5] = zy + wx;
    out[8] = 1 - xx - yy;
    return out;
}
function normalFromMat4(out, a) {
    var a00 = a[0], a01 = a[1], a02 = a[2], a03 = a[3];
    var a10 = a[4], a11 = a[5], a12 = a[6], a13 = a[7];
    var a20 = a[8], a21 = a[9], a22 = a[10], a23 = a[11];
    var a30 = a[12], a31 = a[13], a32 = a[14], a33 = a[15];
    var b00 = a00 * a11 - a01 * a10;
    var b01 = a00 * a12 - a02 * a10;
    var b02 = a00 * a13 - a03 * a10;
    var b03 = a01 * a12 - a02 * a11;
    var b04 = a01 * a13 - a03 * a11;
    var b05 = a02 * a13 - a03 * a12;
    var b06 = a20 * a31 - a21 * a30;
    var b07 = a20 * a32 - a22 * a30;
    var b08 = a20 * a33 - a23 * a30;
    var b09 = a21 * a32 - a22 * a31;
    var b10 = a21 * a33 - a23 * a31;
    var b11 = a22 * a33 - a23 * a32;
    // Calculate the determinant
    var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    if (!det) {
        return null;
    }
    det = 1.0 / det;
    out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
    out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
    out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
    out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
    out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
    out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
    out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
    out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
    out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
    return out;
}
function projection(out, width, height) {
    out[0] = 2 / width;
    out[1] = 0;
    out[2] = 0;
    out[3] = 0;
    out[4] = -2 / height;
    out[5] = 0;
    out[6] = -1;
    out[7] = 1;
    out[8] = 1;
    return out;
}
function str(a) {
    return "mat3(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ", " + a[4] + ", " + a[5] + ", " + a[6] + ", " + a[7] + ", " + a[8] + ")";
}
function frob(a) {
    return Math.sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2] + a[3] * a[3] + a[4] * a[4] + a[5] * a[5] + a[6] * a[6] + a[7] * a[7] + a[8] * a[8]);
}
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    out[4] = a[4] + b[4];
    out[5] = a[5] + b[5];
    out[6] = a[6] + b[6];
    out[7] = a[7] + b[7];
    out[8] = a[8] + b[8];
    return out;
}
function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    out[4] = a[4] - b[4];
    out[5] = a[5] - b[5];
    out[6] = a[6] - b[6];
    out[7] = a[7] - b[7];
    out[8] = a[8] - b[8];
    return out;
}
function multiplyScalar(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    out[4] = a[4] * b;
    out[5] = a[5] * b;
    out[6] = a[6] * b;
    out[7] = a[7] * b;
    out[8] = a[8] * b;
    return out;
}
function multiplyScalarAndAdd(out, a, b, scale) {
    out[0] = a[0] + b[0] * scale;
    out[1] = a[1] + b[1] * scale;
    out[2] = a[2] + b[2] * scale;
    out[3] = a[3] + b[3] * scale;
    out[4] = a[4] + b[4] * scale;
    out[5] = a[5] + b[5] * scale;
    out[6] = a[6] + b[6] * scale;
    out[7] = a[7] + b[7] * scale;
    out[8] = a[8] + b[8] * scale;
    return out;
}
function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
}
function equals(a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3], a4 = a[4], a5 = a[5], a6 = a[6], a7 = a[7], a8 = a[8];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3], b4 = b[4], b5 = b[5], b6 = b[6], b7 = b[7], b8 = b[8];
    return Math.abs(a0 - b0) <= __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EPSILON"] * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EPSILON"] * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EPSILON"] * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EPSILON"] * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EPSILON"] * Math.max(1.0, Math.abs(a8), Math.abs(b8));
}
var mul = multiply;
var sub = subtract;
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/gl-matrix/esm/vec3.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "add",
    ()=>add,
    "angle",
    ()=>angle,
    "bezier",
    ()=>bezier,
    "ceil",
    ()=>ceil,
    "clone",
    ()=>clone,
    "copy",
    ()=>copy,
    "create",
    ()=>create,
    "cross",
    ()=>cross,
    "dist",
    ()=>dist,
    "distance",
    ()=>distance,
    "div",
    ()=>div,
    "divide",
    ()=>divide,
    "dot",
    ()=>dot,
    "equals",
    ()=>equals,
    "exactEquals",
    ()=>exactEquals,
    "floor",
    ()=>floor,
    "forEach",
    ()=>forEach,
    "fromValues",
    ()=>fromValues,
    "hermite",
    ()=>hermite,
    "inverse",
    ()=>inverse,
    "len",
    ()=>len,
    "length",
    ()=>length,
    "lerp",
    ()=>lerp,
    "max",
    ()=>max,
    "min",
    ()=>min,
    "mul",
    ()=>mul,
    "multiply",
    ()=>multiply,
    "negate",
    ()=>negate,
    "normalize",
    ()=>normalize,
    "random",
    ()=>random,
    "rotateX",
    ()=>rotateX,
    "rotateY",
    ()=>rotateY,
    "rotateZ",
    ()=>rotateZ,
    "round",
    ()=>round,
    "scale",
    ()=>scale,
    "scaleAndAdd",
    ()=>scaleAndAdd,
    "set",
    ()=>set,
    "slerp",
    ()=>slerp,
    "sqrDist",
    ()=>sqrDist,
    "sqrLen",
    ()=>sqrLen,
    "squaredDistance",
    ()=>squaredDistance,
    "squaredLength",
    ()=>squaredLength,
    "str",
    ()=>str,
    "sub",
    ()=>sub,
    "subtract",
    ()=>subtract,
    "transformMat3",
    ()=>transformMat3,
    "transformMat4",
    ()=>transformMat4,
    "transformQuat",
    ()=>transformQuat,
    "zero",
    ()=>zero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/gl-matrix/esm/common.js [app-rsc] (ecmascript)");
;
function create() {
    var out = new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ARRAY_TYPE"](3);
    if (__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ARRAY_TYPE"] != Float32Array) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
    }
    return out;
}
function clone(a) {
    var out = new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ARRAY_TYPE"](3);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
}
function length(a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    return Math.sqrt(x * x + y * y + z * z);
}
function fromValues(x, y, z) {
    var out = new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ARRAY_TYPE"](3);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
}
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    return out;
}
function set(out, x, y, z) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    return out;
}
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    return out;
}
function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    return out;
}
function multiply(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    return out;
}
function divide(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    return out;
}
function ceil(out, a) {
    out[0] = Math.ceil(a[0]);
    out[1] = Math.ceil(a[1]);
    out[2] = Math.ceil(a[2]);
    return out;
}
function floor(out, a) {
    out[0] = Math.floor(a[0]);
    out[1] = Math.floor(a[1]);
    out[2] = Math.floor(a[2]);
    return out;
}
function min(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    return out;
}
function max(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    return out;
}
function round(out, a) {
    out[0] = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["round"](a[0]);
    out[1] = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["round"](a[1]);
    out[2] = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["round"](a[2]);
    return out;
}
function scale(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    return out;
}
function scaleAndAdd(out, a, b, scale) {
    out[0] = a[0] + b[0] * scale;
    out[1] = a[1] + b[1] * scale;
    out[2] = a[2] + b[2] * scale;
    return out;
}
function distance(a, b) {
    var x = b[0] - a[0];
    var y = b[1] - a[1];
    var z = b[2] - a[2];
    return Math.sqrt(x * x + y * y + z * z);
}
function squaredDistance(a, b) {
    var x = b[0] - a[0];
    var y = b[1] - a[1];
    var z = b[2] - a[2];
    return x * x + y * y + z * z;
}
function squaredLength(a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    return x * x + y * y + z * z;
}
function negate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    return out;
}
function inverse(out, a) {
    out[0] = 1.0 / a[0];
    out[1] = 1.0 / a[1];
    out[2] = 1.0 / a[2];
    return out;
}
function normalize(out, a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    var len = x * x + y * y + z * z;
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
    }
    out[0] = a[0] * len;
    out[1] = a[1] * len;
    out[2] = a[2] * len;
    return out;
}
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
function cross(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2];
    var bx = b[0], by = b[1], bz = b[2];
    out[0] = ay * bz - az * by;
    out[1] = az * bx - ax * bz;
    out[2] = ax * by - ay * bx;
    return out;
}
function lerp(out, a, b, t) {
    var ax = a[0];
    var ay = a[1];
    var az = a[2];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    return out;
}
function slerp(out, a, b, t) {
    var angle = Math.acos(Math.min(Math.max(dot(a, b), -1), 1));
    var sinTotal = Math.sin(angle);
    var ratioA = Math.sin((1 - t) * angle) / sinTotal;
    var ratioB = Math.sin(t * angle) / sinTotal;
    out[0] = ratioA * a[0] + ratioB * b[0];
    out[1] = ratioA * a[1] + ratioB * b[1];
    out[2] = ratioA * a[2] + ratioB * b[2];
    return out;
}
function hermite(out, a, b, c, d, t) {
    var factorTimes2 = t * t;
    var factor1 = factorTimes2 * (2 * t - 3) + 1;
    var factor2 = factorTimes2 * (t - 2) + t;
    var factor3 = factorTimes2 * (t - 1);
    var factor4 = factorTimes2 * (3 - 2 * t);
    out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
    out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
    out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
    return out;
}
function bezier(out, a, b, c, d, t) {
    var inverseFactor = 1 - t;
    var inverseFactorTimesTwo = inverseFactor * inverseFactor;
    var factorTimes2 = t * t;
    var factor1 = inverseFactorTimesTwo * inverseFactor;
    var factor2 = 3 * t * inverseFactorTimesTwo;
    var factor3 = 3 * factorTimes2 * inverseFactor;
    var factor4 = factorTimes2 * t;
    out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
    out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
    out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;
    return out;
}
function random(out, scale) {
    scale = scale === undefined ? 1.0 : scale;
    var r = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RANDOM"]() * 2.0 * Math.PI;
    var z = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RANDOM"]() * 2.0 - 1.0;
    var zScale = Math.sqrt(1.0 - z * z) * scale;
    out[0] = Math.cos(r) * zScale;
    out[1] = Math.sin(r) * zScale;
    out[2] = z * scale;
    return out;
}
function transformMat4(out, a, m) {
    var x = a[0], y = a[1], z = a[2];
    var w = m[3] * x + m[7] * y + m[11] * z + m[15];
    w = w || 1.0;
    out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
    out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
    out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
    return out;
}
function transformMat3(out, a, m) {
    var x = a[0], y = a[1], z = a[2];
    out[0] = x * m[0] + y * m[3] + z * m[6];
    out[1] = x * m[1] + y * m[4] + z * m[7];
    out[2] = x * m[2] + y * m[5] + z * m[8];
    return out;
}
function transformQuat(out, a, q) {
    // Fast Vector Rotation using Quaternions by Robert Eisele
    // https://raw.org/proof/vector-rotation-using-quaternions/
    var qx = q[0], qy = q[1], qz = q[2], qw = q[3];
    var vx = a[0], vy = a[1], vz = a[2];
    // t = q x v
    var tx = qy * vz - qz * vy;
    var ty = qz * vx - qx * vz;
    var tz = qx * vy - qy * vx;
    // t = 2t
    tx = tx + tx;
    ty = ty + ty;
    tz = tz + tz;
    // v + w t + q x t
    out[0] = vx + qw * tx + qy * tz - qz * ty;
    out[1] = vy + qw * ty + qz * tx - qx * tz;
    out[2] = vz + qw * tz + qx * ty - qy * tx;
    return out;
}
function rotateX(out, a, b, rad) {
    var p = [], r = [];
    //Translate point to the origin
    p[0] = a[0] - b[0];
    p[1] = a[1] - b[1];
    p[2] = a[2] - b[2];
    //perform rotation
    r[0] = p[0];
    r[1] = p[1] * Math.cos(rad) - p[2] * Math.sin(rad);
    r[2] = p[1] * Math.sin(rad) + p[2] * Math.cos(rad);
    //translate to correct position
    out[0] = r[0] + b[0];
    out[1] = r[1] + b[1];
    out[2] = r[2] + b[2];
    return out;
}
function rotateY(out, a, b, rad) {
    var p = [], r = [];
    //Translate point to the origin
    p[0] = a[0] - b[0];
    p[1] = a[1] - b[1];
    p[2] = a[2] - b[2];
    //perform rotation
    r[0] = p[2] * Math.sin(rad) + p[0] * Math.cos(rad);
    r[1] = p[1];
    r[2] = p[2] * Math.cos(rad) - p[0] * Math.sin(rad);
    //translate to correct position
    out[0] = r[0] + b[0];
    out[1] = r[1] + b[1];
    out[2] = r[2] + b[2];
    return out;
}
function rotateZ(out, a, b, rad) {
    var p = [], r = [];
    //Translate point to the origin
    p[0] = a[0] - b[0];
    p[1] = a[1] - b[1];
    p[2] = a[2] - b[2];
    //perform rotation
    r[0] = p[0] * Math.cos(rad) - p[1] * Math.sin(rad);
    r[1] = p[0] * Math.sin(rad) + p[1] * Math.cos(rad);
    r[2] = p[2];
    //translate to correct position
    out[0] = r[0] + b[0];
    out[1] = r[1] + b[1];
    out[2] = r[2] + b[2];
    return out;
}
function angle(a, b) {
    var ax = a[0], ay = a[1], az = a[2], bx = b[0], by = b[1], bz = b[2], mag = Math.sqrt((ax * ax + ay * ay + az * az) * (bx * bx + by * by + bz * bz)), cosine = mag && dot(a, b) / mag;
    return Math.acos(Math.min(Math.max(cosine, -1), 1));
}
function zero(out) {
    out[0] = 0.0;
    out[1] = 0.0;
    out[2] = 0.0;
    return out;
}
function str(a) {
    return "vec3(" + a[0] + ", " + a[1] + ", " + a[2] + ")";
}
function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
}
function equals(a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2];
    var b0 = b[0], b1 = b[1], b2 = b[2];
    return Math.abs(a0 - b0) <= __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2));
}
var sub = subtract;
var mul = multiply;
var div = divide;
var dist = distance;
var sqrDist = squaredDistance;
var len = length;
var sqrLen = squaredLength;
var forEach = function() {
    var vec = create();
    return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if (!stride) {
            stride = 3;
        }
        if (!offset) {
            offset = 0;
        }
        if (count) {
            l = Math.min(count * stride + offset, a.length);
        } else {
            l = a.length;
        }
        for(i = offset; i < l; i += stride){
            vec[0] = a[i];
            vec[1] = a[i + 1];
            vec[2] = a[i + 2];
            fn(vec, vec, arg);
            a[i] = vec[0];
            a[i + 1] = vec[1];
            a[i + 2] = vec[2];
        }
        return a;
    };
}();
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/gl-matrix/esm/vec4.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "add",
    ()=>add,
    "ceil",
    ()=>ceil,
    "clone",
    ()=>clone,
    "copy",
    ()=>copy,
    "create",
    ()=>create,
    "cross",
    ()=>cross,
    "dist",
    ()=>dist,
    "distance",
    ()=>distance,
    "div",
    ()=>div,
    "divide",
    ()=>divide,
    "dot",
    ()=>dot,
    "equals",
    ()=>equals,
    "exactEquals",
    ()=>exactEquals,
    "floor",
    ()=>floor,
    "forEach",
    ()=>forEach,
    "fromValues",
    ()=>fromValues,
    "inverse",
    ()=>inverse,
    "len",
    ()=>len,
    "length",
    ()=>length,
    "lerp",
    ()=>lerp,
    "max",
    ()=>max,
    "min",
    ()=>min,
    "mul",
    ()=>mul,
    "multiply",
    ()=>multiply,
    "negate",
    ()=>negate,
    "normalize",
    ()=>normalize,
    "random",
    ()=>random,
    "round",
    ()=>round,
    "scale",
    ()=>scale,
    "scaleAndAdd",
    ()=>scaleAndAdd,
    "set",
    ()=>set,
    "sqrDist",
    ()=>sqrDist,
    "sqrLen",
    ()=>sqrLen,
    "squaredDistance",
    ()=>squaredDistance,
    "squaredLength",
    ()=>squaredLength,
    "str",
    ()=>str,
    "sub",
    ()=>sub,
    "subtract",
    ()=>subtract,
    "transformMat4",
    ()=>transformMat4,
    "transformQuat",
    ()=>transformQuat,
    "zero",
    ()=>zero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/gl-matrix/esm/common.js [app-rsc] (ecmascript)");
;
function create() {
    var out = new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ARRAY_TYPE"](4);
    if (__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ARRAY_TYPE"] != Float32Array) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
    }
    return out;
}
function clone(a) {
    var out = new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ARRAY_TYPE"](4);
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
}
function fromValues(x, y, z, w) {
    var out = new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ARRAY_TYPE"](4);
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
}
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    out[2] = a[2];
    out[3] = a[3];
    return out;
}
function set(out, x, y, z, w) {
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = w;
    return out;
}
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    out[2] = a[2] + b[2];
    out[3] = a[3] + b[3];
    return out;
}
function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    out[2] = a[2] - b[2];
    out[3] = a[3] - b[3];
    return out;
}
function multiply(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    out[2] = a[2] * b[2];
    out[3] = a[3] * b[3];
    return out;
}
function divide(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    out[2] = a[2] / b[2];
    out[3] = a[3] / b[3];
    return out;
}
function ceil(out, a) {
    out[0] = Math.ceil(a[0]);
    out[1] = Math.ceil(a[1]);
    out[2] = Math.ceil(a[2]);
    out[3] = Math.ceil(a[3]);
    return out;
}
function floor(out, a) {
    out[0] = Math.floor(a[0]);
    out[1] = Math.floor(a[1]);
    out[2] = Math.floor(a[2]);
    out[3] = Math.floor(a[3]);
    return out;
}
function min(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    out[2] = Math.min(a[2], b[2]);
    out[3] = Math.min(a[3], b[3]);
    return out;
}
function max(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    out[2] = Math.max(a[2], b[2]);
    out[3] = Math.max(a[3], b[3]);
    return out;
}
function round(out, a) {
    out[0] = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["round"](a[0]);
    out[1] = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["round"](a[1]);
    out[2] = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["round"](a[2]);
    out[3] = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["round"](a[3]);
    return out;
}
function scale(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    out[2] = a[2] * b;
    out[3] = a[3] * b;
    return out;
}
function scaleAndAdd(out, a, b, scale) {
    out[0] = a[0] + b[0] * scale;
    out[1] = a[1] + b[1] * scale;
    out[2] = a[2] + b[2] * scale;
    out[3] = a[3] + b[3] * scale;
    return out;
}
function distance(a, b) {
    var x = b[0] - a[0];
    var y = b[1] - a[1];
    var z = b[2] - a[2];
    var w = b[3] - a[3];
    return Math.sqrt(x * x + y * y + z * z + w * w);
}
function squaredDistance(a, b) {
    var x = b[0] - a[0];
    var y = b[1] - a[1];
    var z = b[2] - a[2];
    var w = b[3] - a[3];
    return x * x + y * y + z * z + w * w;
}
function length(a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    var w = a[3];
    return Math.sqrt(x * x + y * y + z * z + w * w);
}
function squaredLength(a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    var w = a[3];
    return x * x + y * y + z * z + w * w;
}
function negate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = -a[3];
    return out;
}
function inverse(out, a) {
    out[0] = 1.0 / a[0];
    out[1] = 1.0 / a[1];
    out[2] = 1.0 / a[2];
    out[3] = 1.0 / a[3];
    return out;
}
function normalize(out, a) {
    var x = a[0];
    var y = a[1];
    var z = a[2];
    var w = a[3];
    var len = x * x + y * y + z * z + w * w;
    if (len > 0) {
        len = 1 / Math.sqrt(len);
    }
    out[0] = x * len;
    out[1] = y * len;
    out[2] = z * len;
    out[3] = w * len;
    return out;
}
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
}
function cross(out, u, v, w) {
    var A = v[0] * w[1] - v[1] * w[0], B = v[0] * w[2] - v[2] * w[0], C = v[0] * w[3] - v[3] * w[0], D = v[1] * w[2] - v[2] * w[1], E = v[1] * w[3] - v[3] * w[1], F = v[2] * w[3] - v[3] * w[2];
    var G = u[0];
    var H = u[1];
    var I = u[2];
    var J = u[3];
    out[0] = H * F - I * E + J * D;
    out[1] = -(G * F) + I * C - J * B;
    out[2] = G * E - H * C + J * A;
    out[3] = -(G * D) + H * B - I * A;
    return out;
}
function lerp(out, a, b, t) {
    var ax = a[0];
    var ay = a[1];
    var az = a[2];
    var aw = a[3];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    out[2] = az + t * (b[2] - az);
    out[3] = aw + t * (b[3] - aw);
    return out;
}
function random(out, scale) {
    scale = scale === undefined ? 1.0 : scale;
    // Marsaglia, George. Choosing a Point from the Surface of a
    // Sphere. Ann. Math. Statist. 43 (1972), no. 2, 645--646.
    // http://projecteuclid.org/euclid.aoms/1177692644;
    var v1, v2, v3, v4;
    var s1, s2;
    var rand;
    rand = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RANDOM"]();
    v1 = rand * 2 - 1;
    v2 = (4 * __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RANDOM"]() - 2) * Math.sqrt(rand * -rand + rand);
    s1 = v1 * v1 + v2 * v2;
    rand = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RANDOM"]();
    v3 = rand * 2 - 1;
    v4 = (4 * __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RANDOM"]() - 2) * Math.sqrt(rand * -rand + rand);
    s2 = v3 * v3 + v4 * v4;
    var d = Math.sqrt((1 - s1) / s2);
    out[0] = scale * v1;
    out[1] = scale * v2;
    out[2] = scale * v3 * d;
    out[3] = scale * v4 * d;
    return out;
}
function transformMat4(out, a, m) {
    var x = a[0], y = a[1], z = a[2], w = a[3];
    out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
    out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
    out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
    out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
    return out;
}
function transformQuat(out, a, q) {
    // Fast Vector Rotation using Quaternions by Robert Eisele
    // https://raw.org/proof/vector-rotation-using-quaternions/
    var qx = q[0], qy = q[1], qz = q[2], qw = q[3];
    var vx = a[0], vy = a[1], vz = a[2];
    // t = q x v
    var tx = qy * vz - qz * vy;
    var ty = qz * vx - qx * vz;
    var tz = qx * vy - qy * vx;
    // t = 2t
    tx = tx + tx;
    ty = ty + ty;
    tz = tz + tz;
    // v + w t + q x t
    out[0] = vx + qw * tx + qy * tz - qz * ty;
    out[1] = vy + qw * ty + qz * tx - qx * tz;
    out[2] = vz + qw * tz + qx * ty - qy * tx;
    out[3] = a[3];
    return out;
}
function zero(out) {
    out[0] = 0.0;
    out[1] = 0.0;
    out[2] = 0.0;
    out[3] = 0.0;
    return out;
}
function str(a) {
    return "vec4(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3];
}
function equals(a, b) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var b0 = b[0], b1 = b[1], b2 = b[2], b3 = b[3];
    return Math.abs(a0 - b0) <= __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EPSILON"] * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EPSILON"] * Math.max(1.0, Math.abs(a3), Math.abs(b3));
}
var sub = subtract;
var mul = multiply;
var div = divide;
var dist = distance;
var sqrDist = squaredDistance;
var len = length;
var sqrLen = squaredLength;
var forEach = function() {
    var vec = create();
    return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if (!stride) {
            stride = 4;
        }
        if (!offset) {
            offset = 0;
        }
        if (count) {
            l = Math.min(count * stride + offset, a.length);
        } else {
            l = a.length;
        }
        for(i = offset; i < l; i += stride){
            vec[0] = a[i];
            vec[1] = a[i + 1];
            vec[2] = a[i + 2];
            vec[3] = a[i + 3];
            fn(vec, vec, arg);
            a[i] = vec[0];
            a[i + 1] = vec[1];
            a[i + 2] = vec[2];
            a[i + 3] = vec[3];
        }
        return a;
    };
}();
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/gl-matrix/esm/quat.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "add",
    ()=>add,
    "calculateW",
    ()=>calculateW,
    "clone",
    ()=>clone,
    "conjugate",
    ()=>conjugate,
    "copy",
    ()=>copy,
    "create",
    ()=>create,
    "dot",
    ()=>dot,
    "equals",
    ()=>equals,
    "exactEquals",
    ()=>exactEquals,
    "exp",
    ()=>exp,
    "fromEuler",
    ()=>fromEuler,
    "fromMat3",
    ()=>fromMat3,
    "fromValues",
    ()=>fromValues,
    "getAngle",
    ()=>getAngle,
    "getAxisAngle",
    ()=>getAxisAngle,
    "identity",
    ()=>identity,
    "invert",
    ()=>invert,
    "len",
    ()=>len,
    "length",
    ()=>length,
    "lerp",
    ()=>lerp,
    "ln",
    ()=>ln,
    "mul",
    ()=>mul,
    "multiply",
    ()=>multiply,
    "normalize",
    ()=>normalize,
    "pow",
    ()=>pow,
    "random",
    ()=>random,
    "rotateX",
    ()=>rotateX,
    "rotateY",
    ()=>rotateY,
    "rotateZ",
    ()=>rotateZ,
    "rotationTo",
    ()=>rotationTo,
    "scale",
    ()=>scale,
    "set",
    ()=>set,
    "setAxes",
    ()=>setAxes,
    "setAxisAngle",
    ()=>setAxisAngle,
    "slerp",
    ()=>slerp,
    "sqlerp",
    ()=>sqlerp,
    "sqrLen",
    ()=>sqrLen,
    "squaredLength",
    ()=>squaredLength,
    "str",
    ()=>str
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/gl-matrix/esm/common.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat3$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/gl-matrix/esm/mat3.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec3$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/gl-matrix/esm/vec3.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/gl-matrix/esm/vec4.js [app-rsc] (ecmascript)");
;
;
;
;
function create() {
    var out = new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ARRAY_TYPE"](4);
    if (__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ARRAY_TYPE"] != Float32Array) {
        out[0] = 0;
        out[1] = 0;
        out[2] = 0;
    }
    out[3] = 1;
    return out;
}
function identity(out) {
    out[0] = 0;
    out[1] = 0;
    out[2] = 0;
    out[3] = 1;
    return out;
}
function setAxisAngle(out, axis, rad) {
    rad = rad * 0.5;
    var s = Math.sin(rad);
    out[0] = s * axis[0];
    out[1] = s * axis[1];
    out[2] = s * axis[2];
    out[3] = Math.cos(rad);
    return out;
}
function getAxisAngle(out_axis, q) {
    var rad = Math.acos(q[3]) * 2.0;
    var s = Math.sin(rad / 2.0);
    if (s > __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EPSILON"]) {
        out_axis[0] = q[0] / s;
        out_axis[1] = q[1] / s;
        out_axis[2] = q[2] / s;
    } else {
        // If s is zero, return any axis (no rotation - axis does not matter)
        out_axis[0] = 1;
        out_axis[1] = 0;
        out_axis[2] = 0;
    }
    return rad;
}
function getAngle(a, b) {
    var dotproduct = dot(a, b);
    return Math.acos(2 * dotproduct * dotproduct - 1);
}
function multiply(out, a, b) {
    var ax = a[0], ay = a[1], az = a[2], aw = a[3];
    var bx = b[0], by = b[1], bz = b[2], bw = b[3];
    out[0] = ax * bw + aw * bx + ay * bz - az * by;
    out[1] = ay * bw + aw * by + az * bx - ax * bz;
    out[2] = az * bw + aw * bz + ax * by - ay * bx;
    out[3] = aw * bw - ax * bx - ay * by - az * bz;
    return out;
}
function rotateX(out, a, rad) {
    rad *= 0.5;
    var ax = a[0], ay = a[1], az = a[2], aw = a[3];
    var bx = Math.sin(rad), bw = Math.cos(rad);
    out[0] = ax * bw + aw * bx;
    out[1] = ay * bw + az * bx;
    out[2] = az * bw - ay * bx;
    out[3] = aw * bw - ax * bx;
    return out;
}
function rotateY(out, a, rad) {
    rad *= 0.5;
    var ax = a[0], ay = a[1], az = a[2], aw = a[3];
    var by = Math.sin(rad), bw = Math.cos(rad);
    out[0] = ax * bw - az * by;
    out[1] = ay * bw + aw * by;
    out[2] = az * bw + ax * by;
    out[3] = aw * bw - ay * by;
    return out;
}
function rotateZ(out, a, rad) {
    rad *= 0.5;
    var ax = a[0], ay = a[1], az = a[2], aw = a[3];
    var bz = Math.sin(rad), bw = Math.cos(rad);
    out[0] = ax * bw + ay * bz;
    out[1] = ay * bw - ax * bz;
    out[2] = az * bw + aw * bz;
    out[3] = aw * bw - az * bz;
    return out;
}
function calculateW(out, a) {
    var x = a[0], y = a[1], z = a[2];
    out[0] = x;
    out[1] = y;
    out[2] = z;
    out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
    return out;
}
function exp(out, a) {
    var x = a[0], y = a[1], z = a[2], w = a[3];
    var r = Math.sqrt(x * x + y * y + z * z);
    var et = Math.exp(w);
    var s = r > 0 ? et * Math.sin(r) / r : 0;
    out[0] = x * s;
    out[1] = y * s;
    out[2] = z * s;
    out[3] = et * Math.cos(r);
    return out;
}
function ln(out, a) {
    var x = a[0], y = a[1], z = a[2], w = a[3];
    var r = Math.sqrt(x * x + y * y + z * z);
    var t = r > 0 ? Math.atan2(r, w) / r : 0;
    out[0] = x * t;
    out[1] = y * t;
    out[2] = z * t;
    out[3] = 0.5 * Math.log(x * x + y * y + z * z + w * w);
    return out;
}
function pow(out, a, b) {
    ln(out, a);
    scale(out, out, b);
    exp(out, out);
    return out;
}
function slerp(out, a, b, t) {
    // benchmarks:
    //    http://jsperf.com/quaternion-slerp-implementations
    var ax = a[0], ay = a[1], az = a[2], aw = a[3];
    var bx = b[0], by = b[1], bz = b[2], bw = b[3];
    var omega, cosom, sinom, scale0, scale1;
    // calc cosine
    cosom = ax * bx + ay * by + az * bz + aw * bw;
    // adjust signs (if necessary)
    if (cosom < 0.0) {
        cosom = -cosom;
        bx = -bx;
        by = -by;
        bz = -bz;
        bw = -bw;
    }
    // calculate coefficients
    if (1.0 - cosom > __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EPSILON"]) {
        // standard case (slerp)
        omega = Math.acos(cosom);
        sinom = Math.sin(omega);
        scale0 = Math.sin((1.0 - t) * omega) / sinom;
        scale1 = Math.sin(t * omega) / sinom;
    } else {
        // "from" and "to" quaternions are very close
        //  ... so we can do a linear interpolation
        scale0 = 1.0 - t;
        scale1 = t;
    }
    // calculate final values
    out[0] = scale0 * ax + scale1 * bx;
    out[1] = scale0 * ay + scale1 * by;
    out[2] = scale0 * az + scale1 * bz;
    out[3] = scale0 * aw + scale1 * bw;
    return out;
}
function random(out) {
    // Implementation of http://planning.cs.uiuc.edu/node198.html
    // TODO: Calling random 3 times is probably not the fastest solution
    var u1 = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RANDOM"]();
    var u2 = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RANDOM"]();
    var u3 = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RANDOM"]();
    var sqrt1MinusU1 = Math.sqrt(1 - u1);
    var sqrtU1 = Math.sqrt(u1);
    out[0] = sqrt1MinusU1 * Math.sin(2.0 * Math.PI * u2);
    out[1] = sqrt1MinusU1 * Math.cos(2.0 * Math.PI * u2);
    out[2] = sqrtU1 * Math.sin(2.0 * Math.PI * u3);
    out[3] = sqrtU1 * Math.cos(2.0 * Math.PI * u3);
    return out;
}
function invert(out, a) {
    var a0 = a[0], a1 = a[1], a2 = a[2], a3 = a[3];
    var dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3;
    var invDot = dot ? 1.0 / dot : 0;
    // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0
    out[0] = -a0 * invDot;
    out[1] = -a1 * invDot;
    out[2] = -a2 * invDot;
    out[3] = a3 * invDot;
    return out;
}
function conjugate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    out[2] = -a[2];
    out[3] = a[3];
    return out;
}
function fromMat3(out, m) {
    // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
    // article "Quaternion Calculus and Fast Animation".
    var fTrace = m[0] + m[4] + m[8];
    var fRoot;
    if (fTrace > 0.0) {
        // |w| > 1/2, may as well choose w > 1/2
        fRoot = Math.sqrt(fTrace + 1.0); // 2w
        out[3] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot; // 1/(4w)
        out[0] = (m[5] - m[7]) * fRoot;
        out[1] = (m[6] - m[2]) * fRoot;
        out[2] = (m[1] - m[3]) * fRoot;
    } else {
        // |w| <= 1/2
        var i = 0;
        if (m[4] > m[0]) i = 1;
        if (m[8] > m[i * 3 + i]) i = 2;
        var j = (i + 1) % 3;
        var k = (i + 2) % 3;
        fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
        out[i] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot;
        out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
        out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
        out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
    }
    return out;
}
function fromEuler(out, x, y, z) {
    var order = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ANGLE_ORDER"];
    var halfToRad = Math.PI / 360;
    x *= halfToRad;
    z *= halfToRad;
    y *= halfToRad;
    var sx = Math.sin(x);
    var cx = Math.cos(x);
    var sy = Math.sin(y);
    var cy = Math.cos(y);
    var sz = Math.sin(z);
    var cz = Math.cos(z);
    switch(order){
        case "xyz":
            out[0] = sx * cy * cz + cx * sy * sz;
            out[1] = cx * sy * cz - sx * cy * sz;
            out[2] = cx * cy * sz + sx * sy * cz;
            out[3] = cx * cy * cz - sx * sy * sz;
            break;
        case "xzy":
            out[0] = sx * cy * cz - cx * sy * sz;
            out[1] = cx * sy * cz - sx * cy * sz;
            out[2] = cx * cy * sz + sx * sy * cz;
            out[3] = cx * cy * cz + sx * sy * sz;
            break;
        case "yxz":
            out[0] = sx * cy * cz + cx * sy * sz;
            out[1] = cx * sy * cz - sx * cy * sz;
            out[2] = cx * cy * sz - sx * sy * cz;
            out[3] = cx * cy * cz + sx * sy * sz;
            break;
        case "yzx":
            out[0] = sx * cy * cz + cx * sy * sz;
            out[1] = cx * sy * cz + sx * cy * sz;
            out[2] = cx * cy * sz - sx * sy * cz;
            out[3] = cx * cy * cz - sx * sy * sz;
            break;
        case "zxy":
            out[0] = sx * cy * cz - cx * sy * sz;
            out[1] = cx * sy * cz + sx * cy * sz;
            out[2] = cx * cy * sz + sx * sy * cz;
            out[3] = cx * cy * cz - sx * sy * sz;
            break;
        case "zyx":
            out[0] = sx * cy * cz - cx * sy * sz;
            out[1] = cx * sy * cz + sx * cy * sz;
            out[2] = cx * cy * sz - sx * sy * cz;
            out[3] = cx * cy * cz + sx * sy * sz;
            break;
        default:
            throw new Error('Unknown angle order ' + order);
    }
    return out;
}
function str(a) {
    return "quat(" + a[0] + ", " + a[1] + ", " + a[2] + ", " + a[3] + ")";
}
var clone = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["clone"];
var fromValues = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fromValues"];
var copy = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["copy"];
var set = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["set"];
var add = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["add"];
var mul = multiply;
var scale = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["scale"];
var dot = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dot"];
var lerp = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["lerp"];
var length = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["length"];
var len = length;
var squaredLength = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["squaredLength"];
var sqrLen = squaredLength;
var normalize = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalize"];
var exactEquals = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["exactEquals"];
function equals(a, b) {
    return Math.abs(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dot"](a, b)) >= 1 - __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EPSILON"];
}
var rotationTo = function() {
    var tmpvec3 = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec3$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["create"]();
    var xUnitVec3 = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec3$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fromValues"](1, 0, 0);
    var yUnitVec3 = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec3$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fromValues"](0, 1, 0);
    return function(out, a, b) {
        var dot = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec3$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dot"](a, b);
        if (dot < -0.999999) {
            __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec3$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cross"](tmpvec3, xUnitVec3, a);
            if (__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec3$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["len"](tmpvec3) < 0.000001) __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec3$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cross"](tmpvec3, yUnitVec3, a);
            __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec3$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalize"](tmpvec3, tmpvec3);
            setAxisAngle(out, tmpvec3, Math.PI);
            return out;
        } else if (dot > 0.999999) {
            out[0] = 0;
            out[1] = 0;
            out[2] = 0;
            out[3] = 1;
            return out;
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec3$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cross"](tmpvec3, a, b);
            out[0] = tmpvec3[0];
            out[1] = tmpvec3[1];
            out[2] = tmpvec3[2];
            out[3] = 1 + dot;
            return normalize(out, out);
        }
    };
}();
var sqlerp = function() {
    var temp1 = create();
    var temp2 = create();
    return function(out, a, b, c, d, t) {
        slerp(temp1, a, d, t);
        slerp(temp2, b, c, t);
        slerp(out, temp1, temp2, 2 * t * (1 - t));
        return out;
    };
}();
var setAxes = function() {
    var matr = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$mat3$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["create"]();
    return function(out, view, right, up) {
        matr[0] = right[0];
        matr[3] = right[1];
        matr[6] = right[2];
        matr[1] = up[0];
        matr[4] = up[1];
        matr[7] = up[2];
        matr[2] = -view[0];
        matr[5] = -view[1];
        matr[8] = -view[2];
        return normalize(out, fromMat3(out, matr));
    };
}();
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/gl-matrix/esm/quat.js [app-rsc] (ecmascript) <export * as quat>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "quat",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$quat$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$quat$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/gl-matrix/esm/quat.js [app-rsc] (ecmascript)");
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/gl-matrix/esm/vec2.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "add",
    ()=>add,
    "angle",
    ()=>angle,
    "ceil",
    ()=>ceil,
    "clone",
    ()=>clone,
    "copy",
    ()=>copy,
    "create",
    ()=>create,
    "cross",
    ()=>cross,
    "dist",
    ()=>dist,
    "distance",
    ()=>distance,
    "div",
    ()=>div,
    "divide",
    ()=>divide,
    "dot",
    ()=>dot,
    "equals",
    ()=>equals,
    "exactEquals",
    ()=>exactEquals,
    "floor",
    ()=>floor,
    "forEach",
    ()=>forEach,
    "fromValues",
    ()=>fromValues,
    "inverse",
    ()=>inverse,
    "len",
    ()=>len,
    "length",
    ()=>length,
    "lerp",
    ()=>lerp,
    "max",
    ()=>max,
    "min",
    ()=>min,
    "mul",
    ()=>mul,
    "multiply",
    ()=>multiply,
    "negate",
    ()=>negate,
    "normalize",
    ()=>normalize,
    "random",
    ()=>random,
    "rotate",
    ()=>rotate,
    "round",
    ()=>round,
    "scale",
    ()=>scale,
    "scaleAndAdd",
    ()=>scaleAndAdd,
    "set",
    ()=>set,
    "signedAngle",
    ()=>signedAngle,
    "sqrDist",
    ()=>sqrDist,
    "sqrLen",
    ()=>sqrLen,
    "squaredDistance",
    ()=>squaredDistance,
    "squaredLength",
    ()=>squaredLength,
    "str",
    ()=>str,
    "sub",
    ()=>sub,
    "subtract",
    ()=>subtract,
    "transformMat2",
    ()=>transformMat2,
    "transformMat2d",
    ()=>transformMat2d,
    "transformMat3",
    ()=>transformMat3,
    "transformMat4",
    ()=>transformMat4,
    "zero",
    ()=>zero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/gl-matrix/esm/common.js [app-rsc] (ecmascript)");
;
function create() {
    var out = new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ARRAY_TYPE"](2);
    if (__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ARRAY_TYPE"] != Float32Array) {
        out[0] = 0;
        out[1] = 0;
    }
    return out;
}
function clone(a) {
    var out = new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ARRAY_TYPE"](2);
    out[0] = a[0];
    out[1] = a[1];
    return out;
}
function fromValues(x, y) {
    var out = new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ARRAY_TYPE"](2);
    out[0] = x;
    out[1] = y;
    return out;
}
function copy(out, a) {
    out[0] = a[0];
    out[1] = a[1];
    return out;
}
function set(out, x, y) {
    out[0] = x;
    out[1] = y;
    return out;
}
function add(out, a, b) {
    out[0] = a[0] + b[0];
    out[1] = a[1] + b[1];
    return out;
}
function subtract(out, a, b) {
    out[0] = a[0] - b[0];
    out[1] = a[1] - b[1];
    return out;
}
function multiply(out, a, b) {
    out[0] = a[0] * b[0];
    out[1] = a[1] * b[1];
    return out;
}
function divide(out, a, b) {
    out[0] = a[0] / b[0];
    out[1] = a[1] / b[1];
    return out;
}
function ceil(out, a) {
    out[0] = Math.ceil(a[0]);
    out[1] = Math.ceil(a[1]);
    return out;
}
function floor(out, a) {
    out[0] = Math.floor(a[0]);
    out[1] = Math.floor(a[1]);
    return out;
}
function min(out, a, b) {
    out[0] = Math.min(a[0], b[0]);
    out[1] = Math.min(a[1], b[1]);
    return out;
}
function max(out, a, b) {
    out[0] = Math.max(a[0], b[0]);
    out[1] = Math.max(a[1], b[1]);
    return out;
}
function round(out, a) {
    out[0] = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["round"](a[0]);
    out[1] = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["round"](a[1]);
    return out;
}
function scale(out, a, b) {
    out[0] = a[0] * b;
    out[1] = a[1] * b;
    return out;
}
function scaleAndAdd(out, a, b, scale) {
    out[0] = a[0] + b[0] * scale;
    out[1] = a[1] + b[1] * scale;
    return out;
}
function distance(a, b) {
    var x = b[0] - a[0], y = b[1] - a[1];
    return Math.sqrt(x * x + y * y);
}
function squaredDistance(a, b) {
    var x = b[0] - a[0], y = b[1] - a[1];
    return x * x + y * y;
}
function length(a) {
    var x = a[0], y = a[1];
    return Math.sqrt(x * x + y * y);
}
function squaredLength(a) {
    var x = a[0], y = a[1];
    return x * x + y * y;
}
function negate(out, a) {
    out[0] = -a[0];
    out[1] = -a[1];
    return out;
}
function inverse(out, a) {
    out[0] = 1.0 / a[0];
    out[1] = 1.0 / a[1];
    return out;
}
function normalize(out, a) {
    var x = a[0], y = a[1];
    var len = x * x + y * y;
    if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
    }
    out[0] = a[0] * len;
    out[1] = a[1] * len;
    return out;
}
function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1];
}
function cross(out, a, b) {
    var z = a[0] * b[1] - a[1] * b[0];
    out[0] = out[1] = 0;
    out[2] = z;
    return out;
}
function lerp(out, a, b, t) {
    var ax = a[0], ay = a[1];
    out[0] = ax + t * (b[0] - ax);
    out[1] = ay + t * (b[1] - ay);
    return out;
}
function random(out, scale) {
    scale = scale === undefined ? 1.0 : scale;
    var r = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RANDOM"]() * 2.0 * Math.PI;
    out[0] = Math.cos(r) * scale;
    out[1] = Math.sin(r) * scale;
    return out;
}
function transformMat2(out, a, m) {
    var x = a[0], y = a[1];
    out[0] = m[0] * x + m[2] * y;
    out[1] = m[1] * x + m[3] * y;
    return out;
}
function transformMat2d(out, a, m) {
    var x = a[0], y = a[1];
    out[0] = m[0] * x + m[2] * y + m[4];
    out[1] = m[1] * x + m[3] * y + m[5];
    return out;
}
function transformMat3(out, a, m) {
    var x = a[0], y = a[1];
    out[0] = m[0] * x + m[3] * y + m[6];
    out[1] = m[1] * x + m[4] * y + m[7];
    return out;
}
function transformMat4(out, a, m) {
    var x = a[0];
    var y = a[1];
    out[0] = m[0] * x + m[4] * y + m[12];
    out[1] = m[1] * x + m[5] * y + m[13];
    return out;
}
function rotate(out, a, b, rad) {
    //Translate point to the origin
    var p0 = a[0] - b[0], p1 = a[1] - b[1], sinC = Math.sin(rad), cosC = Math.cos(rad);
    //perform rotation and translate to correct position
    out[0] = p0 * cosC - p1 * sinC + b[0];
    out[1] = p0 * sinC + p1 * cosC + b[1];
    return out;
}
function angle(a, b) {
    var ax = a[0], ay = a[1], bx = b[0], by = b[1];
    return Math.abs(Math.atan2(ay * bx - ax * by, ax * bx + ay * by));
}
function signedAngle(a, b) {
    var ax = a[0], ay = a[1], bx = b[0], by = b[1];
    return Math.atan2(ax * by - ay * bx, ax * bx + ay * by);
}
function zero(out) {
    out[0] = 0.0;
    out[1] = 0.0;
    return out;
}
function str(a) {
    return "vec2(" + a[0] + ", " + a[1] + ")";
}
function exactEquals(a, b) {
    return a[0] === b[0] && a[1] === b[1];
}
function equals(a, b) {
    var a0 = a[0], a1 = a[1];
    var b0 = b[0], b1 = b[1];
    return Math.abs(a0 - b0) <= __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EPSILON"] * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$common$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["EPSILON"] * Math.max(1.0, Math.abs(a1), Math.abs(b1));
}
var len = length;
var sub = subtract;
var mul = multiply;
var div = divide;
var dist = distance;
var sqrDist = squaredDistance;
var sqrLen = squaredLength;
var forEach = function() {
    var vec = create();
    return function(a, stride, offset, count, fn, arg) {
        var i, l;
        if (!stride) {
            stride = 2;
        }
        if (!offset) {
            offset = 0;
        }
        if (count) {
            l = Math.min(count * stride + offset, a.length);
        } else {
            l = a.length;
        }
        for(i = offset; i < l; i += stride){
            vec[0] = a[i];
            vec[1] = a[i + 1];
            fn(vec, vec, arg);
            a[i] = vec[0];
            a[i + 1] = vec[1];
        }
        return a;
    };
}();
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/gl-matrix/esm/vec2.js [app-rsc] (ecmascript) <export * as vec2>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "vec2",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/gl-matrix/esm/vec2.js [app-rsc] (ecmascript)");
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/gl-matrix/esm/vec3.js [app-rsc] (ecmascript) <export * as vec3>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "vec3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec3$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$gl$2d$matrix$2f$esm$2f$vec3$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/gl-matrix/esm/vec3.js [app-rsc] (ecmascript)");
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/build/templates/app-page.js?page=/portfolio/page { GLOBAL_ERROR_MODULE => \"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)\", METADATA_0 => \"[project]/vs_code_workspace/react work/company portfolio/frontend/app/favicon.ico.mjs { IMAGE => \\\"[project]/vs_code_workspace/react work/company portfolio/frontend/app/favicon.ico (static in ecmascript, tag client)\\\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)\", MODULE_1 => \"[project]/vs_code_workspace/react work/company portfolio/frontend/app/layout.jsx [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_2 => \"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_3 => \"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_4 => \"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_5 => \"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_6 => \"[project]/vs_code_workspace/react work/company portfolio/frontend/app/portfolio/page.jsx [app-rsc] (ecmascript, Next.js Server Component)\" } [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__next_app__",
    ()=>__next_app__,
    "handler",
    ()=>handler,
    "routeModule",
    ()=>routeModule
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__Server__Component$29$__ = __turbopack_context__.i('[project]/vs_code_workspace/react work/company portfolio/frontend/app/favicon.ico.mjs { IMAGE => "[project]/vs_code_workspace/react work/company portfolio/frontend/app/favicon.ico (static in ecmascript, tag client)" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)');
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$module$2e$compiled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$instrumentation$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/instrumentation/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/lib/trace/tracer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/request-meta.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/lib/trace/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$interop$2d$default$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/app-render/interop-default.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$strip$2d$flight$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/app-render/strip-flight-headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/base-http/node.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$experimental$2f$ppr$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/lib/experimental/ppr.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/request/fallback-params.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$encryption$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/app-render/encryption-utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$streaming$2d$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/lib/streaming-metadata.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$action$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/app-render/action-utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/router/utils/app-paths.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$server$2d$action$2d$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/lib/server-action-request-meta.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/client/components/app-router-headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/router/utils/is-bot.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/response-cache/index.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/response-cache/types.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/lib/fallback.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/render-result.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/lib/constants.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/stream-utils/encoded-tags.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/send-payload.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/client/components/redirect-status-code.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/lib/scheduler.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/shared/lib/router/utils/interception-routes.js [app-rsc] (ecmascript)");
;
;
const __TURBOPACK__layout__$23$1__ = ()=>__turbopack_context__.r("[project]/vs_code_workspace/react work/company portfolio/frontend/app/layout.jsx [app-rsc] (ecmascript, Next.js Server Component)");
const __TURBOPACK__not$2d$found__$23$2__ = ()=>__turbopack_context__.r("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)");
const __TURBOPACK__forbidden__$23$3__ = ()=>__turbopack_context__.r("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)");
const __TURBOPACK__unauthorized__$23$4__ = ()=>__turbopack_context__.r("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)");
const __TURBOPACK__global$2d$error__$23$5__ = ()=>__turbopack_context__.r("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)");
const __TURBOPACK__page__$23$6__ = ()=>__turbopack_context__.r("[project]/vs_code_workspace/react work/company portfolio/frontend/app/portfolio/page.jsx [app-rsc] (ecmascript, Next.js Server Component)");
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
;
;
;
;
;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = [
    "",
    {
        "children": [
            "portfolio",
            {
                "children": [
                    "__PAGE__",
                    {},
                    {
                        metadata: {},
                        "page": [
                            __TURBOPACK__page__$23$6__,
                            "[project]/vs_code_workspace/react work/company portfolio/frontend/app/portfolio/page.jsx"
                        ]
                    }
                ]
            },
            {
                metadata: {}
            }
        ]
    },
    {
        metadata: {
            icon: [
                async (props)=>[
                        {
                            url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["fillMetadataSegment"])("//", await props.params, "favicon.ico") + `?${__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__Server__Component$29$__["default"].src.split("/").splice(-1)[0]}`,
                            sizes: `${__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__Server__Component$29$__["default"].width}x${__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__Server__Component$29$__["default"].height}`,
                            type: `image/x-icon`
                        }
                    ]
            ]
        },
        "layout": [
            __TURBOPACK__layout__$23$1__,
            "[project]/vs_code_workspace/react work/company portfolio/frontend/app/layout.jsx"
        ],
        "not-found": [
            __TURBOPACK__not$2d$found__$23$2__,
            "[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/components/builtin/not-found.js"
        ],
        "forbidden": [
            __TURBOPACK__forbidden__$23$3__,
            "[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/components/builtin/forbidden.js"
        ],
        "unauthorized": [
            __TURBOPACK__unauthorized__$23$4__,
            "[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/components/builtin/unauthorized.js"
        ],
        "global-error": [
            __TURBOPACK__global$2d$error__$23$5__,
            "[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/components/builtin/global-error.js"
        ]
    }
];
;
;
const __next_app_require__ = __turbopack_context__.r.bind(__turbopack_context__);
const __next_app_load_chunk__ = __turbopack_context__.l.bind(__turbopack_context__);
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};
;
;
;
;
;
;
const routeModule = new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$module$2e$compiled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppPageRouteModule"]({
    definition: {
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RouteKind"].APP_PAGE,
        page: "/portfolio/page",
        pathname: "/portfolio",
        // The following aren't used in production.
        bundlePath: '',
        filename: '',
        appPaths: []
    },
    userland: {
        loaderTree: tree
    },
    distDir: ("TURBOPACK compile-time value", ".next/dev") || '',
    relativeProjectDir: ("TURBOPACK compile-time value", "") || ''
});
async function handler(req, res, ctx) {
    var _this;
    if (routeModule.isDev) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addRequestMeta"])(req, 'devRequestTimingInternalsEnd', process.hrtime.bigint());
    }
    let srcPage = "/portfolio/page";
    // turbopack doesn't normalize `/index` in the page name
    // so we need to to process dynamic routes properly
    // TODO: fix turbopack providing differing value from webpack
    if ("TURBOPACK compile-time truthy", 1) {
        srcPage = srcPage.replace(/\/index$/, '') || '/';
    } else if (srcPage === '/index') {
        // we always normalize /index specifically
        srcPage = '/';
    }
    const multiZoneDraftMode = ("TURBOPACK compile-time value", false);
    const isMinimalMode = Boolean(("TURBOPACK compile-time value", false) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'minimalMode'));
    const prepareResult = await routeModule.prepare(req, res, {
        srcPage,
        multiZoneDraftMode
    });
    if (!prepareResult) {
        res.statusCode = 400;
        res.end('Bad Request');
        ctx.waitUntil == null ? void 0 : ctx.waitUntil.call(ctx, Promise.resolve());
        return null;
    }
    const { buildId, query, params, pageIsDynamic, buildManifest, nextFontManifest, reactLoadableManifest, serverActionsManifest, clientReferenceManifest, subresourceIntegrityManifest, prerenderManifest, isDraftMode, resolvedPathname, revalidateOnlyGenerated, routerServerContext, nextConfig, parsedUrl, interceptionRoutePatterns } = prepareResult;
    const normalizedSrcPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$app$2d$paths$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["normalizeAppPath"])(srcPage);
    let { isOnDemandRevalidate } = prepareResult;
    // We use the resolvedPathname instead of the parsedUrl.pathname because it
    // is not rewritten as resolvedPathname is. This will ensure that the correct
    // prerender info is used instead of using the original pathname as the
    // source. If however PPR is enabled and cacheComponents is disabled, we
    // treat the pathname as dynamic. Currently, there's a bug in the PPR
    // implementation that incorrectly leaves %%drp placeholders in the output of
    // parallel routes. This is addressed with cacheComponents.
    const prerenderInfo = nextConfig.experimental.ppr && !nextConfig.cacheComponents && (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$interception$2d$routes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isInterceptionRouteAppPath"])(resolvedPathname) ? null : routeModule.match(resolvedPathname, prerenderManifest);
    const isPrerendered = !!prerenderManifest.routes[resolvedPathname];
    const userAgent = req.headers['user-agent'] || '';
    const botType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getBotType"])(userAgent);
    const isHtmlBot = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$streaming$2d$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isHtmlBotRequest"])(req);
    /**
   * If true, this indicates that the request being made is for an app
   * prefetch request.
   */ const isPrefetchRSCRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'isPrefetchRSCRequest') ?? req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_ROUTER_PREFETCH_HEADER"]] === '1' // exclude runtime prefetches, which use '2'
    ;
    // NOTE: Don't delete headers[RSC] yet, it still needs to be used in renderToHTML later
    const isRSCRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'isRSCRequest') ?? Boolean(req.headers[__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RSC_HEADER"]]);
    const isPossibleServerAction = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$server$2d$action$2d$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getIsPossibleServerAction"])(req);
    /**
   * If the route being rendered is an app page, and the ppr feature has been
   * enabled, then the given route _could_ support PPR.
   */ const couldSupportPPR = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$experimental$2f$ppr$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["checkIsAppPPREnabled"])(nextConfig.experimental.ppr);
    // When enabled, this will allow the use of the `?__nextppronly` query to
    // enable debugging of the static shell.
    const hasDebugStaticShellQuery = ("TURBOPACK compile-time value", false) === '1' && typeof query.__nextppronly !== 'undefined' && couldSupportPPR;
    // When enabled, this will allow the use of the `?__nextppronly` query
    // to enable debugging of the fallback shell.
    const hasDebugFallbackShellQuery = hasDebugStaticShellQuery && query.__nextppronly === 'fallback';
    // This page supports PPR if it is marked as being `PARTIALLY_STATIC` in the
    // prerender manifest and this is an app page.
    const isRoutePPREnabled = couldSupportPPR && (((_this = prerenderManifest.routes[normalizedSrcPage] ?? prerenderManifest.dynamicRoutes[normalizedSrcPage]) == null ? void 0 : _this.renderingMode) === 'PARTIALLY_STATIC' || // Ideally we'd want to check the appConfig to see if this page has PPR
    // enabled or not, but that would require plumbing the appConfig through
    // to the server during development. We assume that the page supports it
    // but only during development.
    hasDebugStaticShellQuery && (routeModule.isDev === true || (routerServerContext == null ? void 0 : routerServerContext.experimentalTestProxy) === true));
    const isDebugStaticShell = hasDebugStaticShellQuery && isRoutePPREnabled;
    // We should enable debugging dynamic accesses when the static shell
    // debugging has been enabled and we're also in development mode.
    const isDebugDynamicAccesses = isDebugStaticShell && routeModule.isDev === true;
    const isDebugFallbackShell = hasDebugFallbackShellQuery && isRoutePPREnabled;
    // If we're in minimal mode, then try to get the postponed information from
    // the request metadata. If available, use it for resuming the postponed
    // render.
    const minimalPostponed = isRoutePPREnabled ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'postponed') : undefined;
    // If PPR is enabled, and this is a RSC request (but not a prefetch), then
    // we can use this fact to only generate the flight data for the request
    // because we can't cache the HTML (as it's also dynamic).
    let isDynamicRSCRequest = isRoutePPREnabled && isRSCRequest && !isPrefetchRSCRequest;
    // During a PPR revalidation, the RSC request is not dynamic if we do not have the postponed data.
    // We only attach the postponed data during a resume. If there's no postponed data, then it must be a revalidation.
    // This is to ensure that we don't bypass the cache during a revalidation.
    if (isMinimalMode) {
        isDynamicRSCRequest = isDynamicRSCRequest && !!minimalPostponed;
    }
    // Need to read this before it's stripped by stripFlightHeaders. We don't
    // need to transfer it to the request meta because it's only read
    // within this function; the static segment data should have already been
    // generated, so we will always either return a static response or a 404.
    const segmentPrefetchHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'segmentPrefetchRSCRequest');
    // TODO: investigate existing bug with shouldServeStreamingMetadata always
    // being true for a revalidate due to modifying the base-server this.renderOpts
    // when fixing this to correct logic it causes hydration issue since we set
    // serveStreamingMetadata to true during export
    const serveStreamingMetadata = isHtmlBot && isRoutePPREnabled ? false : !userAgent ? true : (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$streaming$2d$metadata$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["shouldServeStreamingMetadata"])(userAgent, nextConfig.htmlLimitedBots);
    const isSSG = Boolean((prerenderInfo || isPrerendered || prerenderManifest.routes[normalizedSrcPage]) && // If this is a html bot request and PPR is enabled, then we don't want
    // to serve a static response.
    !(isHtmlBot && isRoutePPREnabled));
    // When a page supports cacheComponents, we can support RDC for Navigations
    const supportsRDCForNavigations = isRoutePPREnabled && nextConfig.cacheComponents === true;
    // In development, we always want to generate dynamic HTML.
    const supportsDynamicResponse = // a data request, in which case we only produce static HTML.
    routeModule.isDev === true || // If this is not SSG or does not have static paths, then it supports
    // dynamic HTML.
    !isSSG || // If this request has provided postponed data, it supports dynamic
    // HTML.
    typeof minimalPostponed === 'string' || // If this handler supports onCacheEntryV2, then we can only support
    // dynamic responses if it's a dynamic RSC request and not in minimal mode. If it
    // doesn't support it we must fallback to the default behavior.
    (supportsRDCForNavigations && (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'onCacheEntryV2') ? // RSC request, we'll pass the minimal postponed data to the render
    // which will trigger the `supportsDynamicResponse` to be true.
    isDynamicRSCRequest && !isMinimalMode : isDynamicRSCRequest);
    // When html bots request PPR page, perform the full dynamic rendering.
    const shouldWaitOnAllReady = isHtmlBot && isRoutePPREnabled;
    let ssgCacheKey = null;
    if (!isDraftMode && isSSG && !supportsDynamicResponse && !isPossibleServerAction && !minimalPostponed && !isDynamicRSCRequest) {
        ssgCacheKey = resolvedPathname;
    }
    // the staticPathKey differs from ssgCacheKey since
    // ssgCacheKey is null in dev since we're always in "dynamic"
    // mode in dev to bypass the cache, but we still need to honor
    // dynamicParams = false in dev mode
    let staticPathKey = ssgCacheKey;
    if (!staticPathKey && routeModule.isDev) {
        staticPathKey = resolvedPathname;
    }
    // If this is a request for an app path that should be statically generated
    // and we aren't in the edge runtime, strip the flight headers so it will
    // generate the static response.
    if (!routeModule.isDev && !isDraftMode && isSSG && isRSCRequest && !isDynamicRSCRequest) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$strip$2d$flight$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stripFlightHeaders"])(req.headers);
    }
    const ComponentMod = {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__,
        tree,
        GlobalError: __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__["default"],
        handler,
        routeModule,
        __next_app__
    };
    // Before rendering (which initializes component tree modules), we have to
    // set the reference manifests to our global store so Server Action's
    // encryption util can access to them at the top level of the page module.
    if (serverActionsManifest && clientReferenceManifest) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$encryption$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setReferenceManifestsSingleton"])({
            page: srcPage,
            clientReferenceManifest,
            serverActionsManifest,
            serverModuleMap: (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$action$2d$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerModuleMap"])({
                serverActionsManifest
            })
        });
    }
    const method = req.method || 'GET';
    const tracer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTracer"])();
    const activeSpan = tracer.getActiveScopeSpan();
    const render404 = async ()=>{
        // TODO: should route-module itself handle rendering the 404
        if (routerServerContext == null ? void 0 : routerServerContext.render404) {
            await routerServerContext.render404(req, res, parsedUrl, false);
        } else {
            res.end('This page could not be found');
        }
        return null;
    };
    try {
        const varyHeader = routeModule.getVaryHeader(resolvedPathname, interceptionRoutePatterns);
        res.setHeader('Vary', varyHeader);
        const invokeRouteModule = async (span, context)=>{
            const nextReq = new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeNextRequest"](req);
            const nextRes = new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$node$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NodeNextResponse"](res);
            return routeModule.render(nextReq, nextRes, context).finally(()=>{
                if (!span) return;
                span.setAttributes({
                    'http.status_code': res.statusCode,
                    'next.rsc': false
                });
                const rootSpanAttributes = tracer.getRootSpanAttributes();
                // We were unable to get attributes, probably OTEL is not enabled
                if (!rootSpanAttributes) {
                    return;
                }
                if (rootSpanAttributes.get('next.span_type') !== __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseServerSpan"].handleRequest) {
                    console.warn(`Unexpected root span type '${rootSpanAttributes.get('next.span_type')}'. Please report this Next.js issue https://github.com/vercel/next.js`);
                    return;
                }
                const route = rootSpanAttributes.get('next.route');
                if (route) {
                    const name = `${method} ${route}`;
                    span.setAttributes({
                        'next.route': route,
                        'http.route': route,
                        'next.span_name': name
                    });
                    span.updateName(name);
                } else {
                    span.updateName(`${method} ${srcPage}`);
                }
            });
        };
        const incrementalCache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'incrementalCache');
        const doRender = async ({ span, postponed, fallbackRouteParams, forceStaticRender })=>{
            const context = {
                query,
                params,
                page: normalizedSrcPage,
                sharedContext: {
                    buildId
                },
                serverComponentsHmrCache: (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'serverComponentsHmrCache'),
                fallbackRouteParams,
                renderOpts: {
                    App: ()=>null,
                    Document: ()=>null,
                    pageConfig: {},
                    ComponentMod,
                    Component: (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$interop$2d$default$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["interopDefault"])(ComponentMod),
                    params,
                    routeModule,
                    page: srcPage,
                    postponed,
                    shouldWaitOnAllReady,
                    serveStreamingMetadata,
                    supportsDynamicResponse: typeof postponed === 'string' || supportsDynamicResponse,
                    buildManifest,
                    nextFontManifest,
                    reactLoadableManifest,
                    subresourceIntegrityManifest,
                    serverActionsManifest,
                    clientReferenceManifest,
                    setCacheStatus: routerServerContext == null ? void 0 : routerServerContext.setCacheStatus,
                    setIsrStatus: routerServerContext == null ? void 0 : routerServerContext.setIsrStatus,
                    setReactDebugChannel: routerServerContext == null ? void 0 : routerServerContext.setReactDebugChannel,
                    dir: ("TURBOPACK compile-time truthy", 1) ? require('path').join(/* turbopackIgnore: true */ process.cwd(), routeModule.relativeProjectDir) : "TURBOPACK unreachable",
                    isDraftMode,
                    botType,
                    isOnDemandRevalidate,
                    isPossibleServerAction,
                    assetPrefix: nextConfig.assetPrefix,
                    nextConfigOutput: nextConfig.output,
                    crossOrigin: nextConfig.crossOrigin,
                    trailingSlash: nextConfig.trailingSlash,
                    images: nextConfig.images,
                    previewProps: prerenderManifest.preview,
                    deploymentId: nextConfig.deploymentId,
                    enableTainting: nextConfig.experimental.taint,
                    htmlLimitedBots: nextConfig.htmlLimitedBots,
                    reactMaxHeadersLength: nextConfig.reactMaxHeadersLength,
                    multiZoneDraftMode,
                    incrementalCache,
                    cacheLifeProfiles: nextConfig.cacheLife,
                    basePath: nextConfig.basePath,
                    serverActions: nextConfig.experimental.serverActions,
                    ...isDebugStaticShell || isDebugDynamicAccesses || isDebugFallbackShell ? {
                        nextExport: true,
                        supportsDynamicResponse: false,
                        isStaticGeneration: true,
                        isDebugDynamicAccesses: isDebugDynamicAccesses
                    } : {},
                    cacheComponents: Boolean(nextConfig.cacheComponents),
                    experimental: {
                        isRoutePPREnabled,
                        expireTime: nextConfig.expireTime,
                        staleTimes: nextConfig.experimental.staleTimes,
                        dynamicOnHover: Boolean(nextConfig.experimental.dynamicOnHover),
                        inlineCss: Boolean(nextConfig.experimental.inlineCss),
                        authInterrupts: Boolean(nextConfig.experimental.authInterrupts),
                        clientTraceMetadata: nextConfig.experimental.clientTraceMetadata || [],
                        clientParamParsingOrigins: nextConfig.experimental.clientParamParsingOrigins
                    },
                    waitUntil: ctx.waitUntil,
                    onClose: (cb)=>{
                        res.on('close', cb);
                    },
                    onAfterTaskError: ()=>{},
                    onInstrumentationRequestError: (error, _request, errorContext)=>routeModule.onRequestError(req, error, errorContext, routerServerContext),
                    err: (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'invokeError'),
                    dev: routeModule.isDev
                }
            };
            if (isDebugStaticShell || isDebugDynamicAccesses) {
                context.renderOpts.nextExport = true;
                context.renderOpts.supportsDynamicResponse = false;
                context.renderOpts.isDebugDynamicAccesses = isDebugDynamicAccesses;
            }
            // When we're revalidating in the background, we should not allow dynamic
            // responses.
            if (forceStaticRender) {
                context.renderOpts.supportsDynamicResponse = false;
            }
            const result = await invokeRouteModule(span, context);
            const { metadata } = result;
            const { cacheControl, headers = {}, fetchTags: cacheTags, fetchMetrics } = metadata;
            if (cacheTags) {
                headers[__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"]] = cacheTags;
            }
            // Pull any fetch metrics from the render onto the request.
            ;
            req.fetchMetrics = fetchMetrics;
            // we don't throw static to dynamic errors in dev as isSSG
            // is a best guess in dev since we don't have the prerender pass
            // to know whether the path is actually static or not
            if (isSSG && (cacheControl == null ? void 0 : cacheControl.revalidate) === 0 && !routeModule.isDev && !isRoutePPREnabled) {
                const staticBailoutInfo = metadata.staticBailoutInfo;
                const err = Object.defineProperty(new Error(`Page changed from static to dynamic at runtime ${resolvedPathname}${(staticBailoutInfo == null ? void 0 : staticBailoutInfo.description) ? `, reason: ${staticBailoutInfo.description}` : ``}` + `\nsee more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`), "__NEXT_ERROR_CODE", {
                    value: "E132",
                    enumerable: false,
                    configurable: true
                });
                if (staticBailoutInfo == null ? void 0 : staticBailoutInfo.stack) {
                    const stack = staticBailoutInfo.stack;
                    err.stack = err.message + stack.substring(stack.indexOf('\n'));
                }
                throw err;
            }
            return {
                value: {
                    kind: __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE,
                    html: result,
                    headers,
                    rscData: metadata.flightData,
                    postponed: metadata.postponed,
                    status: metadata.statusCode,
                    segmentData: metadata.segmentData
                },
                cacheControl
            };
        };
        const responseGenerator = async ({ hasResolved, previousCacheEntry: previousIncrementalCacheEntry, isRevalidating, span, forceStaticRender = false })=>{
            const isProduction = routeModule.isDev === false;
            const didRespond = hasResolved || res.writableEnded;
            // skip on-demand revalidate if cache is not present and
            // revalidate-if-generated is set
            if (isOnDemandRevalidate && revalidateOnlyGenerated && !previousIncrementalCacheEntry && !isMinimalMode) {
                if (routerServerContext == null ? void 0 : routerServerContext.render404) {
                    await routerServerContext.render404(req, res);
                } else {
                    res.statusCode = 404;
                    res.end('This page could not be found');
                }
                return null;
            }
            let fallbackMode;
            if (prerenderInfo) {
                fallbackMode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parseFallbackField"])(prerenderInfo.fallback);
            }
            // When serving a HTML bot request, we want to serve a blocking render and
            // not the prerendered page. This ensures that the correct content is served
            // to the bot in the head.
            if (fallbackMode === __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].PRERENDER && (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$is$2d$bot$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isBot"])(userAgent)) {
                if (!isRoutePPREnabled || isHtmlBot) {
                    fallbackMode = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].BLOCKING_STATIC_RENDER;
                }
            }
            if ((previousIncrementalCacheEntry == null ? void 0 : previousIncrementalCacheEntry.isStale) === -1) {
                isOnDemandRevalidate = true;
            }
            // TODO: adapt for PPR
            // only allow on-demand revalidate for fallback: true/blocking
            // or for prerendered fallback: false paths
            if (isOnDemandRevalidate && (fallbackMode !== __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].NOT_FOUND || previousIncrementalCacheEntry)) {
                fallbackMode = __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].BLOCKING_STATIC_RENDER;
            }
            if (!isMinimalMode && fallbackMode !== __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].BLOCKING_STATIC_RENDER && staticPathKey && !didRespond && !isDraftMode && pageIsDynamic && (isProduction || !isPrerendered)) {
                // if the page has dynamicParams: false and this pathname wasn't
                // prerendered trigger the no fallback handling
                if (// getStaticPaths.
                (isProduction || prerenderInfo) && // When fallback isn't present, abort this render so we 404
                fallbackMode === __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$fallback$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["FallbackMode"].NOT_FOUND) {
                    if (nextConfig.experimental.adapterPath) {
                        return await render404();
                    }
                    throw new __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js$2c$__cjs$29$__["NoFallbackError"]();
                }
                // When cacheComponents is enabled, we can use the fallback
                // response if the request is not a dynamic RSC request because the
                // RSC data when this feature flag is enabled does not contain any
                // param references. Without this feature flag enabled, the RSC data
                // contains param references, and therefore we can't use the fallback.
                if (isRoutePPREnabled && (nextConfig.cacheComponents ? !isDynamicRSCRequest : !isRSCRequest)) {
                    const cacheKey = isProduction && typeof (prerenderInfo == null ? void 0 : prerenderInfo.fallback) === 'string' ? prerenderInfo.fallback : normalizedSrcPage;
                    const fallbackRouteParams = // can use the manifest fallback route params.
                    isProduction && (prerenderInfo == null ? void 0 : prerenderInfo.fallbackRouteParams) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createOpaqueFallbackRouteParams"])(prerenderInfo.fallbackRouteParams) : isDebugFallbackShell ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFallbackRouteParams"])(normalizedSrcPage, routeModule) : null;
                    // We use the response cache here to handle the revalidation and
                    // management of the fallback shell.
                    const fallbackResponse = await routeModule.handleResponse({
                        cacheKey,
                        req,
                        nextConfig,
                        routeKind: __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RouteKind"].APP_PAGE,
                        isFallback: true,
                        prerenderManifest,
                        isRoutePPREnabled,
                        responseGenerator: async ()=>doRender({
                                span,
                                // We pass `undefined` as rendering a fallback isn't resumed
                                // here.
                                postponed: undefined,
                                fallbackRouteParams,
                                forceStaticRender: false
                            }),
                        waitUntil: ctx.waitUntil,
                        isMinimalMode
                    });
                    // If the fallback response was set to null, then we should return null.
                    if (fallbackResponse === null) return null;
                    // Otherwise, if we did get a fallback response, we should return it.
                    if (fallbackResponse) {
                        // Remove the cache control from the response to prevent it from being
                        // used in the surrounding cache.
                        delete fallbackResponse.cacheControl;
                        return fallbackResponse;
                    }
                }
            }
            // Only requests that aren't revalidating can be resumed. If we have the
            // minimal postponed data, then we should resume the render with it.
            let postponed = !isOnDemandRevalidate && !isRevalidating && minimalPostponed ? minimalPostponed : undefined;
            // If this is a dynamic RSC request, we should use the postponed data from
            // the static render (if available). This ensures that we can utilize the
            // resume data cache (RDC) from the static render to ensure that the data
            // is consistent between the static and dynamic renders.
            if (supportsRDCForNavigations && ("TURBOPACK compile-time value", "nodejs") !== 'edge' && !isMinimalMode && incrementalCache && isDynamicRSCRequest && // We don't typically trigger an on-demand revalidation for dynamic RSC
            // requests, as we're typically revalidating the page in the background
            // instead. However, if the cache entry is stale, we should trigger a
            // background revalidation on dynamic RSC requests. This prevents us
            // from entering an infinite loop of revalidations.
            !forceStaticRender) {
                const incrementalCacheEntry = await incrementalCache.get(resolvedPathname, {
                    kind: __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].APP_PAGE,
                    isRoutePPREnabled: true,
                    isFallback: false
                });
                // If the cache entry is found, we should use the postponed data from
                // the cache.
                if (incrementalCacheEntry && incrementalCacheEntry.value && incrementalCacheEntry.value.kind === __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE) {
                    // CRITICAL: we're assigning the postponed data from the cache entry
                    // here as we're using the RDC to resume the render.
                    postponed = incrementalCacheEntry.value.postponed;
                    // If the cache entry is stale, we should trigger a background
                    // revalidation so that subsequent requests will get a fresh response.
                    if (incrementalCacheEntry && // We want to trigger this flow if the cache entry is stale and if
                    // the requested revalidation flow is either foreground or
                    // background.
                    (incrementalCacheEntry.isStale === -1 || incrementalCacheEntry.isStale === true)) {
                        // We want to schedule this on the next tick to ensure that the
                        // render is not blocked on it.
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["scheduleOnNextTick"])(async ()=>{
                            const responseCache = routeModule.getResponseCache(req);
                            try {
                                await responseCache.revalidate(resolvedPathname, incrementalCache, isRoutePPREnabled, false, (c)=>responseGenerator({
                                        ...c,
                                        // CRITICAL: we need to set this to true as we're
                                        // revalidating in the background and typically this dynamic
                                        // RSC request is not treated as static.
                                        forceStaticRender: true
                                    }), // previous cache entry here (which is stale) will switch on
                                // isOnDemandRevalidate and break the prerendering.
                                null, hasResolved, ctx.waitUntil);
                            } catch (err) {
                                console.error('Error revalidating the page in the background', err);
                            }
                        });
                    }
                }
            }
            // When we're in minimal mode, if we're trying to debug the static shell,
            // we should just return nothing instead of resuming the dynamic render.
            if ((isDebugStaticShell || isDebugDynamicAccesses) && typeof postponed !== 'undefined') {
                return {
                    cacheControl: {
                        revalidate: 1,
                        expire: undefined
                    },
                    value: {
                        kind: __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].PAGES,
                        html: __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].EMPTY,
                        pageData: {},
                        headers: undefined,
                        status: undefined
                    }
                };
            }
            const fallbackRouteParams = // can use the manifest fallback route params if we need to render the
            // fallback shell.
            isProduction && (prerenderInfo == null ? void 0 : prerenderInfo.fallbackRouteParams) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'renderFallbackShell') ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createOpaqueFallbackRouteParams"])(prerenderInfo.fallbackRouteParams) : isDebugFallbackShell ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2f$fallback$2d$params$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFallbackRouteParams"])(normalizedSrcPage, routeModule) : null;
            // Perform the render.
            return doRender({
                span,
                postponed,
                fallbackRouteParams,
                forceStaticRender
            });
        };
        const handleResponse = async (span)=>{
            var _cacheEntry_value, _cachedData_headers;
            const cacheEntry = await routeModule.handleResponse({
                cacheKey: ssgCacheKey,
                responseGenerator: (c)=>responseGenerator({
                        span,
                        ...c
                    }),
                routeKind: __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RouteKind"].APP_PAGE,
                isOnDemandRevalidate,
                isRoutePPREnabled,
                req,
                nextConfig,
                prerenderManifest,
                waitUntil: ctx.waitUntil,
                isMinimalMode
            });
            if (isDraftMode) {
                res.setHeader('Cache-Control', 'private, no-cache, no-store, max-age=0, must-revalidate');
            }
            // In dev, we should not cache pages for any reason.
            if (routeModule.isDev) {
                res.setHeader('Cache-Control', 'no-store, must-revalidate');
            }
            if (!cacheEntry) {
                if (ssgCacheKey) {
                    // A cache entry might not be generated if a response is written
                    // in `getInitialProps` or `getServerSideProps`, but those shouldn't
                    // have a cache key. If we do have a cache key but we don't end up
                    // with a cache entry, then either Next.js or the application has a
                    // bug that needs fixing.
                    throw Object.defineProperty(new Error('invariant: cache entry required but not generated'), "__NEXT_ERROR_CODE", {
                        value: "E62",
                        enumerable: false,
                        configurable: true
                    });
                }
                return null;
            }
            if (((_cacheEntry_value = cacheEntry.value) == null ? void 0 : _cacheEntry_value.kind) !== __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE) {
                var _cacheEntry_value1;
                throw Object.defineProperty(new Error(`Invariant app-page handler received invalid cache entry ${(_cacheEntry_value1 = cacheEntry.value) == null ? void 0 : _cacheEntry_value1.kind}`), "__NEXT_ERROR_CODE", {
                    value: "E707",
                    enumerable: false,
                    configurable: true
                });
            }
            const didPostpone = typeof cacheEntry.value.postponed === 'string';
            if (isSSG && // We don't want to send a cache header for requests that contain dynamic
            // data. If this is a Dynamic RSC request or wasn't a Prefetch RSC
            // request, then we should set the cache header.
            !isDynamicRSCRequest && (!didPostpone || isPrefetchRSCRequest)) {
                if (!isMinimalMode) {
                    // set x-nextjs-cache header to match the header
                    // we set for the image-optimizer
                    res.setHeader('x-nextjs-cache', isOnDemandRevalidate ? 'REVALIDATED' : cacheEntry.isMiss ? 'MISS' : cacheEntry.isStale ? 'STALE' : 'HIT');
                }
                // Set a header used by the client router to signal the response is static
                // and should respect the `static` cache staleTime value.
                res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_IS_PRERENDER_HEADER"], '1');
            }
            const { value: cachedData } = cacheEntry;
            // Coerce the cache control parameter from the render.
            let cacheControl;
            // If this is a resume request in minimal mode it is streamed with dynamic
            // content and should not be cached.
            if (minimalPostponed) {
                cacheControl = {
                    revalidate: 0,
                    expire: undefined
                };
            } else if (isDynamicRSCRequest) {
                cacheControl = {
                    revalidate: 0,
                    expire: undefined
                };
            } else if (!routeModule.isDev) {
                // If this is a preview mode request, we shouldn't cache it
                if (isDraftMode) {
                    cacheControl = {
                        revalidate: 0,
                        expire: undefined
                    };
                } else if (!isSSG) {
                    if (!res.getHeader('Cache-Control')) {
                        cacheControl = {
                            revalidate: 0,
                            expire: undefined
                        };
                    }
                } else if (cacheEntry.cacheControl) {
                    // If the cache entry has a cache control with a revalidate value that's
                    // a number, use it.
                    if (typeof cacheEntry.cacheControl.revalidate === 'number') {
                        var _cacheEntry_cacheControl;
                        if (cacheEntry.cacheControl.revalidate < 1) {
                            throw Object.defineProperty(new Error(`Invalid revalidate configuration provided: ${cacheEntry.cacheControl.revalidate} < 1`), "__NEXT_ERROR_CODE", {
                                value: "E22",
                                enumerable: false,
                                configurable: true
                            });
                        }
                        cacheControl = {
                            revalidate: cacheEntry.cacheControl.revalidate,
                            expire: ((_cacheEntry_cacheControl = cacheEntry.cacheControl) == null ? void 0 : _cacheEntry_cacheControl.expire) ?? nextConfig.expireTime
                        };
                    } else {
                        cacheControl = {
                            revalidate: __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CACHE_ONE_YEAR"],
                            expire: undefined
                        };
                    }
                }
            }
            cacheEntry.cacheControl = cacheControl;
            if (typeof segmentPrefetchHeader === 'string' && (cachedData == null ? void 0 : cachedData.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE && cachedData.segmentData) {
                var _cachedData_headers1;
                // This is a prefetch request issued by the client Segment Cache. These
                // should never reach the application layer (lambda). We should either
                // respond from the cache (HIT) or respond with 204 No Content (MISS).
                // Set a header to indicate that PPR is enabled for this route. This
                // lets the client distinguish between a regular cache miss and a cache
                // miss due to PPR being disabled. In other contexts this header is used
                // to indicate that the response contains dynamic data, but here we're
                // only using it to indicate that the feature is enabled — the segment
                // response itself contains whether the data is dynamic.
                res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_DID_POSTPONE_HEADER"], '2');
                // Add the cache tags header to the response if it exists and we're in
                // minimal mode while rendering a static page.
                const tags = (_cachedData_headers1 = cachedData.headers) == null ? void 0 : _cachedData_headers1[__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"]];
                if (isMinimalMode && isSSG && tags && typeof tags === 'string') {
                    res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"], tags);
                }
                const matchedSegment = cachedData.segmentData.get(segmentPrefetchHeader);
                if (matchedSegment !== undefined) {
                    // Cache hit
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                        req,
                        res,
                        generateEtags: nextConfig.generateEtags,
                        poweredByHeader: nextConfig.poweredByHeader,
                        result: __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].fromStatic(matchedSegment, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RSC_CONTENT_TYPE_HEADER"]),
                        cacheControl: cacheEntry.cacheControl
                    });
                }
                // Cache miss. Either a cache entry for this route has not been generated
                // (which technically should not be possible when PPR is enabled, because
                // at a minimum there should always be a fallback entry) or there's no
                // match for the requested segment. Respond with a 204 No Content. We
                // don't bother to respond with 404, because these requests are only
                // issued as part of a prefetch.
                res.statusCode = 204;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                    req,
                    res,
                    generateEtags: nextConfig.generateEtags,
                    poweredByHeader: nextConfig.poweredByHeader,
                    result: __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].EMPTY,
                    cacheControl: cacheEntry.cacheControl
                });
            }
            // If there's a callback for `onCacheEntry`, call it with the cache entry
            // and the revalidate options. If we support RDC for Navigations, we
            // prefer the `onCacheEntryV2` callback. Once RDC for Navigations is the
            // default, we can remove the fallback to `onCacheEntry` as
            // `onCacheEntryV2` is now fully supported.
            const onCacheEntry = supportsRDCForNavigations ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'onCacheEntryV2') ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'onCacheEntry') : (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'onCacheEntry');
            if (onCacheEntry) {
                const finished = await onCacheEntry(cacheEntry, {
                    url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRequestMeta"])(req, 'initURL') ?? req.url
                });
                if (finished) return null;
            }
            if (cachedData.headers) {
                const headers = {
                    ...cachedData.headers
                };
                if (!isMinimalMode || !isSSG) {
                    delete headers[__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"]];
                }
                for (let [key, value] of Object.entries(headers)){
                    if (typeof value === 'undefined') continue;
                    if (Array.isArray(value)) {
                        for (const v of value){
                            res.appendHeader(key, v);
                        }
                    } else if (typeof value === 'number') {
                        value = value.toString();
                        res.appendHeader(key, value);
                    } else {
                        res.appendHeader(key, value);
                    }
                }
            }
            // Add the cache tags header to the response if it exists and we're in
            // minimal mode while rendering a static page.
            const tags = (_cachedData_headers = cachedData.headers) == null ? void 0 : _cachedData_headers[__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"]];
            if (isMinimalMode && isSSG && tags && typeof tags === 'string') {
                res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAGS_HEADER"], tags);
            }
            // If the request is a data request, then we shouldn't set the status code
            // from the response because it should always be 200. This should be gated
            // behind the experimental PPR flag.
            if (cachedData.status && (!isRSCRequest || !isRoutePPREnabled)) {
                res.statusCode = cachedData.status;
            }
            // Redirect information is encoded in RSC payload, so we don't need to use redirect status codes
            if (!isMinimalMode && cachedData.status && __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$redirect$2d$status$2d$code$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RedirectStatusCode"][cachedData.status] && isRSCRequest) {
                res.statusCode = 200;
            }
            // Mark that the request did postpone.
            if (didPostpone && !isDynamicRSCRequest) {
                res.setHeader(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NEXT_DID_POSTPONE_HEADER"], '1');
            }
            // we don't go through this block when preview mode is true
            // as preview mode is a dynamic request (bypasses cache) and doesn't
            // generate both HTML and payloads in the same request so continue to just
            // return the generated payload
            if (isRSCRequest && !isDraftMode) {
                // If this is a dynamic RSC request, then stream the response.
                if (typeof cachedData.rscData === 'undefined') {
                    // If the response is not an RSC response, then we can't serve it.
                    if (cachedData.html.contentType !== __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RSC_CONTENT_TYPE_HEADER"]) {
                        if (nextConfig.cacheComponents) {
                            res.statusCode = 404;
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                                req,
                                res,
                                generateEtags: nextConfig.generateEtags,
                                poweredByHeader: nextConfig.poweredByHeader,
                                result: __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].EMPTY,
                                cacheControl: cacheEntry.cacheControl
                            });
                        } else {
                            // Otherwise this case is not expected.
                            throw Object.defineProperty(new __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$invariant$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["InvariantError"](`Expected RSC response, got ${cachedData.html.contentType}`), "__NEXT_ERROR_CODE", {
                                value: "E789",
                                enumerable: false,
                                configurable: true
                            });
                        }
                    }
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                        req,
                        res,
                        generateEtags: nextConfig.generateEtags,
                        poweredByHeader: nextConfig.poweredByHeader,
                        result: cachedData.html,
                        cacheControl: cacheEntry.cacheControl
                    });
                }
                // As this isn't a prefetch request, we should serve the static flight
                // data.
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                    req,
                    res,
                    generateEtags: nextConfig.generateEtags,
                    poweredByHeader: nextConfig.poweredByHeader,
                    result: __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].fromStatic(cachedData.rscData, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$app$2d$router$2d$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["RSC_CONTENT_TYPE_HEADER"]),
                    cacheControl: cacheEntry.cacheControl
                });
            }
            // This is a request for HTML data.
            const body = cachedData.html;
            // If there's no postponed state, we should just serve the HTML. This
            // should also be the case for a resume request because it's completed
            // as a server render (rather than a static render).
            if (!didPostpone || isMinimalMode || isRSCRequest) {
                // If we're in test mode, we should add a sentinel chunk to the response
                // that's between the static and dynamic parts so we can compare the
                // chunks and add assertions.
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                    req,
                    res,
                    generateEtags: nextConfig.generateEtags,
                    poweredByHeader: nextConfig.poweredByHeader,
                    result: body,
                    cacheControl: cacheEntry.cacheControl
                });
            }
            // If we're debugging the static shell or the dynamic API accesses, we
            // should just serve the HTML without resuming the render. The returned
            // HTML will be the static shell so all the Dynamic API's will be used
            // during static generation.
            if (isDebugStaticShell || isDebugDynamicAccesses) {
                // Since we're not resuming the render, we need to at least add the
                // closing body and html tags to create valid HTML.
                body.push(new ReadableStream({
                    start (controller) {
                        controller.enqueue(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encoded$2d$tags$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY_AND_HTML);
                        controller.close();
                    }
                }));
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                    req,
                    res,
                    generateEtags: nextConfig.generateEtags,
                    poweredByHeader: nextConfig.poweredByHeader,
                    result: body,
                    cacheControl: {
                        revalidate: 0,
                        expire: undefined
                    }
                });
            }
            // If we're in test mode, we should add a sentinel chunk to the response
            // that's between the static and dynamic parts so we can compare the
            // chunks and add assertions.
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            // This request has postponed, so let's create a new transformer that the
            // dynamic data can pipe to that will attach the dynamic data to the end
            // of the response.
            const transformer = new TransformStream();
            body.push(transformer.readable);
            // Perform the render again, but this time, provide the postponed state.
            // We don't await because we want the result to start streaming now, and
            // we've already chained the transformer's readable to the render result.
            doRender({
                span,
                postponed: cachedData.postponed,
                // This is a resume render, not a fallback render, so we don't need to
                // set this.
                fallbackRouteParams: null,
                forceStaticRender: false
            }).then(async (result)=>{
                var _result_value;
                if (!result) {
                    throw Object.defineProperty(new Error('Invariant: expected a result to be returned'), "__NEXT_ERROR_CODE", {
                        value: "E463",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (((_result_value = result.value) == null ? void 0 : _result_value.kind) !== __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE) {
                    var _result_value1;
                    throw Object.defineProperty(new Error(`Invariant: expected a page response, got ${(_result_value1 = result.value) == null ? void 0 : _result_value1.kind}`), "__NEXT_ERROR_CODE", {
                        value: "E305",
                        enumerable: false,
                        configurable: true
                    });
                }
                // Pipe the resume result to the transformer.
                await result.value.html.pipeTo(transformer.writable);
            }).catch((err)=>{
                // An error occurred during piping or preparing the render, abort
                // the transformers writer so we can terminate the stream.
                transformer.writable.abort(err).catch((e)=>{
                    console.error("couldn't abort transformer", e);
                });
            });
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$send$2d$payload$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sendRenderResult"])({
                req,
                res,
                generateEtags: nextConfig.generateEtags,
                poweredByHeader: nextConfig.poweredByHeader,
                result: body,
                // We don't want to cache the response if it has postponed data because
                // the response being sent to the client it's dynamic parts are streamed
                // to the client on the same request.
                cacheControl: {
                    revalidate: 0,
                    expire: undefined
                }
            });
        };
        // TODO: activeSpan code path is for when wrapped by
        // next-server can be removed when this is no longer used
        if (activeSpan) {
            await handleResponse(activeSpan);
        } else {
            return await tracer.withPropagatedContext(req.headers, ()=>tracer.trace(__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["BaseServerSpan"].handleRequest, {
                    spanName: `${method} ${srcPage}`,
                    kind: __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SpanKind"].SERVER,
                    attributes: {
                        'http.method': method,
                        'http.target': req.url
                    }
                }, handleResponse));
        }
    } catch (err) {
        if (!(err instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js__$5b$external$5d$__$28$next$2f$dist$2f$shared$2f$lib$2f$no$2d$fallback$2d$error$2e$external$2e$js$2c$__cjs$29$__["NoFallbackError"])) {
            await routeModule.onRequestError(req, err, {
                routerKind: 'App Router',
                routePath: srcPage,
                routeType: 'render',
                revalidateReason: (0, __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$instrumentation$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getRevalidateReason"])({
                    isStaticGeneration: isSSG,
                    isOnDemandRevalidate
                })
            }, routerServerContext);
        }
        // rethrow so that we can handle serving error page
        throw err;
    }
}
// TODO: omit this from production builds, only test builds should include it
/**
 * Creates a readable stream that emits a PPR boundary sentinel.
 *
 * @returns A readable stream that emits a PPR boundary sentinel.
 */ function createPPRBoundarySentinel() {
    return new ReadableStream({
        start (controller) {
            controller.enqueue(new TextEncoder().encode('<!-- PPR_BOUNDARY_SENTINEL -->'));
            controller.close();
        }
    });
} //# sourceMappingURL=app-page.js.map
}),
"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/build/templates/app-page.js?page=/portfolio/page { GLOBAL_ERROR_MODULE => \"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)\", METADATA_0 => \"[project]/vs_code_workspace/react work/company portfolio/frontend/app/favicon.ico.mjs { IMAGE => \\\"[project]/vs_code_workspace/react work/company portfolio/frontend/app/favicon.ico (static in ecmascript, tag client)\\\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)\", MODULE_1 => \"[project]/vs_code_workspace/react work/company portfolio/frontend/app/layout.jsx [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_2 => \"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_3 => \"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_4 => \"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_5 => \"[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)\", MODULE_6 => \"[project]/vs_code_workspace/react work/company portfolio/frontend/app/portfolio/page.jsx [app-rsc] (ecmascript, Next.js Server Component)\" } [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientPageRoot",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["ClientPageRoot"],
    "ClientSegmentRoot",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["ClientSegmentRoot"],
    "Fragment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["Fragment"],
    "GlobalError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__["default"],
    "HTTPAccessFallbackBoundary",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["HTTPAccessFallbackBoundary"],
    "LayoutRouter",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["LayoutRouter"],
    "Postpone",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["Postpone"],
    "RenderFromTemplateContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RenderFromTemplateContext"],
    "RootLayoutBoundary",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RootLayoutBoundary"],
    "SegmentViewNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["SegmentViewNode"],
    "SegmentViewStateNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["SegmentViewStateNode"],
    "__next_app__",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$portfolio$2f$page__$7b$__GLOBAL_ERROR_MODULE__$3d3e$__$225b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__METADATA_0__$3d3e$__$225b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$layout$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$portfolio$2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["__next_app__"],
    "actionAsyncStorage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["actionAsyncStorage"],
    "captureOwnerStack",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["captureOwnerStack"],
    "collectSegmentData",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["collectSegmentData"],
    "createElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createElement"],
    "createMetadataComponents",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createMetadataComponents"],
    "createPrerenderParamsForClientSegment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createPrerenderParamsForClientSegment"],
    "createPrerenderSearchParamsForClientPage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createPrerenderSearchParamsForClientPage"],
    "createServerParamsForServerSegment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createServerParamsForServerSegment"],
    "createServerSearchParamsForServerPage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createServerSearchParamsForServerPage"],
    "createTemporaryReferenceSet",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createTemporaryReferenceSet"],
    "decodeAction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["decodeAction"],
    "decodeFormState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["decodeFormState"],
    "decodeReply",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["decodeReply"],
    "handler",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$portfolio$2f$page__$7b$__GLOBAL_ERROR_MODULE__$3d3e$__$225b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__METADATA_0__$3d3e$__$225b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$layout$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$portfolio$2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["handler"],
    "patchFetch",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["patchFetch"],
    "preconnect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["preconnect"],
    "preloadFont",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["preloadFont"],
    "preloadStyle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["preloadStyle"],
    "prerender",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["prerender"],
    "renderToReadableStream",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["renderToReadableStream"],
    "routeModule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$portfolio$2f$page__$7b$__GLOBAL_ERROR_MODULE__$3d3e$__$225b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__METADATA_0__$3d3e$__$225b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$layout$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$portfolio$2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["routeModule"],
    "serverHooks",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["serverHooks"],
    "taintObjectReference",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["taintObjectReference"],
    "workAsyncStorage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["workAsyncStorage"],
    "workUnitAsyncStorage",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["workUnitAsyncStorage"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$portfolio$2f$page__$7b$__GLOBAL_ERROR_MODULE__$3d3e$__$225b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__METADATA_0__$3d3e$__$225b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$layout$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$not$2d$found$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$forbidden$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$unauthorized$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$app$2f$portfolio$2f$page$2e$jsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/build/templates/app-page.js?page=/portfolio/page { GLOBAL_ERROR_MODULE => "[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)", METADATA_0 => "[project]/vs_code_workspace/react work/company portfolio/frontend/app/favicon.ico.mjs { IMAGE => \\"[project]/vs_code_workspace/react work/company portfolio/frontend/app/favicon.ico (static in ecmascript, tag client)\\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", MODULE_1 => "[project]/vs_code_workspace/react work/company portfolio/frontend/app/layout.jsx [app-rsc] (ecmascript, Next.js Server Component)", MODULE_2 => "[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/components/builtin/not-found.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_3 => "[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/components/builtin/forbidden.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_4 => "[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/components/builtin/unauthorized.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_5 => "[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)", MODULE_6 => "[project]/vs_code_workspace/react work/company portfolio/frontend/app/portfolio/page.jsx [app-rsc] (ecmascript, Next.js Server Component)" } [app-rsc] (ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$builtin$2f$global$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__Server__Component$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/client/components/builtin/global-error.js [app-rsc] (ecmascript, Next.js Server Component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$vs_code_workspace$2f$react__work$2f$company__portfolio$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/vs_code_workspace/react work/company portfolio/frontend/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility)");
}),
];

//# sourceMappingURL=244fb_28974ccd._.js.map