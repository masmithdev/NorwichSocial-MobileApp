import React from 'react';
import { observer } from 'mobx-react-lite';
import CondensedListEventItem from './CondensedListEventItem';
import CondensedList from './CondensedList';
import { Text } from 'react-native';
import { useStore } from '../stores/StoreProvider';

type Props = {
  limit: number;
};

const CalendarList = observer(({ limit = 100 }: Props) => {
  const { eventStore } = useStore();

  const items = eventStore.items
    .filter(x => x.attending)
    .slice(0, limit)
    .map(x => <CondensedListEventItem key={x.id} item={x} />);

  return (
    <CondensedList
      items={items}
      fallback={<Text>You're not scheduled to attend anything yet.</Text>}
    />
  );
});

export default CalendarList;
