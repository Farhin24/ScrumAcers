import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { TextField } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import { Grid } from '@mui/material';
import { Paper } from '@mui/material';
import { alignProperty } from '@mui/material/styles/cssUtils';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


  

  
  export default function StandUpFormView() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    //console.log("props data",this.props.data);
    
    const[formData,setFormData] = React.useState([]);
    useEffect(() =>{
      getRowValues();
    },[]);
    const getRowValues = () => {
      let userData=JSON.parse(localStorage.getItem("LoginData"));
      let token = "Bearer " + userData.token;
          axios
            .get(
              "https://scrum-acers-backend.herokuapp.com/api/user/fetchStandUpFormManager",
              {
                headers: {
                  Authorization: `${token}`,
                }
              }
            )
            .then((res) => {
              console.log({ rows: res.data.data });
              //console.log(res.data)
              if(res.data.data.length>0){
                  setFormData(res.data.data);
              }
              
            })
            .catch((err) => {
              console.log({ errorMessage: err.response.data.message });
            });
    };

    return ( 
    <Box 
      sx = {{ 
              bgcolor: 'background.paper',
              display: 'inline-flex',
              m:3,
              boxShadow: 1,
              borderRadius: 2,
            }}
    >
      <Grid container  alignItems ={"center"} justifyContent={"center"}>
        <Grid item md={11} sm={12}>
              <Typography sx ={{mt:2}} variant="h3" gutterbottom >
                  Daily Stand-Up Form Reviews
              </Typography>
        </Grid>     
        {formData.length===0?
        <Grid container alignItems={"center"} justifyContent={"center"}>
          <Typography variant="h5" sx={{m:3}}>No Scrum Forms submitted for today</Typography>
          </Grid>
        :formData.map(reviews => (
          <Grid item sx={{ ml:2 ,mt:2, mb:2}} alignItems="center" key={reviews.form_id} md={10} sm={10}>
            <Button sx={{minWidth:"70%"}} className="modal_shade" variant="contained" onClick={handleOpen}>{reviews.first_name} {reviews.last_name} review</Button>
            <Modal
            id = "Modal{{reviews.form_id}}"
            width= "100%"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}r
            BackdropProps={{
              timeout: 500,
            }}    
            >
                  <Fade in={open}>
                  <Box sx={style}>
                  <Grid container>
                    <Grid item md={11} sm={12}
                    alignItems ="center">
                      <Typography sx ={{mt:2}} variant="h6" gutterbottom >
                        Reviews
                      </Typography>
                    </Grid>
                    <Grid item md={11}>
                      <Paper sx ={{m:1,p:1, boxShadow: 1,borderRadius: 2, bgcolor:'#0d47a1',color: 'white'}} >
                        Employee Name: {reviews.first_name} {reviews.last_name} 
                      </Paper>
                      <Paper sx ={{m:1,p:1, boxShadow: 1,borderRadius: 2, bgcolor:'#0d47a1',color: 'white'}}  >
                        Team Name: {reviews.team_name}
                      </Paper>
                      <Paper sx ={{m:1,p:1, boxShadow: 1,borderRadius: 2, bgcolor:'#0d47a1',color: 'white'}}  >
                        Date: {reviews.creation_timestamp}
                      </Paper>
                    </Grid>
                    <Grid item >
                      <TextField
                        sx={{m:1}} 
                        multiline 
                        rows={3} 
                        id="outlined-basic" 
                        value={reviews.ques_1}  
                        name = "yesterday_goals"
                        label = "Yesterday's goals"
                      />
                    </Grid>
                    <Grid item >
                      <TextField
                        sx={{m:1}}
                        multiline 
                        rows={3} 
                        id="outlined-basic" 
                        value={reviews.ques_2}  
                        name = "today_goals"
                        label = "Today's goals"
                      />
                    </Grid>
                    <Grid item sm={12} >
                      <TextField 
                        sx={{m:1}}
                        multiline 
                        rows={3} 
                        id="outlined-basic" 
                        value={reviews.ques_3}  
                        name = "challenges_faced"
                        label = "Challenges's Faced"
                      />
                    </Grid>
                    <Grid item md={10} sm={10}>
                      <Button sx={{ m:3}} variant="contained" onClick={handleClose}>Close</Button>
                    </Grid>
                  </Grid>
                  </Box>
                  </Fade>    
            </Modal> 
          </Grid>
        ))} 
      </Grid>
    </Box>
      );
    };
