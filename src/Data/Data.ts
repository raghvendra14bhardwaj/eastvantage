import React from "react";
import { API_URL, defaultUserDetails } from "../Constant";
import axios from "axios";
import { UserDetail } from "../Interface";

export const getUserDetails = async () => {
  try {
    let userDetails: UserDetail = defaultUserDetails;
    const response: any = await axios.get(API_URL);
    userDetails.title = response.data.results[0].name.title;
    userDetails.firstName = response.data.results[0].name.first;
    userDetails.lastName = response.data.results[0].name.last;
    userDetails.email = response.data.results[0].email;
    userDetails.image = response.data.results[0].picture.large;
    return userDetails;
  } catch (error) {
    throw new Error("Error while fetch data!!!");
  }
};
