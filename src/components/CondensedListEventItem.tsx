import React from 'react';
import { observer } from 'mobx-react-lite';
import { StyleSheet, Text, View } from 'react-native';
import EventItem from '../stores/EventItem';

type Props = {
  item: EventItem;
};

const CondensedListEventItem = observer(({ item }: Props) => {
  return (
    <View style={styles.wrapper}>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row' }}>
          <View
            style={{
              backgroundColor: '#000',
              width: 60,
              aspectRatio: 1,
              marginTop: 0,
              marginRight: 10,
              borderRadius: 13,
            }}
          />
          <View style={{ flex: 1 }}>
            <Text
              style={{
                textTransform: 'uppercase',
                color: '#379',
                fontSize: 14,
                fontWeight: '700',
                marginBottom: 5,
              }}>
              Tomorrow 18:30
            </Text>
            <Text
              style={{
                color: '#000',
                fontSize: 16,
                fontWeight: '700',
                marginBottom: 3,
                lineHeight: 24,
              }}
              numberOfLines={2}>
              {item.title}
            </Text>
            <Text
              style={{
                color: '#777',
                fontSize: 15,
                fontWeight: '400',
                marginBottom: 10,
              }}>
              You and 3 others &bull; The Forum
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-start',
              }}>
              <View
                style={{
                  backgroundColor: '#eee',
                  paddingHorizontal: 8,
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 22,
                  borderRadius: 18,
                  marginRight: 5,
                }}>
                <Text>Walk</Text>
              </View>
              <View
                style={{
                  backgroundColor: '#eee',
                  paddingHorizontal: 8,
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 22,
                  borderRadius: 18,
                  marginRight: 5,
                }}>
                <Text>Chilled</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
});

export default CondensedListEventItem;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomColor: '#7777',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
