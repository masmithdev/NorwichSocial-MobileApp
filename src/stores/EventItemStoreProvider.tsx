import React, { ReactNode } from 'react';
import EventItemStore from './EventItemStore';

const eventItemStore = new EventItemStore();

const EventItemStoreContext = React.createContext(eventItemStore);

type Props = {
  children: ReactNode;
};

const EventItemStoreProvider = ({ children }: Props) => {
  return (
    <EventItemStoreContext.Provider value={eventItemStore}>
      {children}
    </EventItemStoreContext.Provider>
  );
};

export default EventItemStoreProvider;

export const useEventItemStore = () => React.useContext(EventItemStoreContext);

for (let i: number = 0; i < 100; i++) {
  eventItemStore.insertOrUpdate(
    Math.random() * 1000 + '',
    'Afternoon Walk in the city' + Math.random() * 1000,
    false,
    Math.random() * 1000,
    Math.random() * 1000,
  );
}
