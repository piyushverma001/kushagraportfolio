import React from 'react'
import { 
Typography,
Avatar,
Grid,
Box
} from '@material-ui/core';

import {makeStyles} from '@material-ui/core/styles'

import Typed from 'react-typed'
import avatar from '../../images/kushagra.jpg'

//CSS STYLE
const useStyles= makeStyles(theme=>({
    avatar:{
        width: theme.spacing(20),
        height: theme.spacing(20),
        margin: theme.spacing(1)
    },
    title:{
        color: "tomato"
        
    },
    subtitle:{
        color:"tan",
        marginBottom: "3rem"
    },
    typedContainer:{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
}))



const Header = () => {
const classes = useStyles();
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify="center">
                <Avatar className={classes.avatar} src={avatar} alt="Kushagra Roy" />
            </Grid>
            <Typography className={classes.title} variant="h3">
                <Typed 
                    strings={["Kushagra Roy"]}
                    typeSpeed={80}
                />
            </Typography>
            <br />
            <Typography className={classes.subtitle} variant="h5">
                <span>I am a </span>
                <Typed strings={["Designer", "3D Modeller", "Innovator", "Rendering", "Youtuber"]}
                    typeSpeed={80}
                    backSpeed={50}
                    loop
                    />
            </Typography>

            <Typography>
                Hello
            </Typography>
        </Box>
    )
}

export default Header
