import "./App.css";

import Container from "./components/Container.tsx";
import Navbar from "./components/Navbar.tsx";

function App() {
    return (
        <div className="main">
            <Navbar />
            <Container />
        </div>
    );
}

export default App;
