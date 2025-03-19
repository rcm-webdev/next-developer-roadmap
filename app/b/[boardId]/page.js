import { redirect } from "next/navigation";
import connectMongo from "@/libs/mongoose";
import Boards from "@/models/Boards";
import ButtonBack from "@/component/ButtonBack";

const getBoard = async (boardId) => {
  await connectMongo();
  const board = await Boards.findById(boardId);

  if (!board) {
    redirect("/");
  }

  return board;
};

async function PublicFeebackBoard({ params }) {
  const { boardId } = await params;

  const board = await getBoard(boardId);

  return (
    <main className="bg-base-200 min-h-screen">
      {/* Header */}
      <section className="bg-base-100">
        <div className="px-5 py-5 max-w-5xl mx-auto flex justify-start">
          <ButtonBack />
        </div>
      </section>
      {board.name}(public)
    </main>
  );
}

export default PublicFeebackBoard;
