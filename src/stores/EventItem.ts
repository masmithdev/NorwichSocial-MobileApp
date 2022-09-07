import { makeAutoObservable } from 'mobx';
import EventStore from './EventStore';
import RsvpItem, { RsvpAttendanceStatusType, RsvpRoleType } from './RsvpItem';
import UserItem from './UserItem';

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

  public get attending(): boolean {
    if (this.store.rootStore.authUser.user) {
      const rsvp = this.rsvps.find(
        x => x.user.id === this.store.rootStore.authUser.user!.id,
      );
      return !!rsvp && rsvp.status === 'going';
    }
    return false;
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

  public addRSVP(
    user: UserItem,
    role: RsvpRoleType,
    status: RsvpAttendanceStatusType,
  ) {
    const newRSVP = new RsvpItem(this, user, role, status);
    this.rsvps.push(newRSVP);
  }

  public toggleGoing() {
    if (this.store.rootStore.authUser.user) {
      const rsvp = this.rsvps.find(
        x => x.user === this.store.rootStore.authUser.user!,
      );
      if (!rsvp) {
        this.addRSVP(this.store.rootStore.authUser.user, 'guest', 'going');
      } else {
        if (rsvp.status === 'going') {
          rsvp.status = 'not-going';
        } else {
          rsvp.status = 'going';
        }
      }
    }
  }
}

export default EventItem;
