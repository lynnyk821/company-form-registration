import React from "react";
import Layout from "../сommons/Layout/Layout";
import ProgressBar from "../сommons/ProgressBar/ProgressBar";

import Title from "../сommons/Title/Title";
import {registrationNotificationMessage, registrationTitleContentData} from "./registrationData";
import Notification from "./Notification/Notification";
import PhoneForm from "./PhoneForm/PhoneForm";

export default function Registration() {
    const RegistrationContainer = ({children}) => {
        return (
            <div className="w-full h-full">{children}</div>
        );
    }
    return (
        <Layout>
            <RegistrationContainer>
                <ProgressBar numberOfIndicators={3} activeIndicators={1}/>
                <Title name={"Registration"} content={registrationTitleContentData}/>
                <Notification message={registrationNotificationMessage}/>
                <PhoneForm></PhoneForm>
            </RegistrationContainer>
        </Layout>
    );
}