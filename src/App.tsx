import { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import useAppDispatch from "./hooks/useAppDispatch";
import AcceptedGuests from "./pages/AcceptedGuests";
import Main from "./pages/Main";
import RefusedGuests from "./pages/RefusedGuests";
import { setInitialAcceptedAndRefused } from "./store/actions/setInitialAcceptedAndRefused";

export default function App() {
    const dispatch = useAppDispatch();

    let isFirsRendering = true;

    useEffect(() => {
        if (isFirsRendering) dispatch(setInitialAcceptedAndRefused());

        isFirsRendering = false;
    }, [dispatch]);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/refused" element={<RefusedGuests />} />
                <Route path="/accepted" element={<AcceptedGuests />} />
            </Routes>
        </Router>
    );
}
