import React from 'react';
import { StyleSheet, View } from 'react-native';
import useThemeStyles from '../globals/useThemeStyles';
import CalendarList from './CalendarList';
import Card from './Card';
import CardHeader from './text/CardHeader';

const Calendar = () => {
  const themeStyles = useThemeStyles();
  return (
    <View style={styles.wrapper}>
      <Card style={themeStyles.backgroundCard}>
        <View style={styles.main}>
          <CardHeader>Your Calendar</CardHeader>
          <CalendarList limit={10} />
        </View>
      </Card>
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  main: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  wrapper: {
    marginHorizontal: 20,
  },
});
