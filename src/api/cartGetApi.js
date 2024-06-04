import jwtAxios from "../util/jwtUtil";
import { SERVER_URL } from "./config";

export const cartPickUpGetApi = async ({ shopInfo }) => {
  try {
    const response = await jwtAxios.get(
      `${SERVER_URL}/shoppingbasket/${shopInfo}`,
    );
    if (response.status === 200) {
      console.log(response);
      return response.data;
    } else {
      console.log("no");
    }
  } catch (error) {
    console.log(error);
  }
};
