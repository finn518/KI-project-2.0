import React, { useEffect, useState } from "react";
import Cards from "@/Pages/Cards";
import Card from "./Card";
import { useForm } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import Guest from "@/Layouts/GuestLayout";
import Navbar from "./Navbar";

const Home = ({ auth, menu, flash }) => {
    useEffect(() => {
        document.title = "Pesan apa?";
    }, []);

    const { data, setData, post } = useForm({
        atas_nama: "",
        items: menu.map((item) => ({ item: item.nama, jumlah: 0 })),
    });

    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    const [alert, setAlert] = useState(null);

    useEffect(() => {
        if (flash?.success) {
            setAlert(flash.success);
            setTimeout(() => {
                setAlert(null);
            }, 3000);
        }
    }, [flash]);

    const resetForm = () => {
        setData({
            atas_nama: "",
            items: menu.map((item) => ({ item: item.nama, jumlah: 0 })),
        });
    };

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
            resetForm();
        }
    };

    const handleItemChange = (index, newValue) => {
        const newItems = [...data.items];
        newItems[index].jumlah = newValue;
        setData("items", newItems);
    };

    return (
        <>
            <Navbar />
            <div className="flex flex-col pb-[2%]">
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
                {alert && (
                    <div
                        className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded fixed top-4 left-1/2 transform -translate-x-1/2 z-50"
                        role="alert"
                    >
                        <span className="block sm:inline">{alert}</span>
                    </div>
                )}
                <Cards
                    data={menu}
                    onItemChange={handleItemChange}
                    CardComponent={Card}
                    isAdmin={false}
                />
            </div>
        </>
    );
};

export default Home;
