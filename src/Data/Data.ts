import React from "react";
import { API_URL, defaultUserDetails } from "../Constant";
import axios from "axios";
import { UserDetail } from "../Interface";

export const getUserDetails = async () => {
  try {
    const response: any = await axios.get(API_URL);
    const userData = response.data.results[0];
    const userDetails: UserDetail = {
      title: userData.name.title,
      firstName: userData.name.first,
      lastName: userData.name.last,
      email: userData.email,
      image: userData.picture.large
    };
    return userDetails;
  } catch (error) {
    throw new Error("Error while fetch data!!!");
  }
};
