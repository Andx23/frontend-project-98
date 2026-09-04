import readlineSync from 'readline-sync';

const calculateGcd = (a, b) => {
  let firstNumber = a;
  let secondNumber = b;

  while (secondNumber !== 0) {
    const remainder = firstNumber % secondNumber;
    firstNumber = secondNumber;
    secondNumber = remainder;
  }

  return firstNumber;
};

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const playGcdGame = (name) => {
  console.log('Encuentra el máximo común divisor de los números dados.');

  for (let round = 0; round < 3; round += 1) {
    const firstNumber = getRandomNumber(100);
    const secondNumber = getRandomNumber(100);

    const correctAnswer = calculateGcd(firstNumber, secondNumber);

    console.log(`Pregunta: ${firstNumber} ${secondNumber}`);
    const answer = readlineSync.question('Tu respuesta: ');

    if (Number(answer) === correctAnswer) {
      console.log('¡Correcto!');
    } else {
      console.log(`'${answer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`);
      console.log(`¡Intentémoslo de nuevo, ${name}!`);
      return;
    }
  }

  console.log(`¡Felicidades, ${name}!`);
};

export default playGcdGame;