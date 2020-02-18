import { assert } from 'chai';
import { createLogger, format } from 'winston';
import transport from '../entry';

const array = [];
const logger = createLogger({
    level      : 'debug',
    format     : format.json(),
    transports : [ new transport({ array }) ]
});

suite('Configurations');

test('Default configuration', function () {
    assert.isEmpty(array);
    logger.log('info', { a: 1, b: 2 });
    assert.deepEqual(array, [ '{"a":1,"b":2,"level":"info"}' ]);
});
