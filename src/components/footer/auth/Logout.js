import React, { useContext } from "react"

import Link from "@material-ui/core/Link"

import ReloadContext from "../../../contexts/ReloadContext"

function Logout(){
    const { toggleReloadValue } = useContext(ReloadContext)
    function handleLogoutClick(){
        fetch("/auth/logout", {
            method:'GET',
            headers: {
                Authorization: 'Bearer '+sessionStorage['jwt']
            }
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
            sessionStorage.removeItem('jwt')
            toggleReloadValue()
        })
        .catch(error=>{
            console.error("Problem in the fetch operation.", error)
        })
    }

    return (
        <Link href="#" onClick={handleLogoutClick} color="inherit">Logout</Link>
    )
}

export default Logout