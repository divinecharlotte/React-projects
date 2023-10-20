//Exercise 1:
const average=(numbers)=>numbers.reduce((acc,current)=>acc+current,0)/numbers.length
console.log(average([1, 2]));

//Exercise 2:

const greet = (name) => name ? `Hello, ${name}!` : "Hello!"
console.log(greet('divine'));

//Exercise 3:
const reverseString =(str)=>  str.split('').reverse().join('')
console.log(reverseString('masdwe'));

//Exercise 4:

const findEvenNumbers = (numbers)=> numbers.filter((number)=> number %2 ===0)
console.log(findEvenNumbers([1, 2, 3, 4, 5, 6]));

//Exercise 5:
const calculateFactorial=(n)=> {
    if (n<1) return  1;
        let factorial = 1;
        for (let i = 2; i <= n; i++) {
            factorial *= i;
        }
        return factorial;
}
console.log(calculateFactorial(3));

//Exercise 6:
const maxNumber =(a, b, c)=>  Math.max(a, b, c)
console.log(maxNumber(4, 1, 2));

//Exercise 7:
const multiply = (x, y)=>  x * y;
console.log(multiply(8, 2));

//Exercise 8:
const discount = (totalamount)=> totalamount > 100 ? totalamount * 0.1 :  totalamount * 0.05
console.log(discount(8));

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
console.log(calculateMatrixSum([[1,17]]));