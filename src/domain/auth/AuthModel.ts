import { makeAutoObservable } from 'mobx';

class AuthModel {
  constructor() {
    makeAutoObservable(this, {
      // overrides
    });
  }
}

export default AuthModel;
