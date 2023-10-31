import { updateUserProfile } from './Users/UserServices';
import { get, post, put, del, getUserSession, getAllSessions, postSession, getAllUpcomingSessions, getSessionById } from './apiService';

export interface User {
    gender: string
    name: Name
    location: Location
    email: string
    login: Login
    dob: Dob
    registered: Registered
    phone: string
    cell: string
    id: Id
    picture: Picture
    nat: string
  }
  
  export interface Name {
    title: string
    first: string
    last: string
  }
  
  export interface Location {
    street: Street
    city: string
    state: string
    country: string
    postcode: number
    coordinates: Coordinates
    timezone: Timezone
  }
  
  export interface Street {
    number: number
    name: string
  }
  
  export interface Coordinates {
    latitude: string
    longitude: string
  }
  
  export interface Timezone {
    offset: string
    description: string
  }
  
  export interface Login {
    uuid: string
    username: string
    password: string
    salt: string
    md5: string
    sha1: string
    sha256: string
  }
  
  export interface Dob {
    date: string
    age: number
  }
  
  export interface Registered {
    date: string
    age: number
  }
  
  export interface Id {
    name: string
    value: string
  }
  
  export interface Picture {
    large: string
    medium: string
    thumbnail: string
  }
  
  export interface UserSessions {
    id: number
    sessionName: string
    sessionDescription: string
    sessionType: boolean
    trainerId: number
    trainerFirstName: string
    trainerLastName: string
    trainerContact: string
    trainerEmail: string
    trainerProfileImage: string
    trinerSignature: string
    sessionDate: string
    displayDate: string
    startTime: string
    displayStartTime: string
    endTime: string
    displayEndTime: string
    isActive: boolean
    sessionUsers: SessionUser[]
  }
  
  export interface SessionUser {
    id: number
    sessionId: number
    userId: number
    knowledgeOfTopic: any
    attitude: any
    isSigned: boolean
    signature: string
    session: any
  }

  export interface NewSession{
    trainerId: number
    sessName: string
    sessionDescription: string
    sessionType: true
    sessionDate: string
    startTime: string
    endTime: string
    attendees:[]
  }

export interface UsersInSession {
    userId: number;
    firstName: string;
    lastName: string;
    employeeCode: string;
    tableId: number;
  }

  export interface ServerReply {
    message: SessionMessage
    isSucess: boolean
    responseBody: any
    error: any
  }
  
  export interface SessionMessage {
    id: number
    sessionName: string
    sessionDescription: string
    sessionType: boolean
    trainerId: number
    trainerFirstName: string
    trainerLastName: string
    trainerContact: string
    trainerEmail: string
    trainerProfileImage: string
    trinerSignature: string
    sessionDate: string
    startTime: string
    endTime: string
    isActive: boolean
    sessionUsers: SessionUser[]
  }
  
  export interface SessionUser {
    id: number
    sessionId: number
    userId: number
    knowledgeOfTopic: any
    attitude: any
    isSigned: boolean
    signature: string
    session: any
  }
  
  
///////Sessions//////
export const fetchUserSession = (userId) => getUserSession(userId);
export const fetchAllSessions = () => getAllSessions();
export const fetchAllComingSessions = () => getAllUpcomingSessions();
export const fetchSessionById = (sessionId) => getSessionById(sessionId);



export const createSession = (userData) => postSession(userData);


///////Users////////
export const updateUserInfo = (userId: number, userProfileData) => updateUserProfile(userId, userProfileData);

export const fetchUsers = (count = 5) => get("", { results: count });
export const createUser = (userData) => post('/users', userData);
export const updateUser = (userId, userData) => put(`/users/${userId}`, userData);
export const deleteUser = (userId) => del(`/users/${userId}`);