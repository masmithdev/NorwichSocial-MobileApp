import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import RootStore from './RootStore';

const StoreContext = createContext<RootStore | undefined>(undefined);

type Props = {
  children: ReactNode;
};

const StoreProvider = ({ children }: Props) => {
  const [store, setStore] = useState<RootStore | undefined>(undefined);

  useEffect(() => {
    const setup = () => {
      const newStore = new RootStore();
      setStore(newStore);
    };

    setup();
  }, []);

  if (!store) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Still Loading</Text>
      </View>
    );
  }

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;

export const useStore = () => React.useContext(StoreContext);
