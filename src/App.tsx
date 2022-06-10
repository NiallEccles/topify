import "./App.css";
import { Route, Routes } from "react-router-dom";
import Top from "./routes/top";
import Home from "./routes/home";
import Callback from "./routes/callback";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/t/:id" element={<Top />} />
      <Route path="/callback" element={<Callback />} />
    </Routes>
  );
}

export default App;
