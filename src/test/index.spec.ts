import { Logger } from '../main';
import { Writable } from 'stream';
import { Level } from '../main/@types';

describe('logger', () => {

  let cusout: Writable;
  let cuserr: Writable;
  let out: string;
  let err: string;
  let testLogger: Logger;

  beforeAll(done => {
    cusout = new Writable({
      write(chunk, encoding, callback) {
        out = chunk.toString().trim();
        // console.log('CSUOUT: ' + out);
        callback();
      }
    });
    cuserr = new Writable({
      write(chunk, encoding, callback) {
        err = chunk.toString().trim();
        // console.error('CSUERR: ' + err);
        callback();
      }
    });
    testLogger = new Logger({
      stdout: cusout,
      stderr: cuserr,
      colorful: false,
      level: Level.ALL,
      name: 'test'
    });
    done();
  });

  beforeEach(done => {
    testLogger.setLevel(Level.ALL);
    out = '';
    err = '';
    done();
  });

  it('default logger & test logger should be created', done => {
    expect(Logger.getLogger()).toBeDefined();
    expect(Logger.getLogger() instanceof Logger).toBeTruthy();
    expect(Logger.getLogger('test')).toBeDefined();
    expect(Logger.getLogger('test') instanceof Logger).toBeTruthy();
    done();
  });

  it('assert method should output correctly', done => {
    const matcherTrue = /\d+-\d+-\d+ \d+:\d+:\d+ \[ASSERT\] same/;
    const matcherFalse = /\d+-\d+-\d+ \d+:\d+:\d+ \[ASSERT\] different/;
    // const matcher = (text: string) => /\d+-\d+-\d+ \d+:\d+:\d+ \[ASSERT\] ${}/;
    expect((testLogger.assert(true, 'same', 'different'), matcherTrue.test(out))).toBeTruthy();
    expect((testLogger.assert(false, 'same', 'different'), matcherFalse.test(err))).toBeTruthy();
    done();
  });

  it('debug method should output correctly when level is not higher than `DEBUG`', done => {
    const matcher = /\d+-\d+-\d+ \d+:\d+:\d+ \[DEBUG \] .*/;
    // const matcher = (message: any) => new RegExp(`\d+-\d+-\d+ \d+:\d+:\d+ \[DEBUG \] ${message}`);
    const input1 = 'debug';
    const input2 = 'message';
    testLogger.setLevel(Level.ALL);
    expect((testLogger.debug(input1), matcher.test(out))).toBeTruthy();
    testLogger.setLevel(Level.DEBUG);
    expect((testLogger.debug(input2), matcher.test(out))).toBeTruthy();
    expect((testLogger.debug(input1, input2), matcher.test(out))).toBeTruthy();
    const spy = spyOn(testLogger, 'debug');
    testLogger.debug(input1, input2);
    expect(spy).toHaveBeenCalledWith(input1, input2);
    expect(spy).toHaveBeenCalledTimes(1);
    done();
  });

  it('debug method should not output when level is higher than `DEBUG`', done => {
    testLogger.setLevel(Level.NONE);
    expect((testLogger.debug('debug should not output anything'), out)).toBe('');
    testLogger.setLevel(Level.ERROR);
    expect((testLogger.debug('debug should not output anything'), out)).toBe('');
    testLogger.setLevel(Level.WARN);
    expect((testLogger.debug('debug should not output anything'), out)).toBe('');
    testLogger.setLevel(Level.INFO);
    expect((testLogger.debug('debug should not output anything'), out)).toBe('');
    done();
  });

  // it('should print debug message', done => {
  //   const text = 'debug';
  //   logger.debug(text);
  //   done();
  // });

  // it('should print info message', done => {
  //   const text = 'info';
  //   logger.info(text);
  //   done();
  // });

  // it('should print warn message', done => {
  //   const text = 'warn';
  //   logger.warn(text);
  //   done();
  // });

  // it('should print error message', done => {
  //   const text = 'error';
  //   logger.error(text);
  //   done();
  // });

});
