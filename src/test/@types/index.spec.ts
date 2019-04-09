import { Level, STYLES, Styles, Style } from '../../main';

describe('@types', () => {

  it('enum `Level` should be ordered', done => {
    const array: number[] = [Level.ALL, Level.DEBUG, Level.INFO, Level.WARN, Level.ERROR, Level.NONE];
    expect(Math.min(...array)).toBe(Level.ALL);
    expect(Math.max(...array)).toBe(Level.NONE);
    expect([Level.ALL, Level.DEBUG, Level.INFO, Level.WARN, Level.ERROR, Level.NONE].sort((a, b) => a - b)).toEqual(array);
    done();
  });

});
