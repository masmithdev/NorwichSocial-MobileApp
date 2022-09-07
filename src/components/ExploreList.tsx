import React from 'react';
import { observer } from 'mobx-react-lite';
import CondensedListEventItem from './CondensedListEventItem';
import { View } from 'react-native';
import { useStore } from '../stores/StoreProvider';

type Props = {
  limit?: number;
};

const ExploreList = observer(({ limit = 1000 }: Props) => {
  const store = useStore();

  const items = store?.eventStore.items
    .slice(0, limit)
    .map(x => <CondensedListEventItem key={x.id} item={x} />);

  return <View>{items}</View>;
});

export default ExploreList;
