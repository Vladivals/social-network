import {
  sendMessageCreator,
  
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirectComponent } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsReducer,
    isAuth: state.auth.isAuth
    
  };
  
};

let mapDispatchToProps = (dispatch) => {
  return {
    
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody));
    },
  };
};





export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirectComponent
  ) (Dialogs)
