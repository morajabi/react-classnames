(function() {
	const isModule = (typeof module !== 'undefined' && module.exports);
	const isAMD = (typeof define === 'function' && define.amd);

	if (isModule) { // CommonJS module is defined
		module.exports = ReactClassNames;
	} else if (isAMD) { // Global define
		define('classNames', [], function() {
			return ReactClassNames;
		});
	} else { // Global variable
		window.ReactClassNames = ReactClassNames;
	}
}());


/**
 * ReactClassNames [Manage classNames conditionally]
 */
function ReactClassNames(...params) {
	const className = [];
	// const hasOwnClass = {}.hasOwnProperty;

	for (let i = 0; i < params.length; i++) {
		const param = params[i];
		const typoOfArg = typeof(param);
		if (!param) continue;

		if (typoOfArg === 'string' || typoOfArg === 'number') {
			className.push(param);
		} else if (param.constructor === Array) {
			className.push(ReactClassNames.apply(null, param));
		} else if (typoOfArg === 'object') {
			for (let key in param) {
				if (param[key]) {
					className.push(key);
				}
				// if (hasOwnClass.call(param, key) && param[key]) {
				// 	className.push(key);
				// }
			}
		}
	}
	return className.join(' ');
}
