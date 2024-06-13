import React from "react";

const Pesanan = (props) => {
    const getMenuPrice = (menuId) => {
        const menu = props.menu.find((menuItem) => menuItem.id === menuId);
        return menu ? menu.harga : 0;
    };

    return (
        <div>
            <h1 className="text-4xl text-center my-6">Daftar Pesanan</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Atas Nama</th>
                            <th>Pesanan</th>
                            <th>Jumlah</th>
                            <th>Total Harga</th>
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
                                <td>
                                    <ul>
                                        {order.order_items.map((item) => (
                                            <li key={item.id}>
                                                {item.jumlah *
                                                    getMenuPrice(item)}
                                                {console.log(item)}
                                            </li>
                                        ))}
                                    </ul>
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
