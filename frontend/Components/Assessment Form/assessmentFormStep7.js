import { Form, Input, Space, Radio, Typography, Button } from 'antd';
import './assessmentForm.css';

const { Text } = Typography;
const { TextArea } = Input;

export const Step7 = ({ gotoStep, current }) => {
    return (
        <>
            <Form.Item>
                <Text>Developmental History/विकासात्मक इतिहास</Text><br />
                <Text>Please fill in detail/कृपया विस्तार से भरें</Text>
            </Form.Item>

            <Form.Item
                label="Does your child have any other medical conditions besides hearing loss? If yes, kindly elaborate/क्या आपके बच्चे को हियरिंग लॉस के अलावा कोई अन्य चिकित्सा स्थिति है? यदि हाँ, तो कृपया विस्तृत करें"
                name="childOtherProblem"
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
                label="At what age did your child crawl?/आपके बच्चे ने रेंगना कब शुरू किया?"
                name="ageOfChildCrawl"
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
                label="At what age did your child sit up on their own?/आपके बच्चे ने अपने आप उठना कब शुरू किया ?"
                name="ageOfChildSit"
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
                label="At what age did your child stand and walk on their own?/आपका बच्चा किस उम्र से खड़े होने लगा और अपने आप चलने लगा?"
                name="ageOfChildStandAndWalk"
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
                label="At what age did your child start eating solid foods?/आपके बच्चे ने किस उम्र से ठोस आहार खाना शुरू किया?"
                name="childEatingFood"
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
                label="Please describe about the child's feeding habits and the foods they eat/कृपया बच्चे के खाने की आदतों और उसके द्वारा खाए जाने वाले खाद्य पदार्थों के बारे में बताएं"
                name="childFeedingHabitAndFood"
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
                label="Is there anything else you would like to share about the consistency of the foods the child eats or does not eat? Is that a concern for you?/क्या बच्चे के खाने से संबंधित कोई ऐसी जानकारी है जो आपके लिए चिंता का विषय है ?"
                name="childEatDetails"
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
                label="At what age did your child start feeding eating on their own?/आपके बच्चे ने किस उम्र से अपने आप खाना शुरू किया?"
                name="childFeedingEatingOwn"
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
                label="Does your child have any problems with eating, drinking or chewing food? If yes please elaborate/क्या आपके बच्चे को खाने, पीने या खाना चबाने में कोई समस्या है? यदि हाँ तो विस्तृत करें"
                name="childProblemWithFood"
                rules={[
                    {
                        required: false,
                        message: "This is a required question",
                    },
                ]}
            >
                <TextArea rows={4} placeholder="Your answer" />
            </Form.Item>

            <Form.Item
                label="At what age did the child start dressing themself?/बच्चे ने किस उम्र से अपने आप तैयार होना शुरू किया?"
                name="childDressingThemself"
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
                label="Does your child have bladder and bowel control?/क्या आपके बच्चे का मूत्राशय और आंत्र नियंत्रण है?"
                name="childControlOnBladderBowel"
                rules={[
                    {
                        required: false,
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
                label="Your child's physical development has been/आपके बच्चे का शारीरिक विकास किस प्रकार था?"
                name="childPhysicalDevelopment"
                rules={[
                    {
                        required: true,
                        message: "This is a required question",
                    },
                ]}
            >
                <Radio.Group onChange={() => console.log("hearing loss Radio")} value="average">
                    <Space direction="vertical">
                        <Radio value="average">Average/औसत</Radio>
                        <Radio value="slow">Slow/धीमा</Radio>
                        <Radio value="aboveAverage">Above average/औसत से ऊपर</Radio>
                    </Space>
                </Radio.Group>
            </Form.Item>

            <Form.Item
                label="Your child's coordination is/आपके बच्चे का समन्वय है"
                name="childCoordination"
                rules={[
                    {
                        required: true,
                        message: "This is a required question",
                    },
                ]}
            >
                <Radio.Group onChange={() => console.log("hearing loss Radio")} value="good">
                    <Space direction="vertical">
                        <Radio value="good">Good/अच्छा</Radio>
                        <Radio value="average">Average/औसत</Radio>
                        <Radio value="clumsy">Clumsy/फूहड़</Radio>
                    </Space>
                </Radio.Group>
            </Form.Item>

            <Form.Item
                label="Does your child have any additional issues besides hearing loss? If yes, kindly elaborate/क्या आपके बच्चे को हियरिंग लॉस के अलावा कोई अतिरिक्त समस्या है? यदि हाँ, तो कृपया विस्तृत करें"
                name="childIssueBesidesHearingLoss"
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
                label="Developmental Milestones/विकास के मिल के पत्थर"
                name="developmentMilestones"
                rules={[
                    {
                        required: true,
                        message: "This is a required question",
                    },
                ]}
            >
                <Radio.Group onChange={() => console.log("hearing loss Radio")} value="normal">
                    <Space direction="vertical">
                        <Radio value="normal">Normal/सामान्य</Radio>
                        <Radio value="delayed">Delayed/देर से</Radio>
                    </Space>
                </Radio.Group>
            </Form.Item>

            <Form.Item
                label="Have you done an ophthalmologic evaluation (Eye Check up)?/क्या अपने बच्चे की आखों की जांच करवाई है ?"
                name="eyeCheckup"
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
                label="Has your child been evaluated by an occupational therapist for their motor milestones?/क्या आपके बच्चे की प्रगति की जांच मोटर मील के पत्थर अनुसार ऑक्यूपेशनल थेरेपिस्ट द्वारा की गई है ?"
                name="checkupByOccupationalTherapist"
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
                label="Does the child go for any other therapies?/क्या आपका बच्चा किसी भी तरह की अन्य थेरेपी के लिए जाता है?"
                name="childOtherTherapies"
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
                name="childOtherTherapiesDetails"
                rules={[
                    {
                        required: false,
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
} 