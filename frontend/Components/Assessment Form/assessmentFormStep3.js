import { Form, Input, Radio, Typography, Button, Space } from 'antd';
import { tailLayout2 } from './assessmentFormUtils';
import './assessmentForm.css';

const { TextArea } = Input;
const { Text } = Typography;

export const Step3 = ({ gotoStep, current }) => (
    <>
        <Form.Item>
            <Text>Family History/परिवार के इतिहास</Text><br />
            <Text>Kindly provide details/कृपया विस्तार मे जानकारी प्रदान करें</Text>
        </Form.Item>

        <Form.Item
            label="Kindly list the persons living at home, their relation to the child, approximate ages and occupation/कृपया घर मे रहने वाले व्यक्तियों, बच्चे से उनके संबंध, अनुमानित आयु और व्यवसाय की सूची बनाएं"
            name="childHouseDetails"
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
            label="Is there any history of hearing loss in the family? /क्या परिवार मे किसी को हियरींग लॉस है?"
            name="familyHearingLoss"
            rules={[
                {
                    required: true,
                    message: "This is a required question",
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
            label="If yes, please elaborate/यदि हाँ, तो कृपया विस्तृत करें"
            name="familyHearingLossDetails"
            rules={[
                {
                    required: false,
                    message: "This is a required question",
                },
            ]}
        >
            <TextArea rows={4} placeholder="Your answer" />
        </Form.Item>

        <Form.Item>
            <div className='prev-next-btn'>
                <Button onClick={() => gotoStep(current - 1)}>Prev</Button>
                <Button onClick={() => gotoStep(current + 1)}>Next</Button>
            </div>
        </Form.Item>
    </>
);
