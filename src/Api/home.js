import { BASE_URL } from "../Config";
import { getAccessToken } from "../Storage";

export const homeProduct = (email, password) => {
  console.log("PAYLOAD_IN_LOGIN", email);
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

    fetch(`${BASE_URL}stock/product-list/`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log("HOME_PRODUCT", result);
        if (result) {
          resolve(result);
        }
      })
      .catch(error => {
        console.log("HOME_PRODUCT_ERROR", error);
        reject(error.message);
      });
  });
};

export const placedProduct = (email, password) => {
  console.log("PAYLOAD_IN_LOGIN", email);
  return new Promise(async (resolve, reject) => {
    const token = await getAccessToken();
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", `token ${token}`);

    var raw = JSON.stringify({
      order: [
        {
          product_id: 1,
          quantity: 1
        },
        {
          product_id: 2,
          quantity: 1
        }
      ]
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch(`${BASE_URL}stock/order/`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log("SUCCESS_IN_PLACED_PRODUCT", result);
        if (result) {
          resolve(result);
        }
      })
      .catch(error => {
        console.log("ERROR_IN_PLACED_PRODUCT", error);
        reject(error.message);
      });
  });
};
