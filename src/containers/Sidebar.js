import React from "react"

import Drawer from "@material-ui/core/Drawer"
import Toolbar from "@material-ui/core/Toolbar"
import { makeStyles } from "@material-ui/core/styles"

import Section from "../components/sidebar/Section"

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
}))

function Sidebar(props) {
    let classes = useStyles()
    return (
        <Drawer 
            variant="permanent"
            className={classes.drawer}
            classes = {{
                paper: classes.drawerPaper
            }}
        >  
        <Toolbar/>
        <div className={classes.drawerContainer}>
            {
                props.overview.map((section) => { return(
                    <Section key={section._id.$oid} section={section}/>
                )})
            }
        </div>
        </Drawer>
    )
}

export default Sidebar