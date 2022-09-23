// index.js
import './styles/style.scss';
import { printMessage } from './scripts/script.ts';

const user = 'susan';
console.log(`hello ${user}, welcome to your npm project!`);

printMessage(user);
printMessage(['susan', 'eric', 'john']);
