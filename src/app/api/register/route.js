import mongoose from "mongoose";
import { User } from "../../models/User";

export async function POST(req) {
  try {
    const body = await req.json();
    
    if (!process.env.MONGO_URL) {
      throw new Error("MONGO_URL environment variable not set.");
    }

    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    const createdUser = await User.create(body);
    mongoose.disconnect(); // Disconnect after operation is complete
    return new Response(JSON.stringify(createdUser), { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  } finally {
    mongoose.disconnect(); // Ensure disconnection in case of error
  }
}
