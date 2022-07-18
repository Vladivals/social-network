
import React from "react";
import { connect } from "react-redux";

import Profile from "./Profile";

import { getUserProfile, getStatus, updateStatus } from "../../redux/profile-reducer";
import {  useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthRedirectComponent } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId && this.props.isAuth) {
      userId = this.props.authorisedUserId;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId)

  }

  render() {


    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
      </div>
    );
  }
}


let mapStateToProps = (state) => ({
  profile: state.profileReducer.profile,
  status: state.profileReducer.status,
  authorisedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,

});



export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
  
  )(ProfileContainer);
