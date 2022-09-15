import React, { createContext, useContext } from 'react';
import AppStore from '../../domain/AppStore';

const store = new AppStore();

const AppContext = createContext<AppStore>(store);

interface Props {
  children: React.ReactNode;
}

const AppProvider = ({ children }: Props) => {
  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

export default AppProvider;

export const useApp = () => {
  const context = useContext(AppContext);
  return context;
};
