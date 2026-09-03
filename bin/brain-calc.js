#!/usr/bin/env node


import askName from '../src/cli.js';
import playCalcGame from '../src/games/calc.js';

console.log('¡Bienvenido a Brain Games!');

const name = askName();
playCalcGame(name);