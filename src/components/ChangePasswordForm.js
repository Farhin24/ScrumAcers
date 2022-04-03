import React from 'react';
import {Grid,Paper,Button} from "@material-ui/core"
import { TextField } from '@mui/material';

class ChangePasswordForm extends React.Component{
  
  render(){
    const newpaperstyle = {
      margin: "30px auto",
      width: 600,
      padding: "20px 20px",
    };
  return (
    <>
    <Grid>
    <Paper elevation={15} style={newpaperstyle}>
      <form>
        <h5>Enter the following fields!</h5>
        <hr/>
        <TextField
         fullWidth
         type="password"
         name="currpass"
         label="Current Password"
         style={{marginTop:"5%"}}
         />
            <TextField
         fullWidth
         type="password"
         name="newpass"
         label="New Password"
         style={{marginTop:"5%"}}
         />
             <TextField
         fullWidth
         type="password"
         name="confirmpass"
         label="Confirm Password"
         style={{marginTop:"5%"}}       
         />
         <Button style={{marginTop:"5%"}}  type="submit" variant="contained">
            Submit
          </Button>
      </form>
      </Paper>
    </Grid>
    </>
   
  )
}
}

export default ChangePasswordForm;
