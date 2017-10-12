
import run from '..';

const rule = 'What is the result of the expression?\n';
const calculate = (a, b, sign) => {
  switch (sign) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    default: return 'unknown value';
  }
};

export default () => {
  const gameArgs = () => {
    const num1 = Math.floor(Math.random() * 10);
    const num2 = Math.floor(Math.random() * 10);
    const operation = ['+', '-', '*'][Math.floor(Math.random() * 3)];
    const question = `${num1} ${operation} ${num2}`;
    const correctAnswer = String(calculate(num1, num2, operation));
    return [question, correctAnswer];
  };
  return run(rule, gameArgs);
};
