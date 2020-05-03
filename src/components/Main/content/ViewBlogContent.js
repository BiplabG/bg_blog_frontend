import React from "react"

import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from "@material-ui/core/styles"

import ContentViewer from "../../editor/ContentViewer"

const useStyles = makeStyles( (theme) => ({
    titleSection:{
        display: "flex",
    },
    editIcon: {
        marginTop: 20,
    }
}))

function ViewBlogContent(props) {
    let date_created = new Date(props.blog.date_created.$date)
    const classes = useStyles()
    return(
        <article>
            <div className={classes.titleSection}>
                <Typography variant="h2">{props.blog.title}</Typography>
                <Button onClick={props.toggleMode}>
                    <EditIcon/>
                </Button>
            </div>
            <Typography variant="caption">{date_created.toLocaleDateString()} {date_created.toLocaleTimeString()}</Typography>
            <br/>
            {/* <Typography variant="body2">{JSON.stringify(props.blog.content)}</Typography> */}
            <ContentViewer 
                blog_id={props.blog._id.$oid} 
                content={props.blog.content} 
                readOnly={true}
            />
        </article>
    )
}

export default ViewBlogContent