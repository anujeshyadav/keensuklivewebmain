import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import {
  Container,
  Row,
  Col,
  ModalHeader,
  ModalBody,
  Modal,
  FormGroup,
} from "reactstrap";

import { BsFillChatDotsFill } from "react-icons/bs";

import { NavItem, TabContent, Nav, TabPane } from "reactstrap";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";
import { Label, Input, Button } from "reactstrap";
import "../../assets/scss/astroteam.scss";
import LayoutOne from "../../layouts/LayoutOne";
import axiosConfig from "../../axiosConfig";

import Form from "react-bootstrap/Form";
import swal from "sweetalert";

import { Fetchuserdetail } from "../header/IconGroup";
import {
  AstroSkills,
  AstroStatus,
  Language,
  Specialisation,
} from "./skills/AstroSkills";
// import UserContext from "../../Context/Context";
import { parse } from "uuid";

class ChatAstrologerlist extends React.Component {
  // static contextType = UserContext;
  constructor(props) {
    super(props);

    this.state = {
      AstroStatus: "",
      useramount: "",
      Astrolanguage: "",
      astroSpecialzation: "",
      Skilldata: "",
      fullname: "",
      email: "",
      mobile: "",
      dob: "",
      gender: "",
      city: "",
      userimg: "",
      selectedName: "",
      selectedFile: null,
      otp: "",
      otpMsg: "",
      callingmode: false,
      indexnow: null,
      astrologerList: [],
      From: "",
      To: "",
      astroid: "",
      userid: "",
      modal: false,
      modalone: false,
      price_high_to_low: [],
      activeTab: 1,
    };

    this.toggle = this.toggle.bind(this);
    this.toggleone = this.toggleone.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  toggleone() {
    this.setState({
      modalone: !this.state.modalone,
    });
  }
  togglefilter = (tab) => {
    if (this.state.activeTab !== tab) this.setState({ activeTab: tab });
  };
  // changeHandler = (e) => {
  //   e.preventDefault();
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  FilterAstro = (e) => {
    e.preventDefault();
    this.toggle();
    // this.handlestartInterval();
    let skil = this.state.Skilldata;
    let status = this.state.AstroStatus;
    let Astrolangua = this.state.Astrolanguage;
    let astroSpecialzat = this.state.astroSpecialzation;
    axiosConfig
      .get(
        `/user/getAstroFilter?language=${Astrolangua}&all_skills=${skil}&status=${status}&specification=${astroSpecialzat}`
      )
      .then((res) => {
        console.log(res?.data);
        this.setState({ astrologerList: res?.data?.astrologers });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state.data);
    const data = new FormData();
    data.append("fullname", this.state.fullname);
    data.append("email", this.state.email);
    data.append("mobile", this.state.mobile);
    data.append("gender", this.state.gender);
    data.append("city", this.state.city);
    data.append("dob", this.state.dob);
    if (this.state.selectedFile !== null) {
      data.append("userimg", this.state.selectedFile, this.state.selectedName);
    }
    // for (var value of data.values()) {
    //   console.log(value);
    // }
    // for (var key of data.keys()) {
    //   console.log(key);
    // }
    // this.setState({ otp: false });
    axiosConfig
      .post(`/user/usersignup`, data)
      .then((response) => {
        console.log(response.data.msg);
        localStorage.setItem("auth-token", response.data.token);
        this.setState({
          // token: response.data.token,
          otpMsg: response.data.otp,
        });
        swal("Success!", " Register Successful Done!", "success");
        this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error.response);
        swal("Error!", "Something went wrong", "error");
      });
  };

  handlestartInterval = () => {
    setInterval(() => {
      Fetchuserdetail();
      axiosConfig
        .get("/admin/allAstro")
        .then((response) => {
          if (response.data.status === true) {
            this.setState({ astrologerList: response.data.data });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }, 45000);
  };

  componentDidMount = () => {
    const userId = JSON.parse(localStorage.getItem("user_id"));
    axiosConfig
      .get(`/user/viewoneuser/${userId}`)
      .then((res) => {
        this.setState({ useramount: res.data?.data?.amount });
      })
      .catch((err) => {
        console.log(err);
      });
    axiosConfig
      .get("/admin/allAstro")
      .then((response) => {
        // console.log(response.data);
        if (response.data.status === true) {
          this.setState({ astrologerList: response.data.data });
          this.handlestartInterval();
        }
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
      });

    axiosConfig
      .get("/user/price_high_to_low")
      .then((response) => {
        // console.log(response.data);
        if (response.data.status === true) {
          this.setState({
            price_high_to_low: response.data.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
      });
  };

  submitHandlerCall = (e, astroid, mobile, astrodata, index) => {
    e.preventDefault();
    console.log(astrodata);
    // this.props.history.push("/UserRequestFormCall");
    // let mobileNo = JSON.parse(localStorage.getItem("user_mobile_no"));
    let userId = JSON.parse(localStorage.getItem("user_id"));
    localStorage.setItem("astroId", astrodata?._id);
    localStorage.setItem("astroname", astrodata?.fullname);

    if (userId !== "" && userId !== null) {
      // const data = {
      //   userid: userId,
      //   astroid: astroid,
      // };
      let astrocharge = astrodata?.callCharge * 5;
      let useramount = this.state.useramount;
      if (
        astrodata?.waiting_tym === 0 &&
        astrodata?.callingStatus == "Available"
      ) {
        if (useramount > astrocharge) {
          this.props.history.push("/UserRequestForm");
        } else
          swal(
            "Recharge Now",
            "You Donot have Enough balance to Make This Call",
            {
              buttons: {
                cancel: "Recharge Now",
                catch: { text: "Cancel ", value: "catch" },
              },
            }
          ).then((value) => {
            switch (value) {
              case "catch":
                // swal("Sure Want to cancel it");
                break;
              default:
                this.props.history.push("/walletmoney");
            }
          });

        // axiosConfig
        //   .post(`/user/addCallWallet`, data)
        //   .then((response) => {
        //     console.log("@@@callingmode", response.data);
        //     if (response.data?.msg === "success") {
        //       this.props.history.push("/UserRequestForm");
        //     } else
        //       swal(
        //         "Recharge Now",
        //         "You Donot have Enough balance to Make This Call",
        //         {
        //           buttons: {
        //             cancel: "Recharge Now",
        //             catch: { text: "Cancel ", value: "catch" },
        //           },
        //         }
        //       ).then((value) => {
        //         switch (value) {
        //           case "catch":
        //             // swal("Sure Want to cancel it");
        //             break;
        //           default:
        //             this.props.history.push("/walletmoney");
        //         }
        //       });
        //   })
        //   .catch((error) => {
        //     console.log(error);
        //     // swal('Error!', 'Invalid!', 'error')
        //   });
      } else {
        console.log(useramount, astrocharge);
        if (useramount > astrocharge) {
        }
        swal(
          `Astrologer is Busy`,
          "Do You Want to Be in queue ",

          {
            buttons: {
              cancel: "Be in queue",
              catch: { text: "Cancel ", value: "catch" },
            },
          }
        ).then((value) => {
          switch (value) {
            case "catch":
              break;
            default:
              let astroid = localStorage.getItem("astroId");
              let userId = JSON.parse(localStorage.getItem("user_id"));
              let payload = {
                userId: this.state.UserId,
                callType: "Chat",
              };

              axiosConfig
                .post(`/user/make_another_call/${astroid}`, payload)
                .then((res) => {
                  console.log(res);
                })
                .catch((err) => {
                  console.log(err);
                });
          }
        });
      }
    } else {
      swal("Need to Login first");
      // this.setState({ modal: true });
    }

    // this.setState({ indexnow: index });

    // let astroId = astroid;
    // let obj = {
    //   userid: userId,
    //   astroid: astroId,
    //   From: mobile, //parseInt(this.state.number)
    //   To: mobileNo, //parseInt(this.state.number)
    // };
    // if (userId !== "" && userId !== null) {
    //   const data = {
    //     userid: userId,
    //     astroid: astroId,
    //   };
    //   this.setState({ callingmode: true });

    //   axiosConfig
    //     .post(`/user/addCallWallet`, data)
    //     .then((response) => {
    //       if (response.data.msg === "Insufficient belence") {
    //         swal(" Not Enought Balance to make this call", "Recharge First");
    //       }
    //       if (response.data.status === true) {
    //         axiosConfig
    //           .post(`/user/make_call`, obj)
    //           .then((response) => {
    //             console.log("Calling", response.data);
    //             swal("Calling to Astrologer");
    //           })
    //           .catch((error) => {
    //             console.log(error?.response?.data?.error);
    //             if (error?.response?.data?.error) {
    //               swal("Try again after some Time ", "Internal server");
    //               this.setState({ callingmode: false });
    //             }
    //           });
    //       }
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       // swal('Error!', 'Invalid!', 'error')
    //     });
    // } else {
    //   swal("Need to Login first");
    //   // this.setState({ modal: true });
    // }
  };

  filterMethod = (name) => {
    axiosConfig
      .get(`/user/` + name)
      .then((response) => {
        console.log(response.data);
        if (response.data.status === true) {
          this.setState({
            astrologerList: response.data.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
      });
  };

  render() {
    const { astrologerList } = this.state;

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
                    <h1>Chat With Astrologer</h1>
                    <p></p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <section id="team" class="pb-5 ">
          <Container>
            <Row>
              <Col md="3">
                <div className="bx-list fbg">
                  <h3 className="mb-3">
                    <b>Sort By:</b>
                  </h3>
                  <hr />
                  <form>
                    <ul>
                      <li>
                        <span>
                          <Form.Check
                            type="radio"
                            aria-label="radio 1"
                            name="id"
                            onChange={() =>
                              this.filterMethod("exp_high_to_low")
                            }
                          />
                        </span>
                        Experience : High to Low
                      </li>
                      <li>
                        <span>
                          <Form.Check
                            type="radio"
                            aria-label="radio 2"
                            name="id"
                            onChange={() =>
                              this.filterMethod("exp_low_to_high")
                            }
                          />
                        </span>
                        Experience : Low to High
                      </li>
                      <li>
                        <span>
                          <Form.Check
                            type="radio"
                            aria-label="radio 3"
                            name="id"
                            onChange={() =>
                              this.filterMethod("price_high_to_low")
                            }
                          />
                        </span>
                        Price : High to Low
                      </li>
                      <li>
                        <span>
                          <Form.Check
                            type="radio"
                            aria-label="radio 4"
                            name="id"
                            onChange={() =>
                              this.filterMethod("price_low_to_high")
                            }
                          />
                        </span>
                        Price : Low to High
                      </li>
                      <li>
                        <span>
                          <Form.Check
                            type="radio"
                            aria-label="radio 5"
                            name="id"
                            onChange={() =>
                              this.filterMethod("rating_high_to_low")
                            }
                          />
                        </span>
                        Rating : High to Low
                      </li>
                      <li>
                        <span>
                          <Form.Check
                            type="radio"
                            aria-label="radio 6"
                            name="id"
                            onChange={() =>
                              this.filterMethod("rating_low_to_high")
                            }
                          />
                        </span>
                        Rating : Low to High
                      </li>

                      <hr />
                      <div>
                        <Row>
                          <Col lg="5" md="5" sm="5">
                            <h3 className="mb-3 mt-1">
                              <Button
                                className="filtericon"
                                onClick={() => this.toggle()}
                              >
                                Filter{" "}
                                <i class="fa fa-filter" aria-hidden="true"></i>
                              </Button>
                            </h3>
                          </Col>
                          {this.state.Skilldata?.length ||
                          this.state.AstroStatus?.length ||
                          this.state.Astrolanguage?.length ||
                          this.state.astroSpecialzation?.length ? (
                            <>
                              <Col>
                                <h3 className="mb-3 mt-1">
                                  <Button
                                    className="filtericon"
                                    onClick={this.componentDidMount}
                                  >
                                    ClearFilter
                                    <i
                                      class="fa fa-filter"
                                      aria-hidden="true"
                                    ></i>
                                  </Button>
                                </h3>
                              </Col>
                            </>
                          ) : null}
                        </Row>
                      </div>
                    </ul>
                  </form>
                </div>
              </Col>
              <Col md="9">
                <Row className="mt-2">
                  {astrologerList?.length
                    ? astrologerList?.map((astrologer, index) => {
                        return (
                          <Col md="4" key={index}>
                            <div className="image-flip">
                              <div className="mainflip flip-0">
                                <div className="frontside">
                                  <div className="card">
                                    <div className="card-body text-center">
                                      <p>
                                        <Link
                                          to={
                                            "/astrologerdetail/" +
                                            astrologer._id
                                          }
                                        >
                                          <img src={astrologer?.img} alt="" />
                                        </Link>
                                      </p>
                                      <h4 className="card-title">
                                        {astrologer?.fullname}
                                      </h4>
                                      <ul className="mb-3">
                                        <li>
                                          Specility:{" "}
                                          <span>{astrologer?.all_skills}</span>
                                        </li>
                                        <li>
                                          Language:{" "}
                                          <span>{astrologer?.language}</span>
                                        </li>
                                        <li>
                                          Experience:{" "}
                                          <span>
                                            {astrologer?.exp_in_years}
                                          </span>
                                        </li>
                                        <li>
                                          Call Rate:{" "}
                                          <span>
                                            {astrologer?.callCharge}/Min
                                          </span>
                                        </li>
                                      </ul>

                                      {astrologer?.waiting_tym === 0 ? (
                                        <>
                                          <span
                                            className="sr-btn"
                                            onClick={(e) =>
                                              this.submitHandlerCall(
                                                e,
                                                astrologer?._id,
                                                astrologer?.mobile,
                                                astrologer,
                                                index
                                              )
                                            }
                                          >
                                            {this.state.callingmode === true &&
                                            this.state.indexnow === index ? (
                                              <>
                                                <span>
                                                  <div className="btn btn-primary btn-sm sc">
                                                    <i className="fas fa-comment">
                                                      {" "}
                                                      Chat
                                                    </i>
                                                  </div>
                                                </span>
                                              </>
                                            ) : (
                                              <>
                                                <span>
                                                  <div className="btn btn-success btn-sm sc">
                                                    <BsFillChatDotsFill
                                                      size="15px"
                                                      className=""
                                                    />
                                                    <span className="mx-1">
                                                      Chat
                                                    </span>
                                                  </div>
                                                </span>
                                              </>
                                            )}
                                          </span>
                                        </>
                                      ) : (
                                        <>
                                          <button className="btn btn-denger wr">
                                            <i class="fa fa-phone">Wait</i>
                                          </button>
                                        </>
                                      )}

                                      <br />
                                      <span value={this.state.waiting_tym}>
                                        {" "}
                                        Wait ~ {astrologer.waiting_tym}Min
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                        );
                      })
                    : null}
                </Row>
              </Col>
            </Row>
          </Container>

          <div>
            <Modal
              style={{ maxWidth: "900px" }}
              size="lg"
              isOpen={this.state.modal}
              toggle={this.toggle}
              // className={this.props.className}
            >
              <ModalHeader toggle={this.toggle}>Filters</ModalHeader>
              <ModalBody>
                <div className="">
                  <div className="container">
                    <div>
                      <Nav tabs vertical>
                        <Row>
                          <Row>
                            <Col
                              className="tabcontentheadings"
                              lg="3"
                              md="3"
                              sm="3"
                            >
                              <Row>
                                <NavItem className="mb-1 mt-1">
                                  <a
                                    className={classnames({
                                      active: this.state.activeTab === "1",
                                    })}
                                    onClick={() => {
                                      this.togglefilter("1");
                                    }}
                                  >
                                    <Button
                                      style={{
                                        background: `${
                                          this.state.activeTab === "1"
                                            ? "#e3ac2e"
                                            : "none"
                                        }`,
                                      }}
                                      className="filtericon"
                                    >
                                      <span
                                        className="filtertext"
                                        style={{ color: "black" }}
                                      >
                                        {" "}
                                        Skills
                                      </span>
                                    </Button>
                                  </a>
                                </NavItem>
                              </Row>
                              <Row>
                                <NavItem className="mb-1 mt-1">
                                  <a
                                    className={classnames({
                                      active: this.state.activeTab === "2",
                                    })}
                                    onClick={() => {
                                      this.togglefilter("2");
                                    }}
                                  >
                                    <Button className="filtericon">
                                      <span
                                        className="filtertext"
                                        style={{ color: "black" }}
                                      >
                                        {" "}
                                        Specialisation
                                      </span>
                                    </Button>
                                  </a>
                                </NavItem>
                              </Row>
                              <Row>
                                <NavItem className="mb-1 mt-1">
                                  <a
                                    className={classnames({
                                      active: this.state.activeTab === "3",
                                    })}
                                    onClick={() => {
                                      this.togglefilter("3");
                                    }}
                                  >
                                    <Button className="filtericon">
                                      <span
                                        className="filtertext"
                                        style={{ color: "black" }}
                                      >
                                        {" "}
                                        Language
                                      </span>
                                    </Button>
                                  </a>
                                </NavItem>
                              </Row>
                              <Row>
                                <NavItem className="mb-1 mt-1">
                                  <a
                                    className={classnames({
                                      active: this.state.activeTab === "4",
                                    })}
                                    onClick={() => {
                                      this.togglefilter("4");
                                    }}
                                  >
                                    <Button className="filtericon">
                                      <span
                                        className="filtertext"
                                        style={{ color: "black" }}
                                      >
                                        {" "}
                                        Active/Non Active
                                      </span>
                                    </Button>
                                  </a>
                                </NavItem>
                              </Row>
                            </Col>
                            <Col className="tabcontentheadings">
                              <div className="tabcontentheading">
                                <TabContent activeTab={this.state.activeTab}>
                                  <TabPane className="tabidone" tabId="1">
                                    {AstroSkills?.map((value) => (
                                      <FormGroup key={value.id} check>
                                        <Input
                                          onClick={(e) =>
                                            this.setState({
                                              Skilldata: e.target.value,
                                            })
                                          }
                                          name="radio1"
                                          type="radio"
                                          value={value?.value}
                                        />{" "}
                                        <Label check>{value?.value}</Label>
                                      </FormGroup>
                                    ))}
                                  </TabPane>
                                  <TabPane className="tabidone" tabId="2">
                                    {Specialisation?.map((value) => (
                                      <FormGroup key={value.id} check>
                                        <Input
                                          onClick={(e) =>
                                            this.setState({
                                              astroSpecialzation:
                                                e.target.value,
                                            })
                                          }
                                          name="radio2"
                                          type="radio"
                                          value={value?.value}
                                        />{" "}
                                        <Label check>{value?.value}</Label>
                                      </FormGroup>
                                    ))}
                                  </TabPane>
                                  <TabPane className="tabidone" tabId="3">
                                    {Language?.map((value) => (
                                      <FormGroup key={value.id} check>
                                        <Input
                                          onClick={(e) =>
                                            this.setState({
                                              Astrolanguage: e.target.value,
                                            })
                                          }
                                          name="radio3"
                                          type="radio"
                                          value={value?.value}
                                        />{" "}
                                        <Label check>{value?.value}</Label>
                                      </FormGroup>
                                    ))}
                                  </TabPane>
                                  <TabPane className="tabidone" tabId="4">
                                    {AstroStatus?.map((value) => (
                                      <FormGroup key={value.id} check>
                                        <Input
                                          onClick={(e) =>
                                            this.setState({
                                              AstroStatus: e.target.value,
                                            })
                                          }
                                          name="radio4"
                                          type="radio"
                                          value={value?.value}
                                        />{" "}
                                        <Label check>{value?.value}</Label>
                                      </FormGroup>
                                    ))}
                                  </TabPane>
                                </TabContent>
                              </div>
                            </Col>
                          </Row>
                        </Row>
                      </Nav>
                    </div>
                  </div>
                </div>
                <Row>
                  <Col lg="12">
                    <div className="d-flex justify-content-center">
                      <Button
                        disabled={
                          this.state.Skilldata?.length ||
                          this.state.AstroStatus?.length ||
                          this.state.Astrolanguage?.length ||
                          this.state.astroSpecialzation?.length
                            ? false
                            : true
                        }
                        className="mt-2"
                        onClick={(e) => this.FilterAstro(e)}
                        color="primary"
                      >
                        Filter Now
                      </Button>
                    </div>
                  </Col>
                </Row>
              </ModalBody>
            </Modal>
            {/* <Modal
              style={{ maxWidth: "700px" }}
              size="lg"
              isOpen={this.state.modalone}
              toggle={this.toggleone}
              // className={(this.props.className)}
            >
              <ModalHeader toggle={this.toggleone}>Logindfsd</ModalHeader>
              <ModalBody>dsffsssfsd</ModalBody>
            </Modal> */}
          </div>
        </section>
      </LayoutOne>
    );
  }
}

export default ChatAstrologerlist;
