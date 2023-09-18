import { Container, Row, Col, Button, Input, Toast } from "reactstrap";
import LayoutOne from "../../../layouts/LayoutOne";
import React, { useEffect, useState } from "react";
import AgoraUIKit from "agora-react-uikit";
import axiosConfig from "../../../axiosConfig";

import { Link, useHistory } from "react-router-dom";
import LiveChat from "../../../components/chat/LiveChat";
// import "../../../../src/assets/scss/style.scss";
import "../../../../src/assets/scss/LiveStream.scss";
import { useLocation } from "react-router-dom";
import swal from "sweetalert";
import { pink, yellow } from "@mui/material/colors";
import './LiveVideonew.css'
function LiveVideonew() {
  const [Videocall, setVideocall] = useState(true);
  const [chanel, setchannel] = useState("");
  const [token, settoken] = useState("");
  const [userdata, setUserData] = useState({});
  const history = useHistory();

  const location = useLocation();

  const rtcProps = {
    appId: "211ddf5d3ed341acaf8f7608e94b7c91",

    channel: chanel,
    layout: 1,

    token: token,
    uid: 0,
    role: "audience",
  };

  const callbacks = {
    ["user-left"]: (user) => {
      swal("Seller Leave the Live Streaming");
      setVideocall(false);
      window.history.back();
    },
    EndCall: () => {
      setVideocall(false);
      // sessionStorage.setItem("typeofcall", "LiveStreaming");
      window.history.back();

      // history.push({
      //   pathname: "/astrorating",
      // });
    },
  };
  useEffect(() => {
    let userdata = JSON.parse(localStorage.getItem("userCredential"));
    // console.log(userdata);
    // setUserData(userdata);
    // console.log(location.state);
    const channel = location?.state?.channelName;
    const token = location?.state?.token;
    settoken(token);
    setchannel(channel);
    console.log(channel);

    // let userId = JSON.parse(localStorage.getItem("user_id"));
    // const astroid = localStorage.getItem("astroId");
  }, []);
  return (
    <div>
      <>
        <Row>
          <Col>
            <div className="container d-flex justify-content-center mt-2">
              <h2>Live Chat with Seller</h2>
            </div>
          </Col>
        </Row>
        {Videocall ? (
          <>

                                                                         {/* maindiv */}
            <div className="main"
            
              // style={{
              //   display: "flex",
              //   width: "100%",
              //   // height: "80vh",
              //   border: "1px solid black",
              //   borderRadius: "8px",
              // }}
              // className="main  row "
              // className="maindivstream container mt-3 mb-3"
            >


                                                                    {/* firstdiv */}
              <div className="box"
                style={{
                  // marginLeft: "-10px",
                  display: "flex",
                  // width: "60vw",
                  height: "80vh",
                  borderRadius: "8px",
                  // background:yellow,
                }}
                // className="col-xl-8 col-sm-12 col-md-12 col-lg-12 col-xs-12"
              >
                <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
              </div>

                                                                           {/* secontdiv */}
              <div className="box1"
                // style={{
                //   // display: "flex",
                //   // width: "100%",
                //   height: "80vh",
                //   // background:pink,
                // }}
                // className="col-xl-4 col-sm-12 col-md-12 col-lg-12 col-xs-12"
              >
                <div className="col-xl-12 col-sm-12 col-md-12 col-lg-12">
                  <LiveChat
                    Liveastrodata={location.state}
                    // liveuserdata={userdata}
                  />
                </div>
              </div>
            </div>
          </>
        ) : null}
      </>
    </div>
  );
}

export default LiveVideonew;
