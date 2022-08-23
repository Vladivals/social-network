import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import { Route, Routes, useLocation } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import { initializeApp } from "./redux/app-reducer";
import { connect } from "react-redux";
import Preloader from "./components/common/Preloader/Preloader";
import { compose } from "redux";
import { Suspense } from "react";


const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));



const App = (props) => {
  const location = useLocation();
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    props.initializeApp();
  }, [])

  if (!props.initialized) {
    return <Preloader />
  }

  if (location.pathname === "/login") {
    return <LoginPage />
  }

  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar sidebar={sidebar} onToggleNavBar={showSidebar} />
      <div className="app-wrapper-content">
        <Suspense fallback={<Preloader />}>
          <Routes>
            <Route path="/" element={<ProfileContainer />} />
            <Route path="/dialogs" element={<DialogsContainer />} />
            <Route path="/profile/:userId" element={<ProfileContainer />} />
            <Route path="/profile/" element={<ProfileContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Suspense>

      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

export default compose(
  connect(mapStateToProps, { initializeApp }))(App);
