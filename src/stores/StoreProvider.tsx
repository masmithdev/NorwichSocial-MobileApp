import React, { createContext, ReactNode, useEffect } from 'react';
import { IAddOrUpdateEventItem } from './EventStore';
import RootStore from './RootStore';

const store = new RootStore();

const StoreContext = createContext<RootStore>(store);

type Props = {
  children: ReactNode;
};

const StoreProvider = ({ children }: Props) => {
  useEffect(() => {
    const setup = () => {
      store.eventStore.addOrUpdateItems(eventSeed);
      store.authUser.login();
    };

    setup();
  }, []);

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;

export const useStore = () => React.useContext(StoreContext);

const eventSeed: Array<IAddOrUpdateEventItem> = [
  {
    id: '1',
    title: 'Event 1 looks good!',
    description: 'A super great event for you to join',
    startIsoTimestamp: '2022-09-23T18:30:00:000Z',
    endIsoTimestamp: '2022-09-23T21:00:00:000Z',
  },
  {
    id: '2',
    title: 'Event 2 looks good!',
    description: 'A super great event for you to join',
    startIsoTimestamp: '2022-09-23T18:30:00:000Z',
    endIsoTimestamp: '2022-09-23T21:00:00:000Z',
  },
  {
    id: '3',
    title: 'Event 3 looks good!',
    description: 'A super great event for you to join',
    startIsoTimestamp: '2022-09-23T18:30:00:000Z',
    endIsoTimestamp: '2022-09-23T21:00:00:000Z',
  },
  {
    id: '4',
    title: 'Event 4 looks good!',
    description: 'A super great event for you to join',
    startIsoTimestamp: '2022-09-23T18:30:00:000Z',
    endIsoTimestamp: '2022-09-23T21:00:00:000Z',
  },
  {
    id: '5',
    title: 'Event 5 looks good!',
    description: 'A super great event for you to join',
    startIsoTimestamp: '2022-09-23T18:30:00:000Z',
    endIsoTimestamp: '2022-09-23T21:00:00:000Z',
  },
  {
    id: '6',
    title: 'Event 6 looks good!',
    description: 'A super great event for you to join',
    startIsoTimestamp: '2022-09-23T18:30:00:000Z',
    endIsoTimestamp: '2022-09-23T21:00:00:000Z',
  },
];
