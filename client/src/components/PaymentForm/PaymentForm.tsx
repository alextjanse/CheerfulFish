import React from 'react';
import { Button, Form, Input, Modal, Tooltip } from 'antd';
import CurrencyInput from './CurrencyInput';

interface PaymentFormState {
  amount: number;
  visible: boolean;
  disabled: boolean;
}

class PaymentForm extends React.Component<{}, PaymentFormState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      visible: false,
      amount: 0,
      disabled: true,
    };
  }

  closeModal = () => {
    this.setState({ visible: false });
  }

  onConfirm = async () => {
    const { amount } = this.state;

    const body = { userId: 1, actionId: 2, amount };

    // TODO: fix the fetch with credentials
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/actions/donation`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .catch((error) => console.error(error.message));

    this.setState({ visible: false });
  }

  onCancel = () => {
    this.setState({ visible: false });
  }

  onAmountChange = (value: number) => {
    const disabled = !value || value === 0;

    this.setState({ amount: value, disabled });
  }

  onFinish = () => {
    this.setState({ visible: true });
  }

  onFinishFailed = () => {
    console.error('Something went wrong with submitting the form');
  }

  render() {
    const { amount, visible, disabled } = this.state;

    const formattedAmount = amount && `€ ${amount.toFixed(2)}`;

    return (
      <div>
        <Form
          name="payment"
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item>
            <CurrencyInput
              onChange={this.onAmountChange}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              disabled={disabled}
            >
              Doneer!
            </Button>
          </Form.Item>
        </Form>
        <Modal
          title="Bevestig donatie"
          visible={visible}
          onOk={this.onConfirm}
          onCancel={this.onCancel}
        >
          Door op 'OK' te klikken ga ik akkoord met de voorwaarden en zal ik {formattedAmount} overmaken naar het rekeningnummer van Sticky. Hier moet nog wel wat betere tekst komen.
        </Modal>
      </div>
    );
  }
}

export default PaymentForm;