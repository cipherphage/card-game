import { getCardStyles } from "./cardStyles";

describe('Get Cards programmatic style object', function() {
  it('should return a style object with rotation transform of 0 degrees', function() {
    const style = getCardStyles(0);
    expect(style.WebkitTransform).toStrictEqual('rotate(0deg)');
  });

  it('should return a style object with rotation transform of 20 degrees', function() {
    const style = getCardStyles(1);
    expect(style.WebkitTransform).toStrictEqual('rotate(20deg)');
  });

  it('should return a style object with rotation transform of 40 degrees', function() {
    const style = getCardStyles(2);
    expect(style.WebkitTransform).toStrictEqual('rotate(40deg)');
  });
});