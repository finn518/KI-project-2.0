import React from "react";

const Manager = (props) => {
    return (
        <div>
            <div className="flex flex-row justify-between my-6 mx-6">
                <h1 className="text-4xl text-center ">Rekap Order</h1>
                <button className="bg-green-500 text-white rounded w-1/12">Tambah Admin</button>
            </div>
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
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Manager;
