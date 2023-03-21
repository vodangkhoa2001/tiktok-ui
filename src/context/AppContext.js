const { createContext, useState } = require('react');

export const AppContext = createContext({});
export const AppProvider = ({ children }) => {
    const [tippy, setTippy] = useState(false);
    return <AppContext.Provider value={{ tippy, setTippy }}>{children}</AppContext.Provider>;
};
