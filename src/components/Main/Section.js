import React from "react"
import Typography from "@material-ui/core/Typography"

import Series from "./Series"
import CreateSeries from "./operations/CreateSeries"
import EditSection from "./operations/EditSection"

function Section(props) {
    return (
        <div key={props.sec._id.$oid}>
            <Typography variant="h3">{props.sec.name}</Typography>
            {sessionStorage.getItem('jwt') ? <EditSection section={props.sec}/> : null }
            {sessionStorage.getItem('jwt') ? <CreateSeries section_id={props.sec._id.$oid} /> : null }
            
            {props.sec.series.map( (ser) => { return(
                <Series ser={ser} key={ser._id.$oid}/>
            )})}

        </div>
    )
}

export default Section