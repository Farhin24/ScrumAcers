import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormLabel } from '@mui/material';
import { maxHeight } from '@mui/system';
import './StandUpForm.css';
import { Button } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import axios from 'axios'
import Stack from '@mui/material/Stack';
//import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useEffect } from 'react';



var defaultValues = {
  q1:"",
  q2:"",
  q3:"",
};

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const StandUpForm = () => {
  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  
  const [open, setOpen] = React.useState(false);
  const[openerr,setOpenerr] = React.useState(false);
  const[formstatus,setFormStatus] = React.useState(true);
  const[message,setMessage] = React.useState("");
  //const[formData,setFormData] = React.useState(formData)

  const handleClickerr =() =>{
      setOpenerr(true);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  //const[rows,setRowValues] = useState(rows);
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
            if(res.data.data.length>0){
              setFormStatus(true);
              setMessage("");
            }
            else{
              setFormStatus(false);
            }
          })
          .catch((err) => {
            setFormStatus(false);
          });
  };

  const setRowValues = (event) => {
    event.preventDefault();
    let userData=JSON.parse(localStorage.getItem("LoginData"));
    let data = {
       ...formValues
    };
    let token = "Bearer " + userData.token;
        axios
          .post(
            "https://scrum-acers-backend.herokuapp.com/api/user/dailyStandUpForm",
            formValues,
            {
              headers: {
                Authorization: `${token}`,
              }
            }
          )
          .then((res) => {
            handleReset();
            handleClick();
            getRowValues();
          })
          .catch((err) => {
            handleClickerr();
          });
  };
  

  const handleReset = () => {
    setFormValues({
      ...defaultValues,
    })
  };



    return (  
        formstatus?
        <Box
        sx={{
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 2,
          p: 5,
          mt: 5,
          minWidth: 300,
          height: maxHeight,
          display: 'inline-block'
        }}
    ><Typography variant="h5" gutterBottom component="div">
      Form is already submitted for today
      </Typography></Box>
        :
          <Box
        sx={{
          bgcolor: 'background.paper',
          boxShadow: 1,
          borderRadius: 2,
          p: 5,
          mt: 5,
          minWidth: 300,
          height: maxHeight,
          display: 'inline-block'
        }}
      >
        <div class="container">
        <div class="Title">
        <Typography variant="h2" gutterBottom component="div">
            Daily Stand-Up Form
        </Typography>
        </div>
        <div class="Yesterday">
          <div class="Ylabel"><FormLabel>Yesterday's goals</FormLabel></div>
          <div class="Ytext">

            <Box
             sx={{
                 '& .MuiTextField-root': { m: 1, width: '80ch' },

               }}
             component="form"
             noValidate
             autoComplete="off"
            >
                <TextField 
                required 
                multiline 
                rows={8} 
                id="outlined-basic" 
                label="Please put Yesterday's Goals achieved" 
                variant="outlined" 
                name = "q1"
                value={formValues.q1}
                onChange={handleInputChange}
              />
            </Box>
          </div>
        </div>
        <div class="Today">
          <div class="TLabel"><FormLabel>Today's goals</FormLabel></div>
          <div class="Ttext">
            <Box
             sx={{
                 '& .MuiTextField-root': { m: 1, width: '80ch' },
               }}
             component="form"
             noValidate
             autoComplete="off"
            >
                <TextField 
                required 
                multiline 
                rows={8} 
                id="outlined-textarea" 
                label="Please put your Todays's goals" 
                variant="outlined"
                name = "q2"
                value={formValues.q2}
                onChange={handleInputChange} />
            </Box>
            </div>
        </div>
        <div class="Blockers">
          <div class="blabel"><FormLabel>Challenges Faced</FormLabel></div>
          <div class="bradio">
            <Box
             sx={{
                 '& .MuiTextField-root': { m: 1, width: '80ch' },
               }}
             component="form"
             noValidate
             autoComplete="off"
            >
                <TextField 
                required 
                multiline 
                rows={8} 
                id="outlined-basic" 
                label="Please put any problems or challenges faced" 
                variant="outlined"
                name = "q3"
                value={formValues.q3}
                onChange={handleInputChange} 
                />
            </Box>
          </div>
        </div>
        <div class="submit">
          <div class="sbutton">
          <Button variant="contained" onClick={setRowValues}>Submit</Button>
          </div>
        </div>
        <div class="submit">
          <div class="rbutton">
          <Button variant="contained" onClick={handleReset}>Reset</Button>
          </div>
        </div>
      </div>
      <Stack spacing={2} sx={{ width: '100%' }}>
    {/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button> */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Form submitted Successfully!
        </Alert>
      </Snackbar>
    </Stack>
    <Stack spacing={2} sx={{ width: '100%' }}>
    {/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button> */}
      <Snackbar open={openerr} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          Error cannot submit form more than once!
        </Alert>
      </Snackbar>
    </Stack>
      </Box>
    );   
};

export default StandUpForm;