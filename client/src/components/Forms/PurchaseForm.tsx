import React from 'react';
import { Button, Form, InputNumber, Modal, Tooltip } from 'antd';
import ShopItem from '@models/Shop';

interface PurchaseFormProps {
  item: ShopItem
}

interface PurchaseFormState {
  amount: number;
  visible: boolean;
  disabled: boolean;
}

class PurchaseForm extends React.Component<PurchaseFormProps, PurchaseFormState> {
  constructor(props: PurchaseFormProps) {
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

    const body = { userId: 1, itemId: 2, amount };

    // TODO: fix the fetch with credentials
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/shop/purchase`,
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
    const { item } = this.props;
    const { amount, visible, disabled } = this.state;
    const { price, stock } = item;

    const formattedAmount = amount && `€ ${(amount * price).toFixed(2)}`;

    return (
      <div>
        <Form
          name="payment"
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item>
            <InputNumber
              min={1}
              max={stock}
              onChange={this.onAmountChange}
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              disabled={disabled}
            >
              Bestel!
            </Button>
          </Form.Item>
        </Form>
        <Modal
          title="Bevestig aankoop"
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

export default PurchaseForm;