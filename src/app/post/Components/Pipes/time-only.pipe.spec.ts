import { TimeOnlyPipe } from './time-only.pipe';

describe('TimeOnlyPipe', () => {
  it('create an instance', () => {
    const pipe = new TimeOnlyPipe();
    expect(pipe).toBeTruthy();
  });
});
