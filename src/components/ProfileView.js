import React,{useState} from "react";
import { Grid,Paper} from "@material-ui/core";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card"
import { Table } from "react-bootstrap";
import {Row,Col} from "react-bootstrap"
import { Badge, Pill } from 'evergreen-ui'


class MyProfile extends React.Component {

  constructor(){
    super()
    this.state={
      name:""      
    }
  }

    render() {
  
        const newpaperstyle = {
            margin: "30px auto",
            width: 900,
            padding: "20px 20px",
          };
       
      return (
      <>
      <Grid>
      <Paper elevation={15} style={newpaperstyle}>
        <Grid>
          <h4 className="text-primary" style={{marginLeft:"10px",textShadow:"1px 1px"}}>Welcome to your Profile</h4>
        </Grid>
        <Grid>
        <Card style={{ width: '54rem' }}>
        <Card.Body >
    
    <Card.Text>
     
    <Row>
        <div style={{marginLeft:"10px"}}>
          <Col >
            <Table responsive className="table table-borderless table-condensed table-hover " style={{ marginTop: "10px",width:"700px",border:"none"}}>
            <tbody style={{textAlign:"left",fontFamily:"sans-serif",fontSize:"17px",marginRight:"20%"}}>
            <tr >
                  <td>Employee Name</td>
                  <td>Emma Bryan</td>              
                </tr>
                <tr>
                  <td>Email</td>
                  <td>abc@gmail.com</td>              
                </tr>
                <tr >
                <td>Employee Position</td>
                  <td>Junior Employee</td>      
                </tr> 
                <tr >
                <td>Team Name</td>
                  <td>Scrum Acers</td>      
                </tr>    
                <tr >
                <td>Team Description</td>
                  <td>This team is building a project named, 'scrum acers'</td>      
                </tr>   
                <tr >
                <td>Leaves Left</td>
                  <td>4</td>      
                </tr> 
                <tr >
                <td>Badges Earned</td>
                  <td><Pill color="green" height="30px" width="120px"><h6 style={{marginTop:"5px"}}>Devoted</h6></Pill></td>         
                </tr> 
                <tr>
                  <td></td>
                  <td ><Pill color="teal" height="30px" width="120px"><h6 style={{marginTop:"5px"}}>Great Job</h6></Pill></td> 
                </tr>
               
                 </tbody>       
                  </Table>
                  </Col>
                  </div></Row>
    
    </Card.Text> 
  
   
  </Card.Body>
</Card>
                   
                  
        </Grid>
          </Paper></Grid>
          </>
      )
    }
  }

export default MyProfile;