import { Box } from "@material-ui/core";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

class Announcement extends React.Component {
  constructor() {
    super();
    this.state = {
      announcementText: "",
      announcementTitle: "",
      emp_type: -1,
      announcements: [],
      errorMessage: "",
    };
  }

  componentDidMount() {
    let userData = JSON.parse(localStorage.getItem("LoginData"));
    let emptype = userData.data[0].emp_type;
    this.setState({ emp_type: emptype });

    let data = [
      {
        firstName: "Sukaran",
        lastName: "Golani",
        title: "Christmas week",
        description:
          "Need a SonarScanner on runner where you building the p achieve it",
        datePosted: "19-March-2022",
      },
      {
        firstName: "Aditya",
        lastName: "Dixit",
        title: "New Year week",
        description:
          "Need a SonarScanner on runner where you building the p achieve it",
        datePosted: "19-March-2022",
      },
    ];

    this.setState({ announcements: data });
  }

  postAnnouncement = (event) => {
    event.preventDefault();
    if (this.validateAnnouncementForm()) {
      console.log("Hi");
    }
  };

  validateAnnouncementForm = () => {
    if (
      this.state.announcementText === "" ||
      this.state.announcementTitle === ""
    ) {
      let error = "Both the input fields are mandatory";
      this.setState({ errorMessage: error }, () => {
        return false;
      });
      toast.error(error, {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } else {
      this.setState({ errorMessage: "" }, () => {
        return true;
      });
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <Box
          sx={{
            width: "70%",
            ml: "15%",
            mt: 3,
            bgcolor: "background.paper",
            boxShadow: 1,
            borderRadius: 5,
            minHeight: 500
          }}
        >
          <br />
          <div className="display-6">Announcements</div>
          <form
            className="form-inline container-fluid mt-3 mb-4"
            onSubmit={this.postAnnouncement}
          >
            <div className="row">
              <div className="text-start col-10">
                <div className="fw-bolder">Post an Announcement</div>
                <div className="form-group form-inline">
                  <label htmlFor="Title">Title</label>
                  <input
                    className="form-control"
                    id="Title"
                    name="announcementTitle"
                    type="text"
                    placeholder="Enter announcement Title"
                    value={this.state.announcementTitle}
                    onChange={this.handleChange}
                  ></input>
                </div>
                <div className="form-group form-inline">
                  <label htmlFor="Description">Description</label>
                  <textarea
                    className="form-control"
                    id="Description"
                    name="announcementText"
                    placeholder="Enter announcement description"
                    rows="3"
                    value={this.state.announcementText}
                    onChange={this.handleChange}
                  ></textarea>
                </div>

                <small className="form-text text-muted">
                  Only employees below Job Level 5 can post an announcement
                </small>
              </div>
              <div className="col-2">
                <span
                  class="d-inline-block"
                  tabindex="0"
                  data-toggle="tooltip"
                  title="Only employees below Job Level 5 can post an announcement"
                >
                  <button
                    type="submit"
                    disabled={this.state.emp_type < 5 ? false : true}
                    className="btn btn-block btn-primary mt-5"
                  >
                    Submit
                  </button>
                </span>
              </div>
            </div>
            <hr />
          </form>
          <div className="container-fluid text-start">
            {this.state.announcements.map((post, index) => {
              return (
                <div className="row">
                  <div className="col-12">
                    <Card
                      className="mb-3"
                      sx={{ border: 1, borderColor: "gray" }}
                    >
                      <CardContent>
                        <Typography variant="h5" component="div">
                          {post.title}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          {post.datePosted}
                        </Typography>
                        <Typography variant="body2">
                          {post.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small">
                          Posted by {post.firstName + " " + post.lastName}
                        </Button>
                      </CardActions>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
          <ToastContainer />
        </Box>
      </React.Fragment>
    );
  }
}

export default Announcement;
