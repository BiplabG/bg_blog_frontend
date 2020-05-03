import React from "react"

import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"
import EditorLib from "../../editor/EditorLib"

const useStyles = makeStyles((theme) => ({
    titleField:{
        width: 800,
        marginTop: 20,
    },
    contentField:{
        width: 800,
        marginTop: 20,
    },
    submitButton:{
        marginTop:20,
    }
}))

function ContentForm(props){
    const classes = useStyles()
    return(
        <form>
                <TextField 
                    required 
                    label="Title" 
                    name="title" 
                    //defaultValue={props.blog.title} 
                    value={props.title}
                    onChange={props.handleChange}
                    className={classes.titleField}
                />
                <br/>
                {/* <TextField 
                    multiline 
                    label="Content" 
                    name="content" 
                    //defaultValue={props.blog.content}
                    value={props.content}
                    rows="20" 
                    variant="outlined"
                    onChange={props.handleChange}
                    className={classes.contentField}
                /> */}
                <div className={classes.contentField}>
                    <EditorLib 
                        content={props.content} 
                        setContent={props.setContent}
                        work={props.work}
                    />
                </div>
                <br/>
                <Button 
                    variant="contained" 
                    color="primary"
                    className={classes.submitButton}
                    onClick={props.handleSubmit}>
                    Submit
                </Button>
            </form>
    )
}

export default ContentForm