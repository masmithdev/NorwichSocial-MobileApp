import { makeAutoObservable } from 'mobx';
import RootStore from './RootStore';
import UserItem from './UserItem';

class AuthUser {
  readonly rootStore: RootStore;
  public user: UserItem | undefined;

  public constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.user = undefined;
    makeAutoObservable(this, {
      // exceptions
      rootStore: false,
    });
  }

  public login() {
    const id = 'somethingRandomForNow';
    this.user = this.rootStore.userStore.find(id);
    if (!this.user) {
      this.user = new UserItem(this.rootStore.userStore, id, 'Michael');
      this.rootStore.userStore.items.push(this.user);
    }
  }
}

export default AuthUser;
