import React, {useState, useContext} from "react"
import Button from "@material-ui/core/Button"

import SeriesDialog from "./dialog/SeriesDialog"
import ReloadContext from "../../../contexts/ReloadContext"

function EditSeries(props) {
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
            'section_id':props.series.section_id.$oid,
        }
        fetch("/series/".concat(props.series._id.$oid), {
            method:'PUT',
            headers: new Headers({
                'Content-type':'application/json',
                'Authorization':'Bearer ' + sessionStorage.getItem('jwt')
            }),
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
        handleClose()
        toggleReloadValue()
    }
    return(
        <div>
            <Button 
                variant="outlined"
                onClick={handleButtonClick}
                >
                Edit
            </Button>
            <SeriesDialog 
                series={props.series}
                open={open}
                handleSubmit={handleSubmit}
                handleClose={handleClose}
                />
        </div>
    )
}

export default EditSeries