import React from 'react'
import {makeStyles, withStyles} from '@material-ui/core/styles'
import {
    TextField,
    Typography,
    Button,
    Grid,
    Box,
} from '@material-ui/core'

import Title from '../Title/Title'
import emailjs from 'emailjs-com';
import SendIcon from '@material-ui/icons/Send'
function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_GM3FpLNe', e.target, 'user_oS6jI5YrIHumLku8kKJ1t')
      .then((result) => {
          console.log(result.text);
          alert("Message Sent Successfully")
      }, (error) => {
          console.log(error.text);
      });
  }

  /*<form className="contact-form" onSubmit={sendEmail}>
     
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="reply_to" />
      <label>Message</label>
      <textarea name="message_html" />
      <input type="submit" value="Send" />
    </form> */

const InputField = withStyles({
    root:{
        "& label.Mui-focused": {
            color: "tomato"
        },
        "& label":{
            color: "tan"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "tan"
            },
            "&:hover fieldset":{
                borderColor: "tan"
            },
            "&.Mui-focused fieldset": {
                borderColor: "tan"
            }
        }
    },
})(TextField)


const useStyles = makeStyles(theme=>({
    form:{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)"
    },
    button: {
        marginTop: "1rem",
        color: "tomato",
        borderColor: "tomato"
    }
}))


const Closing = () => {

    const classes = useStyles();

    return (
      
        <Box component="div" style={{background:"#233", height:"100vh"}}>
            <Title />
            <Grid container justify="center">
                <form onSubmit={sendEmail}>
                <Box component="form" className={classes.form}>
                    <Typography variant="h3" style={{color:"tomato", textAlign:"center", textTransform:"uppercase"}}>
                        Hire Me or Contact Me
                    </Typography>
                    <InputField 
                    fullWidth={true}
                    label="Name"
                    variant="outlined" 
                    margin="dense"
                    inputProps={{ style: {color: "white" }}}
                    size="medium"
                    name="from_name"
                     />
                    <br />
                    <InputField 
                    fullWidth={true}
                    label="Email"
                    variant="outlined"
                    margin="dense"
                    inputProps={{ style: {color: "white" }}}
                    size="medium" 
                    name="reply_to" />
                    <br />
                    <InputField 
                    fullWidth={true}
                    label="Message"
                    variant="outlined"
                    margin="dense"
                    inputProps={{ style: {color: "white" }}}
                    size="medium"
                    multiline
                    rows={4} 
                    name="message_html" />
                    <br />

                    <Button 
                    variant="outlined"
                    className={classes.button}
                    fullWidth={true}
                    endIcon={<SendIcon/>}
                    type="submit" >
                        Contact me
                    </Button>
                </Box>
                </form>
            </Grid>
        

        </Box>
     
    )
}

export default Closing
