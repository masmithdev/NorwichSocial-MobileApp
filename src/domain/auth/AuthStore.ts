import { makeAutoObservable } from 'mobx';
import { IAuthService } from './auth';
import AuthModel from './AuthModel';

class AuthStore {
  public readonly authModel: AuthModel = new AuthModel();

  private authService: IAuthService;

  constructor(authService: IAuthService) {
    makeAutoObservable(this, {
      // overrides
      authModel: false,
    });

    this.authService = authService;
  }
}

export default AuthStore;
