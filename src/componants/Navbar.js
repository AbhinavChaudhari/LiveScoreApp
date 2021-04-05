import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import React, { Component } from 'react'
import MenuIcon from "@material-ui/icons/Menu"



export default class Navbar extends Component {
    render() {
        return (
           <AppBar position="static" color="secondary">
               <Toolbar >
                   <IconButton  color="inherit">
                       <MenuIcon/>

                   </IconButton>
                   <Typography variant="h6">
                     Live Score
                   </Typography>
               </Toolbar>

           </AppBar>
        )
    }
}


