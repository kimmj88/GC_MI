import * as jwt from 'jsonwebtoken';

export interface JwtPayload {
  iss: string; // Issuer
  sub: string; // Subject (typically the user ID)
  aud: string; // Audience
  exp: number; // Expiration time
  nbf: number; // Not before time
  iat: number; // Issued at time
  jti: string; // JWT ID
  [key: string]: any; // 만약 추가적인 필드가 있을 경우
}

export const getAccountPayload = (accessToken: string): JwtPayload => {
  const userProfile: JwtPayload = jwt.decode(accessToken) as JwtPayload;
  return userProfile;
};
