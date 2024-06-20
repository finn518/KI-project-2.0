import React, { useEffect, useState } from "react";

const Cards = ({ data, onItemChange, CardComponent, isAdmin }) => {
    const [cardsData, setCardsData] = useState([]);

    useEffect(() => {
        setCardsData(data);
    }, [data]);

    return (
        <div className="grid grid-cols-4 gap-y-12 place-items-center p-12">
            {cardsData.map((item, index) => (
                <CardComponent
                    key={index}
                    foto={item.gambar}
                    nama={item.nama}
                    harga={item.harga}
                    index={index}
                    menuId={item.id}
                    onItemChange={onItemChange}
                    isAdmin={isAdmin}
                />
            ))}
        </div>
    );
};

export default Cards;
