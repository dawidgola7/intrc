import axios from "axios";

export const sendFormData = (path, data) => {
  console.log(path, data);
  axios
    .post(`http://localhost:5000${path}`, data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
