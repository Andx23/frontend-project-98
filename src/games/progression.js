import readlineSync from 'readline-sync';

const generateProgression = (start, step, length) => {
  const progression = [];

  for (let index = 0; index < length; index += 1) {
    progression.push(start + index * step);
  }

  return progression;
};

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const hideNumber = (progression) => {
  const hiddenIndex = getRandomNumber(progression.length);
  const answer = progression[hiddenIndex];

  const hiddenProgression = [...progression];
  hiddenProgression[hiddenIndex] = '..';

  return {
    progression: hiddenProgression,
    answer,
  };
};

const generateRandomProgression = () => {
  const start = getRandomNumber(20);
  const step = getRandomNumber(10) + 1;

  const progression = generateProgression(start, step, 10);

  return hideNumber(progression);
};

const playProgressionGame = (name) => {
  console.log('¿Qué número falta en la progresión?');

  for (let round = 0; round < 3; round += 1) {
    const game = generateRandomProgression();

    console.log(`Pregunta: ${game.progression.join(' ')}`);

    const answer = readlineSync.question('Tu respuesta: ');

    if (Number(answer) === game.answer) {
      console.log('¡Correcto!');
    } else {
      console.log(`'${answer}' es una respuesta incorrecta ;(. La respuesta correcta era '${game.answer}'.`);
      console.log(`¡Intentémoslo de nuevo, ${name}!`);
      return;
    }
  }

  console.log(`¡Felicidades, ${name}!`);
};

export default playProgressionGame;