import { ConvertRatingToStarsPipe } from './convert-rating-to-stars.pipe';

describe('ConvertRatingToStarsPipe', () => {
  it('create an instance', () => {
    const pipe = new ConvertRatingToStarsPipe();
    expect(pipe).toBeTruthy();
  });
});
