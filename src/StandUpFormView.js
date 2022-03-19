import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import "./css/Views.css";
import { maxHeight } from '@mui/system';
import { TextField } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';


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
              "https://scrum-acers-backend.herokuapp.com/api/user/fetchStandUpForm",
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
        <div>
      <Box
        sx={{
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 2,
          p: 5,
          mt: 10,
          width: "85%" ,
          height: maxHeight,
          display: 'inline-block'
        }}
      >
      <Typography variant="h2" gutterBottom component="div">
            Daily Stand-Up Reviews
        </Typography>
      {formData.map((item,index) =>
        <div key={index}> 
        {console.log(item)}
        <Button  className="modal_shade" variant="contained" onClick={handleOpen}>user_name reviews</Button> 
        <Modal
        width= "100%"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <div class="vcontainer">
        <Fade in={open}>
          <Box sx={style}>
      
    
    <div class="vUser-Details">
      <div class="vTitle">
      <Typography variant="h5" component="div">
               Review
              </Typography>
      </div>
      <div class="vemployee_id">
      <Typography sx={{ fontSize: 14 }} color="body2" gutterBottom>
          {item.employee_id}
        </Typography>
      </div>
      {/* <div class="vemployee_name">
      <Typography sx={{ fontSize: 14 }} color="body2" gutterBottom>
          ABCD employee
        </Typography>
      </div> */}
      <div class="vteam_name">
      <Typography sx={{ fontSize: 14 }} color="body2" gutterBottom>
          {item.team_id}
        </Typography>
      </div>
      <div class="vdate">
      <Typography sx={{ fontSize: 14 }} color="body2" gutterBottom>
          {item.creation_timestamp}
        </Typography>
      </div>
    </div>
    <div class="vYesterday">
    <TextField 
                multiline 
                rows={3} 
                filled
                color ="info"
                id="outlined-basic" 
                value={item.ques_1}  
                name = "yesterday_goals"
                label = "Yesterday's goals"
    />
    </div>
    <div class="vToday">
    <TextField 
                multiline 
                rows={3} 
                filled
                color ="info"
                id="outlined-basic" 
                value= {item.ques_2}    
                name = "today's_goals"
                label = "Today's goals"
    />
    </div>
    <div class="vChallenges">
    <TextField 
                multiline 
                rows={3} 
                filled
                color ="info"
                id="outlined-basic" 
                value = {item.ques_3}    
                name = "challenges_faced"
                label = "Challenges Faced"
    />
    </div>
    <div class="vclose">
      <Button variant="contained" onClick={handleClose}>Close</Button>
    <div class="vclose_button">

      </div>
    </div>
    
    </Box>
    </Fade>
    </div>
    </Modal>
    </div>
        
        )}
      
    </Box>
  </div>
  
    
      );
    };
