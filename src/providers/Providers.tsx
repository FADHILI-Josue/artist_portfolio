import { ReactNode, createContext, useContext, useEffect, useState } from "react";

interface DataContextType {
    mode: 'dark' | 'light',
    toggleMode: () => void
}

const dataContext = createContext<DataContextType | undefined>(undefined);


const Providers = ({ children }: { children: ReactNode }) => {
    const [mode, setMode] = useState<'dark' | 'light'>('dark');
    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
            setMode("dark");
        } else {
            setMode('light');
        }
    }, [])

    const toggleMode = () => {
        if (mode === 'dark') {
            localStorage.setItem('theme', 'light');
            setMode('light');
            document.documentElement.classList.remove('dark')

        }
        else {
            localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark')
            setMode('dark');
        }

    }

    return <dataContext.Provider value={{ mode, toggleMode }}>{children}</dataContext.Provider>
}

const useData = (): DataContextType => {
    const context = useContext(dataContext);
    if (context === undefined) {
        throw new Error('useColor must be used within a ColorProvider');
    }
    return context;
};

export { Providers, useData };
