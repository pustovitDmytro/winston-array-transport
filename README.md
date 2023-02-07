![Logo](.docs/logo_250.png "winston-array-transport")

# winston-array-transport
write [winston][w-main] logs directly to javascript [Array][js-array].

[![Version][badge-vers]][npm]
[![Bundle size][npm-size-badge]][npm-size-url]
[![Downloads][npm-downloads-badge]][npm]

[![CodeFactor][codefactor-badge]][codefactor-url]
[![SonarCloud][sonarcloud-badge]][sonarcloud-url]
[![Codacy][codacy-badge]][codacy-url]
[![Scrutinizer][scrutinizer-badge]][scrutinizer-url]

[![Dependencies][badge-deps]][npm]
[![Security][snyk-badge]][snyk-url]
[![Build Status][tests-badge]][tests-url]
[![Coverage Status][badge-coverage]][url-coverage]

[![Commit activity][commit-activity-badge]][github]
[![FOSSA][fossa-badge]][fossa-url]
[![License][badge-lic]][github]
[![Made in Ukraine][ukr-badge]][ukr-link]

# 🇺🇦 Help Ukraine
I woke up on my 26th birthday at 5 am from the blows of russian missiles. They attacked the city of Kyiv, where I live, as well as the cities in which my family and friends live. Now my country is a war zone. 

We fight for democratic values, freedom, for our future! Once again Ukrainians have to stand against evil, terror, against genocide. The outcome of this war will determine what path human history is taking from now on.

💛💙  Help Ukraine! We need your support! There are [dozen ways][ukr-link] to help us, just do it!
## Table of Contents
- [winston-array-transport](#winston-array-transport)
- [🇺🇦 Help Ukraine](#-help-ukraine)
  - [Table of Contents](#table-of-contents)
  - [Motivation](#motivation)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Configuration](#configuration)
  - [Contribute](#contribute)

## Motivation

There are a lot of cases where you need to parse and analyze your logs. For example, to access them during tests. This package provides transport that allows simply push logs to js array, so you don't need any runtime parsers anymore.

## Requirements
[![Platform Status][node-ver-test-badge]][node-ver-test-url]

To use library you need to have [node](https://nodejs.org) and [npm](https://www.npmjs.com) installed in your machine:

* node `>=10`
* npm `>=6`

Package is [continuously tested][node-ver-test-url] on darwin, linux and win32 platforms. All active and maintenance [LTS](https://nodejs.org/en/about/releases/) node releases are supported.

## Installation

To install the library run the following command

```bash
  npm i --save winston-array-transport
```

## Usage

The package can be used alongside any other [winston transport][w-transports].

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


[w-main]: https://github.com/winstonjs/winston
[w-transports]: https://github.com/winstonjs/winston/blob/master/docs/transports.md
[js-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

## Contribute

Make the changes to the code and tests. Then commit to your branch. Be sure to follow the commit message conventions. Read [Contributing Guidelines](.github/CONTRIBUTING.md) for details.

[npm]: https://www.npmjs.com/package/winston-array-transport
[github]: https://github.com/pustovitDmytro/winston-array-transport
[coveralls]: https://coveralls.io/github/pustovitDmytro/winston-array-transport?branch=master
[badge-deps]: https://img.shields.io/librariesio/release/npm/winston-array-transport.svg
[badge-vers]: https://img.shields.io/npm/v/winston-array-transport.svg
[badge-lic]: https://img.shields.io/github/license/pustovitDmytro/winston-array-transport.svg
[badge-coverage]: https://coveralls.io/repos/github/pustovitDmytro/winston-array-transport/badge.svg?branch=master
[url-coverage]: https://coveralls.io/github/pustovitDmytro/winston-array-transport?branch=master

[snyk-badge]: https://snyk-widget.herokuapp.com/badge/npm/winston-array-transport/badge.svg
[snyk-url]: https://snyk.io/advisor/npm-package/winston-array-transport

[tests-badge]: https://img.shields.io/circleci/build/github/pustovitDmytro/winston-array-transport
[tests-url]: https://app.circleci.com/pipelines/github/pustovitDmytro/winston-array-transport

[codefactor-badge]: https://www.codefactor.io/repository/github/pustovitdmytro/winston-array-transport/badge
[codefactor-url]: https://www.codefactor.io/repository/github/pustovitdmytro/winston-array-transport

[commit-activity-badge]: https://img.shields.io/github/commit-activity/m/pustovitDmytro/winston-array-transport

[scrutinizer-badge]: https://scrutinizer-ci.com/g/pustovitDmytro/winston-array-transport/badges/quality-score.png?b=master
[scrutinizer-url]: https://scrutinizer-ci.com/g/pustovitDmytro/winston-array-transport/?branch=master

[codacy-badge]: https://app.codacy.com/project/badge/Grade/75132c6080bc4051801d0bf391df947f
[codacy-url]: https://www.codacy.com/gh/pustovitDmytro/winston-array-transport/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=pustovitDmytro/winston-array-transport&amp;utm_campaign=Badge_Grade

[sonarcloud-badge]: https://sonarcloud.io/api/project_badges/measure?project=pustovitDmytro_winston-array-transport&metric=alert_status
[sonarcloud-url]: https://sonarcloud.io/dashboard?id=pustovitDmytro_winston-array-transport

[npm-downloads-badge]: https://img.shields.io/npm/dw/winston-array-transport
[npm-size-badge]: https://img.shields.io/bundlephobia/min/winston-array-transport
[npm-size-url]: https://bundlephobia.com/result?p=winston-array-transport

[node-ver-test-badge]: https://github.com/pustovitDmytro/winston-array-transport/actions/workflows/npt.yml/badge.svg?branch=master
[node-ver-test-url]: https://github.com/pustovitDmytro/winston-array-transport/actions?query=workflow%3A%22Node.js+versions%22

[fossa-badge]: https://app.fossa.com/api/projects/custom%2B24828%2Fwinston-array-transport.svg?type=shield
[fossa-url]: https://app.fossa.com/projects/custom%2B24828%2Fwinston-array-transport?ref=badge_shield

[ukr-badge]: https://img.shields.io/badge/made_in-ukraine-ffd700.svg?labelColor=0057b7
[ukr-link]: https://war.ukraine.ua
