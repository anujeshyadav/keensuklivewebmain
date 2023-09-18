import React from "react";

import "../../assets/scss/chat.scss";
import { Col, Row } from "reactstrap";

class ChatAppMassage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        {this.props.roomChatData.length
          ? this.props.roomChatData
              .map((chat, index) => {
                return (
                  <>
                    {chat.type === "user" ? (
                      <div className="message me">
                        <div className="message-body">{chat.msg}</div>
                      </div>
                    ) : (
                      <div className="message">
                        <div class="message-body">
                          <Row>
                            <Col lg="12">
                              <Row>
                                <h6 className="container">
                                  <b> {chat?.userid?.fullname}</b>
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
