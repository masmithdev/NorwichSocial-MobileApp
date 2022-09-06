import React, { ReactNode } from 'react';
import { View } from 'react-native';

interface Props {
  items?: Array<ReactNode>;
  fallback?: React.ReactNode;
}

const CondensedList = ({ items, fallback }: Props) => {
  if (items && items.length > 0) {
    return <View>{items}</View>;
  } else if (fallback) {
    return <View>{fallback}</View>;
  } else {
    return null;
  }
};

export default CondensedList;
