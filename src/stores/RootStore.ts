import { makeAutoObservable } from 'mobx';
import EventStore from './EventStore';
import UserStore from './UserStore';

class RootStore {
  private _eventStore: EventStore;
  private _userStore: UserStore;

  public constructor() {
    this._eventStore = new EventStore(this);
    this._userStore = new UserStore(this);

    makeAutoObservable(this, {
      // overrides
      eventStore: false,
      userStore: false,
    });
  }

  public get eventStore() {
    return this._eventStore;
  }

  public get userStore() {
    return this._userStore;
  }
}

export default RootStore;
