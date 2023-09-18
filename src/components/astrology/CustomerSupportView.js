import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
// import AutoSearch from './autosearch'
import axiosConfig from "../../axiosConfig";
import swal from "sweetalert";
import Form from "react-bootstrap/Form";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";
class CustomerSupportView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myQuestion: "",
      data: {},
      TicketNumber: "",
      desc: "",
      subject: "",
      createdAt: "",
      astroQuesList: [],
      userId: "",
    };
  }
  componentDidMount() {
    let { id } = this.props.match.params;

    let user_id = localStorage.getItem("user_id");

    axiosConfig
      .get(`/user/getoneTicket/${id}`)
      .then((response) => {
        console.log(response?.data?.data);

        let ticketno = response?.data?.data?.ticketNo;
        this.setState({ TicketNumber: ticketno });
        this.setState({ data: response.data.data });
        axiosConfig
          .get(`/user/CmntByTicketNo/${ticketno}`)
          .then((res) => {
            console.log(res?.data?.data);
            this.setState({ astroQuesList: res?.data?.data });
          })
          .then((err) => {
            console.log(err);
          });
        this.setState({
          fullname: response.data.data.fullname,
          desc: response.data.data.desc,
          subject: response.data.data.subject,
          img: response.data.data.img[0],
          status: response.data.data.status,
          userId: response.data.data._id,
          createdAt: response.data.data.createdAt,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    // axiosConfig
    //   .get(`/user/list_ask_qus/${id}/${JSON.parse(user_id)}`)
    //   .then((response) => {
    //     console.log("list of ask question", response.data.data);
    //     this.setState({
    //       astroQuesList: response.data.data,
    //     });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }
  handleSubmitQuestion = (e) => {
    e.preventDefault();
    let { ticketid } = this.props.match.params;
    let user_id = JSON.parse(localStorage.getItem("user_id"));

    let load = {
      userid: user_id,
      ticketNo: this.state.TicketNumber,
      desc: this.state.myQuestion,
    };
    axiosConfig
      .post(`/user/addTicketComment`, load)
      .then((res) => {
        console.log(res.data.data);
        this.setState({ myQuestion: "" });
        this.componentDidMount();
      })
      .catch((err) => {
        console.log(err.response);
      });
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
                    <h1>View Customer Support</h1>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>

        <section className="">
          <Container>
            <Row>
              <Col lg="12">
                <div className="support-box">
                  <Row>
                    <Col lg="12">
                      <div className="supp-2">
                        <h4>{this.state.data?.subject}</h4>
                        <ul>
                          <li>
                            Date/Time: <span>{this.state.data?.createdAt}</span>
                          </li>
                          {/* <li>Time: <span>4:00pm</span></li> */}
                          <li>
                            Ticket No: <span>{this.state.data?.ticketNo}</span>
                          </li>
                          <li>
                            Status: <span>{this.state.data?.status}</span>
                          </li>
                          <li>
                            Description: <span>{this.state.data?.desc}</span>
                          </li>
                        </ul>
                        <div>
                          {this.state.astroQuesList.length && (
                            <div className="container">
                              {this.state.astroQuesList &&
                                this.state.astroQuesList?.map(
                                  (value, index) => (
                                    <>
                                      <div className="py-2" key={index}>
                                        <p>
                                          {value?.desc && (
                                            <>
                                              Question: <b> {value?.desc} ?</b>
                                            </>
                                          )}
                                          {value?.reply && (
                                            <>
                                              Reply:<b> {value?.reply} </b>
                                            </>
                                          )}
                                        </p>
                                      </div>
                                    </>
                                  )
                                )}
                            </div>
                          )}
                        </div>
                        {this.state.data?.reply && (
                          <div className="container">
                            <p>
                              Reply:{" "}
                              <span>
                                <b>{this.state.data?.reply}</b>
                              </span>
                            </p>
                          </div>
                        )}

                        <div className="supp-4">
                          <h3>Write Your Commets</h3>
                          <form>
                            <Col md="12">
                              <div class="form-group mtb-10">
                                <label>Description*</label>
                                <textarea
                                  value={this.state.myQuestion}
                                  onChange={(e) =>
                                    this.setState({
                                      myQuestion: e.target.value,
                                    })
                                  }
                                  className="form-control stp"
                                  placeholder="support ticket description..."
                                ></textarea>
                              </div>
                            </Col>
                            <Button
                              onClick={this.handleSubmitQuestion}
                              className="btn btn-primary"
                            >
                              Submit
                            </Button>
                          </form>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </LayoutOne>
    );
  }
}
export default CustomerSupportView;
