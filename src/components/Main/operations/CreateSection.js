import React, { useState, useContext } from "react"

import Button from "@material-ui/core/Button"
import SectionDialog from "./dialog/SectionDialog"
import ReloadContext from "../../../contexts/ReloadContext"

function CreateSection(props){
    const [open, setOpen] = useState(false)
    const { toggleReloadValue } = useContext(ReloadContext)

    function handleButtonClick(){
        setOpen(true)
    }

    function handleClose(){
        setOpen(false)
    }

    function handleSubmit(name, description){
        let formattedSection = {
            'name':name,
            'description':description,
        }
        fetch("/section", {
            method:'POST',
            headers: {
                'Content-type':'application/json',
                'Authorization':'Bearer ' + sessionStorage.getItem('jwt')
            },
            body: JSON.stringify(formattedSection),
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
        handleClose()
        toggleReloadValue();
    }

    return(
        <div>
            <Button 
                variant="outlined"
                onClick={handleButtonClick}
                >
                Create new Section
            </Button>
            <SectionDialog 
                open={open}
                handleSubmit={handleSubmit}
                handleClose={handleClose}
                />
        </div>
    )
}

export default CreateSection