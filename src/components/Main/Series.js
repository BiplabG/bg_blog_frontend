import React from "react"
import { Link } from "react-router-dom"

import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"

import BlogPaper from "./BlogPaper"
import EditSeries from "./operations/EditSeries"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}))

function Series(props) {
    const classes = useStyles()
    return(
        <div>
            <Typography variant="h5">
                <Link to={"/series/".concat(props.ser._id.$oid)}>{props.ser.name}</Link>
            </Typography>
            {sessionStorage.getItem('jwt') ? <EditSeries series={props.ser} /> : null }
            <Grid container className={classes.root} spacing={2}>
                {props.ser.blogs.map( (blog) =>  { return(
                    <BlogPaper key={blog._id.$oid} blog={blog}/>
                )})}
                {sessionStorage.getItem('jwt') ? 
                    <Grid item>
                        <Link to={`/content/${props.ser._id.$oid}/create_blog`}>
                            <Button variant="outlined">Add new blog</Button>
                        </Link>
                    </Grid>
                    : null
                }
            </Grid>
        </div>
    )
}

export default Series