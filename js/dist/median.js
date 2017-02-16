'use strict';

(function () {

	'use strict';

	var definition = function definition(exports, undefined) {

		/* js/src/$5 */
		(function (exports) {

			/* js/src/$5/clear.js */
			var clear = function clear(compare, A, i) {

				var _a = i;var _b = ++i;var _c = ++i;
				var _d = ++i;var _e = ++i;

				var a = A[_a];var b = A[_b];var c = A[_c];
				var d = A[_d];var e = A[_e];

				// makes a < b and c < d
				if (compare(a, b) > 0) {
					;
					var _ref = [b, a, _b, _a];
					a = _ref[0];
					b = _ref[1];
					_a = _ref[2];
					_b = _ref[3];
				}if (compare(c, d) > 0) {
					;

					var _ref2 = [d, c, _d, _c];
					c = _ref2[0];
					d = _ref2[1];
					_c = _ref2[2];
					_d = _ref2[3];
				} // eliminate the lowest
				if (compare(c, a) < 0) {
					var _ref3 = [d, b, _d, _b];
					b = _ref3[0];
					d = _ref3[1];
					_b = _ref3[2];
					_d = _ref3[3];

					c = a;_c = _a;
				}

				// gets e in
				a = e;_a = _e;

				// makes a < b
				if (compare(a, b) > 0) {
					;

					var _ref4 = [b, a, _b, _a];
					a = _ref4[0];
					b = _ref4[1];
					_a = _ref4[2];
					_b = _ref4[3];
				} // eliminate another lowest
				// remaining: a,b,d
				if (compare(a, c) < 0) {
					var _ref5 = [d, b, _d, _b];
					b = _ref5[0];
					d = _ref5[1];
					_b = _ref5[2];
					_d = _ref5[3];

					a = c;_a = _c;
				}

				return compare(a, d) > 0 ? _d : _a;
			};

			exports.clear = clear;

			/* js/src/$5/cond6.js */
			var cond6 = function cond6(compare, A, i) {

				var _a = i;var _b = ++i;var _c = ++i;
				var _d = ++i;var _e = ++i;

				var a = A[_a];var b = A[_b];var c = A[_c];
				var d = A[_d];var e = A[_e];

				return compare(b, a) < 0 ? compare(d, c) < 0 ? compare(b, d) < 0 ? compare(a, e) < 0 ? compare(a, d) < 0 ? compare(e, d) < 0 ? _e : _d : compare(c, a) < 0 ? _c : _a : compare(e, d) < 0 ? compare(a, d) < 0 ? _a : _d : compare(c, e) < 0 ? _c : _e : compare(c, e) < 0 ? compare(b, c) < 0 ? compare(a, c) < 0 ? _a : _c : compare(e, b) < 0 ? _e : _b : compare(b, e) < 0 ? compare(a, e) < 0 ? _a : _e : compare(c, b) < 0 ? _c : _b : compare(b, c) < 0 ? compare(a, e) < 0 ? compare(a, c) < 0 ? compare(e, c) < 0 ? _e : _c : compare(d, a) < 0 ? _d : _a : compare(e, c) < 0 ? compare(a, c) < 0 ? _a : _c : compare(d, e) < 0 ? _d : _e : compare(d, e) < 0 ? compare(b, d) < 0 ? compare(a, d) < 0 ? _a : _d : compare(e, b) < 0 ? _e : _b : compare(b, e) < 0 ? compare(a, e) < 0 ? _a : _e : compare(d, b) < 0 ? _d : _b : compare(d, c) < 0 ? compare(a, d) < 0 ? compare(b, e) < 0 ? compare(b, d) < 0 ? compare(e, d) < 0 ? _e : _d : compare(c, b) < 0 ? _c : _b : compare(e, d) < 0 ? compare(b, d) < 0 ? _b : _d : compare(c, e) < 0 ? _c : _e : compare(c, e) < 0 ? compare(a, c) < 0 ? compare(b, c) < 0 ? _b : _c : compare(e, a) < 0 ? _e : _a : compare(a, e) < 0 ? compare(b, e) < 0 ? _b : _e : compare(c, a) < 0 ? _c : _a : compare(a, c) < 0 ? compare(b, e) < 0 ? compare(b, c) < 0 ? compare(e, c) < 0 ? _e : _c : compare(d, b) < 0 ? _d : _b : compare(e, c) < 0 ? compare(b, c) < 0 ? _b : _c : compare(d, e) < 0 ? _d : _e : compare(d, e) < 0 ? compare(a, d) < 0 ? compare(b, d) < 0 ? _b : _d : compare(e, a) < 0 ? _e : _a : compare(a, e) < 0 ? compare(b, e) < 0 ? _b : _e : compare(d, a) < 0 ? _d : _a;
			};

			exports.cond6 = cond6;
		})(exports['$5'] = {});
		return exports;
	};
	if (typeof exports === 'object') {
		definition(exports);
	} else if (typeof define === 'function' && define.amd) {
		define('@aureooms/js-median', [], function () {
			return definition({});
		});
	} else if (typeof window === 'object' && typeof window.document === 'object') {
		definition(window['median'] = {});
	} else console.error('unable to detect type of module to define for @aureooms/js-median');
})();