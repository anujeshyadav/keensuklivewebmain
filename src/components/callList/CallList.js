import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import LayoutOne from "../../../layouts/LayoutOne";
import astrologinbg from "../../../assets/img/astrologin-bg.jpg";
import axiosConfig from "../../../axiosConfig";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import swal from "sweetalert";

class CallList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allUserList: [],
      allminrechargeList: [],
      data: {},
      fullname: "",
      all_skills: "",
      language: "",
      long_bio: "",
      Exp: "",
      sunday: "",
      monday: "",
      friday: "",
      thursday: "",
      tuesday: "",
      wednesday: "",
      saturday: "",
      To: "",
      callCharge: "",
      Form: "",
      astrid: "",
      userid: "",
      astroMobile: "",
      Gallary: [],
      astroId: "",
      astro: "",
      avg_rating: [false],
    };

    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  handleVideocall = () => {
    console.log(this.state.fullname);
  };

  handleDeleteList = deleteId => {
    axiosConfig
      .get(`admin/dlt_ChatIntek/${deleteId}`)
      .then(resp => {
        this.getuserList();
      })
      .catch(err => {
        console.log("er", err);
      });
  };

  componentDidMount = () => {
    this.getuserList();
    // let astroId = localStorage.getItem("videoCallAstro_id");
    let astroid = localStorage.getItem("astroId");
    axiosConfig
      .get(`/admin/getoneAstro/${astroid}`)
      .then(response => {
        console.log("AstroViewOne", response.data?.data);
        localStorage.setItem("astroname", response?.data?.data?.fullname);
        localStorage.setItem("channelName", response?.data?.data?.channelName);
        this.setState({
          fullname: response.data.data.fullname,
          all_skills: response.data.data.all_skills,
          language: response.data.data.language,
          img: response.data.data.img[0],
          avg_rating: response.data.data.avg_rating,
          Exp: response.data.data.Exp,
          callCharge: response.data.data.callCharge,
          long_bio: response.data.data.long_bio,
          msg: response.data.data.msg,
          astroMobile: response?.data?.data?.mobile,
          status: response?.data?.data?.status,
          exp_in_years: response.data.data.exp_in_years,
          astroId: response?.data?.data?._id,
          sunday: response.data.data.sunday,
          monday: response.data.data.monday,
          friday: response.data.data.friday,
          tuesday: response.data.data.tuesday,
          thursday: response.data.data.thursday,
          saturday: response.data.data.saturday,

          wednesday: response.data.data.wednesday,
          mobile: response.data.data.mobile,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  getuserList = () => {
    let userId = JSON.parse(localStorage.getItem("user_id"));

    axiosConfig
      .get(`/admin/intekListByUser/${userId}`)
      .then(response => {
        if (response.data.status === true) {
          console.log("userId>>>>>>[[[ListData]]", response.data.data);
          this.setState({ allUserList: response.data.data });
          this.setState({ allminrechargeList: response.data.data });
        }
      })
      .catch(error => {
        console.log(error);
        console.log(error.response);
      });
  };
  handleCalling = selectedId => {
    let userId = JSON.parse(localStorage.getItem("user_id"));
    let mobileNo = JSON.parse(localStorage.getItem("user_mobile_no"));
    let astroid = localStorage.getItem("astroId");
    let obj = {
      userid: userId,
      astroid: astroid,
      From: this.state.mobile, //astro no
      To: mobileNo, //user no
    };
    axiosConfig
      .post(`/user/addCallWallet`, obj)
      .then(ress => {
        if (ress.data.status === true) {
          axiosConfig
            .post(`/user/make_call`, obj)
            .then(response => {
              console.log("Calling", response.data);
              swal("Call Connected", "SuccessFully");
            })

            .catch(error => {
              swal("Alert", "Your Number is not whitelisted");
            });
        } else {
          swal("Alert", "Insufficient Balance");
        }
      })
      .catch(err => {
        console.log("err", err);
        swal("Error", err);
      });
  };

  handleBalacecheck = () => {
    let userId = JSON.parse(localStorage.getItem("user_id"));
    let { id } = this.props.match.params;
    console.log(userId, id);

    if (userId !== "" && userId !== null) {
      const data = {
        userid: userId,
        astroid: id,
      };

      axiosConfig
        .post(`/user/addCallWallet`, data)
        .then(response => {
          console.log(response.data);
          if (response.data.status === true) {
            this.props.history.push("/UserRequestFormVideoCall");
            //
          } else swal("Recharge", "you don't have enough Balance");
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      swal("Need to Login first");
    }
  };
  render() {
    const { allUserList } = this.state;
    return (
      <LayoutOne headerTop="visible">
        <section className="pt-0 pb-0">
          <div
            className=""
            style={{
              float: "left",
              width: "100%",
              backgroundColor: "#272727",
              position: "relative",
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              color: "#ffffff",
              padding: " 50px 0px 50px 0px",
              backgroundImage: `url(${astrologinbg})`,
              backgroundPosition: "center center",
              backgroundRepeat: " no-repeat",
              textAlign: "center",
            }}
          >
            <Container>
              <Row>
                <Col md="12">
                  <div className="leftcont text-left">
                    <h1 style={{ color: "#fff" }}>User List </h1>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <div className="col-lg-12 col-md-12 mb-30">
          <div className="category-home">
            <section className="pt-0">
              <Container>
                <Row>
                  <div className="my-1">
                    <Link
                      to="/userrequestformCall"
                      className="btn btn-denger wr"
                    >
                      <button className="btn btn-denger wr">
                        Add New Intake Form
                      </button>
                    </Link>
                  </div>
                  {allUserList?.length ? (
                    allUserList?.map((list, index) => {
                      return (
                        <Col md="4" key={index} className="mt-1">
                          <div className="card ">
                            <div className="card-body ">
                              <ul>
                                <li className="">
                                  FirstName:
                                  <span>{list.firstname}</span>
                                  <div
                                    className="delete"
                                    style={{ float: "right" }}
                                    onClick={() =>
                                      this.handleDeleteList(list._id)
                                    }
                                  >
                                    <i
                                      class="fa fa-trash-o"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                </li>
                                {/* <li>
                                  LastName:
                                  <span>{list.lastname}</span>
                                </li> */}
                                <li>
                                  BirthPlace:
                                  <span>{list.birthPlace}</span>
                                </li>
                                <li>
                                  Date Of Time:
                                  <span>{list.date_of_time}</span>
                                </li>
                                <li>
                                  Date Of Birth:
                                  <span>{list.dob}</span>
                                </li>
                                <li>
                                  Gender:
                                  <span>{list.gender}</span>
                                </li>
                                <li>
                                  Mobile:
                                  <span>{list.mobile}</span>
                                </li>
                                <li>
                                  Occupation:
                                  <span>{list.occupation}</span>
                                </li>
                                <li>
                                  Marital Status:
                                  <span>{list.marital_status}</span>
                                </li>
                                {list.p_birthPlace ? (
                                  <li>
                                    Partner BirthPlace:
                                    <span>{list.p_birthPlace}</span>
                                  </li>
                                ) : null}
                                {list.p_date_of_time ? (
                                  <li>
                                    Partner Date Of Time:
                                    <span>{list.p_date_of_time}</span>
                                  </li>
                                ) : null}
                                {list.p_firstname ? (
                                  <li>
                                    Partner First Name:
                                    <span>{list.p_firstname}</span>
                                  </li>
                                ) : null}
                                {list.p_lastname ? (
                                  <li>
                                    Partner Last Name:
                                    <span>{list.p_lastname}</span>
                                  </li>
                                ) : null}

                                {/* <Link to="#"> */}
                                <div style={{ float: "right" }}>
                                  <button
                                    className="btn btn-denger wr"
                                    onClick={() => this.handleCalling(list._id)}
                                  >
                                    Start Call
                                  </button>
                                </div>
                                {/* </Link> */}
                              </ul>
                            </div>
                          </div>
                        </Col>
                      );
                    })
                  ) : (
                    <h3 className="text-center">No Intake Form Available</h3>
                  )}
                </Row>
              </Container>
            </section>
          </div>
        </div>

        {/* modal for recharge*/}
        <Modal
          size="md"
          style={{ maxWidth: "600px", width: "100%" }}
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader className="wr-3" toggle={this.toggle}>
            <h2 className="wr-4">Recharge Now</h2>
          </ModalHeader>
          <ModalBody>
            <div className="Wr-1">
              <h3>
                Minimum balance of 5 minutes (INR 25.0) is required to start
                call with RajnishM
              </h3>
              <Link className="wr-5">
                <Button color="secondary" onClick={this.toggle}>
                  Cancel
                </Button>
              </Link>
              <Link className="wr-6" to="/walletmoney">
                <Button>Recharge</Button>
              </Link>
            </div>
          </ModalBody>
        </Modal>
      </LayoutOne>
    );
  }
}
export default CallList;
