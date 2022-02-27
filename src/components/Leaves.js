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
    };
  }

  componentDidMount() {
    let token = "Bearer " + JSON.parse(localStorage.getItem("LoginData")).token;
    console.log(token);
    axios
      .get(
        "https://scrum-acers-backend.herokuapp.com/api/user/leavesInformation",
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
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
        console.log(res.data.data);
        this.setState({ rows: res.data.data });
      })
      .catch((err) => {
        console.log(err.response.data);
        this.setState({ errorMessage: err.response.data.message });
      });
  }

  handleChange = (e) => {
    let token = "Bearer " + JSON.parse(localStorage.getItem("LoginData")).token;
    let tabNum = parseInt(e.target.id.at(-1));
    this.setState({ value: tabNum, loader: true, rows: [], errorMessage: "" });
    if (tabNum === 0) {
      axios
        .get(
          "https://scrum-acers-backend.herokuapp.com/api/user/leavesInformation",
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        )
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err.response.data);
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
          console.log(res.data.data);
          this.setState({ rows: res.data.data });
        })
        .catch((err) => {
          console.log(err.response.data);
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
          console.log(err.response.data);
          this.setState({ errorMessage: err.response.data.message });
        });
    }
  };

  onSubmitClick = (row, status) => {
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
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN1bHQiOnsiZW1wX2lkIjoxfSwiaWF0IjoxNjQ1OTE5NzUzLCJleHAiOjE2NDU5NTU3NTN9.JP4FfYfXvW85l0TYEUtOW5A06K6ETjLKdiTsKmNrwnE",
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
          {this.state.errorMessage !== ""
            ? this.state.errorMessage
            : "Item One"}
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
