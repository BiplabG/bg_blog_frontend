import React from "react"
import { Link } from "react-router-dom"

import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles( (theme) => ({
    paper: {
        height: 300,
        width: 250
    }
}))

function BlogPaper(props) {
    let classes = useStyles()
    return (
        <Grid item sm={3} xs={12}>
            <Paper className={classes.paper}>
                <Link to={"/content/".concat(props.blog._id.$oid)}>
                    {props.blog.title}
                </Link>
            </Paper>
        </Grid>
    )
}

export default BlogPaper