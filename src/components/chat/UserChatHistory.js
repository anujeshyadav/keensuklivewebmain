import React from "react";
import { Button, Container } from "reactstrap";
import "../../assets/scss/chat.scss";
import Buyimg from "../../../src/assets/img/boy-img.png";
import ChatAppList from "./UserChatList";
import ChatAppMassage from "./UserChatMessage";
import axiosConfig from "../../axiosConfig";

class ChatApp extends React.Component {
  constructor(props) {
    super(props);
    this.countRef = React.createRef();
    this.apicall = React.createRef();
    this.callmsg = React.createRef();

    this.state = {
      Index: "",
      Historydata: false,
      setTimer: 0,
      data: {},
      Activeastro: {},
      CurrentRoomid: "",
      roomChatData: [],
      userId: "",
      astroId: "",
      roomId: "",
      time: {},
      seconds: 60 * 15,
      minutes: 15,
    };
  }

  componentDidMount = () => {
    const astroId = localStorage.getItem("astroId");

    axiosConfig
      .get(`/admin/getoneAstro/${astroId}`)
      .then((res) => {
        console.log(res.data.data);
        this.setState({ Activeastro: res?.data?.data });
      })
      .catch((err) => {
        console.log(err);
      });

    let user_id = JSON.parse(localStorage.getItem("user_id"));

    axiosConfig
      .get(`/user/getroomid/${user_id}`)
      .then((response) => {
        console.log(response.data.data);
        if (response.data.status === true) {
          this.setState({
            data: response.data.data,
            fullname: response.data.data.fullname,
            userimg: response.data.data.userimg,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handlechat = () => {
    axiosConfig
      .get(`/user/allchatwithuser/${this.state.roomId}`)
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
  getChatRoomId = async (user, index) => {
    this.setState({ Index: index });
    localStorage.setItem("videoCallAstro_id", user?.astroid?._id);
    console.log("userdata", user);
    this.setState({ astroId: user?.astroid?._id, roomId: user?.roomid });
    this.handlechat();
  };

  render() {
    return (
      <section className="app-chatbg">
        <Container>
          <div class="app rt-chat">
            <div class="contact-list">
              <h1 className="title mx-1">My messages</h1>
              <ChatAppList
                getChatRoomId={(id, index) => this.getChatRoomId(id, index)}
                data={this.state.Historydata}
              />
            </div>
            <>
              <div class="messages">
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
                </div>
                <div class="historynew">
                  <ChatAppMassage
                    roomChatData={
                      this.state.roomChatData.length > 0
                        ? this.state.roomChatData
                        : []
                    }
                  />
                </div>
              </div>
            </>
          </div>
        </Container>
      </section>
    );
  }
}
export default ChatApp;
