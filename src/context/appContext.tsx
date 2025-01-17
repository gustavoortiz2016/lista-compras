import React, { createContext, useContext, useState } from 'react';
import _ from 'lodash';
import IApp from '../interfaces/IApp';
import textosApp from '../assets/idiomas/idiomas.json';

export interface AppContextProps {
    data: IApp | null;
    setIdioma: (idioma: string) => void;
    loading: boolean;
    error: any;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [idioma, setIdioma] = useState('en-us');
    const data = _.get(textosApp, idioma, null);
    const loading = false;
    const error = null;

    return (
        <AppContext.Provider value={{ data, setIdioma, loading, error }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};