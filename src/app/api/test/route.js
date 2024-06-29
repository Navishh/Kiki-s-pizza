import mongoose from "mongoose";

export async function GET() {
  try {
    if (!process.env.MONGO_URL) {
      throw new Error("MONGO_URL environment variable not set.");
    }

    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    return new Response("Connection successful", { status: 200 });
  } catch (error) {
    console.error("Connection error:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
