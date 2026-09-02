import askName from '../src/cli.js';
import playEvenGame from '../src/games/even.js';

console.log('¡Bienvenido a Brain Games!');

const name = askName();
playEvenGame(name);