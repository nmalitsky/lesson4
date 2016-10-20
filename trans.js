const stream = require('stream');
const crypto = require('crypto');

const Trans = class Trans extends stream.Transform {

	constructor() {
		super();
		this.digester = crypto.createHash('md5');
	}

	_transform (chunk, enc, cb) {
		this.digester.update(chunk);
  		cb();
	};

	_flush (cb) {
  		this.push(this.digester.digest('hex'));
  		cb();
	};

}

module.exports =  Trans;