import { Logger } from '../main';

for (let i = 100; i; i--) {
  new Logger('default')
    .assert(Math.round(Math.random()) === Math.round(Math.random()), 'same', 'different');
}
