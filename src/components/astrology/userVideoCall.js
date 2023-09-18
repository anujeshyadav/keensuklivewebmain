import { Container, Row, Col, Button, Input, Alert, Spinner } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import React from "react";
import AgoraUIKit from "agora-react-uikit";
import axiosConfig from "../../axiosConfig";
import swal from "sweetalert";
import AlertPage from "./AlertPage";
import { Fetchuserdetail } from "../header/IconGroup";

class userVideoCall extends React.Component {
  constructor(props) {
    super(props);
    this.countRef = React.createRef();
    this.apicall = React.createRef();

    this.state = {
      setTimer: 0,
      Loader: true,
      setIsPaused: false,
      hours: 0,
      minutes: 0,
      seconds: 0,
      stream: null,
      changeView: false,
      userid: "",
      astroid: "",
      mobile: "",
      userData: {},
      data: [],
      setVideoCall: false,
      toggle: true,
      userVideocalltoken: "",
    };
  }

  formatTime = (timer) => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);
    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  handlestartinterval = () => {
    this.apicall.current = setInterval(() => {
      Fetchuserdetail();

      let userId = JSON.parse(localStorage.getItem("user_id"));
      let astroId = localStorage.getItem("videoCallAstro_id");
      sessionStorage.setItem("typeofcall", "videocall");

      // let payload = {
      //   userId: userId,
      //   astroId: astroId,
      // };
      // axiosConfig
      //   .post(`/user/deductChatBalance`, payload)
      //   .then((res) => {
      //     console.log("callduration", res);
      //     if (res.status === 203) {
      //       console.log("callduration", res.status === 203);
      //       clearInterval(this.countRef.current);
      //       clearInterval(this.apicall.current);
      //       this.setState({ setIsPaused: false });
      //       this.setState({ setVideoCall: false });
      //       swal(
      //         "Low Balance",
      //         "Your Balance is getting low As per minimum charge of this Astrologer",
      //         {
      //           buttons: {
      //             catch: { text: "Cancel ", value: "catch" },
      //             // recharge: { text: "Recharge NOW ", value: "Recharge" },
      //           },
      //         }
      //       ).then((value) => {
      //         switch (value) {
      //           case "catch":
      //             // this.props.history.push("/");
      //             break;
      //           case "Recharge":
      //             swal("move to recharge ");
      //             break;
      //           default:
      //         }
      //       });
      //     }
      //     // for low balance
      //     if (res.status === 404) {
      //       console.log("callduration", res.status === 404);
      //       clearInterval(this.countRef.current);
      //       clearInterval(this.apicall.current);
      //       this.setState({ setIsPaused: false });
      //       this.setState({ setVideoCall: false });
      //     }
      //     // move to another page no balance
      //   })
      //   .catch((err) => {
      //     console.log(err.response.data.message);
      //   });
    }, 60000);
  };

  handleStart = () => {
    this.setState({ setIsPaused: true });
    setInterval(() => {
      this.setState({ setTimer: this.state.setTimer + 1 });
    }, 1000);
  };

  handlePause = () => {
    clearInterval(this.countRef.current);
    clearInterval(this.apicall.current);
    this.setState({ setIsPaused: false });
  };

  componentDidMount() {
    const userchannel_name = localStorage.getItem("userchannel_name");
    this.setState({ userchannelname: userchannel_name });
    const usertoken_for_videocall = localStorage.getItem(
      "usertoken_for_videocall"
    );
    this.setState({ usertoken: userchannel_name });
    const userid = JSON.parse(localStorage.getItem("user_id"));
    const callingastro_id = localStorage.getItem("videoCallAstro_id");
    // api for token generation
    const payload = {
      userAccount: userid,
      astroAccount: callingastro_id,
    };
    axiosConfig
      .post(`/user/userVideoCall`, payload)
      .then((res) => {
        this.setState({ userVideocalltoken: res?.data?.userAccount });
        localStorage.setItem("usertoken_for_videocall", res?.data?.userAccount);
        localStorage.setItem("userchannel_name", res?.data?.channelName);
        this.setState({ changeView: true });
        this.setState({ setVideoCall: true });
      })
      .catch((err) => {
        console.log(err);
      });

    axiosConfig
      .get(`/user/viewoneuser/${userid}`)
      .then((response) => {
        console.log("videocal", response);
        this.setState({ mobile: response.data.data.mobile });
        this.setState({ userData: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //   changeHandler = (e) => {
  //     this.setState({ [e.target.name]: e.target.value });
  //   };

  rtcProps = {
    // Pass your App ID here.
    appId: "7d1f07c76f9d46be86bc46a791884023",
    // Set the channel name.

    channel: localStorage.getItem("userchannel_name"),
    // Pass your temp token here.
    token:
      localStorage.getItem("usertoken_for_videocall") ||
      this.state.userVideocalltoken,

    // Set the user ID.
    uid: 1,
    // Set the user role
    // role: "",
    // layout:"",
  };

  callbacks = {
    ["user-joined"]: (user) => {
      if (user) {
        this.handleStart();
        this.handlestartinterval();
        this.setState({ Loader: false });
        swal("Astrologer Joined");
      }
    },

    ["user-left"]: (user) => {
      if (user) {
        sessionStorage.setItem("typeofcall", "Videocall");
        this.handlePause();
        clearInterval(this.apicall.current);
        swal("Astro leave the Videocall");
        let userid = localStorage.getItem("user_id");
        const astroId = localStorage.getItem("astroId");
        let value = {
          userId: userid,
          astroId: astroId,
        };
        axiosConfig
          .post(`/user/changeStatus`, value)
          .then((res) => {
            console.log(res.data);
            this.props.history.push("/astrorating");
          })
          .catch((err) => {
            console.log(err.response);
          });
      }
    },
    EndCall: () => {
      this.setState({ setVideoCall: false });
      this.handlePause();
      clearInterval(this.apicall.current);
      sessionStorage.setItem("typeofcall", "Videocall");
      let userid = localStorage.getItem("user_id");

      const astroId = localStorage.getItem("astroId");
      let value = {
        userId: userid,
        astroId: astroId,
      };
      axiosConfig
        .post(`/user/changeStatus`, value)
        .then((res) => {
          console.log(res.data);
          this.props.history.push("/astrorating");
        })
        .catch((err) => {
          console.log(err.response);
        });
    },
  };

  render() {
    return (
      <LayoutOne headerTop="visible">
        <>
          {this.state.Loader ? (
            <>
              <div className="d-flex justify-content-center">
                <h2 className="mt-5">Wait Till Astrologer Joins Room...</h2>
              </div>
            </>
          ) : null}

          <>
            {this.state.changeView === true ? (
              <>
                <section>
                  {this.state.setVideoCall === true ? (
                    <>
                      <Row>
                        <Col className="d-flex justify-content-center">
                          <p>
                            {this.state.Loader ? null : (
                              <>{this.formatTime(this.state.setTimer)}</>
                            )}
                          </p>
                        </Col>
                      </Row>
                      <div
                        style={{
                          display: "flex",
                          width: "90vw",
                          height: "80vh",
                        }}
                      >
                        <AgoraUIKit
                          rtcProps={this.rtcProps}
                          callbacks={this.callbacks}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      {" "}
                      <AlertPage />
                    </>
                  )}
                </section>
              </>
            ) : null}
          </>
        </>
      </LayoutOne>
    );
  }
}
export default userVideoCall;
