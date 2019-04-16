import { Level } from '../../main';

describe('@types', () => {

  it('enum `Level` should be ordered', done => {
    const array: number[] = [Level.ALL, Level.DEBUG, Level.INFO, Level.WARN, Level.ERROR, Level.OFF];
    expect(Math.min(...array)).toBe(Level.ALL);
    expect(Math.max(...array)).toBe(Level.OFF);
    expect([Level.ALL, Level.DEBUG, Level.INFO, Level.WARN, Level.ERROR, Level.OFF].sort((a, b) => a - b)).toEqual(array);
    done();
  });

});
