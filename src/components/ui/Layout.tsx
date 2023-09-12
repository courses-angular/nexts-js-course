import React, { FunctionComponent } from "react";
import MainNavigation from "../layout/MainNavigation";
import classes from "../../styles/Layout.module.css";

interface OwnProps {
  children: React.ReactNode;
}

type Props = OwnProps;

const Layout: FunctionComponent<Props> = ({ children }) => {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </div>
  );
};

export default Layout;
