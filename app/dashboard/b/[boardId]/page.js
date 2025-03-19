import { redirect } from "next/navigation";
import connectMongo from "@/libs/mongoose";
import Boards from "@/models/Boards";
import { auth } from "@/auth";

const getBoard = async (boardId) => {
  const session = await auth();

  await connectMongo();
  const board = await Boards.findOne({
    _id: boardId,
    userId: session?.user?.id,
  });

  if (!board) {
    redirect("/dashboard");
  }

  return board;
};

async function FeebackBoard({ params }) {
  const { boardId } = await params;

  const board = await getBoard(boardId);

  return <div>{board.name}</div>;
}

export default FeebackBoard;
