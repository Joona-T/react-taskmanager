
//Exports: default export - named export
import validator from 'validator';


console.log('utils.js is running');

export const square = (x) => x * x;
export const add = (a,b) => a + b;

const subtract = (a, b) => a - b;

export default subtract;
//Default can be also exported as:
// export default (a, b) => a - b;

console.log("Validator: " + validator.isEmail('test@gmail.com'));