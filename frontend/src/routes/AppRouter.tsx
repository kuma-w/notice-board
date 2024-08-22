import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "../pages/Home";
import Write from "../pages/Write";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/board" />} />
        <Route path="/board" element={<Home />} />
        <Route path="/board/write" element={<Write />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
