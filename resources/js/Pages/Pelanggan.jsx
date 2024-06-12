import React from 'react'
import Navbar from '../components/Navbar';
import Cards from '../components/Cards';

const Pelanggan = () => {
  return (
		<section className="relative">
			<Navbar content={["Makanan", "Minuman", "Pesanan"]} />
			<Cards />
		</section>
	);
}

export default Pelanggan