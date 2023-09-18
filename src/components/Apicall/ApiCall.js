import axiosConfig from "../../axiosConfig";

export const Getapi = async () => {
  let response = await axiosConfig
    .get(`/admin/getProduct`)
    .then((res) => res.data);
  return response;
};
export const UserLogin = async (obj) => {
  const response = await axiosConfig
    .post(`/user/userlogin`, obj)
    .then((res) => res.data);

  return response;
};

export const varifyOtp = async (obj) => {
  const response = await axiosConfig
    .post(`/user/userVryfyotp`, obj)
    .then((resp) => resp.data);
  return response;
};
export const ViewOneUser = async (id) => {
  const response = await axiosConfig
    .get(`/user/viewoneuser/${id}`)
    .then((res) => res.data);
  return response;
};
export const AllAstro = async (id) => {
  const response = await axiosConfig
    .get(`/admin/allAstro`)
    .then((res) => res.data);
  return response;
};
export const GetOneAstro = async (id) => {
  const response = await axiosConfig
    .get(`/admin/getoneAstro/${id}`)
    .then((res) => res.data);
  return response;
};
