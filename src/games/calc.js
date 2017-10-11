
import readlineSync from 'readline-sync';
import run from '..';

export default () => {
  const rulesCalc = 'What is the result of the expression?'; // в общий модуль как переменную rules
  const num1 = Math.floor(Math.random() * 10);
  const num2 = Math.floor(Math.random() * 10);
  const operation = ['+', '-', '*'][Math.floor(Math.random() * 3)];
  const questionCalc = `${num1} ${operation} ${num2}`;
  const calculate = (a, b, sign) => {
    switch (sign) {
      case '+': return a + b;
      case '-': return a - b;
      case '*': return a * b;
      default: return 'unknown value';
    }
  };
  const correctAnswerCalc = String(calculate(num1, num2, operation));
  return run(rulesCalc, questionCalc, correctAnswerCalc);
};
