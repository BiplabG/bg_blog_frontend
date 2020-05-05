import React, { useEffect } from "react"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import { makeStyles } from "@material-ui/core/styles"

import Login from "../components/footer/auth/Login"
import Logout from "../components/footer/auth/Logout"

const useStyles = makeStyles((theme) => ({
    appBar:{
        top:'auto',
        bottom: 0,
        zIndex: theme.zIndex.drawer + 1,
    },
    footerContent:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center'
    }
}))

function Footer() {
    useEffect(() => {

    }, [sessionStorage.getItem('jti')])

    const classes = useStyles()
    return (
        <AppBar position="absolute" className={classes.appBar}>
            <Toolbar>
                <div className={classes.footerContent}>
                    Footer
                    { sessionStorage.getItem('jwt') ? 
                        <Logout/>
                        :<Login/>
                    }
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Footer