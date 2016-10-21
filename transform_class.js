const stream = require('stream');

const TransformClass = class TransformClass extends stream.Transform {

	constructor() {
		super();
		this.buffer = [];
	}

	_transform (chunk, enc, cb) {
		setTimeout(() => { 
			this.push(String(Number(chunk) * 2)); cb(); }, 
		1000);
	};

}

module.exports = TransformClass;