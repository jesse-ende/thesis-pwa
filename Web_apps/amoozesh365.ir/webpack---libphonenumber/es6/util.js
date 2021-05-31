// Checks whether the entire input sequence can be matched
// against the regular expression.
export function matchesEntirely() {
    var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var regular_expression = arguments[1];

    return new RegExp('^(?:' + regular_expression + ')$').test(text);
}

/**
 * Merges two arrays.
 * @param  {*} a
 * @param  {*} b
 * @return {*}
 */
export function mergeArrays(a, b) {
    var merged = a.slice();

    for (var _iterator = b, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
        var _ref;

        if (_isArray) {
            if (_i >= _iterator.length) break;
            _ref = _iterator[_i++];
        } else {
            _i = _iterator.next();
            if (_i.done) break;
            _ref = _i.value;
        }

        var element = _ref;

        if (a.indexOf(element) < 0) {
            merged.push(element);
        }
    }

    return merged.sort(function(a, b) {
        return a - b;
    });

    // ES6 version, requires Set polyfill.
    // let merged = new Set(a)
    // for (const element of b)
    // {
    // 	merged.add(i)
    // }
    // return Array.from(merged).sort((a, b) => a - b)
}
//# sourceMappingURL=util.js.map