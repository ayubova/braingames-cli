import run from '..';

const rule = 'Find the greatest common divisor of given numbers.\n';

const findGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return findGcd(b, a % b);
};

export default () => {
  const gameArgs = () => {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    const question = `${num1} ${num2}`;
    const correctAnswer = String(findGcd(num1, num2));
    return [question, correctAnswer];
  };
  return run(rule, gameArgs);
};
