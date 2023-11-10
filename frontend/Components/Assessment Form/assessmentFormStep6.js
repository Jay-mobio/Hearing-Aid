import { Form, Input, Space, Radio, Typography, Button } from 'antd';

const { TextArea } = Input;
const { Text } = Typography;

export const Step6 = ({ gotoStep, current }) => (
    <>
        <Form.Item>
            <Text>Post Natal History/जन्म के बाद का इतिहास</Text>
        </Form.Item>

        <Form.Item
            label="Birth weight of the child/जन्म के समय बच्चे का वजन"
            name="childBirthWeight"
            rules={[
                {
                    required: true,
                    message: "Please input Birth weight of the child",
                },
            ]}
        >
            <Input placeholder="Your answer" />
        </Form.Item>

        <Form.Item
            label="If baby was born premature kindly provide details of about the health of the child, any complications, any interventions and any other details that maybe relevant/यदि बच्चा समय से पहले पैदा हुआ था, तो कृपया बच्चे के स्वास्थ्य, किसी भी जटिलता, किसी भी हस्तक्षेप और कोई अन्य विवरण जो प्रासंगिक हो, इस बारे मे जानकारी दें"
            name="childHealthDetails"
            rules={[
                {
                    required: true,
                    message: "Please input Child's Health Details",
                },
            ]}
        >
            <TextArea rows={4} placeholder="Your answer" maxLength={6} />
        </Form.Item>

        <Form.Item
            label="Did the baby cry immediately at birth/क्या बच्चा जन्म के तुरंत बाद रोया"
            name="babyCryAtBirth"
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
                    <Radio value="maybe">Maybe/शायद</Radio>
                </Space>
            </Radio.Group>
        </Form.Item>

        <Form.Item
            label="Was the baby put in the incubator or under the UV Light?/क्या बच्चे को इनक्यूबेटर में या यूवी लाइट के नीचे रखा गया था?"
            name="babyInIncubatorOrUV"
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
            label="Did the baby need a blood transfusion at birth?/क्या जन्म के समय बच्चे को खून चढ़ाया गया था?"
            name="needBloodAtBirth"
            rules={[
                {
                    required: true,
                    message: "Please input Birth weight of the child",
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
            label="How long was the baby in hospital?/अस्पताल में बच्चा कब तक था?"
            name="babyInHospital"
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
            label="Did the baby need any other medical intervention and medication besides the standard medication and care? If yes please elaborate/क्या मानक दवा और देखभाल के अलावा बच्चे को किसी अन्य चिकित्सकीय हस्तक्षेप और दवा की आवश्यकता थी? यदि हाँ तो विस्तृत करें"
            name="babyNeedIntervention"
            rules={[
                {
                    required: false,
                    message: "Please input your details",
                },
            ]}
        >
            <TextArea rows={4} placeholder="Your answer" maxLength={6} />
        </Form.Item>

        <Form.Item>
            <div className='prev-next-btn'>
                <Button onClick={() => gotoStep(current - 1)}>Prev</Button>
                <Button onClick={() => gotoStep(current + 1)}>Next</Button>
            </div>
        </Form.Item>
    </>
);
