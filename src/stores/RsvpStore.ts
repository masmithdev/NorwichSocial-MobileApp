import { makeAutoObservable } from 'mobx';
import RootStore from './RootStore';
import RsvpItem from './RsvpItem';

class RsvpStore {
  public items: Array<RsvpItem> = [];

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

export default RsvpStore;
