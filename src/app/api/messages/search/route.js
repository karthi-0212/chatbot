import { connectDB } from "@/lib/mongodb";
import Message from "@/models/message";

export async function GET(req) {
    await connectDB();

    const searchParams = new URL(req.url).searchParams;
    const q = searchParams.get("q") || "";

    const results = await Message.find({
        text: { $regex: q, $options: "i" },
    }).sort({ createdAt: 1 });

    return Response.json(results);
}
