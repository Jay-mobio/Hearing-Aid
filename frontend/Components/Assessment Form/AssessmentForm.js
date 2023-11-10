"use client"
import React from 'react';
import { useStepsForm } from 'sunflower-antd';
import { Steps, Button, Form, Result } from 'antd';
import "./assessmentForm.css";
import { Step1 } from './assessmentFormStep1';
import { Step2 } from './assessmentFormStep2';
import { Step3 } from './assessmentFormStep3';
import { Step4 } from './assessmentFormStep4';
import { Step5 } from './assessmentFormStep5';
import { Step6 } from './assessmentFormStep6';
import { Step7 } from './assessmentFormStep7';
import { Step8 } from './assessmentFormStep8';

const { Step } = Steps;

const StepperForm = (props) => {

    const {
        form,
        current,
        gotoStep,
        stepsProps,
        formProps,
        submit,
        formLoading,
    } = useStepsForm({
        async submit(values) {
            console.log({ values })
            const { username, email, address } = values;
            console.log(username, email, address);
            await new Promise(r => setTimeout(r, 1000));
            return 'ok';
        },
        total: 9,
    });
    const formList = [
        <Step1 gotoStep={gotoStep} current={current} />,
        <Step2 gotoStep={gotoStep} current={current} form={form} />,
        <Step3 gotoStep={gotoStep} current={current} />,
        <Step4 gotoStep={gotoStep} current={current} form={form} />,
        <Step5 gotoStep={gotoStep} current={current} form={form} />,
        <Step6 gotoStep={gotoStep} current={current} />,
        <Step7 gotoStep={gotoStep} current={current} />,
        <Step8 gotoStep={gotoStep} current={current} formLoading={formLoading} submit={submit} />
    ]

    return (
        <div className='assessment-form-container'>
            <Steps
                {...stepsProps}
                onChange={() => { }}
            >
                {[...Array(9)].map(() => (
                    <Step />
                ))}
            </Steps>

            <div className='form'>
                <div className='assessment-form' >
                    <div className='child-assessment-form-div'>

                        <Form  {...formProps} layout="vertical">
                            {formList[current]}
                        </Form>
                    </div>

                    {current === 8 && (
                        <Result
                            status="success"
                            title="Submit is succeed!"
                            extra={
                                <>
                                    <Button
                                        type="primary"
                                        onClick={() => {
                                            form.resetFields();
                                            gotoStep(0);
                                        }}
                                    >
                                        Buy it again
                                    </Button>
                                    <Button>Check detail</Button>
                                </>
                            }
                        />
                    )}
                </div>
            </div>
        </div>

    );
};

export default StepperForm;
