import mongoose from 'mongoose';

import {ENV_CONFIG } from '@/config/env_config';
export const dbConnect = async () => {
    try {
        const stablishConnection = await mongoose.connect(ENV_CONFIG.DB_URL);
        if(stablishConnection) return console.log("Database connected successfully");
    } catch (error:any) {
        if(error) return new Error("Failed to connect to database", error);
    }
}