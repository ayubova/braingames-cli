import readlineSync from 'readline-sync';

export const brainGames = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};


const play = (rulesCalc, questionCalc, correctAnswerCalc) => {
  console.log('Welcome to the Brain Games!');
  console.log(rulesCalc);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  for (let i = 1; i <= 3; i += 1) {
    const question = questionCalc;
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    console.log('Your answer: ');
    const correctAnswer = correctAnswerCalc;
    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default (rules, question, correctAnswer) =>
  play(rules, question, correctAnswer);
