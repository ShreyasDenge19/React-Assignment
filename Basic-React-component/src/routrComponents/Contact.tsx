import React from "react";
import RegistrationForm from "../RegistrationForm";

const Contact: React.FC = () =>{
    return(
        <>
        <div className="h-screen flex justify-center items-center">
            <h1>this is contact component</h1>
            <RegistrationForm/>
        </div>
        </>
    )
}

export default Contact;