import React from "react"
import { Link } from "react-router-dom"

import ExpansionPanel from "@material-ui/core/ExpansionPanel"
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary"
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import List from "@material-ui/core/List"

import BlogTitle from "./BlogTitle"

function Series(props){
    return(
        <ExpansionPanel>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
            >
                <Link to={"/series/".concat(props.se._id.$oid)}>{props.se.name}</Link>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <List>
                    {
                        props.se.blogs.map((blog) => <BlogTitle blog={blog} key={blog._id.$oid}/>)
                    }
                </List>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}

export default Series