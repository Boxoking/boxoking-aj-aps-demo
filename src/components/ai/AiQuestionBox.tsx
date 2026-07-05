import React, { useState } from 'react';
import { Input, Button, Space, Tag } from 'antd';
import { SendOutlined } from '@ant-design/icons';

interface AiQuestionBoxProps {
  onAsk: (question: string) => void;
}

const RECOMMENDED_QUESTIONS = [
  '什么是最大分组？',
  '为什么要提前制浆？',
  '为什么不能排某品相？',
  '车间反馈怎么处理？',
  '哪些特通订单没排满？',
];

const AiQuestionBox: React.FC<AiQuestionBoxProps> = ({ onAsk }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    const trimmed = inputValue.trim();
    if (!trimmed) return;
    onAsk(trimmed);
    setInputValue('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const handleTagClick = (text: string) => {
    onAsk(text);
  };

  return (
    <div
      style={{
        border: '1px solid #e8e8e8',
        borderRadius: 8,
        padding: '20px 24px',
        background: '#fff',
      }}
    >
      <Space.Compact style={{ width: '100%' }}>
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="可以问我：为什么某个班次要提前制浆？某个品相为什么不能排入当前机台？最大分组是什么意思？"
          size="large"
        />
        <Button
          type="primary"
          size="large"
          icon={<SendOutlined />}
          onClick={handleSend}
          style={{
            background: '#52c41a',
            borderColor: '#52c41a',
          }}
        />
      </Space.Compact>

      <div style={{ marginTop: 16 }}>
        <Space size={[8, 8]} wrap>
          {RECOMMENDED_QUESTIONS.map((q) => (
            <Tag
              key={q}
              style={{ cursor: 'pointer' }}
              onClick={() => handleTagClick(q)}
            >
              {q}
            </Tag>
          ))}
        </Space>
      </div>
    </div>
  );
};

export default AiQuestionBox;
