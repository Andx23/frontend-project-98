import readlineSync from 'readline-sync';

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const index = getRandomNumber(operators.length);

  return operators[index];
};

const calculate = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return null;
  }
};

const playCalcGame = (name) => {
  console.log('¿Cuál es el resultado de la expresión?');

  for (let round = 0; round < 3; round += 1) {
    const firstNumber = getRandomNumber(100);
    const secondNumber = getRandomNumber(100);
    const operator = getRandomOperator();

    const expression = `${firstNumber} ${operator} ${secondNumber}`;
    const correctAnswer = calculate(firstNumber, secondNumber, operator);

    console.log(`Pregunta: ${expression}`);
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

export default playCalcGame;