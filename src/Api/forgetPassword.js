import { BASE_URL } from "../Config";
import { getAccessToken } from "../Storage";

export const forgetPassword = (email) => {
  console.log("PAYLOAD_IN_LOGIN", email);
  return new Promise(async (resolve, reject) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var formdata = new FormData();
    formdata.append("email", email);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow"
    };

    console.log("REquest_Option", requestOptions.body);

    fetch(`${BASE_URL}user/forget-password/`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log("FORGETPASSWORD_RESPONSE_IN_API", result);

        if (result) {
          resolve(result);
        }
      })
      .catch(error => {
        console.log("FORGETPASSWORD_RESPONSE_IN_API", error);
        reject(error.message);
      });
  });
};

export const userDetails = () => {
  return new Promise(async (resolve, reject) => {
    const token = await getAccessToken();
    resolve("true");
  });
};
