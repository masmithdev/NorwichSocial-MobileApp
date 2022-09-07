import { makeAutoObservable } from 'mobx';
import UserStore from './UserStore';

class UserItem {
  readonly store: UserStore;
  readonly id: string = '';

  public name: string;

  public constructor(store: UserStore, id: string, name: string) {
    this.store = store;
    this.id = id;
    this.name = name;

    makeAutoObservable(this, {
      // overrides
      store: false,
      id: false,
    });
  }
}

export default UserItem;
