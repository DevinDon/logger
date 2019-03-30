import { Logger, logger } from '../main';
import { Writable } from 'stream';

describe('logger', () => {

  let cusout: NodeJS.WritableStream;
  let cuserr: NodeJS.WritableStream;
  let out: string;
  let err: string;
  let customLogger: Logger;

  beforeAll(done => {
    cusout = new Writable({
      write(chunk, encoding, callback) {
        out = chunk.toString().trim();
        console.log('CSUOUT: ' + out);
        callback();
      }
    });
    cuserr = new Writable({
      write(chunk, encoding, callback) {
        err = chunk.toString().trim();
        console.error('CSUERR: ' + err);
        callback();
      }
    });
    customLogger = new Logger(cusout, cuserr);
    done();
  });

  it('method: log.', done => {
    const input1 = 'log';
    const input2 = 'message';
    expect((customLogger.log(input1), out)).toBe(input1);
    expect((customLogger.log(input2), out)).toBe(input2);
    expect((customLogger.log(input1, input2), out)).toBe(`${input1} ${input2}`);
    const spy = spyOn(logger, 'log');
    logger.log(input1, input2);
    expect(spy).toHaveBeenCalledWith(input1, input2);
    expect(spy).toHaveBeenCalledTimes(1);
    done();
  });

  it('method: debug.', done => {
    // const matcher = /\d+-\d+-\d+ \d+:\d+:\d+ \[DEBUG\] /;
    const matcher = (message: any) => new RegExp(`\d+-\d+-\d+ \d+:\d+:\d+ \[DEBUG\] ${message}`);
    const input1 = 'debug';
    const input2 = 'message';
    expect((customLogger.debug(input1), matcher(input1).test(out))).toBeTruthy();
    expect((customLogger.debug(input2), matcher(input2).test(out))).toBeTruthy();
    expect((customLogger.debug(input1, input2), matcher(`${input1} ${input2}`).test(out))).toBeTruthy();
    const spy = spyOn(logger, 'debug');
    logger.debug(input1, input2);
    expect(spy).toHaveBeenCalledWith(input1, input2);
    expect(spy).toHaveBeenCalledTimes(1);
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
