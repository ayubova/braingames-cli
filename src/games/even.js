
import run from '..';

const rule = 'Answer "yes" if number even otherwise answer "no".';
const isEven = num => num % 2 === 0;

export default () => {
  const gameArgs = () => {
    const question = Math.floor(Math.random() * 1000);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return [question, correctAnswer];
  };

  return run(rule, gameArgs);
};
