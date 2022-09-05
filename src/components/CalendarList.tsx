import React from 'react';
import { useEventItemStore } from '../stores/EventItemStoreProvider';
import { observer } from 'mobx-react-lite';
import ListItem from './ListItem';
import { Text, View } from 'react-native';

type Props = {
  limit: number;
};

const CalendarList = observer(({ limit = 100 }: Props) => {
  const { attendingItems } = useEventItemStore();

  const items = attendingItems
    .slice(0, limit)
    .map(x => <ListItem key={x.id} item={x} />);

  if (items && items.length > 0) {
    return <View>{items}</View>;
  }
  return <Text>You're not attending anything</Text>;
});

export default CalendarList;
