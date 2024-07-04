import React, { createContext, useState } from 'react';
import ProductApi from './API/ProductApi';

const GlobalState = createContext();

const GlobalProvider = ({ children }) => {
    const [token, setToken] = useState(false);
    const state = {
        token: [token, setToken],
        productApi: ProductApi()
    };

    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    );
};

export { GlobalState, GlobalProvider };
