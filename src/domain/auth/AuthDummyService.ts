import { IAuthService, AuthUserResponse } from './auth';

const dummyTokens = ['1', '2', '3', '4', '5'];

class AuthDummyService implements IAuthService {
  async logout(): Promise<boolean> {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        resolve(true);
        // pretend something is happening on the serverl
      }, 1000); // pretend this is a slow server
    });
  }

  public async login(
    username: string,
    password: string,
  ): Promise<AuthUserResponse> {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        if (username === 'Michael' && password === 'Password') {
          resolve({
            success: 'true',
            userId: '00001',
            userName: 'Michael',
            refreshToken: dummyTokens[0],
            sessionToken: 'anythingreally',
            message: "You're in!",
          });
        } else {
          resolve({
            success: 'false',
            userId: '',
            userName: '',
            refreshToken: '',
            sessionToken: '',
            message: 'Unknown credentials',
          });
        }
      }, 1000); // pretend this is a slow server
    });
  }

  public async getAuthUser(token: string): Promise<AuthUserResponse> {
    return new Promise((resolve, _reject) => {
      setTimeout(() => {
        let resultToken = token;
        let i = dummyTokens.indexOf(resultToken);
        if (!i || i >= dummyTokens.length - 1) {
          resultToken = dummyTokens[0];
        } else {
          resultToken = dummyTokens[++i];
        }
        resolve({
          success: 'true',
          userId: '00001',
          userName: 'Michael',
          refreshToken: resultToken,
          sessionToken: 'anythingreally',
        });
      }, 1000); // pretend this is a slow server
    });
  }
}

export default AuthDummyService;
