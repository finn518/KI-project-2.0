import React from "react";
import Cards from "@/Pages/Cards";
import { useForm } from "@inertiajs/react";

const Home = (props) => {
    const { data, setData, post } = useForm({
        atas_nama: '',
        items: props.menu.map(item => ({ item: item.nama, jumlah: 0 })),
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('order.store'), {
            data: {
                atas_nama: data.atas_nama,
                items: data.items.filter(item => item.jumlah > 0) // Only submit items with jumlah > 0
            }
        }); // Post to the order store route
    };

    const handleItemChange = (index, value) => {
        const newItems = [...data.items];
        newItems[index] = value;
        setData('items', newItems);
    };

    return (
        <div className="flex flex-col pb-[2%]">
            <Cards data={props.menu} onItemChange={handleItemChange} />
            <form onSubmit={handleSubmit} className="flex flex-row items-center justify-start mt-8 space-x-4">
                <input 
                    type="text"
                    placeholder="Atas Nama"
                    className="input input-bordered input-info w-full max-w-xs ml-24"
                    value={data.atas_nama}
                    onChange={(e) => setData('atas_nama', e.target.value)} 
                />
                <button
                    type="submit"
                    className="bg-purple-500 text-slate-50 p-4 w-full max-w-xs self-center rounded-lg"
                >
                    Pesan
                </button>
            </form>
        </div>
    );
};

export default Home;
