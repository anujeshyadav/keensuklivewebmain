import React from "react";

import { Container, Row, Col, Table } from "reactstrap";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";

import LayoutOne from "../../layouts/LayoutOne";
import "../../assets/scss/astroteam.scss";

import axiosConfig from "../../axiosConfig";

import UserChatHistory from "../chat/UserChatHistory";
import { Link } from "react-scroll";

class UserVideohistoy extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userChatList: [],
    };
  }
  componentDidMount() {
    let { id } = this.props.match.params;
    let userId = JSON.parse(localStorage.getItem("user_id"));

    axiosConfig
      .get(`/user/userCallHistory/${userId}`)
      .then((response) => {
        console.log("userChatList", response.data.data);
        if (response.data.status === true) {
          this.setState({
            userChatList: response?.data?.data,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    // axiosConfig
    //   .get(`/user/getOne_Conversation_Wallet/${userId}`)
    //   .then((response) => {
    //     console.log("userChatList", response.data.data);
    //     if (response.data.status === true) {
    //       this.setState({
    //         userChatList: response.data.data,
    //       });
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  render() {
    const { userChatList } = this.state;

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
                    <h1>User Video History</h1>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        {/* <section style={{ marginTop: "52px" }} className="userchathistory">
          <Container>
            <div className="container mt-3">
              <UserChatHistory />
            </div>
          </Container>
        </section> */}
        <section>
          <Container>
            <Row>
              <Col lg="12">
                <div className="">
                  <Table striped className="">
                    <thead>
                      <tr>
                        <th>#Conversation ID</th>
                        <th>Astrologer Name</th>

                        <th>Conversation Type</th>
                        <th>Rate</th>
                        <th>Duration</th>
                        {/* <th>Amount</th> */}
                        <th>Deducation</th>
                        <th>Date/Time</th>
                        {/* <th>Action</th> */}
                      </tr>
                    </thead>
                    {userChatList.length
                      ? userChatList.map((user, index) => {
                          return (
                            <tbody>
                              <tr>
                                <th>{user?.Sid}</th>
                                <td>{user?.astroid?.fullname}</td>

                                <td>Call</td>
                                {/* <td>{user?.type}</td> */}
                                <td>{user?.astroid?.callCharge}/Min.</td>

                                <td>{user?.Duration} Sec</td>
                                <td>{user?.userdeductedAmt} Rs</td>
                                <td>{user?.DateCreated.split("T")[0]}</td>
                                {/* <td>
                                  <Link className="Tansdel">
                                    <i
                                      class="fa fa-trash-o"
                                      aria-hidden="true"
                                    ></i>
                                  </Link>
                                </td> */}
                              </tr>
                            </tbody>
                          );
                        })
                      : null}
                  </Table>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </LayoutOne>
    );
  }
}

export default UserVideohistoy;
