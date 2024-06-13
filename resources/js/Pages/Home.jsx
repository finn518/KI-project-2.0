import React, { useState } from "react";
import Cards from "@/Pages/Cards";
import { Link, useForm } from "@inertiajs/react";

const Home = (props) => {
    return (
        <div className="flex flex-col pb-[2%]">
            <Cards data={props.menu} />
            <button
                type="submit"
                className="bg-purple-500 text-slate-50 p-8 w-1/2 self-center rounded-lg"
            >
                Pesan
            </button>
        </div>
    );
};

export default Home;
