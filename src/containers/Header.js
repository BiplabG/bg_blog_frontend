import React from "react"
import { Link } from "react-router-dom"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles( (theme) => ({
    appBar:{
        zIndex: theme.zIndex.drawer + 1,
    }
}))

function Header() {
    let classes = useStyles()
    return (
        <AppBar position="relative" className={classes.appBar}>
            <Toolbar>
                <Link to="/">Header</Link>
            </Toolbar>
        </AppBar>
    )
}

export default Header