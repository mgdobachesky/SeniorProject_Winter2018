import React from 'react';

export const FormErrors = ({formErrors}) =>
    <div className='formErrors'>
        {Object.keys(formErrors).map((fieldName, i) => {
            let prepareName = "";
            if(fieldName == "username") {
                prepareName = "Username";
            } else if(fieldName == "password") {
                prepareName = "Password";
            } else if(fieldName == "confirmPassword") {
                prepareName = "Password confirmation";
            } else if(fieldName == "email") {
                prepareName = "Email";
            }

            if (formErrors[fieldName].length > 0) {
                return (
                    <div key={i} className="alert alert-danger" role="alert">
                        {prepareName} {formErrors[fieldName]}
                    </div>
                )
            } else {
                return '';
            }
        })}
    </div>;