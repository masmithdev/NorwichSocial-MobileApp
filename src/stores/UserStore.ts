import { makeAutoObservable } from 'mobx';
import RootStore from './RootStore';
import UserItem from './UserItem';

class UserStore {
  readonly rootStore: RootStore;

  public items: Array<UserItem> = [];

  public constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeAutoObservable(this, {
      // overrides
      rootStore: false,
    });
  }
}

export default UserStore;
