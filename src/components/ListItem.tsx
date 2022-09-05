import React from 'react';
import { observer } from 'mobx-react-lite';
import { Text, TouchableHighlight, View } from 'react-native';
import EventItem from '../stores/EventItem';
import { action } from 'mobx';

type Props = {
  item: EventItem;
};

const ListItem = observer(({ item }: Props) => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
      }}>
      <Text style={{ width: 200 }}>{item.title}</Text>
      <TouchableHighlight
        onPress={action(() => (item.attending = !item.attending))}>
        <Text style={{}}>{item.attending ? 'Yes' : 'No'}</Text>
      </TouchableHighlight>
    </View>
  );
});

export default ListItem;
