import AuthDummyService from './auth/AuthDummyService';
import AuthKeystore from './auth/AuthKeystore';
import AuthStore from './auth/AuthStore';

class AppStore {
  public authStore: AuthStore;

  public constructor() {
    this.authStore = new AuthStore(new AuthDummyService(), new AuthKeystore());
  }
}

export default AppStore;
