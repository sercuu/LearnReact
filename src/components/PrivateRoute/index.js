import React from 'react'
import {Redirect, Route} from 'react-router-dom'

export const PrivateRoute = ({component: Component, ...rest})=> {
    return(
        <Route
            {...rest}
            render={ props =>
            localStorage.getItem('token') ? (
                <Component {...props}/>
            ) : (
                <Redirect push
                to = {{
                    pathname:'/login',
                    state:{from:props.location}
                }}
                />
                )
            }
        />
    )    
}