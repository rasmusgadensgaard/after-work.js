---
id: node-js-examples
title: Node-js
---

## Test

```javascript
import virtual from './foobar-virtual.html';
import template from './foobar.html';

describe('html', () => {
  it('should import virtual template', () => {
    expect(virtual).toMatchSnapshot();
  });

  it('should import template', () => {
    expect(template).toMatchSnapshot();
  });
});
```

**[examples/node-js/test/html.spec.js](https://github.com/qlik-oss/after-work.js/tree/master/examples/node-js/test/html.spec.js)**

