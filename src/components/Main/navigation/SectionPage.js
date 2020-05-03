import React from "react"

import Section from "../Section"
import { useParams } from "react-router-dom"

function SectionPage(props){
    let { section_id } = useParams()
    let section_index = props.overview.findIndex((section) => section._id.$oid === section_id)
    let section = props.overview[section_index]
    return(
        <Section sec={section}/>
    )
}

export default SectionPage