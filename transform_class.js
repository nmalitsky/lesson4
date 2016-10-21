const stream = require('stream');

const TransformClass = class TransformClass extends stream.Transform {

	constructor() {
		super();
		this.buffer = [];
	}

	_transform (chunk, enc, cb) {
		var buffer = (Buffer.isBuffer(chunk)) ?  String(Number(chunk) * 2) : new Buffer(String(Number(chunk) * 2), enc);
		this.push(buffer);
		cb();
	};

}

module.exports = TransformClass;