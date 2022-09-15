import { makeAutoObservable } from 'mobx';

class AuthModel {
  public sessionToken: string = '';
  public userId: string = '';
  public userName: string = '';
  constructor() {
    makeAutoObservable(this, {
      // overrides
    });
  }
}

export default AuthModel;
