import React from "react"
import Typography from "@material-ui/core/Typography"

import Series from "./Series"
import CreateSeries from "./operations/CreateSeries"
import EditSection from "./operations/EditSection"

function Section(props) {
    return (
        <div key={props.sec._id.$oid}>
            <Typography variant="h3">{props.sec.name}</Typography>
            <EditSection section={props.sec}/>
            <CreateSeries section_id={props.sec._id.$oid} />
            
            {props.sec.series.map( (ser) => { return(
                <Series ser={ser} key={ser._id.$oid}/>
            )})}

        </div>
    )
}

export default Section