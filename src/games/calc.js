import run from '..';
import getRandom from '../random';

const rule = 'What is the result of the expression?';
const calculate = (a, b, sign) => {
  switch (sign) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    default: return 'unknown value';
  }
};

const operations = ['+', '-', '*'];

export default () => {
  const gameArgs = () => {
    const num1 = getRandom(100);
    const num2 = getRandom(100);
    const operation = operations[getRandom(3)];
    const question = `${num1} ${operation} ${num2}`;
    const correctAnswer = String(calculate(num1, num2, operation));
    return [question, correctAnswer];
  };
  return run(rule, gameArgs);
};
