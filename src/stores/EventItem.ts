import { makeAutoObservable } from 'mobx';
import EventStore from './EventStore';
import RsvpItem from './RsvpItem';

class EventItem {
  private _store: EventStore;
  private _id: string;

  rsvps: Array<RsvpItem> = [];

  public constructor(store: EventStore, id: string) {
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

  public get rsvpsGoing() {
    return this.rsvps.filter(x => x.status === 'going');
  }

  public get goingCount() {
    return (
      this.rsvpsGoing.length +
      this.rsvpsGoing.reduce((acc, item) => acc + item.guests, 0)
    );
  }
}

export default EventItem;
