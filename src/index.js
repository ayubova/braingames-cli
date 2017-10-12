import readlineSync from 'readline-sync';

export default (rule, args) => {
  console.log('Welcome to the Brain Games!');
  console.log(rule);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  const totalRounds = 3;
  for (let i = 1; i <= totalRounds; i += 1) {
    const [question, correctAnswer] = args();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
