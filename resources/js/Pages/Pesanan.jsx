import React from "react";
import axios from 'axios';

const Pesanan = (props) => {
    const handleCompleteOrder = (orderId) => {
        // Implement the logic to complete the order
        axios.post(`/orders/${orderId}/complete`, {
            headers: {
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        })
        .then(response => {
            console.log(response.data);
            // Refresh or update the orders list to reflect the changes
            window.location.reload(); // Or update state to remove completed order
        })
        .catch(error => {
            console.error(error);
        });
    };

    return (
        <div>
            <h1 className="text-4xl text-center my-6">Order Pesanan</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Atas Nama</th>
                            <th>Pesanan</th>
                            <th>Jumlah</th>
                            <th>Total</th>
                            <th>Keterangan Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.orders.map((order) => (
                            <tr key={order.id}>
                                <th>{order.id}</th>
                                <td>{order.atas_nama}</td>
                                <td>
                                    <ul>
                                        {order.order_items.map((item) => (
                                            <li key={item.id}>{item.item}</li>
                                        ))}
                                    </ul>
                                </td>
                                <td>
                                    <ul>
                                        {order.order_items.map((item) => (
                                            <li key={item.id}>{item.jumlah}</li>
                                        ))}
                                    </ul>
                                </td>
                                <td>{order.total}</td>
                                <td>
                                    <button 
                                        className="bg-green-500 text-white px-4 py-2 rounded"
                                        onClick={() => handleCompleteOrder(order.id)}
                                    >
                                        Selesai
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Pesanan;
