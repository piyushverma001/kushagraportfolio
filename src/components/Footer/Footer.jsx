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
            icon={<Facebook />} 
            href="https://www.facebook.com/kushagra.roy.73"/>

            <BottomNavigationAction
            className={classes.root}
            style={{padding:0}}
            icon={<Instagram />}
            href="https://www.instagram.com/i_am_kush_roy/" />

            <BottomNavigationAction
            className={classes.root}
            style={{padding:0}}
            icon={<YouTube />} 
            href="https://www.youtube.com/channel/UCMeCpVc5Zv6IQDgO-99glNg" />

            <BottomNavigationAction
            className={classes.root}
            style={{padding:0}}
            icon={<LinkedIn />}
            href="https://www.linkedin.com/in/kushagra-roy-961654172/"
             />
        </BottomNavigation>

    )
}

export default Footer
