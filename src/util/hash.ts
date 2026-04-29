import * as crypto from 'crypto';

export const $SHA256 = (source: number | string, salt: string = ''): string => {
  const sourceString = String(source);
  return crypto
    .createHash('sha256')
    .update(`${sourceString}${salt}`)
    .digest('hex')
    .toUpperCase();
};
