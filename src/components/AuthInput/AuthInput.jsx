import React from "react";

import './AuthInput.scss'

const AuthInput = (props) => {
    return (
        <div className="auth-input-component">
            <input style={{
                width: props.width
            }}
                placeholder={props.placeholder}
            />
        </div>
    )
}

export default AuthInput