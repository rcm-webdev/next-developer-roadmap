import ButtonBack from "@/component/ButtonBack";
import { SignOut } from "@/component/ButtonSignout";
import CreateBoard from "@/component/CreateBoardForm";
import { auth } from "@/auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";

async function getUser() {
  const session = await auth();
  await connectMongo();
  return await User.findById(session.user.id).populate("boards");
}

async function Dashboard() {
  const user = await getUser();

  return (
    <main className="bg-base-200 min-h-screen">
      {/* Header */}
      <section className="bg-base-100">
        <div className="px-5 py-5 max-w-5xl mx-auto flex justify-between">
          <ButtonBack />
          <SignOut />
        </div>
      </section>

      {/* Create Board */}
      <section className="max-w-5xl mx-auto px-5 py-12 space-y-12 ">
        <CreateBoard />
        <div>
          <h1 className="font-extrabold text-xl mb-4">
            {user.boards.length} Boards
          </h1>
          <ul className="space-y-4">
            {user.boards.map((board) => {
              return (
                <li key={board._id} className="bg-base-100 p-6 rounded-3xl">
                  {board.name}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Dashboard;
