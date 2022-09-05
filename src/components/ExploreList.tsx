import React from 'react';
import { useEventItemStore } from '../stores/EventItemStoreProvider';
import { observer } from 'mobx-react-lite';
import ListItem from './ListItem';
import { View } from 'react-native';

type Props = {
  limit?: number;
};

const ExploreList = observer(({ limit = 1000 }: Props) => {
  const itemStore = useEventItemStore();

  const items = itemStore.items
    .slice(0, limit)
    .map(x => <ListItem key={x.id} item={x} />);

  return <View>{items}</View>;
});

export default ExploreList;
