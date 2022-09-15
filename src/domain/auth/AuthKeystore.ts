import * as Keychain from 'react-native-keychain';

class AuthKeystore {
  public async getRefreshToken(): Promise<string> {
    const credentials = await Keychain.getGenericPassword({
      service: 'REFRESH_TOKEN',
    });
    if (credentials) {
      return credentials.password;
    }
    return '';
  }

  public async setRefreshToken(token: string) {
    await Keychain.setGenericPassword('app', token, {
      service: 'REFRESH_TOKEN',
    });
  }

  public async clearRefreshToken() {
    await Keychain.resetGenericPassword({ service: 'REFRESH_TOKEN' });
  }
}

export default AuthKeystore;
