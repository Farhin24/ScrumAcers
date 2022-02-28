// import Logo from '../images/Logo.png'
// import '../css/header.css'
// const h1={margin:'20px',color:'grey'}
// const Header=()=>
// {
//     return(
//         <div className="header">
//         <div className="header-t">
//           <div className="header-logo">
//             <a href="/" className="header-logo"><img src={Logo}/></a>
//           </div>
//           <h1 style={h1}> <i>&ensp;&ensp;&ensp;Manage your daily scrum activities here!</i></h1>
//        </div>
// </div>
// )
//     }

import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Logo from "../images/Logo2.png";
import {connect} from 'react-redux'
import {logout} from '../action'

class Header extends React.Component{
  constructor(){
    super();
    
  }

  handleClick=()=>{
    localStorage.clear();
    this.props.changeStatus();
  }

  render(){
    console.log(this.props.username)
    return (
      <Box sx={{ bgcolor: "background.paper", flexGrow: 1 }}>
        <AppBar className="testing-header" position="static">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <img src={Logo} alt="Scrum Acers"/>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Manage your daily scrum activities here!
            </Typography>
            {this.props.username===""?
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button>Login</Button>
            </Link>:
            <React.Fragment>
            <Link to="/StandUpForm" style={{ textDecoration: "none" }}>
              <Button>Scrum Form</Button>
            </Link>
            <Link to="/Leaves" style={{ textDecoration: "none" }}>
              <Button>Apply Leave</Button>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button onClick={this.handleClick}>Logout</Button>
            </Link>
            </React.Fragment>}
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}

const mapStateToProps=(state)=>{
  return {
    username:state.username,
    userId:state.userId,
    loggedIn:state.loggedIn
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    changeStatus:()=>{dispatch(logout())}
  }
}

// export default Header;
export default connect(mapStateToProps,mapDispatchToProps)(Header);
