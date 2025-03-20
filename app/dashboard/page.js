import { SignOut } from "@/component/ButtonSignout";
import CreateBoard from "@/component/CreateBoardForm";
import { auth } from "@/auth";
import connectMongo from "@/libs/mongoose";
import User from "@/models/User";
import Link from "next/link";
import { redirect } from "next/navigation";

async function getUser() {
  const session = await auth();
  if (!session || !session.user) {
    redirect("/");
  }
  await connectMongo();
  return await User.findById(session.user.id).populate("boards");
}

async function Dashboard() {
  const user = await getUser();

  return (
    <main className="bg-base-200 min-h-screen">
      {/* Header */}
      <section className="bg-base-100">
        <div className="px-5 py-5 max-w-5xl mx-auto flex justify-end">
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
                <li key={board._id}>
                  <Link
                    href={`/dashboard/b/${board._id}`}
                    className="block bg-base-100 p-6 rounded-3xl hover:bg-neutral hover:text-neutral-content duration-200"
                  >
                    {board.name}
                  </Link>
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
