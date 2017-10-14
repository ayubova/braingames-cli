import run from '..';
import getRandom from '../random';

const rule = 'Answer "yes" if number is prime otherwise answer "no".';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  const iter = (divisor) => {
    if (number / 2 < divisor) {
      return true;
    }
    if (number % divisor === 0) {
      return false;
    }
    return iter(divisor + 1);
  };
  return iter(2);
};

export default () => {
  const gameArgs = () => {
    const question = getRandom(100);
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    return [question, correctAnswer];
  };
  return run(rule, gameArgs);
};
