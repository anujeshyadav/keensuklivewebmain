import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosConfig from "../../axiosConfig";
import history from "history";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const BlogSidebar = ({ props }) => {
  const [blogData, setBlogData] = useState([]);
  let history = useHistory();

  useEffect(() => {
    axiosConfig
      .get(`/user/active_blog_category`)
      .then((response) => {
        console.log(response.data.data);
        if (response.data.status === true) {
          setBlogData(response.data.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="sidebar-style">
      <div className="sidebar-widget mt-35">
        <h4 className="pro-sidebar-title">Categories</h4>
        <div className="sidebar-widget-list sidebar-widget-list--blog mt-20">
          <ul>
            {blogData &&
              blogData?.map((value) => (
                <li
                  style={{ cursor: "pointer" }}
                  onClick={(e) => props.handleswitch(e, value)}
                  key={value?._id}
                >
                  <div className="sidebar-widget-list-left">
                    <span className="checkmark" />
                    <input type="checkbox" name="id" />{" "}
                    <div className="mx-4">
                      {value?.name?.slice(0, 30)}
                      {/* <span></span> */}
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
