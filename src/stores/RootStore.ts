import { makeAutoObservable } from 'mobx';
import EventStore from './EventStore';
import UserStore from './UserStore';

class RootStore {
  readonly eventStore: EventStore;
  readonly userStore: UserStore;

  public constructor() {
    this.eventStore = new EventStore(this);
    this.userStore = new UserStore(this);

    makeAutoObservable(this, {
      // overrides
      eventStore: false,
      userStore: false,
    });
  }
}

export default RootStore;
