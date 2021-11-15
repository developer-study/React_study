import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export default function FuncThemedButton(props) {
    const theme = useContext(ThemeContext);
    
    return (
        <button 
                {...props} 
                style={{ backgroundColor: theme.background, color: theme.foreground }}>
                Button
            </button>
    )
}
