const crypto = require('crypto');
const hash = crypto.createHash('md5');
const fs = require("fs");

const input = fs.createReadStream('data.txt');
const output = fs.createWriteStream('copy.txt');
const output2 = fs.createWriteStream('copy2.txt');

// Part 1
input.pipe(hash).pipe(process.stdout); // output to console
input.pipe(hash).pipe(output);

// Part 2
const Trans = require('./trans');
input.pipe(new Trans()).pipe(process.stdout); // output to console
input.pipe(new Trans()).pipe(output2);

// Part 3
const ReadableClass = require('./readable_class');
const WritableClass = require('./writeable_class');
const TransformClass = require('./transform_class');

let rs = new ReadableClass();
let ws = new WritableClass();
let tr = new TransformClass();

rs.pipe(tr).pipe(ws);