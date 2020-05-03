import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import ViewBlogContent from "./ViewBlogContent"
import EditBlogContent from "./EditBlogContent"
import Loading from "../../loading/Loading"

function ParticularBlogContent() {
    let { blog_id } = useParams()

    const [mode, setMode] = useState('view')
    function toggleMode() {
        setMode(mode === "view" ? "edit" : "view")
    }
    useEffect(() => {
        setMode("view")
    }, [blog_id])

    const [blog, setBlog] = useState(null)
    const [hasLoaded, setHasLoaded] = useState(false)
    const [toggleReload, setToggleReload] = useState(false)

    function toggleBlogReload() {
        setToggleReload(!toggleReload)
    }

    useEffect(() => {
        fetch('/blog/'.concat(blog_id))
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
            setBlog(json_data['data'])
            setHasLoaded(true)
        })
        .catch(error=>{
            console.error('Problem in the fetch operation:', error)
        })
    }, [blog_id, toggleReload])

    if (hasLoaded){
        return(
            <div>
                {mode === "view" ? 
                    <ViewBlogContent blog={blog} toggleMode={toggleMode}/>
                    : <EditBlogContent blog={blog} toggleMode={toggleMode} toggleBlogReload={toggleBlogReload}/>
                }
            </div>
        )
    } else {
        return <Loading/>
    }
}

export default ParticularBlogContent