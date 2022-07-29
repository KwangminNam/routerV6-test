import React from 'react';
import { Link } from 'react-router-dom';

const RouterPropTest = () => {

  const menu = {
    name:"간짜장",
    price:5000
  }

  return (
    <div>
      Router Prop Test
      <Link to={{
        pathname: "/routerpropresult",
      }}>데이터 날리기</Link>
    </div>
  );
};

export default RouterPropTest;