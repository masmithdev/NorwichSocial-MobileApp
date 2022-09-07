import { makeAutoObservable } from 'mobx';
import EventStore from './EventStore';
import RsvpItem from './RsvpItem';

class EventItem {
  readonly store: EventStore;
  readonly id: string;

  public rsvps: Array<RsvpItem> = [];
  public title: string = '';
  public description: string = '';
  public startIsoTimestamp: string = '';
  public endIsoTimestamp: string = '';

  public constructor(
    store: EventStore,
    id: string,
    title: string,
    description: string,
    startIsoTimestamp: string,
    endIsoTimestamp: string,
  ) {
    this.store = store;
    this.id = id;
    this.title = title;
    this.description = description;
    this.startIsoTimestamp = startIsoTimestamp;
    this.endIsoTimestamp = endIsoTimestamp;

    makeAutoObservable(this, {
      // overrides
      store: false,
      id: false,
    });
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
