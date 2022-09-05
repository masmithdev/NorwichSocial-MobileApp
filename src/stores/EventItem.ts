import { computed, makeObservable, observable } from 'mobx';

type ConstructorParams = {
  id: string;
  title: string;
  attending: boolean;
  start: number;
  end: number;
};

class EventItem {
  id: string = '';
  title: string = '';
  description: string = '';
  attending: boolean = false;
  startTimestamp: number = 0;
  endTimestamp: number = 0;

  constructor({ id, title, attending, start, end }: ConstructorParams) {
    makeObservable(this, {
      title: observable,
      attending: observable,
      description: observable,
      startTimestamp: observable,
      endTimestamp: observable,
      start: computed,
      end: computed,
    });

    this.id = id;
    this.title = title;
    this.attending = attending;
    this.startTimestamp = start;
    this.endTimestamp = end;
  }

  get start(): Date {
    return new Date(this.startTimestamp);
  }

  get end(): Date {
    return new Date(this.endTimestamp);
  }
}

export default EventItem;
