import { makeAutoObservable } from 'mobx';
import AuthUser from './AuthUser';
import EventStore from './EventStore';
import UserStore from './UserStore';

class RootStore {
  readonly eventStore: EventStore;
  readonly userStore: UserStore;

  public authUser: AuthUser;

  public constructor() {
    this.eventStore = new EventStore(this);
    this.userStore = new UserStore(this);
    this.authUser = new AuthUser(this);

    makeAutoObservable(this, {
      // overrides
      eventStore: false,
      userStore: false,
      authUser: false,
    });
  }
}

export default RootStore;
