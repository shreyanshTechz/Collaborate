import React from 'react'
import { createContext ,useContext} from 'react'

export const ColorModeContext = createContext({
    themeMode: "light",
    darkTheme: ()=>{ 
    },
    lightTheme: ()=>{}
});
export default function useTheme() {
    return useContext(ColorModeContext)
}
export const ColorModeProvider = ColorModeContext.Provider