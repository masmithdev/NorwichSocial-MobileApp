import { makeAutoObservable } from 'mobx';
import UserStore from './UserStore';

class UserItem {
  readonly store: UserStore;
  readonly id: string = '';

  public constructor(store: UserStore, id: string) {
    this.store = store;
    this.id = id;

    makeAutoObservable(this, {
      // overrides
      store: false,
      id: false,
    });
  }
}

export default UserItem;
