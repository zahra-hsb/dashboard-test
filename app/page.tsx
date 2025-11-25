import Login from "@/components/pages/loginComponents/Login";
import ToggleDarkModeBtn from "@/components/shared/ToggleDarkModeBtn";

export default function Home() {
  return (
    <section className="py-20 p-5 sm:p-20">
      <Login />
      <ToggleDarkModeBtn />
    </section>
  );
}
