import { makeAutoObservable } from 'mobx';
import EventItem from './EventItem';
import UserItem from './UserItem';

export type RsvpRoleType = 'main-host' | 'host' | 'guest';
export type RsvpAttendanceStatusType = 'going' | 'not-going' | 'watching';

class RsvpItem {
  readonly event: EventItem;
  readonly user: UserItem;

  public guests: number = 0;
  public role: RsvpRoleType;
  public status: RsvpAttendanceStatusType;

  public constructor(
    event: EventItem,
    user: UserItem,
    role: RsvpRoleType,
    status: RsvpAttendanceStatusType,
  ) {
    this.event = event;
    this.user = user;
    this.role = role;
    this.status = status;

    makeAutoObservable(this, {
      // overrides
      event: false,
      user: false,
    });
  }
}

export default RsvpItem;
