import { useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import person from "../../assets/person.png";
import lock from "../../assets/lock.png";

const Register = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        role: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route("register"));
    };

    return (
        <div className="flex flex-col gap-8 items-center justify-center h-screen">
            <Head title="Register" />
            <h2 className="underline underline-offset-[20px] text-4xl font-bold mb-2">
                Daftarkan Admin
            </h2>

            <form
                onSubmit={submit}
                className="flex flex-col gap-8 items-center w-full max-w-md"
            >
                <div className="relative flex flex-row items-center border-b-2 mt-10">
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        className="pl-10 pr-3 py-2 w-full focus:outline-none border-none bg-transparent"
                        required
                    />
                    <img
                        src={person}
                        alt="person"
                        className="size-6 absolute ml-2"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-xs mt-2">
                            {errors.name}
                        </p>
                    )}
                </div>

                <div className="relative flex flex-row items-center border-b-2">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        className="pl-10 pr-3 py-2 w-full focus:outline-none border-none bg-transparent"
                        required
                    />
                    <img
                        src={person}
                        alt="person"
                        className="size-6 absolute ml-2"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-xs mt-2">
                            {errors.email}
                        </p>
                    )}
                </div>

                <div className="relative flex flex-row items-center border-b-2">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={data.password}
                        onChange={(e) => setData("password", e.target.value)}
                        className="pl-10 pr-3 py-2 w-full focus:outline-none border-none bg-transparent"
                        required
                    />
                    <img
                        src={lock}
                        alt="lock"
                        className="size-6 absolute ml-2"
                    />
                    {errors.password && (
                        <p className="text-red-500 text-xs mt-2">
                            {errors.password}
                        </p>
                    )}
                </div>

                <div className="relative flex flex-row items-center border-b-2">
                    <input
                        type="password"
                        name="password_confirmation"
                        placeholder="Confirm Password"
                        value={data.password_confirmation}
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        className="pl-10 pr-3 py-2 w-full focus:outline-none border-none bg-transparent"
                        required
                    />
                    <img
                        src={lock}
                        alt="lock"
                        className="size-6 absolute ml-2"
                    />
                    {errors.password_confirmation && (
                        <p className="text-red-500 text-xs mt-2">
                            {errors.password_confirmation}
                        </p>
                    )}
                </div>

                <div className="relative flex flex-row items-center border-b-2 mt-4">
                    <select
                        name="role"
                        value={data.role}
                        onChange={(e) => setData("role", e.target.value)}
                        className="pl-10 pr-3 py-2 w-full focus:outline-none border-none bg-transparent"
                        required
                    >
                        <option value="" disabled>
                            Select Role
                        </option>
                        <option value="admin">Admin</option>
                        <option value="manager">Manager</option>
                    </select>
                    {errors.role && (
                        <p className="text-red-500 text-xs mt-2">
                            {errors.role}
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    className="bg-slate-500 font-semibold w-52 h-12 rounded-md text-white"
                    disabled={processing}
                >
                    Daftar
                </button>
            </form>
        </div>
    );
};

export default Register;
