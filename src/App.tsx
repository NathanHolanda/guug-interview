import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AcceptedGuest from "./Screens/AcceptedGuest/AcceptedGuest";
import Main from "./Screens/Main/Main";
import RefusedGuest from "./Screens/RefusedGuest/RefusedGuest";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/refused" element={<RefusedGuest />} />
                <Route path="/accepted" element={<AcceptedGuest />} />
            </Routes>
        </Router>
    );
}
