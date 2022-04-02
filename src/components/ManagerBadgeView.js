import * as React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper'
import StarIcon from '@mui/icons-material/Star';
import { Table,TableRow,TableContainer,TableHead,TableBody } from '@mui/material';
import { TableCell } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import Button from '@mui/material/Button'
import { Update } from '@material-ui/icons';

const ManageBadgeView = () => {
    const[badges_json,setBadgeJSON]= useState([])
    //const[badge_json_processed,setBadgeJSONProcessed] = useState([])
    

    useEffect(() =>{
    console.log("inside effect")
      getRowValues();
    },[]);


      function ChangeColor(badge,badge_id){
        let badge_temp= JSON.parse(JSON.stringify(badge))
        let badge_json_processed = JSON.parse(JSON.stringify(badges_json))
        badge_temp.Badges.forEach(sbadge => {
          if(sbadge.badge_id === badge_id){
          if(sbadge.state === "selected"){
            sbadge.colors = "#bdbdbd"
            sbadge.state = "unselected" 
          }
          else{
            sbadge.state = "selected"
            sbadge.colors = "#f57c00"
          }
        }     
        })
        console.log(badge_json_processed)
        delete badge_json_processed["Badges"];
        badge_json_processed.forEach(employee => {
          if(badge.emp_id === employee.emp_id){
              employee.Badges = badge_temp.Badges
          }
        })
        setBadgeJSON(badge_json_processed)
    }

    function Update(badge) {
      let badge_temp= JSON.parse(JSON.stringify(badge))
       let post_update = []
       post_update["emp_id"] = badge_temp.emp_id
       post_update["badges"] =[]
       badge_temp.Badges.forEach(badge => {
         if(badge.state === "selected"){
           post_update.badges.push(badge.badge_id)
         }
       })
       console.log(post_update)
  }

    const getRowValues = () => {
      let badge_json_temp = []
      console.log("get rows called")
      let userData=JSON.parse(localStorage.getItem("LoginData"));
      let token = "Bearer " + userData.token;
      let json = [{}]
          axios
            .get(
              "http://localhost:4000/api/user//fetch-employee-badges  ",
              {
                headers: {
                  Authorization: `${token}`,
                }
              }
            )
            .then((res) => { 
              console.log(res.data);
                res.data.forEach(selected_badge => {
                  json = {}
                  json.emp_id = {}
                  let badges = []
                  json['emp_id'] = selected_badge.emp_id;
                  json['First_name'] = selected_badge.first_name; 
                  json['Last_name'] = selected_badge.last_name;
                  selected_badge.selected_badge.forEach(badge => {
                    let badge_names = badge.badge_name;
                    let id = badge.badge_id;
                    let description = badge.badge_description
                    badges.push({badge_id : id ,badge_name : badge_names,badge_description: description,state : "selected",colors:"#f57c00"})

                  })
                  selected_badge.unselected_badge.forEach(badge => {
                    let badge_names = badge.name;
                    let id = badge.id;
                    let description = badge.description
                    badges.push({badge_id : id ,badge_name : badge_names,badge_description: description,state : "unselected",colors:"#bdbdbd"})
                  })
                  
                  json["Badges"] = badges
                  badge_json_temp.push(json)
                })
                console.log(badge_json_temp)
                setBadgeJSON(badge_json_temp)
                //setBadgeJSONProcessed(badge_json_temp)
            })
            .catch((err) => {
              console.log({ errorMessage: err.response.data.message });
            });
  
    };
    return ( 
        <div>
           <Box 
              sx = {{ 
              bgcolor: 'background.paper',
              display: 'inline-flex',
              m:3,
              boxShadow: 1,
              borderRadius: 2,
            }}
          >
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Employee Name</TableCell>
            <TableCell align="center">Employee ID</TableCell>
            <TableCell align="center">Badges</TableCell>
            <TableCell align="center">Update</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {badges_json.map((badge,key) => {

          return(
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
              {badge.First_name} {badge.Last_name}
              </TableCell>
              <TableCell align="center">{badge.emp_id}</TableCell>
              <TableCell align="center">
              <Stack direction="row" spacing={1} sx={{p:1}} >
              {badge.Badges.map((sbadge,key) => {
                      return(
                            <Tooltip title={sbadge.badge_description}>
                              <Chip  icon={<StarIcon style={{fill: "white"}} />} sx={{bgcolor:sbadge.colors ,color:"white"}} label= {sbadge.badge_name} onClick={() => ChangeColor(badge,sbadge.badge_id)} />
                            </Tooltip>
                      
                      );
                      })}
              </Stack>
              </TableCell>
              <TableCell align="center"><Button variant="contained" onClick={() => Update(badge)}>Update</Button></TableCell>
            </TableRow>
          );
        })}
        </TableBody>
      </Table>
    </TableContainer>
            </Box>
        </div>
     );
}
 
export default ManageBadgeView;