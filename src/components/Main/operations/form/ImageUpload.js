import React, { useState, Fragment, useRef } from "react"

import IconButton from "@material-ui/core/IconButton"
import CheckTwoTone from "@material-ui/icons/CheckTwoTone"

function ImageUpload(props) {
    const fileInput = useRef(null)
    const handleImageUpload = () => {
        console.log(props.section_id)
        let url
        if (props.section_id){
            url=`/section/${props.section_id}/upload_image`
        } else if (props.series_id){
            url=`/series/${props.series_id}/upload_image`
        }
        console.log(url)
        console.log(props.section_id)
        const formData = new FormData()
        formData.append('file', fileInput.current.files[0])
        fetch(url, {
            method: 'PUT',
            body: formData
        })
        .then((response)=>{
            if(!response){
                throw new Error('Problem in the network connection.')
            }
            return response.json()
        })
        .then((json_data)=>{
            if (!json_data['success']){
                throw new Error(json_data['message'])
            }
            console.log(json_data)
        })
        .catch(error=>{
            console.error('Problem in the fetch operation:', error)
        })
    }

    return (
        <Fragment>
            <input type="file" name="image_file" ref={fileInput}/>
            <br/>
            <IconButton>
                <CheckTwoTone onClick={handleImageUpload}/>
            </IconButton>
        </Fragment>
    )
}

export default ImageUpload