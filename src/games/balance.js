import run from '..';
import getRandom from '../random';

const rule = 'Balance the given number.';

const balanceNumber = (number) => {
  const integers = String(number).split('').sort().map(value => Number(value));
  const deltaElements = arr => arr[arr.length - 1] - arr[0];
  for (let i = 1; deltaElements(integers) > 1; i += 1) {
    integers[0] += 1;
    integers[integers.length - 1] -= 1;
    integers.sort();
  }
  return integers.join('');
};

export default () => {
  const gameArgs = () => {
    const num = getRandom(1000);
    const question = String(num);
    const correctAnswer = String(balanceNumber(num));
    return [question, correctAnswer];
  };
  return run(rule, gameArgs);
};
