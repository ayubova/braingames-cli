
import run from '..';

export default () => {
  const rules = 'Answer "yes" if number even otherwise answer "no".';
  const gameArgs = () => {
    const question = Math.floor(Math.random() * 1000);
    const isEven = num => num % 2 === 0;
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    return [question, correctAnswer];
  };

  return run(rules, gameArgs);
};
