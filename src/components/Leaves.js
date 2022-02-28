import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axios from "axios";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Grid, TextField } from "@material-ui/core";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function TabPanel(props) {
  const { children, value, index, loader, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  loader: PropTypes.bool.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
    test: `${index}`,
  };
}

class Leaves extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      loader: false,
      rows: [],
      errorMessage: "",
      employee_id: "",
      manager_id: "",
      manager_email_id: "",
      leaveDesc: "",
      startDate: "",
      endDate: "",
      leaveDescError: "",
      dateError: "",
      successMessage:""
    };
  }

  componentDidMount() {
    let date = new Date();
    let date2 = new Date();
    date2.setDate(date2.getDate() + 1);
    let sDate = date.toISOString().split("T")[0];
    let eDate = date2.toISOString().split("T")[0];
    this.setState({
      employee_id: "",
      manager_id: "",
      manager_email_id: "",
      leaveDesc: "",
      startDate: sDate,
      endDate: eDate,
      leaveDescError: "",
      dateError: "",
      successMessage:""
    });
    let token = "";
    try {
      let data = JSON.parse(localStorage.getItem("LoginData"));
      token = "Bearer " + data.token;
      this.setState({ employee_id: data.data[0].emp_id });
    } catch {
      token = "";
    }
    axios
      .get(
        "http://localhost:4000/api/user/leavesInformation",
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then((res) => {
        this.setState({
          manager_id: res.data.data[0].team_leader_emp_id,
          manager_email_id: res.data.data[0].email,
        });
      })
      .catch((err) => {
        this.setState({ errorMessage: err.response.data.message });
      });
  }

  postSubmit() {
    let token = "Bearer " + JSON.parse(localStorage.getItem("LoginData")).token;
    axios
      .get(
        "https://scrum-acers-backend.herokuapp.com/api/user/leavesRequestsReceived",
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then((res) => {
        this.setState({ rows: res.data.data });
      })
      .catch((err) => {
        this.setState({ errorMessage: err.response.data.message });
      });
  }

  handleChange = (e) => {
    let LoginData=JSON.parse(localStorage.getItem("LoginData"))
    let token = "Bearer " + LoginData.token;
    let tabNum = parseInt(e.target.id.at(-1));
    this.setState({ value: tabNum, loader: true, rows: [], errorMessage: "" });
    if (tabNum === 0) {
      let date = new Date();
      let date2 = new Date();
      date2.setDate(date2.getDate() + 1);
      let sDate = date.toISOString().split("T")[0];
      let eDate = date2.toISOString().split("T")[0];
      this.setState({
        employee_id: LoginData.data[0].emp_id,
        manager_id: "",
        manager_email_id: "",
        leaveDesc: "",
        startDate: sDate,
        endDate: eDate,
        leaveDescError: "",
        dateError: "",
        successMessage:""
      });
      
      axios
        .get(
          "http://localhost:4000/api/user/leavesInformation",
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        )
        .then((res) => {
          this.setState({
            manager_id: res.data.data[0].team_leader_emp_id,
            manager_email_id: res.data.data[0].email,
          });
        })
        .catch((err) => {
          this.setState({ errorMessage: err.response.data.message });
        });
    } else if (tabNum === 1) {
      axios
        .get(
          "https://scrum-acers-backend.herokuapp.com/api/user/leavesRaised",
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        )
        .then((res) => {
          this.setState({ rows: res.data.data });
        })
        .catch((err) => {
          this.setState({ errorMessage: err.response.data.message });
        });
    } else if (tabNum === 2) {
      axios
        .get(
          "https://scrum-acers-backend.herokuapp.com/api/user/leavesRequestsReceived",
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        )
        .then((res) => {
          this.setState({ rows: res.data.data });
        })
        .catch((err) => {
          this.setState({ errorMessage: err.response.data.message });
        });
    }
  };

  onSubmitClick = (row, status) => {
    let token = "Bearer " + JSON.parse(localStorage.getItem("LoginData")).token;
    let data = {
      employee_id: row.employee_id,
      leaveId: row.leave_id,
      status: status,
      leave_start_date: row.leave_start_date.split("T")[0],
      leave_end_date: row.leave_end_date.split("T")[0],
    };
    axios
      .put(
        "https://scrum-acers-backend.herokuapp.com/api/user/leavesApproveReject",
        data,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        toast.success("Request Sent!", {
          position: toast.POSITION.BOTTOM_CENTER,
        });
        this.postSubmit();
      })
      .catch((err) => {
        console.log(err.response);
        this.setState({ errorMessage: err.response.data.message });
      });
  };

  newpaperstyle = {
    margin: "30px auto",
    width: 400,
    padding: "20px 20px",
  };

  pstyle = { color: "red" };

  successStyle = { color: "green" };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    this.validateField(event.target.name, event.target.value);
  };

  validateField = (fieldName, value) => {
    var message;
    let date;
    let date2;

    switch (fieldName) {
      case "leaveDesc":
        let regex = new RegExp(/^[A-z][A-z0-9 ]{4,}$/);
        value === ""
          ? (message = "Leave Description cannot be empty")
          : regex.test(value)
          ? (message = "")
          : (message =
              "Leave description should have more than 4 characters and no special characters");
        this.setState({ leaveDescError: message });
        break;

      case "startDate":
        date = new Date(value.replaceAll("-", "/"));
        date2 = new Date(this.state.endDate.replaceAll("-", "/"));
        date2 < date
          ? (message = "Start Date cannot be greater than End Date")
          : (message = "");
        this.setState({ dateError: message });
        break;

      case "endDate":
        date = new Date(value.replaceAll("-", "/"));
        date2 = new Date(this.state.startDate.replaceAll("-", "/"));
        date < date2
          ? (message = "Start Date cannot be greater than End Date")
          : (message = "");
        this.setState({ dateError: message });
        break;

      default:
        break;
    }
  };

  leaveRequest = (e) => {
    e.preventDefault();
    let d = JSON.parse(localStorage.getItem("LoginData"));
    let token = "Bearer " + d.token;
    let data = {
      emp_id: d.data[0].emp_id,
      manager_id: this.state.manager_id,
      leaveDesc: this.state.leaveDesc,
      start_date: this.state.startDate,
      end_date: this.state.endDate,
    };
    axios
      .post(
        "http://localhost:4000/api/user/leaveRequest",
        data,
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then((res) => {
        toast("Leave Request Raised", {
          position: toast.POSITION.BOTTOM_CENTER,
        });
        this.setState({
          leaveDesc: "",
          startDate: "",
          endDate: "",
          leaveDescError: "",
          dateError: "",
          successMessage:"Leave Request Raised Successfully"
        });
      })
      .catch((err) => {
        this.setState({ errorMessage: err.response.data.message });
      });
  };

  render() {
    return (
      <Box
        sx={{
          width: "80%",
          ml: "10%",
          mt: 3,
          bgcolor: "background.paper",
          boxShadow: 1,
          borderRadius: 2,
          minHeight: 500,
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            textColor="primary"
            indicatorColor="primary"
            value={this.state.value}
            onChange={this.handleChange}
            aria-label=""
          >
            <Tab
              value={0}
              sx={{ color: "black" }}
              label="Raise Leave Request"
              {...a11yProps(0)}
            />
            <Tab
              value={1}
              sx={{ color: "black" }}
              label="View Raised Requests"
              {...a11yProps(1)}
            />
            <Tab
              value={2}
              sx={{ color: "black" }}
              label="Requests Received for Approval"
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
        <TabPanel value={this.state.value} index={0} loader={true}>
          {this.state.errorMessage !== "" ? (
            this.state.errorMessage
          ) : (
            <Grid>
              <Paper elevation={15} style={this.newpaperstyle}>
                <Grid>
                  <h2>Leave Request Form</h2>
                </Grid>
                <form onSubmit={this.leaveRequest}>
                  <TextField
                    fullWidth
                    type="text"
                    name="empId"
                    label="Employee ID"
                    placeholder=""
                    value={this.state.employee_id}
                    disabled
                  />
                  <TextField
                    fullWidth
                    type="text"
                    name="managerId"
                    label="Manager Email ID"
                    placeholder=""
                    value={this.state.manager_email_id}
                    disabled
                  />
                  <TextField
                    fullWidth
                    type="text"
                    name="leaveDesc"
                    label="Leave description"
                    placeholder="Enter description"
                    value={this.state.leaveDesc}
                    onChange={this.onChange}
                  />
                  {this.state.leaveDescError !== "" ? (
                    <p style={this.pstyle}>{this.state.leaveDescError}</p>
                  ) : (
                    ""
                  )}
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Grid spacing={8} container>
                      <Grid item>
                        <TextField
                          id="date"
                          label="Leave From Date"
                          name="startDate"
                          type="date"
                          defaultValue={this.state.startDate}
                          onChange={this.onChange}
                          sx={{ width: 220 }}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          id="date"
                          label="Leave To Date"
                          name="endDate"
                          type="date"
                          onChange={this.onChange}
                          defaultValue={this.state.endDate}
                          sx={{ width: 220 }}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </Grid>
                    </Grid>
                  </LocalizationProvider>
                  {this.state.dateError !== "" ? (
                    <p style={this.pstyle}>{this.state.dateError}</p>
                  ) : (
                    ""
                  )}
                  <br />
                  <br />
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={
                      this.state.leaveDesc === "" ||
                      this.state.startDate === "" ||
                      this.state.endDate === "" ||
                      this.state.leaveDescError !== "" ||
                      this.state.dateError !== ""
                    }
                  >
                    Submit
                  </Button><br/>
                  <p style={this.successStyle}>{this.state.successMessage?this.state.successMessage:''}</p>
                </form>
              </Paper>
            </Grid>
          )}
        </TabPanel>
        <TabPanel value={this.state.value} index={1} loader={true}>
          {this.state.rows.length !== 0 ? (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">Leave ID</StyledTableCell>
                    <StyledTableCell align="center">
                      Leave Description
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      Leave from date
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      Leave to date
                    </StyledTableCell>
                    <StyledTableCell align="center">Manager ID</StyledTableCell>
                    <StyledTableCell align="center">Status</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.rows.map((row) => (
                    <StyledTableRow key={row.leave_id}>
                      <StyledTableCell
                        align="center"
                        component="th"
                        scope="row"
                      >
                        {row.leave_id}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.leave_desc}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.leave_start_date.split("T")[0]}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.leave_end_date.split("T")[0]}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.manager_id}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.status}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            this.state.errorMessage
          )}
        </TabPanel>
        <TabPanel value={this.state.value} index={2} loader={true}>
          {this.state.rows.length !== 0 ? (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">
                      Employee ID
                    </StyledTableCell>
                    <StyledTableCell align="center">Leave ID</StyledTableCell>
                    <StyledTableCell align="center">
                      Leave Description
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      Leave from date
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      Leave to date
                    </StyledTableCell>
                    <StyledTableCell align="center">Status</StyledTableCell>
                    <StyledTableCell align="center">
                      Approve/Reject
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.rows.map((row) => (
                    <StyledTableRow key={row.leave_id}>
                      <StyledTableCell
                        align="center"
                        component="th"
                        scope="row"
                      >
                        {row.employee_id}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.leave_id}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.leave_desc}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.leave_start_date.split("T")[0]}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.leave_end_date.split("T")[0]}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.status}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.status === "pending" ? (
                          <div>
                            <Button
                              variant="contained"
                              onClick={() =>
                                this.onSubmitClick(row, "approved")
                              }
                            >
                              Approve
                            </Button>
                            <br />
                            <br />
                            <Button
                              variant="contained"
                              color="error"
                              onClick={() =>
                                this.onSubmitClick(row, "rejected")
                              }
                            >
                              Reject
                            </Button>
                          </div>
                        ) : (
                          "Approval/Rejection sent"
                        )}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            this.state.errorMessage
          )}
        </TabPanel>
      </Box>
    );
  }
}

// export default function BasicTabs() {
//   const [value, setValue] = React.useState(0);
//   const [loader, setLoader] = React.useState(false);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//     setLoader(true);

//   };

//   React.useEffect(() => {
//     let timeout;
//     console.log("Time")

//    timeout=setTimeout(()=>{
//     setLoader(false);
// },2000)

//     return () => {
//         clearTimeout(timeout);
//     };
// });

//   return (
//     <Box sx={{ width: '80%', ml:'10%', mt:3, bgcolor:'background.paper', boxShadow: 1, borderRadius: 2, minHeight:500}}>
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs textColor="primary"
//   indicatorColor="primary" value={value} onChange={handleChange} aria-label="">
//           <Tab sx={{color:'black'}} label="Raise Leave Request" {...a11yProps(0)} />
//           <Tab sx={{color:'black'}} label="View Raised Requests" {...a11yProps(1)} />
//           <Tab sx={{color:'black'}} label="Requests Received for Approval" {...a11yProps(2)} />
//         </Tabs>
//       </Box>
//       <TabPanel value={value} index={0} loader={true}>
//         Item One
//       </TabPanel>
//       <TabPanel value={value} index={1} loader={true}>
//         Item Two
//       </TabPanel>
//       <TabPanel value={value} index={2} loader={true}>
//         Item Three
//       </TabPanel>
//     </Box>
//   );
// }

export default Leaves;
