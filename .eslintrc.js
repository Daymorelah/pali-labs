module.exports = {
	"env": {
		"browser": true,
		"es6": true,
		"node": true
	},
	"extends": "eslint:recommended",
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	"parserOptions": {
		"ecmaVersion": 2018,
		"sourceType": "module"
	},
	"rules": {
		"indent": ['error', 2, {SwitchCase: 1}],
		"linebreak-style": ['error', 'unix'],
		"quotes": ['error', 'single'],
		"semi": ['error', 'always'],
		"no-console": ['warn', {allow: ['clear', 'info', 'error', 'dir', 'trace']}],
		"no-else-return": "error",
		"no-unneeded-ternary": "error",
		"no-useless-return": "error",
		"no-var": "error",
		"one-var": ["error", "never"],
		"prefer-arrow-callback": "error",
		"strict": "error",
		"symbol-description": "error",
	}
};