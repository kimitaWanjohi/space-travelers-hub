import axios from "axios";
import { MISSIONS_URL } from "../consts";

export const getMissions = async () => {
  const response = await axios.get(MISSIONS_URL);
  return response.data;
};

export const missions = "missions";
