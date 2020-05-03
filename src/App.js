import React, { useState, useEffect, Fragment} from "react"
import { BrowserRouter as Router } from "react-router-dom"

import CssBaseline from "@material-ui/core/CssBaseline"
import { makeStyles } from "@material-ui/core/styles"

import Header from "./containers/Header"
import Sidebar from "./containers/Sidebar"
import Main from "./containers/Main"
import Footer from "./containers/Footer"
import Loading from "./components/loading/Loading"
import ReloadContext from "./contexts/ReloadContext"
// import { overview } from "./data"

const useStyles = makeStyles( (theme) => ({
    container: {
        position: 'relative',
        minHeight: '100vh',
    }
}))

function App() {
    const [overview, setOverview] = useState(null)
    const [hasLoaded, setHasLoaded] = useState(false)
    const [reloadToggle, setReloadToggle] = useState(false)

    function toggleReloadValue(){
        setReloadToggle(!reloadToggle)
    }
    const values = {reloadToggle, setReloadToggle}

    useEffect(() => {
        fetch("/overview")
        .then((response) => {
            if (!response.ok){
                throw new Error('Problem in the network connection.')
            }
            else {
                return response.json()
            }
        })
        .then((received_json) => {
            if (received_json['success']!==true){
                throw new Error(received_json['message'])
            }
            setOverview(received_json['data'])
            setHasLoaded(true)
        })
        .catch(error=>{
            console.error("Problem in the fetch operation.", error)
        })
    }, [reloadToggle])

    const classes = useStyles()
    return(
        <div className = {classes.container}>
            <Router>
                <CssBaseline>
                    { hasLoaded ? 
                    <Fragment>
                        <ReloadContext.Provider value={{toggleReloadValue}}>
                            <Header />
                            <Sidebar overview={overview}/>
                            <Main overview={overview} />
                            <Footer />
                        </ReloadContext.Provider>
                    </Fragment> : <Loading/>
                    }
                </CssBaseline>
            </Router>
        </div>
    )
}

export default App