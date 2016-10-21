const stream = require('stream');

const TransformClass = class TransformClass extends stream.Transform {

	constructor() {
		super();
		this.buffer = [];
		this.pushTime = new Date().getTime();
	}

	_transform (chunk, enc, cb) {
	        /* output only one item per second
		setTimeout(() => { 
			this.push(String(Number(chunk) * 2)); cb(); }, 
		1000);
		*/

		this.buffer.push(String(Number(chunk) *2));

		let currTime = new Date().getTime();
		if(currTime - this.pushTime >= 1000) {
			this.push(this.buffer.join());
			this.buffer = [];
			this.pushTime = currTime;
		}
		cb();
	};

}

module.exports = TransformClass;