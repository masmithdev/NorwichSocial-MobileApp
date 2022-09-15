import { makeAutoObservable } from 'mobx';
import { AuthUserResponse, IAuthService } from './auth';
import AuthKeystore from './AuthKeystore';
import AuthModel from './AuthModel';

class AuthStore {
  public readonly auth: AuthModel = new AuthModel();
  public status: 'none' | 'initialising' | 'busy' | 'loggedIn' | 'loggedOut' =
    'none';

  private authService: IAuthService;
  private keystore: AuthKeystore;

  constructor(authService: IAuthService, keystore: AuthKeystore) {
    makeAutoObservable(this, {
      // overrides
    });

    this.authService = authService;
    this.keystore = keystore;
  }

  public *init() {
    // 1. check to see if there's an existing token.
    const refreshToken: string = yield this.keystore.getRefreshToken();
    if (!refreshToken) {
      this.status = 'loggedOut';
      return;
    }

    this.status = 'initialising';
    // 2. we have a token, now try to get the corresponding user from the server
    const authUser: AuthUserResponse = yield this.authService.getAuthUser(
      refreshToken,
    );
    if (!authUser || authUser.success === 'false') {
      this.status = 'loggedOut';
      return;
    }

    // 3. save the new token
    yield this.keystore.setRefreshToken(refreshToken);

    // 4. We have a user, so set it up

    this.auth.sessionToken = authUser.sessionToken;
    this.auth.userId = authUser.userId;
    this.auth.userName = authUser.userName;

    // 5. we're in!
    this.status = 'loggedIn';
  }

  public async logInWithCredentials(
    username: string,
    password: string,
  ): Promise<'success' | string> {
    this.setBusy();

    if (!username || !password) {
      this.logOut();
      return 'Invalid Credentials';
    }

    // 1. try logging in
    const authUser = await this.authService.login(username, password);
    if (!authUser || authUser.success === 'false') {
      this.logOut();
      return authUser?.message ?? 'This is unexpected';
    }

    // 2. we have a user, so set it up
    await this.keystore.setRefreshToken(authUser.refreshToken);
    this.setUser(authUser);
    this.logIn();
    return `Hello ${authUser.userName}`; // shoudn't hit this, but we need a return
  }

  private setUser(authUser: AuthUserResponse) {
    this.auth.sessionToken = authUser.sessionToken;
    this.auth.userId = authUser.userId;
    this.auth.userName = authUser.userName;
  }

  private setBusy() {
    this.status = 'busy';
  }

  private logIn() {
    this.status = 'loggedIn';
  }

  public *logOut() {
    this.status = 'loggedOut';
    yield this.keystore.clearRefreshToken();
    yield this.authService.logout();
  }
}

export default AuthStore;
