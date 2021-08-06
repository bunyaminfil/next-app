import React from "react";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

class AppLayout extends React.Component {
  state = {
    isLogin: process.env.isLogin,
    isActive: false,
  };
  render() {
    const { children } = this.props;

    return (
      <>
        <AppHeader />
        {children}
        <AppFooter />
      </>
    );
  }
}
export default AppLayout;
