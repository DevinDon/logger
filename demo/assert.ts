import { Logger } from '../src';

for (let i = 100; i; i--) {
  new Logger()
    .assert(Math.round(Math.random()) === Math.round(Math.random()), 'same', 'different');
}
