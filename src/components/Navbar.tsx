'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";

import Button from "./Button";

export default function Navbar() {
    const navigate = useRouter();
    return (
        <main className="flex items-center justify-between px-10 py-3 bg-black text-white text-sm">
            <section>NOTES APP</section>
            <section >
                <ul className="flex items-center gap-3 ">
                    <Link href={"/"}>Home</Link>
                    <Link href={"/notes"}>Notes</Link>
                    <Link href={"/"}>Contact</Link>
                </ul>
            </section>
            <section className="flex items-center gap-3">
                <Button title="Login" className="bg-white text-black " handleClick={() => navigate.push('/auth/login')} />
                <Button title="Signup" className="bg-white text-black " handleClick={() => navigate.push('/auth/signup')} />
            </section>
        </main>
    )
}