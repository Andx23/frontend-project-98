import readlineSync from 'readline-sync';

const askName = () => {
  const name = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${name}!`);
};

export default askName;