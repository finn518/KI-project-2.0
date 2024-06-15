import React from 'react';
import Navbar from '../Pages/Navbar';
import Cards from './Cards';
import InputForm from "./InputForm";
import Card from './Card';

const Admin = (props) => {
    return (
        <section className="relative">
            <Navbar content={"Pesanan"} />
            <InputForm />
            <Cards data={props.menu} CardComponent={Card} isAdmin={true} />
        </section>
    );
};

export default Admin;
