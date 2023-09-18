import React from "react";
import { Button, Container } from "reactstrap";
import "../../assets/scss/chat.scss";
import LayoutOne from "../../layouts/LayoutOne";
import Buyimg from "../../../src/assets/img/boy-img.png";
import { Link } from "react-router-dom";
import ChatAppList from "./ChatAppList";
import ChatAppMassage from "./ChatAppMassage";
import axiosConfig from "../../axiosConfig";
import { Fetchuserdetail } from "../header/IconGroup";
import swal from "sweetalert";
import { FiRefreshCcw } from "react-icons/fi";

class ChatApp extends React.Component {
  constructor(props) {
    super(props);
    this.countRef = React.createRef();
    this.apicall = React.createRef();
    this.callmsg = React.createRef();

    this.state = {
      Index: "",
      chatRoomdata: {},
      Historydata: false,
      setTimer: 0,
      counterState: true,
      data: {},
      sendbutton: "",
      Activeastro: {},
      CurrentRoomid: "",
      roomChatData: [],
      userId: "",
      astroId: "",
      msg: "hello",
      roomId: "",
      time: {},
      seconds: 60 * 15,
      minutes: 15,
    };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));
    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);
    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      h: hours,
      m: minutes,
      s: seconds,
    };
    return obj;
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
    }, 50000);
  };

  handleStart = () => {
    this.setState({ counterState: false });
    this.countRef.current = setInterval(() => {
      this.setState({ setTimer: this.state.setTimer + 1 });
    }, 1000);
  };

  handlePause = () => {
    clearInterval(this.countRef.current);
    clearInterval(this.apicall.current);
  };

  handlestop = () => {
    const astroId = localStorage.getItem("astroId");
    this.handlePause();
    let user_id = JSON.parse(localStorage.getItem("user_id"));

    let value = {
      userId: user_id,
      astroId: astroId,
    };
    axiosConfig
      .post(`/user/changeStatus`, value)
      .then((res) => {
        console.log(res.data);
        sessionStorage.setItem("typeofcall", "Chat");
        this.props.history.push("/astrorating");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  getChatonedata = () => {
    setInterval(() => {
      const astroId = localStorage.getItem("astroId");
      let userid = JSON.parse(localStorage.getItem("user_id"));
      axiosConfig.get(`/user/getone_chat/${userid}/${astroId}`).then((res) => {
        if (res.data.data?.roomid) {
          this.setState({ roomId: res.data.data?.roomid });
          axiosConfig
            .get(`/user/allchatwithuser/${res.data.data?.roomid}`)
            .then((res) => {
              // this.setState({ roomChatData: res.data.data });
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
    }, 3000);
  };

  componentDidMount = () => {
    const astroId = localStorage.getItem("astroId");
    let userid = JSON.parse(localStorage.getItem("user_id"));
    this.getChatonedata();

    axiosConfig
      .get(`/user/getone_chat/${userid}/${astroId}`)
      .then((res) => {
        console.log(res.data.data);
        if (res.data.data?.roomid) {
          this.setState({ CurrentRoomid: res.data.data?.roomid });
          axiosConfig
            .get(`/user/allchatwithuser/${res.data?.data?.roomid}`)
            .then((res) => {
              this.setState({ roomChatData: res.data.data });
            })
            .catch((err) => {
              console.log(err);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
    axiosConfig
      .get(`/admin/getoneAstro/${astroId}`)
      .then((res) => {
        // console.log(res.data.data);
        this.setState({ Activeastro: res?.data?.data });
      })
      .catch((err) => {
        console.log(err);
      });

    let timeLeftVar = "";
    if (JSON.parse(localStorage.getItem("minute"))) {
      let minute = JSON.parse(localStorage.getItem("minute"));
      this.setState({ minutes: minute, seconds: minute * 60 });
      this.startTimer();
      this.secondsToTime(minute * 60);
    }
    let user_id = JSON.parse(localStorage.getItem("user_id"));

    // let { id } = this.props.match.params;
    axiosConfig
      .get(`/user/getroomid/${user_id}`)
      .then((response) => {
        // console.log(response.data.data);
        if (response.data.status === true) {
          this.setState({
            data: response.data.data,
            fullname: response.data.data.fullname,
            userimg: response.data.data.userimg,
            time: timeLeftVar,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        // console.log(error.response);
      });
  };

  startTimer() {
    if (this.timer === 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown() {
    let seconds =
      this.state.seconds !== 0 ? this.state.seconds - 1 : alert("out time");
    // this.history.redirect(`/astrologerdetail/${astroid}`)
    // <Redirect to={'/chatApp/astrologerdetail/' + astroid} />
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
      //    if (seconds = 0 && this.state.seconds > 0) {
      //   this.timer = setInterval(this.countDown, 1000);
      // }
    });

    // Check if we're at zero.
    if (seconds === 0) {
      clearInterval(this.timer);
      // window.location.replace("/#/astrorating");
    }
  }

  getChatRoom = (data, status) => {
    this.setState({ Historydata: status });

    // this.setState({ Historydata: false });
    let userid = JSON.parse(localStorage.getItem("user_id"));
    let obj = {
      astroid: data?._id,
      msg: this.state.msg,
    };
    if (this.state.CurrentRoomid != "") {
      axiosConfig
        .get(`/user/allchatwithuser/${this.state.CurrentRoomid}`)
        .then((respons) => {
          console.log(respons?.data?.data);
          this.handlelivechat();
          if (respons.data.status === true) {
            this.setState({ roomChatData: respons?.data.data });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      axiosConfig
        .post(`/user/addchat/${userid}`, obj)
        .then((response) => {
          console.log("chat", response.data);
          this.setState({ CurrentRoomid: response?.data?.data?.roomid });
          console.log("chat", response?.data?.data?.roomid);
          if (response.data.status === true) {
            this.setState({ msg: "" });
            axiosConfig
              .get(`/user/allchatwithuser/${response?.data?.data?.roomid}`)
              .then((respons) => {
                this.handlelivechat();

                console.log(respons?.data?.data);
                // console.log(respons?.data?.status);
                if (respons.data.status === true) {
                  this.setState({ roomChatData: respons?.data.data });
                }
              })
              .catch((error) => {
                console.log(error);
              });
          }
        })
        .catch((error) => {
          // swal("Error!", "You clicked the button!", "error");
          console.log(error);
        });
    }
  };

  handlePreviouschat = () => {
    console.log("currentroomid", this.state.CurrentRoomid);
    axiosConfig
      .get(`/user/allchatwithuser/${this.state.CurrentRoomid}`)
      .then((response) => {
        console.log(response?.data?.data);
        if (response.data.status === true) {
          this.setState({ roomChatData: response?.data.data });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  handlechat = () => {
    if (this.state.CurrentRoomid) {
      axiosConfig
        .get(`/user/allchatwithuser/${this.state.CurrentRoomid}`)
        .then((response) => {
          console.log(response?.data?.data);
          if (response.data.status === true) {
            this.setState({ roomChatData: response?.data.data });
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      let userid = JSON.parse(localStorage.getItem("user_id"));

      axiosConfig
        .get(`/user/getroomid/${userid}`)
        .then((res) => {
          console.log(res.data.data);
          this.setState({ CurrentRoomid: res.data.data?.roomid });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  handlelivechat = () => {
    setInterval(() => {
      this.handlechat();
    }, 2000);
  };

  getChatRoomId = async (user, index) => {
    console.log(user);
    this.setState({ Historydata: true });
    this.setState({ sendbutton: user.astroid?._id });
    this.setState({ Index: index });
    localStorage.setItem("videoCallAstro_id", user?.astroid?._id);
    this.setState({ astroId: user?.astroid?._id, CurrentRoomid: user?.roomid });
    this.handlePreviouschat();
  };

  submitHandler = async (e, astroid, userId) => {
    e.preventDefault();
    const astroId = localStorage.getItem("astroId");
    let userid = JSON.parse(localStorage.getItem("user_id"));
    if (userid !== "" && userid !== null) {
      if (this.state.msg != "") {
        let obj = {
          astroid: astroId,
          msg: this.state.msg,
        };
        axiosConfig
          .post(`/user/addchat/${userid}`, obj)
          .then((response) => {
            this.setState({ chatRoomdata: response.data.data });
            if (response.data.status === true) {
              this.setState({ msg: "" });
              axiosConfig
                .get(`/user/allchatwithuser/${response.data?.data?.roomid}`)
                .then((respons) => {
                  console.log(respons);
                  if (this.state.counterState) {
                    this.handleStart();
                  }
                  this.handlestartinterval();

                  if (respons.data.status === true) {
                    this.setState({ roomChatData: respons?.data?.data });
                    this.handlelivechat();
                  }
                })
                .catch((error) => {
                  console.log(error);
                });
            }
          })
          .catch((error) => {
            // swal("Error!", "You clicked the button!", "error");
            console.log(error);
          });
      } else swal("Input filed is blank", "Fill it before send");
      //   } else swal("Not having sufficient Balance ");
      // })
      // .catch((err) => {
      //   console.log(err);
      // });
    }
  };

  handleChange = (e) => {
    this.setState({
      msg: e.target.value,
    });
  };

  render() {
    const { timeout, enabled, count } = this.state;

    return (
      <LayoutOne headerTop="visible">
        <section className="app-chatbg">
          <Container>
            <div className="app rt-chat">
              {/* <div className="contact-list">
                <h1 className="title">My messages</h1>

                <ChatAppList
                  getChatRoomId={(id, index) => this.getChatRoomId(id, index)}
                  getChatRoom={(data, status) => this.getChatRoom(data, status)}
                  data={this.state.Historydata}
                />
              </div> */}
              {this.state.Historydata === true ? (
                <>
                  <div className="messages">
                    <div className="chat-header">
                      <p>
                        <span>
                          <img
                            src={
                              this.state.roomChatData.length > 0
                                ? this.state.roomChatData[0]?.astroid?.img[0]
                                : Buyimg
                            }
                            className="app-img"
                            alt=""
                          />
                        </span>
                        {this.state.roomChatData.length > 0
                          ? this.state.roomChatData[0]?.astroid?.fullname
                          : null}
                      </p>
                      <span className="appchattimer">
                        <p>{this.formatTime(this.state.setTimer)}</p>
                      </span>
                    </div>
                    <div className="messages-history">
                      <ChatAppMassage
                        roomChatData={
                          this.state.roomChatData.length > 0
                            ? this.state.roomChatData
                            : []
                        }
                      />
                    </div>
                    {localStorage.getItem("astroId") ===
                    this.state.sendbutton ? (
                      <>
                        <form className="messages-inputs">
                          <input
                            type="text"
                            placeholder="Send a message"
                            onChange={(e) => {
                              this.handleChange(e);
                            }}
                            value={this.state.msg}
                          />

                          <button
                            onClick={(e) => {
                              this.submitHandler(
                                e,
                                this.state.astroId,
                                this.state.userId
                              );
                            }}
                          >
                            <i className="material-icons">send</i>
                          </button>
                        </form>
                      </>
                    ) : null}
                  </div>
                </>
              ) : (
                <>
                  <div className="messages">
                    <div className="chat-header">
                      <p>
                        <span>
                          <img
                            src={this.state.Activeastro?.img}
                            className="app-img"
                            alt=""
                          />
                        </span>
                        {this.state.Activeastro?.fullname}
                      </p>
                      <span className="appchattimer">
                        <p>{this.formatTime(this.state.setTimer)}</p>
                      </span>
                    </div>
                    <div className="messages-history">
                      <ChatAppMassage
                        roomChatData={
                          this.state.roomChatData.length > 0
                            ? this.state.roomChatData
                            : []
                        }
                      />
                    </div>

                    <form className="messages-inputs">
                      <input
                        type="text"
                        placeholder="Send a message"
                        onChange={(e) => {
                          this.handleChange(e);
                        }}
                        value={this.state.msg}
                      />

                      <button
                        onClick={(e) => {
                          this.submitHandler(
                            e,
                            this.state.astroId,
                            this.state.userId
                          );
                        }}
                      >
                        <i className="material-icons">send</i>
                      </button>
                    </form>
                  </div>
                </>
              )}
            </div>
            <div className="chat-bottom">
              <Link to="/astrorating">
                <Button onClick={() => this.handlestop()} color="primary">
                  Close Chat
                </Button>
              </Link>
            </div>
          </Container>
        </section>
      </LayoutOne>
    );
  }
}
export default ChatApp;
