"use client"

import React, { useState } from 'react'

import { IoIosArrowForward } from 'react-icons/io'

import Input from "@/components/Input";
import Button from '@/components/Button';
import axios from 'axios';
import { ENV_CONFIG } from '@/config/env_config';
import { useRouter } from 'next/navigation';

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

    const navigate = useRouter()

    const changeFunction = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleLogin = async (): Promise<void> => {
        try {
            const { data } = await axios.post(`${ENV_CONFIG.API_ENDPOINT}/user/login`, form)
            if (data.success) {
                setForm(initialFormState)
                navigate.push('/')
                console.log('login successfully')
            } else {
                console.log("Something went wrong", data.message)
            }
        } catch (error) {
            if (error) {
                const typedError = error as Error
                console.log(typedError.message)
            }
        }
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