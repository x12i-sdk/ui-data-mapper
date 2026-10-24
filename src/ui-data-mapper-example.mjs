import assert from 'node:assert/strict';
import { build } from 'esbuild';
const bundle = await build({ entryPoints: ['src/ui-package-fixture.mjs'], bundle: true, platform: 'browser', format: 'esm', write: false, loader: { '.css': 'empty' } });
const fixture = await import('data:text/javascript;base64,' + Buffer.from(bundle.outputFiles[0].text).toString('base64'));
const result = fixture.runExample();
assert.equal(result.data.title, 'Example title');
assert(result.uiHtml.includes('example-title'));
assert.equal(typeof result.packageName, 'string');
console.log(result);
