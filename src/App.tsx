import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import HomePage from "./HomePage";
import StopPage from "./StopPage";
import "./App.css";

// Helper component for legacy route redirects
function LegacyStopRedirect() {
  const { id } = useParams<{ id: string }>();
  return <Navigate to={`/en/stop/${id}`} replace />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root route redirects to /en */}
        <Route path="/" element={<Navigate to="/en" replace />} />

        {/* Language-specific home routes */}
        <Route path="/:lang" element={<HomePage />} />

        {/* Language-specific stop routes */}
        <Route path="/:lang/stop/:id" element={<StopPage />} />

        {/* Legacy routes - redirect to prefixed versions */}
        <Route path="/stop/:id" element={<LegacyStopRedirect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
