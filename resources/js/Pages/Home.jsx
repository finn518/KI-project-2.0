import React, { useState } from "react";
import Cards from "@/Pages/Cards";
import { Link, useForm } from "@inertiajs/react";

const Home = (props) => {
    return (
        <div className="flex flex-col pb-[2%]">
            <Cards data={props.menu} />
            <div className="flex flex-row items-center justify-start mt-8 space-x-4">
            <input type="text" placeholder="Atas Nama" className="input input-bordered input-info w-full max-w-xs ml-24" />
            <button
                type="submit"
                className="bg-purple-500 text-slate-50 p-4 w-full max-w-xs self-center rounded-lg"
            >
                Pesan
            </button>
            </div>
        </div>
    );
};

export default Home;
