import React from 'react';
import { ScrollView, View } from 'react-native';
import ExploreList from '../components/ExploreList';
import useThemeStyles from '../globals/useThemeStyles';
import styles from './styles';

const ExploreScreen = () => {
  const themeStyles = useThemeStyles();
  return (
    <View style={[styles.screenWrapper, themeStyles.backgroundPrimary]}>
      <ScrollView style={{ width: '100%' }}>
        <View>
          <ExploreList />
        </View>
      </ScrollView>
    </View>
  );
};

export default ExploreScreen;
