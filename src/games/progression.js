import run from '..';
import getRandom from '../random';

const rule = 'What number is missing in this progression?';

const generateProgression = (first, d) => {
  let result = [first];
  for (let i = 0; i < 9; i += 1) {
    result = result.concat(result[result.length - 1] + d);
  }
  const missingIndex = getRandom(9);
  const missingElement = result[missingIndex];
  result[missingIndex] = '..';
  return [missingElement, result];
};

export default () => {
  const gameArgs = () => {
    const firstElement = getRandom(100);
    const delta = getRandom(10);

    const [correctAnswer, question] = generateProgression(firstElement, delta);

    return [question, String(correctAnswer)];
  };

  return run(rule, gameArgs);
};
