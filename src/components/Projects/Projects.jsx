import React from 'react';
import {Title} from '../../components'
import {makeStyles} from '@material-ui/core/styles'
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from '@material-ui/core'
// import axios from 'axios'

const useStyles = makeStyles(theme=>({
    mainContainer:{
        background: "#233",
        height: "100%"
    },
    cardContainer: {
        maxWidth: 345,
        margin: "5rem auto"
    },
    heading:{
        color: "tomato",
        padding: "3rem 0",
        textTransform: "uppercase"
    }
}))




const Projects = ({data}) => {
    const classes = useStyles();
    // const data =   getValues();
    console.log(data);

    const listItems = data.map((item,id)=>
    <Grid key={id} item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img"
                            alt="loading.."
                            height="200"
                            image={item.Image}/>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    {item.Name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {item.Desc}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                {/* <Button size="small" color="primary">
                                    Share
                                </Button> */}
                                <Button size="small" color="primary" href={item.Link} target="_blank">
                                    Open in Behance
                                </Button>
                            </CardActions>
                    </Card>
                    </Grid>
    );
    if(data){

    
    return (
            <>
                <Box component="div" className={classes.mainContainer}>
                <Title />
                <Typography variant="h4" className={classes.heading} align="center">
                    Work Samples
                </Typography>
                <Grid container  justify="center" alignItems="center">
                    {/* Project 1 */}
                    
                   {listItems}

                    {/* Project 2 */}
                    

                    {/* Project 3 */}
                    

                </Grid>
                </Box>
            </>
        )
    }
    else{
        return (
            <Typography style={{color: "white"}}>
                Loading
            </Typography>
        )
    }
    }

export default Projects