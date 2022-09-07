import { makeAutoObservable } from 'mobx';
import RootStore from './RootStore';
import UserItem from './UserItem';

export type AddOrUpdateUserProp = {
  id: string;
  name?: string;
};

class UserStore {
  readonly rootStore: RootStore;

  public items: Array<UserItem> = [];

  public constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeAutoObservable(this, {
      // overrides
      rootStore: false,
    });
  }

  public find(id: string): UserItem | undefined {
    return this.items.find(x => x.id === id);
  }

  public addOrUpdate({ id, name }: any) {
    let user = this.items.find(x => x.id === id);
    if (!user) {
      user = new UserItem(this, id, name);
      this.items.push(user);
    }
    if (name !== user.name) {
      user.name = name;
    }
  }
}

export default UserStore;
