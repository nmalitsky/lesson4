const stream = require('stream');

const WritableClass = class WritableClass extends stream.Writable {

	constructor() {
		super();
	}

	_write(chunk, enc, cb) {
		console.log(String(chunk));
		cb();
	}

}

module.exports = WritableClass;