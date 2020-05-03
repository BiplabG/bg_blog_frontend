import React from "react"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    appBar:{
        top:'auto',
        bottom: 0,
        zIndex: theme.zIndex.drawer + 1,
    }
}))

function Footer() {
    const classes = useStyles()
    return (
        <AppBar position="absolute" className={classes.appBar}>
            <Toolbar>
                Footer
            </Toolbar>
        </AppBar>
    )
}

export default Footer