import React from "react";

import './AuthForm.scss'

const AuthForm = (props) => {
    return (
        <div className="auth-form-component">
            <div className="auth-form-main">
                {props.name}
                {props.essential&&<p className="auth-form-essential-mark">*</p>}
            </div>
                {props.children}
        </div>
    )
}

export default AuthForm