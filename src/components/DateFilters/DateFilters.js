import React from 'react';
import { DatePicker, Space } from 'antd';
const { RangePicker } = DatePicker;
const App = () => (
  <Space direction="vertical" size={12}>
    <RangePicker style={{width: '90%', height: '120%'}}/>
  </Space>
);
export default App;