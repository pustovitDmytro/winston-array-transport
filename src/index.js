import os from 'os';
import Transport from 'winston-transport';
import { defaultParser, defaultParserJSON } from './defaults';
import { MESSAGE } from './constants';

module.exports = class ArrayTransport extends Transport {
    constructor(options = {}) {
        super(options);
        this.name = options.name || this.constructor.name;
        this.eol = options.eol || os.EOL;
        this.array = options.array || [];
        this.levels = options.levels || {};
        this.parser = options.parser || options.json && defaultParserJSON || defaultParser;
        this.limit = options.limit;
        this.setMaxListeners(options.maxListeners || 30);
    }

    log(info, callback) {
        setImmediate(() => {
            this.emit('logged', info);
        });
        const message = info[MESSAGE];

        this.array.push(this.parser(message));
        if (this.limit && this.array.length > this.limit) this.array.shift();
        callback();
    }
};
