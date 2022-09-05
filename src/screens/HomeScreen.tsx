import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import Calendar from '../components/Calendar';
import Title from '../components/text/Title';
import useThemeStyles from '../globals/useThemeStyles';
import styles from './styles';

const HomeScreen = () => {
  const themeStyles = useThemeStyles();
  return (
    <View style={[styles.screenWrapper, themeStyles.backgroundPrimary]}>
      <SafeAreaView>
        <ScrollView style={{ width: '100%', height: '100%' }}>
          <Title>Hi, Michael</Title>
          <Calendar />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
