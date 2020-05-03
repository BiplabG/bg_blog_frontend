import React from "react"
import { Switch, Route, useRouteMatch } from "react-router-dom"

import ParticularBlogContent from "./ParticularBlogContent"
import CreateBlogContent from "./CreateBlogContent"

function BlogContent() {
    let {path} = useRouteMatch()
    return (
        <Switch>
            <Route path={`${path}/:series_id/create_blog`}>
                <CreateBlogContent/>
            </Route>
            <Route path={`${path}/:blog_id`}>
                <ParticularBlogContent/>
            </Route>
        </Switch>
    )
}

export default BlogContent