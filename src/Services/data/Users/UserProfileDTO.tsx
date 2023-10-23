export interface UserProfile {
  userId: number;
  firstName: string;
  lastName: string;
  employeeNumber: string;
  identityNumber: string,
  emailAddress: string,
  phoneNumber: string,
  race: string,
  gender: true,
  disability: true,
  jobTitle: string,
  roleName: string,
  branchName: string,
  companyName: string
}


export interface UserSessions {
  id: number 
  sessionName: string
  sessionDescription: string 
  sessionType: true
  trainerId: number
  trinerSignature: string
  sessionDate:string
  startTime:string
  endTime:string
  isActive: true
}


