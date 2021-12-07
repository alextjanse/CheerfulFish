import React from 'react';
import { InputNumber, Tooltip } from 'antd';

interface CurrencyInputProps {
  onChange: (value: number) => void;
}

function CurrencyInput(props: CurrencyInputProps) {
  const { onChange } = props;

  return (
    <Tooltip
      trigger={['focus']}
      title={'Input a number'}
      placement="topLeft"
      overlayClassName="numeric-input"
    >
      <InputNumber
        formatter={(value) => `€ ${value}`}
        parser={(value) => Number.parseFloat(value.replace(/\€\s?|(,*)/g, ''))}
        precision={2}
        onChange={onChange}
        min={0}
      />
    </Tooltip>
  );
}

export default CurrencyInput;
