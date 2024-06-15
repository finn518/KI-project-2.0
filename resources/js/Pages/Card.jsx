import React, { useState } from "react";

const Card = ({ foto, nama, harga, onItemChange, index, isAdmin }) => {
    const imageUrl = `/storage/images/${foto}`;

    const [value, setValue] = useState(0);

    const handleChange = (newValue) => {
        setValue(newValue);
        onItemChange(index, newValue);
    };

    const minus = () => {
        if (value > 0) {
            handleChange(value - 1);
        }
    };

    const plus = () => {
        handleChange(value + 1);
    };

    return (
        <div className="flex flex-col ring-2 ring-slate-400 rounded-2xl p-4 gap-2">
            <div className="flex">
                <h2 className="bg-[#FFD23F] py-1 px-4 rounded-md font-bold">
                    New
                </h2>
            </div>
            <img
                className="rounded-2xl size-64 aspect-auto"
                src={imageUrl}
                alt={nama}
            />
            <h2 className="text-2xl font-bold">{nama}</h2>
            <div className="flex justify-between items-center">
                <p className="text-lg font-bold text-[#5E1675]">RP {harga}</p>
                {!isAdmin && (
                    <div className="flex gap-1">
                        <button
                            className="bg-slate-400 px-2 size-8 text-slate-50 rounded-full"
                            onClick={minus}
                        >
                            -
                        </button>
                        <input
                            type="number"
                            className="w-8 text-center rounded-md bg-transparent"
                            value={value}
                            onChange={(e) =>
                                handleChange(parseInt(e.target.value) || 0)
                            }
                            min={0}
                        />
                        <button
                            className="bg-[#5E1675] px-2 size-8 text-slate-50 rounded-full text-center"
                            onClick={plus}
                        >
                            +
                        </button>
                    </div>
                )}
            </div>
            {isAdmin && (
                <div className="flex justify-center mt-2">
                    <button
                        className="bg-red-400 px-2 size-8 text-slate-50 rounded-full w-1/2"
                    >
                        Hapus
                    </button>
                </div>
            )}
        </div>
    );
};

export default Card;
