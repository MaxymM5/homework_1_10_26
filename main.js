// 1
let start = Number(prompt("Enter start of range:"));
let end = Number(prompt("Enter end of range:"));

if (start > end) {
    let temp = start;
    start = end;
    end = temp;
}

let sum = 0;
for (let i = start; i <= end; i++) {
    sum += i;
}
alert(`Sum of numbers from ${start} to ${end} is: ${sum}`);

// 2
let a = Math.abs(Number(prompt("Enter first number:")));
let b = Math.abs(Number(prompt("Enter second number:")));

while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
}
alert(`Greatest Common Divisor is: ${a}`);

// 3
const num = Math.abs(Number(prompt("Enter a number:")));
let divisors = [];

for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      divisors.push(i);
    }
}
alert(`Divisors of ${num}: ${divisors.join(", ")}`);

// 4
let num1 = Math.abs(Number(prompt("Enter a number:")));
let count = 0;

if (num1 === 0) {
    count = 1;
} else {
    while (num1 > 0) {
        count++;
        num1 = Math.floor(num1 / 10);
    }
}
alert(`Digit count: ${count}`);

// 5
let positive = 0;
let negative = 0;
let zeros = 0;
let even = 0;
let odd = 0;

let currentInput;

for (let i = 1; i <= 10; i++) {
    currentInput = Number(prompt(`Enter number #${i}:`));

    if (currentInput > 0) {
      positive++;
    } else if (currentInput < 0) {
      negative++;
    } else {
      zeros++;
    }

    if (currentInput % 2 === 0) {
      even++;
    } else {
      odd++;
    }
}

alert(`Statistics: - Positive: ${positive} - Negative: ${negative} - Zeros: ${zeros} - Even: ${even} - Odd: ${odd}`);

// 6
let continueCalc;
do {
    const num1 = Number(prompt("Enter first number:"));
    const op = prompt("Enter operation (+, -, *, /):");
    const num2 = Number(prompt("Enter second number:"));

    let result;
    switch (op) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num2 !== 0 ? num1 / num2 : "Error: Division by zero";
        break;
      default:
        result = "Invalid operation";
    }

    alert(`Result: ${result}`);
    continueCalc = confirm("Do you want to solve another problem?");
} while (continueCalc);

// 7
let numStr = prompt("Enter a number:");
let shift = Number(prompt("How many digits to shift:"));

if (numStr) {
    shift = shift % numStr.length;
    for (let i = 0; i < shift; i++) {
      numStr = numStr.slice(1) + numStr[0];
    }
    alert(`Shifted result: ${numStr}`);
}

// 8
const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];
let index = 0;

while (confirm(`${days[index]}. Do you want to see the next day?`)) {
    index = (index + 1) % days.length;
}

// 9
for (let i = 2; i <= 9; i++) {
    console.log(`--- Table for ${i} ---`);
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} * ${j} = ${i * j}`);
    }
}
alert("Multiplication table printed to browser console (F12).");

// 10
let min = 0;
let max = 100;
let guessed = false;

alert("Think of a number between 0 and 100.");

while (!guessed && min <= max) {
    let mid = Math.floor((min + max) / 2);
    let answer = prompt(
      `Is your number > ${mid}, < ${mid}, or == ${mid}? (Type '>', '<', or '==')`
    );

    if (answer === "==") {
      alert(`Success! Your number is: ${mid}`);
      guessed = true;
    } else if (answer === ">") {
      min = mid + 1;
    } else if (answer === "<") {
      max = mid - 1;
    } else {
      alert("Invalid input. Please enter '>', '<', or '=='.");
    }
}

// BLOCK 2

// 1
function powerRecursive(base, exp) {
  if (exp === 0) return 1;
  if (exp < 0) return 1 / powerRecursive(base, -exp);
  return base * powerRecursive(base, exp - 1);
}

// 2
function gcdRecursive(a, b) {
  if (b === 0) return Math.abs(a);
  return gcdRecursive(b, a % b);
}

// 3
function maxDigitRecursive(n) {
  n = Math.abs(n);
  if (n < 10) return n;
  const lastDigit = n % 10;
  const maxRest = maxDigitRecursive(Math.floor(n / 10));
  return Math.max(lastDigit, maxRest);
}

// 4
function isPrimeRecursive(n, divisor = 2) {
  if (n <= 1) return false;
  if (divisor * divisor > n) return true;
  if (n % divisor === 0) return false;
  return isPrimeRecursive(n, divisor + 1);
}

// 5
function primeFactorsRecursive(n, divisor = 2) {
  if (n <= 1) return [];
  if (n % divisor === 0) {
    return [divisor, ...primeFactorsRecursive(n / divisor, divisor)];
  }
  return primeFactorsRecursive(n, divisor + 1);
}

// 6
function fibonacciRecursive(n) {
  if (n <= 2) return 1;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

// BLOCK 3

// 1
function compareNumbers(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

// 2
function factorial(n) {
  if (n < 0) return null;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// 3
function combineDigits(d1, d2, d3) {
  return Number(`${d1}${d2}${d3}`);
}

// 4
function calculateArea(length, width = length) {
  return length * width;
}

// 5
function isPerfectNumber(num) {
  if (num <= 1) return false;
  let sum = 0;
  for (let i = 1; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num;
}

// 6
function findPerfectNumbersInRange(min, max) {
  const result = [];
  for (let i = min; i <= max; i++) {
    if (isPerfectNumber(i)) {
      result.push(i);
    }
  }
  return result;
}
