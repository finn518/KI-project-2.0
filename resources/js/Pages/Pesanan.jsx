import React from "react";

const Pesanan = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Daftar Pesanan</h1>
            {props.orders.map((order) => (
                <div key={order.id}>
                    <h2>
                        Pesanan #{order.id} - Atas Nama: {order.atas_nama}
                    </h2>
                    <ul>
                        {order.order_items.map((item) => (
                            <li key={item.id}>
                                {item.item} - Quantity: {item.jumlah} - Atas
                                Nama: {item.atas_nama}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Pesanan;
