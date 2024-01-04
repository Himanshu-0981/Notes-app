"use client"

import React, { useState } from 'react'

import { IoIosArrowForward } from 'react-icons/io'

import Input from "@/components/Input";
import Button from '@/components/Button';


interface FormState {
    email: string
    password: string
}

const initialFormState: FormState = {
    email: "",
    password: ""
}

export default function Login() {

    const [form, setForm] = useState<FormState>(initialFormState)


    const changeFunction = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleLogin = () => {
        console.log(form)
    }

    return (
        <>
            <main className="flex justify-center mt-10">
                <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                    <h1 className="text-3xl font-bold">Signup</h1>
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        name="email"
                        value={form.email}
                        handleChange={changeFunction}
                    />

                    <Input
                        type="password"
                        placeholder="Enter your password"
                        name="password"
                        value={form.password}
                        handleChange={changeFunction}
                    />

                    <Button
                        title="Signup"
                        icon={<IoIosArrowForward />}
                        className=""
                        handleClick={handleLogin}
                    />
                </form>
            </main>

        </>
    )
}