import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import Tab from "react-bootstrap/Tab";
import Rating from "@mui/material/Rating";
import ShowMore from "react-show-more";
import LinearProgress from "@mui/material/LinearProgress";
import Nav from "react-bootstrap/Nav";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";

import axiosConfig from "../../axiosConfig";
import PrettyRating from "pretty-rating-react";
import {
  faHeart,
  faStar,
  faHeartBroken,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as farHeart,
  faStar as farStar,
} from "@fortawesome/free-regular-svg-icons";

import { Modal, ModalHeader, ModalBody } from "reactstrap";
import AstroProfileVideo from "./AstroProfileVideo";
import swal from "sweetalert";
const colors = {
  star: ["#d9ad26", "#d9ad26", "#434b4d"],
};
const icons = {
  star: {
    complete: faStar,
    half: faStarHalfAlt,
    empty: farStar,
  },
};

class AstrologerDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      allminrechargeList: [],
      data: {},
      // astroData: {},
      Follow: null,
      UserId: "",
      Gallary: [],
      useramount: "",
      astroId: "",
      astroData: null,
      intervalId: null,
      astro: "",
      avg_rating: [false],
      GtRating: [],
    };

    this.state = {
      modal: false,
      viewMore: 1,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId); // Clear the interval when the component unmounts
  }

  handleStartViewOneAstro = () => {
    const intervalId = setInterval(() => {
      const { id } = this.props.match.params;
      axiosConfig
        .get(`/admin/getoneAstro/${id}`)
        .then((response) => {
          // console.log("getoneastro", response.data?.data);

          localStorage.setItem("astroname", response?.data?.data?.fullname);
          localStorage.setItem(
            "channelName",
            response?.data?.data?.channelName
          );
          this.setState({ astroData: response.data.data });
        })
        .catch((error) => {
          console.log(error);
        });
    }, 3000);
  };

  componentDidMount = () => {
    const astroId = localStorage.getItem("videoCallAstro_id");
    const { id } = this.props.match.params;
    const userId = JSON.parse(localStorage.getItem("user_id"));
    axiosConfig
      .get(`/user/viewoneuser/${userId}`)
      .then((res) => {
        this.setState({ useramount: res.data?.data?.amount });
      })
      .catch((err) => {
        console.log(err);
      });
    this.setState({ UserId: userId });
    // const contextData = this.context;
    // console.log(contextData);

    this.handleStartViewOneAstro();

    axiosConfig
      .get(`/user/getone_followers/${userId}/${astroId}`)
      .then((res) => {
        console.log(res.data.data);
        this.setState({ Follow: res.data.data });
      })
      .catch((err) => {
        console.log(err);
      });
    localStorage.setItem("astroId", id);
    axiosConfig
      .get(`/user/allRevieAstro/${id}`)
      .then((res) => {
        console.log(res.data.data);
        this.setState({ GtRating: res.data.data.slice(0, 6) });
      })
      .catch((err) => console.log(err));
    localStorage.setItem("videoCallAstro_id", id);
    axiosConfig
      .get("/user/all_min_recharge")
      .then((response) => {
        console.log(response.data);
        if (response.data.status === true) {
          this.setState({ allminrechargeList: response.data.data });
        }
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
      });

    axiosConfig
      .get(`/admin/getoneAstro/${id}`)
      .then((response) => {
        console.log("ddsdds", response.data?.data);
        localStorage.setItem("astroname", response?.data?.data?.fullname);
        localStorage.setItem("channelName", response?.data?.data?.channelName);
        localStorage.setItem("astroId", response?.data?.data?._id);
        this.setState({ astroData: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  viewmorecomment = (e) => {
    e.preventDefault();
    const start = this.state.viewMore + 10;
    this.setState({ viewMore: start });
    const { id } = this.props.match.params;
    axiosConfig
      .get(`/user/allRevieAstro/${id}`)
      .then((res) => {
        console.log(res.data.data);
        this.setState({
          GtRating: res.data.data.slice(0, this.state.viewMore),
        });
      })
      .catch((err) => console.log(err));
  };
  handleStartChat = () => {
    let userId = JSON.parse(localStorage.getItem("user_id"));
    // const { id } = this.props.match.params;
    const id = localStorage.getItem("astroId");
    // latest code
    if (userId !== "" && userId !== null) {
      const data = {
        userid: userId,
        astroid: id,
        type: "Chat",
      };
      if (
        this.state.astroData?.waiting_tym === 0 &&
        this.state.astroData?.callingStatus === "Available"
      ) {
        let astrocharge = this.state.astroData?.callCharge * 5;
        let useramount = this.state.useramount;
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
        //     console.log("@@@chat mode", response.data);

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
        let astrocharge = this.state.astroData?.callCharge * 5;
        let useramount = this.state.useramount;
        console.log(useramount, astrocharge);
        if (useramount > astrocharge) {
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
                // swal("Sure Want to cancel it");
                break;
              default:
                // api for queue
                // this.props.history.push("/walletmoney");
                let astroid = localStorage.getItem("astroId");
                let userId = JSON.parse(localStorage.getItem("user_id"));

                const payload = {
                  userId: userId,
                  callType: "Chat",
                };

                axiosConfig
                  .post(`/user/make_another_call/${astroid}`, payload)
                  .then((res) => {
                    console.log(res.data);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
            }
          });
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
      }
    } else swal("User Does Not Exist");
  };

  handleStartCall = () => {
    let userId = JSON.parse(localStorage.getItem("user_id"));
    let { id } = this.props.match.params;

    if (userId !== "" && userId !== null) {
      const data = {
        userid: userId,
        astroid: id,
        type: "Call",
      };

      if (
        this.state.astroData?.waiting_tym === 0 &&
        this.state.astroData?.callingStatus === "Available"
      ) {
        let astrocharge = this.state.astroData?.callCharge * 5;
        let useramount = this.state.useramount;
        if (useramount > astrocharge) {
          this.props.history.push("/UserRequestFormCall");
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
        //       this.props.history.push("/UserRequestFormCall");
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
        let astrocharge = this.state.astroData?.callCharge * 5;
        let useramount = this.state.useramount;
        console.log(useramount, astrocharge);
        if (useramount > astrocharge) {
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
                  callType: "VoiceCall",
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
        } else swal("User Not Have enough Balance To Connect with Astrologer");
      }
    } else {
      swal("Need to Login first");
      // this.setState({ modal: true });
    }
  };

  AstrologerFollow = () => {
    const userId = JSON.parse(localStorage.getItem("user_id"));
    const astroId = localStorage.getItem("videoCallAstro_id");
    let payload = {
      astroid: astroId,
      userid: userId,
      follow: true,
    };
    if (userId) {
      axiosConfig
        .post(`/user/addAstroFollowers`, payload)
        .then((res) => {
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.response);
        });
    } else swal("User Need to login First");
  };
  AstrologerUnfollow = () => {
    const userId = JSON.parse(localStorage.getItem("user_id"));
    const astroId = localStorage.getItem("videoCallAstro_id");
    axiosConfig
      .get(`/user/unfollow_astrologer/${userId}/${astroId}`)
      .then((res) => {
        // swal("Your Unfollowed the Astro");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  HandleVideocall = () => {
    let userId = JSON.parse(localStorage.getItem("user_id"));
    let { id } = this.props.match.params;

    if (userId !== "" && userId !== null) {
      const data = {
        userid: userId,
        astroid: id,
        type: "Video",
      };

      // if (this.state.astroData.waiting_queue === 0) {
      if (
        this.state.astroData?.waiting_tym === 0 &&
        this.state.astroData?.callingStatus === "Available"
      ) {
        let astrocharge = this.state.astroData?.callCharge * 5;
        let useramount = this.state.useramount;
        if (useramount > astrocharge) {
          const userid = JSON.parse(localStorage.getItem("user_id"));
          const callingastro_id = localStorage.getItem("videoCallAstro_id");

          const payload = {
            userAccount: userid,
            astroAccount: callingastro_id,
          };
          axiosConfig
            .post(`/user/userVideoCall`, payload)
            .then((res) => {
              console.log("videocallapio", res);
              // this.setState({
              //   videoCallList: res?.data?.channelName,
              // });
              // this.setState({ videoCallData: res?.data?.channelName });
              // this.setState({ userVideocalltoken: res?.data?.userAccount });
              localStorage.setItem(
                "usertoken_for_videocall",
                res?.data?.userAccount
              );
              localStorage.setItem("userchannel_name", res?.data?.channelName);
            })
            .catch((err) => {
              console.log(err);
            });
          this.props.history.push("/UserRequestFormVideoCall");
        } else swal("Error Not Having Enough Balance ", "Recharge ");

        // axiosConfig
        //   .post(`/user/addCallWallet`, data)
        //   .then((response) => {
        //     console.log("@@@Video_calling_mode", response.data);

        //     if (response.data?.msg === "success") {
        //       this.props.history.push("/UserRequestFormVideoCall");
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
        let astrocharge = this.state.astroData?.callCharge * 5;
        let useramount = this.state.useramount;
        console.log(useramount, astrocharge);
        if (useramount > astrocharge) {
          swal(
            `Astrologer is Busy `,
            // `Astrologer is Busy ${this.state.astroData?.waiting_tym} Min`,
            "Do You Want to Be in queue ",

            {
              buttons: {
                cancel: "cancel",
                catch: { text: "Be In Queue ", value: "queue" },
              },
            }
          ).then((value) => {
            switch (value) {
              case "queue":
                let astroid = localStorage.getItem("astroId");
                let userId = JSON.parse(localStorage.getItem("user_id"));
                let payload = {
                  userId: this.state.UserId,
                  callType: "Video",
                };

                axiosConfig
                  .post(`/user/make_another_call/${astroid}`, payload)
                  .then((res) => {
                    console.log(res);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
                break;
              default:
                break;
            }
          });
        } else swal("User Not Have enough Balance To Connect with Astrologer");
      }
    } else {
      swal("Need to Login first");
      // this.setState({ modal: true });
    }
  };

  render() {
    return (
      <LayoutOne headerTop="visible">
        <section className="pt-0 pb-0">
          <div
            className=""
            style={{
              // backgroundColor: "#FFD59E",
              // width: "100%",
              // padding: "70px 0px",
              // backgroundSize: "cover",
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
                    <h1>Astrologer Detail</h1>
                    <p></p>
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
                <section className="dt-astro">
                  <Row>
                    <Row>
                      <div className="d-flex justify-content-end mr-2">
                        {this.state.Follow?.follow === true ? (
                          <>
                            <Button
                              onClick={this.AstrologerUnfollow}
                              className="btn-as st"
                            >
                              Following
                            </Button>
                          </>
                        ) : (
                          <>
                            <Button
                              onClick={this.AstrologerFollow}
                              className="btn-as st"
                            >
                              Follow
                            </Button>
                          </>
                        )}
                      </div>
                    </Row>
                    <Col md="3">
                      <div className="as-pic mt-30">
                        <img
                          src={this.state.astroData?.img}
                          alt=""
                          className="pic-as"
                        />
                      </div>
                    </Col>
                    <Col md="9">
                      {/* <Rating name="no-value" value={null} /> */}
                      <div className="as-content mt-60">
                        <h3>{this.state.astroData?.fullname}</h3>

                        <div className="review-rating">
                          <PrettyRating
                            disabled
                            value={this.state.astroData?.avg_rating}
                            icons={icons.star}
                            colors={colors.star}
                          />
                        </div>

                        <ul>
                          <li>
                            Language:
                            <span>{this.state.astroData?.language}</span>
                          </li>

                          <li>
                            Specility:{" "}
                            <span> {this.state.astroData?.all_skills}</span>
                          </li>
                          <li>
                            Experience:{" "}
                            <span>
                              {this.state.astroData?.exp_in_years}-Years
                            </span>
                          </li>
                          <li>
                            Call Rate:{" "}
                            <span>
                              {this.state.astroData?.callCharge} Rs/Minute
                            </span>
                          </li>
                          <li>
                            Availability :
                            {/* <span style={{ color: "green" }}> */}
                            {this.state.status === "Offline" ? (
                              <>
                                <b style={{ color: "red" }}>Not Available</b>{" "}
                              </>
                            ) : (
                              <>
                                {this.state.astroData?.callingStatus ===
                                "Busy" ? (
                                  <>
                                    <b style={{ color: "red" }}>
                                      {this.state.astroData?.callingStatus}
                                    </b>{" "}
                                  </>
                                ) : (
                                  <>
                                    <b style={{ color: "green" }}>
                                      {" "}
                                      {this.state.astroData?.callingStatus}{" "}
                                    </b>
                                  </>
                                )}
                              </>
                            )}
                            {/* </span> */}
                          </li>
                          <li>
                            {this.state.astroData?.waiting_tym === 0 ? null : (
                              <>
                                Waiting Time :
                                <span style={{ color: "green" }}>
                                  <b>
                                    {" "}
                                    {this.state.astroData?.waiting_tym} Min{" "}
                                  </b>
                                </span>
                              </>
                            )}
                          </li>
                          {/* <li>
                            {this.state.status === "Online" ? (
                              <>
                                <span style={{ color: "green" }} className="">
                                  <b> {this.state.astroData?.status}</b>
                                </span>{" "}
                              </>
                            ) : (
                              <>
                                <span style={{ color: "red" }} className="">
                                  <b> {this.state.astroData?.status}</b>
                                </span>{" "}
                              </>
                            )}
                          </li> */}
                        </ul>
                      </div>

                      <Row>
                        <Col md="4" className="mt-30">
                          <Button
                            disabled={
                              this.state.astroData?.status === "Offline"
                                ? true
                                : false
                            }
                            style={{
                              backgroundColor:
                                this.state.status === "Offline"
                                  ? "grey"
                                  : "primary",
                            }}
                            className="btn-as st"
                            onClick={this.handleStartChat}
                          >
                            <i
                              className="fa fa-commenting mr-1"
                              aria-hidden="true"
                            ></i>{" "}
                            Start Chat
                            <small className="sm-text"></small>
                          </Button>
                        </Col>
                        <Col md="4" className="mt-30">
                          <Button
                            style={{
                              backgroundColor:
                                this.state.status === "Offline"
                                  ? "grey"
                                  : "primary",
                            }}
                            disabled={
                              this.state.astroData?.status === "Offline"
                                ? true
                                : false
                            }
                            className="btn-as st"
                            onClick={this.handleStartCall}
                          >
                            <i className="fa fa-phone" aria-hidden="true"></i>
                            <span className="mx-1"> Start Call</span>
                            <small className="sm-text"></small>
                          </Button>
                        </Col>
                        <Col md="4" className="mt-30">
                          <Button
                            style={{
                              backgroundColor:
                                this.state.status === "Offline"
                                  ? "grey"
                                  : "primary",
                            }}
                            disabled={
                              this.state.astroData?.status === "Offline"
                                ? true
                                : false
                            }
                            className="btn-as st"
                            onClick={() => this.HandleVideocall()}
                          >
                            <i
                              class="fa fa-video-camera"
                              aria-hidden="true"
                            ></i>{" "}
                            <span className="mx-1">Start Video</span>
                            <small className="sm-text"></small>
                          </Button>
                        </Col>
                        {/* <Col md="3" className="mt-30">
                       
                          <Button
                            className="btn-as st"
                            onClick={this.livestreaming}
                          >
                            <i
                              class="fa fa-youtube-play"
                              aria-hidden="true"
                            ></i>
                            <span className="mx-1"> Start Live</span>

                            <small className="sm-text">
                           
                            </small>
                          </Button>
                        
                        </Col> */}
                      </Row>
                    </Col>
                  </Row>
                  <section>
                    <div className="mt-2 pt-1 container">
                      <AstroProfileVideo />
                    </div>
                  </section>
                </section>
                <section className="mt-50 mb-30">
                  <div
                    className="product-anotherinfo-wrapper mt-4"
                    style={{ border: "1px solid#ccc", padding: "20px 10px" }}
                  >
                    <h3>AboutUs</h3>
                    <p>{this.state.long_bio}</p>
                  </div>
                  {/* {/ about us close  /} */}
                  {/* {/ review section start /} */}
                  <div
                    className="product-anotherinfo-wrapper mt-5"
                    style={{ border: "1px solid#ccc", padding: "20px 10px" }}
                  >
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="row">
                          <div className="col-md-4"></div>
                        </div>

                        <div className="review-wrapper">
                          {this.state.GtRating !== " " ? (
                            <>
                              {this.state.GtRating?.map((value) => (
                                <div
                                  key={value?._id}
                                  className="single-review "
                                >
                                  {" "}
                                  <div className="review-img ">
                                    <img
                                      width="100px"
                                      height="80px"
                                      style={{ borderRadius: "8px" }}
                                      src={value?.userid?.userimg[0]}
                                      alt=""
                                    />
                                  </div>
                                  <div className="review-content">
                                    <div className="review-top-wrap">
                                      <div className="review-left">
                                        <div className="review-name">
                                          <h4
                                            style={{
                                              textTransform: "capitalize",
                                              margin: 5,
                                            }}
                                          >
                                            {value?.userid?.fullname}
                                          </h4>
                                          <p className="mx-2">
                                            {value?.createdAt.split("T")[0]}
                                          </p>
                                        </div>
                                        <div className="review-rating">
                                          <PrettyRating
                                            disabled
                                            value={value?.rating}
                                            icons={icons.star}
                                            colors={colors.star}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="review-bottom">
                                      <p
                                        style={{
                                          display: "inline",
                                          textTransform: "capitalize",
                                        }}
                                      >
                                        {value?.comment.slice(0, 150)}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </>
                          ) : null}
                        </div>
                        <Button
                          onClick={(e) => this.viewmorecomment(e)}
                          color="primary"
                        >
                          View More Comments
                        </Button>
                      </div>
                      {/* {/ avai /} */}
                      <div className="col-md-6">
                        <div className="avai-box text-center">
                          <h3>Availability</h3>
                          <div className="tab-bxx p-1">
                            <Tab.Container defaultActiveKey="">
                              <Nav variant="pills" className="rt_tab">
                                <Nav.Item className="rt_tab">
                                  <Nav.Link
                                    eventKey="tab_one"
                                    style={{ padding: "3px 9px" }}
                                  >
                                    Monday
                                  </Nav.Link>
                                </Nav.Item>

                                <Nav.Item className="rt_tab">
                                  <Nav.Link
                                    eventKey="tab_two"
                                    style={{ padding: "3px 9px" }}
                                  >
                                    Tuesday
                                  </Nav.Link>
                                </Nav.Item>

                                <Nav.Item className="rt_tab">
                                  <Nav.Link
                                    eventKey="tab_three"
                                    style={{ padding: "3px 9px" }}
                                  >
                                    Wednesday
                                  </Nav.Link>
                                </Nav.Item>

                                <Nav.Item className="rt_tab">
                                  <Nav.Link
                                    eventKey="tab_four"
                                    style={{ padding: "3px 9px" }}
                                  >
                                    Thursday
                                  </Nav.Link>
                                </Nav.Item>

                                <Nav.Item className="rt_tab">
                                  <Nav.Link
                                    eventKey="tab_five"
                                    style={{ padding: "3px 9px" }}
                                  >
                                    Friday
                                  </Nav.Link>
                                </Nav.Item>

                                <Nav.Item className="rt_tab">
                                  <Nav.Link
                                    eventKey="tab_six"
                                    style={{ padding: "3px 9px" }}
                                  >
                                    Saturday
                                  </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="rt_tab">
                                  <Nav.Link
                                    eventKey="tab_sev"
                                    style={{ padding: "3px 9px" }}
                                  >
                                    Sunday
                                  </Nav.Link>
                                </Nav.Item>
                              </Nav>

                              <Tab.Content className="description-review-bottom">
                                <Tab.Pane eventKey="tab_one">
                                  {this.state.monday?.length > 0 ? (
                                    <>
                                      <div
                                        className=""
                                        style={{
                                          width: "100%",
                                          paddingBottom: "30px",
                                          paddingTop: "10px",
                                        }}
                                      >
                                        <p
                                          style={{
                                            backgroundColor: "rgb(25 120 4)",
                                            color: "#fff",
                                            padding: "10px",
                                            borderRadius: "50px",
                                            fontSize: "16px",
                                            fontWeight: "600",
                                            width: "400px",
                                            margin: "0  auto",
                                          }}
                                        >
                                          {this.state.monday?.map((value) => (
                                            <span key={value?._id}>
                                              {value}
                                              {"  "}
                                            </span>
                                          ))}
                                        </p>
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      <div
                                        className=""
                                        style={{
                                          width: "100%",
                                          paddingBottom: "30px",
                                          paddingTop: "10px",
                                        }}
                                      >
                                        <p
                                          style={{
                                            backgroundColor: "rgb(25 120 4)",
                                            color: "#fff",
                                            padding: "10px",
                                            borderRadius: "50px",
                                            fontSize: "16px",
                                            fontWeight: "600",
                                            width: "400px",
                                            margin: "0  auto",
                                          }}
                                        >
                                          <span>Not available </span>
                                        </p>
                                      </div>
                                    </>
                                  )}
                                </Tab.Pane>

                                <Tab.Pane eventKey="tab_two">
                                  {this.state.tuesday?.length > 0 ? (
                                    <>
                                      <div
                                        className=""
                                        style={{
                                          width: "100%",
                                          paddingBottom: "30px",
                                          paddingTop: "10px",
                                        }}
                                      >
                                        <p
                                          style={{
                                            backgroundColor: "rgb(25 120 4)",
                                            color: "#fff",
                                            padding: "10px",
                                            borderRadius: "50px",
                                            fontSize: "16px",
                                            fontWeight: "600",
                                            width: "400px",
                                            margin: "0  auto",
                                          }}
                                        >
                                          {this.state.tuesday?.map((value) => (
                                            <span key={value?._id}>
                                              {value}
                                              {"  "}
                                            </span>
                                          ))}
                                        </p>
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      <>
                                        <div
                                          className=""
                                          style={{
                                            width: "100%",
                                            paddingBottom: "30px",
                                            paddingTop: "10px",
                                          }}
                                        >
                                          <p
                                            style={{
                                              backgroundColor: "rgb(25 120 4)",
                                              color: "#fff",
                                              padding: "10px",
                                              borderRadius: "50px",
                                              fontSize: "16px",
                                              fontWeight: "600",
                                              width: "400px",
                                              margin: "0  auto",
                                            }}
                                          >
                                            <span>Not available </span>
                                          </p>
                                        </div>
                                      </>
                                    </>
                                  )}
                                </Tab.Pane>

                                <Tab.Pane eventKey="tab_three">
                                  {this.state.wednesday?.length > 0 ? (
                                    <>
                                      <div
                                        className=""
                                        style={{
                                          width: "100%",
                                          paddingBottom: "30px",
                                          paddingTop: "10px",
                                        }}
                                      >
                                        <p
                                          style={{
                                            backgroundColor: "rgb(25 120 4)",
                                            color: "#fff",
                                            padding: "10px",
                                            borderRadius: "50px",
                                            fontSize: "16px",
                                            fontWeight: "600",
                                            width: "400px",
                                            margin: "0  auto",
                                          }}
                                        >
                                          {this.state.wednesday?.map(
                                            (value) => (
                                              <span key={value?._id}>
                                                {value}
                                                {"  "}
                                              </span>
                                            )
                                          )}
                                        </p>
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      <>
                                        <div
                                          className=""
                                          style={{
                                            width: "100%",
                                            paddingBottom: "30px",
                                            paddingTop: "10px",
                                          }}
                                        >
                                          <p
                                            style={{
                                              backgroundColor: "rgb(25 120 4)",
                                              color: "#fff",
                                              padding: "10px",
                                              borderRadius: "50px",
                                              fontSize: "16px",
                                              fontWeight: "600",
                                              width: "400px",
                                              margin: "0  auto",
                                            }}
                                          >
                                            <span>Not available </span>
                                          </p>
                                        </div>
                                      </>
                                    </>
                                  )}
                                </Tab.Pane>

                                <Tab.Pane eventKey="tab_four">
                                  {this.state.thursday?.length > 0 ? (
                                    <>
                                      <div
                                        className=""
                                        style={{
                                          width: "100%",
                                          paddingBottom: "30px",
                                          paddingTop: "10px",
                                        }}
                                      >
                                        <p
                                          style={{
                                            backgroundColor: "rgb(25 120 4)",
                                            color: "#fff",
                                            padding: "10px",
                                            borderRadius: "50px",
                                            fontSize: "16px",
                                            fontWeight: "600",
                                            width: "400px",
                                            margin: "0  auto",
                                          }}
                                        >
                                          {this.state.thursday?.map((value) => (
                                            <span key={value?._id}>
                                              {value}
                                              {"  "}
                                            </span>
                                          ))}
                                        </p>
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      <>
                                        <div
                                          className=""
                                          style={{
                                            width: "100%",
                                            paddingBottom: "30px",
                                            paddingTop: "10px",
                                          }}
                                        >
                                          <p
                                            style={{
                                              backgroundColor: "rgb(25 120 4)",
                                              color: "#fff",
                                              padding: "10px",
                                              borderRadius: "50px",
                                              fontSize: "16px",
                                              fontWeight: "600",
                                              width: "400px",
                                              margin: "0  auto",
                                            }}
                                          >
                                            <span>Not available </span>
                                          </p>
                                        </div>
                                      </>
                                    </>
                                  )}
                                </Tab.Pane>

                                <Tab.Pane eventKey="tab_five">
                                  {this.state.friday?.length > 0 ? (
                                    <>
                                      <div
                                        className=""
                                        style={{
                                          width: "100%",
                                          paddingBottom: "30px",
                                          paddingTop: "10px",
                                        }}
                                      >
                                        <p
                                          style={{
                                            backgroundColor: "rgb(25 120 4)",
                                            color: "#fff",
                                            padding: "10px",
                                            borderRadius: "50px",
                                            fontSize: "16px",
                                            fontWeight: "600",
                                            width: "400px",
                                            margin: "0  auto",
                                          }}
                                        >
                                          {this.state.friday?.map((value) => (
                                            <span key={value?._id}>
                                              {value}
                                              {"  "}
                                            </span>
                                          ))}
                                        </p>
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      <>
                                        <div
                                          className=""
                                          style={{
                                            width: "100%",
                                            paddingBottom: "30px",
                                            paddingTop: "10px",
                                          }}
                                        >
                                          <p
                                            style={{
                                              backgroundColor: "rgb(25 120 4)",
                                              color: "#fff",
                                              padding: "10px",
                                              borderRadius: "50px",
                                              fontSize: "16px",
                                              fontWeight: "600",
                                              width: "400px",
                                              margin: "0  auto",
                                            }}
                                          >
                                            <span>Not available </span>
                                          </p>
                                        </div>
                                      </>
                                    </>
                                  )}
                                </Tab.Pane>

                                <Tab.Pane eventKey="tab_six">
                                  {this.state.saturday?.length > 0 ? (
                                    <>
                                      <div
                                        className=""
                                        style={{
                                          width: "100%",
                                          paddingBottom: "30px",
                                          paddingTop: "10px",
                                        }}
                                      >
                                        <p
                                          style={{
                                            backgroundColor: "rgb(25 120 4)",
                                            color: "#fff",
                                            padding: "10px",
                                            borderRadius: "50px",
                                            fontSize: "16px",
                                            fontWeight: "600",
                                            width: "400px",
                                            margin: "0  auto",
                                          }}
                                        >
                                          {this.state.saturday?.map((value) => (
                                            <span key={value?._id}>
                                              {value}
                                              {"  "}
                                            </span>
                                          ))}
                                        </p>
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      <>
                                        <div
                                          className=""
                                          style={{
                                            width: "100%",
                                            paddingBottom: "30px",
                                            paddingTop: "10px",
                                          }}
                                        >
                                          <p
                                            style={{
                                              backgroundColor: "rgb(25 120 4)",
                                              color: "#fff",
                                              padding: "10px",
                                              borderRadius: "50px",
                                              fontSize: "16px",
                                              fontWeight: "600",
                                              width: "400px",
                                              margin: "0  auto",
                                            }}
                                          >
                                            <span>Not available </span>
                                          </p>
                                        </div>
                                      </>
                                    </>
                                  )}
                                </Tab.Pane>

                                <Tab.Pane eventKey="tab_sev">
                                  {this.state.sunday?.length > 0 ? (
                                    <>
                                      <div
                                        className=""
                                        style={{
                                          width: "100%",
                                          paddingBottom: "30px",
                                          paddingTop: "10px",
                                        }}
                                      >
                                        <p
                                          style={{
                                            backgroundColor: "rgb(25 120 4)",
                                            color: "#fff",
                                            padding: "10px",
                                            borderRadius: "50px",
                                            fontSize: "16px",
                                            fontWeight: "600",
                                            width: "400px",
                                            margin: "0  auto",
                                          }}
                                        >
                                          {this.state.sunday?.map((value) => (
                                            <span key={value?._id}>
                                              {value}
                                              {"  "}
                                            </span>
                                          ))}
                                        </p>
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      <>
                                        <div
                                          className=""
                                          style={{
                                            width: "100%",
                                            paddingBottom: "30px",
                                            paddingTop: "10px",
                                          }}
                                        >
                                          <p
                                            style={{
                                              backgroundColor: "rgb(25 120 4)",
                                              color: "#fff",
                                              padding: "10px",
                                              borderRadius: "50px",
                                              fontSize: "16px",
                                              fontWeight: "600",
                                              width: "400px",
                                              margin: "0  auto",
                                            }}
                                          >
                                            <span>Not available </span>
                                          </p>
                                        </div>
                                      </>
                                    </>
                                  )}
                                </Tab.Pane>
                              </Tab.Content>
                            </Tab.Container>
                          </div>
                        </div>
                      </div>
                      {/* <div className="col-lg-5">
                              <div className="ratting-form-wrapper pl-50">
                                <h3>Write a Review</h3>
                                <div className="ratting-form">
                                  <form action="#">
                                    <div className="star-box">
                                       <span>Your rating:</span> 
                                     <div className="ratting-star">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div> 
                                    </div>
                                    <div className="row">
                                      <div className="rating-form-style mb-10">
                                        <Rating
                                          name="simple-controlled"
                                          onChange={(event, newValue) => { }}
                                        />
                                      </div>
                                      <div class="col-md-6">
                                        <div class="rating-form-style mb-10">
                                          <input
                                            placeholder="Name"
                                            type="text"
                                          />
                                        </div>
                                      </div>
                                      <div class="col-md-6">
                                        <div class="rating-form-style mb-10">
                                          <input
                                            placeholder="Email"
                                            type="email"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <div className="rating-form-style form-submit">
                                          <textarea
                                            name="comment"
                                            placeholder="Comment"
                                            defaultValue={""}
                                            style={{ height: "auto" }}
                                            rows={3}
                                          />
                                          <input
                                            type="submit"
                                            defaultValue="Submit"
                                          />
                                          <>
                                          </>
                                        </div>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-5"></div>

                            <div className="col-lg-5">
                              <div className="ratting-form-wrapper pl-50">
                                <h3>Write a Review</h3>
                                <div className="ratting-form">
                                  <form action="#">
                                    <div className="star-box">
                                       <span>Your rating:</span> 
                                     <div className="ratting-star">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div> 
                                    </div>
                                    <div className="row">
                                      <div className="rating-form-style mb-10">
                                        <Rating
                                          name="simple-controlled"
                                          onChange={(event, newValue) => { }}
                                        />
                                      </div>
                                      <div class="col-md-6">
                                        <div class="rating-form-style mb-10">
                                          <input
                                            placeholder="Name"
                                            type="text"
                                          />
                                        </div>
                                      </div>
                                      <div class="col-md-6">
                                        <div class="rating-form-style mb-10">
                                          <input
                                            placeholder="Email"
                                            type="email"
                                          />
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <div className="rating-form-style form-submit">
                                          <textarea
                                            name="comment"
                                            placeholder="Comment"
                                            defaultValue={""}
                                            style={{ height: "auto" }}
                                            rows={3}
                                          />
                                          <input
                                            type="submit"
                                            defaultValue="Submit"
                                          />

                                          <>
                                          </>
                                        </div>
                                      </div>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div> */}
                    </div>
                  </div>
                </section>
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
        {/* <Modal
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
                <Row>
                  {allminrechargeList.length
                    ? allminrechargeList?.map((allminrecharge, index) => {
                        return (
                          <Col>
                            <span className="btn-as st" onClick={this.toggle}>
                              {allminrecharge?.minute}
                            </span>
                          </Col>
                        );
                      })
                    : null}
                  <Col>
                    <Button className="btn-as st" onClick={this.toggle}>
                      30 Min
                    </Button>
                  </Col>
                  <Col>
                    <Button className="btn-as st" onClick={this.toggle}>
                      45 Min
                    </Button>
                  </Col>
                  <Col>
                    <Button className="btn-as st" onClick={this.toggle}>
                      1 Hour
                    </Button>
                  </Col>
                </Row>
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
        </Modal>  */}
      </LayoutOne>
    );
  }
}

export default AstrologerDetail;

export function getUserID() {
  const name = JSON.parse(localStorage.getItem("userData"));
  const names = name.fullname;
  return names;
}
