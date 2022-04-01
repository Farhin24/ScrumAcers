import React,{useState} from "react";
import { Grid,Paper} from "@material-ui/core";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card"
import { Table } from "react-bootstrap";


class MyProfile extends React.Component {

  constructor(){
    super()
    this.state={
      name:""      
    }
  }

    render() {
        const h2style = { margin: 10, color: "green" };
        const h6style1={margin:10,color:"black",display:"inline-block"}
        const h6style2={margin:10,color:"blue",display:"inline-block"}
        const newpaperstyle = {
            margin: "30px auto",
            width: 800,
            padding: "20px 20px",
          };
          const Viewprofile = () =>{
          const [fname,setfname]=useState("");
          const[lname,setlname]=useState("")
          const[etype,setetype]=useState("")
          const[email,setemail]=useState("")
          const[leaves,setleaves]=useState("")
          const[joindate,setjoindate]=useState("")
          const[teamid,setteamid]=useState("")
          
          }
      return (
      <>
      <Grid>
      <Paper elevation={15} style={newpaperstyle}>
        <Grid>
          <h2 className="text-primary display-6">Welcome to your Profile</h2>
        </Grid>
        <Grid>
        <Card style={{ width: '47rem' }}>
        <Card.Body>
    <Card.Title>Hi! Emma Bryan</Card.Title>
    <br/>
    <Card.Text>
     

<Table hover style={{textAlign:"center"}}>
  <thead>
  </thead>
  <tbody>
    <tr>
      <td >Employee Type</td>
      <td style={{color:"blue"}}>Manager</td>
    </tr>
    <tr>
      <td>Email</td>
      <td style={{color:"blue"}}>emmabryan5@gmail.com</td>
    </tr>
    <tr>
      <td>Joining Date</td>
      <td style={{color:"blue"}}>2022-16-12</td>
    </tr>
    <tr>
      <td>No. Of Leaves</td>
      <td style={{color:"blue"}}>2</td>
    </tr>
    <tr>
      <td>Team ID</td>
      <td style={{color:"blue"}}>2</td>
    </tr>
  </tbody>
</Table>
    
    </Card.Text> 
  
   
    <Button variant="secondary">Edit Profile</Button>
  </Card.Body>
</Card>
                   
                  
        </Grid>
          </Paper></Grid>
          </>
      )
    }
  }

export default MyProfile;