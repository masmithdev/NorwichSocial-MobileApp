import { observer } from 'mobx-react-lite';
import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import Calendar from '../components/Calendar';
import Title from '../components/text/Title';
import useThemeStyles from '../globals/useThemeStyles';
import { useStore } from '../stores/StoreProvider';
import styles from './styles';

const HomeScreen = observer(() => {
  const { authUser } = useStore();
  const themeStyles = useThemeStyles();

  const welcome = `Hi, ${authUser.user?.name}`;

  return (
    <View style={[styles.screenWrapper, themeStyles.backgroundPrimary]}>
      <SafeAreaView>
        <ScrollView style={{ width: '100%', height: '100%' }}>
          <Title>{welcome}</Title>
          <Calendar />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
});

export default HomeScreen;
