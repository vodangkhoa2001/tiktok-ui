const { createContext, useState } = require('react');

const theme = createContext('light');
function AppContext({ children }) {
    const [isLight, setIsLight] = useState(true);
    return <AppContext.Provider value={theme}>{children}</AppContext.Provider>;
}

export default AppContext;
