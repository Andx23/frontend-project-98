import readlineSync from 'readline-sync';

const isEven = (number) => number % 2 === 0;

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const playEvenGame = (name) => {
  console.log('Responde "yes" si el número es par, de lo contrario responde "no".');

  for (let round = 0; round < 3; round += 1) {
    const number = getRandomNumber(100);

    console.log(`Pregunta: ${number}`);
    const answer = readlineSync.question('Tu respuesta: ');
    const correctAnswer = isEven(number) ? 'yes' : 'no';

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

export default playEvenGame;