import { Route, Routes, useLocation } from "react-router-dom";
import ProtectedRoute from "./components/protectedRoute";
import Home from "./pages/home";
import Login from "./pages/login";

function App() {
  const location = useLocation();

  return (
    <>
      <main className="flex items-center justify-center h-screen">
        <Routes location={location} key={location.pathname}>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
