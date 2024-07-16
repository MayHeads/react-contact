function Box(value) {
    this.value = value;
}




let x = new Box(10);
console.log(x.value); // 

Object.getPrototypeOf(x).invoke = function () {
    console.log(`invoked ${this.value}`);
}
Object.getPrototypeOf(x).foot = "1234";
let z = Object.getPrototypeOf(x).foot;
console.log(z);
console.log(x.foot);



Box.prototype.ov1 = function () {
    console.log('通过Box.prototype.ov1 添加原型链');
}
let proto = Object.getPrototypeOf(x);
console.log(proto);

console.log(x.ov1());




