import React, { createContext, useState } from 'react';
import { getAccessTokenLS } from 'src/utils/auth';

interface AppContextInterface {
  isAuthenticated: boolean;
  setIsAuthenticate: React.Dispatch<React.SetStateAction<boolean>>;
}

const initialAppContext: AppContextInterface = {
  isAuthenticated: Boolean(getAccessTokenLS()),
  setIsAuthenticate: () => {}
};

export const AppContext = createContext<AppContextInterface>(initialAppContext);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticate] = useState<boolean>(
    initialAppContext.isAuthenticated
  );

  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticate
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
