import "./App.css";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import UsersPage from "./components/Users.page.js";
import RQUsers from "./components/RQUsers.page.js";
import HomePage from "./components/Home.page.js";
import RQUser from "./components/RQUser.page.js";
import { QueryClientProvider, QueryClient } from "react-query";
import ParallelQueriesPage from "./components/ParallelQueries.page";
import DependentQueries from "./components/DependentQueries";
import { RQSuperHeroesPage } from "./components/RQSuperHeroes.page";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/user">Users</Link>
                            </li>
                            <li>
                                <Link to="/rq-user">RQ Users</Link>
                            </li>
                            <li>
                                <Link to="/rq-parallel">RQ ParallelQueries</Link>
                            </li>
                            <li>
                                <Link to="/rq-dependent">RQ DependentQueries</Link>
                            </li>
                            <li>
                                <Link to="/rq-super-heroes">RQ Super Heroes</Link>
                            </li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/rq-super-heroes" element={<RQSuperHeroesPage />}></Route>
                        <Route path="/rq-dependent" element={<DependentQueries />}></Route>
                        <Route path="/rq-parallel" element={<ParallelQueriesPage />}></Route>
                        <Route path="/rq-user/:userId" element={<RQUser />}></Route>
                        <Route path="/user" element={<UsersPage />}></Route>
                        <Route path="/rq-user" element={<RQUsers />}></Route>
                        <Route path="/" element={<HomePage />}></Route>
                    </Routes>
                </div>
            </Router>
        </QueryClientProvider>
    );
}

export default App;
