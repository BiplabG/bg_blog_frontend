import React, { useState } from "react"
import { useParams, Redirect} from "react-router-dom"

import ContentForm from "./ContentForm"

function CreateBlogContent(props){
    let { series_id } = useParams()
    //States for the form components
    const [title, setTitle] = useState("")
    const [content, setContent] = useState({})
    const [createdBlogId, setCreatedBlogId] = useState("")

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
            'series_id':series_id
        }
        fetch("/blog", {
            method:'POST',
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
            setCreatedBlogId(json_data._id.$oid)
            console.log(json_data)
        })
        .catch(error=>{
            console.error('Problem in the fetch operation:', error)
        })
    }

    function redirectToCreatedBlog(){
        if (createdBlogId !== ""){
            return <Redirect
                        to={`/content/${createdBlogId}`}
                    />
        }
    }

    return(
        <div>
            <ContentForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                title={title}
                content={content}
                setContent={setContent}
                work="create"
            />
            {redirectToCreatedBlog()}
        </div>
    )
}

export default CreateBlogContent