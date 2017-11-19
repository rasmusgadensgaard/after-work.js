/* eslint no-console: 0, max-len: 0, global-require: 0, import/no-dynamic-require: 0, no-underscore-dangle: 0 */
const fs = require('fs');
const options = require('./options');
const Runner = require('./runner');

const testExclude = require('test-exclude');

process.on('unhandledRejection', (err) => {
  console.error(`Promise Rejection:${err}`);
});

const cdp = {
  command: ['cdp [options]', 'chrome'],
  desc: 'Run tests with cdp (chrome devtools protocol)',
  builder(yargs) {
    return yargs
      .options(options)
      .config('config', (configPath) => {
        if (configPath === null) {
          return {};
        }
        if (!fs.existsSync(configPath)) {
          throw new Error(`Config ${configPath} not found`);
        }
        let config = {};
        const foundConfig = require(configPath);
        if (typeof foundConfig === 'function') {
          config = Object.assign({}, foundConfig());
        } else {
          config = Object.assign({}, foundConfig);
        }
        return config;
      })
      .coerce('nyc', (opt) => {
        opt.sourceMap = false;
        opt.instrumenter = './lib/instrumenters/noop';
        return opt;
      })
      .coerce('instrument', (opt) => {
        opt.testExclude = testExclude({ include: opt.include, exclude: opt.exclude });
        return opt;
      })
      .coerce('transform', (opt) => {
        opt.testExclude = testExclude({ include: opt.include, exclude: opt.exclude });
        return opt;
      })
      .coerce('chrome', (opt) => {
        if (opt.devtools) {
          opt.chromeFlags = ['--auto-open-devtools-for-tabs'];
          opt.launch = true;
        }
        return opt;
      });
  },
  handler(argv) {
    const runner = new Runner(argv);
    runner.on('exit', code => process.exit(code));
    runner
      .setTestFiles()
      .setUrl(argv.url)
      .maybeCreateHttpServer()
      .autoDetectDebug();

    (async function run() {
      await runner.run();
    }());
  },
};

module.exports = cdp;