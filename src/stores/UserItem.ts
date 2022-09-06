import { makeAutoObservable } from 'mobx';
import UserStore from './UserStore';

class UserItem {
  private _store: UserStore;
  private _id: string = '';

  public constructor(store: UserStore, id: string) {
    this._store = store;
    this._id = id;

    makeAutoObservable(this, {
      // overrides
      store: false,
      id: false,
    });
  }

  public get store() {
    return this._store;
  }

  public get id() {
    return this._id;
  }
}

export default UserItem;
