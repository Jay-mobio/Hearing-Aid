"use client"
import { Form, Input, Radio, Space, Checkbox, DatePicker, Typography, Button } from 'antd';
import "./assessmentForm.css";
import { onFillingDateChange, tailLayout2 } from './assessmentFormUtils';
import { useState } from 'react';

const { TextArea } = Input;
const { Text } = Typography;

export const Step4 = ({ gotoStep, current }) => {
    const [isOtherSelected, setOtherSelected] = useState(false);
    const [otherValue, setOtherValue] = useState('');
    const [checkedValues, setCheckedValues] = useState([]);
    const [cochlearImplantValues, setCochlearImplantValues] = useState([]);
    const [otherCochlearImplant, setOtherCochlearImplant] = useState('');

    const handleCochlearImplantChange = (values) => {
        setCochlearImplantValues(values);

        // If "Others" is selected, reset the input value
        if (!values.includes('Others')) {
            setOtherCochlearImplant('');
        }
    };

    const handleCheckboxChange = (values) => {
        setCheckedValues(values);
    };

    const handleRadioChange = (e) => {
        const value = e.target.value;
        setOtherSelected(value === 'other');
    };
    return (
        <>
            <Form.Item>
                <Text>Medical History - Hearing Loss & Listening Device/s/ चिकित्सा इतिहास - हियरींग लॉस और हियरींग उपकरण</Text><br />
                <Text>Kindly provide us as much detail as you can as that will help us serve you better/कृपया हमें
                    अधिक से अधिक जानकारी प्रदान करें जो हमें आपकी बेहतर सेवा करने में मदद करेगा</Text>
            </Form.Item>

            <Form.Item
                label="Write in short about your child's hearing loss and medical history/ कृपया हमे अपने बच्चे के हियरींग लॉस ओर मेडिकल हिस्ट्री की पूरी जानकारी दे"
                name="childsHearingLoss"
                rules={[
                    {
                        required: true,
                        message: "Please input child's hearing loss details",
                    },
                ]}
            >
                <TextArea rows={4} placeholder="Child's Hearing Loss Details" maxLength={6} />
            </Form.Item>

            <Form.Item
                label="When was your child's hearing loss diagnosed? How old was your child?/आपके बच्चे के हियरींग लॉस के बारे मे आपको कब पता चला? जब आपके बच्चे का हियरींग लॉस डिटेक्ट हुआ तब वह कितने साल का था?"
                name="childHearingLossTime"
                rules={[
                    {
                        required: true,
                        message: "Please input your answer",
                    },
                ]}
            >
                <Input placeholder="Your answer" />
            </Form.Item>

            <Form.Item
                label="What is your child's degree and type of hearing loss?/आपके बच्चे की डिग्री और हियरिंग लॉस का प्रकार क्या है?"
                name="childHearingLossType"
                rules={[
                    {
                        required: true,
                        message: "Please input child's degree and type of hearing loss",
                    },
                ]}
            >
                <Radio.Group onChange={handleRadioChange} value={isOtherSelected ? otherValue : undefined}>
                    <Space direction="vertical">
                        <Radio value="Bilateral Sensory Neural Profound Hearing Loss">Bilateral Sensory Neural Profound Hearing Loss/बायलेट्ल  सेंसरी न्यूरल प्रोफाउंड हियरिंग लॉस</Radio>
                        <Radio value="Bilateral Sensory Neural Severe to Profound Hearing Loss">Bilateral Sensory Neural Severe to Profound Hearing Loss/बायलेट्ल  सेंसरी न्यूरल सीवियर टू प्रोफाउंड हियरिंग लॉस</Radio>
                        <Radio value="Bilateral Sensory Neural Severe Hearing Loss">Bilateral Sensory Neural Severe Hearing Loss/बायलेट्ल  सेंसरी न्यूरल सीवियर हियरिंग लॉस</Radio>
                        <Radio value="Bilateral Sensory Neural Moderate to Severe Hearing Loss">Bilateral Sensory Neural Moderate to Severe Hearing Loss/बायलेट्ल  सेंसरी न्यूरल मॉडरेट टू सीवियर हियरिंग लॉस</Radio>
                        <Radio value="Bilateral Sensory Neural Moderate Hearing Loss">Bilateral Sensory Neural Moderate Hearing Loss/बायलेट्ल  सेंसरी न्यूरल मॉडरेट हियरिंग लॉस</Radio>
                        <Radio value="Bilateral Sensory Neural Mild to Moderate Hearing Loss">Bilateral Sensory Neural Mild to Moderate Hearing Loss/बायलेट्ल  सेंसरी न्यूरल माइल्ड टू मॉडरेट हियरिंग लॉस</Radio>
                        <Radio value="other">
                            Other:
                            {isOtherSelected && (
                                <Input
                                    style={{
                                        width: 100,
                                        marginLeft: 10,
                                    }}
                                    value={otherValue}
                                    onChange={(e) => setOtherValue(e.target.value)}
                                />
                            )}
                        </Radio>
                    </Space>
                </Radio.Group>
            </Form.Item>

            <Form.Item
                label="Is your child fitted with listening devices (cochlear implant, BAHA)/क्या आपका बच्चा सुनने के लिए श्रवण यंत्र पहनता है? (कॉक्लियर इंप्लांट, बाहा)"
                name="childFittedWithListeningDevices"
                rules={[
                    {
                        required: false,
                        message: "Please select at least one option",
                    },
                ]}
            >
                <Checkbox.Group onChange={handleCheckboxChange} value={checkedValues}>
                    <div className='checkbox'>
                        <Checkbox value="Cochlear Implant Right Ear">Cochlear Implant Right Ear</Checkbox>
                    </div>
                    <div className='checkbox'>
                        <Checkbox value="Cochlear Implant Left Ear">Cochlear Implant Left Ear</Checkbox>
                    </div>
                    <div className='checkbox'>
                        <Checkbox value="Hearing Aid Right Ear">Hearing Aid Right Ear</Checkbox>
                    </div>
                    <div className='checkbox'>
                        <Checkbox value="Hearing Aid Left Ear">Hearing Aid Left Ear</Checkbox>
                    </div>
                    <div className='checkbox'>
                        <Checkbox value="BAHA">BAHA</Checkbox>
                    </div>
                </Checkbox.Group>
            </Form.Item>

            <Form.Item
                label="Kindly provide the details of the cochlear implant / कृपया कॉक्लियर इंप्लांट की जानकारी दे"
                name="cochlearImplant"
                rules={[
                    {
                        required: false,
                        message: "Please select at least one option",
                    },
                ]}
            >
                <Checkbox.Group onChange={handleCochlearImplantChange} value={cochlearImplantValues}>
                    <div className='checkbox'>
                        <Checkbox value="Cochlear Company">Cochlear Company</Checkbox>
                    </div>
                    <div className='checkbox'>
                        <Checkbox value="Advance Bionics">Advance Bionics</Checkbox>
                    </div>
                    <div className='checkbox'>
                        <Checkbox value="Medel">Medel</Checkbox>
                    </div>
                    <div className='checkbox'>
                        <Checkbox value="Digisonic">Digisonic</Checkbox>
                    </div>
                    <div className='checkbox'>
                        <Checkbox value="Others">Others:</Checkbox>
                        {cochlearImplantValues.includes('Others') && (
                            <Input
                                style={{
                                    width: 100,
                                    marginLeft: 10,
                                }}
                                value={otherCochlearImplant}
                                onChange={(e) => setOtherCochlearImplant(e.target.value)}
                            />
                        )}
                    </div>
                </Checkbox.Group>
            </Form.Item>

            <Form.Item
                label="Model name/number of cochlear implant /मॉडल का नाम/नंबर"
                name="cochlearModelNo"
                rules={[
                    {
                        required: false,
                        message: "Please input Cochlear Implant Name or Number",
                    },
                ]}
            >
                <Input placeholder="Your answer" />
            </Form.Item>

            <Form.Item
                label="Switch on date - Right Ear /दायें कान की स्वीच ऑन की तारिख"
                name="rightEarSwitchOnDate"
                rules={[
                    {
                        required: false,
                        message: "Please input Switch on date",
                    },
                ]}
            >
                <DatePicker placeholder='Select date'
                // onChange={onFillingDateChange}
                />
            </Form.Item>

            <Form.Item
                label="Switch on date - Left Ear /बायें कान की स्वीच ऑन की तारिख"
                name="leftEarSwitchOnDate"
                rules={[
                    {
                        required: false,
                        message: "Please input Switch on date",
                    },
                ]}
            >
                <DatePicker placeholder='Select date'
                // onChange={onFillingDateChange}
                />
            </Form.Item>

            <Form.Item
                label="Hearing Aid name & model number/ हियरिंग एड का नाम और मॉडल नंबर"
                name="hearingAidNameNumber"
                rules={[
                    {
                        required: false,
                        message: "Please input Hearing Aid name & model number",
                    },
                ]}
            >
                <Input placeholder="Your answer" />
            </Form.Item>

            <Form.Item
                label="When was the child fitted with the hearing aid/s - date /कृपया हमें हियरिंग ऐड लगाएजाने की तारीख बताएं"
                name="hearingAidDate"
                rules={[
                    {
                        required: false,
                        message: "Please input Hearing Aid Date",
                    },
                ]}
            >
                <DatePicker placeholder='Select date'
                // onChange={onFillingDateChange} 
                />
            </Form.Item>

            <Form.Item>
                <div className='prev-next-btn'>
                    <Button onClick={() => gotoStep(current - 1)}>Prev</Button>
                    <Button onClick={() => gotoStep(current + 1)}>Next</Button>
                </div>
            </Form.Item>
        </>
    )
}

