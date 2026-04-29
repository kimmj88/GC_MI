export const $makeObj = (
  path: string,
  value: any,
  seperator: string = '.',
): any => {
  return path.split(seperator).reduceRight(
    (obj, item) => ({
      [item]: obj,
    }),
    value,
  );
};
