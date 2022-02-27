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

export function Header() {
  return (
    <Box sx={{ bgcolor: "background.paper", flexGrow: 1 }}>
      <AppBar position="static">
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
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button>Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
