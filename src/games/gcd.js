import run from '..';

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.\n';
  const gameArgs = () => {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);

    const question = `${num1} ${num2}`;

    const findGcd = (a, b) => {
      if (!b) {
        return a;
      }

      return Math.abs(findGcd(b, a % b));
    };

    const correctAnswer = String(findGcd(num1, num2));
    return [question, correctAnswer];
  };

  return run(rules, gameArgs);
};
