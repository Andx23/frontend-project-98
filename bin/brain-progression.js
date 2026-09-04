#!/usr/bin/env node

import askName from '../src/cli.js';
import playProgressionGame from '../src/games/progression.js';

console.log('¡Bienvenido a Brain Games!');

const name = askName();
playProgressionGame(name);