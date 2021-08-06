import React from "react";
import FooterAuth from "../Footer/FooterAuth";
import FooterPublic from "../Footer/FooterPublic";

class AppFooter extends React.Component {
  state = {
    isLogin: process.env.isLogin,
    isActive: false,
  };
  render() {
    return (
      <React.Fragment>
        {this.state.isLogin == false ? <FooterAuth /> : <FooterPublic />}
      </React.Fragment>
    );
  }
}
export default AppFooter;
