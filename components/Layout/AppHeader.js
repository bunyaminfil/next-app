import React from "react";
import HeaderAuth from "../Header/HeaderAuth";
import HeaderPublic from "../Header/HeaderPublic";

class AppHeader extends React.Component {
  state = {
    isLogin: process.env.isLogin,
    isActive: false,
  };
  render() {
    return (
      <React.Fragment>
        {this.state.isLogin == false ? <HeaderAuth /> : <HeaderPublic />}
      </React.Fragment>
    );
  }
}
export default AppHeader;
