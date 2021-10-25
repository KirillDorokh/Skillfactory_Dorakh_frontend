import "./style.css";

import { sum, multiply as multiPly } from "./math";
// or import * as math from './math';

const multiply = (a) => a * 8;


document.write("Hello world!");
//вывод в консоль
console.log("ES6 modules");
console.log("sum =", (sum(2, 3))); //(math.sum(2, 3)))
console.log("multiply= ", (multiply(2)));
console.log("multiply from math.js = ", (multiPly(2)));