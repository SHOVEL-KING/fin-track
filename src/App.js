import {Routes, Route} from "react-router-dom";
import HomePage from "./HomePage";
import Login from "./Login";
import SignUp from "./SignUp"

function App() {
    return (
        <Routes>
            <Route index element={<HomePage />} />
            <Route path={"signup"} element={<SignUp />}></Route>
            <Route path={"login"} element={<Login />}></Route>
        </Routes>
    );
}

export default App;
