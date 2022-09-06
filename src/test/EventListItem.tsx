import React from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Text, View } from 'react-native';
import EventItemOld from '../stores/EventItemold';
import { action } from 'mobx';

type Props = {
  item: EventItemOld;
};

const EventListItem = observer(({ item }: Props) => {
  return (
    <View>
      <Text>{item.title}</Text>
      <Text>{item.startTimestamp}</Text>
      <Button
        onPress={action(() => {
          item.title = 'Updated';
        })}
        title="Update Title"
      />
    </View>
  );
});

export default EventListItem;
