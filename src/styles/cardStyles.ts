export const getCardStyles = function(index: number) {
  const transform = 'rotate(' + (20 * index) + 'deg)';

  const style = {
      'WebkitTransform': transform,
      'MozTransform': transform,
      'OTransform': transform,
      'msTransform': transform,
      'transform': transform
  } as React.CSSProperties;

  return style
};