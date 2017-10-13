import run from '..';

export default () => {
  const rules = 'Balance the given number.\n';
  const gameArgs = () => {
    const num = Math.floor(Math.random() * 1000);

    const question = `${num}`;

    const balanceNumber = (number) => {
      const integers = String(number).split('').sort().map(value => Number(value));
      for (let i = 1; integers[integers.length - 1] - integers[0] > 1; i += 1) {
        integers[0] += 1;
        integers[integers.length - 1] = integers[integers.length - 1] - 1;
        integers.sort();
      }
      return integers.join('');
    };

    const correctAnswer = String(balanceNumber(num));
    return [question, correctAnswer];
  };

  return run(rules, gameArgs);
};
