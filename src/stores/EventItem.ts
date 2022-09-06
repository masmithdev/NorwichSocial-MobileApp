import { makeAutoObservable } from 'mobx';
import EventStore from './EventStore';

class EventItem {
  private _store: EventStore;
  private _id: string;

  public constructor(store: EventStore, id: string) {
    this._store = store;
    this._id = id;

    makeAutoObservable(this, {
      // overrides
      store: false,
      id: false,
    });
  }

  get store() {
    return this._store;
  }

  get id() {
    return this._id;
  }
}

export default EventItem;
