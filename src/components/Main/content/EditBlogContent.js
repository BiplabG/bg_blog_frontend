import React, { useState } from "react"

import Button from "@material-ui/core/Button" 
import {makeStyles} from "@material-ui/core/styles"

import ContentForm from "./ContentForm"

const useStyles = makeStyles(() => ({
    'backButton':{
        marginTop: 20,
    }
}))

function EditBlogContent(props) {
    //States for the form components
    const [title, setTitle] = useState(props.blog.title)
    const [content, setContent] = useState(props.blog.content)

    function handleChange(event) {
        switch (event.target.name){
            case "title":
                setTitle(event.target.value)
                break
            default:
                break
        }
    }
    function handleSubmit(){
        let formattedContent = {
            'title':title,
            'content':content,
            'series_id':props.blog.series_id.$oid
        }
        fetch("/blog/".concat(props.blog._id.$oid), {
            method:'PUT',
            headers:{
                'Content-type':'application/json',
                'Authorization':'Bearer ' + sessionStorage.getItem('jwt')
            },
            body: JSON.stringify(formattedContent)
        })
        .then((response)=>{
            if (!response.ok){
                throw new Error('Problem in the network connection.')
            }
            else { 
                return response.json() 
            }
        })
        .then((json_data)=>{
            if (json_data['success']!==true){
                throw new Error(json_data['message'])
            }
            console.log(json_data)
            props.toggleBlogReload()
            props.toggleMode()
        })
        .catch(error=>{
            console.error('Problem in the fetch operation:', error)
        })
    }

    const classes = useStyles()
    return(
        <div>
            <Button 
                color="primary" 
                variant="outlined" 
                onClick={props.toggleMode}
                className={classes.backButton}>
                Back
            </Button>
            <ContentForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                title={title}
                content={content}
                setContent={setContent}
                work="edit"
            />
        </div>
    )
}

export default EditBlogContent