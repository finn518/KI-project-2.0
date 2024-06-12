import React, { useEffect, useState } from "react";
import Card from "./Card";

const Cards = ({ data }) => {
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        setCardsData(data);
    }, [data]);

    return (
        <div className="grid grid-cols-4 gap-y-12 place-items-center p-12">
            {cardsData.map((item, index) => (
                <Card
                    key={index}
                    foto={item.gambar}
                    nama={item.nama}
                    harga={item.harga}
                    jumlah={item.jumlah}
                    index={index}
                />
            ))}
        </div>
    );
};

export default Cards;
