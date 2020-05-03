import React, { Fragment } from "react"
import ListItem from "@material-ui/core/ListItem"
import Divider from "@material-ui/core/Divider"

import Series from "./Series"
import { Link } from "react-router-dom"

function Section(props) {
    return(
        <Fragment>
            <ListItem>
                <Link to={"/section/".concat(props.section._id.$oid)}>{props.section.name}</Link>
            </ListItem>
            {
                props.section.series.map((se) => { return (
                    <Series se={se} key={se._id.$oid}/>
                )})
            }
        </Fragment>
    )
}

export default Section