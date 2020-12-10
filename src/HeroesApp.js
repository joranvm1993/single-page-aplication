import React from 'react'
import { AuthContext } from './auth/AuthContext'
import { AppRouter } from './routers/AppRouter'

export const HeroesApp = () => {
    return (
        <div>
            <AuthContext.Provider value={{  }}>
                <AppRouter />
            </AuthContext.Provider>
        </div>
    )
}
