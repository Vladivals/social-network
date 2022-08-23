
const sendMessage = "SEND-MESSAGE";


let initialState = {
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "Yo" },
    { id: 3, message: "Nihao" },
  ],

  dialogs: [
    { id: 1, name: "Vlad" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Alexander" },
    { id: 4, name: "Kate" },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case sendMessage: {
      let body = action.newMessageBody;

      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, { id: 6, message: body }],
      };
    }
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => {
  return {
    type: sendMessage,
    newMessageBody
  };
};



export default dialogsReducer;
