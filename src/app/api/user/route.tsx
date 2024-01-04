import { NextResponse, NextRequest } from "next/server";

import UserModel from "@/models/users";
import { dbConnect } from "@/utils/dbConnect";

export const GET = async () => {
  await dbConnect()
  try {
    const users = await UserModel.find({});
    return NextResponse.json({
      data: users,
      message: "users fetched successfully",
      status: 200,
    });
  } catch (error) {
    if (error) {
      const typedError = error as Error;
      return NextResponse.json({
        error: typedError.message,
        message: "something went wrong",
        status: 400,
      });
    }
  }
};

export const POST = async (req: NextRequest) => {
  await dbConnect()
  const { name, email, password, confirmPassword } = await req.json()
  try {
    if (name && email && password && confirmPassword) {
      if (password && confirmPassword) {
        const existedUser = await UserModel.findOne({ email })
        if (!existedUser) {

          const saveUser = new UserModel({
            name, email, password
          })

          await saveUser.save();

          return NextResponse.json({
            data: {
              name,
              email
            },
            message: "User created successfully",
            status: 201,
          })

        } else {
          return NextResponse.json({
            message: "Email already exists please login",
            status: 404,
          });
        }
      } else {
        return NextResponse.json({
          message: "Password doesn't matched",
          status: 404,
        })
      }
    } else {
      return NextResponse.json({
        message: "All fields are required",
        status: 404,
      });
    }
  } catch (error) {
    if (error) {
      const typedError = error as Error;
      return NextResponse.json({
        error: typedError.message,
        message: "something went wrong",
        status: 400,
      });
    }
  }
}
