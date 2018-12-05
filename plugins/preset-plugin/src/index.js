const { safeGetModule } = require('@after-work.js/utils');

module.exports = (runner) => {
  const sinon = safeGetModule('sinon');
  const chai = safeGetModule('chai');
  const sinonChai = safeGetModule('sinon-chai');
  const chaiAsPromised = safeGetModule('chai-as-promised');
  const chaiSubset = safeGetModule('chai-subset');
  const screenshotPlugin = safeGetModule(
    '@after-work.js/chai-plugin-screenshot',
  );
  const snapshotPlugin = safeGetModule('@after-work.js/chai-plugin-snapshot');
  global.sinon = sinon;
  global.chai = chai;
  global.expect = chai.expect;
  chai.use(sinonChai);
  chai.use(chaiAsPromised);
  chai.use(chaiSubset);
  chai.Assertion.addMethod('matchImageOf', screenshotPlugin.matchImageOf);
  if (runner) {
    chai.Assertion.addMethod('toMatchSnapshot', snapshotPlugin(runner));
  }
};
