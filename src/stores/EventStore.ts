import { makeAutoObservable } from 'mobx';
import EventItem from './EventItem';
import RootStore from './RootStore';

class EventStore {
  public items: Array<EventItem> = [];

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

export default EventStore;
