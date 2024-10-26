import HomePage from "@/components/Home/Home";
import Navbar from "@/components/Home/Navbar";
import ThemeProvider from "@/components/ThemeProvider";

export default function Home() {
  return (
    <div className="">
      {/* <ThemeProvider> */}
      <HomePage />
      {/* </ThemeProvider> */}
    </div>
  );
}
