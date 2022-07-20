import "./App.css";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import SuperHeroesPage from "./components/SuperHeroes.page.js";
import RQSuperHeroesPage from "./components/RQSuperHeroes.page.js";
import HomePage from "./components/Home.page.js";

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/super-heroes">Traditional Super Heroes</Link>
                        </li>
                        <li>
                            <Link to="/rq-super-heroes">RQ Super Heroes</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/super-heroes" element={<SuperHeroesPage />}></Route>
                    <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />}></Route>
                    <Route path="/" element={<HomePage />}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
