import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { FormLabel } from '@mui/material';
import { maxHeight } from '@mui/system';
import './StandUpForm.css';
import { Button } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';


const StandUpForm = () => {
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
                <TextField multiline rows={8} id="outlined-basic" label="Please put Yesterday's Goals achieved" variant="outlined" />
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
                <TextField multiline rows={8} id="outlined-textarea" label="Please put your Todays's goals" variant="outlined" />
            </Box></div>
        </div>
        <div class="Blockers">
          <div class="blabel"></div>
          <div class="bradio">
            <Box component = 'form' >
            <FormControl variant="filled" sx={{ m: 1, width: '30ch' }}>
                <InputLabel id="demo-simple-select-standard-label">Number of Blockers</InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  //value={blockers}
                  //onChange={handleChange}
                  label="Age"
                >

              <MenuItem value={0}>None</MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
            </FormControl>
            </Box>
          </div>
        </div>
        <div class="submit">
          <div class="sbutton">
          <Button variant="contained">Submit</Button>
          </div>
        </div>
        <div class="reset">
          <div class="rbutton">
          <Button variant="contained" >Reset</Button>
          </div>
        </div>
      </div>
      </Box>
    );
}
 
export default StandUpForm;