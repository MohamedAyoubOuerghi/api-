import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import UsersList from "./components/UsersList/UsersList";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/userslist">
          <button>Users List </button>
        </Link>
        <Link to="/">
          <button>Home </button>
        </Link>

        <Routes>
          <Route path="/userslist" element={<UsersList />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
