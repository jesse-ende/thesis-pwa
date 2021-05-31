self.__BUILD_MANIFEST = (function(a, b) {
    return {
        __rewrites: [{
            source: "\u002Fen\u002Fproduct-navigator\u002F_next\u002F:path*",
            destination: b,
            locale: a
        }, {
            source: "\u002Fproduct-navigator\u002F_next\u002F:path*",
            destination: b,
            locale: a
        }, {
            source: "\u002Fen\u002Fproduct-navigator\u002Fapi\u002F:slug*\u002F",
            destination: "\u002Fapi\u002F:slug*\u002F",
            locale: a
        }],
        "/404": ["static\u002Fchunks\u002Fpages\u002F404-9b9052b30633c238cb7b.js"],
        "/_error": ["static\u002Fchunks\u002Fpages\u002F_error-0eb1da28b7a81d82e929.js"],
        "/product-navigator/[[...slug]]": ["static\u002Fchunks\u002Fpages\u002Fproduct-navigator\u002F[[...slug]]-164852351f3d14eaf071.js"],
        sortedPages: ["\u002F404", "\u002F_app", "\u002F_error", "\u002Fproduct-navigator\u002F[[...slug]]"]
    }
}(false, "\u002F_next\u002F:path*"));
self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()