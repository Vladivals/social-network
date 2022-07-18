import profileReducer, { addPostActionCreator } from "./profile-reducer";


it('length of posts should be incremented', () => {

  
  let action = addPostActionCreator("Hey");

  let state = {posts: [
    { id: 1, message: "Hifdgdf", likesCount: 12 },
    { id: 2, message: "Yodfgdf", likesCount: 15 },
    { id: 3, message: "Nihaodfgdf", likesCount: 5 },
  ]
}
  

  let newState = profileReducer(state, action);

expect (newState.posts.length).toBe(4);
});

it('message of a new post should be correct', () => {

  
  let action = addPostActionCreator("Hey");

  let state = {posts: [
    { id: 1, message: "Hifdgdf", likesCount: 12 },
    { id: 2, message: "Yodfgdf", likesCount: 15 },
    { id: 3, message: "Nihaodfgdf", likesCount: 5 },
  ]
}
  

  let newState = profileReducer(state, action);

expect (newState.posts[3].message).toBe("Hey");
});