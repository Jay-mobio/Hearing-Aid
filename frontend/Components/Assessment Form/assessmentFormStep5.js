"use client"
import { Form, Input, Radio, Space, Typography, Button } from 'antd';
import './assessmentForm.css';
import { useState } from 'react';

const { Text } = Typography;

export const Step5 = ({ gotoStep, current }) => {
    const [isOtherSelected, setOtherSelected] = useState(false);
    const [otherValue, setOtherValue] = useState('');

    const handleRadioChange = (e) => {
        const value = e.target.value;
        setOtherSelected(value === 'other');
    };
    return (
        <>
            <Form.Item>
                <Text>Prenatal History/जन्मपूर्व इतिहास</Text><br />
                <Text>Please describe in details/कृपया विस्तार में वर्णन करें</Text>
            </Form.Item>

            <Form.Item
                label="Mother's health during pregnancy?/गर्भावस्था के दौरान माँ का स्वास्थ्य?"
                name="motherHealthDetails"
                rules={[
                    {
                        required: true,
                        message: "Please input Mother's Health Details",
                    },
                ]}
            >
                <Input placeholder="Your answer" />
            </Form.Item>

            <Form.Item
                label="Any illness during pregnancy and medication taken?/यदि गर्भावस्था के दौरान किसी भी प्रकार की बीमारी हुई हो और दवाइयां ली हो तो बताएं"
                name="mothersMedication"
                rules={[
                    {
                        required: true,
                        message: "Please input your details",
                    },
                ]}
            >
                <Input placeholder="Your answer" />
            </Form.Item>

            <Form.Item
                label="Any history of miscarriage?/गर्भपात का कोई इतिहास?"
                name="miscarriage"
                rules={[
                    {
                        required: true,
                        message: "Please input your details",
                    },
                ]}
            >
                <Radio.Group onChange={() => console.log("hearing loss Radio")} value="yes">
                    <Space direction="vertical">
                        <Radio value="yes">Yes/हाँ</Radio>
                        <Radio value="no">No/नहीं</Radio>
                    </Space>
                </Radio.Group>
            </Form.Item>

            <Form.Item
                label="Delivery/प्रसव"
                name="delivery"
                rules={[
                    {
                        required: true,
                        message: "Please input Delivery",
                    },
                ]}
            >
                <Radio.Group onChange={handleRadioChange} value={isOtherSelected ? otherValue : undefined}>
                    <Space direction="vertical">
                        <Radio value="fullTerm">Full term/पूरा कार्यकाल</Radio>
                        <Radio value="preTerm">Pre-term/Premature/प्री-टर्म / प्रीमेच्योर</Radio>
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
                label="Duration of Labour/श्रम की अवधि"
                name="durationOfLabour"
                rules={[
                    {
                        required: false,
                        message: "Please input Duration of Labour",
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
}

