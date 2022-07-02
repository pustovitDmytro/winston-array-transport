import { assert } from 'chai';
import { createLogger, format } from 'winston';
import transport from '../entry';

suite('Configurations');

test('Default configuration', function () {
    const array = [];
    const logger = createLogger({
        level      : 'debug',
        format     : format.json(),
        transports : [ new transport({ array }) ]
    });

    assert.isEmpty(array);
    logger.log('info', { a: 1, b: 2 });
    assert.deepEqual(array, [ '{"a":1,"b":2,"level":"info"}' ]);
});

test('parse json on the fly', function () {
    const array = [];
    const logger = createLogger({
        level      : 'debug',
        format     : format.json(),
        transports : [ new transport({ array, json: true }) ]
    });

    assert.isEmpty(array);
    logger.log('info', { a: 1, b: 2 });
    assert.deepEqual(array, [ { 'a': 1, 'b': 2, 'level': 'info' } ]);
});

test('limit amount of elements in array', function () {
    const array = [];
    const logger = createLogger({
        level      : 'debug',
        format     : format.json(),
        transports : [ new transport({ array, limit: 5 }) ]
    });

    assert.isEmpty(array);
    (Array.from({ length: 100 }))
        .map((item, index) => index + 1)
        .forEach(item => logger.log('info', item));

    assert.deepEqual(array, [ 96, 97, 98, 99, 100 ].map(i => `{"level":"info","message":${i}}`));
});

test('default Transport maxListeners', function () {
    const array = [];
    const logger = createLogger({
        level      : 'debug',
        format     : format.json(),
        transports : [ new transport({ array, limit: 5 }) ]
    });

    assert.equal(logger._readableState.pipes._maxListeners, 30);
});

test('set Transport maxListeners as 0', function () {
    const array = [];
    const logger = createLogger({
        level      : 'debug',
        format     : format.json(),
        transports : [ new transport({ array, limit: 5, maxListeners: 0 }) ]
    });

    assert.equal(logger._readableState.pipes._maxListeners, 0);
});
