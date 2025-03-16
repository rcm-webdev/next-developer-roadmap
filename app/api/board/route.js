const { NextResponse } = require("next/server");
import { auth } from "@/auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import Boards from "@/models/Boards";

export async function POST(req) {
  try {
    const body = await req.json();
    if (!body.name) {
      return NextResponse.json(
        { error: "Boardname is required" },
        { status: 400 }
      );
    }
    const session = await auth();

    if (!session) {
      return NextResponse.json(
        {
          error: "Not authorized",
        },
        { status: 401 }
      );
    }
    await connectMongo();

    const user = await User.findById(session.user.id);

    const board = await Boards.create({
      userId: user._id,
      name: body.name,
    });

    user.boards.push(board._id);
    await user.save();

    return NextResponse.json(board);
  } catch (e) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
