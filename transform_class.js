const stream = require('stream');

const TransformClass = class TransformClass extends stream.Transform {

	constructor() {
		super();
	}

	_transform (chunk, enc, cb) {
		this.push(chunk);
		cb();
	};

}

module.exports = TransformClass;