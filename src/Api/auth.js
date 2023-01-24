import { BASE_URL } from "../Config";
import { getAccessToken } from "../Storage";

export const userLogin = (email, password) => {
  console.log("PAYLOAD_IN_LOGIN", email);
  return new Promise(async (resolve, reject) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var formdata = new FormData();
    formdata.append("email", email);
    formdata.append("password", password);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow"
    };
    console.log("REquest_Option", requestOptions.body);
    fetch(`${BASE_URL}user/login/`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log("LOGIN_RESPONSE_IN_API", result);

        if (result) {
          resolve(result);
        }
      })
      .catch(error => {
        console.log("LOGIN_ERROR_RESPONSE_IN_API", error);
        reject(error.message);
      });
  });
};

export const userDetails = () => {
  return new Promise(async (resolve, reject) => {
    const token = await getAccessToken();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `token ${token}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch(`${BASE_URL}user/users/`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        if (result) {
          resolve(result);
        }
      })
      .catch(error => {
        console.log("error", error);
        reject(error.message);
      });
    // resolve("true");
    // resolve(
    //   {
    //     "id": 3,
    //     "password_hash": "$2a$14$evsx579ihmwExQjg0DRkVe.NcAyZiEXl8lFnT/jB.f14Hd9GaTtCi",
    //     "user_id": "3b273a74-973a-47f7-adc3-48918748ad85",
    //     "username": "ankitp"
    //   }
    // );
    // return;

    //   var myHeaders = new Headers();
    //   myHeaders.append('x-access-tokens', token);
    //   fetch(`${BASE_URL}auth_user`, {
    //     method: 'GET',
    //     headers: myHeaders,
    //   })
    //     .then(result => result.json())
    //     .then(response => {
    //       console.log('USER_DEATIL > response', response);
    //       if (response) {
    //         resolve(response[0]);
    //       }
    //       if (response.errors) {
    //         reject(response.errors.errors);
    //       }
    //     })
    //     .catch(error => {
    //       console.log(error);
    //       reject(error.message);
    //     });
  });
};
