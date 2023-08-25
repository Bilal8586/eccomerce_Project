"use client"

import {SessionProvider} from 'next-auth/react'
const SesionProvider =({children})=>{
    return(
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default SesionProvider