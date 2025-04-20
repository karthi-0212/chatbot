import { connectDB } from "@/lib/mongodb";
import Message from "@/models/message";

// GET method to fetch all the messages
export async function GET() {
    await connectDB();
    const messages = await Message.find().sort({ createdAt: 1 });
    return Response.json(messages);
}

// POST method to store the message
export async function POST(req) {
    await connectDB();
    const { text } = await req.json();

    if (!text) return Response.json({ error: "Message text is required" }, { status: 400 });

    const newMessage = await Message.create({ text });
    return Response.json(newMessage, { status: 201 });
}