import React, { Component } from 'react' 
import Player from '../components/Player'
import classes from './layout.module.css'

class Layout extends Component {
    render () {
        return (
            <div className={classes.Layout}>
            <Player />
            </div>
        )
    }
    }
    export default Layout