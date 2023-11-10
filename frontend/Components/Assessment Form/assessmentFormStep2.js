"use client"
import { Form, Input, DatePicker, Radio, Space, Button } from 'antd';
import './assessmentForm.css';
import Image from 'next/image';
import Logo from "../../icon/Integrated-logo.png";
import { useState } from 'react';
import { isEmailValid, isPhoneNumberValid } from '@/lib/utils';

const { TextArea } = Input;

export const Step2 = ({ gotoStep, current, form }) => {
    const [otherValue, setOtherValue] = useState('');

    return (
        <>
            <Form.Item>
                <div>
                    <p>Enrolment & Case History Form (Kindly provide your full details in the form)</p>
                    <Image className='form-logo' src={Logo} alt='logo' />
                </div>
            </Form.Item>

            <Form.Item
                label="Child's Full Name/ बच्चे का पूरा नाम"
                name="childFullName"
                rules={[
                    {
                        required: true,
                        message: "This is a required question",
                    },
                ]}
            >
                <Input placeholder="Your answer" />
            </Form.Item>

            <Form.Item
                label="Child's Date of Birth/बच्चे की जन्म तिथि"
                name="childDob"
                rules={[
                    {
                        required: true,
                        message: "This is a required question",
                    },
                ]}
            >
                <DatePicker className='date-field' placeholder='Select date' />
            </Form.Item>

            <Form.Item
                label="Child's Gender/बच्चे का लिंग"
                name="childGender"
                rules={[
                    {
                        required: true,
                        message: "This is a required question",
                    },
                ]}
            >
                <Radio.Group >
                    <Space direction="vertical">
                        <Radio value="female">Female/स्त्री</Radio>
                        <Radio value="male">Male/पुरुष</Radio>
                        <Radio value="Prefer not to say">Prefer not to say/चुप रहना पसंद करूंगा</Radio>
                        <Radio value={otherValue}>
                            Other:
                            <Input
                                style={{
                                    width: 200,
                                    marginLeft: 10,
                                }}
                                placeholder='Your answer'
                                value={otherValue}
                                onChange={(e) => {
                                    setOtherValue(e.target.value);
                                    form.setFieldsValue({
                                        "childGender": e.target.value,
                                    });
                                }
                                }
                            />
                        </Radio>
                    </Space>
                </Radio.Group>
            </Form.Item>

            <Form.Item
                label="Caregiver's Full Name/देखभालकर्ता का पूरा नाम"
                name="caregiverFullName"
                rules={[
                    {
                        required: true,
                        message: "This is a required question",
                    },
                ]}
            >
                <Input placeholder="Your answer" />
            </Form.Item>

            <Form.Item
                label="Mother's Name/माता का नाम"
                name="motherName"
                rules={[
                    {
                        required: true,
                        message: "This is a required question",
                    },
                ]}
            >
                <Input placeholder="Your answer" />
            </Form.Item>

            <Form.Item
                label="Father's Name/पिता का नाम"
                name="fatherName"
                rules={[
                    {
                        required: true,
                        message: "This is a required question",
                    },
                ]}
            >
                <Input placeholder="Your answer" />
            </Form.Item>

            <Form.Item
                label="Full Address/पूरा पता"
                name="fullAddress"
                rules={[
                    {
                        required: true,
                        message: "This is a required question",
                    },
                ]}
            >
                <TextArea rows={4} placeholder="Your answer" />
            </Form.Item>

            <Form.Item
                label="Mother's Cell No/ माता का मोबाइल नंबर"
                name="motherCellNo"
                rules={[
                    {
                        required: true,
                        message: 'This is a required question',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || isPhoneNumberValid(value)) {
                                return Promise.resolve();
                            }
                            return Promise.reject('Invalid phone number format');
                        },
                    }),
                ]}
            >
                <Input placeholder="Your answer" />
            </Form.Item>

            <Form.Item
                label="Father's Cell No/पिता का मोबाइल नंबर"
                name="fatherCellNo"
                rules={[
                    {
                        required: true,
                        message: 'This is a required question',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || isPhoneNumberValid(value)) {
                                return Promise.resolve();
                            }
                            return Promise.reject('Invalid phone number format');
                        },
                    }),
                ]}
            >
                <Input placeholder="Your answer" />
            </Form.Item>

            <Form.Item
                label="Mother's email address/माता का ईमेल"
                name="motherEmail"
                rules={[
                    {
                        required: false,
                        message: 'This is a required question',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || isEmailValid(value)) {
                                return Promise.resolve();
                            }
                            return Promise.reject('Invalid email format');
                        },
                    }),
                ]}
            >
                <Input placeholder="Your answer" />
            </Form.Item>

            <Form.Item
                label="Father's email address/पिता का ईमेल "
                name="fatherEmail"
                rules={[
                    {
                        required: false,
                        message: 'This is a required question',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || isEmailValid(value)) {
                                return Promise.resolve();
                            }
                            return Promise.reject('Invalid email format');
                        },
                    }),
                ]}
            >
                <Input placeholder="Your answer" />
            </Form.Item>

            <Form.Item
                label="Mother's Occupation/माता का व्यवसाय"
                name="motherOccupation"
                rules={[
                    {
                        required: true,
                        message: "This is a required question",
                    },
                ]}
            >
                <Input placeholder="Your answer" />
            </Form.Item>

            <Form.Item
                label="Father's Occupation/पिता का व्यवसाय"
                name="fatherOccupation"
                rules={[
                    {
                        required: true,
                        message: "This is a required question",
                    },
                ]}
            >
                <Input placeholder="Your answer" />
            </Form.Item>

            <Form.Item
                label="Are you i.e. husband & wife (child's parents) related to each other in any way? /क्या माता पिता किसी प्रकार से एक दुसरे के रिश्तेदार है?"
                name="parentsRelation"
                rules={[
                    {
                        required: true,
                        message: "This is a required question",
                    },
                ]}
            >
                <Radio.Group onChange={() => console.log("Relation Radio")} value="yes">
                    <Space direction="vertical">
                        <Radio value="yes">Yes/हाँ</Radio>
                        <Radio value="no">No/नहीं</Radio>
                    </Space>
                </Radio.Group>
            </Form.Item>

            <Form.Item
                label="If yes, kindly elaborate/यदि हाँ, तो कैसे?"
                name="parentsRelationDetails"
                rules={[
                    {
                        required: false,
                        message: "This is a required question",
                    },
                ]}
            >
                <Input placeholder="Your answer" />
            </Form.Item>

            <Form.Item
                label="Referred by/किसके द्वारा आपको हमारे बारे मे पता चला"
                name="referredBy"
                rules={[
                    {
                        required: false,
                        message: "This is a required question",
                    },
                ]}
            >
                <Input placeholder="Your answer" />
            </Form.Item>

            <Form.Item
                label="ENT Name & Contact No/ईएनटी का नाम और संपर्क नंबर"
                name="entNameContact"
                rules={[
                    {
                        required: false,
                        message: "This is a required question",
                    },
                ]}
            >
                <Input placeholder="Your answer" />
            </Form.Item>

            <Form.Item
                label="Audiologist Name & Contact No/ऑडियोलॉजिस्ट का नाम और संपर्क नंबर"
                name="audiologistNameContact"
                rules={[
                    {
                        required: false,
                        message: "This is a required question",
                    },
                ]}
            >
                <Input placeholder="Your answer" />
            </Form.Item>

            <Form.Item
                label="Language Spoken at Home/घर मे बोली जाने वाली भाषा"
                name="languageSpokenAtHome"
                rules={[
                    {
                        required: true,
                        message: "This is a required question",
                    },
                ]}
            >
                <Input placeholder="Your answer" />
            </Form.Item>

            <Form.Item>
                <div className='prev-next-btn'>
                    <Button onClick={() => gotoStep(current - 1)}>Prev</Button>
                    <Button onClick={() => gotoStep(current + 1)}>Next</Button>
                </div>
            </Form.Item>
        </>
    )

};

