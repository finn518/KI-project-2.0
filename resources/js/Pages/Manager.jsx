import React from 'react';
import Pesanan from './Pesanan';

const Manager = () => {
    return (
        <Pesanan orders={orders} isManager={false} />
    );
};

export default Manager;
