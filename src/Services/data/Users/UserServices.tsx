import axios from "axios";

export const updateUserProfile = (userId: number, dataToUpdate: any) => {
    const userSessionApi = `https://localhost:7184/api/User/UpdateUserProfile/${userId}`;
    return axios.put(userSessionApi, dataToUpdate, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }; 