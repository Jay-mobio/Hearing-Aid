import { Form, Input, Space, Radio, Typography, Button } from 'antd';
import './assessmentForm.css';

const { Text } = Typography;
const { TextArea } = Input;

export const Step8 = ({
  gotoStep,
  current,
  formLoading,
  submit
}) => (
  <>
    <Form.Item>
      <Text>Educational History/शैक्षिक इतिहास</Text><br />
      <Text>Please answer in detail/कृपया विस्तार से उत्तर दें</Text>
    </Form.Item>

    <Form.Item
      label="Does the child attend any school?/क्या बच्चा स्कूल जाता है?"
      name="childAttendSchool"
      rules={[
        {
          required: true,
          message: "Please select your details",
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
      label="If yes, please give the details name of the school and standard the child is in/यदि हाँ, तो कृपया उस स्कूल का नाम और कक्षा का विवरण दें जिसमें बच्चा है"
      name="childSchoolDetails"
      rules={[
        {
          required: false,
          message: "Please input your details",
        },
      ]}
    >
      <Input placeholder="Your answer" />
    </Form.Item>

    <Form.Item
      label="Is the school cooperative with you, with regards to the needs of your child, preferential seating, using the mini mic or fm system or any other additional support that may be needed?/क्या स्कूल आपके बच्चे की जरूरतों, अधिमान्य बैठने, मिनी माइक या एफएम सिस्टम का उपयोग करने या किसी अन्य अतिरिक्त सहायता की आवश्यकता के संबंध में आपके साथ सहयोग करता है?"
      name="childSchoolCooperative"
      rules={[
        {
          required: false,
          message: "Please input your details",
        },
      ]}
    >
      <Input placeholder="Your answer" />
    </Form.Item>

    <Form.Item
      label="Please provide details of any previous therapy or intervention the child may have had, the duration of the therapy and the impact/कृपया बच्चे को दी गई पिछली थेरेपी या बच्चे के हस्तक्षेप के बारे में बताएं। दी गई थेरेपी की अवधि और उसके प्रभाव का भी विवरण दें।"
      name="childTakenTherapyDetails"
      rules={[
        {
          required: false,
          message: "Please input your details",
        },
      ]}
    >
      <TextArea rows={4} placeholder="Your answer" maxLength={6} />
    </Form.Item>

    <Form.Item
      label="Describe in your own words the main concern for which you require our services/अपने शब्दों में उस मुख्य चिंता का वर्णन करें जिसके लिए आपको हमारी सेवाओं की आवश्यकता है"
      name="describeConcernForService"
      rules={[
        {
          required: true,
          message: "Please input your details",
        },
      ]}
    >
      <TextArea rows={4} placeholder="Your answer" maxLength={6} />
    </Form.Item>

    <Form.Item
      label="In your own words please state your expectations from our work together. This will help us understand your expectations and work towards meeting the same/कृपया अपने शब्दों हमें ये बताएं की हमसे आपकी क्या अपेक्षा है । इससे हमें आपकी अपेक्षाओं को समझने और उन्हें पूरा करने में मदद मिलेगी"
      name="parentsExpectations"
      rules={[
        {
          required: true,
          message: "Please input your details",
        },
      ]}
    >
      <TextArea rows={4} placeholder="Your answer" maxLength={6} />
    </Form.Item>

    <Form.Item
      label="Is there any other information you would like to provide me which will help us in our work together?/क्या कोई अन्य जानकारी है, जो आप मुझे बताना चाहेंगे जिसे हमें एक साथ काम करने में मदद मिलेगी?"
      name="anyOtherInfoNeed"
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
      label="The name of the person filling this form and the relationship with the child/इस फॉर्म को भरने वाले व्यक्ति का नाम और बच्चे के साथ उसका संबंध"
      name="formFillerName"
      rules={[
        {
          required: true,
          message: "Please input your details",
        },
      ]}
    >
      <Input placeholder="Your answer" />
    </Form.Item>

    <Form.Item>
      <Text>
        Thank you for filling in the details. This information is essential for our records./विवरण भरने के लिए धन्यवाद। यह जानकारी हमारे रिकॉर्ड के लिए आवश्यक है
      </Text><br />
      <a href='www.islsl.in' target='_blank'>www.islsl.in</a>
    </Form.Item>

    <Form.Item>
      <div className='prev-next-btn'>
        <Button onClick={() => gotoStep(current - 1)}>Prev</Button>
        <Button
          type="primary"
          loading={formLoading}
          onClick={() => {
            submit().then(result => {
              if (result === 'ok') {
                gotoStep(current + 1);
              }
            });
          }}
        >
          Submit
        </Button>
      </div>
    </Form.Item>
  </>
);

