import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "7d48cc2d-cb8c-4e5b-b4d7-392ec46e387e",
  },
});

export const userAPI = {
  
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },

  follow(userId) {
    return instance.post(`follow/${userId}`, {});
  },

  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },

  getProfile(userId) {
    console.warn('Deprecated method. Please use profileApi method')
    return profileAPI.getProfile(userId);

      
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get('profile/' + userId);
  },
  getStatus(userId) {
    return instance.get('profile/status/' + userId);
  },
  updateStatus(status) {
    return instance.put('profile/status/',{status: status});
  },
}

export const authAPI = {
  me() {
    return instance
      .get(`auth/me`)
  },
  login(email, password, rememberMe = false) {
    return instance.post('auth/login', {email, password, rememberMe})
  },
  logout(email, password, rememberMe) {
    return instance.delete('auth/login', {email, password, rememberMe})

  }
}

