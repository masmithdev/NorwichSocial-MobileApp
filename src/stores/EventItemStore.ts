import { action, computed, makeObservable, observable } from 'mobx';
import EventItemOld from './EventItemold';

class EventItemStore {
  items: EventItemOld[] = [];

  constructor() {
    makeObservable(this, {
      items: observable,
      insertOrUpdate: action,
      attendingItems: computed,
      setAttending: action,
    });
  }

  insertOrUpdate(
    id: string,
    title: string,
    attending: boolean,
    start: number,
    end: number,
  ) {
    let item = this.items.find(x => x.id === id);
    if (!item) {
      item = new EventItemOld({ id, title, attending, start, end });
      this.items.push(item);
    } else {
      action(() => {
        item!.attending = attending;
        item!.title = title;
        item!.startTimestamp = start;
        item!.endTimestamp = end;
      });
    }
  }

  get attendingItems() {
    return this.items
      .filter(x => x.attending === true)
      .sort((x, y) => x.startTimestamp - y.startTimestamp);
  }

  setAttending(id: string, attending: boolean) {
    const item = this.items.find(x => x.id === id);
    if (item) {
      item.attending = attending;
    }
  }
}

export default EventItemStore;
