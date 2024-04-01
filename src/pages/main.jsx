import React from 'react'
import Portal from '../sections/portal'
import Dashboard from '../sections/dashboard/dashboard'

const Main = ({children}) => {
    return (
        <div className="flex flex-row ">
             <Portal />   
            <section className="flex">
                    <Dashboard />
                        {children}
            </section>
        </div>
    )
}

export default Main