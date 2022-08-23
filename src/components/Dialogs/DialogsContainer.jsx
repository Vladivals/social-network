import {
  sendMessageCreator,

} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirectComponent } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getUserProfile } from "../../redux/profile-reducer";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsReducer,
    isAuth: state.auth.isAuth,
    profile: state.profileReducer.profile,
    authorisedUserId: state.auth.userId,
  };

};

let mapDispatchToProps = (dispatch) => {
  return {

    sendMessage: (newMessageBody) => {
      dispatch(sendMessageCreator(newMessageBody));
    },
    getUserProfile: (userId) => {
      dispatch(getUserProfile(userId))
    }
  };
};


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirectComponent
)(Dialogs)
