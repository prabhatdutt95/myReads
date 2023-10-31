// Libraries
import { Routes, Route, useNavigate } from "react-router-dom";

// Styles
import "../css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Functional components
import Library from "./Library";
import Search from "./Search";

function App() {

  // Handling navigation
  const navigate = useNavigate();
  const handleNavigation = (route) => {
    navigate(route);
  };

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Library handleNavigation={() => handleNavigation("/search")} />
          }
        />
        <Route
          path="/search"
          element={<Search handleNavigation={() => handleNavigation("/")} />}
        />
      </Routes>
    </div>
  );
}

export default App;
