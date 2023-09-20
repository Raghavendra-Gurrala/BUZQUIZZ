import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Signup from "./Screens/Signup";
import Login from "./Screens/Login";
import Sidebar from "./Components/Sidebar";
import App from "./App";
import Protectedroutes from "./protectedroutes";
import Dashboard from "./Screens/Pages/Dashboard";
import Myaccount from "./Screens/Pages/Myaccount";
import Quiz from "./Screens/Pages/Quizpage";
import Scoreboard from "./Screens/Pages/Scoreboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Protectedroutes />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/myaccount" element={<Myaccount />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/scoreboard" element={<Scoreboard />} />
      </Route>
    </Route>
  )
);

export default router;
