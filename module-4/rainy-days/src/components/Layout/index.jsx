import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex flex-col grow p-8 max-w-6xl mx-auto">
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}
