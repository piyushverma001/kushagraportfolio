import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles';
import MobilRightMenuSlider from '@material-ui/core/Drawer'
import {Link} from 'react-router-dom'
import {
AppBar,
Toolbar,
ListItem,
IconButton,
ListItemText,
ListItemIcon,
Avatar,
Divider,
List,
Typography,
Box

} from '@material-ui/core'

import {
ArrowBack,
AssignmentInd,
Home,
Apps,
ContactMail,
} from '@material-ui/icons'

import avatar from "../../images/avatar.png"

//styles:
const useStyles = makeStyles(theme=>({
    menuSliderContainer:{
        width: 250,
        background: "#511",
        height: "100%"
    },

    avatar :{
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem:{
        color:"tan"
    }

}));


const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume",
        listPath: "/resume"
    },
    {
        listIcon: <Apps />,
        listText: "Portfolio",
        listPath: "/projects"
    },
    {
        listIcon: <ContactMail />,
        listText: "Contact",
        listPath: "/contact"
    },
]



const Title = () => {

    const [state, setState] = useState({
        right:false
    })

    const toggleSlider = (slider, open) => () => { 
        setState({...state, [slider]:open})
    }

    const classes = useStyles()

    const sidelist = slider => (

            <Box 
            className={classes.menuSliderContainer} 
            component="div"
            onClick={toggleSlider(slider, false)}
            >
                <Avatar className={classes.avatar} src={avatar} alt="" />
                <Divider />
                <List>
                    {menuItems.map((lsitem, key)=>(
                    <ListItem button key={key} component={Link} to={lsitem.listPath}>
                        <ListItemIcon className={classes.listItem}>
                            {lsitem.listIcon}
                        </ListItemIcon>
                        <ListItemText className={classes.listItem} primary={lsitem.listText}/>
                    </ListItem>
                    ))}
                    
                </List>
            </Box>
    );

        return (
            <>
            <Box component= "nav">
                <AppBar position="static" style={{background: "#222"}}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right", true)}>
                             <ArrowBack style={{color:"tomato"}}/>
                        </IconButton>
                        <Typography variant="h5" style={{color:"tan"}}>
                            Portfolio
                        </Typography>

                        <MobilRightMenuSlider
                        anchor="right"
                        open={state.right}
                        onClose={toggleSlider("right", false)}>
                             {sidelist("right")}
                        </MobilRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
            </>
        )
    
}

export default Title
