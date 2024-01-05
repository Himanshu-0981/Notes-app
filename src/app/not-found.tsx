'use client'

import { useRouter } from 'next/navigation';

import Button from "@/components/Button";

export default function NotFound() {
    const navigate = useRouter();
    return (
        <>
            <main className='flex items-center justify-center flex-col mt-40 gap-5'>
                <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
                <Button title="Go Back" handleClick={() => navigate.back()} className="" />
            </main>
        </>
    )
}
