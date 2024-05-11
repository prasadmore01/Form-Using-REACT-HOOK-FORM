import React, { ReactNode } from "react"
import Header from "../header/Header"

type props = {
    children:any
}

const Layout: React.FC<props> = ({children}) => {
    console.log("working Layout")

    return(
        <div>
            <Header/>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout