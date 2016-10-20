const stream = require('stream');
const random = require('./random');

const ReadableClass = class ReadableClass extends stream.Readable {

	constructor() {
		super();
	}

	_read() {
		this.push(String(random(1,9999)));
	}

}


module.exports = ReadableClass;