import React from "react"
import { useParams } from "react-router-dom"

import Series from "../Series"

function  SeriesPage(props){
    let { series_id } = useParams()
    //Loop to find the Index of the Series from overview
    var matchedIndex = null
    for (var i=0; i < props.overview.length; i++){
        let index = props.overview[i].series.findIndex((ser) => ser._id.$oid === series_id)
        if (index > -1){
            matchedIndex = [i, index]
            break
        }
    }
    var series
    if (matchedIndex){
        series = props.overview[matchedIndex[0]].series[matchedIndex[1]]
    } else {
        series = null
    }

    return (
        series ? <Series ser={series} /> : null
    )
}

export default SeriesPage