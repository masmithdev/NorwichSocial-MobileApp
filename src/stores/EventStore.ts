import { makeAutoObservable } from 'mobx';
import EventItem from './EventItem';
import RootStore from './RootStore';

class EventStore {
  readonly rootStore: RootStore;

  public items: Array<EventItem> = [];

  public constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeAutoObservable(this, {
      // overrides
      rootStore: false,
    });
  }
}

export default EventStore;
