import React, { FunctionComponent } from "react";
import classes from "../../styles/Card.module.css";

interface OwnProps {
  children: React.ReactNode[] | React.ReactNode;
}

type Props = OwnProps;

const Card: FunctionComponent<Props> = ({ children }) => {
  return <div className={classes.card}>{children}</div>;
};

export default Card;
