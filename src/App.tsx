import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/components/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
