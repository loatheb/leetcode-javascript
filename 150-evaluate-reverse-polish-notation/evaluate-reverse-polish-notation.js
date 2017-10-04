// Evaluate the value of an arithmetic expression in Reverse Polish Notation.
//
//
//
// Valid operators are +, -, *, /. Each operand may be an integer or another expression.
//
//
//
// Some examples:
//
//   ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
//   ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6


const map = {
  '+': add,
  '-': subtract,
  '*': multiply,
  '/': divide
};
function evalRPN(tokens) {
  let stack = [];

  for (let n of tokens) {
    // if operator function exists, 
    // execute it on the two most recent numbers
    if (map[n]) {
      let fn = map[n];
      let y = stack.pop();
      let x = stack.pop();

      stack.push(fn(x, y));
    } else {
      stack.push(Number(n));
    }
  }

  return head(stack);
}

// helper methods
function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return parseInt(x / y);
}

function head(list) {
  return list[0];
}
