import React from "react";

const Container = (props) => {
  return <div className={`${props.class} px-96 w-full`}>{props.children}</div>;
};

export default Container;
