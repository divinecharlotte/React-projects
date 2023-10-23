//Exercise 1:
const average=(numbers)=>numbers.reduce((acc,current)=>acc+current,0)/numbers.length


//Exercise 2:

const greet = (name) => name ? `Hello, ${name}!` : "Hello!"


//Exercise 3:
const reverseString =(str)=>  str.split('').reverse().join('')


//Exercise 4:

const findEvenNumbers = (numbers)=> numbers.filter((number)=> number %2 ===0)


//Exercise 5:
function calculateFactorial(n) {
    return n === 0 || n === 1 ? 1 : n * calculateFactorial(n - 1);
}


//Exercise 6:
const maxNumber =(a, b, c)=>  Math.max(a, b, c)


//Exercise 7:
const multiply = (x, y)=>  x * y;


//Exercise 8:
const discount = (totalamount)=> totalamount > 100 ? totalamount * 0.1 :  totalamount * 0.05


//Exercise 9:
const calculateMatrixSum = (matrix)=> {
    let sum = 0;
    for (let arr of matrix) {
        for (let num of arr) {
            sum += num; 
        }
    }          
    return sum;
}
