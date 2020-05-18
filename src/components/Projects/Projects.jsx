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
import getValues from '../../API/api'

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


const Projects = () => {
    const classes = useStyles();
    const data = getValues();
    return (
            <>
                <Box component="div" className={classes.mainContainer}>
                <Title />
                <Typography variant="h4" className={classes.heading} align="center">
                    Projects
                </Typography>
                <Grid container  justify="center" alignItems="center">
                    {/* Project 1 */}
                    <Grid item xs={12} sm={8} md={6}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardMedia component="img"
                            alt="project1"
                            height="140"
                            image="https://image.shutterstock.com/image-photo/butterfly-grass-on-meadow-night-260nw-1111729556.jpg"/>
                            <CardContent>
                                <Typography gutterBottom variant="h5">
                                    Project 1
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Description of the project1
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                                <Button size="small" color="primary">
                                    Demo
                                </Button>
                            </CardActions>
                    </Card>
                    </Grid>

                    {/* Project 2 */}
                    

                    {/* Project 3 */}
                    

                </Grid>
                </Box>
            </>
        )
    }

export default Projects