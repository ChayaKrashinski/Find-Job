import { ProfessionNamePipe } from './profession-name.pipe';

describe('ProfessionNamePipe', () => {
  it('create an instance', () => {
    const pipe = new ProfessionNamePipe();
    expect(pipe).toBeTruthy();
  });
});
