import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import textbottom from "../../assets/img/textbottom.png";
import axiosConfig from "../../axiosConfig";
import { Getapi } from "../Apicall/ApiCall";
import ReactHtmlParser from "react-html-parser";
import Homebookpooja from "../../components/astrology/Homebookpooja";
class SectionPooja extends React.Component {
  state = {
    productList: [],
  };
  componentDidMount() {
    axiosConfig.get(`/admin/getproductcalegory`).then((res) => {
      this.setState({ productList: res.data.data.slice(0, 4) });
    });
  }
  render() {
    const { productList } = this.state;
    return (
      <>
        <Container>
          <div className="heading mt-40">
            <h2>Newly Launched</h2>
            <img src={textbottom} alt="" />
          </div>
          <Homebookpooja />
        </Container>
        <Container>
          <div className="heading mt-40">
            <h2>Our Trending Products</h2>
            <img src={textbottom} alt="" />
          </div>
          <Row>
            <div className="col-lg-12 col-md-12 mb-30">
              <div className="category-home">
                <section className="pt-0">
                  <div className="container">
                    <Row>
                      {this.state.productList.length
                        ? productList.map((product, index) => {
                            return (
                              <Col md="3" className="mt-1 mb-1">
                                <div className="product-grid8">
                                  <div class="product-image8">
                                    <Link to={`/productlist/${product?._id}`}>
                                      <img
                                        style={{ borderRadius: "8px" }}
                                        width="100%"
                                        height="200px"
                                        src={product?.img}
                                        alt=""
                                        className="Ptd-img"
                                      />
                                    </Link>
                                  </div>
                                  <div className="product-content">
                                    <h4 className="">
                                      <Link>{product?.name.slice(0, 30)} </Link>
                                    </h4>
                                    <div className="">
                                      {ReactHtmlParser(
                                        product?.desc?.split(0, 10)
                                      )}
                                    </div>
                                    <Link
                                      to={`/productlist/${product?._id}`}
                                      className="all-deals"
                                    >
                                      View More
                                      <i class="fa fa-angle-right icon"></i>
                                    </Link>
                                  </div>
                                </div>
                              </Col>
                            );
                          })
                        : null}
                    </Row>
                  </div>
                </section>
              </div>
            </div>
          </Row>
        </Container>
      </>
    );
  }
}
export default SectionPooja;
