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


var defaultValues = {
  yesterday_goals:"",
  today_goals:"",
  challenges_faced: "",
};

const StandUpForm = () => {
  const [formValues, setFormValues] = useState(defaultValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  const handleReset = () => {
    setFormValues({
      ...defaultValues,
    })
  };


    return (  
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
                name = "yesterday_goals"
                value={formValues.yesterday_goals}
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
                name = "today_goals"
                value={formValues.today_goals}
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
                name = "challenges_faced"
                value={formValues.challenges_faced}
                onChange={handleInputChange} 
                />
            </Box>
          </div>
        </div>
        <div class="submit">
          <div class="sbutton">
          <Button variant="contained" onClick={handleSubmit}>Submit</Button>
          </div>
        </div>
        <div class="submit">
          <div class="rbutton">
          <Button variant="contained" onClick={handleReset} >Reset</Button>
          </div>
        </div>
      </div>
      </Box>
    );   
};

export default StandUpForm;