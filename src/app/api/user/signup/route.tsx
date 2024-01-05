import { NextResponse, NextRequest } from "next/server";

import UserModel from "@/models/users";
import { dbConnect } from "@/utils/dbConnect";

export const GET = async () => {
  await dbConnect()
  try {
    const users = await UserModel.find({});
    return NextResponse.json({
      success: true,
      status: 200,
      message: "users fetched successfully",
      data: users,
    });
  } catch (error) {
    if (error) {
      const typedError = error as Error;
      return NextResponse.json({
        error: typedError.message,
        success: false,
        status: 400,
        message: "something went wrong",
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
        if (password === confirmPassword) {
          const existedUser = await UserModel.findOne({ email })
          if (!existedUser) {

            const saveUser = new UserModel({
              name, email, password
            })

            await saveUser.save();

            return NextResponse.json({
              success: true,
              status: 201,
              message: "User created successfully",
              data: {
                name,
                email
              },
            })

          } else {
            return NextResponse.json({
              success: false,
              status: 404,
              message: "Email already exists please login",
            });
          }
        } else {
          return NextResponse.json({
            success: false,
            status: 404,
            message: "Password doesn't matched",
          })
        }

      } else {
        return NextResponse.json({
          success: false,
          status: 404,
          message: "Password doesn't matched",
        })
      }
    } else {
      return NextResponse.json({
        success: false,
        status: 404,
        message: "All fields are required",
      });
    }
  } catch (error) {
    if (error) {
      const typedError = error as Error;
      return NextResponse.json({
        error: typedError.message,
        success: false,
        status: 400,
        message: "something went wrong",
      });
    }
  }
}
