import React, { useEffect, useState } from "react";
import Cards from "@/Pages/Cards";
import { useForm } from "@inertiajs/react";

const Home = (props) => {
    console.log(props);
    const { data, setData, post } = useForm({
        atas_nama: "",
        items: props.menu.map((item) => ({ item: item.nama, jumlah: 0 })),
    });

    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

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
            <Cards data={props.menu} onItemChange={handleItemChange} />
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
