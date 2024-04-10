import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import TaskManagement from "./pages/TaskManagement.jsx";
import CollaborationTools from "./pages/CollaborationTools.jsx";
import ProjectPlanning from "./pages/ProjectPlanning.jsx";
import TimeTracking from "./pages/TimeTracking.jsx";
import Integrations from "./pages/Integrations.jsx";
import Analytics from "./pages/Analytics.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/task-management" element={<TaskManagement />} />
        <Route path="/collaboration-tools" element={<CollaborationTools />} />
        <Route path="/project-planning" element={<ProjectPlanning />} />
        <Route path="/time-tracking" element={<TimeTracking />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </Router>
  );
}

export default App;
