import React, { useState } from "react";
import axios from "axios";

const InputForm = () => {
    const [nama, setNama] = useState("");
    const [harga, setHarga] = useState("");
    const [gambar, setGambar] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("nama", nama);
        formData.append("harga", harga);
        formData.append("gambar", gambar);

        try {
            const response = await axios.post("/admin", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            console.log(response.data);
            window.location.reload();
        } catch (error) {
            if (error.response) {
                // Tanggapan dari server dengan kode status yang tidak diharapkan
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                setError(error.response.data.message); // Misalnya, jika server mengirimkan pesan kesalahan
            } else if (error.request) {
                // Permintaan dikirimkan tetapi tidak ada tanggapan dari server
                console.log(error.request);
            } else {
                // Kesalahan lainnya saat menyiapkan atau mengirimkan permintaan
                console.error("Error", error.message);
            }
        }
    };

    return (
        <div className="p-8">
            <h1 className="text-2xl text-center font-semibold">Tambah Menu</h1>
            <form
                className="flex flex-row gap-4 justify-center items-center p-8"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
            >
                <input
                    type="text"
                    name="nama"
                    placeholder="Nama Menu"
                    value={nama}
                    onChange={(e) => setNama(e.target.value)}
                    className="input input-bordered w-full max-w-xs"
                />
                <input
                    type="number"
                    name="harga"
                    placeholder="Harga"
                    value={harga}
                    onChange={(e) => setHarga(e.target.value)}
                    className="input input-bordered w-full max-w-xs"
                />
                <input
                    type="file"
                    name="gambar"
                    onChange={(e) => setGambar(e.target.files[0])}
                    className="file-input file-input-bordered w-full max-w-xs"
                />
                <button
                    type="submit"
                    className="bg-purple-600 p-4 text-slate-50 rounded-md w-1/5"
                >
                    Tambah
                </button>
            </form>
            {error && <div className="text-red-500">{error}</div>}{" "}
            {/* Menampilkan pesan kesalahan jika ada */}
        </div>
    );
};

export default InputForm;
