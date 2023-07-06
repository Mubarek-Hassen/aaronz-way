import React from 'react'
import Classes from "./Wrapper.module.css"
function Wrapper(props) {
  return (
    <div className={ Classes.wrapper }>{props.children}</div>
  )
}

export default Wrapper