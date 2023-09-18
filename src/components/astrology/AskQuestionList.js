import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import astrologinbg from "../../assets/img/astrologin-bg.jpg";
// import astro3 from '../../assets/img/team/astro3.jpg'
import "../../assets/scss/astroteam.scss";
import LayoutOne from "../../layouts/LayoutOne";
import axiosConfig from "../../axiosConfig";
import DemoChat from "./DemoChat";

class AskQuestionList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modeChange: true,
      SelectedPackage: "125",
      askAstroList: [],
    };
  }
  componentDidMount = () => {
    let userId = JSON.parse(localStorage.getItem("user_id"));
    axiosConfig
      .get(`/user/completed_order/${userId}`)
      .then((response) => {
        console.log(response.data);
        if (response.data.status === true) {
          this.setState({ askAstroList: response.data?.data });
          console.log(response.data?.data);
        }
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
      });
  };
  callback = (data) => {
    console.log("payment failed", data);
    this.setState({ modeChange: data });
  };

  //   submitHandler = (e, astroid, mobile) => {
  //     e.preventDefault()
  //     // let astrologerList = localStorage.getItem('astrologerList')
  //     let mobileNo = localStorage.getItem('user_mobile_no')
  //     let userId = JSON.parse(localStorage.getItem('user_id'))
  //     let astroId = astroid
  //     let obj = {
  //       userid: userId,
  //       astroid: astroId,
  //       // astrologerList: astrologerList,
  //       From: mobile, //parseInt(this.state.number)
  //       To: mobileNo, //parseInt(this.state.number)
  //     }
  //     axiosConfig
  //       .post(`/user/make_call`, obj)

  //       .then((response) => {
  //         console.log('rhsagdhgshgdjhgj', response.data.data)
  //         // console.log(response.data.STATUSMSG)
  //         // this.setState({ responseData: response.data })
  //         // swal('Successful!', 'Recharge Successful!', 'success')
  //         // this.props.history.push('/orderrecharge')
  //       })

  //       .catch((error) => {
  //         console.log(error)
  //         // swal('Error!', 'Invalid!', 'error')
  //       })
  //   }

  render() {
    const { askAstroList } = this.state;

    return (
      <LayoutOne headerTop="visible">
        <section className="pt-0 pb-0">
          <div
            className=""
            style={{
              // backgroundColor: '#ffcc01',
              // width: '100%',
              // padding: '70px 0px',
              // backgroundSize: 'cover',
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
                    <h1>Ask Question Astrologer</h1>
                    <p></p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section>

        <section id="team" class="pb-5">
          <Container>
            {/* <Row>
              <section className="selectpackage card mb-3 mt-3">
                <div className="mainhkjjeading ">
                  <div className="d-flex justify-content-center">
                    <h3 className="mb-2">Select Package for Question</h3>{" "}
                  </div>
                  <Row>
                    <Col lg="4">
                      <form>
                        <label for="fname">Select Question Package</label>
                      
                        <select
                          defaultValue={125}
                          onChange={(e) => {
                            console.log(e.target.value);
                            this.setState({ SelectedPackage: e.target.value });
                          }}
                          className="form-control"
                          name="question"
                        >
                          <option value="125">3</option>
                          <option value="200">6</option>
                          <option value="250">9</option>
                          <option value="300">15</option>
                        </select>
                      </form>
                    </Col>
                    <Col lg="4">
                      <div className="text-center justify-content-center">
                        <label>Price Rs</label>
                        <h4>
                          {this.state.SelectedPackage &&
                            this.state.SelectedPackage}
                        </h4>
                      </div>
                    </Col>
                    <Col lg="4">
                      <label>Pay for Your Questions</label>
                      <DemoChat
                        callback={this.callback}
                        payment={200}
                        status={false}
                      />
                     
                    </Col>
                  </Row>
                </div>{" "}
              </section>
            </Row> */}

            <Row>
              {askAstroList.length
                ? askAstroList.map((askAstro, index) => {
                    return (
                      <Col md="3" key={index}>
                        <div className="image-flip">
                          <div className="mainflip flip-0">
                            <div className="frontside">
                              <Link
                                to={"/askquestion/" + askAstro?.astroid._id}
                                className=""
                              >
                                <div className="card">
                                  <div className="card-body text-center">
                                    <p>
                                      <img src={askAstro?.astroid.img} alt="" />
                                    </p>
                                    <h4 className="card-title">
                                      {askAstro?.astroid.fullname}
                                    </h4>
                                    <ul className="mb-3">
                                      <li>
                                        Specility:{" "}
                                        <span>
                                          {askAstro?.astroid.all_skills}
                                        </span>
                                      </li>
                                      <li>
                                        Language:{" "}
                                        <span>
                                          {askAstro?.astroid.language}
                                        </span>
                                      </li>
                                      <li>
                                        Experience:{" "}
                                        <span>
                                          {askAstro?.astroid.exp_in_years}
                                        </span>
                                      </li>
                                      <li>
                                        Call Rate:{" "}
                                        <span>
                                          {askAstro?.astroid.callCharge}/ Min
                                        </span>
                                      </li>
                                    </ul>
                                    <Link
                                      className="btn btn-primary btn-sm st-d"
                                      to={
                                        "/askquestion/" + askAstro?.astroid._id
                                      }
                                    >
                                      Ask Question
                                    </Link>
                                    {/* 
                                    <Link className="btn btn-primary btn-sm st-d">
                                      Online
                                    </Link>
                                    <Link
                                      className="btn btn-primary btn-sm"
                                      to={'/allastrologerlist/' + askAstro._id}
                                    > */}
                                    {/* <span
                                        className="sr-btn"
                                        onClick={this.onCallSubmit}
                                      >
                                        <i class="fa fa-phone">
                                          {astrologer?.userRequestForm}
                                        </i>{' '}
                                        Call
                                      </span> */}

                                    {/* <small>
                                            / 20{' '}
                                            <i class="fa fa-inr" aria-hidden="true">
                                              {astrologer?.conrubute_hrs}
                                            </i>{' '}
                                            per Hour
                                          </small> */}
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </Col>
                    );
                  })
                : null}
            </Row>
          </Container>
        </section>
      </LayoutOne>
    );
  }
}

export default AskQuestionList;
