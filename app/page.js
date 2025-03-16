import Footer from "@/component/Footer";
import Hero from "@/component/Hero";
import Toast from "@/component/Toast";
import { auth } from "@/auth";

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <Hero />
      <Footer />
      <Toast />
    </div>
  );
}
