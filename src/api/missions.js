import { MISSIONS_URL } from "../consts";

export const getMissions = async () => {
  const response = await fetch(MISSIONS_URL);
  return response.json();
};

export const missions = "missions";
