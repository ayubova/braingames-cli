import run from '..';
import getRandom from '../random';

const rule = 'What number is missing in this progression?';

const generateProgression = (first) => {
  const delta = getRandom(10);
  let result = [first];
  const maxLength = 10;
  for (let i = 1; i < maxLength; i += 1) {
    result = result.concat(result[result.length - 1] + delta);
  }
  const missingIndex = getRandom(9);
  const missingElement = result[missingIndex];
  result[missingIndex] = '..';
  return [missingElement, result.join(' ')];
};

export default () => {
  const gameArgs = () => {
    const firstElement = getRandom(100);
    const [correctAnswer, question] = generateProgression(firstElement);

    return [question, String(correctAnswer)];
  };

  return run(rule, gameArgs);
};
