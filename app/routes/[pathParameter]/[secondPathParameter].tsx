import React from 'react';
import { useParams } from 'react-router-dom';

const SecondPathParamsView: React.FC = () => {
  const { secondPathParameter } = useParams();
  return <h1>The second path parameter is {secondPathParameter}</h1>;
};

export const Component = SecondPathParamsView;
export default SecondPathParamsView;
