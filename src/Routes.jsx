import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Option2Advance = React.lazy(() => import("pages/Option2Advance"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Option2Advance />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
