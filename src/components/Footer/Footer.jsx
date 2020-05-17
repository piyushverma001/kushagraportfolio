import React from 'react'
import {
    Facebook,
    Instagram,
    YouTube,
    LinkedIn
} from '@material-ui/icons'
import {makeStyles} from '@material-ui/core/styles'
import {
    BottomNavigationAction,
    BottomNavigation
} from '@material-ui/core'


const useStyles = makeStyles({
    root:{
        "& .MuiBottomNavigationAction-root" :{
            minWidth:0,
            maxWidth: 250,
            
        },
        "& .MuiSvgIcon-root":{
            fill: "tan",
            fontSize: "2.5rem",
            "&:hover":{
                fill: "tomato",
                fontSize: "3rem"
            }
        }
    }
});

const Footer = () => {
    const classes = useStyles()
    return (
        <BottomNavigation width="auto" style={{background:"#222"}}>
            <BottomNavigationAction
            className={classes.root}
            style={{padding:0}}
            icon={<Facebook />} />

            <BottomNavigationAction
            className={classes.root}
            style={{padding:0}}
            icon={<Instagram />} />

            <BottomNavigationAction
            className={classes.root}
            style={{padding:0}}
            icon={<YouTube />} />

            <BottomNavigationAction
            className={classes.root}
            style={{padding:0}}
            icon={<LinkedIn />} />
        </BottomNavigation>

    )
}

export default Footer
