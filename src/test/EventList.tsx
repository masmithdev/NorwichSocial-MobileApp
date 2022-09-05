import React from 'react';
import { observer } from 'mobx-react-lite';
import { useEventItemStore } from '../stores/EventItemStoreProvider';
import EventListItem from './EventListItem';
import { View } from 'react-native';

const EventList = observer(() => {
  const store = useEventItemStore();

  const items = store.items.map(x => {
    return <EventListItem key={x.id} item={x} />;
  });

  return <View>{items}</View>;
});

export default EventList;
