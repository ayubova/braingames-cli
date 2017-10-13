import run from '..';
import getRandom from '../random';

const rule = 'What number is missing in this progression?';

const generateProgression = (first, difference) => {
  let result = [first];
  const maxLength = 10;
  for (let i = 1; i < maxLength; i += 1) {
    result = result.concat(result[result.length - 1] + difference);
  }
  const missingIndex = getRandom(9);
  const missingElement = result[missingIndex];
  result[missingIndex] = '..';
  return [missingElement, result.join(' ')];
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
