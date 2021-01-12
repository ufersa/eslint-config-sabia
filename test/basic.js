const test = require('tape');
const config = require('..');

function isObject(obj) {
	return typeof obj === 'object' && obj !== null;
}

test('test basic properties of config', function (t) {
	t.ok(isObject(config.env));
	t.ok(isObject(config.extends));
	t.ok(isObject(config.plugins));
	t.ok(isObject(config.globals));
	t.ok(isObject(config.rules));
	t.ok(isObject(config.settings));
	t.ok(isObject(config.overrides));
	t.end();
});
