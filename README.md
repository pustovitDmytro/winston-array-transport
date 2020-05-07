# winston-array-transport
**winston-array-transport** write winston logs directly to javascript Array.

[![Version][badge-vers]][npm]
[![Dependencies][badge-deps]][npm]
[![Vulnerabilities][badge-vuln]](https://snyk.io/)
[![Build Status][badge-tests]][travis]
[![Coverage Status][badge-coverage]](https://coveralls.io/github/pustovitDmytro/winston-array-transport?branch=master)
[![License][badge-lic]][github]

## Table of Contents
  - [Motivation](#motivation)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Configuration](#configuration)
  - [Contribute](#contribute)

## Motivation

There are a lot of cases, where you need to parse and analyze your logs. For example to access them during tests. This package provides transport, that allows simply push logs to js array, so you don't need any runtime parsers anymore.

## Requirements

To use library you need to have [node](https://nodejs.org) and [npm](https://www.npmjs.com) installed in your machine:

* node `6.0+`
* npm `3.0+`

## Installation

To install the library run following command

```bash
  npm i --save winston-array-transport
```

## Usage

The package can be used alongside any other [winston](https://github.com/winstonjs/winston) transport.

```javascript
import ArrayTransport from 'winston-array-transport';
import { createLogger } from 'winston';

const logs = [];
const transport  = new ArrayTransport({ array: logs, json: true, level: 'info' });

export const logger = createLogger({
    transports : [ transport ]
});

```
## Configuration

Next options can be configured while transport creation:

* **name** - name of a transport, ```ArrayTransport``` by default;
* **eol** - end of line , ```os.EOL``` by default;
* **array** - array, where all logs will be stored;
* **parser** - *function*, that will be applied to log messages;
* **json** - if set to ```true```,  ```JSON.parse``` parser will be used;
* **limit** - allows to limit amount of logs to ```n``` last items;

## Contribute

Make the changes to the code and tests and then commit to your branch. Be sure to follow the commit message conventions.

Commit message summaries must follow this basic format:
```
  Tag: Message (fixes #1234)
```

The Tag is one of the following:
* **Fix** - for a bug fix.
* **Update** - for a backwards-compatible enhancement.
* **Breaking** - for a backwards-incompatible enhancement.
* **Docs** - changes to documentation only.
* **Build** - changes to build process only.
* **New** - implemented a new feature.
* **Upgrade** - for a dependency upgrade.
* **Chore** - for tests, refactor, style, etc.

The message summary should be a one-sentence description of the change. The issue number should be mentioned at the end.


[npm]: https://www.npmjs.com/package/winston-array-transport
[github]: https://github.com/pustovitDmytro/winston-array-transport
[travis]: https://travis-ci.org/pustovitDmytro/winston-array-transport
[coveralls]: https://coveralls.io/github/pustovitDmytro/winston-array-transport?branch=master
[badge-deps]: https://img.shields.io/david/pustovitDmytro/winston-array-transport.svg
[badge-tests]: https://img.shields.io/travis/pustovitDmytro/winston-array-transport.svg
[badge-vuln]: https://img.shields.io/snyk/vulnerabilities/npm/winston-array-transport.svg?style=popout
[badge-vers]: https://img.shields.io/npm/v/winston-array-transport.svg
[badge-lic]: https://img.shields.io/github/license/pustovitDmytro/winston-array-transport.svg
[badge-coverage]: https://coveralls.io/repos/github/pustovitDmytro/winston-array-transport/badge.svg?branch=master