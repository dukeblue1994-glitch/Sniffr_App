(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/sniffr/src/components/AuthButtons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthButtons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sniffr/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sniffr/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sniffr/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function AuthButtons() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(3);
    if ($[0] !== "9b32c05e9903a022e47764c7ce13eb400d63c8bcd12982578afe42e66c8ab912") {
        for(let $i = 0; $i < 3; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "9b32c05e9903a022e47764c7ce13eb400d63c8bcd12982578afe42e66c8ab912";
    }
    const { data: session } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    let t0;
    if ($[1] !== session) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 p-2",
            children: session ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-gray-500",
                        children: [
                            "Signed in as ",
                            session.user?.email
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sniffr/src/components/AuthButtons.tsx",
                        lineNumber: 18,
                        columnNumber: 68
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: _AuthButtonsButtonOnClick,
                        className: "px-3 py-1 rounded bg-gray-200 text-sm",
                        children: "Sign out"
                    }, void 0, false, {
                        fileName: "[project]/sniffr/src/components/AuthButtons.tsx",
                        lineNumber: 18,
                        columnNumber: 149
                    }, this)
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: _AuthButtonsButtonOnClick2,
                        className: "px-3 py-1 rounded bg-[#2E86AB] text-white text-sm",
                        children: "Sign in with Google"
                    }, void 0, false, {
                        fileName: "[project]/sniffr/src/components/AuthButtons.tsx",
                        lineNumber: 18,
                        columnNumber: 268
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: _AuthButtonsButtonOnClick3,
                        className: "px-3 py-1 rounded bg-black text-white text-sm",
                        children: "Sign in with Apple"
                    }, void 0, false, {
                        fileName: "[project]/sniffr/src/components/AuthButtons.tsx",
                        lineNumber: 18,
                        columnNumber: 403
                    }, this)
                ]
            }, void 0, true)
        }, void 0, false, {
            fileName: "[project]/sniffr/src/components/AuthButtons.tsx",
            lineNumber: 18,
            columnNumber: 10
        }, this);
        $[1] = session;
        $[2] = t0;
    } else {
        t0 = $[2];
    }
    return t0;
}
_s(AuthButtons, "90sCfFLkOu0XWr0Qr7d+mUVbZmM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c = AuthButtons;
function _AuthButtonsButtonOnClick3() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signIn"])("apple");
}
function _AuthButtonsButtonOnClick2() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signIn"])("google");
}
function _AuthButtonsButtonOnClick() {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])();
}
var _c;
__turbopack_context__.k.register(_c, "AuthButtons");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sniffr/src/lib/ai.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "callAI",
    ()=>callAI
]);
async function callAI({ prompt, kind }) {
    const res = await fetch("/api/ai", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            prompt,
            kind
        })
    });
    if (!res.ok) return null;
    const j = await res.json();
    return j.text;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sniffr/src/components/SniffrApp.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SniffrApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sniffr/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sniffr/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sniffr/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/sniffr/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/sniffr/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/sniffr/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/sniffr/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/sniffr/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__ = __turbopack_context__.i("[project]/sniffr/node_modules/lucide-react/dist/esm/icons/shield-check.js [app-client] (ecmascript) <export default as ShieldCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__ = __turbopack_context__.i("[project]/sniffr/node_modules/lucide-react/dist/esm/icons/activity.js [app-client] (ecmascript) <export default as Activity>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/sniffr/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/sniffr/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dog$3e$__ = __turbopack_context__.i("[project]/sniffr/node_modules/lucide-react/dist/esm/icons/dog.js [app-client] (ecmascript) <export default as Dog>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bone$3e$__ = __turbopack_context__.i("[project]/sniffr/node_modules/lucide-react/dist/esm/icons/bone.js [app-client] (ecmascript) <export default as Bone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/sniffr/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/sniffr/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/sniffr/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/sniffr/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/sniffr/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/sniffr/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/sniffr/node_modules/lucide-react/dist/esm/icons/pen.js [app-client] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/sniffr/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/sniffr/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/sniffr/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$src$2f$lib$2f$ai$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sniffr/src/lib/ai.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const WATERMARK = "Built by Candience LLC - KGuess 2026";
const MOCK_DOGS = [
    {
        id: 1,
        name: "Barnaby",
        age: 3,
        breed: "Golden Retriever",
        owner: {
            name: "Kevin",
            age: 28,
            gender: "Male"
        },
        distance: "0.5 miles",
        bio: "I will steal your socks. Kevin just wants a hiking buddy.",
        tags: [
            "Vaccinated",
            "Ball Obsessed",
            "High Energy"
        ],
        image: "https://images.unsplash.com/photo-1633722715463-d30f4f325e24?q=80&w=1000&auto=format&fit=crop",
        energy: 90
    },
    {
        id: 2,
        name: "Luna",
        age: 2,
        breed: "French Bulldog",
        owner: {
            name: "Sarah",
            age: 26,
            gender: "Female"
        },
        distance: "1.2 miles",
        bio: "Small but mighty. Sarah brings the best snacks.",
        tags: [
            "Vaccinated",
            "Couch Potato",
            "Foodie"
        ],
        image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=1000&auto=format&fit=crop",
        energy: 30
    },
    {
        id: 3,
        name: "Cooper",
        age: 5,
        breed: "Australian Shepherd",
        owner: {
            name: "Alex",
            age: 30,
            gender: "Non-binary"
        },
        distance: "2.0 miles",
        bio: "Herding pro. Alex is looking for coffee dates.",
        tags: [
            "Vaccinated",
            "Agility Pro",
            "Hyper"
        ],
        image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1000&auto=format&fit=crop",
        energy: 100
    },
    {
        id: 4,
        name: "Daisy",
        age: 4,
        breed: "Beagle",
        owner: {
            name: "Emily",
            age: 29,
            gender: "Female"
        },
        distance: "0.8 miles",
        bio: "Nose to the ground. Emily loves long walks.",
        tags: [
            "Scent Work",
            "Friendly",
            "Howler"
        ],
        image: "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?q=80&w=1000&auto=format&fit=crop",
        energy: 60
    }
];
const INITIAL_MATCHES = [
    {
        id: 101,
        name: "Rocky",
        breed: "Boxer",
        ownerName: "Mike",
        image: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?q=80&w=200&auto=format&fit=crop",
        lastMessage: "Bark! (Hey!)",
        unread: true
    },
    {
        id: 102,
        name: "Bella",
        breed: "Poodle",
        ownerName: "Jessica",
        image: "https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=200&auto=format&fit=crop",
        lastMessage: "Are you going to the park today?",
        unread: false
    }
];
function SniffrApp() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(63);
    if ($[0] !== "0679c2f258ebe5cf3dca4044e9e52d946b152387666ac17338d4e83a08f8687a") {
        for(let $i = 0; $i < 63; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "0679c2f258ebe5cf3dca4044e9e52d946b152387666ac17338d4e83a08f8687a";
    }
    const [currentView, setCurrentView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("splash");
    const [currentDogIndex, setCurrentDogIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [matches, setMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(INITIAL_MATCHES);
    const [justMatched, setJustMatched] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [activeChat, setActiveChat] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            name: "Buster",
            age: 3,
            breed: "Golden Retriever",
            bio: "I will steal your socks. My human loves hiking and craft beer.",
            tags: [
                "Vaccinated",
                "Ball Obsessed",
                "High Energy"
            ],
            owner: {
                name: "Chris",
                age: 29,
                gender: "Male",
                interestedIn: "Women"
            }
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [myProfile, setMyProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [isGold, setIsGold] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showGoldModal, setShowGoldModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [processingPayment, setProcessingPayment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isGeneratingBio, setIsGeneratingBio] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isGeneratingIcebreaker, setIsGeneratingIcebreaker] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [icebreakerSuggestions, setIcebreakerSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [isPlanningDate, setIsPlanningDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [dateSuggestion, setDateSuggestion] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [chatInputValue, setChatInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t2;
    let t3;
    if ($[3] !== currentView) {
        t2 = ({
            "SniffrApp[useEffect()]": ()=>{
                if (currentView === "splash") {
                    const timer = setTimeout({
                        "SniffrApp[useEffect() > setTimeout()]": ()=>setCurrentView("main")
                    }["SniffrApp[useEffect() > setTimeout()]"], 1500);
                    return ()=>clearTimeout(timer);
                }
            }
        })["SniffrApp[useEffect()]"];
        t3 = [
            currentView
        ];
        $[3] = currentView;
        $[4] = t2;
        $[5] = t3;
    } else {
        t2 = $[4];
        t3 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    if ($[6] !== currentDogIndex) {
        t4 = ({
            "SniffrApp[handleSwipe]": (direction)=>{
                const currentDog = MOCK_DOGS[currentDogIndex];
                if (direction === "right") {
                    const isMatch = Math.random() > 0.3;
                    if (isMatch) {
                        setJustMatched(currentDog);
                        setMatches({
                            "SniffrApp[handleSwipe > setMatches()]": (prev)=>[
                                    ...prev,
                                    {
                                        id: currentDog.id,
                                        name: currentDog.name,
                                        breed: currentDog.breed,
                                        ownerName: currentDog.owner.name,
                                        image: currentDog.image,
                                        lastMessage: "New Match! Say hello.",
                                        unread: true
                                    }
                                ]
                        }["SniffrApp[handleSwipe > setMatches()]"]);
                        setCurrentView("match");
                    }
                }
                if (currentDogIndex < MOCK_DOGS.length - 1) {
                    setCurrentDogIndex(_SniffrAppHandleSwipeSetCurrentDogIndex);
                } else {
                    setCurrentDogIndex(0);
                }
            }
        })["SniffrApp[handleSwipe]"];
        $[6] = currentDogIndex;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const handleSwipe = t4;
    let t5;
    if ($[8] !== currentDogIndex || $[9] !== isGold) {
        t5 = ({
            "SniffrApp[handleRewind]": ()=>{
                if (!isGold) {
                    setShowGoldModal(true);
                    return;
                }
                if (currentDogIndex > 0) {
                    setCurrentDogIndex(_SniffrAppHandleRewindSetCurrentDogIndex);
                }
            }
        })["SniffrApp[handleRewind]"];
        $[8] = currentDogIndex;
        $[9] = isGold;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    const handleRewind = t5;
    let t6;
    if ($[11] !== currentView) {
        t6 = ({
            "SniffrApp[handlePurchase]": ()=>{
                setProcessingPayment(true);
                setTimeout({
                    "SniffrApp[handlePurchase > setTimeout()]": ()=>{
                        setIsGold(true);
                        setProcessingPayment(false);
                        setShowGoldModal(false);
                        if (currentView === "gold") {
                            setCurrentView("profile");
                        }
                    }
                }["SniffrApp[handlePurchase > setTimeout()]"], 2000);
            }
        })["SniffrApp[handlePurchase]"];
        $[11] = currentView;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    const handlePurchase = t6;
    let t7;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = ({
            "SniffrApp[closeMatchOverlay]": ()=>{
                setJustMatched(null);
                setCurrentView("main");
            }
        })["SniffrApp[closeMatchOverlay]"];
        $[13] = t7;
    } else {
        t7 = $[13];
    }
    const closeMatchOverlay = t7;
    let t8;
    if ($[14] !== activeChat) {
        t8 = ({
            "SniffrApp[handleSendMessage]": (text)=>{
                if (!activeChat) {
                    return;
                }
                setActiveChat({
                    "SniffrApp[handleSendMessage > setActiveChat()]": (prev_2)=>({
                            ...prev_2,
                            messages: [
                                ...prev_2.messages,
                                {
                                    sender: "me",
                                    text
                                }
                            ]
                        })
                }["SniffrApp[handleSendMessage > setActiveChat()]"]);
                setChatInputValue("");
                setIcebreakerSuggestions([]);
                setDateSuggestion(null);
            }
        })["SniffrApp[handleSendMessage]"];
        $[14] = activeChat;
        $[15] = t8;
    } else {
        t8 = $[15];
    }
    const handleSendMessage = t8;
    let t9;
    if ($[16] !== myProfile) {
        t9 = ({
            "SniffrApp[handleGenerateBio]": async ()=>{
                setIsGeneratingBio(true);
                const prompt = `Write a bio for ${myProfile.name} (${myProfile.breed}) and owner ${myProfile.owner.name}.`;
                const newBio = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$src$2f$lib$2f$ai$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callAI"])({
                    prompt,
                    kind: "bio"
                });
                if (newBio) {
                    setMyProfile({
                        "SniffrApp[handleGenerateBio > setMyProfile()]": (prev_3)=>({
                                ...prev_3,
                                bio: newBio.trim().replace(/^"|"$/g, "")
                            })
                    }["SniffrApp[handleGenerateBio > setMyProfile()]"]);
                }
                setIsGeneratingBio(false);
            }
        })["SniffrApp[handleGenerateBio]"];
        $[16] = myProfile;
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    const handleGenerateBio = t9;
    let t10;
    if ($[18] !== activeChat || $[19] !== myProfile) {
        t10 = ({
            "SniffrApp[handleGenerateIcebreakers]": async ()=>{
                if (!activeChat) {
                    return;
                }
                setIsGeneratingIcebreaker(true);
                setDateSuggestion(null);
                const prompt_0 = `Generate 3 icebreakers for ${myProfile.name} to ${activeChat.name}. Return pipe-separated.`;
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$src$2f$lib$2f$ai$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callAI"])({
                    prompt: prompt_0,
                    kind: "icebreaker"
                });
                if (result) {
                    const suggestions = result.split("|").map(_SniffrAppHandleGenerateIcebreakersAnonymous).filter(_SniffrAppHandleGenerateIcebreakersAnonymous2);
                    setIcebreakerSuggestions(suggestions.slice(0, 3));
                }
                setIsGeneratingIcebreaker(false);
            }
        })["SniffrApp[handleGenerateIcebreakers]"];
        $[18] = activeChat;
        $[19] = myProfile;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    const handleGenerateIcebreakers = t10;
    let t11;
    if ($[21] !== activeChat || $[22] !== myProfile) {
        t11 = ({
            "SniffrApp[handlePlanDate]": async ()=>{
                if (!activeChat) {
                    return;
                }
                setIsPlanningDate(true);
                setIcebreakerSuggestions([]);
                setDateSuggestion(null);
                const prompt_1 = `Plan a playdate for ${myProfile.name} and ${activeChat.name}.`;
                const result_0 = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$src$2f$lib$2f$ai$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callAI"])({
                    prompt: prompt_1,
                    kind: "playdate"
                });
                if (result_0) {
                    setDateSuggestion(result_0.trim());
                }
                setIsPlanningDate(false);
            }
        })["SniffrApp[handlePlanDate]"];
        $[21] = activeChat;
        $[22] = myProfile;
        $[23] = t11;
    } else {
        t11 = $[23];
    }
    const handlePlanDate = t11;
    const SplashScreen = _SniffrAppSplashScreen;
    let t12;
    if ($[24] !== handlePurchase || $[25] !== processingPayment) {
        t12 = ({
            "SniffrApp[GoldSubscriptionModal]": ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 z-[60] bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center animate-in fade-in slide-in-from-bottom-10 duration-300",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white w-full max-w-sm sm:rounded-3xl rounded-t-3xl p-6 relative overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: {
                                    "SniffrApp[GoldSubscriptionModal > <button>.onClick]": ()=>setShowGoldModal(false)
                                }["SniffrApp[GoldSubscriptionModal > <button>.onClick]"],
                                className: "absolute top-4 right-4 bg-gray-100 p-2 rounded-full text-gray-500 hover:bg-gray-200",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 365,
                                    columnNumber: 165
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                lineNumber: 363,
                                columnNumber: 321
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#FF9F1C]/20 to-transparent pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                lineNumber: 365,
                                columnNumber: 189
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center mb-6 mt-4 relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 bg-gradient-to-tr from-[#FF6B35] to-[#FF9F1C] rounded-full flex items-center justify-center shadow-lg mb-4",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bone$3e$__["Bone"], {
                                            size: 32,
                                            className: "text-white fill-white"
                                        }, void 0, false, {
                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                            lineNumber: 365,
                                            columnNumber: 509
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                        lineNumber: 365,
                                        columnNumber: 375
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl font-black text-gray-900 tracking-tight",
                                        children: "Sniffr Gold"
                                    }, void 0, false, {
                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                        lineNumber: 365,
                                        columnNumber: 567
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-500 text-sm",
                                        children: "Treat your dog to the best life."
                                    }, void 0, false, {
                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                        lineNumber: 365,
                                        columnNumber: 648
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                lineNumber: 365,
                                columnNumber: 312
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4 mb-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-orange-100 p-2 rounded-full text-[#FF6B35]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                    lineNumber: 365,
                                                    columnNumber: 863
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                lineNumber: 365,
                                                columnNumber: 800
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-bold text-gray-800",
                                                        children: "Unlimited Rewinds"
                                                    }, void 0, false, {
                                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                        lineNumber: 365,
                                                        columnNumber: 897
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-500",
                                                        children: "Undo accidental left swipes."
                                                    }, void 0, false, {
                                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                        lineNumber: 365,
                                                        columnNumber: 959
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                lineNumber: 365,
                                                columnNumber: 892
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                        lineNumber: 365,
                                        columnNumber: 759
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-orange-100 p-2 rounded-full text-[#FF6B35]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                    lineNumber: 365,
                                                    columnNumber: 1144
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                lineNumber: 365,
                                                columnNumber: 1081
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-bold text-gray-800",
                                                        children: "5 Super Barks / Week"
                                                    }, void 0, false, {
                                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                        lineNumber: 365,
                                                        columnNumber: 1173
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-500",
                                                        children: "Stand out from the pack."
                                                    }, void 0, false, {
                                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                        lineNumber: 365,
                                                        columnNumber: 1238
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                lineNumber: 365,
                                                columnNumber: 1168
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                        lineNumber: 365,
                                        columnNumber: 1040
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-orange-100 p-2 rounded-full text-[#FF6B35]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                    lineNumber: 365,
                                                    columnNumber: 1419
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                lineNumber: 365,
                                                columnNumber: 1356
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "font-bold text-gray-800",
                                                        children: "See Who Liked You"
                                                    }, void 0, false, {
                                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                        lineNumber: 365,
                                                        columnNumber: 1448
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-500",
                                                        children: "Stop guessing, start playing."
                                                    }, void 0, false, {
                                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                        lineNumber: 365,
                                                        columnNumber: 1510
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                lineNumber: 365,
                                                columnNumber: 1443
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                        lineNumber: 365,
                                        columnNumber: 1315
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                lineNumber: 365,
                                columnNumber: 727
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handlePurchase,
                                disabled: processingPayment,
                                className: "w-full bg-gradient-to-r from-[#FF6B35] to-[#FF9F1C] text-white py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-95 disabled:opacity-70 flex items-center justify-center gap-2",
                                children: processingPayment ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: "Processing..."
                                }, void 0, false) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: "Upgrade Now"
                                }, void 0, false)
                            }, void 0, false, {
                                fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                lineNumber: 365,
                                columnNumber: 1598
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                        lineNumber: 363,
                        columnNumber: 221
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                    lineNumber: 363,
                    columnNumber: 49
                }, this)
        })["SniffrApp[GoldSubscriptionModal]"];
        $[24] = handlePurchase;
        $[25] = processingPayment;
        $[26] = t12;
    } else {
        t12 = $[26];
    }
    const GoldSubscriptionModal = t12;
    let t13;
    if ($[27] !== justMatched) {
        t13 = ({
            "SniffrApp[MatchOverlay]": ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 z-50 bg-black/80 flex flex-col items-center justify-center p-6 animate-in fade-in duration-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-[#FF6B35] font-black text-5xl mb-8 italic tracking-tighter transform -rotate-6 drop-shadow-lg",
                            children: "IT'S A MATCH!"
                        }, void 0, false, {
                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                            lineNumber: 377,
                            columnNumber: 169
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center space-x-4 mb-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-2xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "https://images.unsplash.com/photo-1560743641-691c7705cc48?q=80&w=200&auto=format&fit=crop",
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                        lineNumber: 377,
                                        columnNumber: 459
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 377,
                                    columnNumber: 370
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-24 h-24 rounded-full border-4 border-white overflow-hidden shadow-2xl",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: justMatched?.image,
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                        lineNumber: 377,
                                        columnNumber: 696
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 377,
                                    columnNumber: 607
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                            lineNumber: 377,
                            columnNumber: 304
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-white text-center mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl font-bold",
                                    children: [
                                        "You and ",
                                        justMatched?.name,
                                        "'s human matched!"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 377,
                                    columnNumber: 824
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm opacity-75",
                                    children: "Now go sniff some butts (respectfully)."
                                }, void 0, false, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 377,
                                    columnNumber: 905
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                            lineNumber: 377,
                            columnNumber: 779
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: {
                                "SniffrApp[MatchOverlay > <button>.onClick]": ()=>{
                                    setActiveChat({
                                        id: justMatched.id,
                                        name: justMatched.name,
                                        breed: justMatched.breed,
                                        ownerName: justMatched.owner.name,
                                        image: justMatched.image,
                                        messages: []
                                    });
                                    setJustMatched(null);
                                    setCurrentView("chat");
                                }
                            }["SniffrApp[MatchOverlay > <button>.onClick]"],
                            className: "w-full bg-[#FF6B35] text-white py-4 rounded-full font-bold text-lg mb-4 hover:bg-[#e55a2b] transition-colors flex items-center justify-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 390,
                                    columnNumber: 218
                                }, this),
                                " Send a Bark"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                            lineNumber: 377,
                            columnNumber: 988
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: closeMatchOverlay,
                            className: "w-full bg-transparent border-2 border-white text-white py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors",
                            children: "Keep Sniffing"
                        }, void 0, false, {
                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                            lineNumber: 390,
                            columnNumber: 266
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                    lineNumber: 377,
                    columnNumber: 40
                }, this)
        })["SniffrApp[MatchOverlay]"];
        $[27] = justMatched;
        $[28] = t13;
    } else {
        t13 = $[28];
    }
    const MatchOverlay = t13;
    let t14;
    if ($[29] !== currentDogIndex || $[30] !== handleRewind || $[31] !== handleSwipe || $[32] !== isGold) {
        t14 = ({
            "SniffrApp[MainDeck]": ()=>{
                const dog = MOCK_DOGS[currentDogIndex];
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 relative flex flex-col p-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between items-center mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center text-[#FF6B35]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                            lineNumber: 403,
                                            columnNumber: 173
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-1 font-bold text-sm",
                                            children: "Countryside Park (0.5 mi)"
                                        }, void 0, false, {
                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                            lineNumber: 403,
                                            columnNumber: 193
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 403,
                                    columnNumber: 123
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[#FF6B35]/10 text-[#FF6B35] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 cursor-pointer",
                                    children: [
                                        "Filters ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                            size: 12
                                        }, void 0, false, {
                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                            lineNumber: 403,
                                            columnNumber: 408
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 403,
                                    columnNumber: 272
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                            lineNumber: 403,
                            columnNumber: 67
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 relative mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-[65%] relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: dog.image,
                                                alt: dog.name,
                                                className: "w-full h-full object-cover"
                                            }, void 0, false, {
                                                fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                lineNumber: 403,
                                                columnNumber: 632
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                                            }, void 0, false, {
                                                fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                lineNumber: 403,
                                                columnNumber: 709
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute bottom-4 left-4 text-white",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-end gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                className: "text-4xl font-bold",
                                                                children: dog.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                                lineNumber: 403,
                                                                columnNumber: 898
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-2xl font-medium mb-1 flex items-baseline gap-2",
                                                                children: [
                                                                    "& ",
                                                                    dog.owner.name,
                                                                    " ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-base opacity-80",
                                                                        children: [
                                                                            "(",
                                                                            dog.owner.age,
                                                                            ")"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                                        lineNumber: 403,
                                                                        columnNumber: 1045
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                                lineNumber: 403,
                                                                columnNumber: 948
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                        lineNumber: 403,
                                                        columnNumber: 860
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-1 text-sm opacity-90 mt-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                                size: 16,
                                                                className: "text-[#6BC453]"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                                lineNumber: 403,
                                                                columnNumber: 1186
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-semibold text-[#6BC453]",
                                                                children: "Verified Vax"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                                lineNumber: 403,
                                                                columnNumber: 1238
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "mx-2",
                                                                children: "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                                lineNumber: 403,
                                                                columnNumber: 1304
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: dog.breed
                                                            }, void 0, false, {
                                                                fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                                lineNumber: 403,
                                                                columnNumber: 1335
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                        lineNumber: 403,
                                                        columnNumber: 1121
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                lineNumber: 403,
                                                columnNumber: 807
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                        lineNumber: 403,
                                        columnNumber: 598
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-5 flex-1 flex flex-col justify-between bg-[#F7F5F2]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-2 mb-3",
                                                        children: dog.tags.map(_SniffrAppMainDeckDogTagsMap)
                                                    }, void 0, false, {
                                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                        lineNumber: 403,
                                                        columnNumber: 1453
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-600 text-sm leading-relaxed line-clamp-2",
                                                        children: dog.bio
                                                    }, void 0, false, {
                                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                        lineNumber: 403,
                                                        columnNumber: 1546
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                lineNumber: 403,
                                                columnNumber: 1448
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex justify-between text-xs text-gray-400 font-bold uppercase mb-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Couch Potato"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                                lineNumber: 403,
                                                                columnNumber: 1738
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: "Zoomies"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                                lineNumber: 403,
                                                                columnNumber: 1763
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                        lineNumber: 403,
                                                        columnNumber: 1653
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "h-2 bg-gray-200 rounded-full overflow-hidden",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "h-full bg-[#FF6B35] rounded-full",
                                                            style: {
                                                                width: `${dog.energy}%`
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                            lineNumber: 403,
                                                            columnNumber: 1851
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                        lineNumber: 403,
                                                        columnNumber: 1789
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                lineNumber: 403,
                                                columnNumber: 1631
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                        lineNumber: 403,
                                        columnNumber: 1377
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                lineNumber: 403,
                                columnNumber: 480
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                            lineNumber: 403,
                            columnNumber: 442
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-20 flex items-center justify-center gap-6 px-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleRewind,
                                    className: `w-12 h-12 rounded-full shadow flex items-center justify-center transition-transform ${isGold ? "bg-white text-yellow-500 hover:scale-110" : "bg-gray-100 text-gray-400"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                        lineNumber: 405,
                                        columnNumber: 336
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 405,
                                    columnNumber: 122
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: {
                                        "SniffrApp[MainDeck > <button>.onClick]": ()=>handleSwipe("left")
                                    }["SniffrApp[MainDeck > <button>.onClick]"],
                                    className: "w-16 h-16 bg-white rounded-full shadow-lg text-gray-400 flex items-center justify-center hover:bg-gray-50 hover:text-red-500 transition-all border border-gray-100",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 32,
                                        strokeWidth: 3
                                    }, void 0, false, {
                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                        lineNumber: 407,
                                        columnNumber: 233
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 405,
                                    columnNumber: 368
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: {
                                        "SniffrApp[MainDeck > <button>.onClick]": ()=>{
                                            if (!isGold) {
                                                setShowGoldModal(true);
                                            }
                                        }
                                    }["SniffrApp[MainDeck > <button>.onClick]"],
                                    className: "w-12 h-12 bg-white rounded-full shadow text-[#2E86AB] flex items-center justify-center hover:scale-110 transition-transform",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                        size: 20,
                                        fill: isGold ? "#FFD700" : "none",
                                        className: isGold ? "text-[#FFD700]" : "text-[#2E86AB]"
                                    }, void 0, false, {
                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                        lineNumber: 413,
                                        columnNumber: 194
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 407,
                                    columnNumber: 273
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: {
                                        "SniffrApp[MainDeck > <button>.onClick]": ()=>handleSwipe("right")
                                    }["SniffrApp[MainDeck > <button>.onClick]"],
                                    className: "w-16 h-16 bg-[#FF6B35] rounded-full shadow-lg shadow-orange-200 text-white flex items-center justify-center hover:bg-[#e55a2b] transition-all hover:scale-105",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                        size: 32,
                                        fill: "white"
                                    }, void 0, false, {
                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                        lineNumber: 415,
                                        columnNumber: 228
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 413,
                                    columnNumber: 313
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                            lineNumber: 405,
                            columnNumber: 56
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                    lineNumber: 403,
                    columnNumber: 16
                }, this);
            }
        })["SniffrApp[MainDeck]"];
        $[29] = currentDogIndex;
        $[30] = handleRewind;
        $[31] = handleSwipe;
        $[32] = isGold;
        $[33] = t14;
    } else {
        t14 = $[33];
    }
    const MainDeck = t14;
    let t15;
    if ($[34] !== isGold || $[35] !== matches) {
        t15 = ({
            "SniffrApp[ChatList]": ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 bg-[#F7F5F2] flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 bg-white shadow-sm z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-[#FF6B35] mb-4",
                                    children: "New Pack Members"
                                }, void 0, false, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 430,
                                    columnNumber: 132
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 overflow-x-auto pb-2 scrollbar-hide",
                                    children: [
                                        matches.filter(_SniffrAppChatListMatchesFilter).map(_SniffrAppChatListAnonymous),
                                        !isGold && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: {
                                                "SniffrApp[ChatList > <div>.onClick]": ()=>setShowGoldModal(true)
                                            }["SniffrApp[ChatList > <div>.onClick]"],
                                            className: "flex flex-col items-center flex-shrink-0 w-20 cursor-pointer",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-16 h-16 rounded-full border-2 border-yellow-400 p-0.5 overflow-hidden relative",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?q=80&w=200",
                                                            className: "w-full h-full rounded-full object-cover blur-sm"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                            lineNumber: 432,
                                                            columnNumber: 226
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 bg-black/30 flex items-center justify-center",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                                size: 20,
                                                                className: "text-white"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                                lineNumber: 432,
                                                                columnNumber: 450
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                            lineNumber: 432,
                                                            columnNumber: 371
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                    lineNumber: 432,
                                                    columnNumber: 128
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-bold mt-1 text-yellow-600",
                                                    children: "See Who..."
                                                }, void 0, false, {
                                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                    lineNumber: 432,
                                                    columnNumber: 503
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                            lineNumber: 430,
                                            columnNumber: 366
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 430,
                                    columnNumber: 208
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                            lineNumber: 430,
                            columnNumber: 87
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-sm font-bold text-gray-400 uppercase tracking-wider mb-2",
                                    children: "Messages"
                                }, void 0, false, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 432,
                                    columnNumber: 640
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-2",
                                    children: matches.map({
                                        "SniffrApp[ChatList > matches.map()]": (match_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: {
                                                    "SniffrApp[ChatList > matches.map() > <div>.onClick]": ()=>{
                                                        setActiveChat({
                                                            ...match_0,
                                                            messages: [
                                                                {
                                                                    sender: "them",
                                                                    text: match_0.lastMessage
                                                                }
                                                            ]
                                                        });
                                                        setCurrentView("activeChat");
                                                        setIcebreakerSuggestions([]);
                                                        setDateSuggestion(null);
                                                        setChatInputValue("");
                                                    }
                                                }["SniffrApp[ChatList > matches.map() > <div>.onClick]"],
                                                className: "bg-white p-4 rounded-xl shadow-sm flex items-center gap-4 cursor-pointer active:scale-98 transition-transform",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: match_0.image,
                                                        className: "w-14 h-14 rounded-full object-cover bg-gray-200"
                                                    }, void 0, false, {
                                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                        lineNumber: 447,
                                                        columnNumber: 195
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex justify-between items-baseline",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                        className: "font-bold text-gray-800",
                                                                        children: [
                                                                            match_0.name,
                                                                            " & ",
                                                                            match_0.ownerName
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                                        lineNumber: 447,
                                                                        columnNumber: 359
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xs text-gray-400",
                                                                        children: "2m ago"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                                        lineNumber: 447,
                                                                        columnNumber: 444
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                                lineNumber: 447,
                                                                columnNumber: 306
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: `text-sm truncate ${match_0.unread ? "font-semibold text-gray-800" : "text-gray-500"}`,
                                                                children: match_0.lastMessage
                                                            }, void 0, false, {
                                                                fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                                lineNumber: 447,
                                                                columnNumber: 503
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                        lineNumber: 447,
                                                        columnNumber: 282
                                                    }, this)
                                                ]
                                            }, match_0.id, true, {
                                                fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                lineNumber: 433,
                                                columnNumber: 65
                                            }, this)
                                    }["SniffrApp[ChatList > matches.map()]"])
                                }, void 0, false, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 432,
                                    columnNumber: 731
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                            lineNumber: 432,
                            columnNumber: 596
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                    lineNumber: 430,
                    columnNumber: 36
                }, this)
        })["SniffrApp[ChatList]"];
        $[34] = isGold;
        $[35] = matches;
        $[36] = t15;
    } else {
        t15 = $[36];
    }
    const ChatList = t15;
    let t16;
    if ($[37] !== activeChat || $[38] !== chatInputValue || $[39] !== dateSuggestion || $[40] !== handleGenerateIcebreakers || $[41] !== handlePlanDate || $[42] !== handleSendMessage || $[43] !== icebreakerSuggestions || $[44] !== isGeneratingIcebreaker || $[45] !== isPlanningDate) {
        t16 = ({
            "SniffrApp[ActiveChatView]": ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 flex flex-col bg-[#F7F5F2]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white p-4 flex items-center shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: {
                                        "SniffrApp[ActiveChatView > <button>.onClick]": ()=>setCurrentView("chat")
                                    }["SniffrApp[ActiveChatView > <button>.onClick]"],
                                    className: "mr-4 text-gray-500",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                        size: 28
                                    }, void 0, false, {
                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                        lineNumber: 462,
                                        columnNumber: 93
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 460,
                                    columnNumber: 151
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 rounded-full overflow-hidden mr-3",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: activeChat.image,
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                        lineNumber: 462,
                                        columnNumber: 188
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 462,
                                    columnNumber: 127
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-gray-800",
                                            children: [
                                                activeChat.name,
                                                " & ",
                                                activeChat.ownerName
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                            lineNumber: 462,
                                            columnNumber: 268
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-[#6BC453] flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-2 h-2 bg-[#6BC453] rounded-full animate-pulse"
                                                }, void 0, false, {
                                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                    lineNumber: 462,
                                                    columnNumber: 424
                                                }, this),
                                                " ",
                                                "Online"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                            lineNumber: 462,
                                            columnNumber: 359
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 462,
                                    columnNumber: 263
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                            lineNumber: 460,
                            columnNumber: 93
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 p-4 overflow-y-auto space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-[#2E86AB]/10 p-3 rounded-lg text-[#2E86AB] text-xs text-center mx-4 mb-4",
                                    children: [
                                        "🛡️ ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Safety Tip:"
                                        }, void 0, false, {
                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                            lineNumber: 462,
                                            columnNumber: 672
                                        }, this),
                                        " Meet in a public, fenced area first. Keep leashes loose!"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 462,
                                    columnNumber: 575
                                }, this),
                                activeChat.messages.map(_SniffrAppActiveChatViewActiveChatMessagesMap),
                                icebreakerSuggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-2 mt-4 animate-in fade-in slide-in-from-bottom-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1 text-xs text-[#FF6B35] font-bold uppercase tracking-wider mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bone$3e$__["Bone"], {
                                                    size: 12,
                                                    className: "fill-[#FF6B35]"
                                                }, void 0, false, {
                                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                    lineNumber: 462,
                                                    columnNumber: 1060
                                                }, this),
                                                " Icebreaker Fetch 🦴"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                            lineNumber: 462,
                                            columnNumber: 956
                                        }, this),
                                        icebreakerSuggestions.map({
                                            "SniffrApp[ActiveChatView > icebreakerSuggestions.map()]": (suggestion, idx_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: {
                                                        "SniffrApp[ActiveChatView > icebreakerSuggestions.map() > <button>.onClick]": ()=>handleSendMessage(suggestion)
                                                    }["SniffrApp[ActiveChatView > icebreakerSuggestions.map() > <button>.onClick]"],
                                                    className: "bg-gradient-to-r from-orange-50 to-white border border-orange-100 p-3 rounded-xl text-sm text-left text-gray-700 hover:border-[#FF6B35] transition-colors shadow-sm",
                                                    children: [
                                                        '"',
                                                        suggestion,
                                                        '"'
                                                    ]
                                                }, idx_0, true, {
                                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                    lineNumber: 463,
                                                    columnNumber: 97
                                                }, this)
                                        }["SniffrApp[ActiveChatView > icebreakerSuggestions.map()]"])
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 462,
                                    columnNumber: 872
                                }, this),
                                dateSuggestion && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-2 mt-4 animate-in fade-in slide-in-from-bottom-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1 text-xs text-[#2E86AB] font-bold uppercase tracking-wider mb-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                    size: 12
                                                }, void 0, false, {
                                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                    lineNumber: 466,
                                                    columnNumber: 289
                                                }, this),
                                                " Tail-Wagging Date Idea"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                            lineNumber: 466,
                                            columnNumber: 185
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gradient-to-r from-blue-50 to-white border border-blue-100 p-3 rounded-xl text-sm text-gray-700 shadow-sm relative",
                                            children: [
                                                '"',
                                                dateSuggestion,
                                                '"',
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: {
                                                        "SniffrApp[ActiveChatView > <button>.onClick]": ()=>handleSendMessage(dateSuggestion)
                                                    }["SniffrApp[ActiveChatView > <button>.onClick]"],
                                                    className: "absolute bottom-2 right-2 text-[10px] font-bold text-[#2E86AB] bg-white px-2 py-1 rounded-full border border-blue-100 shadow-sm",
                                                    children: "Send to Match"
                                                }, void 0, false, {
                                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                    lineNumber: 466,
                                                    columnNumber: 493
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                            lineNumber: 466,
                                            columnNumber: 340
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 466,
                                    columnNumber: 101
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                            lineNumber: 462,
                            columnNumber: 521
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 bg-white border-t border-gray-100 flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleGenerateIcebreakers,
                                    disabled: isGeneratingIcebreaker,
                                    className: "p-3 bg-gradient-to-tr from-[#FF6B35] to-[#FF9F1C] rounded-full text-white shadow-md disabled:opacity-50 hover:scale-105 transition-transform",
                                    title: "Fetch Icebreakers",
                                    children: isGeneratingIcebreaker ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        size: 18,
                                        className: "animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                        lineNumber: 468,
                                        columnNumber: 609
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bone$3e$__["Bone"], {
                                        size: 18,
                                        className: "fill-white"
                                    }, void 0, false, {
                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                        lineNumber: 468,
                                        columnNumber: 660
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 468,
                                    columnNumber: 326
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handlePlanDate,
                                    disabled: isPlanningDate,
                                    className: "p-3 bg-white border border-gray-200 rounded-full text-[#2E86AB] shadow-sm disabled:opacity-50 hover:scale-105 transition-transform hover:border-[#2E86AB]",
                                    title: "Plan a Playdate",
                                    children: isPlanningDate ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                        size: 18,
                                        className: "animate-spin text-gray-400"
                                    }, void 0, false, {
                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                        lineNumber: 468,
                                        columnNumber: 978
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                        lineNumber: 468,
                                        columnNumber: 1043
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 468,
                                    columnNumber: 711
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    placeholder: "Type a bark...",
                                    value: chatInputValue,
                                    onChange: {
                                        "SniffrApp[ActiveChatView > <input>.onChange]": (e)=>setChatInputValue(e.target.value)
                                    }["SniffrApp[ActiveChatView > <input>.onChange]"],
                                    className: "flex-1 bg-gray-100 rounded-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
                                }, void 0, false, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 468,
                                    columnNumber: 1075
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: {
                                        "SniffrApp[ActiveChatView > <button>.onClick]": ()=>chatInputValue.trim() && handleSendMessage(chatInputValue)
                                    }["SniffrApp[ActiveChatView > <button>.onClick]"],
                                    className: "bg-[#2E86AB] p-3 rounded-full text-white",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                        lineNumber: 472,
                                        columnNumber: 115
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 470,
                                    columnNumber: 179
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                            lineNumber: 468,
                            columnNumber: 247
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                    lineNumber: 460,
                    columnNumber: 42
                }, this)
        })["SniffrApp[ActiveChatView]"];
        $[37] = activeChat;
        $[38] = chatInputValue;
        $[39] = dateSuggestion;
        $[40] = handleGenerateIcebreakers;
        $[41] = handlePlanDate;
        $[42] = handleSendMessage;
        $[43] = icebreakerSuggestions;
        $[44] = isGeneratingIcebreaker;
        $[45] = isPlanningDate;
        $[46] = t16;
    } else {
        t16 = $[46];
    }
    const ActiveChatView = t16;
    let t17;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = ({
            "SniffrApp[SettingsView]": ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 bg-white flex flex-col",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 border-b border-gray-100 flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: {
                                        "SniffrApp[SettingsView > <button>.onClick]": ()=>setCurrentView("profile")
                                    }["SniffrApp[SettingsView > <button>.onClick]"],
                                    className: "mr-4 text-gray-500",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                        size: 28
                                    }, void 0, false, {
                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                        lineNumber: 493,
                                        columnNumber: 91
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 491,
                                    columnNumber: 151
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-gray-800",
                                    children: "Settings"
                                }, void 0, false, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 493,
                                    columnNumber: 125
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                            lineNumber: 491,
                            columnNumber: 87
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 space-y-6 overflow-y-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-2",
                                            children: "Account"
                                        }, void 0, false, {
                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                            lineNumber: 493,
                                            columnNumber: 248
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: {
                                                        "SniffrApp[SettingsView > <button>.onClick]": ()=>setIsGold(true)
                                                    }["SniffrApp[SettingsView > <button>.onClick]"],
                                                    className: "w-full flex justify-between items-center p-3 bg-gray-50 rounded-lg text-left",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-medium",
                                                            children: "Restore Purchases"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                            lineNumber: 495,
                                                            columnNumber: 153
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                                            size: 16,
                                                            className: "text-gray-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                            lineNumber: 495,
                                                            columnNumber: 215
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                    lineNumber: 493,
                                                    columnNumber: 365
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full flex justify-between items-center p-3 bg-gray-50 rounded-lg text-left",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-medium",
                                                            children: "Notifications"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                            lineNumber: 495,
                                                            columnNumber: 367
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-10 h-6 bg-[#6BC453] rounded-full relative",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute right-1 top-1 w-4 h-4 bg-white rounded-full"
                                                            }, void 0, false, {
                                                                fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                                lineNumber: 495,
                                                                columnNumber: 486
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                            lineNumber: 495,
                                                            columnNumber: 425
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                    lineNumber: 495,
                                                    columnNumber: 273
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                            lineNumber: 493,
                                            columnNumber: 338
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 493,
                                    columnNumber: 239
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-2",
                                            children: "Legal & Compliance"
                                        }, void 0, false, {
                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                            lineNumber: 495,
                                            columnNumber: 595
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center p-3 bg-gray-50 rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-medium",
                                                            children: "Privacy Policy"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                            lineNumber: 495,
                                                            columnNumber: 804
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                            size: 16,
                                                            className: "text-gray-400 rotate-180"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                            lineNumber: 495,
                                                            columnNumber: 863
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                    lineNumber: 495,
                                                    columnNumber: 727
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center p-3 bg-gray-50 rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-medium",
                                                            children: "Terms of Service"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                            lineNumber: 495,
                                                            columnNumber: 1008
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                            size: 16,
                                                            className: "text-gray-400 rotate-180"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                            lineNumber: 495,
                                                            columnNumber: 1069
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                    lineNumber: 495,
                                                    columnNumber: 931
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center p-3 bg-gray-50 rounded-lg",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-medium",
                                                            children: "Open Source Licenses"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                            lineNumber: 495,
                                                            columnNumber: 1214
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                                            size: 16,
                                                            className: "text-gray-400 rotate-180"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                            lineNumber: 495,
                                                            columnNumber: 1279
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                    lineNumber: 495,
                                                    columnNumber: 1137
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                            lineNumber: 495,
                                            columnNumber: 700
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 495,
                                    columnNumber: 586
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xs font-bold text-gray-400 uppercase tracking-wider mb-2",
                                            children: "Danger Zone"
                                        }, void 0, false, {
                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                            lineNumber: 495,
                                            columnNumber: 1372
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "w-full p-3 border border-red-200 text-red-500 rounded-lg text-sm font-bold bg-red-50",
                                            children: "Delete Account"
                                        }, void 0, false, {
                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                            lineNumber: 495,
                                            columnNumber: 1466
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-gray-400 mt-2",
                                            children: "This will permanently remove your data in accordance with GDPR/CCPA regulations."
                                        }, void 0, false, {
                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                            lineNumber: 495,
                                            columnNumber: 1594
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 495,
                                    columnNumber: 1363
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "pt-8 flex flex-col items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-bold text-gray-300 mb-1",
                                            children: WATERMARK
                                        }, void 0, false, {
                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                            lineNumber: 495,
                                            columnNumber: 1783
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[10px] text-gray-300",
                                            children: "Made with ❤️ in React"
                                        }, void 0, false, {
                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                            lineNumber: 495,
                                            columnNumber: 1850
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 495,
                                    columnNumber: 1734
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                            lineNumber: 493,
                            columnNumber: 192
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                    lineNumber: 491,
                    columnNumber: 40
                }, this)
        })["SniffrApp[SettingsView]"];
        $[47] = t17;
    } else {
        t17 = $[47];
    }
    const SettingsView = t17;
    let t18;
    if ($[48] !== handleGenerateBio || $[49] !== isGeneratingBio || $[50] !== isGold || $[51] !== myProfile) {
        t18 = ({
            "SniffrApp[Profile]": ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 bg-[#F7F5F2] overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative h-64",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "https://images.unsplash.com/photo-1560743641-691c7705cc48?q=80&w=1000&auto=format&fit=crop",
                                    className: "w-full h-full object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 505,
                                    columnNumber: 119
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: {
                                        "SniffrApp[Profile > <button>.onClick]": ()=>setCurrentView("settings")
                                    }["SniffrApp[Profile > <button>.onClick]"],
                                    className: "absolute top-4 right-4 bg-black/30 backdrop-blur-md p-2 rounded-full text-white hover:bg-black/50 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                        size: 20
                                    }, void 0, false, {
                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                        lineNumber: 507,
                                        columnNumber: 183
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 505,
                                    columnNumber: 262
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                            lineNumber: 505,
                            columnNumber: 88
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-start mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-3xl font-bold text-gray-800 flex items-center gap-2",
                                                    children: [
                                                        myProfile.name,
                                                        ", ",
                                                        myProfile.age,
                                                        " ",
                                                        isGold && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                            size: 20,
                                                            className: "text-yellow-400 fill-yellow-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                            lineNumber: 507,
                                                            columnNumber: 449
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                    lineNumber: 507,
                                                    columnNumber: 327
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-500",
                                                    children: [
                                                        myProfile.breed,
                                                        " • Male"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                    lineNumber: 507,
                                                    columnNumber: 517
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                            lineNumber: 507,
                                            columnNumber: 296
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "text-[#FF6B35] font-semibold text-sm flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                    lineNumber: 507,
                                                    columnNumber: 661
                                                }, this),
                                                " Edit"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                            lineNumber: 507,
                                            columnNumber: 580
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 507,
                                    columnNumber: 241
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white p-4 rounded-xl shadow-sm mb-6 border border-gray-100",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-gray-700 mb-3 flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                                                    size: 18,
                                                    className: "text-[#2E86AB]"
                                                }, void 0, false, {
                                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                    lineNumber: 507,
                                                    columnNumber: 848
                                                }, this),
                                                " The Human Behind the Leash"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                            lineNumber: 507,
                                            columnNumber: 779
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center pb-2 border-b border-gray-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-gray-500",
                                                            children: "I am a..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                            lineNumber: 507,
                                                            columnNumber: 1033
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-1",
                                                            children: [
                                                                "Male",
                                                                "Female",
                                                                "NB"
                                                            ].map({
                                                                "SniffrApp[Profile > (anonymous)()]": (g)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: {
                                                                            "SniffrApp[Profile > (anonymous)() > <button>.onClick]": ()=>setMyProfile({
                                                                                    "SniffrApp[Profile > (anonymous)() > <button>.onClick > setMyProfile()]": (prev_4)=>({
                                                                                            ...prev_4,
                                                                                            owner: {
                                                                                                ...prev_4.owner,
                                                                                                gender: g
                                                                                            }
                                                                                        })
                                                                                }["SniffrApp[Profile > (anonymous)() > <button>.onClick > setMyProfile()]"])
                                                                        }["SniffrApp[Profile > (anonymous)() > <button>.onClick]"],
                                                                        className: `px-3 py-1 rounded-full text-xs font-bold transition-all ${myProfile.owner.gender === g ? "bg-[#2E86AB] text-white" : "bg-gray-100 text-gray-500"}`,
                                                                        children: g
                                                                    }, g, false, {
                                                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                                        lineNumber: 508,
                                                                        columnNumber: 64
                                                                    }, this)
                                                            }["SniffrApp[Profile > (anonymous)()]"])
                                                        }, void 0, false, {
                                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                            lineNumber: 507,
                                                            columnNumber: 1089
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                    lineNumber: 507,
                                                    columnNumber: 953
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-gray-500",
                                                            children: "Interested in..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                            lineNumber: 519,
                                                            columnNumber: 123
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-1",
                                                            children: [
                                                                "Men",
                                                                "Women",
                                                                "Everyone"
                                                            ].map({
                                                                "SniffrApp[Profile > (anonymous)()]": (i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        onClick: {
                                                                            "SniffrApp[Profile > (anonymous)() > <button>.onClick]": ()=>setMyProfile({
                                                                                    "SniffrApp[Profile > (anonymous)() > <button>.onClick > setMyProfile()]": (prev_5)=>({
                                                                                            ...prev_5,
                                                                                            owner: {
                                                                                                ...prev_5.owner,
                                                                                                interestedIn: i
                                                                                            }
                                                                                        })
                                                                                }["SniffrApp[Profile > (anonymous)() > <button>.onClick > setMyProfile()]"])
                                                                        }["SniffrApp[Profile > (anonymous)() > <button>.onClick]"],
                                                                        className: `px-3 py-1 rounded-full text-xs font-bold transition-all ${myProfile.owner.interestedIn === i ? "bg-[#FF6B35] text-white" : "bg-gray-100 text-gray-500"}`,
                                                                        children: i
                                                                    }, i, false, {
                                                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                                        lineNumber: 520,
                                                                        columnNumber: 64
                                                                    }, this)
                                                            }["SniffrApp[Profile > (anonymous)()]"])
                                                        }, void 0, false, {
                                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                            lineNumber: 519,
                                                            columnNumber: 186
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                    lineNumber: 519,
                                                    columnNumber: 72
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                            lineNumber: 507,
                                            columnNumber: 926
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 507,
                                    columnNumber: 700
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 mb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-xs font-bold text-gray-400 uppercase tracking-wider",
                                                    children: "Bio"
                                                }, void 0, false, {
                                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                    lineNumber: 531,
                                                    columnNumber: 147
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-[10px] text-[#FF6B35]/80 italic font-medium mt-0.5",
                                                    children: "Showcase the Purebread in you 🦴"
                                                }, void 0, false, {
                                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                    lineNumber: 531,
                                                    columnNumber: 234
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                            lineNumber: 531,
                                            columnNumber: 111
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white p-3 rounded-xl border border-gray-100 shadow-sm relative group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    value: myProfile.bio,
                                                    onChange: {
                                                        "SniffrApp[Profile > <textarea>.onChange]": (e_0)=>setMyProfile({
                                                                ...myProfile,
                                                                bio: e_0.target.value
                                                            })
                                                    }["SniffrApp[Profile > <textarea>.onChange]"],
                                                    className: "w-full text-sm text-gray-600 bg-transparent resize-none focus:outline-none",
                                                    rows: 3
                                                }, void 0, false, {
                                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                    lineNumber: 531,
                                                    columnNumber: 442
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-end mt-2 pt-2 border-t border-gray-50",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: handleGenerateBio,
                                                        disabled: isGeneratingBio,
                                                        className: "text-xs font-bold text-[#FF6B35] flex items-center gap-1 hover:text-[#e55a2b] disabled:opacity-50 bg-orange-50 px-3 py-1.5 rounded-full",
                                                        children: isGeneratingBio ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                                                    size: 12,
                                                                    className: "animate-spin"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                                    lineNumber: 536,
                                                                    columnNumber: 460
                                                                }, this),
                                                                " Fetching..."
                                                            ]
                                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                                    size: 12
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                                    lineNumber: 536,
                                                                    columnNumber: 528
                                                                }, this),
                                                                " Fetch Bio Idea"
                                                            ]
                                                        }, void 0, true)
                                                    }, void 0, false, {
                                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                        lineNumber: 536,
                                                        columnNumber: 228
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                    lineNumber: 536,
                                                    columnNumber: 160
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                            lineNumber: 531,
                                            columnNumber: 353
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 531,
                                    columnNumber: 84
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: {
                                                "SniffrApp[Profile > <div>.onClick]": ()=>{
                                                    if (!isGold) {
                                                        setShowGoldModal(true);
                                                    }
                                                }
                                            }["SniffrApp[Profile > <div>.onClick]"],
                                            className: `p-5 rounded-xl shadow-sm border transition-all cursor-pointer ${isGold ? "bg-gradient-to-r from-gray-900 to-gray-800 text-white border-gray-800" : "bg-white border-white"}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-center mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: `font-bold flex items-center gap-2 ${isGold ? "text-white" : "text-gray-800"}`,
                                                            children: isGold ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                                        size: 18,
                                                                        fill: "white"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                                        lineNumber: 542,
                                                                        columnNumber: 403
                                                                    }, this),
                                                                    " Sniffr Gold Member"
                                                                ]
                                                            }, void 0, true) : "Sniffr Free Plan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                            lineNumber: 542,
                                                            columnNumber: 296
                                                        }, this),
                                                        isGold && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "bg-white/20 text-[10px] px-2 py-1 rounded",
                                                            children: "Active"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                            lineNumber: 542,
                                                            columnNumber: 494
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                    lineNumber: 542,
                                                    columnNumber: 240
                                                }, this),
                                                !isGold ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm text-gray-500 mb-3",
                                                            children: "Upgrade to see who likes you and get unlimited swipes."
                                                        }, void 0, false, {
                                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                            lineNumber: 542,
                                                            columnNumber: 587
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "w-full bg-gradient-to-r from-[#FF6B35] to-[#FF9F1C] text-white py-2 rounded-lg text-sm font-bold shadow-md",
                                                            children: "Upgrade to Gold"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                            lineNumber: 542,
                                                            columnNumber: 687
                                                        }, this)
                                                    ]
                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-300",
                                                    children: "Your next billing date is Feb 28, 2026. Thanks for supporting us!"
                                                }, void 0, false, {
                                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                    lineNumber: 542,
                                                    columnNumber: 844
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                            lineNumber: 536,
                                            columnNumber: 623
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white p-4 rounded-xl shadow-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-gray-700 mb-3 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheck$3e$__["ShieldCheck"], {
                                                            size: 18,
                                                            className: "text-[#2E86AB]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                            lineNumber: 542,
                                                            columnNumber: 1077
                                                        }, this),
                                                        " Health Status"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                    lineNumber: 542,
                                                    columnNumber: 1008
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "bg-[#6BC453]/10 text-[#6BC453] px-3 py-1 rounded-full text-xs font-bold border border-[#6BC453]/20 flex items-center gap-1",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                    size: 12
                                                                }, void 0, false, {
                                                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                                    lineNumber: 542,
                                                                    columnNumber: 1317
                                                                }, this),
                                                                " Verified Vaccinated"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                            lineNumber: 542,
                                                            columnNumber: 1176
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-bold border border-gray-200",
                                                            children: "Neutered"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                            lineNumber: 542,
                                                            columnNumber: 1363
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                    lineNumber: 542,
                                                    columnNumber: 1148
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                            lineNumber: 542,
                                            columnNumber: 957
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white p-4 rounded-xl shadow-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-gray-700 mb-3 flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$activity$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Activity$3e$__["Activity"], {
                                                            size: 18,
                                                            className: "text-[#FF6B35]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                            lineNumber: 542,
                                                            columnNumber: 1618
                                                        }, this),
                                                        " Energy Level"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                    lineNumber: 542,
                                                    columnNumber: 1549
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "range",
                                                    min: "0",
                                                    max: "100",
                                                    defaultValue: "80",
                                                    className: "w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FF6B35]",
                                                    disabled: true
                                                }, void 0, false, {
                                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                    lineNumber: 542,
                                                    columnNumber: 1685
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between text-xs text-gray-400 mt-2 font-bold uppercase",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Chill"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                            lineNumber: 542,
                                                            columnNumber: 1938
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Hyper"
                                                        }, void 0, false, {
                                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                            lineNumber: 542,
                                                            columnNumber: 1956
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                                    lineNumber: 542,
                                                    columnNumber: 1853
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                            lineNumber: 542,
                                            columnNumber: 1498
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 536,
                                    columnNumber: 596
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                            lineNumber: 507,
                            columnNumber: 220
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                    lineNumber: 505,
                    columnNumber: 35
                }, this)
        })["SniffrApp[Profile]"];
        $[48] = handleGenerateBio;
        $[49] = isGeneratingBio;
        $[50] = isGold;
        $[51] = myProfile;
        $[52] = t18;
    } else {
        t18 = $[52];
    }
    const Profile = t18;
    let t19;
    if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-50"
        }, void 0, false, {
            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
            lineNumber: 555,
            columnNumber: 11
        }, this);
        $[53] = t19;
    } else {
        t19 = $[53];
    }
    let t20;
    if ($[54] !== ActiveChatView || $[55] !== ChatList || $[56] !== GoldSubscriptionModal || $[57] !== MainDeck || $[58] !== MatchOverlay || $[59] !== Profile || $[60] !== currentView || $[61] !== showGoldModal) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-md mx-auto h-[800px] bg-white shadow-2xl overflow-hidden flex flex-col font-sans border-8 border-gray-900 rounded-[3rem] relative",
            children: [
                t19,
                currentView === "splash" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SplashScreen, {}, void 0, false, {
                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                    lineNumber: 562,
                    columnNumber: 204
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        showGoldModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GoldSubscriptionModal, {}, void 0, false, {
                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                            lineNumber: 562,
                            columnNumber: 243
                        }, this),
                        currentView === "match" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MatchOverlay, {}, void 0, false, {
                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                            lineNumber: 562,
                            columnNumber: 297
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 flex overflow-hidden pt-8",
                            children: [
                                currentView === "main" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MainDeck, {}, void 0, false, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 562,
                                    columnNumber: 391
                                }, this),
                                (currentView === "chat" || currentView === "activeChat") && (currentView === "activeChat" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ActiveChatView, {}, void 0, false, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 562,
                                    columnNumber: 497
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ChatList, {}, void 0, false, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 562,
                                    columnNumber: 518
                                }, this)),
                                currentView === "profile" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Profile, {}, void 0, false, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 562,
                                    columnNumber: 562
                                }, this),
                                currentView === "settings" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingsView, {}, void 0, false, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 562,
                                    columnNumber: 605
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                            lineNumber: 562,
                            columnNumber: 314
                        }, this),
                        currentView !== "activeChat" && currentView !== "settings" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-20 bg-white border-t border-gray-100 flex justify-around items-center px-2 pb-2 z-40",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: {
                                        "SniffrApp[<button>.onClick]": ()=>setCurrentView("main")
                                    }["SniffrApp[<button>.onClick]"],
                                    className: `p-3 rounded-2xl transition-all ${currentView === "main" ? "text-[#FF6B35] bg-[#FF6B35]/10" : "text-gray-400"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dog$3e$__["Dog"], {
                                        size: 28
                                    }, void 0, false, {
                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                        lineNumber: 564,
                                        columnNumber: 169
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 562,
                                    columnNumber: 795
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: {
                                        "SniffrApp[<button>.onClick]": ()=>setCurrentView("chat")
                                    }["SniffrApp[<button>.onClick]"],
                                    className: `p-3 rounded-2xl transition-all relative ${currentView === "chat" ? "text-[#FF6B35] bg-[#FF6B35]/10" : "text-gray-400"}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                            size: 28
                                        }, void 0, false, {
                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                            lineNumber: 566,
                                            columnNumber: 178
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "absolute top-2 right-2 w-3 h-3 bg-[#FF6B35] border-2 border-white rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                            lineNumber: 566,
                                            columnNumber: 205
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 564,
                                    columnNumber: 195
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: {
                                        "SniffrApp[<button>.onClick]": ()=>setCurrentView("profile")
                                    }["SniffrApp[<button>.onClick]"],
                                    className: `p-3 rounded-2xl transition-all ${currentView === "profile" ? "text-[#FF6B35] bg-[#FF6B35]/10" : "text-gray-400"}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                        size: 28
                                    }, void 0, false, {
                                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                        lineNumber: 568,
                                        columnNumber: 172
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                                    lineNumber: 566,
                                    columnNumber: 313
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                            lineNumber: 562,
                            columnNumber: 691
                        }, this)
                    ]
                }, void 0, true)
            ]
        }, void 0, true, {
            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
            lineNumber: 562,
            columnNumber: 11
        }, this);
        $[54] = ActiveChatView;
        $[55] = ChatList;
        $[56] = GoldSubscriptionModal;
        $[57] = MainDeck;
        $[58] = MatchOverlay;
        $[59] = Profile;
        $[60] = currentView;
        $[61] = showGoldModal;
        $[62] = t20;
    } else {
        t20 = $[62];
    }
    return t20;
}
_s(SniffrApp, "34tLLeLRJDsNA3HZA/XeQzjEZ8M=");
_c = SniffrApp;
function _SniffrAppActiveChatViewActiveChatMessagesMap(msg, idx) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `max-w-[75%] p-3 rounded-2xl text-sm ${msg.sender === "me" ? "bg-[#FF6B35] text-white rounded-br-none" : "bg-white text-gray-800 rounded-bl-none shadow-sm"}`,
            children: msg.text
        }, void 0, false, {
            fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
            lineNumber: 584,
            columnNumber: 101
        }, this)
    }, idx, false, {
        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
        lineNumber: 584,
        columnNumber: 10
    }, this);
}
function _SniffrAppChatListAnonymous(match) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center flex-shrink-0 w-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-16 h-16 rounded-full border-2 border-[#FF6B35] p-0.5 overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: match.image,
                    className: "w-full h-full rounded-full object-cover"
                }, void 0, false, {
                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                    lineNumber: 587,
                    columnNumber: 176
                }, this)
            }, void 0, false, {
                fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                lineNumber: 587,
                columnNumber: 88
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-xs font-bold mt-1 text-gray-700",
                children: match.name
            }, void 0, false, {
                fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                lineNumber: 587,
                columnNumber: 259
            }, this)
        ]
    }, match.id, true, {
        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
        lineNumber: 587,
        columnNumber: 10
    }, this);
}
function _SniffrAppChatListMatchesFilter(m) {
    return m.unread;
}
function _SniffrAppMainDeckDogTagsMap(tag) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-semibold text-gray-600",
        children: tag
    }, tag, false, {
        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
        lineNumber: 593,
        columnNumber: 10
    }, this);
}
function _SniffrAppSplashScreen() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full w-full bg-[#FF6B35] flex flex-col items-center justify-center text-white relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "animate-bounce mb-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                    size: 64,
                    className: "fill-white text-[#FF6B35]"
                }, void 0, false, {
                    fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                    lineNumber: 596,
                    columnNumber: 169
                }, this)
            }, void 0, false, {
                fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                lineNumber: 596,
                columnNumber: 132
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-5xl font-bold tracking-tighter mb-2",
                children: "Sniffr."
            }, void 0, false, {
                fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                lineNumber: 596,
                columnNumber: 233
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-lg opacity-90 font-medium",
                children: "Find your pack."
            }, void 0, false, {
                fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                lineNumber: 596,
                columnNumber: 302
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm opacity-75 mt-1 font-medium",
                children: "(And a partner.)"
            }, void 0, false, {
                fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                lineNumber: 596,
                columnNumber: 367
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-10 flex flex-col items-center opacity-60",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs font-mono",
                        children: WATERMARK
                    }, void 0, false, {
                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                        lineNumber: 596,
                        columnNumber: 512
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] mt-1",
                        children: "v1.4.0 (Simulated AI)"
                    }, void 0, false, {
                        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                        lineNumber: 596,
                        columnNumber: 560
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
                lineNumber: 596,
                columnNumber: 438
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/sniffr/src/components/SniffrApp.tsx",
        lineNumber: 596,
        columnNumber: 10
    }, this);
}
function _SniffrAppHandleGenerateIcebreakersAnonymous2(s_0) {
    return s_0.length > 0;
}
function _SniffrAppHandleGenerateIcebreakersAnonymous(s) {
    return s.trim();
}
function _SniffrAppHandleRewindSetCurrentDogIndex(prev_1) {
    return prev_1 - 1;
}
function _SniffrAppHandleSwipeSetCurrentDogIndex(prev_0) {
    return prev_0 + 1;
}
var _c;
__turbopack_context__.k.register(_c, "SniffrApp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sniffr/src/next-devtools/shared/forward-logs-shared.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Methods of the `console` object that we intend to intercept and process.
 * This list centralizes the configuration of which console methods are relevant
 * for DevTools logging.
 */ __turbopack_context__.s([
    "LOG_METHODS",
    ()=>LOG_METHODS,
    "UNDEFINED_MARKER",
    ()=>UNDEFINED_MARKER,
    "patchConsoleMethod",
    ()=>patchConsoleMethod,
    "patchConsoleMethods",
    ()=>patchConsoleMethods
]);
const LOG_METHODS = [
    "log",
    "info",
    "warn",
    "error",
    "debug",
    "table",
    "trace",
    "dir",
    "dirxml",
    "group",
    "groupCollapsed",
    "groupEnd",
    "assert"
]; // `as const` ensures a literal union type.
const UNDEFINED_MARKER = "__next_tagged_undefined";
/**
 * Safely defines a property on an object, catching any potential errors.
 * Returns `true` if the property was defined successfully, `false` otherwise.
 */ function safeDefineProperty(obj, key, desc) {
    try {
        Object.defineProperty(obj, key, desc);
        return true;
    } catch  {
        // Suppress errors during defineProperty, often due to non-configurable properties.
        return false;
    }
}
function patchConsoleMethod(obj, methodName, wrapper) {
    const descriptor = Object.getOwnPropertyDescriptor(obj, methodName);
    const originalMethod = descriptor?.value;
    // Only patch function-valued properties to avoid unexpected behavior.
    if (typeof originalMethod !== "function") {
        // Return a no-op disposer if the property is not a function or doesn't exist.
        return ()=>{};
    }
    // Preserve the original method's name if possible for better debugging.
    const originalNameDescriptor = Object.getOwnPropertyDescriptor(originalMethod, "name");
    const wrapperMethod = function(...args) {
        // Execute the wrapper function.
        // Use a try-catch block to ensure the original method always runs,
        // even if the wrapper logic itself throws an error.
        try {
            wrapper(methodName, ...args);
        } catch (err) {
            // Log wrapper errors using the original method to avoid recursion.
            try {
                originalMethod.call(this, `[DevTools Console Wrapper Error for ${String(methodName)}]`, err instanceof Error ? err.message : String(err));
            } catch  {
            // Suppress any further errors to prevent infinite loops.
            }
        }
        // Always call the original console method.
        try {
            return originalMethod.apply(this, args);
        } catch (err) {
            // Log errors that occur within the original console method itself.
            try {
                originalMethod.call(this, `[DevTools Original Console Method Error for ${String(methodName)}]`, err instanceof Error ? err.message : String(err));
            } catch  {
            // Suppress any further errors.
            }
            return undefined;
        }
    };
    // If the original method had a name, try to set it on the wrapper for better stack traces.
    if (originalNameDescriptor) {
        Object.defineProperty(wrapperMethod, "name", originalNameDescriptor);
    }
    // Attempt to define the new wrapper method on the console object.
    const patchSuccessful = safeDefineProperty(obj, methodName, {
        configurable: descriptor?.configurable ?? true,
        enumerable: descriptor?.enumerable ?? true,
        writable: descriptor?.writable ?? true,
        value: wrapperMethod
    });
    // Return a disposer function to revert the patch.
    return ()=>{
        // Check if the current method is still our patched method before restoring.
        const currentMethod = Object.getOwnPropertyDescriptor(obj, methodName)?.value;
        const isStillPatchedByUs = currentMethod === wrapperMethod;
        if (isStillPatchedByUs) {
            // Attempt to restore the original descriptor, or sensible defaults.
            const restoreDescriptor = descriptor ?? {
                configurable: true,
                enumerable: true,
                writable: true,
                value: originalMethod
            };
            safeDefineProperty(obj, methodName, restoreDescriptor);
        }
    };
}
function patchConsoleMethods(obj, methods, wrapper) {
    return methods.map((m)=>patchConsoleMethod(obj, m, wrapper));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/sniffr/src/hooks/useConsolePatch.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useConsolePatch",
    ()=>useConsolePatch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/sniffr/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sniffr/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$src$2f$next$2d$devtools$2f$shared$2f$forward$2d$logs$2d$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/sniffr/src/next-devtools/shared/forward-logs-shared.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function useConsolePatch() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useConsolePatch.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            // Connect to local DevTools WebSocket server
            const ws = new WebSocket(`ws://localhost:${__TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_DEVTOOLS_WS_PORT ?? 4001}`);
            // Patch methods and send structured entry to WS server (best-effort)
            const disposers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$src$2f$next$2d$devtools$2f$shared$2f$forward$2d$logs$2d$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["patchConsoleMethods"])(console, __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$src$2f$next$2d$devtools$2f$shared$2f$forward$2d$logs$2d$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LOG_METHODS"], {
                "useConsolePatch.useEffect.disposers": (method, ...args)=>{
                    const entry = {
                        kind: "console",
                        method,
                        consoleMethodStack: null,
                        args: args.map({
                            "useConsolePatch.useEffect.disposers": (a)=>({
                                    kind: "arg",
                                    data: a === undefined ? __TURBOPACK__imported__module__$5b$project$5d2f$sniffr$2f$src$2f$next$2d$devtools$2f$shared$2f$forward$2d$logs$2d$shared$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UNDEFINED_MARKER"] : a
                                })
                        }["useConsolePatch.useEffect.disposers"])
                    };
                    if (ws.readyState === WebSocket.OPEN) {
                        try {
                            ws.send(JSON.stringify(entry));
                        } catch  {
                        // swallow
                        }
                    }
                }
            }["useConsolePatch.useEffect.disposers"]);
            return ({
                "useConsolePatch.useEffect": ()=>{
                    try {
                        ws.close();
                    } catch  {}
                    disposers.forEach({
                        "useConsolePatch.useEffect": (dispose)=>dispose()
                    }["useConsolePatch.useEffect"]);
                }
            })["useConsolePatch.useEffect"];
        }
    }["useConsolePatch.useEffect"], []);
}
_s(useConsolePatch, "OD7bBpZva5O2jO+Puf00hKivP7c=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=sniffr_src_caf5b64f._.js.map