import { profileAPI, userAPI } from "../api/api";

const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  posts: [
    { id: 1, message: "Hifdgdf", likesCount: 12 },
    { id: 2, message: "Yodfgdf", likesCount: 15 },
    { id: 3, message: "Nihaodfgdf", likesCount: 5 },
  ],
  newPostText: "it-kamasutra",
  profile: null,
  status: '',
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      
      let newPost = {
        id: 5,
        message: action.newPostBody,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }
    
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }

    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = (newPostBody) => {
  return {
    type: ADD_POST,
    newPostBody
  };
};



export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};

export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status,
  };
};

export const getUserProfile = (userId) => async (dispatch) => {
  let response = await userAPI.getProfile(userId)
  
    dispatch(setUserProfile(response.data));
  
};

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId)
  
    dispatch(setStatus(response.data));
  
};

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
      
    }
  
};

export default profileReducer;
