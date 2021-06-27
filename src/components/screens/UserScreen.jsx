import React from 'react'
import './UserScreen.css'
import 'antd/dist/antd.css'
import { Form, Input, Button, Select, DatePicker, Steps, message } from 'antd';
import UserForm from './UserForm'
import ProductsScreen from './ProductsScreen';
import CheckoutScreen from './CheckoutScreen'

function onChange(date, dateString) {
  console.log(date, dateString);
}

function UserScreen() {

  const [current, setCurrent] = React.useState(0);

  const { Step } = Steps;

  const steps = [
    {
      title: 'User information',
      content: <UserForm stepControl = {current} setStepControl = {setCurrent} />,
    },
    {
      title: 'Choose Product',
      content: <ProductsScreen stepControl = {current} setStepControl = {setCurrent} />,
    },
    {
      title: 'Your order',
      content: <CheckoutScreen />,
    }
];

  return (
    <div className="form-content">
      <div className="content-description">
        <h1>Place Order</h1>
      </div>
      <>
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {/* {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )} */}
      </div>
    </>

    </div>
  )
}

export default UserScreen
