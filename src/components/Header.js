import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Logo from "../images/Logo2.png";
import { connect } from "react-redux";
import { logout } from "../action";
import { slide as Burger, Item } from "burger-menu";
import "burger-menu/lib/index.css";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  setIsOpen = (isOpen) => {
    this.setState({ isOpen: isOpen });
  };

  handleClick = () => {
    localStorage.clear();
    this.props.changeStatus();
  };

  render() {
    return (
      <Box sx={{ bgcolor: "background.paper", flexGrow: 1 }}>
        <AppBar className="testing-header" position="static">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { md: "flex" } }}
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                <img src={Logo} alt="Scrum Acers" />
              </Link>
            </Typography>
            <Typography variant="h5" style={{marginRight:"10%",textShadow:"1px 1px",color:"darkcyan"}} component="div" sx={{ flexGrow: 1 }}>
              Manage your daily scrum activities here!
            </Typography>
            {this.props.username === "" ? (
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button>Login</Button>
              </Link>
            ) : (
              <React.Fragment>
                <div onClick={() => this.setIsOpen(!this.state.isOpen)}>
                  <i className="fa fa-bars fa-lg" />
                </div>
                <Burger
                  className="burger-menu"
                  isOpen={this.state.isOpen}
                  selectedKey={"entry"}
                  onClose={() => this.setIsOpen(false)}
                >
                  <Link to="/MyProfile" style={{ textDecoration: "none" }}>                    
                    <Item
                      itemKey={"myProfile"}
                      text={"My Profile"}
                      onClick={() => this.setIsOpen(!this.state.isOpen)}
                    ></Item>
                  </Link>
                  <Link to="/Announcement" style={{ textDecoration: "none" }}>
                    <Item
                      itemKey={"announcements"}
                      text={"Announcements"}
                      onClick={() => this.setIsOpen(!this.state.isOpen)}
                    ></Item>
                  </Link>
                  <Link to="/StandUpForm" style={{ textDecoration: "none" }}>
                    <Item
                      itemKey={"scrumform"}
                      onClick={() => this.setIsOpen(!this.state.isOpen)}
                      text={"Scrum Form"}
                    ></Item>
                  </Link>
                  <Link to="/Leaves" style={{ textDecoration: "none" }}>
                    <Item
                      itemKey={"leaves"}
                      onClick={() => this.setIsOpen(!this.state.isOpen)}
                      text={"Apply Leaves"}
                    ></Item>
                  </Link>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <Item
                      onClick={this.handleClick}
                      itemKey={"logout"}
                      text={"Logout"}
                    ></Item>
                  </Link>
                </Burger>
              </React.Fragment>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.username,
    userId: state.userId,
    loggedIn: state.loggedIn
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeStatus: () => {
      dispatch(logout());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
