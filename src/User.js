import React from "react";

const User = (props) =>{
  // props.user = "Ankith";
  return (<div onClick={props.sample}>{props.user}</div>)
}
 
export default User;