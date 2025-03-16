import { SignOut } from "@/component/ButtonSignout";
import CreateBoard from "@/component/CreateBoard";

function Dashboard() {
  return (
    <main className="bg-base-200 min-h-screen">
      {/* Header */}
      <section className="bg-base-100">
        <div className="px-5 py-5 max-w-5xl mx-auto flex justify-end">
          <SignOut />
        </div>
      </section>

      {/* Create Board */}
      <section className="max-w-5xl mx-auto px-5 py-12 ">
        <CreateBoard />
      </section>
    </main>
  );
}

export default Dashboard;
