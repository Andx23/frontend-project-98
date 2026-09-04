#!/usr/bin/env node

import askName from '../src/cli.js';
import playGcdGame from '../src/games/gcd.js';

console.log('¡Bienvenido a Brain Games!');

const name = askName();
playGcdGame(name);