import React, { useState } from 'react';

const Alert = (props) => {
    
    return(
        props.alert && 
        <div className={`alert alert-${props.alert.msgtype} alert-dismissible`} role="alert">
        <strong>{props.alert.msgtype}</strong> {props.alert.msg}
        
      </div>
    );
}


export default Alert