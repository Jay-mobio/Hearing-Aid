import { Form, DatePicker, Button, Input } from 'antd';
import { onFillingDateChange } from './assessmentFormUtils';
import './assessmentForm.css';

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
                    message: 'Please input Email',
                },
            ]}
        >
            <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
            label="Date of filling the form/ फॉर्म भरने की तिथि"
            name="fillingDate"
            rules={[
                {
                    required: true,
                    message: 'Please input Date',
                },
            ]}
        >
            <DatePicker placeholder='Date'
            // onChange={onFillingDateChange} 
            />
        </Form.Item>

        <Form.Item className='next-btn'>
            <Button onClick={() => gotoStep(current + 1)}>Next</Button>
        </Form.Item>
    </>
);

