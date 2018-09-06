---
id: version-5.0.0-cdp
title: Chrome
original_id: cdp
---

Run your test headless/headful in Chrome with great developer workflow. Just start the runner with

```
npx aw chrome -c ./path/to/aw.config.js -w --coverage
```

and start testing. It will only rerun affected tests and generate coverage accordingly.
Add files, remove files as you go and change your tests to rapidly build up a test coverage.

## Options

### --config

 | Description          | Type   | Default | Alias |
 | -------------------- | ------ | ------- | ----- |
 | Path to config file. | string | null    | -c    |

---

### --url

 | Description       | Type   | Default |
 | ----------------- | ------ | ------- |
 | Url to html file. | string | null    |

---

### --glob

 | Description        | Type  | Default                       |
 | ------------------ | ----- | ----------------------------- |
 | Test glob pattern. | array | ['test/\*\*/\*.spec.{js,ts}'] |

---

### --watch

 | Description        | Type    | Default |
 | ------------------ | ------- | ------- |
 | Watch for changes. | boolean | false   |

---

### --watchGlob

 | Description                                                | Type  | Default                                              | Alias |
 | ---------------------------------------------------------- | ----- | ---------------------------------------------------- | ----- |
 | Glob pattern for watching files that will trigger a rerun. | array | ['src/\*\*/\*.{js,ts}', 'test/\*\*/\*.spec.{js,ts}'] | -wg   |

---

### --coverage

 | Description        | Type    | Default |
 | ------------------ | ------- | ------- |
 | Generate coverage. | boolean | false   |

---

### --babel.enable

 | Description                  | Type    | Default |
 | ---------------------------- | ------- | ------- |
 | Enables babel tranformation. | boolean | true    |

---

### --babel.core

 | Description                | Type   | Default |
 | -------------------------- | ------ | ------- |
 | Path to babel core module. | string | ''      |

---

### --babel.babelPluginIstanbul

 | Description                           | Type   | Default |
 | ------------------------------------- | ------ | ------- |
 | Path to babel plugin istanbul module. | string | ''      |

---

### --babel.options

 | Description            | Type   | Default |
 | ---------------------- | ------ | ------- |
 | Pass options to babel. | object | {}      |

---

### --babel.typescript

 | Description                         | Type   | Default      |
 | ----------------------------------- | ------ | ------------ |
 | Path to typescript compiler module. | string | 'typescript' |

---

### --transform.typescript.config

 | Description                     | Type   | Default         |
 | ------------------------------- | ------ | --------------- |
 | Path to typescript config file. | string | 'tsconfig.json' |

---

### --transform.typescript.babelOptions

 | Description            | Type   | Default |
 | ---------------------- | ------ | ------- |
 | Pass options to babel. | object | {}      |

---

### --transform.include

 | Description                      | Type  | Default |
 | -------------------------------- | ----- | ------- |
 | Include glob for transformation. | array | []      |

---

### --transform.exclude

 | Description                      | Type  | Default |
 | -------------------------------- | ----- | ------- |
 | Exclude glob for transformation. | array | []      |

---

### --transform.defaultExclude

 | Description                              | Type  | Default                                                                                                                                                                                                      |
 | ---------------------------------------- | ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
 | Default exclude glob for transformation. | array | ['\*\*/coverage/\*\*','\*\*/external/\*\*','\*\*/autogenerated/\*\*','\*\*/\*.(html&#124;css&#124;json&#124;txt&#124;ttf&#124;woff&#124;svg\)','\*\*/\*require\*.js','\*\*/\*sinon\*.js','\*\*/\*chai\*.js'] |

---


### --instrument.include

 | Description                       | Type  | Default |
 | --------------------------------- | ----- | ------- |
 | Include glob for instrumentation. | array | []      |

---

### --instrument.exclude

 | Description                       | Type  | Default |
 | --------------------------------- | ----- | ------- |
 | Exclude glob for instrumentation. | array | []      |

---

### --instrument.defaultExclude

 | Description                               | Type  | Default                                                                                                                                                                                                                            |
 | ----------------------------------------- | ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 | Default exclude glob for instrumentation. | array | ['\*\*/coverage/\*\*','\*\*/external/\*\*','\*\*/autogenerated/\*\*','\*\*/\*.(html&#124;css&#124;json&#124;txt&#124;ttf&#124;woff&#124;svg)','\*\*/\*require\*.js','\*\*/\*sinon\*.js','\*\*/\*chai\*.js','\*\*/\*.spec.{js,ts}'] |

---

### --mocha.reporter

 | Description            | Type   | Default   |
 | ---------------------- | ------ | --------- |
 | Which reporter to use. | string | undefined |

Check Mochas [**list**](https://mochajs.org/#reporters) for valid options.

---

### --mocha.bail

 | Description      | Type    | Default |
 | ---------------- | ------- | ------- |
 | Bail on failure. | boolean | true    |

---

### --mocha.timeout

 | Description    | Type   | Default   |
 | -------------- | ------ | --------- |
 | Timeout in ms. | number | undefined |

---

### --mocha.ui

 | Description                | Type   | Default |
 | -------------------------- | ------ | ------- |
 | The test interface to use. | string | 'bdd'   |

---

### --mocha.useColors

 | Description           | Type    | Default |
 | --------------------- | ------- | ------- |
 | Use colors in output. | boolean | true    |

---

### --client.port

 | Description  | Type   | Default |
 | ------------ | ------ | ------- |
 | Chrome port. | number | 9222    |

---

### --client.launch

 | Description    | Type    | Default |
 | -------------- | ------- | ------- |
 | Launch Chrome. | boolean | true    |

---

### --client.devtools

 | Description                 | Type    | Default |
 | --------------------------- | ------- | ------- |
 | Open Chrome with dev tools. | boolean | false   |

---

### --chrome.port

 | Description  | Type   | Default |
 | ------------ | ------ | ------- |
 | Chrome port. | number | 9222    |

---

### --chrome.flags

 | Description   | Type  | Default                                                           |
 | ------------- | ----- | ----------------------------------------------------------------- |
 | Chrome flags. | array | ['--headless', '--disable-gpu', '--allow-file-access-from-files'] |

---

### --http.port

 | Description | Type   | Default |
 | ----------- | ------ | ------- |
 | Http port.  | number | 9676    |

---

### --http.root

 | Description            | Type  | Default |
 | ---------------------- | ----- | ------- |
 | Root folders to serve. | array | ['./']  |

---

### --http.rewrite

 | Description     | Type   | Default |
 | --------------- | ------ | ------- |
 | Rewrite url(s). | object | {}      |

---

### --nyc.tempDirectory

 | Description                                      | Type   | Default                  |
 | ------------------------------------------------ | ------ | ------------------------ |
 | Directory to output raw coverage information to. | string | './coverage/.nyc_output' |

---

### --nyc.reporter

 | Description                  | Type  | Default                  |
 | ---------------------------- | ----- | ------------------------ |
 | Coverage reporter(s) to use. | array | ['lcov', 'text-summary'] |

---

### --nyc.reportDir

 | Description                              | Type   | Default   |
 | ---------------------------------------- | ------ | --------- |
 | Directory to output coverage reports in. | string | 'coverage' |

---