import React from "react";

import "../../assets/scss/chat.scss";
import { Col, Row } from "reactstrap";
import { CloudLightning } from "react-feather";
import image from "../../assets/img/userpic.png";

class ChatAppMassage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        {this.props?.roomChatData?.length
          ? this.props?.roomChatData
              .map((chat, index) => {
                let userdata = JSON.parse(
                  localStorage.getItem("userCredential")
                );
                console.log(userdata?.username);
                return (
                  <>
                    {chat.type === "user" ? (
                      <div key={index} className="message me">
                        <div className="message-body">{chat?.msg}</div>
                      </div>
                    ) : (
                      <div key={index} className="message">
                        <div class="message-body">
                          <Row>
                            <Col>
                              <img
                                style={{ borderRadius: "50%" }}
                                width="40px"
                                height="40px"
                                src={image}
                              />
                            </Col>

                            <Col lg="">
                              <Row>
                                <h6 className="container">
                                  <b> {chat?.username}</b>
                                </h6>
                              </Row>
                              <Row>
                                <h6 className="container">{chat.msg}</h6>
                              </Row>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    )}
                  </>
                );
              })
              .reverse()
          : null}
      </>
    );
  }
}

export default ChatAppMassage;
