import 'babel-polyfill';
/**
 * ES learn
 */

/**
 * 1.let
 */

{
    let a = 10;
    var b = 1;
}

//console.log(a); //未定义
console.log(b);

var a = [];
for (var i = 0; i < 10; i++) {
    let c = i;
    a[i] = function () {
        console.log(c);
    }
}

a[6]();

/**
 * let 不会发生变量提升
 */

{
    console.log(foo); // 报错，但是如果编译成ES5则输出undefined
    let foo = 'foo';
    // var foo = '1'; 相同作用域内，不允许重复声明一个变量
}

/**
 * 2. const
 * 用来声明常量，一旦声明则不许改动，对常量赋值不会报错，会失效。
 */

const PI = 3.14159;


/**
 * 3. 解构赋值
 */

/**
 * 数组的解构赋值
 */
var [a, b, c] = [1, 2, 3];

var [foo, [[bar], baz]] = [1, [[2], 3]];

var [, , third] = [1, 2, 3];

var [head, ...tail] = [1, 2, 3, 4];

/**
 * 解构不成功则返回undefined，比如
 * 
 * var [foo] = [];
 * var [foo] = 1;
 * var [foo] = 'hello'/false/NaN;
 * 
 * 如果对undefined和null进行解构会报错
 * 
 * var [foo] = undefined/null;
 * 
 * 解构对象可以指定默认值
 * 
 * var [foo = true] = [];
 */


/**
 * 对象的解构赋值
 */

var {foo, bar} = {foo: 'aaa', bar: 'bbb'};

/**
 * 解构赋值的用途
 * 1. 交换变量
 * var x = 1;
 * var y = 2;
 * [x, y] = [y, x];
 * 
 * 2. 从函数返回多个值
 * function example() {
 *      return [1, 2, 3];
 * }
 * 
 * var [a, b, c] = example();
 * 
 * 3. 函数定义
 * 
 * function f({x, y, z}) {
 *      
 * }
 * 
 * f({x: 1, y: 2, z: 3};
 * 
 * 4. 遍历Map结构
 * var map = new Map();
 * map.set('first', 'hello');
 * map.set('second', 'world');
 * 
 * for (let [key, value] of map) {
 *     console.log(key + ':' + value);
 * }
 */

/**
 * 4. 字符串扩展
 * 
 * 每个字符默认2个字节，对于类似汉字，为4个字节
 * 
 */

'x'.repeat(3); // 'xxx'

/**
 * 模板字符串
 */
let numInStr = 3;
console.log(`This is a number ${numInStr}`);
console.log(`This is 2 
line
?
`);

/**
 * 5. 数值的扩展
 */

let num1 = 0b1111; // 二进制0b开头
let num2 = 0o767; // 八进制0o开头

/**
 * 6. 数组的扩展
 */

/**
 * 将类数组对象转化为数组
 * 
 */
Array.from();


/**
 * 将一组值转化为数组
 */ 
Array.of(3, 8, 11);

/**
 * 查找方法
 */
[1, 3, 5, 7, 9, 11].find(function (item, index, array) {
    return item > 9;
}, null);

[1, 3, 5, 7, 9, 11].findIndex(function (item, index, array) {
    return item > 9;
}, null);

[1, 2, 3].fill(7); // [7, 7, 7]

[1, 2, 3].fill(5, 1, 2); // [1, 5, 3]

/**
 * entries(), keys(), values()
 */

for (let key of ['a', 'b'].keys()) {
    console.log(key);// 0, 1
}

for (let val of ['a', 'b'].values()) {
    console.log(val);// a, b
}

for (let [key, val] of ['a', 'b'].entries()) {
    console.log(`${key} : ${val}`);// 0 a, 1 b
}

/**
 * 数组推导：通过现有的数组生成数组
 */

// let numbers = [1, 2, 3];
// let squares = [for (x of numbers) x * x];

/**
 * 7. 对象的扩展
 */

// Object.is() 与 === 类似，除了下列两种情况
Object.is(NaN, NaN); // true
Object.is(+0, -0); // false

// Object.assign() 将origin对象的所有可以枚举的属性复制到目标对象
var target = {a: 1};
var origin1 = {b: 2};
var origin2 = {c: 3};

Object.assign(target, origin1, origin2);

// Object.setPrototypeOf() 设置一个对象的prototype对象
// Object.getPrototypeOf() 获取一个对象的prototype对象

/**
 * 增强的对象写法
 */

var person = {
    name: 'Monar',
    hello() {
        console.log('Hello');
    }
};

/**
 * 属性名表达式
 */

var lastWord = 'monar';

var a = {
    'sandy': 1,
    [lastWord]: 2
};

/**
 * Symbol
 * 
 * ES6新增的一种基本数据类型，生成一个标识符，标识唯一
 */

var mySymbol = Symbol('Test');

mySymbol.name;// Test
typeof mySymbol;// symbol

/**
 * Proxy
 * 
 * 在目标对象之前设置一层拦截器，当访问的时候触发
 */

var proxy = new Proxy({}, {
    get: function (target, property) {
        return 35;
    }
});

// Object.observe(), Object.unobserve()
// 用来监听对象的变化，一旦变化则触发回调函数
// 属于ES7

/**
 * 8. 函数的扩展
 */

// ES6允许给函数设定默认参数

/**
 * rest 参数
 * rest 参数后不能再跟其他参数，否则报错
 */

function add(...values) {
    let sum = 0;
    for (var val of values) {
        sum += val;
    }
    return sum;
}

/**
 * 扩展运算符...
 * 相当于rest参数的逆运算，主要用于函数调用，将数组分解为参数列表
 */

Math.max(...[1, 2, 3]);

/**
 * 箭头函数
 * 
 * this对象绑定定义时所在的对象，不是调用时所在的对象。无法通过apply/call/bind方法改变this的指向。
 * 箭头函数不能作为构造函数。
 * 内部没有arguments对象。
 */

/**
 * 9. set和map数据结构
 */

/**
 * set类似于数组，不过里边的值都是唯一的。
 * 
 * set新添加值的时候不会进行类型转换，所以5和'5' 是两个值。
 * 
 * set的方法：
 * add(value)
 * delete(value)
 * has(value)
 * clear()
 */

var s = new Set();

[1, 2, 3, 3, 4, 4, 5].forEach(item => s.add(item));

s = new Set([1, 2, 3, 4, 5, 5, 5, 5]);

s.size; // 5

/**
 * Map类似于源生js对象，都是键值对，但是js对象只能将字符串当做键，带来了极大的限制。
 * Map只有对同一对象的引用才会指向一个值！！！
 * 
 * 属性与方法：
 * size
 * set(key, value)
 * get(key)
 * has(key)
 * delete(key)
 * clear()
 * 
 * 遍历方法：
 * keys()/values()/entries()
 * 
 * forEach(function (value, key, map) {});
 */

var m = new Map();

o = {p: 'Hello world!'};

m.set(o, 'content');

console.log(m.get(o));

/**
 * WeakMap
 * 与map类似，只不过不接受原始类型作为键名，只接受对象，null除外。
 * 无size属性，不能遍历。
 */

/**
 * 10. Iterator与for...of循环
 * 
 * for...of 必须实现了iterator接口才能用。
 */
var arr = ['a', 'b', 'c'];

for (var a in arr) {
    console.log(a);// 0, 1, 2
}

for (var a of arr) {
    console.log(a);// a, b, c
}

//


/**
 * 11. Generator函数
 * 
 * 内部状态的一个遍历器。 
 * 
 * 描述一个可以暂停执行的函数。
 */

function* helloworldGenerator() {
    yield 'Hello';
    yield 'World';
    return 'end';
}

/**
 * yield语句默认返回undefined，如果传递next参数，则会作为上一次yield语句的返回值。
 */

function* fibonacci() {
    let [pre, cur] = [0, 1];
    while (true) {
        [pre, cur] = [cur, pre + cur];
        yield cur;
    }
}

for (n of fibonacci()) {
    if (n > 1000) {
        break;
    }
    console.log(n);
}

/**
 * 12. Promise对象
 * 
 * 代表未来将要发生的事件。避免层层回调。
 */

function* runAsync(){
    var i;
    var p;
    for (i = 0; i < 3; i++) {
        yield p = new Promise(function(resolve, reject){
            setTimeout(function(){
                console.log('执行完成' + i);
                resolve(i);
            }, 1000);
        });
    }            
}

var li = runAsync();

li.next().value.then(function(data){
    console.log(data);
    return li.next().value;
}).then(function(data) {
    console.log(data);
    return li.next().value;
}).then(function(data) {
    console.log(data);
    return li.next().value;
}).catch(function (error) {
    console.log(error);
});

/**
 * 13. Class 和 Module
 */

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return `(${this.x}, ${this.y})`;
    }
}

class ColorPoint extends Point{
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }

    toString() {
        return `${this.color} ${super.toString()}`;
    }
}

/**
 * Module
 * 
 * export (default) 导出
 * import from 导入模块
 * module [file] from 整体导入
 * 
 * export * from [module] 继承某个模块
 */








