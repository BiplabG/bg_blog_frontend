import React from "react"
import {
    Switch,
    Route
} from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"

import Home from "../components/Main/navigation/Home"
import SectionPage from "../components/Main/navigation/SectionPage"
import SeriesPage from "../components/Main/navigation/SeriesPage"
import BlogContent from "../components/Main/content/BlogContent"

const useStyles = makeStyles( (theme) => ({
    container: {
        marginLeft: 275,
    }
}))

function Main(props) {
    let classes = useStyles()
    return (
        <div className={classes.container}>
                <Switch>
                    <Route exact path="/">
                        <Home overview={props.overview}/>
                    </Route>
                    <Route path="/content">
                        <BlogContent/>
                    </Route>
                    <Route path="/section/:section_id">
                        <SectionPage overview={props.overview}/>
                    </Route>
                    <Route path="/series/:series_id">
                        <SeriesPage overview={props.overview}/>
                    </Route>
                </Switch>
        </div>
    )
}

export default Main