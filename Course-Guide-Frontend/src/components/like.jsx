import React from "react";
const Like = props => {
  return (
    <i
      onClick={props.onClick}
      className={!props.liked ? "fa fa-heart-o" : "fa fa-heart"}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
