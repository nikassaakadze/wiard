import React from 'react'
import { Form, Input, Button, Select, DatePicker, Radio } from 'antd';
import * as ProductActions from '../../redux/actions/GetProductsAction'
import { useDispatch, useSelector } from 'react-redux'

function UserForm({stepControl, setStepControl}) {

  const [formData, setFormdata] = React.useState({name: '', lastname: '', email: ''})
  const {name, lastname, email, age} = formData

  const chnageControl = (e) => {
    setFormdata({...formData, [e.target.name]: e.target.value})
  }

  const dispatch = useDispatch()

  const onFinish = () => {
    setStepControl(stepControl + 1)
    dispatch(ProductActions.getAllproduct())
  };

  const onFinishFailed = (errorInfo) => {
  };

  const {Option} = Select

  const [value, setValue] = React.useState(1);

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
      <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <div className="form-fileds-line">
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your name!',
            },
          ]}
        >
          <Input placeholder="Your name" value={name} name="name" onChange={chnageControl} />
        </Form.Item>
        <Form.Item
          name="lastname"
          rules={[
            {
              required: true,
              message: 'Please input your lastname!',
            },
          ]}
        >
          <Input placeholder="Your lastname" value={lastname} name="lastname" onChange={chnageControl} />
        </Form.Item>
      </div>
      <div className="form-fileds-line">
        <Form.Item
          name="zip"
          rules={[
            {
              required: true,
              message: 'Please choose Zip code!',
            },
          ]}
        >
        <Select defaultValue="Choose Zip code" onChange={() => {}}>
          <Option value="0108	">0108</Option>
          <Option value="0105	">0105</Option>
          <Option value="0179"> 0179 </Option>
          <Option value="0162">0162</Option>
        </Select>
        </Form.Item>
        <Form.Item
          name="age"
          rules={[
            {
              required: true,
              message: 'Please input your age!',
            },
          ]}
        >
          <DatePicker  />
        </Form.Item>
      </div>
      <div className="form-fileds-line">
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input email!',
            },
          ]}
        >
          <Input placeholder="Your Email" value={email} name="email" onChange={chnageControl} />
        </Form.Item>
        <Form.Item
          name="country"
          rules={[
            {
              required: true,
              message: 'Please choose Countrie',
            },
          ]}
        >
        <Select defaultValue="Select Country" onChange={() => {}}>
          <Option value="Georgia">Georgia</Option>
          <Option value="usa">United States</Option>
          <Option value="ukg"> United Kingdom </Option>
          <Option value="china">China</Option>
        </Select>
        </Form.Item>
      </div>
      <div className="form-fileds-line">
        <span className="gender-choose">Choose Your Gender</span>
        <Form.Item
          name="gender"
          rules={[
            {
              required: true,
              message: 'Please choose gender',
            },
          ]}
        >
        <Radio.Group onChange={onChange} value={value}>
          <Radio value={1}>Female</Radio>
          <Radio value={2}>Male</Radio>
        </Radio.Group>
        </Form.Item>
      </div>
      <div className="form-fileds-line">
      <Form.Item className="form-btn">
          <Button type="primary" htmlType="submit" >
            Continue Shopping
          </Button>
        </Form.Item>
      </div>
    </Form>
  )
}

export default UserForm