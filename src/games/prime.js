import readlineSync from 'readline-sync';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let divisor = 2; divisor <= Math.sqrt(number); divisor += 1) {
    if (number % divisor === 0) {
      return false;
    }
  }

  return true;
};

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const playPrimeGame = (name) => {
  console.log('Responde "yes" si el número dado es primo. De lo contrario, responde "no".');

  for (let round = 0; round < 3; round += 1) {
    const number = getRandomNumber(100);

    console.log(`Pregunta: ${number}`);

    const answer = readlineSync.question('Tu respuesta: ');
    const correctAnswer = isPrime(number) ? 'yes' : 'no';

    if (answer === correctAnswer) {
      console.log('¡Correcto!');
    } else {
      console.log(`'${answer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`);
      console.log(`¡Intentémoslo de nuevo, ${name}!`);
      return;
    }
  }

  console.log(`¡Felicidades, ${name}!`);
};

export default playPrimeGame;