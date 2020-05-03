import React, { useState, useContext } from "react"

import Button from "@material-ui/core/Button"
import SeriesDialog from "./dialog/SeriesDialog"
import ReloadContext from "../../../contexts/ReloadContext"

function CreateSeries(props){
    const [open, setOpen] = useState(false)
    const { toggleReloadValue } = useContext(ReloadContext)

    function handleButtonClick(){
        setOpen(true)
    }

    function handleClose(){
        setOpen(false)
    }

    function handleSubmit(name, description){
        let formattedSeries = {
            'name':name,
            'description':description,
            'section_id':props.section_id,
        }
        fetch("/series", {
            method:'POST',
            headers: {
                'Content-type':'application/json',
            },
            body: JSON.stringify(formattedSeries),
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
        })
        .catch(error=>{
            console.error('Problem in the fetch operation:', error)
        })
        setOpen(false)
        toggleReloadValue()
    }

    return(
        <div>
            <Button 
                variant="outlined"
                onClick={handleButtonClick}
                >
                Create new Series
            </Button>
            <SeriesDialog 
                open={open}
                handleSubmit={handleSubmit}
                handleClose={handleClose}
                />
        </div>
    )
}

export default CreateSeries