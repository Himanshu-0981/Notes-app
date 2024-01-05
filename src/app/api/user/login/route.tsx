import UserModel from "@/models/users";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        const users = await UserModel.find({});
        if (users) {
            return NextResponse.json({
                data: users,
                success: true,
                status: 200,
                message: "users fetched successfully",
            })
        } else {
            return NextResponse.json({
                success: false,
                status: 404,
                message: "users not found",
            })
        }
    } catch (error) {
        if (error) {
            const typedError = error as Error;
            return NextResponse.json({
                error: typedError.message,
                success: false,
                status: 400,
                message: "something went wrong",
            })
        }
    }
}

export async function POST(req: NextRequest) {
    const { email, password } = await req.json();
    try {
        if (email && password) {
            const user = await UserModel.findOne({ email });

            if (user) {
                if (user.password === password) {
                    return NextResponse.json({
                        success: true,
                        status: 200,
                        message: "user fetched successfully",
                        data: user,
                    })
                } else {
                    return NextResponse.json({
                        success: false,
                        status: 404,
                        message: "wrong password",
                    })
                }
            } else {
                return NextResponse.json({
                    success: false,
                    status: 404,
                    message: "user not found please signup",
                })
            }

        } else {
            return NextResponse.json({
                success: false,
                status: 404,
                message: "email and password are required",
            })
        }
    } catch (error) {
        if (error) {
            const typedError = error as Error;
            return NextResponse.json({
                error: typedError.message,
                success: false,
                status: 400,
                message: "something went wrong",
            })
        }
    }
}