import React, { useEffect, useState } from "react";
import UserContext from "./Context";
import {
  AllAstro,
  GetOneAstro,
  ViewOneUser,
} from "../components/Apicall/ApiCall";

const State = (props) => {
  const [notification, setNotification] = useState([]);
  const [AllAstroList, setAllAstroList] = useState([]);
  const [viewOneAstro, setviewOneAstro] = useState({});
  // const astroid = localStorage.getItem("astroId");

  // useEffect(() => {
  //   GetallAstro();
  // }, []);
  // useEffect(() => {
  //   let userid = JSON.parse(localStorage.getItem("user_id"));
  //   ViewOneUser(userid)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // let astroid = localStorage.getItem("astroId");
  // console.log(astroid);
  // useEffect(() => {
  //   GetOneAstrologer();
  // }, [astroid]);

  // const GetOneAstrologer = async () => {
  //   const astroid = localStorage.getItem("astroId");
  //   await GetOneAstro(astroid)
  //     .then((res) => {
  //       console.log(res.data);
  //       setviewOneAstro(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const GetallAstro = async () => {
  //   await AllAstro()
  //     .then((res) => {
  //       console.log(res.data);
  //       setAllAstroList(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   setInterval(() => {
  //     GetOneAstrologer();
  //   }, 8000);
  // }, []);

  // useEffect(() => {
  //   setInterval(() => {
  //     GetallAstro();
  //   }, 15000);
  // }, []);

  return (
    <UserContext.Provider
      value={{ notification, setNotification, AllAstroList, viewOneAstro }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default State;
