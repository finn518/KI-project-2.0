import React, { useEffect, useState } from "react";
import Cards from "@/Pages/Cards";
import Card from './Card';
import { useForm } from "@inertiajs/react";

const Home = (props) => {
    const { data, setData, post } = useForm({
        atas_nama: "",
        items: props.menu.map((item) => ({ item: item.nama, jumlah: 0 })),
    });

    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    const [alert, setAlert] = useState(null);

    useEffect(() => {
        if (props.flash?.success) {
            setAlert(props.flash.success);
            setTimeout(() => {
                setAlert(null);
            }, 3000); // Menghilangkan alert setelah 3 detik
        }
    }, [props.flash]);

    useEffect(() => {
        const hasValidItem = data.items.some((item) => item.jumlah > 0);
        setIsSubmitDisabled(!hasValidItem);
    }, [data.items]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isSubmitDisabled) {
            const validItems = data.items.filter((item) => item.jumlah > 0);
            post(route("order.store"), {
                data: {
                    atas_nama: data.atas_nama,
                    items: validItems,
                },
            });
        }
    };

    const handleItemChange = (index, newValue) => {
        const newItems = [...data.items];
        newItems[index].jumlah = newValue;
        setData("items", newItems);
    };

    return (
        <div className="flex flex-col pb-[2%]">
            {alert && (
                <div
                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
                    role="alert"
                >
                    <span className="block sm:inline">{alert}</span>
                </div>
            )}
            <Cards data={props.menu} onItemChange={handleItemChange} CardComponent={Card} isAdmin={false}/>
            <form
                onSubmit={handleSubmit}
                className="flex flex-row items-center justify-start mt-8 space-x-4"
            >
                <input
                    type="text"
                    placeholder="Atas Nama"
                    className="input input-bordered input-info w-full max-w-xs ml-24"
                    value={data.atas_nama}
                    onChange={(e) => setData("atas_nama", e.target.value)}
                />
                <button
                    type="submit"
                    className="bg-purple-500 text-slate-50 p-4 w-full max-w-xs self-center rounded-lg"
                    disabled={isSubmitDisabled}
                >
                    Pesan
                </button>
            </form>
        </div>
    );
};

export default Home;
