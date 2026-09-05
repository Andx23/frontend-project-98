#!/usr/bin/env node

import askName from '../src/cli.js';
import playPrimeGame from '../src/games/prime.js';

console.log('¡Bienvenido a Brain Games!');

const name = askName();
playPrimeGame(name);