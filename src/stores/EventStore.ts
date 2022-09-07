import { makeAutoObservable } from 'mobx';
import EventItem from './EventItem';
import RootStore from './RootStore';

export interface IAddOrUpdateEventItem {
  id: string;
  title?: string;
  description?: string;
  startIsoTimestamp?: string;
  endIsoTimestamp?: string;
}

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

  public get calendarItems() {
    return this.items.filter(x => x.attending);
  }

  public addOrUpdateItems(source: Array<IAddOrUpdateEventItem>) {
    source.forEach(x => this.addOrUpdateItem(x));
  }

  public addOrUpdateItem(source: IAddOrUpdateEventItem) {
    const item = this.items.find(x => x.id === source.id);
    if (!item) {
      this.addItem(source);
    } else {
      this.updateItem(source);
    }
  }

  public addItem(source: IAddOrUpdateEventItem) {
    if (
      source.title &&
      source.description &&
      source.startIsoTimestamp &&
      source.endIsoTimestamp &&
      !this.items.find(x => x.id === source.id)
    ) {
      const item = new EventItem(
        this,
        source.id,
        source.title,
        source.description,
        source.startIsoTimestamp,
        source.endIsoTimestamp,
      );
      this.items.push(item);
    }
  }

  public updateItem(source: IAddOrUpdateEventItem) {
    const item = this.items.find(x => x.id === source.id);
    if (item) {
      if (source.title && source.title !== item.title) {
        item.title = source.title;
      }
      if (source.description && source.description !== item.description) {
        item.description = source.description;
      }
      if (
        source.startIsoTimestamp &&
        source.startIsoTimestamp !== item.startIsoTimestamp
      ) {
        item.startIsoTimestamp = source.startIsoTimestamp;
      }
      if (
        source.endIsoTimestamp &&
        source.endIsoTimestamp !== item.endIsoTimestamp
      ) {
        item.endIsoTimestamp = source.endIsoTimestamp;
      }
    }
  }
}

export default EventStore;
