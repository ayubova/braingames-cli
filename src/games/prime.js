import run from '..';
import getRandom from '../random';

const rule = 'Answer "yes" if number is prime otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export default () => {
  const gameArgs = () => {
    const question = getRandom(100);
    const correctAnswer = isPrime(question) ? 'yes' : 'no';
    return [question, correctAnswer];
  };
  return run(rule, gameArgs);
};
