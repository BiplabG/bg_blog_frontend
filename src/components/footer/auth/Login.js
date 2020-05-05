import React, { useState, useContext, useEffect } from "react"

import Dialog from "@material-ui/core/Dialog"
import DialogTitle from "@material-ui/core/DialogTitle"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogActions from "@material-ui/core/DialogActions"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import Link from "@material-ui/core/Link"

import ReloadContext from "../../../contexts/ReloadContext"

function Login(){
    const [open, setOpen] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { toggleReloadValue } = useContext(ReloadContext)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleSubmit = () => {
        let formattedContent={
            'email':email,
            'password':password
        }
        fetch("/auth/login",{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(formattedContent)
        })
        .then((response)=>{
            if (!response){
                throw new Error('Problem in the network connection.')
            } else{
                return response.json()
            }
        })
        .then((json_data)=>{
            console.log(json_data)
            if (json_data['success']!==true){
                throw new Error(json_data['message'])
            }
            sessionStorage.setItem('jwt', json_data['access_token'])
            toggleReloadValue()
        })
        .catch(error=>{
            console.error('Problem in the fetch operation:', error)
        })
        handleClose()
    }

    return (
        <div>
            <Link href="#" onClick={handleClickOpen} color="inherit">Admin Login</Link>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    Admin Panel Login
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please enter the admin credentials to login.
                    </DialogContentText>
                    <TextField
                        autofocus
                        id="email"
                        label="Email Address"
                        type="email"
                        fullWidth
                        onChange={(event)=>setEmail(event.target.value)}
                    />
                    <TextField
                        type="password"
                        label="Password"
                        fullWidth
                        onChange={(event)=>setPassword(event.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSubmit} color="primary">
                    Login
                </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default Login