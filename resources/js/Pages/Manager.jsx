import React, { useEffect } from "react";
import Navbar from "./Navbar";

const Manager = (props) => {
    useEffect(() => {
        document.title = "Manager";
    }, []);

    return (
        <>
            <Navbar content={["Tambah Admin"]} />
            <div className="mx-12 py-4">
                <h1 className="text-4xl py-4 px-3 font-bold ">Rekap Order</h1>
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
                                                <li key={item.id}>
                                                    {item.item}
                                                </li>
                                            ))}
                                        </ul>
                                    </td>
                                    <td>
                                        <ul>
                                            {order.order_items.map((item) => (
                                                <li key={item.id}>
                                                    {item.jumlah}
                                                </li>
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
        </>
    );
};

export default Manager;
