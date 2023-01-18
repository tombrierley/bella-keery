import { createContext } from "react";

const SettingsContext = createContext({
  settings: null,
});

const SettingsProvider = ({ settings, children }) => {
  return (
    <SettingsContext.Provider
      value={{
        settings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsProvider, SettingsContext };
