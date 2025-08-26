import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import News from "./pages/News";
import Explore from "./pages/Explore";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="news" element={<News />} />
                    <Route path="explore" element={<Explore />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
