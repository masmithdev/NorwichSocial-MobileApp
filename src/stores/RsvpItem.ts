import { makeAutoObservable } from 'mobx';
import EventItem from './EventItem';
import UserItem from './UserItem';

export type RsvpRoleType = 'main-host' | 'host' | 'guest';
export type RsvpAttendanceStatusType = 'going' | 'not-going' | 'watching';
export type UpdateRsvpItemType = {
  role?: RsvpRoleType;
  status?: RsvpAttendanceStatusType;
  guests?: number;
};

class RsvpItem {
  private _event: EventItem;
  private _user: UserItem;

  public guests: number = 0;
  public role: RsvpRoleType;
  public status: RsvpAttendanceStatusType;

  public constructor(
    event: EventItem,
    user: UserItem,
    role: RsvpRoleType,
    status: RsvpAttendanceStatusType,
  ) {
    this._event = event;
    this._user = user;
    this.role = role;
    this.status = status;

    makeAutoObservable(this, {
      // overrides
      event: false,
      user: false,
    });
  }

  public get event() {
    return this._event;
  }

  public get user() {
    return this._user;
  }
}

export default RsvpItem;
