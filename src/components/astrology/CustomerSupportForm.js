import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
// import AutoSearch from './autosearch'
import axiosConfig from "../../axiosConfig";
import swal from "sweetalert";
import Form from "react-bootstrap/Form";

class CustomerSupportForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      desc: "",
      subject: "",
      userid: "",
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e, userId) => {
    e.preventDefault();
    let { id } = this.props.match.params;

    var user_id = JSON.parse(localStorage.getItem("user_id"));
    console.log(this.state.subject);
    console.log(this.state.desc);
    console.log(user_id);
    let obj = {
      userid: user_id,
      subject: this.state.subject,
      desc: this.state.desc,
    };

    axiosConfig
      .post(`/user/addTicket`, obj)
      .then((response) => {
        console.log("@@@@@", response.data.data);
        this.setState({
          subject: "",
          desc: "",
        });

        window.location.reload("/customersupport");
        window.location.reload();
        // swal("Success!", "Submitted SuccessFully!", "Success");
      })

      .catch((error) => {
        swal("Error!", "You clicked the button!", "error");
        console.log(error);
      });
  };

  handleChange = (e) => {
    this.setState({
      subject: e.target.value,
      desc: e.target.value,
    });
  };
  render() {
    return (
      <LayoutOne headerTop="visible">
        {/* <section className="pt-0 pb-0">
          <div
            className=""
            style={{
              backgroundColor: "#FFD59E",
              width: "100%",
              padding: "70px 0px",
              backgroundSize: "cover",
            }}
          >
            <Container>
              <Row>
                <Col md="12">
                  <div className="leftcont text-left">
                    <h1>
                        Create Ticket
                    </h1>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </section> */}

        <section className="">
          <Container>
            <div className="spt-1">
              <Row>
                <Col lg="12">
                  <div className="wal-amt">
                    <h3>Create Ticket </h3>
                    <hr></hr>
                    <form onSubmit={this.submitHandler}>
                      <Row>
                        <Col md="12">
                          <div class="form-group mtb-10">
                            <label>Select </label>
                            <Form.Select
                              aria-label="Default select example"
                              name="subject"
                              value={this.state.subject}
                              onChange={this.changeHandler}
                            >
                              <option>--Select --</option>
                              <option value="Previous Order">
                                Previous Order
                              </option>
                              <option value="Transaction Related">
                                Transaction Related
                              </option>
                              <option value="Technical Issue">
                                Technical Issue
                              </option>
                              <option value="Astrologer Related">
                                Astrologer Related
                              </option>
                              <option value="Live event related">
                                Live event related
                              </option>
                              <option value="Offers & Coupons">
                                Offers & Coupons
                              </option>
                              <option value="General FAQs">General FAQs</option>
                              <option value="Escalate the issue">
                                Escalate the issue
                              </option>
                              <option value="AstroMall Related">
                                AstroMall Related
                              </option>
                              <option value="Any Other Reason">
                                Any Other Reason
                              </option>
                              {/* <option value="6">AstroMall Related</option>
                              <option value="6">AstroMall Related</option> */}
                            </Form.Select>
                          </div>
                        </Col>

                        <Col md="12">
                          <div class="form-group mtb-10">
                            <label>Description*</label>
                            <textarea
                              className="form-control"
                              placeholder="support ticket description..."
                              name="desc"
                              value={this.state.desc}
                              onChange={this.changeHandler}
                            ></textarea>
                          </div>
                        </Col>
                        <Col md="12" className="mt-3">
                          <Button type="submit" className="btn btn-warning">
                            Submit
                          </Button>
                          {/* <Link type="submit" className="btn btn-warning">
                            Submit
                          </Link> */}
                        </Col>
                      </Row>
                    </form>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
      </LayoutOne>
    );
  }
}
export default CustomerSupportForm;
