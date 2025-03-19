import { redirect } from "next/navigation";
import connectMongo from "@/libs/mongoose";
import Boards from "@/models/Boards";
import { auth } from "@/auth";
import ButtonBack from "@/component/ButtonBack";

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

  return (
    <main className="bg-base-200 min-h-screen">
      {/* Header */}
      <section className="bg-base-100">
        <div className="px-5 py-5 max-w-5xl mx-auto flex justify-start">
          <ButtonBack />
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-5 py-12 space-y-12 ">
        <h1 className="font-extrabold text-xl mb-4">{board.name}</h1>
      </section>
    </main>
  );
}

export default FeebackBoard;
