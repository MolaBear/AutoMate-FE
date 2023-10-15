import jwt_decode from 'jwt-decode';

interface JwtPayload {
  RoleName: string;
  exp: number;
  UserId: number;
}

export function decodeJwtToken(token: string): JwtPayload | null {
  try {
    const decodedToken = jwt_decode<JwtPayload>(token);
    return decodedToken;
  } catch (error) {
    console.error('Error decoding JWT token:', error);
    return null;
  }
}
