import { makeAutoObservable } from 'mobx';
import EventItem from './EventItem';
import RsvpStore from './RsvpStore';
import UserItem from './UserItem';

class RsvpItem {
  private _store: RsvpStore;
  private _event: EventItem;
  private _user: UserItem;

  public constructor(store: RsvpStore, event: EventItem, user: UserItem) {
    this._store = store;
    this._event = event;
    this._user = user;

    makeAutoObservable(this, {
      // overrides
      store: false,
      event: false,
      user: false,
    });
  }

  public get store() {
    return this._store;
  }

  public get event() {
    return this._event;
  }

  public get user() {
    return this._user;
  }
}

export default RsvpItem;
