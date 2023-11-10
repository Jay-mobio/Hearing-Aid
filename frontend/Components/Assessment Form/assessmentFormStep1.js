import { Form, DatePicker, Button, Input } from 'antd';
import './assessmentForm.css';
import { isEmailValid } from '@/lib/utils';

export const Step1 = ({ gotoStep, current }) => (
    <>
        <Form.Item>
            <div>
                <div className='form-heading'>
                    Auditory Verbal Therapy for Children/बच्चों के लिए  ऑडिटरी वर्बल थेरेपी
                </div>
                <p>
                    The details provided by you are for our records only and will remain confidential with us./आपके द्वारा प्रदान किया गया विवरण केवल हमारे रिकॉर्ड के लिए है और हमारे पास गुप्त रहेगा
                </p>
                <p className='form-rule'>
                    * Indicates required question
                </p>
            </div>
        </Form.Item>

        <Form.Item
            label="Email"
            name="email"
            rules={[
                {
                    required: true,
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
            label="Date of filling the form/ फॉर्म भरने की तिथि"
            name="fillingDate"
            rules={[
                {
                    required: true,
                    message: 'This is a required question',
                },
            ]}
        >
            <DatePicker className='date-field' placeholder='Select date' />
        </Form.Item>

        <Form.Item className='next-btn'>
            <Button onClick={() => gotoStep(current + 1)}>Next</Button>
        </Form.Item>
    </>
);

