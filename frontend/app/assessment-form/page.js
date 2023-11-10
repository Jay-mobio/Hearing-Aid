"use client"
import StepperForm from '@/Components/Assessment Form/AssessmentForm';
import React, { useState, useEffect } from 'react';
import { Audio } from 'react-loader-spinner'
import "../../styles/dashboardLayout.css"


const AssessmentForm = () => {

    const [cssLoaded, setCssLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setCssLoaded(true);
        }, 1000); // Adjust the delay as needed
    }, []);

    return (
        <>
            {
                cssLoaded ? (
                    <StepperForm />
                ) : (
                    <div className='css-loader'>
                        <Audio
                            height="60"
                            width="80"
                            radius="10"
                            color="Blue"
                            ariaLabel="loading"
                            wrapperStyle
                            wrapperClass
                        />
                    </div>
                )
            }

        </>
    )
}

export default AssessmentForm