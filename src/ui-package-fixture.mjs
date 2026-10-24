import { applyPackage } from '@x12i/ui-data-mapper/mapper';
export function runExample() {
  return applyPackage({ uiHtml: '<article><h1 id="example-title">Title</h1></article>', data: { title: 'Example title' },
    mapping: { version: '1', mappings: [] }, packageName: 'fixture-ui',
  });
}
