import connectToMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";

export async function GET(req){
    try {
        await connectToMongoDB();
    } catch (error) {
        return NextResponse.json({ error: "Failed to connect to MongoDB" }, { status: 500 });
    }
}
export { normalReq };