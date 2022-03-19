import { Box } from "@material-ui/core";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";

class Announcement extends React.Component {
  constructor() {
    super();
    this.state = {
      announcementText: "",
      announcementTitle: "",
      emp_type: -1,
      errorMessage: "",
    };
  }

  componentDidMount() {
    let userData = JSON.parse(localStorage.getItem("LoginData"));
    let emptype = userData.data[0].emp_type;
    this.setState({ emp_type: emptype });
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
            width: "80%",
            ml: "10%",
            mt: 3,
            bgcolor: "background.paper",
            boxShadow: 1,
            borderRadius: 5,
            minHeight: 500,
          }}
        >
          <br />
          <div className="display-6">Announcements</div>
          <form
            className="form-inline container-fluid mt-3"
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
                  Only employee's below Job Level 5 can post an announcement
                </small>
              </div>
              <div className="col-2">
                <button
                  type="submit"
                  disabled={this.state.emp_type < 6 ? false : true}
                  className="btn btn-primary mt-5"
                >
                  Submit
                </button>
              </div>
            </div>
            <hr />
          </form>

          <ToastContainer />
        </Box>
      </React.Fragment>
    );
  }
}

export default Announcement;
