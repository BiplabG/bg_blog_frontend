import React from "react"
import { Link } from "react-router-dom"

import ListItem from "@material-ui/core/ListItem"

function BlogTitle(props) {
    return(
        <Link key={props.blog._id.$oid} to={"/content/".concat(props.blog._id.$oid)}>
            <ListItem>{props.blog.title}</ListItem>
        </Link>
    )
}

export default BlogTitle