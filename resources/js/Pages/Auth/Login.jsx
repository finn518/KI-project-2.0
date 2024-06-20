import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import person from "../../assets/person.png";
import lock from "../../assets/lock.png";

export default function Login({ status, canResetPassword }) {
    console.log(status);
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route("login"));
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            <div className="flex flex-col gap-8 items-center justify-center h-screen">
                <h2 className="underline underline-offset-[20px] text-4xl font-bold mb-2">
                    Sign In
                </h2>
                <p className="text-slate-600">
                    Welcome to website! Please sign in first
                </p>

                {status && (
                    <div className="mb-4 font-medium text-sm text-green-600">
                        {status}
                    </div>
                )}

                <form onSubmit={submit} className="flex flex-col gap-4">
                    <div className="relative flex flex-row items-center border-b-2 mt-10">
                        <input
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            placeholder="Email"
                            className="pl-10 pr-3 py-2 w-96 focus:outline-none border-none bg-transparent"
                            autoComplete="username"
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        <img
                            src={person}
                            alt="person"
                            className="size-6 absolute ml-2"
                        />
                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="relative flex flex-row items-center border-b-2">
                        <input
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            placeholder="Password"
                            className="pl-10 pr-3 py-2 w-96 focus:outline-none border-none"
                            autoComplete="current-password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />
                        <img
                            src={lock}
                            alt="lock"
                            className="size-6 absolute ml-2"
                        />
                        <InputError
                            message={errors.password}
                            className="mt-2"
                        />
                    </div>

                    <div className="block mt-4">
                        <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) =>
                                    setData("remember", e.target.checked)
                                }
                            />
                            <span className="ms-2 text-sm text-gray-600">
                                Remember me
                            </span>
                        </label>
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        {canResetPassword && (
                            <Link
                                href={route("password.request")}
                                className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Forgot your password?
                            </Link>
                        )}

                        <PrimaryButton className="ms-4" disabled={processing}>
                            Sign In
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
