import React from 'react'
import Navbar from '../Pages/Navbar'
import Cards from '../Pages/Cards'
import InputForm from "./InputForm";

const Admin = (props) => {
    return (
        <section className="relative">
            <Navbar content={["Makanan", "Minuman"]} />
            <InputForm />
            <Cards data={props.menu} />
        </section>
    );
};

export default Admin