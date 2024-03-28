import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import ResultPage from "./pages/result";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

function HomeView() {
  return (
    <>
      <main className="relative flex flex-col items-center justify-center gap-4 bg-primary min-h-dvh auto-container">
        <h1 className="text-3xl font-bold">Hello Tailwind</h1>
        <p>Simple boilerplate of Tailwind React with vite</p>
        <Link
          className="px-4 py-1 font-bold transition-all ease-in-out bg-white rounded-full shadow-md text-primary hover:scale-105 hover:shadow-white/20"
          to={"/result"}
        >
          See result
        </Link>
        <footer className="fixed bottom-0 flex items-center justify-center w-full px-16 text-center border-t bg-white/5 backdrop-blur-sm border-white/10 min-h-10 auto-container">
          <p className="text-xs">Light of Fire 🔥 - Created by Koh Nathan</p>
        </footer>
      </main>
    </>
  );
}
