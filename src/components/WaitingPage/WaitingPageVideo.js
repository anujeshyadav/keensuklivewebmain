import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";

import {
  addToWishlist,
  deleteFromWishlist,
  deleteAllFromWishlist,
} from "../../redux/actions/wishlistActions";
import { addToCart } from "../../redux/actions/cartActions";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import axiosConfig from "../../axiosConfig";
import { Button, Col, Container, Row } from "reactstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

import swal from "sweetalert";

const WaitingPageVideo = ({ location, args }) => {
  const { pathname } = location;
  const [order, setOrder] = useState([]);
  const [modal, setModal] = useState(false);
  const [Refund, setRefund] = useState({});
  const [loader, setloader] = useState(true);

  const history = useHistory();
  const mylocation = useLocation();
  const toggle = () => setModal(!modal);
  const fetchOrder = async () => {
    let userid = JSON.parse(localStorage.getItem("user_id"));
    const { data } = await axiosConfig.get(`/user/myOrders/${userid}`);
    const order = data.data;
    setOrder(order);
    console.log(order);
  };
  const hanleopenmodal = (e, data) => {
    e.preventDefault();
    setRefund(data);
    console.log(data);
    toggle();
  };

  const handlegetAcceptAstro = () => {
    const interval = setInterval(() => {
      let userid = JSON.parse(localStorage.getItem("user_id"));
      console.log(mylocation.state?._id);
      let id =
        mylocation?.state?._id || sessionStorage.getItem("notificationdata");
      console.log(id);
      axiosConfig
        .get(`/user/getOnenotificationByastro/${id}`)
        .then((res) => {
          console.log("request status ", res.data.data);
          console.log("notificationid", res.data.data);
          if (
            res?.data?.data?.status === "Accept" &&
            res?.data?.data?.type === "Video"
          ) {
            setloader(false);

            swal("Request Accepted", "Wait Till Astro Joins Videocall");
            clearInterval(interval);
            history.push(`/userVideoCall/${res.data.data?._id}`);

            axiosConfig
              .get(`/admin/dltNotificattion/${res.data.data?._id}`)
              .then((res) => {
                console.log("notification deleted", res);
              })
              .catch((err) => {
                console.log(err);
              });
          }
        })
        .catch((err) => {
          // console.log(err);
        });
    }, 5000);
  };

  useEffect(() => {
    if (localStorage.getItem("user_id")) {
      handlegetAcceptAstro();
    }
  }, []);

  return (
    <Fragment>
      <LayoutOne headerTop="visible">
        <Breadcrumb />
        <section style={{ padding: "180px 0px" }}>
          <Container>
            {loader && (
              <>
                <div className="d-flex justify-content-center mb-4">
                  <div class="custom-loader"></div>
                </div>
                <div className="d-flex justify-content-center align-item-center">
                  <h3>Wait Till Astrologer Accept Your Request...</h3>
                  <h3>Do not Refresh Your Page...</h3>
                </div>
              </>
            )}
          </Container>
        </section>
      </LayoutOne>
    </Fragment>
  );
};

WaitingPageVideo.propTypes = {
  addToCart: PropTypes.func,
  cartItems: PropTypes.array,
  currency: PropTypes.object,
  location: PropTypes.object,
  deleteAllFromWishlist: PropTypes.func,
  deleteFromWishlist: PropTypes.func,
  wishlistItems: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartData,
    wishlistItems: state.wishlistData,
    currency: state.currencyData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item, addToast, quantityCount) => {
      dispatch(addToCart(item, addToast, quantityCount));
    },
    addToWishlist: (item, addToast, quantityCount) => {
      dispatch(addToWishlist(item, addToast, quantityCount));
    },
    deleteFromWishlist: (item, addToast, quantityCount) => {
      dispatch(deleteFromWishlist(item, addToast, quantityCount));
    },
    deleteAllFromWishlist: (addToast) => {
      dispatch(deleteAllFromWishlist(addToast));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WaitingPageVideo);
