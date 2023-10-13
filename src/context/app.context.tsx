import React, { createContext, useState } from 'react';
import { User } from 'src/types/user.type';
import { getAccessTokenLS } from 'src/utils/auth';

interface AppContextInterface {
  isAuthenticated: boolean
  setIsAuthenticate: React.Dispatch<React.SetStateAction<boolean>>
  profile: User | null
}

const initialAppContext: AppContextInterface = {
  isAuthenticated: Boolean(getAccessTokenLS()),
  setIsAuthenticate: () => {},
  profile: null
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
