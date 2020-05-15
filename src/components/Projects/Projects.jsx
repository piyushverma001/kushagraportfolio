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
    Typography
} from '@material-ui/core'

export default class Projects extends React.Component {
    render() {
        return (
            <>
                <Box component="div">
                <Title />
                <Grid container  justify="center" alignItems="center">
                    {/* Project 1 */}
                    <Grid item xs={12} sm={8} md={6}>
                    <Card>
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
                    </Card>
                    </Grid>
                </Grid>
                </Box>
            </>
        )
    }
}
