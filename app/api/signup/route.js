import connectToMongoDB from "@/libs/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        await connectToMongoDB();
        const { name, email, role, password } = await req.json();
        const user = await User.create({ name, email, role, password });
        return NextResponse.json({ user }, { status: 201 });
    } catch (error) {
        console.error('Error in POST request:', error);
        return new NextResponse('Internal Server Error', { status: 500 });
    }

}