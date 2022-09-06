import { makeAutoObservable } from 'mobx';
import EventStore from './EventStore';
import RsvpStore from './RsvpStore';
import UserStore from './UserStore';

class RootStore {
  private _eventStore: EventStore;
  private _userStore: UserStore;
  private _rsvpStore: RsvpStore;

  public constructor() {
    this._eventStore = new EventStore(this);
    this._userStore = new UserStore(this);
    this._rsvpStore = new RsvpStore(this);

    makeAutoObservable(this, {
      // overrides
      eventStore: false,
      userStore: false,
      rsvpStore: false,
    });
  }

  public get eventStore() {
    return this._eventStore;
  }

  public get userStore() {
    return this._userStore;
  }

  public get rsvpStore() {
    return this._rsvpStore;
  }
}

export default RootStore;
