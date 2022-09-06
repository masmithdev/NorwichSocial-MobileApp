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
    'Afternoon Walk in the city ' +
      (Math.random() * 1000 + '').substring(0, Math.random() * 20),
    Math.random() > 0.95,
    Math.random() * 1000,
    Math.random() * 1000,
  );
}
