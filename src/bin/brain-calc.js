import readlineSync from 'readline-sync';

export const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  for (let i = 1; i <= 3; i + 1) {
    const number = Math.floor(Math.random() * 1000);
    const userAnswer = readlineSync.question(`Question: ${number}\nYour answer: `);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${userName}!`);
      return;
    }
    if (i === 3 && correctAnswer === userAnswer) {
      console.log(`Congratulations, ${userName}!`);
    } else {
      console.log('Correct!');
    }
  }
};

