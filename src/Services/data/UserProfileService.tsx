import { UserProfile } from "./Users/UserProfileDTO";

export class UserProfileService {
    async getUserProfile(userId: number): Promise<UserProfile> {
      const response = await fetch(`https://localhost:7184/api/User/GetUserProfile/${userId}`); // Adjust the API endpoint
      if (!response.ok) {
        throw new Error(`Failed to fetch user profile: ${response.statusText}`);
      }
      const data = await response.json();
      return data as UserProfile; 
    }
  }
