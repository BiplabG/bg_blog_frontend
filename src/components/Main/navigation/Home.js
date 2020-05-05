import React, { Fragment } from "react"

import Section from "../Section"
import CreateSection from "../operations/CreateSection"

function Home(props) {
    return(
        <Fragment>
            {sessionStorage.getItem('jwt') ? <CreateSection/> : null}
            {props.overview.map((section) => <Section sec={section} key={section._id.$oid}/>)}
        </Fragment>
    )
}

export default Home