import run from '..';

const rules = 'What number is missing in this progression?\n';

const generateProgression = (first, d) => {
  let result = [first];
  for (let i = 0; i < 9; i += 1) {
    result = result.concat(result[result.length - 1] + d);
  }
  const missingIndex = Math.floor(Math.random() * 9);
  const missingElement = result[missingIndex];
  result[missingIndex] = '..';
  return [missingElement, result];
};

export default () => {
  const gameArgs = () => {
    const firstElement = Math.floor(Math.random() * 100);
    const delta = Math.floor(Math.random() * 10);

    const [correctAnswer, question] = generateProgression(firstElement, delta);

    return [question, String(correctAnswer)];
  };

  return run(rules, gameArgs);
};
