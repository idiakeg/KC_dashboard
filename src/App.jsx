import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import { Toaster } from "react-hot-toast";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<Home />} />
                <Route index path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route index element={<Customers />} />
                </Route>
            </Routes>
            <Toaster position="top-right" />
        </BrowserRouter>
    );
}

export default App;
