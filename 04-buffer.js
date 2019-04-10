let buf1 = Buffer.alloc(5);
console.log(buf1);
let buf2 = Buffer.from([1, 2, 3]);
console.log(buf2);
buf1.write("hello");
let buf3 = Buffer.from("987t6y2");
console.log(buf1.toString());
let buf4 = Buffer.concat([buf1, buf3]);
console.log(buf4.toString());
