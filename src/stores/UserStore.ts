import { makeAutoObservable } from 'mobx';
import RootStore from './RootStore';
import UserItem from './UserItem';

class UserStore {
  public items: Array<UserItem> = [];

  private _rootStore: RootStore;

  public constructor(rootStore: RootStore) {
    this._rootStore = rootStore;

    makeAutoObservable(this, {
      // overrides
      rootStore: false,
    });
  }

  public get rootStore() {
    return this._rootStore;
  }
}

export default UserStore;
